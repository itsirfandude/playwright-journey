import { test, expect } from "@playwright/test";

test("Cross-browser behavior check", async ({ page, browserName }) => {
  // Check the browser name and add browser-specific behavior if needed
  if (browserName === "webkit") {
    console.log("Running on WebKit (Safari)!");
  } else if (browserName === "firefox") {
    console.log("Running on Firefox!");
  } else if (browserName === "chromium") {
    console.log("Running on Chrome!");
  }

  // Navigate to your page
  await page.goto("https://example.com");

  // Perform your regular test logic (cross-browser)
  await expect(page.locator("h1")).toHaveText("Example Domain");

  // Example of browser-specific assertions (if any)
  const buttonLocator = page.locator("button#submit");
  try {
    await buttonLocator.waitFor({ state: "visible", timeout: 5000 });
  } catch (error) {
    console.log(`Button not found in ${browserName}:`, error.message);
  }

  // Check if the button exists across all browsers
  const buttonExists = await buttonLocator.count();
  if (buttonExists > 0) {
    console.log("Button found in " + browserName);
    await expect(buttonLocator).toBeEnabled();
  } else {
    console.log("Button not found in " + browserName);
  }

  // Add more cross-browser logic if necessary
});
