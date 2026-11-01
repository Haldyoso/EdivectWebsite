import Link from "next/link";

import { WordmarkObject } from "@/components/layout/wordmark-object";
import type { Lang } from "@/lib/i18n";
import type { Copy, FooterColumn } from "@/types";

interface FooterProps {
  lang: Lang;
  copy: Copy;
  columns: FooterColumn[];
}

/** Root-relative links go through <Link> so the basePath is applied. */
function isRoute(href: string) {
  return href.startsWith("/");
}

/** The page closes on its name, still an editable object, then the links. */
export function Footer({ copy, columns }: FooterProps) {
  return (
    <footer className="foot">
      <WordmarkObject label={copy.demo.wordmarkLabel} />

      <div className="foot-cols">
        <p className="foot-blurb">{copy.footer.blurb}</p>
        {columns.map((column) => (
          <nav key={column.title} aria-labelledby={`footer-${slug(column.title)}`}>
            <h2 id={`footer-${slug(column.title)}`}>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  {isRoute(link.href) ? (
                    <Link href={link.href}>{link.label}</Link>
                  ) : (
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="foot-legal">
        <span>{copy.footer.legal}</span>
        <span>{copy.footer.traits}</span>
      </div>
    </footer>
  );
}

/**
 * The column heading is translated, so it can carry spaces and diacritics that
 * do not belong in an id. Accents are stripped rather than encoded.
 */
const COMBINING_MARKS = /[̀-ͯ]/g;

function slug(value: string) {
  return value
    .normalize("NFD")
    .replace(COMBINING_MARKS, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
