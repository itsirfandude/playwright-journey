import { test,expect } from '@playwright/test'

test('locators challenge', async ({page}) => {

await page.goto('https://demo.playwright.dev/todomvc');

await page.getByPlaceholder('What needs to be done?').fill('Buy fruit');
await page.keyboard.press('Enter');
await page.getByPlaceholder('What needs to be done?').fill('wash bike');
await page.keyboard.press('Enter');
const checkbox = page.getByLabel('Toggle Todo').nth(0);
await expect(checkbox).toBeVisible();
const items = page.getByRole('listitem');
await expect(items.nth(0)).toContainText('Buy fruit');
await expect(items.nth(1)).toContainText('wash bike');
checkbox.click();
await page.getByRole('button', { name: 'Clear completed'}).click();





})