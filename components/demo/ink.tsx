import {
  arrowLength,
  dimLine,
  markerLabel,
  markerRadius,
  rimColor,
  sub,
  type Obj,
  type Pt,
} from "@/components/demo/model";

const FONT = '"Segoe UI Variable Text", "Segoe UI", system-ui, sans-serif';

function headPoints(tip: Pt, from: Pt, size: number): string {
  const v = sub(tip, from);
  const l = Math.hypot(v.x, v.y) || 1;
  const d = { x: v.x / l, y: v.y / l };
  const perp = { x: -d.y, y: d.x };
  const base = { x: tip.x - d.x * size, y: tip.y - d.y * size };
  const w = size * 0.45;
  return [
    tip,
    { x: base.x + perp.x * w, y: base.y + perp.y * w },
    { x: base.x - perp.x * w, y: base.y - perp.y * w },
  ]
    .map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`)
    .join(" ");
}

/** One annotation, drawn the way the app draws it: ink with a 1px contrast rim. */
export function Ink({ o, label }: { o: Obj; label?: string }) {
  const rim = rimColor(o.color);

  if (o.kind === "line") {
    const head = arrowLength(o.width);
    const l = Math.hypot(o.b.x - o.a.x, o.b.y - o.a.y);
    // Shorten the shaft so its cap never pokes out of the arrowhead.
    const end =
      o.head && l > head
        ? { x: o.b.x - ((o.b.x - o.a.x) / l) * head * 0.8, y: o.b.y - ((o.b.y - o.a.y) / l) * head * 0.8 }
        : o.b;
    return (
      <g>
        <line x1={o.a.x} y1={o.a.y} x2={end.x} y2={end.y} stroke={rim} strokeWidth={o.width + 2} strokeLinecap="round" />
        {o.head && l > 2 && <polygon points={headPoints(o.b, o.a, head)} fill={rim} stroke={rim} strokeWidth={2} strokeLinejoin="round" />}
        <line x1={o.a.x} y1={o.a.y} x2={end.x} y2={end.y} stroke={o.color} strokeWidth={o.width} strokeLinecap="round" />
        {o.head && l > 2 && <polygon points={headPoints(o.b, o.a, head)} fill={o.color} />}
      </g>
    );
  }

  if (o.kind === "rect") {
    const x = o.cx - o.w / 2;
    const y = o.cy - o.h / 2;
    const r = Math.min(o.radius, o.w / 2, o.h / 2);
    return (
      <g transform={`rotate(${o.angle} ${o.cx} ${o.cy})`}>
        <rect x={x} y={y} width={o.w} height={o.h} rx={r} fill={o.fill ? o.color : "none"} stroke={rim} strokeWidth={o.width + 2} strokeLinejoin="round" />
        <rect x={x} y={y} width={o.w} height={o.h} rx={r} fill={o.fill ? o.color : "none"} stroke={o.color} strokeWidth={o.width} strokeLinejoin="round" />
      </g>
    );
  }

  if (o.kind === "marker") {
    const r = markerRadius(o.width);
    return (
      <g>
        <circle cx={o.x} cy={o.y} r={r} fill={o.color} stroke={rim} strokeWidth={1.5} />
        <text
          x={o.x}
          y={o.y}
          textAnchor="middle"
          dominantBaseline="central"
          fontFamily={FONT}
          fontWeight={700}
          fontSize={r * 1.15}
          fill={rim === "#000000" ? "#0B0D14" : "#FFFFFF"}
        >
          {markerLabel(o.n, o.letters)}
        </text>
      </g>
    );
  }

  // Dimension: extension lines, a dimension line with two inward heads, the value.
  const { p, q, normal } = dimLine(o);
  const over = { x: normal.x * Math.sign(o.offset || 1) * 6, y: normal.y * Math.sign(o.offset || 1) * 6 };
  const head = Math.max(9, o.width * 4);
  const l = Math.hypot(q.x - p.x, q.y - p.y) || 1;
  const d = { x: (q.x - p.x) / l, y: (q.y - p.y) / l };
  const shaftA = { x: p.x + d.x * head * 0.8, y: p.y + d.y * head * 0.8 };
  const shaftB = { x: q.x - d.x * head * 0.8, y: q.y - d.y * head * 0.8 };
  const mid = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 };
  let deg = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI;
  if (deg > 90) deg -= 180;
  if (deg < -90) deg += 180;
  const lift = { x: -Math.sin((deg * Math.PI) / 180) * -12, y: Math.cos((deg * Math.PI) / 180) * -12 };
  const strokes = (color: string, extra: number) => (
    <g stroke={color} strokeWidth={o.width + extra} strokeLinecap="round">
      <line x1={o.a.x} y1={o.a.y} x2={p.x + over.x} y2={p.y + over.y} strokeWidth={Math.max(1, o.width - 0.5) + extra} />
      <line x1={o.b.x} y1={o.b.y} x2={q.x + over.x} y2={q.y + over.y} strokeWidth={Math.max(1, o.width - 0.5) + extra} />
      <line x1={shaftA.x} y1={shaftA.y} x2={shaftB.x} y2={shaftB.y} />
    </g>
  );
  return (
    <g>
      {strokes(rim, 2)}
      <polygon points={headPoints(p, q, head)} fill={o.color} stroke={rim} strokeWidth={1} />
      <polygon points={headPoints(q, p, head)} fill={o.color} stroke={rim} strokeWidth={1} />
      {strokes(o.color, 0)}
      <text
        x={mid.x + lift.x}
        y={mid.y + lift.y}
        transform={`rotate(${deg} ${mid.x + lift.x} ${mid.y + lift.y})`}
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily={FONT}
        fontWeight={600}
        fontSize={16}
        fill={o.color}
        stroke={rim}
        strokeWidth={3}
        paintOrder="stroke"
        strokeLinejoin="round"
      >
        {label}
      </text>
    </g>
  );
}
