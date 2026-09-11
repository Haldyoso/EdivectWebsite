# Screenshot backdrop

Nothing here ships to the site. This is the stage set: the thing held open on
screen *behind* Edivect while the captures in `public/screenshots/` are taken.

## `guide-bracket.svg`

An ISO-conformant 2D detail drawing of a machined guide bracket, authored as
vector code rather than generated as an image, so the lettering stays crisp and
every dimension is a real number that survives being read closely.

Open it in a browser and it fills the viewport exactly at 1920 × 1080 — no
wrapper page needed. For capture work, run the browser in kiosk mode against a
throwaway profile so no bookmarks bar or personal tabs end up in frame:

```bash
msedge --kiosk --edge-kiosk-type=fullscreen \
       --user-data-dir=/tmp/capture-profile --no-first-run \
       file:///…/tools/backdrop/guide-bracket.svg
```

What it conforms to: ISO 5457 (sheet, frame, centring marks), ISO 7200 (title
block), ISO 128-2/-24 (line types — two widths at a 2:1 ratio), ISO 129-1
(dimensioning), ISO 1101 (flatness, perpendicularity, position), ISO 2768-mK.
Projection is **first angle**, with the matching symbol in the title block.

Three fields are load-bearing and must survive any edit: **SERIAL**, **DRAWN**
and **CHECKED** in the title block. The `blur-focus` screenshot exists to show
sensitive data being redacted, and it redacts exactly those three.

Known compromises, so nobody re-discovers them as bugs:

- The `2 × 45°` chamfer is 6 px at this scale, so the leader arrow nearly covers
  it. A real sheet would carry a 5:1 detail view.
- Section A–A is an offset section through three holes, so the cut material reads
  as four islands. Correct, but it relies on the aligned centre lines to be read
  as one plate.
- Lettering falls back to Arial Narrow. A true ISO 3098 face is not installed on
  most machines and cannot be fetched at capture time.

## `drawing-prompt.md`

The brief that produced the drawing, kept so a different part can be commissioned
later without re-deriving the constraints. It specifies the geometry up front —
that is what stops a generator from inventing dimensions that contradict each
other, which is the usual reason a drawing looks amateur at a glance.

It asks for **SVG source, never a raster image**. Image generators cannot hold
text, numbers and line weights together, which are the three things a drawing is
made of.

## Reproducing the screenshots

The captures currently in `public/screenshots/` were taken against an earlier,
cruder backdrop that no longer exists. They are consistent with each other, so
there is no need to redo them — but if any one of them is ever re-shot, the whole
set should be re-shot against this drawing, or the backdrop will visibly change
halfway down the page.
