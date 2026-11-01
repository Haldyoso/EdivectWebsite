import { cn } from "@/lib/utils";

/**
 * The Edivect app icon, transcribed from app/icon.svg without changes: the
 * capture frame, the crosshair and the editable annotation with its orange
 * handle, on the dark tile the app ships with. Inline so it costs no request
 * and inherits nothing from the page's theme.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true" className={className}>
      <rect width="256" height="256" rx="57" fill="#0D0E13" />
      <g transform="translate(8.027,7.791) scale(0.94281)">
        <path
          d="M121.5 48 H61 A23 23 0 0 0 38 71 V185 A23 23 0 0 0 61 208 H189.5"
          fill="none"
          stroke="#1167F5"
          strokeWidth="17"
          strokeLinecap="butt"
          strokeLinejoin="round"
        />
        <g fill="#FFFFFF">
          <rect x="76.25" y="124.5" width="34" height="9" />
          <rect x="132.75" y="124.5" width="34" height="9" />
          <rect x="117" y="83.75" width="9" height="34" />
          <rect x="117" y="140.25" width="9" height="34" />
        </g>
        <path d="M138 49 H212 V110" fill="none" stroke="#FC8B19" strokeWidth="6" />
        <rect x="132.5" y="43.5" width="11" height="11" fill="#FC8B19" />
        <rect x="206.5" y="104.5" width="11" height="11" fill="#FC8B19" />
        <g stroke="#1167F5" fill="none" strokeWidth="3" strokeDasharray="10 8">
          <path d="M171 129 H205.25" />
          <path d="M212 142 V193" />
        </g>
        <rect x="205.25" y="122.25" width="13.5" height="13.5" fill="#1167F5" />
        <circle cx="212" cy="49" r="13" fill="#FFFFFF" />
        <circle cx="212" cy="49" r="9" fill="#1167F5" />
        <circle cx="212" cy="206" r="13" fill="#FFFFFF" />
        <circle cx="212" cy="206" r="9" fill="#1167F5" />
      </g>
    </svg>
  );
}

/** Icon + wordmark. The icon is decorative; the wordmark is the accessible text. */
export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
  /** Kept for callers from the previous design; the mark no longer glows. */
  glow?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5 font-display text-[18px] font-semibold tracking-[-0.01em] text-fg",
        className,
      )}
    >
      <Mark className={cn("size-7 shrink-0", markClassName)} />
      <span>Edivect</span>
    </span>
  );
}
