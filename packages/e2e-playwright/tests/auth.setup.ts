import { test as setup } from "@playwright/test";
import { login } from "./support/command";

setup("authenticate as user1", async ({ page }) => {
  await login(page, 1);

  await page.context().storageState({ path: ".auth/user1.json" });
});

setup("authenticate as user2", async ({ page }) => {
  await login(page, 2);

  await page.context().storageState({ path: ".auth/user2.json" });
});
