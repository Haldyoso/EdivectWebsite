import { createHash } from "node:crypto";
import { createReadStream, readFileSync, statSync } from "node:fs";
import { basename, join } from "node:path";

const source = readFileSync(join("lib", "site.ts"), "utf8");

function capture(pattern, label) {
  const value = pattern.exec(source)?.[1];
  if (!value) throw new Error(`Could not read ${label} from lib/site.ts`);
  return value;
}

const assetPath = capture(/publicAssetPath\s*=\s*\n?\s*"([^"]+)"/, "asset path");
const version = capture(/version:\s*"([^"]+)"/, "version");
const displayedSize = capture(/size:\s*"([^"]+)"/, "display size");
const expectedHash = capture(/sha256:\s*"([A-Fa-f0-9]{64})"/, "SHA-256").toUpperCase();
const expectedBytes = Number(capture(/sizeBytes:\s*(\d+)/, "exact release size"));
const file = join("releases", basename(assetPath));
const stats = statSync(file);
const actualSize = `${(stats.size / 1024 / 1024).toFixed(1)} MB`;
const actualHash = await new Promise((resolve, reject) => {
  const hash = createHash("sha256");
  createReadStream(file).on("data", (chunk) => hash.update(chunk)).on("error", reject).on("end", () => resolve(hash.digest("hex").toUpperCase()));
});

const filename = basename(file);
const failures = [];
if (stats.size !== expectedBytes) failures.push("exact file size differs from sizeBytes");
if (actualHash !== expectedHash) failures.push("SHA-256 does not match the executable");
if (actualSize !== displayedSize) failures.push(`display size is ${displayedSize}, actual is ${actualSize}`);
if (!filename.includes(`v${version}`)) failures.push("filename does not contain the configured version");
if (/public-trial-do-/.test(filename)) failures.push("download still points at the obsolete fixed-expiry trial");

if (failures.length) {
  for (const failure of failures) console.error(`ERROR: ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Release verified: ${filename}`);
  console.log(`${stats.size} bytes · ${actualSize} · SHA-256 ${actualHash}`);
}

if (process.argv.includes("--remote")) {
  const url = capture(/releaseDownloadUrl\s*=\s*"([^"]+)"/, "public download URL");
  const response = await fetch(url, { signal: AbortSignal.timeout(120000) });
  if (!response.ok || !response.body) throw new Error(`Download failed: ${response.status}`);
  const hash = createHash("sha256");
  let bytes = 0;
  for await (const chunk of response.body) { hash.update(chunk); bytes += chunk.length; }
  if (bytes !== stats.size || hash.digest("hex").toUpperCase() !== expectedHash) {
    throw new Error("Public R2 download differs from the verified release");
  }
  console.log(`Public download verified: ${url} (${bytes} bytes)`);
}
