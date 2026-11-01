/**
 * The hero demo's object model: a small, faithful subset of Edivect's own
 * (Model/*.cs in the application repository). Every mark is an object with its
 * own geometry and style, and stays one until the page is closed. That is the
 * product's whole claim, so the demo keeps the same rules the app does:
 *
 * - Lines and arrows are edited by their two end points (LineObject: Start/End
 *   handles, no rotation grip). Shift snaps the angle to 5°.
 * - Rectangles get eight resize handles and a rotation grip above the box;
 *   Shift on the grip snaps to 15°.
 * - Dimensions are placed with two clicks and an offset, and read in mm.
 * - Markers auto-increment, and switch between 1,2,3 and a,b,c.
 * - Ink is drawn with a one-pixel contrasting rim (ContrastInk.cs).
 *
 * Coordinates are SVG user units of a fixed 640×440 view. The synthetic sample
 * defines the scale: its two bore centres are 190 units apart and are labelled
 * 58 mm, as a calibrated drawing would be.
 */

export const VIEW = { width: 640, height: 440 } as const;
export const UNITS_PER_MM = 190 / 58;

export interface Pt {
  x: number;
  y: number;
}

interface Base {
  id: string;
  color: string;
  width: number;
}

export interface LineObj extends Base {
  kind: "line";
  a: Pt;
  b: Pt;
  head: boolean;
}

export interface RectObj extends Base {
  kind: "rect";
  cx: number;
  cy: number;
  w: number;
  h: number;
  /** Degrees, clockwise, about the centre. */
  angle: number;
  radius: number;
  fill: boolean;
}

export interface MarkerObj extends Base {
  kind: "marker";
  x: number;
  y: number;
  n: number;
  letters: boolean;
}

export interface DimObj extends Base {
  kind: "dim";
  a: Pt;
  b: Pt;
  /** Signed perpendicular distance of the dimension line from a→b. */
  offset: number;
}

export type Obj = LineObj | RectObj | MarkerObj | DimObj;

export type HandleId =
  | "a"
  | "b"
  | "off"
  | "rot"
  | "nw"
  | "n"
  | "ne"
  | "e"
  | "se"
  | "s"
  | "sw"
  | "w";

export interface Handle {
  id: HandleId;
  p: Pt;
  shape: "square" | "circle" | "rotate";
}

/* ----------------------------------------------------------------- the sample */

/** The synthetic part drawn under the marks: a plate with two bores and a slot. */
export const SAMPLE = {
  plate: { x: 150, y: 120, w: 380, h: 220, r: 14 },
  holes: [
    { x: 235, y: 230, r: 36 },
    { x: 425, y: 230, r: 36 },
  ],
  slot: { x: 300, y: 296, w: 80, h: 26 },
} as const;

export function initialObjects(): Obj[] {
  return [
    { id: "s1", kind: "dim", a: { x: 235, y: 230 }, b: { x: 425, y: 230 }, offset: -150, color: "#35E2FF", width: 2 },
    { id: "s2", kind: "marker", x: 186, y: 156, n: 1, letters: false, color: "#FFD400", width: 4 },
    { id: "s3", kind: "line", a: { x: 116, y: 396 }, b: { x: 205, y: 262 }, head: true, color: "#E53335", width: 4 },
  ];
}

/* ------------------------------------------------------------------- vectors */

export const add = (p: Pt, q: Pt): Pt => ({ x: p.x + q.x, y: p.y + q.y });
export const sub = (p: Pt, q: Pt): Pt => ({ x: p.x - q.x, y: p.y - q.y });
export const scale = (p: Pt, k: number): Pt => ({ x: p.x * k, y: p.y * k });
export const len = (p: Pt): number => Math.hypot(p.x, p.y);
export const dist = (p: Pt, q: Pt): number => len(sub(p, q));

export function rotate(p: Pt, deg: number): Pt {
  const r = (deg * Math.PI) / 180;
  const c = Math.cos(r);
  const s = Math.sin(r);
  return { x: p.x * c - p.y * s, y: p.x * s + p.y * c };
}

export function distToSegment(p: Pt, a: Pt, b: Pt): number {
  const ab = sub(b, a);
  const l2 = ab.x * ab.x + ab.y * ab.y;
  if (l2 === 0) return dist(p, a);
  const t = Math.max(0, Math.min(1, ((p.x - a.x) * ab.x + (p.y - a.y) * ab.y) / l2));
  return dist(p, add(a, scale(ab, t)));
}

/** Shift = 5°: the app snaps a line's free end around the fixed one. */
export function snapAngle(origin: Pt, target: Pt, stepDeg: number): Pt {
  const v = sub(target, origin);
  const l = len(v);
  const step = (stepDeg * Math.PI) / 180;
  const a = Math.round(Math.atan2(v.y, v.x) / step) * step;
  return { x: origin.x + Math.cos(a) * l, y: origin.y + Math.sin(a) * l };
}

/** Screen-style angle: 0° to the right, counter-clockwise positive. */
export function angleDeg(a: Pt, b: Pt): number {
  return (Math.atan2(-(b.y - a.y), b.x - a.x) * 180) / Math.PI;
}

/* ----------------------------------------------------------------- appearance */

/** ContrastInk.RimColor: black rim on light inks, white on dark ones. */
export function rimColor(hex: string): string {
  const channel = (i: number) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  const l = 0.2126 * channel(1) + 0.7152 * channel(3) + 0.0722 * channel(5);
  return l > 0.179 ? "#000000" : "#FFFFFF";
}

/** LineObject.ArrowLength. */
export const arrowLength = (width: number) => Math.max(10, width * 3.2);

export const markerRadius = (width: number) => 9 + width * 1.6;

export function markerLabel(n: number, letters: boolean): string {
  if (!letters) return String(n);
  let out = "";
  let k = n;
  while (k > 0) {
    k -= 1;
    out = String.fromCharCode(97 + (k % 26)) + out;
    k = Math.floor(k / 26);
  }
  return out;
}

/** The dimension line's two ends, pushed off the measured points by `offset`. */
export function dimLine(o: DimObj): { p: Pt; q: Pt; normal: Pt } {
  const v = sub(o.b, o.a);
  const l = len(v) || 1;
  const normal = { x: -v.y / l, y: v.x / l };
  return { p: add(o.a, scale(normal, o.offset)), q: add(o.b, scale(normal, o.offset)), normal };
}

export function rectCorners(o: RectObj): Pt[] {
  const hw = o.w / 2;
  const hh = o.h / 2;
  return [
    { x: -hw, y: -hh },
    { x: hw, y: -hh },
    { x: hw, y: hh },
    { x: -hw, y: hh },
  ].map((p) => add({ x: o.cx, y: o.cy }, rotate(p, o.angle)));
}

/* ---------------------------------------------------------------- hit testing */

export function hitTest(o: Obj, p: Pt, tol: number): boolean {
  switch (o.kind) {
    case "line":
      return distToSegment(p, o.a, o.b) <= Math.max(tol, o.width / 2 + tol / 2);
    case "dim": {
      const { p: d1, q: d2 } = dimLine(o);
      return (
        distToSegment(p, d1, d2) <= tol ||
        distToSegment(p, o.a, d1) <= tol / 1.5 ||
        distToSegment(p, o.b, d2) <= tol / 1.5
      );
    }
    case "marker":
      return dist(p, { x: o.x, y: o.y }) <= markerRadius(o.width) + tol / 2;
    case "rect": {
      const local = rotate(sub(p, { x: o.cx, y: o.cy }), -o.angle);
      const hw = o.w / 2;
      const hh = o.h / 2;
      const withinOuter = Math.abs(local.x) <= hw + tol && Math.abs(local.y) <= hh + tol;
      // An outline is picked on its stroke, a filled shape anywhere inside it.
      if (o.fill) return withinOuter;
      return withinOuter && !(Math.abs(local.x) < hw - tol && Math.abs(local.y) < hh - tol);
    }
  }
}

/** Topmost first, like a click in the app. */
export function pick(objects: Obj[], p: Pt, tol: number): Obj | null {
  for (let i = objects.length - 1; i >= 0; i -= 1) {
    if (hitTest(objects[i], p, tol)) return objects[i];
  }
  return null;
}

/* ------------------------------------------------------------------- handles */

export function handlesOf(o: Obj, s: number): Handle[] {
  switch (o.kind) {
    case "line":
      return [
        { id: "a", p: o.a, shape: "circle" },
        { id: "b", p: o.b, shape: "circle" },
      ];
    case "dim": {
      const { p, q } = dimLine(o);
      return [
        { id: "a", p: o.a, shape: "circle" },
        { id: "b", p: o.b, shape: "circle" },
        { id: "off", p: scale(add(p, q), 0.5), shape: "square" },
      ];
    }
    case "marker":
      return [];
    case "rect": {
      const hw = o.w / 2 + 3 * s;
      const hh = o.h / 2 + 3 * s;
      const c = { x: o.cx, y: o.cy };
      const at = (x: number, y: number) => add(c, rotate({ x, y }, o.angle));
      return [
        { id: "nw", p: at(-hw, -hh), shape: "square" },
        { id: "n", p: at(0, -hh), shape: "square" },
        { id: "ne", p: at(hw, -hh), shape: "square" },
        { id: "e", p: at(hw, 0), shape: "square" },
        { id: "se", p: at(hw, hh), shape: "square" },
        { id: "s", p: at(0, hh), shape: "square" },
        { id: "sw", p: at(-hw, hh), shape: "square" },
        { id: "w", p: at(-hw, 0), shape: "square" },
        { id: "rot", p: at(0, -hh - 24 * s), shape: "rotate" },
      ];
    }
  }
}

/** Corners of the dashed selection frame, 3 units outside the object. */
export function selectionFrame(o: Obj, s: number): Pt[] {
  const pad = 3 * s;
  if (o.kind === "rect") {
    return rectCorners({ ...o, w: o.w + pad * 2, h: o.h + pad * 2 });
  }
  const b = bounds(o);
  return [
    { x: b.x - pad, y: b.y - pad },
    { x: b.x + b.w + pad, y: b.y - pad },
    { x: b.x + b.w + pad, y: b.y + b.h + pad },
    { x: b.x - pad, y: b.y + b.h + pad },
  ];
}

export function bounds(o: Obj): { x: number; y: number; w: number; h: number } {
  let pts: Pt[];
  let pad = o.width / 2;
  switch (o.kind) {
    case "line":
      pts = [o.a, o.b];
      if (o.head) pad += arrowLength(o.width) * 0.45;
      break;
    case "dim": {
      const { p, q } = dimLine(o);
      pts = [o.a, o.b, p, q];
      pad = 8;
      break;
    }
    case "marker": {
      const r = markerRadius(o.width);
      pts = [
        { x: o.x - r, y: o.y - r },
        { x: o.x + r, y: o.y + r },
      ];
      pad = 1;
      break;
    }
    case "rect":
      pts = rectCorners(o);
      break;
  }
  const xs = pts.map((p) => p.x);
  const ys = pts.map((p) => p.y);
  const x = Math.min(...xs) - pad;
  const y = Math.min(...ys) - pad;
  return { x, y, w: Math.max(...xs) + pad - x, h: Math.max(...ys) + pad - y };
}

/* --------------------------------------------------------------------- edits */

export function translate(o: Obj, d: Pt): Obj {
  switch (o.kind) {
    case "line":
    case "dim":
      return { ...o, a: add(o.a, d), b: add(o.b, d) };
    case "marker":
      return { ...o, x: o.x + d.x, y: o.y + d.y };
    case "rect":
      return { ...o, cx: o.cx + d.x, cy: o.cy + d.y };
  }
}

export function moveHandle(o: Obj, h: HandleId, p: Pt, shift: boolean): Obj {
  if (o.kind === "line") {
    if (h === "a") return { ...o, a: shift ? snapAngle(o.b, p, 5) : p };
    if (h === "b") return { ...o, b: shift ? snapAngle(o.a, p, 5) : p };
    return o;
  }
  if (o.kind === "dim") {
    if (h === "a") return { ...o, a: shift ? snapAngle(o.b, p, 5) : p };
    if (h === "b") return { ...o, b: shift ? snapAngle(o.a, p, 5) : p };
    if (h === "off") {
      const { normal } = dimLine({ ...o, offset: 0 });
      const v = sub(p, o.a);
      return { ...o, offset: v.x * normal.x + v.y * normal.y };
    }
    return o;
  }
  if (o.kind === "rect") {
    const c = { x: o.cx, y: o.cy };
    if (h === "rot") {
      const v = sub(p, c);
      let a = (Math.atan2(v.y, v.x) * 180) / Math.PI + 90;
      if (shift) a = Math.round(a / 15) * 15;
      a = ((a + 540) % 360) - 180;
      return { ...o, angle: a };
    }
    const local = rotate(sub(p, c), -o.angle);
    let l = -o.w / 2;
    let r = o.w / 2;
    let t = -o.h / 2;
    let b = o.h / 2;
    if (h.includes("w")) l = Math.min(local.x, r - 6);
    if (h.includes("e")) r = Math.max(local.x, l + 6);
    if (h.startsWith("n")) t = Math.min(local.y, b - 6);
    if (h.startsWith("s")) b = Math.max(local.y, t + 6);
    const mid = rotate({ x: (l + r) / 2, y: (t + b) / 2 }, o.angle);
    return { ...o, cx: c.x + mid.x, cy: c.y + mid.y, w: r - l, h: b - t };
  }
  return o;
}

/* --------------------------------------------------------------------- snaps */

/** What the app's object snap would catch here: bores, corners, other ends. */
export function snapPoints(objects: Obj[], exceptId: string | null): Pt[] {
  const pts: Pt[] = [
    ...SAMPLE.holes.map((h) => ({ x: h.x, y: h.y })),
    { x: SAMPLE.slot.x + SAMPLE.slot.w / 2, y: SAMPLE.slot.y + SAMPLE.slot.h / 2 },
    { x: SAMPLE.plate.x, y: SAMPLE.plate.y },
    { x: SAMPLE.plate.x + SAMPLE.plate.w, y: SAMPLE.plate.y },
    { x: SAMPLE.plate.x, y: SAMPLE.plate.y + SAMPLE.plate.h },
    { x: SAMPLE.plate.x + SAMPLE.plate.w, y: SAMPLE.plate.y + SAMPLE.plate.h },
  ];
  for (const o of objects) {
    if (o.id === exceptId) continue;
    if (o.kind === "line" || o.kind === "dim") pts.push(o.a, o.b);
    if (o.kind === "marker") pts.push({ x: o.x, y: o.y });
    if (o.kind === "rect") pts.push(...rectCorners(o), { x: o.cx, y: o.cy });
  }
  return pts;
}

export function snapTo(p: Pt, points: Pt[], radius: number): Pt | null {
  let best: Pt | null = null;
  let bestD = radius;
  for (const q of points) {
    const d = dist(p, q);
    if (d <= bestD) {
      best = q;
      bestD = d;
    }
  }
  return best;
}

/* ---------------------------------------------------------------- read-outs */

export function lengthMm(a: Pt, b: Pt): number {
  return dist(a, b) / UNITS_PER_MM;
}

export function formatMm(value: number, lang: string): string {
  return new Intl.NumberFormat(lang, { maximumFractionDigits: 1 }).format(value);
}
