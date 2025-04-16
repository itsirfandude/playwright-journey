import { test, expect } from '@playwright/test';

test('Playwright locator types demo', async ({ page }) => {
  // Navigate to the demo page
  await page.goto('https://demo.playwright.dev/todomvc');
    // Using Class locator
  await page.locator('.new-todo').fill('Buy eggs');
  await page.keyboard.press('Enter');
    //by text
  await expect(page.getByText('Buy eggs')).toBeVisible();

  //placeholder text
  await page.getByPlaceholder('What needs to be done?').fill('Buy coffee');
  await page.keyboard.press('Enter');

  //By role
  const items= page.getByRole('listitem');
  await expect(items.nth(1)).toContainText('Buy coffee');

  //by label
 await expect(page.getByRole('listitem').filter({ hasText: 'Buy coffee' }).getByLabel('Toggle Todo')).toBeVisible();

  // Using different locator types
});