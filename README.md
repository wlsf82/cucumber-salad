# cucumber-salad

Sample project to integrate Cypress with the Cucumber plugin.

## 🥒 Project Overview

This project demonstrates how to set up end-to-end testing using **Cypress** with **Cucumber** for behavior-driven development (BDD). The tests are written in Gherkin syntax and target the EngageSphere application.

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
- Verifies banner acceptance workflow

### Greeting Functionality

- Tests default greeting display
- Tests customized greeting with user input
- Uses data-driven testing with Examples table

### Items Per Page

- Tests pagination functionality
- Verifies correct number of items displayed per page
- Data-driven tests with multiple page sizes (5, 10, 20, 50)

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

Write feature files using Gherkin syntax in the `cypress/e2e/` directory:

```gherkin
Feature: Feature Name

  Scenario: Test scenario description
    Given I have a precondition
    When I perform an action
    Then I should see the expected result
```

### Step Definitions

Implement step definitions in JavaScript files alongside feature files or in the shared `common.js` file:

```javascript
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I have a precondition', () => {
  // Implementation
})
```

## 🎯 Target Application

Tests are designed to run against the **EngageSphere** application:

- URL: `https://engage-sphere.vercel.app/`
- Cookie consent functionality
- User greeting interface
- Data table with pagination

## 🤝 Contributing

1. Follow the existing project structure
2. Write descriptive feature files using Gherkin syntax
3. Implement step definitions in appropriate locations
4. Use meaningful tags for test organization
5. Ensure tests are independent and can run in any order

## 📚 Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cucumber in Cypress: A step by step guide](https://filiphric.com/cucumber-in-cypress-a-step-by-step-guide#configuration)
