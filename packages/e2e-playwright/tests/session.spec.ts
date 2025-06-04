import { test } from "@playwright/test";

test("Interagiert mit Inhalt im Iframe", async ({ page }) => {
  await page.goto("/iframe-seite");
  const frame = page.frame("mein-iframe");
  await frame?.click("button");
});
