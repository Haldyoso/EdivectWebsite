import fs from "node:fs";
import path from "node:path";

import { marked } from "marked";

/**
 * Reads the vendored copy of the application's release notes at build time.
 *
 * Why vendored rather than read from the app repo: this site and the app live
 * in two repositories, and the GitHub Actions job that builds the site only
 * checks out this one. A relative path to ../Edivect/CHANGELOG.md works on
 * the author's machine and fails in CI, which is the worst of both. So the file
 * is committed here and refreshed with `npm run sync:changelog`, which takes
 * the app repo's path as an argument.
 */
const CHANGELOG_PATH = path.join(process.cwd(), "content", "CHANGELOG.md");

/**
 * How many releases the page shows.
 *
 * The app's changelog is a development log — 106 entries by 0.9.9.61, several
 * per day during a push — and rendering all of them produced a 557 kB HTML
 * page, which would have undone the image work several times over on a page
 * nobody scrolls to the bottom of. Twenty covers the recent history a visitor
 * deciding whether the project is alive actually wants; the file itself stays
 * complete in the repository.
 */
export const RELEASE_LIMIT = 20;

export interface Release {
  /** "0.9.9.61" — the text between "## " and the first dash. */
  version: string;
  /** ISO date if the heading carried one, else undefined. */
  date?: string;
  /**
   * Whatever else the heading said. Older entries title themselves instead of
   * dating themselves ("## 0.2.2 – ikonový panel nástrojov"), and one carries a
   * parenthetical ("(vrátené v 0.9.1.9)") that would be wrong to drop.
   */
  note?: string;
  /** Rendered body of that release's section. */
  html: string;
}

/**
 * Heading shape in the app's CHANGELOG.md:
 *
 *     ## 0.9.9.61 – 2026-08-10
 *     ## 0.9.1.8 – 2026-07-16 (vrátené v 0.9.1.9)
 *     ## 0.2.2 – ikonový panel nástrojov
 *     ## 0.1.0 – Phase 1 MVP
 *
 * Everything after the version is optional and free-form, which it has to be:
 * an earlier version of this pattern demanded a bare ISO date and silently
 * failed on the five headings above — their bodies were then appended to the
 * preceding release, attributing five changelogs' worth of text to the wrong
 * version. Match loosely here and pull the date out afterwards.
 *
 * The separator is an en dash in the source; hyphen and em dash are accepted so
 * a hand-typed entry does not fall through the same way.
 */
const RELEASE_HEADING = /^##\s+(\S+)\s*(?:[–—-]\s*(.*?))?\s*$/;

/** Leading ISO date in a heading's tail, with anything trailing it. */
const LEADING_DATE = /^(\d{4}-\d{2}-\d{2})\s*(.*)$/;

export interface ChangelogData {
  releases: Release[];
  /** Total found in the file, before RELEASE_LIMIT was applied. */
  total: number;
}

export function getChangelog(): ChangelogData {
  let source: string;
  try {
    source = fs.readFileSync(CHANGELOG_PATH, "utf8");
  } catch {
    // No vendored file yet — the page renders its "nothing published" state.
    return { releases: [], total: 0 };
  }

  const lines = source.split(/\r?\n/);
  const sections: Section[] = [];
  let current: Section | null = null;

  for (const line of lines) {
    const heading = RELEASE_HEADING.exec(line);

    if (heading) {
      const tail = heading[2]?.trim() ?? "";
      const dated = LEADING_DATE.exec(tail);

      current = {
        version: heading[1],
        date: dated?.[1],
        note: (dated ? dated[2] : tail).trim() || undefined,
        body: [],
      };
      sections.push(current);
      continue;
    }

    // Everything before the first "## " heading is the file's own title.
    if (current) current.body.push(line);
  }

  /*
   * Split before rendering, not after: marked would otherwise run over all 106
   * sections at build time to throw 86 of them away.
   */
  return {
    releases: sections.slice(0, RELEASE_LIMIT).map(finish),
    total: sections.length,
  };
}

interface Section {
  version: string;
  date?: string;
  note?: string;
  body: string[];
}

function finish(entry: Section): Release {
  /*
   * marked runs at build time and the input is a file in this repository, not
   * user content, so the HTML it produces is as trusted as the JSX around it.
   * It never reaches the browser as a dependency — the page is pre-rendered.
   */
  const html = marked.parse(entry.body.join("\n").trim(), {
    async: false,
    gfm: true,
  });

  return { version: entry.version, date: entry.date, note: entry.note, html };
}
