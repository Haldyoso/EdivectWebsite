# Design: Edivect website

This file records the design system of the landing page as it is built: the
tokens, the composition, the components and the rules behind them. It is
derived from the shipped code (`app/globals.css`, `app/landing.css`,
`components/`). When the code changes, update this file with it.

Product facts, audience and voice are in `PRODUCT.md`. The brand source is the
app repository's `brand/tokens.json` and `docs/branding/BRAND_GUIDELINES.md`.

## The idea

**Objects on a work surface.** Edivect's one difference is that every mark stays
an editable object until export. The page shows that instead of describing it:

- The content lies on a graphite surface as *sheets* (paper, and one dark slab),
  each turned by at most 2°, as if it could still be picked up and moved.
- The headline's second line, "Edit everything later.", is selected the way the
  app selects an object: a dashed Signal Blue frame, white handles, a rotation
  grip and one Mark Orange active handle.
- Next to it is the *stage*, a live drawing surface. It is the only thing that
  sits level, because that is where the visitor works. A visitor draws an arrow,
  then selects it and changes it.
- The page closes on the name "Edivect", set very large and still selected. Its
  orange handle is live and resizes the name.

The stage and all fragments are labelled as synthetic samples. There is no
fabricated app window and no fake screenshot anywhere.

## Colour

Brand rules, from `brand/tokens.json`:

- **Signal Blue** `#2D7DF6` is identity, links, focus and selection. Filled
  buttons with white text use blue-600 `#1E63D6` (5.3:1).
- **Mark Orange** `#F5842B` means "selected / active handle / armed tool" and
  nothing else. On the page it appears only on the active handle of a
  selection, on the armed tool in the demo panel, and in the logo.
- **Graphite** is the blue-biased neutral ramp (`#0B0D14` … `#F4F6FA`). No pure
  greys.
- **Inks** are the colours marks are drawn in, used only inside the stage and
  the fragments: `#E53335` red, `#FFD400` yellow, `#23A55A` green, `#35E2FF`
  cyan, `#8B5CF6` purple, `#FF4FD8` magenta (the app's `Core/Palette.cs`).

Theme tokens (`app/globals.css`). Dark is the default; light is applied by
`<html data-theme="light">`:

| Token | Dark | Light | Use |
| --- | --- | --- | --- |
| `--color-bg` | `#181C24` | `#DDE2EC` | the work surface, page ground |
| `--color-surface` | `#1E222C` | `#FFFFFF` | filled tiles (FAQ), hover |
| `--color-paper` | `#E8EAF0` | `#FFFFFF` | paper sheets |
| `--color-paper-ink` | `#0B0D14` | `#0B0D14` | text on paper |
| `--color-paper-muted` | `#3E4453` | `#3E4453` | secondary text on paper |
| `--color-slab` | `#0B0D14` | `#12151D` | the one dark sheet |
| `--color-slab-ink` | `#F4F6FA` | `#F4F6FA` | text on the slab |
| `--color-stage` | `#12151D` | `#12151D` | drawing surface, dark in both themes (it stands for a screen) |
| `--color-fg` | `#E8EAF0` | `#12151D` | running text |
| `--color-fg-muted` | `#A6ADBD` | `#3E4453` | secondary text |
| `--color-accent` | `#5591F7` | `#1A50AE` | link text (AA on the ground) |
| `--color-signal` | `#2D7DF6` | `#1E63D6` | selection frames |
| `--color-action` | `#1E63D6` | `#1E63D6` | filled buttons |
| `--color-mark` | `#F5842B` | `#F5842B` | active handle only |

Inside a `.paper` sheet the `--color-fg` tokens are remapped to paper ink, and
focus rings switch to `#1E63D6` so they keep 3:1 on paper.

Proportions: the ground covers most of the page; paper is the second field (the
toolkit section is one full-width paper sheet); blue appears on actions and
selection; orange appears a handful of times per screen at most.

## Type

System faces only. Nothing is fetched from a CDN, which keeps the site consistent
with the product's offline, no-telemetry claim.

- Display: `"Segoe UI Variable Display", "Segoe UI", system-ui, …` (`--font-display`)
- Text: `"Segoe UI Variable Text", "Segoe UI", system-ui, …` (`--font-sans`)
- Code: `"Cascadia Mono", "Cascadia Code", Consolas, monospace`. Used only for
  the SHA-256 checksum, which is literal data.

Scale (`app/landing.css`):

| Step | Value | Used for |
| --- | --- | --- |
| `--t-display` | `clamp(40px, 4vw, 64px)`, 36px under 480px | h1 second line |
| `--t-section` | `clamp(30px, 3.5vw, 52px)`, 27px under 480px | section titles, step titles, h1 first line (scaled) |
| `--t-statement` | `clamp(21px, 1.9vw, 28px)` | h3 claims, feature names, channel names |
| `--t-body` | `clamp(16px, 1.15vw, 18px)` | running text, line-height 1.55 |
| `--t-small` | `15px` | meta, notes, footer |

Display type is weight 600 with `letter-spacing: -0.03em` and line-height
1–1.05. Headlines are sentence case, one face and one colour; there are no
styled accent words, eyebrows or uppercase labels. Numbers that align use
tabular figures.

## Layout

- One pair of outer margins, `--m: clamp(20px, 2.8vw, 40px)`, on every section.
- Section rhythm `--section-gap: clamp(104px, 12vw, 184px)`.
- A 12-column grid from 900px for split sections; single column on phones.
- Sheets are separated from the ground by tone only. No borders and no shadows
  at rest; only the skip link (on focus) floats.
- Corners: 4px on buttons and controls, square on sheets and stages.

## Components

**Sheet** (`.sheet`, with `.paper` or `.slab`): a filled block turned by
`--tilt` (−2°…+2°). Tilts are set per element and alternate direction.

**Selection chrome** (`.sel`): a decorative copy of the app's selection, drawn
around a sheet. It has a dashed 1.5px Signal Blue frame, eight 11px white
handles with blue edges, a rotation stalk with a light blue grip `#8AB4F8`, and
one active handle `.on` in Mark Orange. The values come from the app's
`UI/AnnotationCanvas.cs`.

**Button** (`.btn`): a flat `#1E63D6` fill with white 16px semibold text, 48px
tall (40px in the header) and a 4px radius. Hover is `#1A50AE` and press is
`#193F82` with a 1px drop. There are no gradients and no glow. Microsoft Store
and the portable EXE always get the same button.

**Header** (`components/layout/navbar.tsx`): a plain bar with the logo, four
section links, the EN/SK/DE switcher, the theme toggle and one Download button.
It is transparent over the hero and takes the ground colour once the page
scrolls. Below 900px a "Menu" button opens `#mobile-menu`, which ends with
"Download for Windows".

**Logo** (`components/layout/logo.tsx`): `app/icon.svg` inlined unchanged,
followed by the wordmark "Edivect" in one colour.

**Stage / live demo** (`components/demo/`): see below.

**Fragment** (`components/demo/fragments.tsx`): a still, synthetic piece of a
marked-up screen for each capability. It is drawn with the same renderer as
the demo, labelled "Synthetic sample" and hidden from assistive tech, because
the text beside it already carries the content.

**Key cap** (`.kbd`): a small paper block in the text face, 14px semibold.

**FAQ tile**: Radix accordion triggers are buttons with `aria-expanded`. A
closed tile is `--color-surface`; the open tile turns to paper.

## The live demo

`components/demo/annotation-demo.tsx`, `model.ts` and `ink.tsx` rebuild a
faithful subset of the app (the application repository: `Model/*.cs`,
`Core/CommandRegistry.cs`, `Core/ToolHints.cs`, `UI/AnnotationCanvas.cs`).

- **Tools and keys** (the app's own bindings): Select V, Arrow A, Line L,
  Rectangle R, Marker N, Dimension D.
- **Lines and arrows:** two endpoint handles, no rotation grip. Shift snaps to
  5°. The ends snap to bores, corners and other ends (shown by a mint diamond);
  Alt turns snapping off. Digits typed while drawing set the length in mm.
- **Rectangles:** eight handles and a rotation grip (Shift snaps to 15°). Shift
  makes a square, Ctrl fills it, the mouse wheel rounds the corners.
- **Markers:** auto-increment. The wheel changes the next number; right-click
  switches 1,2,3 and a,b,c.
- **Dimensions:** click, click, place the offset. Values read in mm against the
  sample's calibration (bores 58 mm apart).
- **Selection:** a hover halo along the shape, a dashed frame, and an orange
  active handle. Ctrl+drag copies; Alt+click takes the object's style.
- **Ink:** drawn with the app's one-pixel contrast rim (`ContrastInk.cs`).
- **Panel:** colour (six inks), width ±1 (1–20 px), undo/redo, duplicate,
  delete and reset.
- **Status line:** shows the app's own hint for the armed tool in the page's
  language. Layers list every object; clicking one selects it.
- **Keyboard:** the stage is focusable (`role="application"`). Enter places an
  object with the armed tool, or cycles the selection when Select is armed.
  Arrow keys nudge by 1 px (Shift: 10 px). `+` and `−` change the width;
  Delete removes; Ctrl+Z / Ctrl+Y / Ctrl+D undo, redo and duplicate; Esc
  deselects. The full key list is the stage's description, and it is shown in
  the status line while the stage has keyboard focus.
- **Screen readers:** selection changes are announced through a polite live
  region.
- **Phones:** below 520px the stage crops to a square around the sample, so
  marks are drawn at a usable size. Handle sizes and hit areas are scaled from
  the screen transform, so they keep their on-screen size.

Strings: tool names, hints, colour, action and panel labels are the app's
translations (`Resources/Lang/*.json`). They live in `Copy.demo` in
`lib/content/{en,sk,de}.ts`, together with the few web-only strings (region
labels, sample note, keyboard help, wordmark label).

## Sections, in order

The order follows the page's argument (`components/layout/landing.tsx`):

1. **Hero:**
   - Desktop: the h1 as two sheets (the lead line on paper, the main line on the
     selected slab) and the description on paper. Two equal channel sheets sit
     below them; the stage, the sample note and the facts sheet sit in the
     right column.
   - Phone: h1, description, stage, notes, then the two channels.
2. **Why Edivect:** four claims as large statements, each with its explanation.
   Two-ended rows on desktop, two columns on tablets.
3. **Features** (`#features`): five rows, each a statement beside a fragment.
   Rows alternate sides, and fragment widths vary (wide, normal, narrow).
4. **How it works** (`#how`): three sheets stepping down the page, in an `<ol>`.
   The middle step is the slab.
5. **Toolkit:** one full-width paper field with nine items in three columns,
   without icons.
6. **Compare** (`#compare`): a real table. The Edivect column is tinted with
   the blue subtle token, and every mark carries a text label. It is a
   focusable scroll region on narrow screens, with a hint line.
7. **Shortcuts** (`#shortcuts`): two-ended rows (label, then key caps) in two
   columns.
8. **FAQ** (`#faq`): a sticky heading on the left and filled tiles on the right.
9. **Download** (`#download`):
   - Channels: Microsoft Store and Portable EXE on equal sheets with the same
     button. The Store sheet carries the Store version. The EXE sheet carries
     its version, size and SHA-256.
   - Licences: Personal and Commercial Trial, then the shared and expiry notes
     and the terms link.
   - Release data comes only from `lib/site.ts` and `lib/distribution.ts`.
10. **Footer:**
    - The live wordmark object, a slider (`role="slider"`) that resizes from
      50% to 110% by dragging the orange handle or with the arrow keys.
    - The blurb, two link columns, and the legal line.

## Motion

- **Load:** the hero sheets settle into their tilt, moving 16px with no fade and
  staggered by 70ms (`.settle`, 520ms). The title is never faded.
- **Sections:** parts reveal once as they enter, fading up 16px over 350ms
  (`components/motion/reveal.tsx`). Content stays visible if script is off.
- **Controls:** colour or background changes in 120ms, and buttons press 1px.
- **Curve:** one standard curve, `cubic-bezier(0.2, 0.7, 0.2, 1)`. No bounce.
- **Reduced motion:** `prefers-reduced-motion: reduce` removes travel and
  durations. The demo has no ambient animation at all.

## Imagery and screenshots

There are no product screenshots yet, and none are faked. Rules:

- No stock photographs, no generated "app windows", no device frames.
- `docs/reference/app-tool-panel.png` is a reference for interface language
  only and is not published.
- **Screenshot slots:** each feature row's fragment is the slot for a real
  capture. To swap one in, render an image in place of `<Fragment>` in
  `components/sections/feature-showcase.tsx` and drop the "Synthetic sample"
  label.
- **Smoke test:** `tests/e2e/smoke.spec.ts` currently asserts that no
  `img[src*=screenshots]` exists. Update that assertion when real captures are
  published.

## Accessibility

- WCAG 2.2 AA in both themes. axe reports no violations for EN, SK, DE and
  Privacy at 1440 and 390px, dark and light.
- A skip link comes first in the tab order and moves focus to `<main>`.
- Focus is a visible 2px ring: Signal Blue on the ground, `#1E63D6` on paper,
  `#7FA8F9` inside the stage.
- Every control in the demo has an accessible name. Toggles use `aria-pressed`;
  groups are labelled.
- Status is never colour-only. Comparison marks have text, and colour swatches
  have names.

## Checks

- `npm run lint`, `npm run typecheck`, `npm run build`, `npm test`.
- The design gate used while building: `.claude/skills/design-taste-frontend`.
  Its `lint.mjs` runs on `components/` and `app/landing.css`; `inspect.mjs`
  runs on the production export.
- Lines in source that keep a pattern the gate flags carry a
  `taste-skill-ignore` comment with the reason. These are the app's own panel
  edges and rings inside the demo, and the purple ink.
