"use client";

import { Moon, Sun } from "lucide-react";

import { LEGACY_THEME_STORAGE_KEY, THEME_STORAGE_KEY } from "@/lib/theme";
import { cn } from "@/lib/utils";
import type { Copy } from "@/types";

/**
 * Light/dark switch for the token set that already existed in globals.css but
 * had no way to be turned on.
 *
 * Deliberately stateless. React never learns the current theme, because the
 * pre-paint script in DocumentShell has already written `data-theme` onto
 * <html> by the time hydration runs — holding a copy in useState would mean
 * either a wrong first render or a flash while an effect corrects it. Instead
 * both icons and both labels ship in the markup and CSS shows the pair that
 * matches `data-theme`, so the server HTML is correct for either theme and
 * there is nothing to reconcile.
 */
export function ThemeToggle({ ui, className }: { ui: Copy["ui"]; className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
      localStorage.removeItem(LEGACY_THEME_STORAGE_KEY);
    } catch {
      // Private mode or blocked storage: the theme still applies for this page.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "flex size-11 items-center justify-center rounded-md text-fg-muted transition-colors duration-[120ms] hover:bg-surface hover:text-fg",
        className,
      )}
    >
      <Sun aria-hidden="true" className="theme-when-dark size-5" />
      <Moon aria-hidden="true" className="theme-when-light size-5" />
      <span className="theme-when-dark sr-only">{ui.toLight}</span>
      <span className="theme-when-light sr-only">{ui.toDark}</span>
    </button>
  );
}
