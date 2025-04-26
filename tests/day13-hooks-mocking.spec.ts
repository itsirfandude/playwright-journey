import { test, expect } from "@playwright/test";



test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
  });

  test("should show the login form", async ({ page }) => {
    await expect(page.locator("form")).toBeVisible();
  });

   test("mock API fail", async ({ page }) => {
     await page.route("**/login", async (route) => {
       await route.fulfill({
         status: 401,
         body: JSON.stringify({ message: "Unauthorized" }),
       });
     });

     // Fill the login form
     await page.fill('input[name="username"]', "wronguser");
     await page.fill('input[name="password"]', "wrongpass");
     await page.click('button[type="submit"]');

     // Assert that error message appears
     await expect(page.locator(".flash.error")).toBeVisible();

   });

 test("mock API pass", async ({ page }) => {
   await page.route("**/login", async (route) => {
     await route.fulfill({
       status: 200, // ✅ Successful login response
       body: JSON.stringify({ token: "fake-token" }),
     });
   });

   // Fill the login form
   await page.fill('input[name="username"]', "tomsmith");
   await page.fill('input[name="password"]', "SuperSecretPassword!");
   await page.click('button[type="submit"]');

   // Assert that error message appears
   await expect(page.locator(".flash.success")).toBeVisible();
 });
   
});
