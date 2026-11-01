"use client";

import { useRef, useState, type KeyboardEvent, type PointerEvent } from "react";

const MIN = 50;
const MAX = 110;
const STEP = 5;

/**
 * The page closes on its own name, set large and selected the way the app
 * selects a text object. The orange handle is live: drag it, or use the arrow
 * keys or + and −, and the name resizes like any other object would.
 */
export function WordmarkObject({ label }: { label: string }) {
  const [percent, setPercent] = useState(100);
  const drag = useRef<{ x: number; start: number; width: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  const clamp = (v: number) => Math.min(MAX, Math.max(MIN, Math.round(v)));

  const onPointerDown = (e: PointerEvent<HTMLElement>) => {
    const width = ref.current?.getBoundingClientRect().width ?? 1;
    drag.current = { x: e.clientX, start: percent, width };
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  };

  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const d = drag.current;
    if (!d) return;
    setPercent(clamp(d.start * (1 + (e.clientX - d.x) / d.width)));
  };

  const onPointerUp = () => {
    drag.current = null;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const delta =
      e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "+" || e.key === "="
        ? STEP
        : e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "-"
          ? -STEP
          : e.key === "Home"
            ? MIN - percent
            : e.key === "End"
              ? MAX - percent
              : 0;
    if (!delta) return;
    e.preventDefault();
    setPercent((p) => clamp(p + delta));
  };

  return (
    <div
      ref={ref}
      role="slider"
      tabIndex={0}
      aria-label={label}
      aria-valuemin={MIN}
      aria-valuemax={MAX}
      aria-valuenow={percent}
      aria-valuetext={`${percent} %`}
      onKeyDown={onKeyDown}
      className="wordmark"
      style={{ fontSize: `calc(clamp(88px, 21vw, 330px) * ${percent / 100})` }}
    >
      <span aria-hidden="true">Edivect</span>
      <span className="sel" aria-hidden="true">
        <i />
        <i />
        <i />
        <i
          className="on"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        />
        <i />
        <i />
        <i />
        <i />
        <b />
        <em className="tnum">{percent} %</em>
      </span>
    </div>
  );
}
