import { expect } from "@playwright/test";
import { TodoPage } from "../pages/TodoPage";

export async function expectTodoCountToBe(
  todoPage: TodoPage,
  expectedCount: number
) {
  const count = await todoPage.getTodoCount();
  expect(count).toBe(expectedCount);
}

export async function expectTodoTextToBe(
  todoPage: TodoPage,
  index: number,
  expectedText: string
) {
  const text = await todoPage.getTodoText(index);
  expect(text).toBe(expectedText);
}

export async function expectTodoTextNotToBe(
  todoPage: TodoPage,
  index: number,
  unexpectedText: string
) {
  const text = await todoPage.getTodoText(index);
  expect(text).not.toBe(unexpectedText);
}

export async function expectTodoToBeVisible(
  todoPage: TodoPage,
  index: number
  ) {
  const visibile = await todoPage.isTodoVisible(index);
  expect (visibile).toBe(true);
}
