# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

A broad technical audience, weighted equally: mechanical and CAD engineers
(CATIA, NX, Creo), QA inspectors, IT support, software developers, and trainers
or teachers. They share one job: marking up something on a Windows screen during
real work, then sending or keeping the result. They evaluate the tool for themselves
and often for use at work, so the Commercial Trial matters as much as Personal use.

## Product Purpose

Edivect is a Windows 10/11 screen-annotation app in which every annotation stays a
fully editable vector object. Arrows, callouts, shapes, measurements, stamps and
blur can be selected, moved, rotated, restyled and regrouped long after they were
drawn. Nothing is flattened until export. The website explains this, shows the real
product, and leads to a download. Success means a visitor understands the
editability difference and installs the app from either channel.

## Positioning

Editing comparable to a vector illustration tool, at the speed of a screenshot tool.
Snipping Tool, Greenshot, ShareX and Pointofix flatten marks or offer only a light
editor. Edivect keeps an object model across the whole session and in its JSON
project file. CAD-native measurement is part of the positioning: 3-point arcs and
angle tools follow CATIA/NX habits. So are the offline, no-account, no-telemetry,
no-admin-rights properties.

## Operating Context

- Global hotkey → overlay on the current monitor → draw → export to the clipboard,
  PNG/JPG, or an editable JSON project. Freeze mode holds live screens still while
  they are marked up. Whiteboard and blackboard modes are used for training.
- Typical subjects: engineering drawings, CAD viewports, inspection reports,
  application UIs, and live dashboards or gauges.
- Keyboard-heavy use: single-key tools, global shortcuts, F1 for help.
- Multi-monitor desktops.

## Capabilities and Constraints

- Two download channels with equal weight: the Microsoft Store (product 9N9W449D59G7,
  app version 1.0.0.3) and the portable EXE (1.0.0, published SHA-256 and size). Release
  facts live in `lib/site.ts` and `lib/distribution.ts`. Never hard-code them elsewhere.
- Licence: Personal (private use, no expiry) or a 30-day Commercial Trial with a
  one-time 30-day extension in the app. Commercial licences are **not sold yet**.
  Don't show pricing, checkout, or "buy" language.
- Portable and Store terms differ and are shown separately (`lib/usage-terms.json`,
  `lib/store-usage-terms.json`).
- Three locales (EN source, SK, DE) share one `Copy` interface. Every section exists
  in all three or in none. German strings run long.
- Static export on GitHub Pages with a basePath of `/EdivectWebsite`. A custom domain
  is planned (`docs/CUSTOM-DOMAIN-MIGRATION.md`). Release maintenance follows `AGENTS.md`.
- Existing stack: Next.js 15 App Router, React 19, TypeScript strict, Tailwind 4,
  Framer Motion, Radix, and lucide-react. CI runs lint, typecheck, link checks, and
  Playwright smoke and axe tests.
- The application repository is private. Public links point to the website repository
  and its issues.

## Brand Commitments

- Name: **Edivect**. The handoff bundle under `Edivect UX redesign/` is a historical
  deliverable, not the current visual authority.
- Tagline: "Draw directly on your screen. Edit everything later."
- App icon: `app/icon.svg`.
- Voice: plain, factual, engineer-to-engineer. Make concrete claims about behaviour,
  without hype.
- The current look came from a default AI pass. The owner explicitly does not treat it
  as binding and wants a better visual direction.

## Evidence on Hand

- Real product copy and a feature inventory in `lib/content/{en,sk,de}.ts`.
- A changelog at `content/CHANGELOG.md`.
- A comparison against Pointofix, Snipping Tool, Greenshot and ShareX (the comparison
  section in the content files).
- App UI reference: `docs/reference/app-tool-panel.png` shows the real tool panel.
  It has a graphite background and grouped sections (Tools, Actions, Color, Stroke,
  Opacity). The active tool has an orange frame, and selection and toggle states are
  blue. A preview of the current stroke sits above a status line of modifier hints.
  It is reference only: the owner does not want this image published on the site.
  Its interface language may inform the site, and the app's own real tools and
  states may be faithfully rebuilt as interactive HTML.
- Product screenshots: **none at present**. They were removed in commit 4c0be69. The
  owner will supply new, current screenshots or video. Until then, never fabricate
  product UI, mock captures, or fake app chrome presented as the real app.
- No testimonials, customer logos, user counts, ratings, press, or benchmarks exist.
  Don't invent them. The "under two seconds" launch claim already exists in the copy.

## Product Principles

1. Show the editability. The one difference worth proving is that marks stay objects.
   Every surface should make that visible, not just state it.
2. Equal channels, honest licensing. The Store and portable downloads stand side by
   side. Licence terms are stated exactly, with no implied purchases.
3. Built for the person at the keyboard. Respect technical readers: precise numbers,
   real shortcuts, no marketing filler.
4. Private and local is a fact, not a slogan. Offline, no account and no telemetry are
   stated plainly, and the site itself should not contradict them.
5. One page, three languages. Structure and claims stay identical across EN, SK and DE.

## Accessibility & Inclusion

WCAG 2.2 AA is the working standard (enforced by the axe Playwright tests in CI). The
site has a full keyboard path and a skip link, respects reduced motion, and keeps
contrast-safe tokens in both the dark and light themes.
