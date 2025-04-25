import { test, expect } from "@playwright/test";

test.describe.parallel("API and UI Parallel Testing", () => {
  // API test
  test("API Test", async ({ page }) => {
    // API call using Playwright's page.request
    const response = await page.request.get('https://jsonplaceholder.typicode.com/todos/1');
expect(response.status()).toBe(200);
const responseData = await response.json();
expect(responseData).toHaveProperty('id'); 
  });

  // UI test
  test("UI Test", async ({ page }) => {
    await page.goto("https://example.com");
    await expect(page.locator("h1")).toHaveText("Example Domain"); // Assert the page title
    // Assert the result is visible after interaction
  });
});
