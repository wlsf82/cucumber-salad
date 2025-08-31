# cucumber-salad

Sample project to integrate Cypress with the Cucumber plugin.

## 🥒 Project Overview

This project demonstrates how to set up end-to-end testing using **Cypress** with **Cucumber** for behavior-driven development (BDD). The tests are written in Gherkin syntax and target multiple applications including EngageSphere and Hacker Stories.

## 📋 Prerequisites

- Node.js (version 20 or higher - LTS)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone and Install

```bash
git clone <repository-url>
cd cucumber-salad
npm install
```

### 2. Running Tests

#### Interactive Mode (Cypress Test Runner)

```bash
npm run cy:open
```

#### Headless Mode (All Tests)

```bash
npm test
```

Below is the result of a successfull execution.

```bash
(Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  cookies/cookies.feature                  00:02        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  greeting/greeting.feature                00:02        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  hackerStories/lastSearches.feature       00:02        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  itemsPerPage/itemsPerPage.feature        00:02        4        4        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:10       10       10        -        -        -
```

#### Run Smoke Tests Only

```bash
npm run test:smoke
```

#### Run Non-Smoke Tests

```bash
npm run test:not:smoke
```

#### Generate HTML Report

```bash
npm run test:with:html:report
```

## 🏗️ Project Structure

```text
cypress/
├── e2e/                     # Feature files and step definitions
│   ├── cookies/             # Cookie consent functionality tests
│   ├── greeting/            # Greeting functionality tests
│   ├── hackerStories/       # Hacker Stories app functionality tests
│   └── itemsPerPage/        # Items per page functionality tests
├── screenshots/             # Test failure screenshots
└── support/
    ├── commands.js          # Custom Cypress commands
    ├── e2e.js               # Global test configuration
    └── step_definitions/
        └── common.js        # Shared step definitions
```

## 🧪 Test Features

### Cookie Consent Banner

- Tests cookie consent banner functionality
- Verifies banner acceptance and decline workflows
- Validates cookie values are properly set

### Greeting Functionality

- Tests default greeting display
- Tests customized greeting with user input
- Icon display validation based on input values
- Uses data-driven testing with Examples table

### Items Per Page

- Tests pagination functionality
- Verifies correct number of items displayed per page
- Data-driven tests with multiple page sizes (5, 10, 20, 50)

### Hacker Stories

- Tests search functionality in the Hacker Stories application
- Validates last search terms are displayed as buttons
- Uses data tables for multiple search term testing

## 🏷️ Test Tags

The project uses Cucumber tags for test organization:

- `@smoke` - Critical functionality tests that run in smoke test suite
- Tests can be filtered using tags in npm scripts

## 📊 Reporting

- HTML reports are generated using the Cucumber preprocessor
- Reports are configured in `.cypress-cucumber-preprocessorrc.json`
- Generated report file: `cucumber-report.html`

## 🔧 Configuration

### Cypress Configuration (`cypress.config.js`)

- Uses ES modules syntax
- Configured with Cucumber preprocessor and esbuild
- Spec pattern set to `**/*.feature` files
- Environment variables for filtering specs

### Cucumber Configuration (`.cypress-cucumber-preprocessorrc.json`)

- HTML reporting enabled
- Additional configuration options available

## 📝 Writing Tests

### Feature Files

Write feature files using Gherkin syntax in the `cypress/e2e/` directory. Examples include:

**Basic Scenario:**

```gherkin
Feature: Feature Name

  Scenario: Test scenario description
    Given I have a precondition
    When I perform an action
    Then I should see the expected result
```

**Data-driven Testing with Examples:**

```gherkin
Feature: Greeting

  @smoke
  Scenario: shows a customized greeting
    When I type "<name>" in the name input field
    Then I see the following greeting: Hi "<name>"!
    And I see the following icon: "<icon>"

    Examples:
      | name     | icon            |
      | Walmyr   | none            |
      | Squirrel | lucide-squirrel |
```

**Data Tables for Multiple Values:**

```gherkin
Feature: Hacker Stories - Last Search

  Scenario: shows the last three searched terms as buttons
    Given I access the Hacker Stories web app
    When I search for these terms
      | Vue | Svelte | Angular |
    Then I see "3" buttons, one for each of the last searched terms
```

### Step Definitions

Implement step definitions in JavaScript files alongside feature files or in the shared `common.js` file:

```javascript
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I have a precondition', () => {
  // Implementation
})
```

## 🎯 Target Applications

Tests are designed to run against multiple applications:

### EngageSphere Application

- URL: `https://engage-sphere.vercel.app/`
- Cookie consent functionality
- User greeting interface with customizable names and icons
- Data table with pagination controls

### Hacker Stories Application

- URL: `https://wlsf82-hacker-stories.web.app/`
- Search functionality for Hacker News stories
- Last searches feature with button display
- Dynamic search term management

## 🤝 Contributing

1. Follow the existing project structure
2. Write descriptive feature files using Gherkin syntax
3. Implement step definitions in appropriate locations
4. Use meaningful tags for test organization
5. Ensure tests are independent and can run in any order

## 📚 Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber in Cypress: A step by step guide](https://filiphric.com/cucumber-in-cypress-a-step-by-step-guide#configuration)
