import { test, expect } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

test("Day 9 Challenge - Add todos using Page Object", async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo("Write tests");
  await todoPage.addTodo("Refactor page");
  await todoPage.addTodo("Push to GitHub");

  const count = await todoPage.getTodoCount();
  expect(count).toBe(3);

  const firstTodo = await todoPage.getTodoText(0);
  expect(firstTodo).not.toBe("Push to GitHub");

  const secondTodo = await todoPage.getTodoText(1);
  expect(secondTodo).toContain("Refactor page");

  const thirdTodo = await todoPage.isTodoVisible(2);
  expect(thirdTodo).toBe(true);



});