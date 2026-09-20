import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SkipLink } from "@/components/layout/skip-link";
import { Benefits } from "@/components/sections/benefits";
import { ComparisonTable } from "@/components/sections/comparison-table";
import { DownloadCta } from "@/components/sections/download-cta";
import { Faq } from "@/components/sections/faq";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { FeatureShowcase } from "@/components/sections/feature-showcase";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PageBackdrop } from "@/components/layout/page-backdrop";
import { Shortcuts } from "@/components/sections/shortcuts";
import { getContent } from "@/lib/content";
import { homePath, langs, type Lang } from "@/lib/i18n";
import { faqPageJsonLd, softwareApplicationJsonLd } from "@/lib/structured-data";

/**
 * The landing page itself. All three locale routes render this and differ only
 * in the Lang they hand it, so a section added here appears in every language
 * or in none — there is no per-language page to forget.
 */
export function Landing({ lang }: { lang: Lang }) {
  const content = getContent(lang);
  const { copy } = content;

  const langPaths = Object.fromEntries(
    langs.map((l) => [l, homePath(l)]),
  ) as Record<Lang, string>;

  return (
    <div data-page-root className="relative min-h-screen overflow-x-hidden">
      <PageBackdrop />

      <SkipLink label={copy.ui.skipToContent} />
      <Navbar lang={lang} copy={copy} nav={content.nav} langPaths={langPaths} />

      {/* tabIndex -1 so the skip link actually moves focus here, not just scroll. */}
      <main id="top" tabIndex={-1} className="relative z-1 focus:outline-none">
        <Hero
          copy={copy}
          chips={content.hero.chips}
        />
        <Benefits benefits={content.benefits} label={copy.ui.benefitsLabel} />
        <FeatureShowcase heading={copy.showcase.heading} features={content.showcase} />
        <HowItWorks heading={copy.howItWorks.heading} steps={content.steps} />
        <FeatureGrid heading={copy.featureGrid.heading} features={content.gridFeatures} />
        <ComparisonTable copy={copy} rows={content.compareRows} />
        <Shortcuts heading={copy.shortcuts.heading} shortcuts={content.shortcuts} />
        <Faq heading={copy.faq.heading} faqs={content.faqs} />
        <DownloadCta copy={copy} lang={lang} />
      </main>

      <Footer lang={lang} copy={copy} columns={content.footerColumns} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd(lang)),
        }}
      />
      {/*
       * FAQPage is emitted here and not in the layout: the markup has to match
       * question-and-answer text the page actually shows, which only this page
       * does.
       */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(lang)) }}
      />
    </div>
  );
}
