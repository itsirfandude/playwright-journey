import { test, expect } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";
import {expectTodoCountToBe,expectTodoTextToBe} from "../utils/TodoAssertions";

test("Day 10 - Reuse TodoPage to add and check multiple todos", async ({
  page,
}) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.addTodo("Modular test 1");
  await todoPage.addTodo("Modular test 2");

  await expectTodoCountToBe(todoPage, 2);

  await expectTodoTextToBe(todoPage,0,"Modular test 1");

  
});
