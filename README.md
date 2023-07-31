# sdetproject2

# Test Automation Final Project - RF-SMART ACADEMY - Jessica Babcock

## Criteria

- Select a UI and a API site to test from https://ultimateqa.com/dummy-automation-websites/

  - SauceDemo.com (web UI)
  - JSONPlaceholder (API)

- No hardcoded data – connect to external source (csv, database, file? etc)
  -- Notes: If retrieving data from a test, calling a file source (ex. csv) to retrieve and execute

- Test Cases should have appropriate validations, naming conventions, and comments
  -- https://playwright.dev/docs/pom
  -- To help optimize code https://playwright.dev/docs/api/class-test
- No play and record options, must be coded

### Technical Requirements

Coding language: Typescript
Framework: Playwright

### Necessary Deliverables

Test Cases:

1. At least 4 for API testing and verifying data:

- 1 Get test case
- 1 Post test case
- Use API returned results in a workflow
  -- Notes: Kind of a pre-req to the following test

- Collect data and create artifact after manipulating it in some way (reverse the order, select last 5, etc.)
  -- Notes: Utilize the API test from workflow results -> to then manipulate and validate manipulation

2. At least 4 UI TEST CASES:

- 1 login verification
- 1 positive test case
- 1 negative test case validation
- 1 end to end workflow

3. Three additional cases, optional you can pick what they would be covering

- Extra Bonus Activities - DELETE, PATCH, UPDATE

Timeline goal: 2 months



---- Notes to SELF
- CTRL + C -> Kill Tests Executing in terminal 
