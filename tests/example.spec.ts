import { test, expect, chromium } from '@playwright/test';

test('Add a todo  item', async () => {
  // Launch the browser in headed mode
  const browser = await chromium.launch({ headless: false }); 
  const context = await browser.newContext();// Ensure headless is false to see the browser
  const page = await browser.newPage();

  await page.goto('https://demo.playwright.dev/todomvc');

  await page.locator('.new-todo').fill('Buy milk');
  await page.keyboard.press('Enter');

  const todo = page.locator('.todo-list li label');

  await expect(todo).toHaveText('Buy milk');

  // Close the browser after the test
  await browser.close();
});
