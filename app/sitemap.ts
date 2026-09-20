import type { MetadataRoute } from "next";

import {
  absoluteUrl,
  homePath,
  langs,
  privacyPath,
  termsPath,
  type Lang,
} from "@/lib/i18n";
import { site } from "@/lib/site";

/** No Node server on GitHub Pages — this has to be baked at build time. */
export const dynamic = "force-static";

/**
 * Landing and legal pages in each locale. Each entry repeats the
 * full xhtml:link alternate set, which is what Google asks for — an alternate
 * group is only trusted when every member points back at every other.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const alternatesFor = (pathFor: (lang: Lang) => string) => {
    const languages: Record<string, string> = {};
    for (const lang of langs) {
      languages[lang] = absoluteUrl(site.url, pathFor(lang));
    }
    languages["x-default"] = absoluteUrl(site.url, pathFor("en"));
    return { languages };
  };

  const home = langs.map((lang) => ({
    url: absoluteUrl(site.url, homePath(lang)),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 1,
    alternates: alternatesFor(homePath),
  }));


  const legal = [privacyPath, termsPath].flatMap((pathFor) =>
    langs.map((lang) => ({
      url: absoluteUrl(site.url, pathFor(lang)),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: alternatesFor(pathFor),
    })),
  );

  return [...home, ...legal];
}
