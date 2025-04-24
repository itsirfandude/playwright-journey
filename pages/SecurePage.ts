import { Page, expect } from "@playwright/test";

export class SecurePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async assertSuccessMessage() {
    const message = await this.page.locator("#flash");
    await expect(message).toContainText("You logged into a secure area!");
  }
}
