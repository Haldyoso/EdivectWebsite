import { basePath } from "../../lib/site";
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

// Accessibility is evaluated in the settled state, not halfway through a fade where
// temporary opacity mathematically lowers text contrast.
const routes = [
  { name: "homepage", path: `${basePath}/` },
  { name: "FAQ", path: `${basePath}/#faq` },
  { name: "Privacy Policy", path: `${basePath}/privacy` },
  { name: "Terms of Use", path: `${basePath}/terms` },
] as const;

for (const route of routes) {
  test(`${route.name} has no automatically detectable accessibility violations`, async ({
    page,
  }) => {
    await page.goto(route.path);
    await expect(page.locator("main")).toBeVisible();
    await page.addStyleTag({
      content: "[data-reveal]{transition:none!important;opacity:1!important;transform:none!important}",
    });

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}
