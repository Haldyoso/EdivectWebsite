/**
 * Single source of truth for anything that changes per release or per
 * deployment. Release values below are taken from the clean Edivect app
 * repository and its reproducible portable build.
 *
 * Nothing here is translated. Everything the visitor reads lives in
 * lib/content/<lang>.ts; what is left is URLs, version numbers and the site
 * name, which are the same in every language.
 */

/**
 * GitHub Pages serves project sites from /<repo>, not the domain root, so every
 * absolute path needs this prefix. next.config.ts feeds it to Next's `basePath`
 * (which rewrites <Link>, next/image and the build output on its own); the two
 * places Next does NOT touch are the manifest's own JSON fields, which are
 * plain strings to it — see app/manifest.ts.
 *
 * Empty string on a root domain. Kept here rather than in next.config.ts so the
 * config and the app can't drift apart.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/EdivectWebsite";

const publicTrialAssetPath =
  "/downloads/Edivect-v0.9.9.124-public-trial-do-2026-10-12.exe";

export const site = {
  name: "Edivect",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://haldyoso.github.io/EdivectWebsite",
  // The application repository is private. These public links intentionally
  // point at the website repository so visitors never land on a GitHub 404.
  repo: "https://github.com/Haldyoso/EdivectWebsite",
  issuesUrl: "https://github.com/Haldyoso/EdivectWebsite/issues/new",
  legal: {
    // TODO(launch): replace with the legal owner/company details before a
    // commercial launch. Kept null so the public pages cannot invent an owner.
    owner: null,
    // TODO(launch): add a dedicated support/privacy email if GitHub Issues is
    // not the desired long-term contact channel.
    supportEmail: null,
  },
  release: {
    version: "0.9.9.124",
    size: "72.7 MB",
    sha256: "C8CF9ABFB4B2671123D5E2025DA0DCE13166F7AAD93106F920CFCD8D8DEEA165",
    assetPath: publicTrialAssetPath,
    downloadUrl: `${basePath}${publicTrialAssetPath}`,
    publicTrialVersion: "0.9.9.124",
    publicTrialExpires: "2026-10-12",
    publicTrialDownloadUrl: `${basePath}${publicTrialAssetPath}`,
  },
} as const;

/**
 * Kept as a guard so a future pre-release edit cannot accidentally publish a
 * placeholder URL or checksum into the page and its structured data.
 */
export const hasRealRelease = !site.release.downloadUrl.endsWith("#");
