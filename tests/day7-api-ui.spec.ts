import { test, expect, request } from "@playwright/test";

test("Day 7 - API + UI hybrid test", async ({ page, request }) => {
  // Make an API call to a public fake API
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  expect(response.ok()).toBeTruthy();
  console.log("response is ",response);
  

  const users = await response.json();
  console.log("users are :",users);

  // Use one user's name to simulate a UI check
  const nameToSearch = users[0].name;
  console.log("API gave us user:", nameToSearch);

  // Now go to the UI page (we'll use the same todomvc for demo)
  await page.goto("https://demo.playwright.dev/todomvc");

  // Add the API user's name to the todo
  await page.getByPlaceholder("What needs to be done?").fill(nameToSearch);
  await page.keyboard.press("Enter");

  // Assert that it's visible in the UI
  await expect(page.getByText(nameToSearch)).toBeVisible();
});
