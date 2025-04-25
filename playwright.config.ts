// playwright.config.ts
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  retries: 2, // Retry failed tests up to 2 times
  timeout: 60000, // Max test time = 60 seconds
  // Use 4 workers for parallel test execution
  projects: [
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "chrome",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  workers: 1, // Run tests in parallel across 3 workers
});



