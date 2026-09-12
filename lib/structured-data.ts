import { getCopy } from "@/lib/content";
import { absoluteUrl, homePath, termsPath, type Lang } from "@/lib/i18n";
import { hasRealRelease, site } from "@/lib/site";

/**
 * schema.org payloads. Kept out of the components so the three locales cannot
 * drift into describing three different products.
 */

export function softwareApplicationJsonLd(lang: Lang) {
  const copy = getCopy(lang);

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: site.name,
    description: copy.meta.description,
    inLanguage: lang,
    operatingSystem: "Windows 10, Windows 11",
    applicationCategory: "DesignApplication",
    softwareVersion: site.release.version,
    license: absoluteUrl(site.url, termsPath(lang)),
    fileSize: site.release.size.replace("~", "").trim(),
    url: absoluteUrl(site.url, homePath(lang)),
    // Structured data needs an absolute URL; the visible download link keeps
    // its basePath-prefixed local URL so it also works in development.
    ...(hasRealRelease
      ? { downloadUrl: absoluteUrl(site.url, site.release.assetPath) }
      : {}),
    offers: {
      "@type": "Offer",
      name: "Edivect Personal / Commercial Trial",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

/**
 * FAQPage, one per locale. The questions and answers are the same strings the
 * accordion renders — Google requires the visible text and the markup to match,
 * so both read from `copy.faq.items` rather than from a second copy of the
 * wording maintained here.
 */
export function faqPageJsonLd(lang: Lang) {
  const copy = getCopy(lang);
  const items = Object.values(copy.faq.items);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
