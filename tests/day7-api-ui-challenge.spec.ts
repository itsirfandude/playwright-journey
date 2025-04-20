import { test, expect, request } from "@playwright/test";

test("Day 7 - Challenge API + UI hybrid test", async ({ page, request }) => {
  // Make an API call to a public fake API
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  expect(response.ok()).toBeTruthy();
  
  const users= await response.json();
  console.log("users from API:", users);

    const namesToSearch =[ users[2].name,users[6].name,users[4].name];
    console.log("API gave us user:", namesToSearch);

    await page.goto("https://demo.playwright.dev/todomvc");
     for(const name of namesToSearch)
     {
        await page.getByPlaceholder("What needs to be done?").fill(name);
        await page.keyboard.press("Enter");
        await expect(page.getByText(name)).toBeVisible();
        console.log(`✅ Added ${name} to the todo list`);
     }

});