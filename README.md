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

## 🛠 Tech Stack

- Playwright  
- TypeScript  
- Node.js

## 💡 Goal

To document and demonstrate practical Playwright skills with small, real-world UI automation examples.

---

_More test cases and advanced scenarios will be added as the learning continues._