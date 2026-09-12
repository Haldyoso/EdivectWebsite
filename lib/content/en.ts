import type { Copy } from "@/types";

/**
 * English — the source locale. When copy changes, change it here first; the
 * `Copy` type then makes the other two locales fail to compile until they catch
 * up, which is the whole point of keying them off one interface.
 */
export const en: Copy = {
  meta: {
    tagline: "Draw directly on your screen. Edit everything later.",
    description:
      "The portable screen-annotation tool for engineers. Every arrow, callout and measurement stays a fully editable vector object — move it, restyle it, regroup it, re-export it. No installation, no login, no internet.",
    social:
      "Portable · Windows 10 & 11 · No installation · Vector, always editable",
  },
  ui: {
    skipToContent: "Skip to content",
    backToTop: "Edivect — back to top",
    home: "Edivect — home page",
    githubRepo: "Edivect website repository on GitHub",
    openMenu: "Menu",
    closeMenu: "Close menu",
    download: "Download",
    downloadForWindows: "Download for Windows",
    language: "Language",
    switchLanguage: "Change language",
    toLight: "Switch to light theme",
    toDark: "Switch to dark theme",
    yes: "Yes",
    no: "No",
    primaryNav: "Primary",
    benefitsLabel: "Why Edivect",
    galleryLabel: "Screenshot gallery",
    enlarge: "Enlarge",
    close: "Close",
    previousScreenshot: "Previous screenshot",
    nextScreenshot: "Next screenshot",
    screenshotViewer: "Screenshot viewer",
    imageOfTotal: "image",
  },
  nav: {
    features: "Features",
    how: "How it works",
    compare: "Compare",
    faq: "FAQ",
  },
  hero: {
    badge: "Portable · Windows 10 & 11 · No installation",
    titleLead: "Draw directly on your screen.",
    titleAccent: "Edit everything later.",
    description:
      "Portable screen annotation for engineers. Every arrow, callout and measurement stays editable — with no installation, account or internet.",
    ctaPrimary: "Download free",
    ctaSecondary: "See what’s new",
    chips: [
      "Offline",
      "No telemetry",
      "No admin rights",
      "Multi-monitor",
      "Vector · always editable",
    ],
    frameTitle: "Edivect — Freeze mode · Monitor 1",
    screenshotAlt:
      "Edivect's tool panel beside a frozen engineering drawing, marked up with numbered badges ①②③ and a red arrow that is selected and still editable.",
  },
  benefits: {
    speed: {
      title: "Open → Draw → Export",
      description:
        "Launch to first stroke in under two seconds. Copy a finished markup to the clipboard with a single keystroke.",
    },
    editable: {
      title: "Everything stays editable",
      description:
        "Select, move, rotate, restyle or regroup any object — hours later. Nothing is flattened until you export.",
    },
    private: {
      title: "Private by design",
      description:
        "Runs fully offline. No account, no telemetry, no cloud. Your screenshots never leave the machine.",
    },
    cad: {
      title: "Built for CAD workflows",
      description:
        "3-point arcs, angle measurement and freeze mode match how CATIA, NX and Creo users already think.",
    },
  },
  showcase: {
    heading: {
      overline: "Interactive editing",
      title: "A vector editor that opens as fast as a screenshot",
      subtitle: "Hover a capability to see it in the workspace.",
    },
    items: {
      "editable-objects": {
        name: "Editable objects",
        short: "Select, move, rotate and restyle anything, anytime.",
        description:
          "Nothing is baked in. Click any arrow, shape or label to get eight resize handles, a rotation handle and a right-click menu of colour, width and opacity — hours after you drew it.",
        alt: "A red rectangle drawn over a bore on an engineering drawing, reselected and showing eight resize handles plus a rotation handle above it.",
      },
      "cad-measurement": {
        name: "CAD measurement",
        short: "3-point arcs and angle tools with live readouts.",
        description:
          "Angle and 3-point arc tools follow CATIA/NX muscle memory: click start, end, then vertex, with a live degree/radius readout that trails the cursor. Measurements stay editable objects.",
        alt: "An angle measured across two bolt holes reading 35.2°, beside a 58 mm dimension placed on the same drawing.",
      },
      "qa-stamps": {
        name: "QA stamps & markers",
        short: "OK / NOK stamps and auto-numbered badges.",
        description:
          "Drop auto-incrementing ①②③ markers, letter markers, check/cross and one-click OK / NOK stamps at a uniform size — built for inspection reports.",
        alt: "An engineering drawing marked with numbered badges ①②③ and a green OK stamp beside a red NOK stamp.",
      },
      "blur-focus": {
        name: "Blur & focus",
        short: "Hide sensitive data, spotlight what matters.",
        description:
          "Blur serial numbers and operator names, or drop a focus rectangle that dims everything except the region under discussion. Both remain adjustable objects.",
        alt: "A drawing dimmed by a focus rectangle so only the title block stays lit, with the serial number and both operator names blurred out.",
      },
      "freeze-boards": {
        name: "Freeze & boards",
        short: "Freeze live screens, or sketch on white/black.",
        description:
          "Freeze all monitors so live gauges can’t change mid-markup, or switch to whiteboard / blackboard for training sessions — annotations persist per mode.",
        alt: "The screen held as a frozen still while annotations are drawn on top, with the freeze toggle lit in the tool panel.",
      },
    },
  },
  howItWorks: {
    heading: {
      overline: "Three steps",
      title: "From “I need to mark this” to a shared image in seconds",
    },
    steps: {
      open: {
        title: "Open",
        description:
          "Press the global hotkey. The overlay activates on the current monitor with your last tool pre-armed. Freeze the screen if it’s live.",
      },
      draw: {
        title: "Draw",
        description:
          "Arrows, callouts, blur, stamps, measurements — each is a single keystroke. Everything you place remains a selectable object.",
      },
      export: {
        title: "Export",
        description:
          "Copy to clipboard, save a PNG/JPG, or keep the editable JSON project for re-inspection later. Repeat your last export with one key.",
      },
    },
  },
  featureGrid: {
    heading: {
      overline: "Everything included",
      title: "One portable tool, the whole annotation toolkit",
    },
    items: {
      pen: {
        title: "Pen & highlighter",
        description:
          "Freehand ink and translucent highlight, with optional auto-fade for presentations.",
      },
      lines: {
        title: "Lines & arrows",
        description:
          "Straight lines and arrows with four arrowhead styles, dash/dot, and Shift-to-45° locking.",
      },
      shapes: {
        title: "Shapes",
        description:
          "Rectangle, rounded rectangle, ellipse and 3-point arc with adjustable corner radius.",
      },
      text: {
        title: "Text & speech bubbles",
        description:
          "Rich text objects and speech bubbles with full typography controls.",
      },
      markers: {
        title: "Number & letter markers",
        description:
          "Auto-incrementing badges you can renumber, restart or switch between digits and letters.",
      },
      stamps: {
        title: "Check, cross & stamps",
        description:
          "One-click checkmarks, crosses and OK / NOK stamps at a consistent size.",
      },
      layers: {
        title: "Layers & groups",
        description:
          "Group, lock, hide and reorder objects in a Figma-style layers panel.",
      },
      history: {
        title: "History & autosave",
        description:
          "Named, clickable undo history and a 30-second autosave that survives crashes.",
      },
      export: {
        title: "Flexible export",
        description:
          "PNG, transparent PNG, JPG, clipboard, per-monitor, selection region — or an editable JSON project.",
      },
    },
  },
  compare: {
    heading: {
      overline: "How it compares",
      title: "Illustrator-grade editing at Snipping-Tool speed",
      subtitle:
        "Pointofix is the closest thing to Edivect — the same draw-anywhere overlay, free, and it has been doing it for years. The difference is what happens after you let go of the mouse.",
    },
    regionLabel:
      "Feature comparison against Pointofix and other Windows annotation and capture tools",
    scrollHint: "Swipe or scroll horizontally to compare every tool.",
    caption:
      "How Edivect compares with Pointofix, Snipping Tool, Greenshot and ShareX",
    capability: "Capability",
    rows: {
      editable: "Annotations stay editable after you let go",
      vector: "Vector objects (move / resize / rotate)",
      layers: "Layers, groups, lock & reorder",
      measurement: "CAD arc & angle measurement",
      scale: "Real-world scale (px → mm)",
      projectFile: "Project file that keeps objects editable",
      liveScreen: "Draws on the live screen, not a capture",
      portable: "Portable — no installation",
      offline: "Works fully offline",
    },
    qualifiers: {
      limited: "limited",
      inEditor: "in editor",
      untilDeselect: "until deselected",
      greenshotFile: ".greenshot",
      jsonFile: "JSON",
      builtIn: "built into Windows",
      zipBuild: "ZIP build",
    },
  },
  gallery: {
    heading: {
      overline: "In the workspace",
      title: "See it on real screens",
    },
    items: {
      markup: {
        title: "Markup on a frozen screen",
        caption:
          "Numbered badges and an arrow over a frozen engineering drawing, the arrow still selected and editable.",
      },
      handles: {
        title: "Editable geometry",
        caption:
          "A rectangle reselected long after it was drawn, showing eight resize handles and a rotation handle.",
      },
      palette: {
        title: "Command palette",
        caption:
          "Ctrl+Shift+P opens a searchable list of every command with the key that runs it.",
      },
      qa: {
        title: "QA inspection",
        caption:
          "Numbered findings on a drawing with a green OK and a red NOK stamp at a matched size.",
      },
      angle: {
        title: "Angle and dimension",
        caption:
          "A 35.2° angle measured across two bolt holes and a 58 mm dimension, both drawn straight onto the screen.",
      },
      export: {
        title: "Export menu",
        caption:
          "Export offers PNG with the screenshot, transparent PNG, JPG, clipboard, print, region and screen recording.",
      },
    },
  },
  shortcuts: {
    heading: {
      overline: "Keyboard-first",
      title: "Built for hands that never leave the keyboard",
      subtitle:
        "Every tool is one letter. Every shortcut is printed in its tooltip — the UI teaches itself.",
    },
    items: {
      select: "Selection tool",
      arrow: "Arrow",
      rectangle: "Rectangle",
      text: "Text",
      markers: "Number markers",
      dimension: "Dimension",
      angle: "Angle measure",
      blur: "Blur",
      exportRegion: "Export region",
      freeze: "Freeze screen",
      undo: "Undo",
      repeat: "Repeat last command",
    },
  },
  faq: {
    heading: {
      overline: "Questions",
      title: "Frequently asked",
    },
    items: {
      install: {
        question: "Do I need to install anything?",
        answer:
          "No. Edivect is a portable application — download and run the executable. It needs no installer, no administrator rights and no registry changes, so it works fine on locked-down corporate machines and from a USB stick.",
      },
      editable: {
        question: "What does “everything stays editable” actually mean?",
        answer:
          "Every mark you make is a vector object, not baked-in pixels. You can reselect any arrow, shape, text or measurement later to move, resize, rotate, recolor, regroup or delete it — just like objects in PowerPoint or Illustrator. Your work is only flattened when you export to an image.",
      },
      internet: {
        question: "Does it send any data to the internet?",
        answer:
          "Never. The app runs completely offline with no account, no cloud sync and no telemetry. Your screenshots and annotations stay on your machine.",
      },
      monitors: {
        question: "Does it work across multiple monitors?",
        answer:
          "Yes. Freeze mode captures every monitor independently, and the floating toolbar follows your cursor between screens. Mixed-DPI multi-monitor setups are supported.",
      },
      reopen: {
        question: "Can I re-open and keep editing an annotation later?",
        answer:
          "Yes. Save your work as a .smpj project — readable JSON — to keep every object editable, or export a PNG/JPG for sharing. Autosave also keeps a rolling snapshot so you can recover after a crash.",
      },
      windows: {
        question: "Which Windows versions are supported?",
        answer:
          "Windows 10 and Windows 11, 64-bit. The interface uses native Segoe UI and Fluent conventions, scales correctly on high-DPI displays, and honors your system light/dark and reduced-motion settings.",
      },
    },
  },
  downloadCta: {
    platform: "Windows 10 & 11 · 64-bit",
    title: "Download Edivect",
    subtitle:
      "Portable EXE — download and run. No installation, no admin rights, no internet.",
    olderVersions: "Release history",
    versionLabel: "Version",
    checksumLabel: "SHA-256",
    checksumPending: "SHA-256 published with the release",
  },
  footer: {
    blurb:
      "Draw directly on your screen. Edit everything later. Portable annotation for Windows engineers.",
    columns: {
      product: "Product",
      resources: "Resources",
      connect: "Connect",
    },
    links: {
      features: "Features",
      how: "How it works",
      compare: "Comparison",
      download: "Download",
      faq: "FAQ",
      documentation: "Documentation",
      changelog: "Changelog",
      shortcuts: "Keyboard shortcuts",
      github: "GitHub",
      license: "Software licence",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
      issues: "Report an issue",
    },
    legal: "© 2026 Edivect.",
    traits: "Portable · Offline · No telemetry",
  },
  changelog: {
    title: "Changelog",
    description:
      "Every released version of Edivect and what changed in it.",
    back: "Back to the home page",
    intro:
      "Release notes for the Edivect application, newest first.",
    empty:
      "No release notes have been published yet.",
    sourceNote:
      "Taken verbatim from the application repository's CHANGELOG.md, which is written in Slovak.",
    currentBuild:
      "The current download is v{current}; detailed release notes below currently end at v{notes}.",
    truncated:
      "Showing the {shown} most recent of {total} releases. The full history is in the repository.",
  },
};
