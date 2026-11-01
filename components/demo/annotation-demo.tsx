"use client";

import {
  CopyPlus,
  MousePointer2,
  MoveUpRight,
  Redo2,
  RotateCcw,
  Slash,
  Square,
  Trash2,
  Undo2,
} from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

import { Ink } from "@/components/demo/ink";
import {
  SAMPLE,
  UNITS_PER_MM,
  VIEW,
  add,
  angleDeg,
  dist,
  formatMm,
  handlesOf,
  initialObjects,
  lengthMm,
  markerLabel,
  markerRadius,
  moveHandle,
  pick,
  scale,
  selectionFrame,
  snapAngle,
  snapPoints,
  snapTo,
  sub,
  translate,
  type DimObj,
  type HandleId,
  type Obj,
  type Pt,
} from "@/components/demo/model";
import { cn } from "@/lib/utils";
import type { Copy, DemoColorId, DemoToolId } from "@/types";

/** The six inks the brand shows marks in, in the app palette's order. */
const INKS: { id: DemoColorId; hex: string }[] = [
  { id: "red", hex: "#E53335" },
  { id: "yellow", hex: "#FFD400" },
  { id: "green", hex: "#23A55A" },
  { id: "cyan", hex: "#35E2FF" },
  { id: "purple", hex: "#8B5CF6" }, // taste-skill-ignore: the app's own purple ink
  { id: "magenta", hex: "#FF4FD8" },
];

/** Tool keys as bound in Core/CommandRegistry.cs. */
const TOOL_KEYS: Record<DemoToolId, string> = {
  select: "V",
  arrow: "A",
  line: "L",
  rectangle: "R",
  marker: "N",
  dimension: "D",
};

const TOOLS: DemoToolId[] = ["select", "arrow", "line", "rectangle", "marker", "dimension"];

/* Selection chrome, from UI/AnnotationCanvas.cs. Mark Orange is the brand's
   "this handle is the active one" signal and appears nowhere else. */
const SELECTION = "#3B82F6";
const ROTATE_FILL = "#8AB4F8";
const HOVER_GLOW = "rgba(158,197,255,0.24)";
const HOVER_EDGE = "rgba(207,228,255,0.88)";
const SNAP = "#3DF5C8";
const ACTIVE = "#F5842B";

const MIN_WIDTH = 1;
const MAX_WIDTH = 20;

type Gesture =
  | { kind: "none" }
  | { kind: "line"; a: Pt; head: boolean; last: Pt; typed: string }
  | { kind: "rect"; p0: Pt; last: Pt; radius: number }
  | { kind: "move"; origin: Obj; start: Pt; base: Obj[]; before: Obj[]; moved: boolean }
  | { kind: "handle"; id: string; handle: HandleId; before: Obj[]; moved: boolean };

interface Doc {
  objects: Obj[];
  past: Obj[][];
  future: Obj[][];
}

function ToolIcon({ tool }: { tool: DemoToolId }) {
  const cls = "size-[18px]";
  switch (tool) {
    case "select":
      return <MousePointer2 aria-hidden="true" className={cls} />;
    case "arrow":
      return <MoveUpRight aria-hidden="true" className={cls} />;
    case "line":
      return <Slash aria-hidden="true" className={cls} />;
    case "rectangle":
      return <Square aria-hidden="true" className={cls} />;
    case "marker":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={cls}>
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M11 9l2-1.5V16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "dimension":
      return (
        <svg aria-hidden="true" viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M3 7v10M21 7v10M6 12h12M8 9.5L5.5 12 8 14.5M16 9.5l2.5 2.5-2.5 2.5" />
        </svg>
      );
  }
}

function PanelButton({
  label,
  pressed,
  onClick,
  children,
  className,
  disabled,
}: {
  label: string;
  pressed?: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      aria-pressed={pressed}
      disabled={disabled}
      onClick={onClick}
      className={cn("demo-btn", className)}
    >
      {children}
    </button>
  );
}

export function AnnotationDemo({ copy, lang }: { copy: Copy["demo"]; lang: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const idSeq = useRef(0);
  const placeSeq = useRef(0);
  const gesture = useRef<Gesture>({ kind: "none" });
  const lastPointer = useRef<Pt | null>(null);
  const helpId = useId();

  const [doc, setDoc] = useState<Doc>(() => ({ objects: initialObjects(), past: [], future: [] }));
  const [selectedId, setSelectedId] = useState<string | null>("s3");
  const [activeHandle, setActiveHandle] = useState<HandleId | null>("b");
  const [tool, setTool] = useState<DemoToolId>("arrow");
  const [pen, setPen] = useState({ color: "#E53335", width: 4 });
  const [markerNext, setMarkerNext] = useState(2);
  const [markerLetters, setMarkerLetters] = useState(false);
  const [draft, setDraft] = useState<Obj | null>(null);
  const [dimStage, setDimStage] = useState<0 | 1 | 2>(0);
  const [hoverId, setHoverId] = useState<string | null>(null);
  const [ghost, setGhost] = useState<Pt | null>(null);
  const [snapMark, setSnapMark] = useState<Pt | null>(null);
  const [readout, setReadout] = useState<{ p: Pt; text: string } | null>(null);
  const [unit, setUnit] = useState(1);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const objects = doc.objects;
  const selected = objects.find((o) => o.id === selectedId) ?? null;
  const mm = (v: number) => formatMm(v, lang);

  // View units per CSS pixel, so handles and hit areas keep their screen size.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    // The stage may crop the view on narrow screens (slice), so read the real
    // scale from the screen transform rather than from the width alone.
    const update = () => {
      const ctm = svg.getScreenCTM();
      setUnit(ctm && ctm.a > 0 ? 1 / ctm.a : VIEW.width / Math.max(1, svg.clientWidth));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  const nextId = () => `o${(idSeq.current += 1)}`;

  const describe = (o: Obj): string => {
    switch (o.kind) {
      case "line":
        return `${o.head ? copy.tools.arrow : copy.tools.line} · ${mm(lengthMm(o.a, o.b))} mm`;
      case "rect":
        return `${copy.tools.rectangle} · ${mm(o.w / UNITS_PER_MM)} × ${mm(o.h / UNITS_PER_MM)} mm`;
      case "marker":
        return `${copy.tools.marker} ${markerLabel(o.n, o.letters)}`;
      case "dim":
        return `${copy.tools.dimension} · ${mm(lengthMm(o.a, o.b))} mm`;
    }
  };

  const select = (id: string | null, handle: HandleId | null = null) => {
    setSelectedId(id);
    setActiveHandle(handle);
    const o = id ? doc.objects.find((x) => x.id === id) : null;
    if (o) setAnnouncement(`${describe(o)}, ${copy.selected}`);
  };

  /** Replace the document and record the previous state for undo. */
  const commit = (next: Obj[], before: Obj[] = objects) => {
    setDoc((d) => ({ objects: next, past: [...d.past, before].slice(-60), future: [] }));
  };

  const setLive = (next: Obj[]) => setDoc((d) => ({ ...d, objects: next }));

  const toView = (clientX: number, clientY: number): Pt => {
    const svg = svgRef.current;
    const ctm = svg?.getScreenCTM();
    if (!svg || !ctm) return { x: 0, y: 0 };
    const pt = new DOMPoint(clientX, clientY).matrixTransform(ctm.inverse());
    return { x: pt.x, y: pt.y };
  };

  const snapped = (p: Pt, alt: boolean, exceptId: string | null) => {
    if (alt) {
      setSnapMark(null);
      return p;
    }
    const hit = snapTo(p, snapPoints(objects, exceptId), 10 * unit);
    setSnapMark(hit);
    return hit ?? p;
  };

  const handleAt = (p: Pt) => {
    if (!selected) return null;
    const tol = 9 * unit;
    for (const h of handlesOf(selected, unit)) if (dist(h.p, p) <= tol) return h.id;
    return null;
  };

  /* ------------------------------------------------------------ pointer */

  const lineEnd = (g: Extract<Gesture, { kind: "line" }>, raw: Pt, shift: boolean, alt: boolean) => {
    let b = snapped(raw, alt, null);
    if (shift) b = snapAngle(g.a, b, 5);
    const typedMm = parseFloat(g.typed.replace(",", "."));
    if (g.typed && Number.isFinite(typedMm) && typedMm > 0) {
      const v = sub(b, g.a);
      const l = Math.hypot(v.x, v.y) || 1;
      b = add(g.a, scale(v, (typedMm * UNITS_PER_MM) / l));
    }
    return b;
  };

  const lineReadout = (a: Pt, b: Pt) =>
    `${mm(lengthMm(a, b))} mm · ${Math.round(angleDeg(a, b))}°`;

  const rectFrom = (p0: Pt, p1: Pt, shift: boolean, ctrl: boolean, radius: number): Obj => {
    let w = p1.x - p0.x;
    let h = p1.y - p0.y;
    if (shift) {
      const m = Math.max(Math.abs(w), Math.abs(h));
      w = Math.sign(w || 1) * m;
      h = Math.sign(h || 1) * m;
    }
    return {
      id: "draft",
      kind: "rect",
      cx: p0.x + w / 2,
      cy: p0.y + h / 2,
      w: Math.abs(w),
      h: Math.abs(h),
      angle: 0,
      radius,
      fill: ctrl,
      color: pen.color,
      width: pen.width,
    };
  };

  const onPointerDown = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (e.button !== 0) return;
    const p = toView(e.clientX, e.clientY);
    lastPointer.current = p;
    e.currentTarget.setPointerCapture(e.pointerId);

    // A visible handle wins over every tool, as in the app.
    const h = handleAt(p);
    if (selected && h) {
      gesture.current = { kind: "handle", id: selected.id, handle: h, before: objects, moved: false };
      setActiveHandle(h);
      return;
    }

    if (tool === "select") {
      const hit = pick(objects, p, 8 * unit);
      if (!hit) {
        select(null);
        return;
      }
      if (e.altKey) {
        // Alt+click = style picker: the pen takes the object's ink and width.
        setPen({ color: hit.color, width: hit.width });
        select(hit.id);
        return;
      }
      if (e.ctrlKey || e.metaKey) {
        // Ctrl+drag = copy: the copy moves, the original stays put.
        const copyObj = { ...hit, id: nextId() } as Obj;
        const base = [...objects, copyObj];
        setLive(base);
        gesture.current = { kind: "move", origin: copyObj, start: p, base, before: objects, moved: true };
        setSelectedId(copyObj.id);
        setActiveHandle(null);
        return;
      }
      gesture.current = { kind: "move", origin: hit, start: p, base: objects, before: objects, moved: false };
      select(hit.id);
      return;
    }

    if (tool === "arrow" || tool === "line") {
      const a = snapped(p, e.altKey, null);
      gesture.current = { kind: "line", a, head: tool === "arrow", last: p, typed: "" };
      setDraft({ id: "draft", kind: "line", a, b: a, head: tool === "arrow", color: pen.color, width: pen.width });
      return;
    }

    if (tool === "rectangle") {
      gesture.current = { kind: "rect", p0: p, last: p, radius: 0 };
      setDraft(rectFrom(p, p, false, false, 0));
      return;
    }

    if (tool === "marker") {
      const m: Obj = { id: nextId(), kind: "marker", x: p.x, y: p.y, n: markerNext, letters: markerLetters, color: pen.color, width: pen.width };
      commit([...objects, m]);
      setMarkerNext((n) => n + 1);
      setSelectedId(m.id);
      setActiveHandle(null);
      return;
    }

    // Dimension: first click, second click, then the offset is placed.
    const q = snapped(p, e.altKey, null);
    if (dimStage === 0) {
      setDraft({ id: "draft", kind: "dim", a: q, b: q, offset: 0, color: pen.color, width: Math.min(pen.width, 3) });
      setDimStage(1);
    } else if (dimStage === 1 && draft?.kind === "dim") {
      const b = e.shiftKey ? snapAngle(draft.a, q, 5) : q;
      if (dist(draft.a, b) < 6) return;
      setDraft({ ...draft, b });
      setDimStage(2);
    } else if (dimStage === 2 && draft?.kind === "dim") {
      const d: Obj = { ...draft, id: nextId() };
      commit([...objects, d]);
      setDraft(null);
      setDimStage(0);
      setReadout(null);
      setSelectedId(d.id);
      setActiveHandle("off");
    }
  };

  const onPointerMove = (e: ReactPointerEvent<SVGSVGElement>) => {
    const p = toView(e.clientX, e.clientY);
    lastPointer.current = p;
    const g = gesture.current;

    if (g.kind === "line") {
      g.last = p;
      const b = lineEnd(g, p, e.shiftKey, e.altKey);
      setDraft({ id: "draft", kind: "line", a: g.a, b, head: g.head, color: pen.color, width: pen.width });
      setReadout({ p, text: lineReadout(g.a, b) });
      return;
    }
    if (g.kind === "rect") {
      g.last = p;
      const r = rectFrom(g.p0, p, e.shiftKey, e.ctrlKey, g.radius);
      setDraft(r);
      if (r.kind === "rect") setReadout({ p, text: `${mm(r.w / UNITS_PER_MM)} × ${mm(r.h / UNITS_PER_MM)} mm` });
      return;
    }
    if (g.kind === "move") {
      const d = sub(p, g.start);
      if (!g.moved && Math.hypot(d.x, d.y) < 2 * unit) return;
      g.moved = true;
      const moved = translate(g.origin, d);
      setLive(g.base.map((o) => (o.id === g.origin.id ? moved : o)));
      return;
    }
    if (g.kind === "handle") {
      g.moved = true;
      const src = g.before.find((o) => o.id === g.id);
      if (!src) return;
      const endpoint = g.handle === "a" || g.handle === "b";
      const target = endpoint ? snapped(p, e.altKey, g.id) : p;
      const next = moveHandle(src, g.handle, target, e.shiftKey);
      setLive(g.before.map((o) => (o.id === g.id ? next : o)));
      if (next.kind === "line" || (next.kind === "dim" && endpoint)) setReadout({ p, text: lineReadout(next.a, next.b) });
      else if (next.kind === "rect" && g.handle === "rot") setReadout({ p, text: `${Math.round(-next.angle)}°` });
      else if (next.kind === "rect") setReadout({ p, text: `${mm(next.w / UNITS_PER_MM)} × ${mm(next.h / UNITS_PER_MM)} mm` });
      return;
    }

    // No gesture: dimension placement, hover halo, marker ghost.
    if (tool === "dimension" && draft?.kind === "dim") {
      if (dimStage === 1) {
        let b = snapped(p, e.altKey, null);
        if (e.shiftKey) b = snapAngle(draft.a, b, 5);
        setDraft({ ...draft, b });
        setReadout({ p, text: `${mm(lengthMm(draft.a, b))} mm` });
      } else if (dimStage === 2) {
        setDraft(moveHandle(draft, "off", p, false) as DimObj);
      }
      return;
    }
    setHoverId(tool === "select" ? (pick(objects, p, 8 * unit)?.id ?? null) : null);
    setGhost(tool === "marker" ? p : null);
  };

  const onPointerUp = () => {
    const g = gesture.current;
    gesture.current = { kind: "none" };
    setSnapMark(null);
    if (!(tool === "dimension" && dimStage > 0)) setReadout(null);

    if (g.kind === "line" && draft?.kind === "line") {
      if (dist(draft.a, draft.b) > 4) {
        const o: Obj = { ...draft, id: nextId() };
        commit([...objects, o]);
        setSelectedId(o.id);
        setActiveHandle("b");
        setAnnouncement(`${describe(o)}, ${copy.selected}`);
      }
      setDraft(null);
    } else if (g.kind === "rect" && draft?.kind === "rect") {
      if (draft.w > 4 && draft.h > 4) {
        const o: Obj = { ...draft, id: nextId() };
        commit([...objects, o]);
        setSelectedId(o.id);
        setActiveHandle("se");
        setAnnouncement(`${describe(o)}, ${copy.selected}`);
      }
      setDraft(null);
    } else if ((g.kind === "move" || g.kind === "handle") && g.moved) {
      commit(objects, g.before);
    }
  };

  const onPointerLeave = () => {
    setHoverId(null);
    setGhost(null);
  };

  const onContextMenu = (e: ReactMouseEvent) => {
    if (tool !== "marker") return;
    // Right-click = numbers or letters, as on the app's marker button.
    e.preventDefault();
    setMarkerLetters((v) => !v);
  };

  // Wheel needs a non-passive listener to keep the page from scrolling, and
  // only claims the wheel while it means something: the next marker number,
  // or the corner radius of the rectangle being drawn.
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const onWheel = (e: WheelEvent) => {
      const g = gesture.current;
      if (g.kind === "rect") {
        e.preventDefault();
        g.radius = Math.max(0, g.radius + (e.deltaY < 0 ? 3 : -3));
        setDraft(rectFrom(g.p0, g.last, e.shiftKey, e.ctrlKey, g.radius));
        return;
      }
      if (tool === "marker") {
        e.preventDefault();
        setMarkerNext((n) => Math.max(1, n + (e.deltaY < 0 ? 1 : -1)));
      }
    };
    svg.addEventListener("wheel", onWheel, { passive: false });
    return () => svg.removeEventListener("wheel", onWheel);
  });

  /* ------------------------------------------------------------ commands */

  const updateSelected = (fn: (o: Obj) => Obj) => {
    if (!selected) return;
    commit(objects.map((o) => (o.id === selected.id ? fn(o) : o)));
  };

  const setColor = (hex: string) => {
    setPen((p) => ({ ...p, color: hex }));
    updateSelected((o) => ({ ...o, color: hex }));
  };

  const changeWidth = (delta: number) => {
    const clamp = (w: number) => Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, w + delta));
    setPen((p) => ({ ...p, width: clamp(p.width) }));
    updateSelected((o) => ({ ...o, width: clamp(o.width) }));
  };

  const undo = () => {
    setDoc((d) => {
      if (!d.past.length) return d;
      return { objects: d.past[d.past.length - 1], past: d.past.slice(0, -1), future: [d.objects, ...d.future] };
    });
  };

  const redo = () => {
    setDoc((d) => {
      if (!d.future.length) return d;
      return { objects: d.future[0], past: [...d.past, d.objects], future: d.future.slice(1) };
    });
  };

  const duplicate = () => {
    if (!selected) return;
    const copyObj = translate({ ...selected, id: nextId() } as Obj, { x: 14, y: 14 });
    commit([...objects, copyObj]);
    setSelectedId(copyObj.id);
    setActiveHandle(null);
  };

  const remove = () => {
    if (!selected) return;
    commit(objects.filter((o) => o.id !== selected.id));
    setSelectedId(null);
    setActiveHandle(null);
  };

  const reset = () => {
    setDoc({ objects: initialObjects(), past: [], future: [] });
    setSelectedId("s3");
    setActiveHandle("b");
    setMarkerNext(2);
    setMarkerLetters(false);
    setDraft(null);
    setDimStage(0);
  };

  const chooseTool = (t: DemoToolId) => {
    setTool(t);
    setDraft(null);
    setDimStage(0);
    setReadout(null);
    setGhost(null);
  };

  /** Enter: the armed tool places an object without a pointer. */
  const placeWithKeyboard = () => {
    if (tool === "select") {
      if (!objects.length) return;
      const i = selected ? objects.findIndex((o) => o.id === selected.id) : -1;
      select(objects[(i + 1) % objects.length].id);
      return;
    }
    const k = (placeSeq.current += 1) % 5;
    const c = { x: 330 + k * 16, y: 200 + k * 16 };
    let o: Obj;
    if (tool === "arrow" || tool === "line") {
      o = { id: nextId(), kind: "line", a: { x: c.x - 80, y: c.y + 60 }, b: { x: c.x + 40, y: c.y - 30 }, head: tool === "arrow", color: pen.color, width: pen.width };
    } else if (tool === "rectangle") {
      o = { id: nextId(), kind: "rect", cx: c.x, cy: c.y, w: 130, h: 80, angle: 0, radius: 0, fill: false, color: pen.color, width: pen.width };
    } else if (tool === "marker") {
      o = { id: nextId(), kind: "marker", x: c.x, y: c.y, n: markerNext, letters: markerLetters, color: pen.color, width: pen.width };
      setMarkerNext((n) => n + 1);
    } else {
      o = { id: nextId(), kind: "dim", a: { x: c.x - 90, y: c.y + 110 }, b: { x: c.x + 90, y: c.y + 110 }, offset: 34, color: pen.color, width: Math.min(pen.width, 3) };
    }
    commit([...objects, o]);
    setSelectedId(o.id);
    setActiveHandle(null);
    setAnnouncement(`${describe(o)}, ${copy.selected}`);
  };

  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const g = gesture.current;
    const mod = e.ctrlKey || e.metaKey;

    // Digits while drawing a line set its length in mm, as typed in the app.
    if (g.kind === "line" && /^[0-9.,]$/.test(e.key)) {
      e.preventDefault();
      g.typed += e.key;
      const b = lineEnd(g, g.last, e.shiftKey, e.altKey);
      setDraft({ id: "draft", kind: "line", a: g.a, b, head: g.head, color: pen.color, width: pen.width });
      setReadout({ p: g.last, text: lineReadout(g.a, b) });
      return;
    }

    if (mod) {
      const key = e.key.toLowerCase();
      if (key === "z" && !e.shiftKey) undo();
      else if (key === "y" || (key === "z" && e.shiftKey)) redo();
      else if (key === "d") duplicate();
      else return;
      e.preventDefault();
      return;
    }
    if (e.altKey) return;

    const toolKey = TOOLS.find((t) => TOOL_KEYS[t].toLowerCase() === e.key.toLowerCase());
    if (toolKey) {
      e.preventDefault();
      chooseTool(toolKey);
      return;
    }

    const step = e.shiftKey ? 10 : 1;
    const nudge: Record<string, Pt> = {
      ArrowLeft: { x: -step, y: 0 },
      ArrowRight: { x: step, y: 0 },
      ArrowUp: { x: 0, y: -step },
      ArrowDown: { x: 0, y: step },
    };
    if (nudge[e.key] && selected) {
      e.preventDefault();
      updateSelected((o) => translate(o, nudge[e.key]));
      return;
    }

    switch (e.key) {
      case "Enter":
        e.preventDefault();
        placeWithKeyboard();
        break;
      case "Escape":
        if (draft || selected) e.preventDefault();
        setDraft(null);
        setDimStage(0);
        setReadout(null);
        select(null);
        break;
      case "Delete":
      case "Backspace":
        if (selected) {
          e.preventDefault();
          remove();
        }
        break;
      case "+":
      case "=":
        e.preventDefault();
        changeWidth(1);
        break;
      case "-":
      case "_":
        e.preventDefault();
        changeWidth(-1);
        break;
    }
  };

  /* ------------------------------------------------------------ render */

  const hintKey = tool === "arrow" || tool === "line" ? "line" : tool;
  const status = keyboardFocus ? copy.keyboardHelp : copy.hints[hintKey];
  const hovered = hoverId && hoverId !== selectedId ? objects.find((o) => o.id === hoverId) : null;
  const labelFor = (o: Obj) => (o.kind === "dim" ? `${mm(lengthMm(o.a, o.b))} mm` : undefined);
  const frame = selected ? selectionFrame(selected, unit) : null;
  const handles = selected ? handlesOf(selected, unit) : [];
  const rotHandle = handles.find((h) => h.id === "rot");

  return (
    <div className="demo" data-ui>
      <div className="demo-panel" role="toolbar" aria-label={copy.panelLabel}>
        <div className="demo-group" role="group" aria-label={copy.toolsLabel}>
          {TOOLS.map((t) => (
            <PanelButton
              key={t}
              label={`${copy.tools[t]} (${TOOL_KEYS[t]})`}
              pressed={tool === t}
              onClick={() => chooseTool(t)}
              className="demo-tool"
            >
              <ToolIcon tool={t} />
            </PanelButton>
          ))}
        </div>
        <div className="demo-group" role="group" aria-label={copy.color}>
          {INKS.map((ink) => (
            <PanelButton
              key={ink.id}
              label={copy.colors[ink.id]}
              pressed={pen.color === ink.hex}
              onClick={() => setColor(ink.hex)}
              className="demo-swatch"
            >
              <span aria-hidden="true" style={{ backgroundColor: ink.hex }} />
            </PanelButton>
          ))}
        </div>
        <div className="demo-group" role="group" aria-label={copy.width}>
          <PanelButton label={copy.thinner} onClick={() => changeWidth(-1)} disabled={pen.width <= MIN_WIDTH}>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4"><path d="M5 12h14" stroke="currentColor" strokeWidth="2" /></svg>
          </PanelButton>
          <span className="demo-width" aria-live="polite">
            <span className="sr-only">{copy.width} </span>
            {pen.width} px
          </span>
          <PanelButton label={copy.thicker} onClick={() => changeWidth(1)} disabled={pen.width >= MAX_WIDTH}>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4"><path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="2" /></svg>
          </PanelButton>
        </div>
      </div>

      <div
        className="demo-stage"
        tabIndex={0}
        role="application"
        aria-label={copy.canvasLabel}
        aria-describedby={helpId}
        onKeyDown={onKeyDown}
        onFocus={(e) => setKeyboardFocus(e.currentTarget.matches(":focus-visible"))}
        onBlur={() => setKeyboardFocus(false)}
      >
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          className={cn("demo-svg", tool === "select" ? (hoverId ? "is-move" : "") : "is-draw")}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerLeave}
          onContextMenu={onContextMenu}
        >
          <rect width={VIEW.width} height={VIEW.height} fill="#12151D" />

          {/* The synthetic sample: a plate with two bores and a slot. */}
          <g fill="none" stroke="#5B6273" strokeWidth={2}>
            <rect x={SAMPLE.plate.x} y={SAMPLE.plate.y} width={SAMPLE.plate.w} height={SAMPLE.plate.h} rx={SAMPLE.plate.r} />
            {SAMPLE.holes.map((h) => (
              <circle key={h.x} cx={h.x} cy={h.y} r={h.r} />
            ))}
            <rect x={SAMPLE.slot.x} y={SAMPLE.slot.y} width={SAMPLE.slot.w} height={SAMPLE.slot.h} rx={SAMPLE.slot.h / 2} />
          </g>
          <g stroke="#3E4453" strokeWidth={1.5} strokeDasharray="12 4 3 4" fill="none">
            <path d={`M130 230H550M235 180V280M425 180V280`} />
          </g>

          {objects.map((o) => (
            <Ink key={o.id} o={o} label={labelFor(o)} />
          ))}

          {hovered && (
            <g pointerEvents="none">
              <HoverHalo o={hovered} unit={unit} />
            </g>
          )}

          {draft && <Ink o={draft} label={labelFor(draft)} />}

          {ghost && tool === "marker" && (
            <g opacity={0.55} pointerEvents="none">
              <Ink o={{ id: "ghost", kind: "marker", x: ghost.x, y: ghost.y, n: markerNext, letters: markerLetters, color: pen.color, width: pen.width }} />
            </g>
          )}

          {selected && frame && (
            <g pointerEvents="none">
              <polygon
                points={frame.map((p) => `${p.x},${p.y}`).join(" ")}
                fill="none"
                stroke={SELECTION}
                strokeWidth={1}
                strokeDasharray="4 3"
                vectorEffect="non-scaling-stroke"
              />
              {rotHandle && selected.kind === "rect" && (
                <line
                  x1={(handles[1].p.x)}
                  y1={handles[1].p.y}
                  x2={rotHandle.p.x}
                  y2={rotHandle.p.y}
                  stroke={SELECTION}
                  strokeWidth={1}
                  vectorEffect="non-scaling-stroke"
                />
              )}
              {handles.map((h) => {
                const active = h.id === activeHandle;
                const fill = active ? ACTIVE : h.shape === "rotate" ? ROTATE_FILL : "#FFFFFF";
                const stroke = active ? ACTIVE : SELECTION;
                if (h.shape === "square") {
                  const half = (active ? 5.5 : 4) * unit;
                  return (
                    <rect key={h.id} x={h.p.x - half} y={h.p.y - half} width={half * 2} height={half * 2} fill={fill} stroke={stroke} strokeWidth={1} vectorEffect="non-scaling-stroke" />
                  );
                }
                return (
                  <circle key={h.id} cx={h.p.x} cy={h.p.y} r={(active ? 6 : h.shape === "rotate" ? 5 : 4.5) * unit} fill={fill} stroke={stroke} strokeWidth={1} vectorEffect="non-scaling-stroke" />
                );
              })}
            </g>
          )}

          {snapMark && (
            <rect
              x={snapMark.x - 5 * unit}
              y={snapMark.y - 5 * unit}
              width={10 * unit}
              height={10 * unit}
              transform={`rotate(45 ${snapMark.x} ${snapMark.y})`}
              fill="none"
              stroke={SNAP}
              strokeWidth={2}
              vectorEffect="non-scaling-stroke"
              pointerEvents="none"
            />
          )}

          {readout && <Readout p={readout.p} text={readout.text} unit={unit} />}
        </svg>
        <span className="demo-sample" aria-hidden="true">{copy.sampleLabel}</span>
      </div>

      <div className="demo-status">
        <p className="demo-hint">{status}</p>
        <div className="demo-group demo-actions" role="group" aria-label={copy.actions}>
          <PanelButton label={`${copy.undo} (Ctrl+Z)`} onClick={undo} disabled={!doc.past.length}><Undo2 aria-hidden="true" className="size-[17px]" /></PanelButton>
          <PanelButton label={`${copy.redo} (Ctrl+Y)`} onClick={redo} disabled={!doc.future.length}><Redo2 aria-hidden="true" className="size-[17px]" /></PanelButton>
          <PanelButton label={`${copy.duplicate} (Ctrl+D)`} onClick={duplicate} disabled={!selected}><CopyPlus aria-hidden="true" className="size-[17px]" /></PanelButton>
          <PanelButton label={`${copy.remove} (Delete)`} onClick={remove} disabled={!selected}><Trash2 aria-hidden="true" className="size-[17px]" /></PanelButton>
          <PanelButton label={copy.reset} onClick={reset}><RotateCcw aria-hidden="true" className="size-[17px]" /></PanelButton>
        </div>
      </div>

      <div className="demo-layers" role="group" aria-label={copy.layers}>
        <span className="demo-layers-title" aria-hidden="true">{copy.layers}</span>
        {objects.length === 0 ? (
          <span className="demo-layers-empty">{copy.noObjects}</span>
        ) : (
          <ul>
            {[...objects].reverse().map((o) => (
              <li key={o.id}>
                <button type="button" aria-pressed={o.id === selectedId} onClick={() => select(o.id)} className="demo-layer">
                  <span aria-hidden="true" className="demo-layer-dot" style={{ backgroundColor: o.color }} />
                  {describe(o)}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <p id={helpId} className="sr-only">{copy.keyboardHelp}</p>
      <p className="sr-only" aria-live="polite">{announcement}</p>
    </div>
  );
}

function HoverHalo({ o, unit }: { o: Obj; unit: number }) {
  const halo = Math.max(1, o.width) + 5 * unit;
  if (o.kind === "line" || o.kind === "dim") {
    return (
      <>
        <line x1={o.a.x} y1={o.a.y} x2={o.b.x} y2={o.b.y} stroke={HOVER_GLOW} strokeWidth={halo} strokeLinecap="round" />
        <line x1={o.a.x} y1={o.a.y} x2={o.b.x} y2={o.b.y} stroke={HOVER_EDGE} strokeWidth={1} vectorEffect="non-scaling-stroke" />
      </>
    );
  }
  if (o.kind === "marker") {
    const r = markerRadius(o.width) + 3 * unit;
    return <circle cx={o.x} cy={o.y} r={r} fill="none" stroke={HOVER_EDGE} strokeWidth={1} vectorEffect="non-scaling-stroke" />;
  }
  return (
    <g transform={`rotate(${o.angle} ${o.cx} ${o.cy})`}>
      <rect x={o.cx - o.w / 2} y={o.cy - o.h / 2} width={o.w} height={o.h} rx={o.radius} fill="none" stroke={HOVER_GLOW} strokeWidth={halo} />
      <rect x={o.cx - o.w / 2} y={o.cy - o.h / 2} width={o.w} height={o.h} rx={o.radius} fill="none" stroke={HOVER_EDGE} strokeWidth={1} vectorEffect="non-scaling-stroke" />
    </g>
  );
}

/** The live read-out that trails the cursor while a measurement is made. */
function Readout({ p, text, unit }: { p: Pt; text: string; unit: number }) {
  const size = 12.5 * unit;
  const w = text.length * size * 0.56 + 14 * unit;
  const h = size + 10 * unit;
  let x = p.x + 14 * unit;
  let y = p.y + 16 * unit;
  if (x + w > VIEW.width - 4) x = p.x - w - 10 * unit;
  if (y + h > VIEW.height - 4) y = p.y - h - 10 * unit;
  return (
    <g pointerEvents="none">
      <rect x={x} y={y} width={w} height={h} rx={3 * unit} fill="#1E63D6" />
      <text
        x={x + w / 2}
        y={y + h / 2}
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily='"Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif'
        fontWeight={600}
        fontSize={size}
        fill="#FFFFFF"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {text}
      </text>
    </g>
  );
}
