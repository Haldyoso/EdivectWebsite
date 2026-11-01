/**
 * WCAG 2.4.1 (Bypass Blocks): first thing in the tab order, so keyboard users
 * can jump the navbar instead of tabbing through it. Parked above the viewport
 * and slid into view on focus.
 */
export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#top"
      className="fixed top-0 left-4 z-200 -translate-y-[150%] rounded-md border border-border bg-surface-elevated px-4 py-2.5 text-[15px] font-semibold text-fg focus:shadow-e2 transition-transform duration-200 ease-standard focus:translate-y-4"
    >
      {label}
    </a>
  );
}
