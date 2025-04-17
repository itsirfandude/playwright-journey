import { test,expect } from '@playwright/test';
test ('Assertions and auto waits demo', async ({ page })=> {

    await page.goto('https://demo.playwright.dev/todomvc');

    await page.getByPlaceholder('What needs to be done?').fill('Learn assertions');
    await page.keyboard.press('Enter');

    const todo= page.getByText('Learn assertions');
    await expect (todo).toBeVisible();
    await expect(todo).toHaveText('Learn assertions');

    await page.getByLabel('Toggle Todo').check();
    const toggle = page.getByLabel('Toggle Todo');

  // Assert it's checked
  await expect(toggle).toBeChecked(); // assertion 3

  // Click clear completed
  await page.getByRole('button', { name: 'Clear completed' }).click();

  // Assert it's gone
  await expect(page.getByText('RLearn assertions')).toHaveCount(0); // assertion 4
});
