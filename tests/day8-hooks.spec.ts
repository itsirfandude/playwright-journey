import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // ✅ This runs before every test
  await page.goto("https://demo.playwright.dev/todomvc");
  console.log("➡️ Navigated to the app");

});

test("Add a single todo", async ({ page }) => {
  await page.getByPlaceholder("What needs to be done?").fill("Write tests");
  await page.keyboard.press("Enter");
  await expect(page.getByText("Write tests")).toBeVisible();
  console.log("✅ First test passed");
});

test("Add another todo and verify", async ({ page }) => {
  await page.getByPlaceholder("What needs to be done?").fill("Review code");
  await page.keyboard.press("Enter");
  await expect(page.getByText("Review code")).toBeVisible();
  console.log("✅ Second test passed");
});
