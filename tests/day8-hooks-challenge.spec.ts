import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {

    await page.goto("https://demo.playwright.dev/todomvc");
    console.log('Setup is ready');

});

test("Add 2 todo",async ({ page }) => {

   await page.getByPlaceholder("What needs to be done?").fill("Hook test 1");
   await page.keyboard.press('Enter');

   await page.getByPlaceholder("What needs to be done?").fill("Hook test 2");
   await page.keyboard.press("Enter");
   const items = page.locator(".todo-list li");
   await expect(items.nth(0)).toBeVisible();
   await expect(items.nth(1)).toBeVisible();
 });

 test("Second test run",async ({ page }) => {

      await page.getByPlaceholder("What needs to be done?").fill("Second test run");
       await page.keyboard.press("Enter");
        const checkbox = page.getByLabel("Toggle Todo");
       await checkbox.check();
       await expect(checkbox).toBeChecked(); 
 });

