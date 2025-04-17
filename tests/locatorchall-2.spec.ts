import { test, expect } from "@playwright/test";
test("Assertions and auto waits demo", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  const todos = ["Learn Playwright", "Review code", "Push to GitHub"];

  for (const task of todos) {
    await page.getByPlaceholder("What needs to be done?").fill(task);
    await page.keyboard.press("Enter");
  }

  for (const task of todos) {
    await expect(page.getByText(task)).toBeVisible();
  }

  const checktodo = page.getByLabel("Toggle Todo").nth(1);
  await checktodo.check();

  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "Review code" })
      .getByLabel("Toggle Todo")
  ).toBeChecked();
  const button = page.getByRole("button", { name: "Clear completed" });

  await button.click();
  await expect(button).toHaveCount(0);

  await expect(
    page.getByRole("listitem").filter({ hasText: "Learn Playwright" })
  ).toBeVisible();
  await expect(
    page.getByRole("listitem").filter({ hasText: "Push to GitHub" })
  ).toBeVisible();
});
