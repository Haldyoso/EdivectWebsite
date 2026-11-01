import { Ink } from "@/components/demo/ink";
import {
  formatMm,
  handlesOf,
  lengthMm,
  selectionFrame,
  type HandleId,
  type Obj,
} from "@/components/demo/model";
import type { ShowcaseId } from "@/types";

/**
 * Still, synthetic pieces of a marked-up screen, one per capability, drawn
 * with the same renderer as the live demo. They hold the place where real
 * captures of the app will go once they exist; they never pretend to be one.
 */

const FONT = '"Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif';
const PLATE = "#5B6273";
const AXIS = "#3E4453";
const ANGLE_INK = "#8B5CF6"; // taste-skill-ignore: the app's own purple ink

function Selection({ o, active }: { o: Obj; active: HandleId | null }) {
  const frame = selectionFrame(o, 1);
  const handles = handlesOf(o, 1);
  const rot = handles.find((h) => h.id === "rot");
  const top = handles.find((h) => h.id === "n");
  return (
    <g>
      <polygon points={frame.map((p) => `${p.x},${p.y}`).join(" ")} fill="none" stroke="#3B82F6" strokeWidth={1} strokeDasharray="4 3" />
      {rot && top && <line x1={top.p.x} y1={top.p.y} x2={rot.p.x} y2={rot.p.y} stroke="#3B82F6" strokeWidth={1} />}
      {handles.map((h) => {
        const on = h.id === active;
        const fill = on ? "#F5842B" : h.shape === "rotate" ? "#8AB4F8" : "#FFFFFF";
        const stroke = on ? "#F5842B" : "#3B82F6";
        if (h.shape === "square") {
          const half = on ? 5.5 : 4;
          return <rect key={h.id} x={h.p.x - half} y={h.p.y - half} width={half * 2} height={half * 2} fill={fill} stroke={stroke} />;
        }
        return <circle key={h.id} cx={h.p.x} cy={h.p.y} r={on ? 6 : h.shape === "rotate" ? 5 : 4.5} fill={fill} stroke={stroke} />;
      })}
    </g>
  );
}

function Chip({ x, y, text }: { x: number; y: number; text: string }) {
  const w = text.length * 7.4 + 16;
  return (
    <g>
      <rect x={x} y={y} width={w} height={24} rx={3} fill="#1E63D6" />
      <text x={x + w / 2} y={y + 12} textAnchor="middle" dominantBaseline="central" fontFamily={FONT} fontWeight={600} fontSize={13} fill="#FFFFFF">
        {text}
      </text>
    </g>
  );
}

function Plate({ x, y, w, h, holes }: { x: number; y: number; w: number; h: number; holes: { x: number; y: number; r: number }[] }) {
  return (
    <g>
      <g fill="none" stroke={PLATE} strokeWidth={2}>
        <rect x={x} y={y} width={w} height={h} rx={14} />
        {holes.map((c) => (
          <circle key={`${c.x}-${c.y}`} cx={c.x} cy={c.y} r={c.r} />
        ))}
      </g>
      <g stroke={AXIS} strokeWidth={1.5} strokeDasharray="12 4 3 4" fill="none">
        {holes.map((c) => (
          <path key={`a${c.x}-${c.y}`} d={`M${c.x - c.r - 16} ${c.y}H${c.x + c.r + 16}M${c.x} ${c.y - c.r - 16}V${c.y + c.r + 16}`} />
        ))}
      </g>
    </g>
  );
}

function EditableObjects() {
  const rect: Obj = { id: "r", kind: "rect", cx: 432, cy: 182, w: 128, h: 98, angle: 8, radius: 6, fill: false, color: "#E53335", width: 4 };
  return (
    <svg viewBox="0 0 640 360" aria-hidden="true">
      <rect width="640" height="360" fill="#12151D" />
      <Plate x={110} y={72} w={420} h={220} holes={[{ x: 210, y: 182, r: 34 }, { x: 432, y: 182, r: 34 }]} />
      <Ink o={{ id: "m", kind: "marker", x: 150, y: 112, n: 1, letters: false, color: "#FFD400", width: 4 }} />
      <Ink o={rect} />
      <Selection o={rect} active="se" />
      <Chip x={470} y={66} text="8°" />
    </svg>
  );
}

function CadMeasurement({ lang }: { lang: string }) {
  const dim: Obj = { id: "d", kind: "dim", a: { x: 200, y: 190 }, b: { x: 390, y: 190 }, offset: -112, color: "#35E2FF", width: 2 };
  const o = { x: 200, y: 190 };
  const r = 96;
  const a2 = (35.2 * Math.PI) / 180;
  const arm = { x: o.x + Math.cos(a2) * 170, y: o.y - Math.sin(a2) * 170 };
  const arcEnd = { x: o.x + Math.cos(a2) * r, y: o.y - Math.sin(a2) * r };
  const angle = new Intl.NumberFormat(lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(35.2);
  return (
    <svg viewBox="0 0 640 320" aria-hidden="true">
      <rect width="640" height="320" fill="#12151D" />
      <Plate x={110} y={110} w={420} h={170} holes={[{ x: 200, y: 190, r: 30 }, { x: 390, y: 190, r: 30 }]} />
      <Ink o={dim} label={`${formatMm(lengthMm(dim.a, dim.b), lang)} mm`} />
      <g stroke="#000" strokeWidth={5} strokeLinecap="round" fill="none">
        <path d={`M${o.x} ${o.y}H${o.x + 200}M${o.x} ${o.y}L${arm.x} ${arm.y}`} />
        <path d={`M${o.x + r} ${o.y}A${r} ${r} 0 0 0 ${arcEnd.x} ${arcEnd.y}`} />
      </g>
      <g stroke={ANGLE_INK} strokeWidth={3} strokeLinecap="round" fill="none">
        <path d={`M${o.x} ${o.y}H${o.x + 200}M${o.x} ${o.y}L${arm.x} ${arm.y}`} />
        <path d={`M${o.x + r} ${o.y}A${r} ${r} 0 0 0 ${arcEnd.x} ${arcEnd.y}`} />
      </g>
      <text x={o.x + r + 18} y={o.y - 26} fontFamily={FONT} fontWeight={600} fontSize={18} fill="#C4B1FF" stroke="#000" strokeWidth={3} paintOrder="stroke">
        {angle}°
      </text>
    </svg>
  );
}

function Stamp({ x, y, text, color }: { x: number; y: number; text: string; color: string }) {
  const w = text.length * 20 + 28;
  return (
    <g>
      <rect x={x} y={y} width={w} height={44} rx={4} fill="none" stroke="#000" strokeWidth={6} />
      <rect x={x} y={y} width={w} height={44} rx={4} fill="none" stroke={color} strokeWidth={4} />
      <text x={x + w / 2} y={y + 23} textAnchor="middle" dominantBaseline="central" fontFamily={FONT} fontWeight={800} fontSize={24} letterSpacing={2} fill={color} stroke="#000" strokeWidth={2} paintOrder="stroke">
        {text}
      </text>
    </g>
  );
}

function QaStamps() {
  return (
    <svg viewBox="0 0 640 400" aria-hidden="true">
      <rect width="640" height="400" fill="#12151D" />
      <Plate x={90} y={60} w={460} h={250} holes={[{ x: 190, y: 160, r: 32 }, { x: 330, y: 230, r: 22 }, { x: 450, y: 160, r: 32 }]} />
      <Ink o={{ id: "m1", kind: "marker", x: 142, y: 112, n: 1, letters: false, color: "#E53335", width: 4 }} />
      <Ink o={{ id: "m2", kind: "marker", x: 282, y: 262, n: 2, letters: false, color: "#E53335", width: 4 }} />
      <Ink o={{ id: "m3", kind: "marker", x: 498, y: 112, n: 3, letters: false, color: "#E53335", width: 4 }} />
      <Stamp x={120} y={330} text="OK" color="#23A55A" />
      <Stamp x={228} y={330} text="NOK" color="#E53335" />
      <g strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M420 350l14 14 26-30" stroke="#000" strokeWidth={8} />
        <path d="M420 350l14 14 26-30" stroke="#23A55A" strokeWidth={5} />
        <path d="M494 336l26 26M520 336l-26 26" stroke="#000" strokeWidth={8} />
        <path d="M494 336l26 26M520 336l-26 26" stroke="#E53335" strokeWidth={5} />
      </g>
    </svg>
  );
}

function BlurFocus() {
  const rows = [
    ["A3", "1:2"],
    ["S235JR", "2,5 kg"],
    ["4471-0932", "C"],
    ["XXXXX XXXXXXX", "2026-10-14"],
  ];
  return (
    <svg viewBox="0 0 640 330" aria-hidden="true">
      <defs>
        <filter id="frag-blur" x="-10%" y="-40%" width="120%" height="180%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <mask id="frag-focus">
          <rect width="640" height="330" fill="#fff" />
          <rect x="330" y="150" width="270" height="150" rx="4" fill="#000" />
        </mask>
      </defs>
      <rect width="640" height="330" fill="#12151D" />
      <Plate x={40} y={40} w={250} h={160} holes={[{ x: 120, y: 120, r: 30 }, { x: 220, y: 120, r: 22 }]} />
      <g stroke={PLATE} strokeWidth={1.5} fill="none">
        <rect x="340" y="160" width="250" height="130" />
        {[1, 2, 3].map((i) => (
          <path key={i} d={`M340 ${160 + i * 32.5}H590`} />
        ))}
        <path d="M480 160V290" />
      </g>
      <g fontFamily={FONT} fontSize={15} fill="#CDD2DE">
        {rows.map(([a, b], i) => (
          <g key={a}>
            <text x="352" y={182 + i * 32.5} filter={i >= 2 ? "url(#frag-blur)" : undefined}>{a}</text>
            <text x="492" y={182 + i * 32.5}>{b}</text>
          </g>
        ))}
      </g>
      <rect width="640" height="330" fill="rgba(0,0,0,0.58)" mask="url(#frag-focus)" />
      <rect x="330" y="150" width="270" height="150" rx="4" fill="none" stroke="#000" strokeWidth={6} />
      <rect x="330" y="150" width="270" height="150" rx="4" fill="none" stroke="#FFD400" strokeWidth={4} />
    </svg>
  );
}

function FreezeBoards() {
  return (
    <svg viewBox="0 0 640 300" aria-hidden="true">
      <rect width="320" height="300" fill="#0B0D14" />
      <rect x="320" width="320" height="300" fill="#F4F6FA" />
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 210c30-70 80-110 150-120" stroke="#FFFFFF" strokeWidth={4} />
        <path d="M196 74l22 14-20 18" stroke="#FFFFFF" strokeWidth={4} />
        <ellipse cx="120" cy="120" rx="46" ry="30" stroke="#FFD400" strokeWidth={4} />
      </g>
      <Ink o={{ id: "b1", kind: "marker", x: 250, y: 220, n: 1, letters: true, color: "#35E2FF", width: 4 }} />
      <Ink o={{ id: "w1", kind: "line", a: { x: 370, y: 230 }, b: { x: 500, y: 120 }, head: true, color: "#E53335", width: 4 }} />
      <Ink o={{ id: "w2", kind: "rect", cx: 540, cy: 96, w: 110, h: 70, angle: 0, radius: 8, fill: false, color: "#111111", width: 3 }} />
      <Ink o={{ id: "w3", kind: "marker", x: 590, y: 220, n: 2, letters: true, color: "#2D7DF6", width: 4 }} />
    </svg>
  );
}

export function Fragment({ id, lang }: { id: ShowcaseId; lang: string }) {
  switch (id) {
    case "editable-objects":
      return <EditableObjects />;
    case "cad-measurement":
      return <CadMeasurement lang={lang} />;
    case "qa-stamps":
      return <QaStamps />;
    case "blur-focus":
      return <BlurFocus />;
    case "freeze-boards":
      return <FreezeBoards />;
  }
}
