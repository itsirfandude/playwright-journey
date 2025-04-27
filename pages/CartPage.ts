import { Page } from "@playwright/test";

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getCartItems() {
    return this.page.locator(".cart_item");
  }

  async logout() {
    await this.page.click("#react-burger-menu-btn");
    await this.page.click("#logout_sidebar_link");
  }
}
