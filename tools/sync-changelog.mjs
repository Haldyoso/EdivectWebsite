/**
 * Copies the application's CHANGELOG.md into content/ so the /changelog pages
 * can read it at build time.
 *
 * The site and the app are separate repositories and the deploy workflow only
 * checks out this one, so a build-time path into ../Edivect works locally
 * and breaks in CI. Vendoring keeps the build hermetic; this script is the
 * thing that has to be re-run when the app cuts a release.
 *
 *     npm run sync:changelog                    # ../Edivect/CHANGELOG.md
 *     npm run sync:changelog -- D:\src\Edivect
 *
 * The argument is the app repo's root, not the file.
 */
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const repoArg = process.argv[2] ?? path.join("..", "Edivect");
const source = path.resolve(repoArg, "CHANGELOG.md");
const targetDir = path.join(process.cwd(), "content");
const target = path.join(targetDir, "CHANGELOG.md");

try {
  await mkdir(targetDir, { recursive: true });
  await copyFile(source, target);
  console.log(`Copied ${source}\n     → ${target}`);
} catch (error) {
  console.error(`Could not read ${source}`);
  console.error(
    "Pass the Edivect repository root as an argument, e.g.\n" +
      "  npm run sync:changelog -- ../Edivect",
  );
  console.error(error.message);
  process.exit(1);
}
