import {test,expect} from '@playwright/test';
import { TodoPage } from "../pages/TodoPage.ts";
import {
  expectTodoCountToBe,
  expectTodoTextToBe,
  expectTodoTextNotToBe,
  expectTodoToBeVisible} from "../utils/TodoAssertions.ts";

test("Day 10  Challenge - Reuse TodoPage and TodoAssertions to add and check multiple todos", async ({page,}) => {


  const todoPage = new TodoPage(page);

  await todoPage.goto();

  const todolist = ["Read Book","Practice typing","Push code" ]
  
  for (const item of todolist)
  {
    await todoPage.addTodo(item);
  }

  await expectTodoCountToBe (todoPage,3);
  await expectTodoTextToBe(todoPage, 1, "Practice typing");
  await expectTodoToBeVisible(todoPage,2);
  await expectTodoTextNotToBe (todoPage, 0, "Push code");

});
