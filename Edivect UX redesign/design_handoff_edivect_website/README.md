# Handoff: Edivect — Official Website

## Overview
This package contains everything needed to build the **official marketing website** for
**Edivect**, a portable Windows 10/11 screen-annotation application whose defining
feature is that *every annotation stays fully editable* (vector objects — move, resize,
rotate, restyle, regroup, re-export forever). Tagline: **“Draw directly on your screen.
Edit everything later.”**

Target audience: mechanical/CAD engineers (CATIA, NX, Creo), QA inspectors, IT support,
software developers, trainers and teachers.

The single-page marketing site drives one conversion goal: **download the portable ZIP**.

## Target stack (requested)
Implement in a real codebase using:
- **Next.js 15** (App Router) · **React 19** · **TypeScript** (strict, no `any`)
- **Tailwind CSS 4** (map the design tokens below to `@theme` tokens — no inline CSS)
- **Framer Motion** for animation · **shadcn/ui** primitives · **lucide-react** icons
- `next/image`, `next/font` (Segoe UI is a system font — self-host optional; use a system
  stack), Metadata API for SEO, JSON-LD `SoftwareApplication`, `robots.txt`, `sitemap.xml`,
  `manifest.webmanifest`.

Suggested structure: `app/` (route + `layout.tsx` + `page.tsx` + metadata), `components/ui`
(Button, Badge, Card, Kbd, Tooltip, Accordion, Lightbox, GlassPanel…), `components/layout`
(Navbar, Footer), `components/sections` (Hero, Benefits, FeatureShowcase, HowItWorks,
FeatureGrid, ComparisonTable, Gallery, Shortcuts, Faq, DownloadCta), `components/motion`
(RevealAnimation, HoverGlow, ScrollProgress), `lib/` (data arrays + utils), `hooks/`
(useMediaQuery, useLockBodyScroll), `types/`.

## About the design files
The files in this bundle are **design references created in HTML** — a working prototype
showing the intended look, layout, copy and behavior. They are **not** production code to
copy verbatim. Recreate them in the Next.js/React environment above using idiomatic
components, Tailwind classes and Framer Motion. The HTML uses inline styles only because of
its authoring environment; in the real build, everything becomes Tailwind tokens/utilities
and reusable typed components.

Two companion specification documents are included for full context — read them first.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, radii, shadows, motion and copy are
all specified below and in the prototype. Recreate pixel-accurately, then map values to
Tailwind theme tokens so future pages stay consistent.

---

## Design tokens (authoritative — dark mode is primary)

### Color
| Token | HEX | Use |
|---|---|---|
| `bg` | `#0E0F11` | page canvas |
| `surface` | `#17181B` | nav, alternating sections |
| `surface.elevated` | `#1F2126` | popovers/dropdowns |
| `card` | `#1A1C20` | cards |
| `border` | `#2A2D33` | card/input edges |
| `divider` | `#202226` | subtle rules |
| `text.primary` | `#F2F3F5` | headings/body (16.8:1) |
| `text.secondary` | `#9BA1AA` | sub-copy (6.9:1) |
| `text.disabled` | `#5A5F68` | muted/meta |
| `accent` | `#4C8DD6` | CTA, links, active (5.6:1) |
| `accent.hover` | `#5F9BE0` | hover |
| `accent.pressed` | `#3E79BE` | pressed |
| `accent.subtle` | `#16283D` | icon chips, focus fill |
| `secondary` (teal) | `#3FB6A8` | rare 2nd accent / gradient |
| `success` | `#4FB477` | ✓, OK |
| `warning` | `#D9A441` | caution |
| `danger` | `#E15C5C` | error, NOK |
| `code.bg` | `#131417` | code blocks / dark sections |
| selection | `accent @ 24%` | text selection |
| hover overlay | `#FFFFFF @ 6%` | ghost hover |
| focus ring | `accent, 2px, 2px offset` | keyboard focus |
| modal scrim | `#000 @ ~78%` + blur 6 | lightbox backdrop |
| glass/mica | `#0E0F11 @ 82%` + blur 20 | sticky nav when scrolled |

**Light mode** (secondary, same token names): bg `#FFFFFF`, surface `#F5F6F8`, card `#FFFFFF`,
border `#E2E4E8`, text.primary `#14161A`, text.secondary `#5A6069`, accent `#2F6FB5`.

### Typography
System stack — `"Segoe UI Variable","Segoe UI",system-ui,-apple-system,sans-serif`;
code/kbd — `"Cascadia Code","Cascadia Mono",Consolas,monospace`. Weights 400/500/600/700 only.
- Display/hero: `clamp(40px,7vw,64px)`, 700, line 1.04, tracking −1.5px
- H2 (section): `clamp(28px,4vw,32px)`, 600, tracking −0.5px
- H3: 18–19px/600 · H4: 16px/600
- Body large 18/1.55 · Body 16/1.6 · Body small 14/1.55 · Caption 13
- Overline: 12px, 600, uppercase, tracking ~1px, color `accent`
- Button 15–17px/600 · Nav 15/500 · Code/kbd 12–14 mono
- Prose max width 720px; body never below 16px.

### Spacing / layout
4px base, 8px rhythm: `2 4 8 12 16 24 32 48 64 96 128`. Section vertical padding
**96 / 64 / 48** (desktop/tablet/phone). Container max **1200px**, outer gutter 24 (16 mobile).
Grids use `repeat(auto-fit, minmax(…,1fr))`, max 3 cards/row.

### Radius
inputs/badges/tooltip **6** · buttons/dropdown **8** · cards/screenshot frame/code **12** ·
dialog/lightbox/large media **16** · pills/avatars **full (999)**.

### Elevation (dark)
0 flat = border only · 1 = `0 2px 8px rgba(0,0,0,.35)` · 2 = `0 8px 24px rgba(0,0,0,.45)` ·
3 = `0 16px 48px rgba(0,0,0,.55)` · accent glow = `0 8px 24px rgba(76,141,214,.32)` (hero/CTA only).

### Motion
Durations: micro 120ms · UI 200ms · reveal 300–500ms · nothing >400ms for UI transitions.
Easing standard `cubic-bezier(0.2,0,0,1)`, exit `cubic-bezier(0.4,0,1,1)`. No bounce/elastic.
Scroll reveal = fade-up 16px, once, staggered ~60ms. **All motion must honor
`prefers-reduced-motion` (transforms → instant opacity; no float/parallax; autoplay video → poster).**

---

## Sections (top → bottom of the single page)

1. **Sticky Navbar** (`h-16`, z-100). Transparent over hero; on scroll >40px gains mica bg
   `rgba(14,15,17,.82)` + `backdrop-blur(20px)` + bottom `border` (transition 180ms). Left:
   logo (28px gradient-accent rounded-7 tile with a mark-glyph + “Edivect**Pro**”). Center-left
   ghost links: Features, How it works, Compare, FAQ. Right: GitHub icon-button (ghost) +
   **primary** “Download” button. Below 900px: replace links with a hamburger icon-button that
   toggles a full-width slide-in drawer (`#131417`, 48px rows, primary CTA pinned). Use a
   `useMediaQuery`/matchMedia hook — do NOT rely on JS width in the final build; Tailwind
   breakpoints (`md:`) are correct here.

2. **Hero** (centered, `pt-[150px] pb-20`). Status pill (green dot “Portable · Windows 10 & 11 ·
   No installation”) → display headline (line 2 “Edit everything later.” uses accent→teal
   gradient text) → body-large subtitle (max 680) → CTA pair: primary “Download — Portable ZIP”
   (48px, accent, glow shadow) + secondary “View on GitHub” (48px, surface + border, GitHub icon)
   → 5 outline chips (Offline · No telemetry · No admin rights · Multi-monitor · Vector · always
   editable) → framed hero screenshot with a blurred accent+teal glow behind it and a Windows-11
   window chrome bar (3 traffic dots + title “Edivect — Freeze mode · Monitor 1”).
   Background: two fixed radial accent glows + a faint dotted grid (both `pointer-events:none`,
   behind content).

3. **Benefits** — 4-up auto-fit grid of cards (`card` bg, `border`, radius 12, pad 24). Each:
   40px accent-subtle rounded icon tile + H3 + body-small. Titles: “Open → Draw → Export”,
   “Everything stays editable”, “Private by design”, “Built for CAD workflows”.

4. **Interactive Feature Showcase** (`#features`). Two columns (`0.9fr 1.1fr`; stack to 1col
   <900px). Left: 5 selectable feature rows (button, icon tile + name + short desc). Right:
   a window-framed preview panel. **Hovering/focusing/clicking a row swaps the panel’s icon,
   title, description and screenshot-placeholder** (200ms). Active row = accent-subtle bg +
   accent border. The 5 features + their long descriptions + screenshot captions are in
   `showcase[]` in the prototype logic — copy them verbatim: Editable objects · CAD measurement ·
   QA stamps & markers · Blur & focus · Freeze & boards. Default active index 0.

5. **How It Works** (`#how`, `surface`/`#131417` band, borders top+bottom). Centered heading +
   3 auto-fit steps, each: 56px numbered rounded-tile (accent number) + H3 + body. Steps:
   Open / Draw / Export (copy in prototype).

6. **Feature Grid** — left-aligned heading + 9-card auto-fit grid (`minmax(280px,1fr)`). Each:
   36px icon tile + H4 + body-small. Hover: border→`rgba(76,141,214,.5)` + `translateY(-2px)`.
   The 9 items (icon + title + desc) are in `gridFeatures[]`: Pen & highlighter · Lines & arrows ·
   Shapes · Text & speech bubbles · Number & letter markers · Check/cross & stamps · Layers &
   groups · History & autosave · Flexible export.

7. **Comparison Table** (`#compare`, band). Horizontally-scrollable table (min-width 640).
   Sticky-styled header; **Edivect column highlighted** (`rgba(76,141,214,.10)` header,
   `.06` cells). First column is a row `<th scope="row">`. Cells: ✓ (`success`, bold), — (`disabled`),
   or a small note (“limited”, “installer”, “opt-out”). 7 rows in `compareRows[]` comparing vs
   Snipping Tool / Greenshot / ShareX. Use real check/dash marks with `aria-label` “Yes”/“No”.

8. **Screenshot Gallery** — 6-card auto-fit grid (`minmax(300px,1fr)`). Each card = button
   (`aria-label` “Enlarge: …”): 16:10 screenshot-placeholder + footer row (title + expand icon).
   Hover lift like grid cards. Clicking opens the **Lightbox** (see interactions). 6 items in
   `gallery[]` (title + caption).

9. **Keyboard Shortcuts** (band). Centered heading + subtitle + auto-fit grid (`minmax(260px,1fr)`)
   of rows: label (left) + `<Kbd>` chip(s) (right). Kbd chip = mono 12px, `#0E0F11` bg, `border`
   with 2px bottom border, radius 5, pad 3/8. 12 shortcuts in `shortcuts[]` (V, A, R, T, N, B, F,
   Ctrl+G, Ctrl+Z, Ctrl+C, Ctrl+E, Ctrl+S).

10. **Download CTA** (`#download`, max 1200, pad 64/96). One large rounded-16 `surface` panel with
    a radial accent glow overlay: Windows pill → big headline “Download Edivect” → subtitle
    → primary 52px “Download ZIP (v1.0.0)” + secondary “Older versions” → meta line (Version 1.0.0
    · ~8.4 MB · SHA-256: a3f9…e21c).

11. **Footer** (`#131417`, border-top). 4-col grid (`1.4fr 1fr 1fr 1fr`; collapse to 2col <720):
    brand blurb + Product / Resources / Connect link columns. Bottom bar: “© 2026 Edivect.
    Released under the MIT License.” + “Portable · Offline · No telemetry”.

## Interactions & behavior
- **Sticky nav** background/border fade on scroll (>40px). Optional: hide-on-scroll-down,
  reveal-on-scroll-up past 400px (from design system; not in prototype — nice-to-have).
- **Mobile drawer** toggled by hamburger; `aria-expanded`; lock body scroll while open; close on
  link click and Escape.
- **Feature showcase**: `onMouseEnter` + `onFocus` + `onClick` set active index; panel content
  transitions (Framer Motion `AnimatePresence` fade/slide, 200ms). Keyboard reachable (buttons).
- **Gallery lightbox** (`role="dialog" aria-modal`): opens at clicked index; backdrop `#000 @78%`
  + blur; Close (×), Prev (‹), Next (›) buttons; **keyboard**: Esc closes, ArrowLeft/Right navigate
  (wraps). Trap focus, restore focus to the triggering card on close. Counter “n / 6”. Click
  backdrop closes; click inner panel does not (stopPropagation).
- **FAQ accordion**: single-open. Header button `aria-expanded`; chevron rotates 180° (200ms);
  answer expands (Framer Motion height/opacity). Use shadcn/ui `Accordion` (type="single",
  collapsible) — emits correct ARIA and is SEO-friendly (server-rendered content). 6 Q&As in
  `faqs[]`; index 0 open by default.
- **Scroll reveals**: elements marked for reveal fade-up 16px once when 12% in view
  (IntersectionObserver or Framer `whileInView` + `viewport={{ once:true }}`), stagger groups.
- **Buttons**: hover lightens accent, pressed darkens, focus shows 2px accent ring; disabled 40%.
- **Cards**: hover border→accent@40–55% + `translateY(-2px)`, ≤120ms.

## State
- `navScrolled: boolean` (scroll listener; passive).
- `mobileNavOpen: boolean`.
- `activeFeature: number` (0–4) for the showcase.
- `openFaq: number | null` (accordion) — or delegate to shadcn Accordion internal state.
- `lightboxIndex: number` (−1 closed) + derived `lightboxOpen`.
- Responsive: prefer CSS/Tailwind breakpoints (`md:`, `lg:`) over JS width. (The prototype uses a
  JS width listener only because its environment can’t use media queries — do NOT carry that over.)
No data fetching; all content is static (define arrays in `lib/content.ts`, strongly typed).

## Content
All copy is final (no Lorem Ipsum) and lives in the prototype — lift it exactly. Data arrays to
port: `showcase[]`, `gridFeatures[]`, `compareRows[]`, `gallery[]`, `shortcuts[]`, `faqs[]`.

## Assets / imagery
- **No illustrations, no stock people, no emoji.** Imagery = real product screenshots only.
- Every screenshot in the prototype is a **labeled placeholder** describing exactly what belongs
  there (e.g. “Main application window — frozen CAD viewport with a selected editable arrow
  (8 handles + rotation), floating properties card, grouped number markers ①②③”). Replace each
  with a real capture; keep the standard frame (1px `border`, radius 12/14, optional Win-11 chrome
  bar) and give each an accurate `alt` describing the annotation shown.
- Icons: **lucide-react**, outline, ~1.75 stroke, `currentColor`, sizes 16/20/22/36-tile. Filled
  variant only for active state. The logo mark is a simple annotation/pen glyph in a gradient tile.
- Provide OG/Twitter social image (1200×630), favicon, and `manifest` icons.

## SEO / performance targets
- Metadata API (title, description, keywords, canonical), Open Graph + Twitter cards, JSON-LD
  `schema.org/SoftwareApplication` (name, OS “Windows”, applicationCategory
  “DesignApplication”/“UtilitiesApplication”, offers price 0, downloadUrl).
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`.
- Server Components by default; mark only interactive pieces (`"use client"`): Navbar,
  FeatureShowcase, Gallery/Lightbox, FAQ, mobile drawer. Everything else renders on the server.
- Lighthouse goals: Perf >95, A11y 100, SEO 100, Best-Practices 100. `next/image` for all
  screenshots (lazy, sized, no CLS), dynamic-import the Lightbox.

## Accessibility (WCAG 2.2 AA)
Semantic landmarks (`header/nav/main/section/footer`), one `h1`, ordered heading hierarchy;
visible 2px accent focus rings (never remove without replacement); full keyboard operability
incl. lightbox arrows/Esc and focus trap+restore; status never color-only (icon + text/`aria-label`
in the comparison table); alt text on every screenshot; `prefers-reduced-motion` respected;
touch targets ≥44px, mouse ≥40px; contrast ≥4.5:1 text / ≥3:1 icons.

## Responsive
Verify at 360 / 390 / 480 / 768 / 1024 / 1280 / 1366 / 1440 / 1600 / 1920. No layout shift.
Section padding steps 96→64→48; grids collapse 3→2→1; nav → hamburger <900; comparison table
scrolls horizontally; hero/section type via `clamp()`; content stays 1200 centered on large monitors.

## Files in this bundle
- `Edivect Website.dc.html` — the high-fidelity website prototype (this is the thing to recreate).
- `Edivect Website Design System.dc.html` — full 22-section design system (brand, color,
  type, tokens, components, 40+ design rules, future-expansion plan). Source of truth for tokens.
- `Edivect UX Spec.dc.html` — the in-app product UX spec (context for what the product does;
  useful for writing accurate screenshot captions and feature copy).

> The `.dc.html` files are self-contained design references. Open them in a browser to view.
> Recreate the website in Next.js per the specs above — do not ship the HTML directly.
