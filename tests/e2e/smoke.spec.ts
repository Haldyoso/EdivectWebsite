import { expect, test, type Page } from "@playwright/test";

const locales = [
  { lang: "en", path: "/EdivectWebsite/", privacy: "/EdivectWebsite/privacy", terms: "/EdivectWebsite/terms" },
  { lang: "sk", path: "/EdivectWebsite/sk", privacy: "/EdivectWebsite/sk/privacy", terms: "/EdivectWebsite/sk/terms" },
  { lang: "de", path: "/EdivectWebsite/de", privacy: "/EdivectWebsite/de/privacy", terms: "/EdivectWebsite/de/terms" },
] as const;

function collectPageErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));
  return errors;
}

for (const locale of locales) {
  test(`${locale.lang} homepage loads with the primary download`, async ({ page }) => {
    const errors = collectPageErrors(page);
    await page.goto(locale.path);

    await expect(page.locator("html")).toHaveAttribute("lang", locale.lang);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    const download = page.locator("#download a[download]");
    await expect(download).toBeVisible();
    await expect(download).toHaveAttribute(
      "href",
      /\/EdivectWebsite\/downloads\/Edivect-v[\w.-]+\.exe$/,
    );
    expect(errors).toEqual([]);
  });

  test(`${locale.lang} legal pages load`, async ({ page }) => {
    const errors = collectPageErrors(page);
    for (const path of [locale.privacy, locale.terms]) {
      await page.goto(path);
      await expect(page.locator("html")).toHaveAttribute("lang", locale.lang);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
    expect(errors).toEqual([]);
  });
}

test("language switching preserves the equivalent page", async ({ page }) => {
  await page.goto("/EdivectWebsite/privacy");
  await page.getByRole("navigation", { name: "Language" }).getByRole("link", { name: /SK/ }).click();
  await expect(page).toHaveURL(/\/EdivectWebsite\/sk\/privacy$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "sk");

  await page.getByRole("navigation", { name: "Jazyk" }).getByRole("link", { name: /DE/ }).click();
  await expect(page).toHaveURL(/\/EdivectWebsite\/de\/privacy$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "de");
});

test("navigation, FAQ and changelog download path work", async ({ page }) => {
  await page.goto("/EdivectWebsite/");
  await page.locator("header").getByRole("link", { name: "Features" }).click();
  await expect(page).toHaveURL(/#features$/);
  await expect(page.locator("#features")).toBeVisible();

  const questions = page.locator("#faq button");
  await questions.nth(1).click();
  await expect(questions.nth(1)).toHaveAttribute("aria-expanded", "true");

  await page.goto("/EdivectWebsite/changelog");
  const download = page.locator("header").getByRole("link", { name: "Download" });
  await expect(download).toHaveAttribute("href", /\/EdivectWebsite\/?#download$/);
});

test("unknown routes use the branded 404 page", async ({ page }) => {
  const response = await page.goto("/EdivectWebsite/missing-page-for-smoke-test");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1, name: "Page not found" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Go to the home page" })).toBeVisible();
});

test("mobile navigation and legal layout fit a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/EdivectWebsite/");
  await page.getByRole("button", { name: "Menu" }).click();
  await expect(page.getByRole("link", { name: "Download for Windows" })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

  await page.goto("/EdivectWebsite/privacy");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
