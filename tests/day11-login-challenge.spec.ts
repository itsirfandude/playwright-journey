import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { SecurePage } from "../pages/SecurePage";
import { assertErrorMessage } from "../utils/LoginAssertions";

test("Day 11 Challenge - Login and verify secure area", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const securePage = new SecurePage(page);

    await loginPage.goto();
    await loginPage.login("wronguser", "wrongpass!");
    await assertErrorMessage(page);


   await loginPage.login("tomsmith", "SuperSecretPassword!");
   await securePage.assertSuccessMessage();

  console.log("Login successful!");



});
