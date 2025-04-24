import { Page, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

export async function assertErrorMessage(page: Page) {
  const emessage = await page.locator(".flash.error");
  await expect(emessage).toContainText("Your username is invalid!");
}