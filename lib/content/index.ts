/**
 * Joins the language-independent facts in shared.ts to one locale's strings and
 * hands the sections the same array shapes they consumed when the site was
 * English-only. Server-side and pure, so each page pays for it once at build.
 */
import {
  homePath,
  privacyPath,
  termsPath,
  type Lang,
} from "@/lib/i18n";
import { de } from "@/lib/content/de";
import { en } from "@/lib/content/en";
import { sk } from "@/lib/content/sk";
import {
  benefitIcons,
  benefitIds,
  compareColumns,
  compareRowIds,
  compareValues,
  galleryIds,
  galleryImages,
  gridIcons,
  gridIds,
  heroImage,
  navAnchors,
  navIds,
  shortcutIds,
  shortcutKeys,
  showcaseIds,
  showcaseImages,
  stepIds,
} from "@/lib/content/shared";
import type {
  Benefit,
  CompareRow,
  Copy,
  Faq,
  FooterColumn,
  GalleryItem,
  GridFeature,
  NavItem,
  Screenshot,
  Shortcut,
  ShowcaseFeature,
  Step,
} from "@/types";

const dictionaries: Record<Lang, Copy> = { en, sk, de };

export function getCopy(lang: Lang): Copy {
  return dictionaries[lang];
}

export { compareColumns };

export interface SiteContent {
  copy: Copy;
  nav: NavItem[];
  hero: { screenshot: Screenshot; chips: string[] };
  benefits: Benefit[];
  showcase: ShowcaseFeature[];
  steps: Step[];
  gridFeatures: GridFeature[];
  compareRows: CompareRow[];
  gallery: GalleryItem[];
  shortcuts: Shortcut[];
  faqs: Faq[];
  footerColumns: FooterColumn[];
}

export function getContent(lang: Lang): SiteContent {
  const copy = dictionaries[lang];

  return {
    copy,

    nav: navIds.map((id) => ({ label: copy.nav[id], href: navAnchors[id] })),

    hero: {
      screenshot: { src: heroImage, alt: copy.hero.screenshotAlt },
      chips: [...copy.hero.chips],
    },

    benefits: benefitIds.map((id) => ({
      icon: benefitIcons[id],
      ...copy.benefits[id],
    })),

    // No icon here — see the note on ShowcaseFeature.
    showcase: showcaseIds.map((id) => ({
      id,
      name: copy.showcase.items[id].name,
      short: copy.showcase.items[id].short,
      description: copy.showcase.items[id].description,
      screenshot: { src: showcaseImages[id], alt: copy.showcase.items[id].alt },
    })),

    steps: stepIds.map((id) => copy.howItWorks.steps[id]),

    gridFeatures: gridIds.map((id) => ({
      icon: gridIcons[id],
      ...copy.featureGrid.items[id],
    })),

    compareRows: compareRowIds.map((id) => ({
      label: copy.compare.rows[id],
      ...compareValues[id],
    })),

    /*
     * Caption and alt carry the same sentence: the gallery card's aria-label
     * already announces the caption, so <Screenshot decorative> hides the image
     * from assistive tech and nothing is read twice.
     */
    gallery: galleryIds.map((id) => ({
      title: copy.gallery.items[id].title,
      caption: copy.gallery.items[id].caption,
      screenshot: {
        src: galleryImages[id],
        alt: copy.gallery.items[id].caption,
      },
    })),

    shortcuts: shortcutIds.map((id) => ({
      label: copy.shortcuts.items[id],
      keys: shortcutKeys[id],
    })),

    faqs: (Object.keys(copy.faq.items) as Array<keyof Copy["faq"]["items"]>).map(
      (id) => copy.faq.items[id],
    ),

    footerColumns: buildFooterColumns(lang, copy),
  };
}

function buildFooterColumns(lang: Lang, copy: Copy): FooterColumn[] {
  const l = copy.footer.links;
  const home = homePath(lang);

  return [
    {
      title: copy.footer.columns.product,
      links: [
        { label: l.features, href: `${home}#features` },
        { label: l.how, href: `${home}#how` },
        { label: l.compare, href: `${home}#compare` },
        { label: l.download, href: `${home}#download` },
      ],
    },
    {
      title: copy.footer.columns.resources,
      links: [
        { label: l.faq, href: `${home}#faq` },
        { label: l.shortcuts, href: `${home}#shortcuts` },
        { label: l.privacy, href: privacyPath(lang) },
        { label: l.terms, href: termsPath(lang) },
      ],
    },
  ];
}
