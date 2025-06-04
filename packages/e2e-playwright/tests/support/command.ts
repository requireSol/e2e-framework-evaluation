import { TTestIds } from "@e2e-frontend-testing-framework-evaluation/lib-common/src/E2ETestIds";
import { expect, Page } from "@playwright/test";

export async function login(page: Page, user: 1 | 2) {
  await page.goto("http://localhost:3000/dashboard");
  await page.locator("#identifier-field").fill(process.env["USERNAME" + user]);
  await page.locator("#password-field").fill(process.env["PASSWORD" + user]);
  await page.getByRole("button", { name: "Continue", exact: true }).click();
  await page.waitForURL("http://localhost:3000/dashboard");
  await expect(await getByTestId(page, "text_dashboard")).toContainText("Dashboard");
}
export async function getByTestId(page: Page, testId: TTestIds) {
  return page.getByTestId(testId);
}
