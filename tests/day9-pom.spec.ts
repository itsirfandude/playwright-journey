import { test, expect } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

test("Day 9 - Add todos using Page Object", async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo("Learn POM");
  await todoPage.addTodo("Refactor tests");

  const count = await todoPage.getTodoCount();
  expect(count).toBe(2);

  const firstTodo = await todoPage.getTodoText(0);
  const secondTodo = await todoPage.getTodoText(1);

  console.log("✅ Todos added:", firstTodo, secondTodo);

  expect(firstTodo).toContain("Learn POM");
  expect(secondTodo).toContain("Refactor tests");
});
