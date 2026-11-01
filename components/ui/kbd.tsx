import { Fragment } from "react";

import { cn } from "@/lib/utils";

/** A key cap: a small paper sheet with the key's name, in the text face. */
export function Kbd({ children, className }: { children: string; className?: string }) {
  return <kbd className={cn("kbd", className)}>{children}</kbd>;
}

/** Renders ["Ctrl", "G"] as Ctrl + G. */
export function KbdCombo({ keys }: { keys: readonly string[] }) {
  return (
    <span className="combo">
      {keys.map((key, index) => (
        <Fragment key={key}>
          {index > 0 && <span aria-hidden="true">+</span>}
          <Kbd>{key}</Kbd>
        </Fragment>
      ))}
    </span>
  );
}
