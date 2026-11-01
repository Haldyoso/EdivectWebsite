"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import { useMediaQuery } from "@/hooks/use-media-query";
import { homePath, type Lang } from "@/lib/i18n";
import type { Copy, NavItem } from "@/types";

interface NavbarProps {
  lang: Lang;
  copy: Copy;
  nav: NavItem[];
  /** Where each locale's equivalent of the current page lives. */
  langPaths: Record<Lang, string>;
  /**
   * Section anchors only resolve on the landing page. Other pages get the
   * chrome without them rather than a row of links that jump nowhere.
   */
  showSections?: boolean;
}

/**
 * A plain bar: wordmark, four section links, language, theme, one action.
 * It is transparent over the hero and takes the page ground once the page
 * scrolls, so text never runs under it. No blur, no shadow.
 */
export function Navbar({
  lang,
  copy,
  nav,
  langPaths,
  showSections = true,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { ui } = copy;

  // The drawer's trigger is hidden from 900px; close the drawer if the
  // viewport grows past that while it is open.
  const isDesktop = useMediaQuery("(min-width: 900px)");

  useLockBodyScroll(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <header className="topbar" data-scrolled={scrolled} data-open={menuOpen}>
      <nav aria-label={ui.primaryNav} className="topbar-row">
        <Link
          href={homePath(lang)}
          aria-label={showSections ? ui.backToTop : ui.home}
          className="rounded-sm"
        >
          <Logo />
        </Link>

        <div className="flex-1" />

        <div className="topbar-links">
          {showSections &&
            nav.map((item) => (
              <a key={item.href} href={item.href} className="navlink">
                {item.label}
              </a>
            ))}

          <LanguageSwitcher current={lang} paths={langPaths} ui={ui} className="ml-2" />
          <ThemeToggle ui={ui} />

          <Link href={downloadHref} className="btn ml-2">
            <Download aria-hidden="true" />
            {ui.download}
          </Link>
        </div>

        <div className="topbar-mobile flex items-center gap-1">
          <ThemeToggle ui={ui} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            className="menubtn"
          >
            {menuOpen ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
            <span aria-hidden="true">{ui.openMenu}</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="mobile-menu topbar-mobile">
          {showSections &&
            nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="navlink"
              >
                {item.label}
              </a>
            ))}

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[15px] text-fg-muted">{ui.language}</span>
            <LanguageSwitcher current={lang} paths={langPaths} ui={ui} />
          </div>

          <Link
            href={downloadHref}
            onClick={() => setMenuOpen(false)}
            className="btn mt-4 w-full"
          >
            {ui.downloadForWindows}
          </Link>
        </div>
      )}
    </header>
  );
}
