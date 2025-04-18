import {test, expect} from '@playwright/test'

test ('Waits and timeouts demo', async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  // Add a todo slowly to simulate lag
  await page.waitForTimeout(1000);
  await page.getByPlaceholder("What needs to be done?").fill("Test Waits");
  await page.keyboard.press("Enter");
  // Explicit wait - wait for the new list item to appear
  await page.waitForSelector(".todo-list li", { timeout: 3000 });
  // Assertion with auto-waiting
  await expect(page.getByText("Test Waits")).toBeVisible();

  // Wait for the app to be fully idle (like waiting for animations/network to settle)
  await page.waitForLoadState("networkidle");

  const toggle = page.getByLabel("Toggle Todo");
  await toggle.check();
  await expect(toggle).toBeChecked();
});