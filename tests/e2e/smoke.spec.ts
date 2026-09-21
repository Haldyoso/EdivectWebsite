import { basePath, site } from "../../lib/site";
import { expect, test, type Page } from "@playwright/test";

const locales = [
  { lang: "en", path: `${basePath}/`, privacy: `${basePath}/privacy`, terms: `${basePath}/terms` },
  { lang: "sk", path: `${basePath}/sk`, privacy: `${basePath}/sk/privacy`, terms: `${basePath}/sk/terms` },
  { lang: "de", path: `${basePath}/de`, privacy: `${basePath}/de/privacy`, terms: `${basePath}/de/terms` },
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
    await expect(download).toHaveCount(1);
    await expect(download.first()).toBeVisible();
    await expect(download.first()).toHaveAttribute(
      "href",
      site.release.downloadUrl,
    );
    await expect(page.locator("img[src*=screenshots], a[href*=changelog], header a[href*=github]" )).toHaveCount(0);
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
  await page.goto(`${basePath}/privacy`);
  await page.getByRole("navigation", { name: "Language" }).getByRole("link", { name: /SK/ }).click();
  await expect(page).toHaveURL(new RegExp(`${basePath}/sk/privacy$`));
  await expect(page.locator("html")).toHaveAttribute("lang", "sk");

  await page.getByRole("navigation", { name: "Jazyk" }).getByRole("link", { name: /DE/ }).click();
  await expect(page).toHaveURL(new RegExp(`${basePath}/de/privacy$`));
  await expect(page.locator("html")).toHaveAttribute("lang", "de");
});

test("navigation, FAQ and legal download path work", async ({ page }) => {
  await page.goto(`${basePath}/`);
  await page.locator("header").getByRole("link", { name: "Features" }).click();
  await expect(page).toHaveURL(/#features$/);
  await expect(page.locator("#features")).toBeVisible();

  const questions = page.locator("#faq button");
  await questions.nth(1).click();
  await expect(questions.nth(1)).toHaveAttribute("aria-expanded", "true");

  await page.goto(`${basePath}/terms`);
  const download = page.locator("header").getByRole("link", { name: "Download" });
  await expect(download).toHaveAttribute("href", `${basePath || "/"}#download`);
});

test("unknown routes use the branded 404 page", async ({ page }) => {
  const response = await page.goto(`${basePath}/missing-page-for-smoke-test`);
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1, name: "Page not found" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Go to the home page" })).toBeVisible();
});

test("mobile navigation and legal layout fit a narrow viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto(`${basePath}/`);
  await page.getByRole("button", { name: "Menu" }).click();
  await expect(page.locator("#mobile-menu").getByRole("link", { name: "Download for Windows" })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);

  await page.goto(`${basePath}/privacy`);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
