# Edivect — official website

Marketing site for **Edivect**, the portable Windows screen-annotation app whose
annotations stay fully editable. One conversion goal: download one portable EXE; choose the licence mode in the app.
Published in English, Slovak and German.

The handoff bundle below still says "Edivect" throughout — that was the working name
during design. The shipped product and this site are **Edivect**; the bundle is kept
verbatim as the original deliverable.

Built to the spec in
[`Edivect UX redesign/design_handoff_edivect_website/README.md`](<Edivect UX redesign/design_handoff_edivect_website/README.md>).

## Stack

Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 4 ·
Framer Motion · Radix primitives (shadcn-style) · lucide-react · marked (build-time only).

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run lint
npm run typecheck
npm run verify:release
npm run check:links
npm test
```

Two maintenance scripts, neither part of the build:

```bash
npm run sync:changelog -- ../Edivect   # refresh content/CHANGELOG.md from the app repo
npm run optimize:screenshots              # convert any new PNG in public/screenshots to WebP
```

## Layout

```
app/
  (en)/  landing + legal pages + root layout -> /
  (sk)/  landing + legal pages + root layout -> /sk
  (de)/  landing + legal pages + root layout -> /de
  manifest.ts, robots.ts, sitemap.ts, globals.css
components/
  layout/     DocumentShell, Landing, ChangelogPage, Navbar, Footer, Logo,
              LanguageSwitcher, ThemeToggle, PageBackdrop, SkipLink
  sections/   Hero, Benefits, FeatureShowcase, HowItWorks, FeatureGrid,
              ComparisonTable, Gallery, Shortcuts, Faq, DownloadCta
  motion/     Reveal (IntersectionObserver fade-up)
  ui/         Button, Badge, Card, Kbd, Accordion, WindowFrame, Screenshot, Lightbox
hooks/        useMediaQuery, useLockBodyScroll
lib/
  content/    shared.ts (facts) + en/sk/de.ts (words) + index.ts (joins them)
  i18n.ts     locales and their paths
  metadata.ts per-locale <head>, canonical and hreflang
  structured-data.ts  SoftwareApplication + FAQPage JSON-LD
  changelog.ts        parses content/CHANGELOG.md at build time
  site.ts     release info and basePath · theme.ts · utils.ts
types/        shared content types, including the Copy interface
content/      CHANGELOG.md, vendored from the app repo
```

Everything is a Server Component except the interactive islands: `Navbar`,
`ThemeToggle`, `FeatureShowcase`, `Gallery`, `Lightbox` (dynamically imported) and the
FAQ `Accordion`.

Production launch notes and operational checklists live in [`docs/`](docs/):
the readiness audit, licensing decisions, release procedure, custom-domain
migration, and security/analytics guidance.

## Languages

English is the default and lives at the site root; Slovak and German hang off `/sk` and
`/de`. `output: "export"` rules out middleware, so a language-negotiating `/` could only
be a client-side redirect — an extra round trip on the most common entry point. Serving
the default language directly avoids that and avoids an `/en` duplicate of `/`.

Each locale is its own **route group with its own root layout**, which is the only way
`<html lang>` can be a server-rendered attribute per language. Moving between groups
forces a full page load; for a language switch that is the correct behaviour, not a cost.

### Adding or changing copy

Copy lives in `lib/content/{en,sk,de}.ts`, all three typed as `Copy` from
[`types/index.ts`](types/index.ts). **Change English first** — the shared interface then
makes the other two fail `npm run typecheck` until they catch up, so a missing German
string is a build error rather than an English sentence that survives into production.

What deliberately does **not** live in the locale files: icons, screenshot file names,
keyboard keys and the comparison matrix's yes/no values. Those are facts about the
product, not language, and live once in
[`lib/content/shared.ts`](lib/content/shared.ts). Triplicating them would let a wrong
`false` in the comparison table survive in one language after being fixed in another.

Each locale emits `<link rel="alternate" hreflang>` for all three plus `x-default`, and
the sitemap repeats the full alternate set on every URL — an alternate group is only
trusted when every member points back at every other.

## Design tokens

All colors, radii, shadows, easings and fonts are `@theme` tokens in
[`app/globals.css`](app/globals.css) — no hard-coded hex outside that file.

The one mapping worth memorizing: the spec's `text.primary` / `text.secondary` /
`text.disabled` are the utilities `text-fg` / `text-fg-muted` / `text-fg-subtle`.

### Themes

Dark is the brand default and the theme every screenshot was captured in. The light token
set applies when `:root` carries `data-theme="light"`, which the navbar toggle writes and
an inline script in `DocumentShell` replays from `localStorage` before first paint.

**With nothing stored, no attribute is set and dark stands.** `prefers-color-scheme` is
deliberately not consulted: honouring it would flip a large share of visitors to a light
page whose screenshots are all dark, which is a design decision rather than a fix.

The toggle holds no React state. Both icons and both labels ship in the markup and CSS
picks the pair matching `data-theme` (`.theme-when-dark` / `.theme-when-light`), so the
server HTML is correct for either theme and there is nothing to reconcile at hydration.

Anything that inverts with the theme needs a token, not a literal — `--color-nav-scrim`
and `--color-hatch-a/b` exist because a hard-coded dark navbar scrim and a hard-coded
dark hatch both broke the light theme, the second by putting near-black body copy on a
near-black panel.

## Screenshots and release history

The public website currently has no application screenshots or gallery. Features
are presented as text cards. The previous screenshot files have been removed.

What's new and the localized changelog routes are removed for the 1.0.0 launch.
The archived source history is not published. Future public release notes should
start with 1.0.0 and document subsequent versions, excluding the old development log.

## Keyboard shortcuts

Default bindings are checked against `../Edivect/src/Edivect/Core/CommandRegistry.cs`
and `UI/HelpWindow.xaml.cs`. The website distinguishes global shortcuts from drawing
mode and export-area selection from saving PNG. Custom user bindings can differ.

## Comparison table

Every competitor cell is transcribed from vendor documentation, with the sources and
dates recorded in the comment above `compareValues` in
[`lib/content/shared.ts`](lib/content/shared.ts). **Check the source before changing a
value**, and update that comment in the same commit.

A 2026-08-11 pass against the vendors' own pages corrected three claims that were wrong
in Edivect's favour: Greenshot and ShareX both ship portable ZIP builds (they were
marked installer-only), Greenshot's `.greenshot` format does keep elements editable for
later (it was marked a flat No), and ShareX's offline row carried an "opt-out" note that
nothing in its documentation supports.

The magnifier row, which Edivect loses to Pointofix, stays in on purpose. A table the
incumbent loses 10–0 reads as a strawman.

## Deployment

Production: **https://edivect.com**, served by Cloudflare Worker `edivect`.
Downloads are served by R2 at **https://downloads.edivect.com**.
The GitHub Pages workflow below remains available during migration.

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
lint → typecheck → `next build` → publish `out/` to GitHub Pages. Live at
**https://haldyoso.github.io/EdivectWebsite/**.

Pages is a static file host with no Node process, which forces four things:

- `output: "export"` in [`next.config.ts`](next.config.ts). Every metadata route
  (`manifest`, `robots`, `sitemap`, the OG images) needs `export const dynamic =
  "force-static"` or the build fails on it — one at a time, so expect to hit them in turn.
- **`basePath`** — project sites are served from `/<repo>`, not the root. It lives in
  [`lib/site.ts`](lib/site.ts) so the config and the app share one value. Next rewrites
  `<Link>` and the build output automatically. Two places it does **not** reach, both
  prefixed by hand:
  - strings inside the manifest JSON body ([`app/manifest.ts`](app/manifest.ts)) — plain
    data as far as Next is concerned;
  - `next/image` **when `images.unoptimized` is set**. The prefix is normally applied by
    the loader, and turning optimization off short-circuits exactly that loader, so the
    tag ships the bare `src` and every capture 404s on a project site. Handled once in
    [`components/ui/screenshot.tsx`](components/ui/screenshot.tsx).
- **`images.unoptimized: true`** — the default loader resizes on request and there is no
  server to do it.
- **No security headers.** The `headers()` block was removed rather than left to be
  silently dropped: Pages sends a fixed header set and cannot add to it. Restore it if
  this ever moves to a host that runs Node.

The three localized OG cards are generated into `public/` by
`tools/generate-og-images.mjs` before every production build. The generator uses bundled
Noto Sans fonts and Sharp, so output is deterministic and Pages serves real `.png` files
with the correct content type instead of the extensionless file produced by Next's image
convention.

`robots.txt` is emitted at `/EdivectWebsite/robots.txt`, which crawlers ignore; only a
root-domain one counts. It costs nothing and starts working the day this gets a real
domain.

## Release and launch notes

- The public download is `1.0.0`: one app with Personal and 30-day Commercial Trial modes.
- Version, size and SHA-256 in `lib/site.ts` are verified against `releases/`; downloads are served from Cloudflare R2.
- Cloudflare Worker: `edivect`, static assets in `out/`. The EXE must never be bundled in `out/`.
- Production build: `NEXT_PUBLIC_BASE_PATH="" NEXT_PUBLIC_SITE_URL="https://edivect.com" npm run build`.
- Public release verification: `npm run verify:release -- --remote`.
- Licence behaviour and paid-launch follow-ups: [Personal / Commercial Trial](docs/PERSONAL-COMMERCIAL-TRIAL.md).
- The app repository is private; support links point to the website repository.

## Accessibility & motion

One `h1`, ordered headings, semantic landmarks. Each locale's `<html lang>` is
server-rendered, and the language switcher's links carry `hreflang` and `lang` so a screen
reader pronounces "Slovenčina" in Slovak rather than with the page's voice.

The lightbox traps focus, restores it to the card that opened it, and supports Esc and
←/→ (wrapping). Comparison-table status is never color-only — every ✓/— carries a visually
hidden "Yes"/"No" in the page's own language, and qualifying notes are translated strings
rather than English fragments. All motion honors `prefers-reduced-motion`.

Scroll reveals are IntersectionObserver-driven, with the hidden state scoped to
`html[data-js="on"]` (set by the same inline script that applies the theme, before first
paint). A Framer Motion `initial` would instead ship `opacity: 0` in the server HTML,
blanking the page for no-JS clients and holding LCP until hydration.
