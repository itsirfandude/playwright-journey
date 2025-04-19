import { test, expect } from "@playwright/test";

test("Multiple elements handling", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  const todos = ["Learn", "Read", "Write"];
  for (const task of todos) {
    await page.getByPlaceholder("What needs to be done?").fill(task);
    await page.keyboard.press("Enter");
  }
  const checkbox = page.getByLabel("Toggle Todo");
  await expect(checkbox).toHaveCount(3);

  const todoitems = page.locator(".todo-list li");
  const count = await todoitems.count();

  for (let i = 0; i < count; i++) {
    const item = todoitems.nth(i);
    await expect(item).toBeVisible();
    console.log(await item.textContent());
  }
  const totalcheckbox = await checkbox.count();
  for (let i = 0; i < totalcheckbox; i++) {
    await checkbox.nth(i).check();
    await expect(checkbox.nth(i)).toBeChecked();
  }
});
