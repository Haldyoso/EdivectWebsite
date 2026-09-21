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

const publicAssetPath = "/downloads/Edivect-v1.0.0.exe";
const releaseDownloadUrl = "https://downloads.edivect.com/Edivect-v1.0.0.exe";

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
    // Author named by the application metadata. Business/address details remain
    // a separate decision before any paid launch.
    owner: "Martin Haluš",
    // TODO(launch): add a dedicated support/privacy email if GitHub Issues is
    // not the desired long-term contact channel.
    supportEmail: null,
  },
  release: {
    version: "1.0.0",
    size: "72.7 MB",
    sizeBytes: 76274395,
    sha256: "1E9E57FEC86834CF87CA5E1E805F78BAA6B792B5781AA632F97F291263A25FCB",
    assetPath: publicAssetPath,
    downloadUrl: releaseDownloadUrl,
  },
} as const;

/**
 * Kept as a guard so a future pre-release edit cannot accidentally publish a
 * placeholder URL or checksum into the page and its structured data.
 */
export const hasRealRelease = !site.release.downloadUrl.endsWith("#");
