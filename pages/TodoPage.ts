import { Page, Locator } from "@playwright/test";

export class TodoPage {
  readonly page: Page;
  readonly inputField: Locator;
  readonly todoItems: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputField = page.getByPlaceholder("What needs to be done?");
    this.todoItems = page.locator(".todo-list li");
  }

  async goto() {
    await this.page.goto("https://demo.playwright.dev/todomvc");
  }

  async addTodo(text: string) {
    await this.inputField.fill(text);
    await this.page.keyboard.press("Enter");
  }

  async getTodoCount(): Promise<number> {
    return await this.todoItems.count();
  }

  async getTodoText(index: number): Promise<string | null> {
    return await this.todoItems.nth(index).textContent();
  }

  async isTodoVisible(index: number): Promise<boolean> {
    return await this.todoItems.nth(index).isVisible();
  }
}
