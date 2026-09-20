/**
 * Everything on the page that is NOT words: icons, screenshot file names,
 * keyboard keys, section anchors and the comparison matrix's yes/no values.
 *
 * These are facts about the product, so they live here once and every locale
 * reads the same copy of them. The alternative — a full content file per
 * language — would let a wrong `false` in the comparison table, or a screenshot
 * paired with the wrong description, survive in one language after being fixed
 * in another.
 */
import {
  ArrowRight,
  CircleCheck,
  Download,
  Focus,
  Highlighter,
  History,
  Layers,
  ListOrdered,
  Monitor,
  Pencil,
  Ruler,
  Shapes,
  Shield,
  Snowflake,
  Stamp,
  Type,
  Zap,
  type LucideIcon,
} from "lucide-react";

import type {
  BenefitId,
  CompareCell,
  CompareRowId,
  GalleryId,
  GridId,
  NavId,
  ShortcutId,
  ShowcaseId,
  StepId,
} from "@/types";

export const navIds: NavId[] = ["features", "how", "compare", "faq"];

export const navAnchors: Record<NavId, string> = {
  features: "#features",
  how: "#how",
  compare: "#compare",
  faq: "#faq",
};

export const benefitIds: BenefitId[] = ["speed", "editable", "private", "cad"];

export const benefitIcons: Record<BenefitId, LucideIcon> = {
  speed: Zap,
  editable: Pencil,
  private: Shield,
  cad: Monitor,
};

export const showcaseIds: ShowcaseId[] = [
  "editable-objects",
  "cad-measurement",
  "qa-stamps",
  "blur-focus",
  "freeze-boards",
];

export const showcaseIcons: Record<ShowcaseId, LucideIcon> = {
  "editable-objects": Pencil,
  "cad-measurement": Ruler,
  "qa-stamps": CircleCheck,
  "blur-focus": Focus,
  "freeze-boards": Snowflake,
};

/**
 * Root-relative and extensionless. `<Screenshot>` appends the format and the
 * basePath — see components/ui/screenshot.tsx for why the prefix cannot live in
 * the data.
 */
export const showcaseImages: Record<ShowcaseId, string> = {
  "editable-objects": "/screenshots/editable-objects",
  "cad-measurement": "/screenshots/measurement",
  "qa-stamps": "/screenshots/qa-stamps",
  "blur-focus": "/screenshots/blur-focus",
  "freeze-boards": "/screenshots/freeze-mode",
};

export const heroImage = "/screenshots/hero";

export const stepIds: StepId[] = ["open", "draw", "export"];

export const gridIds: GridId[] = [
  "pen",
  "lines",
  "shapes",
  "text",
  "markers",
  "stamps",
  "layers",
  "history",
  "export",
];

export const gridIcons: Record<GridId, LucideIcon> = {
  pen: Highlighter,
  lines: ArrowRight,
  shapes: Shapes,
  text: Type,
  markers: ListOrdered,
  stamps: Stamp,
  layers: Layers,
  history: History,
  export: Download,
};

export const galleryIds: GalleryId[] = [
  "markup",
  "handles",
  "palette",
  "qa",
  "angle",
  "export",
];

export const galleryImages: Record<GalleryId, string> = {
  markup: "/screenshots/gallery-markup",
  handles: "/screenshots/gallery-handles",
  palette: "/screenshots/gallery-palette",
  qa: "/screenshots/gallery-qa",
  angle: "/screenshots/gallery-angle",
  export: "/screenshots/gallery-export",
};

/**
 * Transcribed from the app's own command table (Core/CommandRegistry.cs) and,
 * for Freeze, its registered global hotkeys (Services/SettingsService.cs).
 * Freeze is the only entry here that fires while Edivect has no focus,
 * which is why it alone carries modifiers — the in-overlay tools are all a
 * single letter.
 */
export const shortcutIds: ShortcutId[] = [
  "drawMode",
  "freezeLocal",
  "savePng",
  "redo",
  "layers",
  "palette",
  "help",

  "select",
  "arrow",
  "rectangle",
  "text",
  "markers",
  "dimension",
  "angle",
  "blur",
  "exportRegion",
  "freeze",
  "undo",
  "repeat",
];

// Defaults checked against Edivect Core/CommandRegistry.cs and UI/HelpWindow.xaml.cs.
export const shortcutKeys: Record<ShortcutId, string[]> = {
  drawMode: ["Ctrl", "Alt", "D"],
  freezeLocal: ["Ctrl", "End"],
  savePng: ["Ctrl", "S"],
  redo: ["Ctrl", "Y"],
  layers: ["F8"],
  palette: ["Ctrl", "Shift", "P"],
  help: ["F1"],

  select: ["V"],
  arrow: ["A"],
  rectangle: ["R"],
  text: ["T"],
  markers: ["N"],
  dimension: ["D"],
  angle: ["G"],
  blur: ["B"],
  exportRegion: ["Q"],
  freeze: ["Ctrl", "Alt", "F"],
  undo: ["Ctrl", "Z"],
  repeat: ["Space"],
};

export const faqIds = [
  "install",
  "editable",
  "internet",
  "monitors",
  "reopen",
  "windows",
] as const;

export const compareRowIds: CompareRowId[] = [
  "editable",
  "vector",
  "layers",
  "measurement",
  "scale",
  "projectFile",
  "liveScreen",
  "portable",
  "offline",
];

/**
 * The comparison matrix. Values only — every label and qualifying note is
 * translated copy and lives in the locale files.
 *
 * Sourced, not remembered. Each competitor column is transcribed from the
 * vendor's own documentation, checked 2026-08-11:
 *
 * - Pointofix — pointofix.de/bedienung.php. A paint-over annotator: pen, lines,
 *   arrows, rectangles, ellipses, text, ticks and crosses, an eraser that
 *   "partially deletes", and saving to "JPG, PNG oder BMP". No object
 *   re-selection, no layers, no measurement, no project format.
 *
 * - Snipping Tool — Microsoft's and elevenforum's feature write-ups. Shapes can
 *   be resized, moved and recoloured, but "once the shape is deselected, it
 *   will merge with your image", so editing is transient. Its ruler and
 *   protractor are drawing guides for straight lines and arcs, not measurement
 *   read-outs, which is why the measurement row stays a No.
 *
 * - Greenshot — getgreenshot.org/downloads + the .greenshot format discussion.
 *   Elements stay editable for the editor session, and the .greenshot format
 *   persists them for later editing; only the flattened PNG bakes them in. A
 *   ZIP distribution exists in the version history alongside the installer.
 *
 * - ShareX — getsharex.com. The download page lists "Portable" next to "Setup".
 *   Its editor keeps annotation objects live for the session. The site states a
 *   "Privacy first" position and there is no documented telemetry — an earlier
 *   revision of this table marked its offline row "opt-out", which nothing
 *   supports, so it is a plain Yes.
 */
export const compareValues: Record<
  CompareRowId,
  {
    edivect: CompareCell;
    pointofix: CompareCell;
    snippingTool: CompareCell;
    greenshot: CompareCell;
    shareX: CompareCell;
  }
> = {
  editable: {
    edivect: true,
    pointofix: false,
    snippingTool: { note: "untilDeselect" },
    greenshot: { note: "inEditor" },
    shareX: { note: "inEditor" },
  },
  vector: {
    edivect: true,
    pointofix: false,
    snippingTool: { note: "limited" },
    greenshot: { note: "limited" },
    shareX: { note: "limited" },
  },
  layers: {
    edivect: true,
    pointofix: false,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  measurement: {
    edivect: true,
    pointofix: false,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  scale: {
    edivect: true,
    pointofix: false,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  projectFile: {
    edivect: { note: "jsonFile" },
    pointofix: false,
    snippingTool: false,
    greenshot: { note: "greenshotFile" },
    shareX: false,
  },
  liveScreen: {
    edivect: true,
    pointofix: true,
    snippingTool: false,
    greenshot: false,
    shareX: false,
  },
  portable: {
    edivect: true,
    pointofix: true,
    snippingTool: { note: "builtIn" },
    greenshot: { note: "zipBuild" },
    shareX: { note: "zipBuild" },
  },
  offline: {
    edivect: true,
    pointofix: true,
    snippingTool: true,
    greenshot: true,
    shareX: true,
  },
};

/** Column order: the head-to-head overlay first, capture-then-edit tools after. */
export const compareColumns = [
  { key: "pointofix", label: "Pointofix" },
  { key: "snippingTool", label: "Snipping Tool" },
  { key: "greenshot", label: "Greenshot" },
  { key: "shareX", label: "ShareX" },
] as const;
