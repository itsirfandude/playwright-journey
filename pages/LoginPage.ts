import { Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  r;

  constructor(page: Page) {
    this.page = page;
  }
  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }

  async login(username: string, password: string) {
    await this.page.fill("#username", username);
    await this.page.fill("#password", password);
    await this.page.click('button[type="submit"]');
  }
}