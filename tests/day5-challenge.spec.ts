import {test, expect} from '@playwright/test'

test ('Waits and timeouts demo', async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");


  await page.waitForTimeout(1000);

  await page.getByPlaceholder('What needs to be done?').fill('Sync with remote');
  await page.keyboard.press('Enter');

   await page.getByPlaceholder('What needs to be done?').fill('Deploy to server');
   await page.keyboard.press('Enter');

   await expect(page.getByText('Deploy to server')).toBeVisible();

   const todoitem= page.getByRole('listitem').filter({ hasText: 'Deploy to server' }).getByLabel('Toggle Todo');
   await todoitem.check();
   await expect(todoitem).toBeChecked();
   await expect(
     page
       .getByRole("listitem")
       .filter({ hasText: "Sync with remote" })
       .getByLabel("Toggle Todo")
   ).not.toBeChecked();

    await page.getByRole('button', { name: 'Clear completed'}).click();

   await expect(page.getByText("Deploy to server")).toHaveCount(0); 
   await expect(page.getByText("Sync with remote")).toHaveCount(1); 
});