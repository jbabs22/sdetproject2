import { defineConfig, devices } from "@playwright/test";

/*
Read environment variables from file.
https://github.com/motdotla/dotenv
 */

// See https://playwright.dev/docs/test-configuration.

export default defineConfig({
  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: "./tests",

  // Maximum time one test can run for.
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },

  // Run all tests in parallel.
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  // Retry on CI only.
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */

  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ["list", { printSteps: true }],
    ["html", { outputDir: "./test-results" }],
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  // Define Browser specific options
  use: {
    // /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'https://thinking-tester-contact-list.herokuapp.com/',
    // baseURL: process.env.API === '1' ? 'https://jsonplaceholder.typicode.com' : 'https://thinking-tester-contact-list.herokuapp.com/',

    // Enable to Run Headless
    headless: true,

    //This is for Playwright commands (click(), type(), fill())
    actionTimeout: 10000, //15 seconds

    // Whether to ignore HTTPS errors when fetching the url. Defaults to false.
    ignoreHTTPSErrors: true, //This is to handle SSL certifications

    //video: 'off', //To record videos of test execution
    video: "retain-on-failure",

    //screenshot: 'off' //To take screenshots
    screenshot: "only-on-failure",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: "retain-on-failure",
    trace: "on",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: "./test-results",

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
