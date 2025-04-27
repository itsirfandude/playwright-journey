# Playwright Practice by Irfan

This repository contains focused test cases created as part of my 14-day Playwright + TypeScript learning journey.

## ✅ Covered Topics

- Day 1: Setup and first test  
- Day 2: Interacting with input fields and checkboxes  
- Day 3: Deep dive into Playwright locators  
- Day 4: Assertions and auto-waiting in action  
- Day 5: Handling waits, timeouts, and reliability  
  - Day 5 Challenge: Delay-based todo interaction with precise assertions
- Day 6: Looping through multiple elements and asserting visibility/state
- Day 7: API + UI hybrid testing
  - Fetched names from JSONPlaceholder API and used them in UI tests
- Day 8: Test structure and setup reuse
  - Used beforeEach to avoid repeated setup
  - Created separate test cases using shared logic
  - Introduced Playwright fixtures like `page` and `context`
- Locators challenge covering:
  - Placeholder locator
  - Role-based list item access
  - Label-based checkbox interactions
  - Text-based button interactions
  - Chaining and filtering locators
- Day 9: Page Object Model (POM)
  - Created TodoPage class to separate test logic
  - Used constructor, this, and readonly for clean code structure
  - Moved locators and actions into reusable class methods
  - Day 9 Challenge: Page Object practice
  - Added 3 todos using class methods
  - Asserted count, visibility, and content using clean POM-based test
- Day 10: Reuse and modular testing
  - Used existing Page Object (TodoPage) across multiple tests
  - Created reusable assertion helpers in TodoAssertions.ts
  - Implemented clean test flow with add/check/assert pattern
  - Used loops and `for...of` to dynamically add todos
  - Bonus: Added negative assertion with `.not.toBe()`
- Day 11: Advanced Page Object usage
  - Created separate page objects for login and secure page
  - Tested login flow using POM
  - Asserting messages via dedicated class methods
  - No raw locators in test file
  - Day 11 Challenge: Login flow (multi-page)
  - Used LoginPage and SecurePage for page separation
  - Added negative test for invalid credentials
  - Created reusable assertion helper in LoginAssertions.ts
  - Demonstrated locator debugging and selector accuracy
- Day 12 - Advanced Testing:
  - Cross-Browser Testing: Ran tests on Chrome, Firefox, and WebKit with browser-specific logic and element checks.
  - Parallel API + UI Testing: Tested API and UI in parallel for faster test execution.
  - Playwright Config: Set up a configuration file to manage cross-browser tests and parallel workers.
  - **Day 13 - Test Hooks, Grouping, and API Mocking**:
  - Grouped related tests using `test.describe`.
  - Used `beforeEach` to automatically navigate to the login page before each test.
  - Used `page.route` and `route.fulfill` to mock API responses:
    - Simulated a **401 Unauthorized** response and checked for error handling.
    - Simulated a **200 OK** response and checked for successful login behavior.
  - Differentiated between error messages (`.flash.error`) and success messages (`.flash.success`).
  - Practiced handling **UI interactions** and **API mocking** together for hybrid tests.
- **Day 14 - Final Challenge Project**:
  - Built a real-world style E2E flow:
    - Login with username/password.
    - Add multiple products to cart.
    - Verify cart badge and cart contents.
    - Logout and verify redirection to login page.
  - Practiced finding locators manually.
  - Wrote Page Object Model (POM) classes from scratch.
  - Used hooks (`beforeEach`) to set up tests cleanly.
  - Structured a complete, professional Playwright test.


## 🛠 Tech Stack

- Playwright  
- TypeScript  
- Node.js

## 💡 Goal

To document and demonstrate practical Playwright skills with small, real-world UI automation examples.

---

_More test cases and advanced scenarios will be added as the learning continues._