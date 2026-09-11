import { cn } from "@/lib/utils";

/**
 * The Edivect mark: a capture bracket, a measurement crosshair and one
 * orange node — the product's real icon, transcribed from the brand icon set.
 *
 * This is that set's `small` level of detail. The full mark also carries
 * dash-dot guides and a dimension chain, which the icon spec says turn to mush
 * below ~40px — and the only places this site draws it are a 26–28px lockup.
 *
 * Both hues are token-driven rather than hard-coded so the mark inverts with
 * the theme: the crosshair rides on `fg`, which is the brand's
 * crosshair-on-dark / crosshair-on-light pair already expressed as one token.
 */
function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true" className={className}>
      <g transform="translate(-2.906 -1.891) scale(1.01477)">
        <path
          d="M118 44 H58 A26 26 0 0 0 32 70 V186 A26 26 0 0 0 58 212 H178"
          fill="none"
          strokeWidth="28"
          strokeLinejoin="round"
          className="stroke-accent"
        />
        <g className="fill-fg">
          <rect x="64" y="118" width="38" height="18" />
          <rect x="134" y="118" width="38" height="18" />
          <rect x="109" y="73" width="18" height="38" />
          <rect x="109" y="143" width="18" height="38" />
        </g>
        {/*
         * The one place the site is allowed to spend Mark Orange: in the logo
         * it *is* the selected, still-editable handle, which is the single
         * meaning the brand reserves that hue for.
         */}
        <circle cx="214" cy="44" r="26" className="fill-mark" />
        <circle cx="214" cy="212" r="26" className="fill-accent" />
      </g>
    </svg>
  );
}

/** Mark + wordmark. The mark is decorative; the wordmark is the accessible text. */
export function Logo({
  className,
  markClassName,
  glow = false,
}: {
  className?: string;
  markClassName?: string;
  glow?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-2.5 text-base font-bold tracking-[-0.2px] text-fg",
        className,
      )}
    >
      <Mark
        className={cn(
          "size-7 shrink-0",
          glow && "drop-shadow-[0_4px_14px_rgb(45_125_246/0.35)]",
          markClassName,
        )}
      />
      <span>
        Edi<span className="text-accent">vect</span>
      </span>
    </span>
  );
}
