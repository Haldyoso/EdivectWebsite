import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

/** No Node server on GitHub Pages — this has to be baked at build time. */
export const dynamic = "force-static";

/**
 * Emitted at /EdivectWebsite/robots.txt, which crawlers do not read — only
 * the one at the domain root counts, and that belongs to haldyoso.github.io.
 * Kept because it costs nothing and starts working unchanged the day this site
 * gets its own domain. The sitemap below is still discoverable: it is an
 * absolute URL and gets submitted directly, not found via robots.txt.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
