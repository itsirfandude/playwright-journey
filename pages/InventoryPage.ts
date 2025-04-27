import { Page } from "@playwright/test";

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addFirstProductToCart() {
    await this.page.click(
      'button[data-test="add-to-cart-sauce-labs-backpack"]'
    );
  }
async addSecondProductToCart() {
    await this.page.click(
      'button[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    );
  }


  

  async getCartCount() {
    return this.page.locator(".shopping_cart_badge");
  }

  async goToCart() {
    await this.page.click(".shopping_cart_link");
  }
}
