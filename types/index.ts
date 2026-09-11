import type { LucideIcon } from "lucide-react";

/**
 * Every screenshot on the site is described by this shape. `src` is optional on
 * purpose: until a real capture exists, `<Screenshot>` renders a labeled
 * placeholder from `alt`. Dropping a file into /public/screenshots and setting
 * `src` here switches that slot over to `next/image` with no other changes.
 */
export interface Screenshot {
  src?: string;
  /** Describes the annotation shown, not the app in general. */
  alt: string;
  width?: number;
  height?: number;
}

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

/**
 * No `icon` field, unlike Benefit and GridFeature. The showcase is a Client
 * Component, and a lucide icon is a React component — those cannot cross the
 * server/client boundary as props ("Functions cannot be passed directly to
 * Client Components"). It looks its own icon up from `showcaseIcons` by `id`
 * instead, which is why `id` is the union rather than a loose string.
 */
export interface ShowcaseFeature {
  id: ShowcaseId;
  name: string;
  /** One-line summary shown in the selectable row. */
  short: string;
  /** Long copy shown in the preview panel. */
  description: string;
  screenshot: Screenshot;
}

export interface GridFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

/**
 * A cell is a plain yes/no, or the id of a short qualifying note ("limited",
 * "in editor", …). Ids rather than strings because the note is displayed copy
 * and has to survive translation — see `CompareQualifier` in lib/content.
 */
export type CompareCell = boolean | { note: CompareQualifierId };

export type CompareQualifierId =
  | "limited"
  | "inEditor"
  | "untilDeselect"
  | "greenshotFile"
  | "jsonFile"
  | "builtIn"
  | "zipBuild";

export interface CompareRow {
  label: string;
  screenMarkPro: CompareCell;
  /** The head-to-head competitor: the other draw-anywhere overlay. */
  pointofix: CompareCell;
  snippingTool: CompareCell;
  greenshot: CompareCell;
  shareX: CompareCell;
}

export interface GalleryItem {
  title: string;
  caption: string;
  screenshot: Screenshot;
}

export interface Shortcut {
  label: string;
  /** Rendered as separate <kbd> chips joined by "+". */
  keys: string[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface NavItem {
  label: string;
  href: string;
}

/** A section's overline / title / optional subtitle triplet. */
export interface HeadingCopy {
  overline: string;
  title: string;
  subtitle?: string;
}

/**
 * Everything on the page that is words. One object per locale, all three
 * conforming to this type — so a missing German string is a build error rather
 * than an English sentence that quietly survives into production.
 *
 * What is NOT in here: icons, screenshot file names, keyboard keys and the
 * comparison matrix's yes/no values. Those are facts about the product, not
 * language, and live once in lib/content/shared.ts. Triplicating them would
 * mean a wrong `false` could hide in one locale forever.
 */
export interface Copy {
  meta: {
    tagline: string;
    description: string;
    /** Short, blunt description for the manifest and social cards. */
    social: string;
  };
  ui: {
    skipToContent: string;
    backToTop: string;
    home: string;
    githubRepo: string;
    openMenu: string;
    closeMenu: string;
    download: string;
    downloadForWindows: string;
    language: string;
    switchLanguage: string;
    toLight: string;
    toDark: string;
    yes: string;
    no: string;
    primaryNav: string;
    benefitsLabel: string;
    galleryLabel: string;
    enlarge: string;
    close: string;
    previousScreenshot: string;
    nextScreenshot: string;
    screenshotViewer: string;
    imageOfTotal: string;
  };
  nav: Record<NavId, string>;
  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    chips: string[];
    frameTitle: string;
    screenshotAlt: string;
  };
  benefits: Record<BenefitId, { title: string; description: string }>;
  showcase: {
    heading: HeadingCopy;
    items: Record<ShowcaseId, { name: string; short: string; description: string; alt: string }>;
  };
  howItWorks: {
    heading: HeadingCopy;
    steps: Record<StepId, { title: string; description: string }>;
  };
  featureGrid: {
    heading: HeadingCopy;
    items: Record<GridId, { title: string; description: string }>;
  };
  compare: {
    heading: HeadingCopy;
    regionLabel: string;
    scrollHint: string;
    caption: string;
    capability: string;
    rows: Record<CompareRowId, string>;
    qualifiers: Record<CompareQualifierId, string>;
  };
  gallery: {
    heading: HeadingCopy;
    items: Record<GalleryId, { title: string; caption: string }>;
  };
  shortcuts: {
    heading: HeadingCopy;
    items: Record<ShortcutId, string>;
  };
  faq: {
    heading: HeadingCopy;
    items: Record<FaqId, { question: string; answer: string }>;
  };
  downloadCta: {
    platform: string;
    title: string;
    subtitle: string;
    publicTrialButton: string;
    /** `{version}` and `{date}` describe the public time-limited trial build. */
    publicTrialValidity: string;
    olderVersions: string;
    versionLabel: string;
    checksumLabel: string;
    /** Shown in place of the checksum until a real release exists. */
    checksumPending: string;
  };
  footer: {
    blurb: string;
    columns: Record<FooterColumnId, string>;
    links: Record<FooterLinkId, string>;
    legal: string;
    traits: string;
  };
  changelog: {
    title: string;
    description: string;
    back: string;
    /** Explains that the entries below are the app's own release notes. */
    intro: string;
    /** Shown when the vendored changelog file is empty or missing. */
    empty: string;
    sourceNote: string;
    /** `{current}` and `{notes}` explain any build/release-note version gap. */
    currentBuild: string;
    /**
     * Shown when the file holds more releases than the page renders.
     * `{shown}` and `{total}` are substituted at render time.
     */
    truncated: string;
  };
}

export type NavId = "features" | "how" | "compare" | "faq";

export type BenefitId = "speed" | "editable" | "private" | "cad";

export type ShowcaseId =
  | "editable-objects"
  | "cad-measurement"
  | "qa-stamps"
  | "blur-focus"
  | "freeze-boards";

export type StepId = "open" | "draw" | "export";

export type GridId =
  | "pen"
  | "lines"
  | "shapes"
  | "text"
  | "markers"
  | "stamps"
  | "layers"
  | "history"
  | "export";

export type CompareRowId =
  | "editable"
  | "vector"
  | "layers"
  | "measurement"
  | "scale"
  | "projectFile"
  | "liveScreen"
  | "portable"
  | "offline";

export type GalleryId =
  | "markup"
  | "handles"
  | "palette"
  | "qa"
  | "angle"
  | "export";

export type ShortcutId =
  | "select"
  | "arrow"
  | "rectangle"
  | "text"
  | "markers"
  | "dimension"
  | "angle"
  | "blur"
  | "exportRegion"
  | "freeze"
  | "undo"
  | "repeat";

export type FaqId =
  | "install"
  | "editable"
  | "internet"
  | "monitors"
  | "reopen"
  | "windows";

export type FooterColumnId = "product" | "resources" | "connect";

export type FooterLinkId =
  | "features"
  | "how"
  | "compare"
  | "download"
  | "faq"
  | "documentation"
  | "changelog"
  | "shortcuts"
  | "github"
  | "license"
  | "privacy"
  | "terms"
  | "issues";
