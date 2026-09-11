import type { Lang } from "@/lib/i18n";
import { LEGACY_THEME_STORAGE_KEY, THEME_STORAGE_KEY } from "@/lib/theme";

/**
 * The <html>/<body> pair, shared by the three root layouts.
 *
 * Next allows one root layout per route group, which is what makes `lang` a
 * real attribute here rather than something patched on by script after load —
 * a JS-less client and a screen reader both get the right language from the
 * server HTML. The three layouts differ only in which Lang they pass.
 *
 * Structured data is emitted by the pages, not here: the FAQ block belongs only
 * on the page that renders those questions.
 */

/**
 * Runs before first paint, so neither flag can cause a flash:
 *
 * - `data-js` gates the scroll-reveal CSS. Only once it flips to "on" does
 *   anything get hidden, so a JS-less client sees the whole page and a JS
 *   client never watches content appear and then vanish.
 * - `data-theme` is read back from localStorage. Applying it here rather than
 *   in an effect avoids painting the dark default and then repainting light.
 *   Absent a stored choice nothing is set and the dark tokens on :root stand,
 *   which keeps the brand default and the screenshots in agreement.
 */
const bootScript = `document.documentElement.dataset.js="on";try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)})||localStorage.getItem(${JSON.stringify(
  LEGACY_THEME_STORAGE_KEY,
)});if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;localStorage.setItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)},t)}}catch(e){}`;

interface DocumentShellProps {
  lang: Lang;
  children: React.ReactNode;
}

export function DocumentShell({ lang, children }: DocumentShellProps) {
  return (
    // The boot script mutates data-js and data-theme before React hydrates.
    <html
      lang={lang}
      data-js="off"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body>
        {/*
         * First node in <body> rather than inside a <head> element. App Router
         * builds the head from the metadata API and lints against a hand-rolled
         * <head>; a synchronous script here still runs before the rest of the
         * body is parsed, which is all these two attributes need.
         */}
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
        {children}
      </body>
    </html>
  );
}
