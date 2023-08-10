# sdetproject2

# Test Automation Final Project - RF-SMART ACADEMY - Jessica Babcock

## Criteria

- Select a UI and a API site to test from https://ultimateqa.com/dummy-automation-websites/

  - Contact List App (web UI)
    - https://thinking-tester-contact-list.herokuapp.com/

  - JSONPlaceholder (API)
    - https://jsonplaceholder.typicode.com/

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


#### API Testing
1. At least 4 for API testing and verifying data:
  1A. Get test case - 
      GET Request- Assert Response Status(OK)
  1B. Post test case - 
      POST Request - Creating a Resource
  1C. Use API returned results in a workflow - 
      Workflow (including manipulation) - Get Data, Reverse It, and Save as Artifact
  -- Notes: Kind of a pre-req to the following test
  1D. Collect data and create artifact after manipulating it in some way (reverse the order, select last 5, etc.) - 
      Manipulation - Get Data, Extract Only Top 5 Results, and Save as an Artifact
  -- Notes: Utilize the API test from workflow results -> to then manipulate and validate manipulation

#### UI Testing
2. At least 4 UI TEST CASES:
  2A. 1 login verification -
      Login Validation
  2B. 1 positive test case - 
      Positive Test Validation - add new contact to contact list
  2C. 1 negative test case validation - 
      Negative Test Validation - invalid login should display error
  2D. 1 end to end workflow - 
      End to End Validation - e2e - Login, Add Contact, & Edit Contact

#### Add. Testing (API)
3. Three additional cases, optional you can pick what they would be covering:
  3A. GET - Assert Response Status(Not Found) - Status(404)
  3B. GET - JSON Parsing
  3C. GET - Simple Get Test - Retrieve Comments


Timeline goal: 2 months


## Fave YouTube Playlists/Videos Found
- https://youtube.com/playlist?list=PL-hNDoK1-od9MXsp90HfSXeCVMQiXYI6Z (Playwright Tutorial)
- https://youtube.com/playlist?list=PL-hNDoK1-od_HpjnFwFZnjKpIs_D-lEpn (Playwright API Testing)
- https://youtube.com/playlist?list=PL-hNDoK1-od-26G3WdZ3YHXUbsJkHCc_6 (Advanced Playwright Testing)
