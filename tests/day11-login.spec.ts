import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { SecurePage } from "../pages/SecurePage";

test("Day 11 - Login and verify secure area", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const securePage = new SecurePage(page);

  await loginPage.goto();
  await loginPage.login("tomsmith", "SuperSecretPassword!");
  await securePage.assertSuccessMessage();
});
