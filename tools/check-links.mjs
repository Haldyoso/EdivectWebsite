import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const outputRoot = resolve("out");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/EdivectWebsite";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://haldyoso.github.io/EdivectWebsite";
const checkExternal = process.argv.includes("--external");

if (!existsSync(outputRoot)) {
  throw new Error("out/ does not exist. Run the production build first.");
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const htmlFiles = walk(outputRoot).filter((file) => extname(file) === ".html");
const idsByFile = new Map();
const failures = [];
const external = new Set();

function candidates(pathname) {
  let relative = pathname;
  if (relative.startsWith(basePath)) relative = relative.slice(basePath.length);
  relative = decodeURIComponent(relative).replace(/^\/+/, "");
  if (!relative) return [join(outputRoot, "index.html")];

  const clean = normalize(relative);
  if (clean.startsWith("..")) return [];
  const direct = join(outputRoot, clean);
  return extname(clean)
    ? [direct]
    : [`${direct}.html`, join(direct, "index.html")];
}

function ids(file) {
  if (!idsByFile.has(file)) {
    const html = readFileSync(file, "utf8");
    idsByFile.set(
      file,
      new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1])),
    );
  }
  return idsByFile.get(file);
}

for (const sourceFile of htmlFiles) {
  const html = readFileSync(sourceFile, "utf8");
  const references = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map(
    (match) => match[1].replaceAll("&amp;", "&"),
  );

  for (const reference of references) {
    if (/^(?:mailto:|tel:|data:|javascript:)/.test(reference)) continue;

    let url;
    try {
      url = new URL(reference, `${siteUrl}/`);
    } catch {
      failures.push(`${sourceFile}: invalid URL ${reference}`);
      continue;
    }

    if (url.origin !== new URL(siteUrl).origin) {
      if (url.protocol === "http:" || url.protocol === "https:") external.add(url.href);
      continue;
    }

    const target = candidates(url.pathname).find(
      (candidate) =>
        candidate.startsWith(outputRoot) &&
        existsSync(candidate) &&
        statSync(candidate).isFile(),
    );
    if (!target) {
      failures.push(`${sourceFile}: missing ${url.pathname}`);
      continue;
    }

    if (url.hash && extname(target) === ".html") {
      const fragment = decodeURIComponent(url.hash.slice(1));
      if (!ids(target).has(fragment)) {
        failures.push(`${sourceFile}: missing fragment ${url.pathname}${url.hash}`);
      }
    }
  }
}

for (const required of [
  "index.html",
  "sk.html",
  "de.html",
  "privacy.html",
  "sk/privacy.html",
  "de/privacy.html",
  "terms.html",
  "sk/terms.html",
  "de/terms.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "manifest.webmanifest",
]) {
  if (!existsSync(join(outputRoot, required))) failures.push(`missing required output: ${required}`);
}

if (checkExternal) {
  for (const url of external) {
    try {
      let response = await fetch(url, { method: "HEAD", redirect: "follow", signal: AbortSignal.timeout(10_000) });
      if (response.status === 405) {
        response = await fetch(url, { method: "GET", redirect: "follow", signal: AbortSignal.timeout(10_000) });
      }
      if (!response.ok) failures.push(`external ${url}: HTTP ${response.status}`);
    } catch (error) {
      failures.push(`external ${url}: ${error.message}`);
    }
  }
}

if (failures.length) {
  for (const failure of failures) console.error(`ERROR: ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${htmlFiles.length} HTML files with no broken internal links.`);
  console.log(checkExternal ? `Checked ${external.size} external URLs.` : "External URLs skipped; use --external to include them.");
}
