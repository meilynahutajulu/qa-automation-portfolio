# QA Automation Portfolio — SauceDemo

## Overview

This project is a UI test automation portfolio built with JavaScript and Playwright. It focuses on testing the login functionality of the SauceDemo web application, including successful login scenarios and common authentication errors.

The project demonstrates basic UI automation, assertion handling, test execution, HTML reporting, and failure screenshot capture.

## Tech Stack

- **Language:** JavaScript
- **Test Framework:** Playwright Test
- **Browser:** Chromium
- **Application Under Test:** [SauceDemo](https://www.saucedemo.com/)
- **Test Reporting:** Playwright HTML Reporter

## Project Structure

```text
qa-automation-portfolio/
├── tests/
│   ├── first-test.spec.js
│   └── login.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

Generated test reports and results are not included in this project structure.

## Test Scenarios

The login test suite currently contains six test cases:

| Test ID | Scenario | Expected Result |
|---|---|---|
| TC-01 | Login with valid credentials | User is redirected to the inventory page |
| TC-02 | Login with an incorrect password | An authentication error is displayed |
| TC-03 | Login with an empty username | A username-required error is displayed |
| TC-04 | Login with an empty password | A password-required error is displayed |
| TC-05 | Login with both fields empty | A username-required error is displayed |
| TC-06 | Login with a locked-out account | A locked-out error is displayed |

## Prerequisites

Make sure the following are installed:

- Node.js
- npm

## Installation

Clone the repository and open its directory:

```bash
git clone https://github.com/meilynahutajulu/qa-automation-portfolio.git
cd qa-automation-portfolio
```

Install the project dependencies:

```bash
npm install
```

Install the Chromium browser required by Playwright:

```bash
npx playwright install chromium
```

## Running the Tests

Run all test cases:

```bash
npx playwright test
```

Run only the login test suite:

```bash
npx playwright test tests/login.spec.js
```

## Test Reports

Generate and open the HTML report:

```bash
npx playwright test --reporter=html
npx playwright show-report
```

The report provides test execution results and failure details.

## Failure Evidence

The Playwright configuration is set up to capture screenshots when tests fail and retain traces for debugging.

These artifacts help identify differences between expected and actual results and investigate test failures.

## Learning Objectives

Through this project, I am practicing:

- Writing automated UI test cases using Playwright.
- Validating application behavior with assertions.
- Testing positive and negative login scenarios.
- Reading test execution results and debugging failures.
- Generating HTML reports and reviewing failure evidence.

## Disclaimer

This is a learning and portfolio project created for practicing QA automation. Test results reflect the test cases and assertions implemented in this repository.
