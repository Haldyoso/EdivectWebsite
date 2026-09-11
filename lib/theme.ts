/**
 * Theme choice, shared by the pre-paint boot script in DocumentShell and the
 * toggle in the navbar. Both have to agree on the key and the two legal values,
 * so neither owns them.
 *
 * Only an explicit choice is stored. With nothing in localStorage no
 * `data-theme` is set and the dark tokens on :root apply — the brand default,
 * and the theme every screenshot on the page was captured in. Reading
 * `prefers-color-scheme` instead would flip a large share of visitors to a
 * light page whose screenshots are all dark, which is a design decision rather
 * than a fix, so it is deliberately not done here.
 */
export const THEME_STORAGE_KEY = "edivect-theme";
export const LEGACY_THEME_STORAGE_KEY = "screenmark-theme";

export type Theme = "light" | "dark";

export const DEFAULT_THEME: Theme = "dark";
