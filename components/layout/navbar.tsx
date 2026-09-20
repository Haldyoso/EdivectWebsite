"use client";

import {
  AnimatePresence,
  domAnimation,
  LazyMotion,
  m,
  useReducedMotion,
} from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { useMediaQuery } from "@/hooks/use-media-query";
import { homePath, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Copy, NavItem } from "@/types";

interface NavbarProps {
  lang: Lang;
  copy: Copy;
  nav: NavItem[];
  /** Where each locale's equivalent of the current page lives. */
  langPaths: Record<Lang, string>;
  /**
   * Section anchors only resolve on the landing page. The changelog gets the
   * chrome without them rather than a row of links that jump nowhere.
   */
  showSections?: boolean;
}

export function Navbar({
  lang,
  copy,
  nav,
  langPaths,
  showSections = true,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { ui } = copy;

  // The drawer's trigger is hidden at md; close the drawer if the viewport
  // grows past that while it is open, or it would be stranded off-screen.
  const isDesktop = useMediaQuery("(min-width: 900px)");

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isDesktop) setMenuOpen(false);
  }, [isDesktop]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const downloadHref = showSections ? "#download" : `${homePath(lang)}#download`;

  return (
    <header className="fixed inset-x-0 top-0 z-100">
      <div
        className={cn(
          "h-16 border-b backdrop-blur-[20px] transition-[background-color,border-color] duration-[180ms] ease-standard",
          scrolled
            ? "border-border bg-nav-scrim"
            : "border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label={ui.primaryNav}
          className="mx-auto flex h-full max-w-[1200px] items-center gap-6 px-4 md:px-6"
        >
          <Link
            href={homePath(lang)}
            aria-label={showSections ? ui.backToTop : ui.home}
            className="rounded-md"
          >
            <Logo glow />
          </Link>

          <div className="flex-1" />

          <div className="hidden items-center gap-1 min-[900px]:flex">
            {showSections &&
              nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-[15px] font-medium text-fg-muted transition-colors duration-[120ms] hover:text-fg"
                >
                  {item.label}
                </a>
              ))}

            <LanguageSwitcher
              current={lang}
              paths={langPaths}
              ui={ui}
              className="ml-1"
            />

            <ThemeToggle ui={ui} />


            <Button asChild size="sm" className="ml-2">
              <Link href={downloadHref}>
                <Download aria-hidden="true" className="size-4" />
                {ui.download}
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-1 min-[900px]:hidden">
            <ThemeToggle ui={ui} />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
              className="flex size-11 items-center justify-center rounded-md border border-border bg-surface text-fg"
            >
              {menuOpen ? (
                <X aria-hidden="true" className="size-5" />
              ) : (
                <Menu aria-hidden="true" className="size-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* LazyMotion + `m` loads only the DOM animation features, not all of Framer. */}
      <LazyMotion features={domAnimation} strict>
        <AnimatePresence>
          {menuOpen && (
            <m.div
              id="mobile-menu"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
              className="max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-b border-border bg-code-bg min-[900px]:hidden"
            >
              <div className="flex flex-col gap-0.5 px-4 py-3 [@media(max-height:430px)]:py-2 md:px-6">
                {showSections &&
                  nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="rounded-md px-2 py-3.5 text-base font-medium text-fg [@media(max-height:430px)]:py-2"
                    >
                      {item.label}
                    </a>
                  ))}

                <div className="mt-2 flex items-center justify-between border-t border-divider px-2 pt-3">
                  <span className="text-sm text-fg-subtle">{ui.language}</span>
                  <LanguageSwitcher current={lang} paths={langPaths} ui={ui} />
                </div>

                <Link
                  href={downloadHref}
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 rounded-md bg-action px-2 py-3.5 text-center font-semibold text-white hover:bg-action-hover active:bg-action-pressed"
                >
                  {ui.downloadForWindows}
                </Link>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </header>
  );
}
