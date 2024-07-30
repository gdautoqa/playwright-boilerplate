# Playwright Boilerplate

This is a boilerplate setup for end-to-end UI testing using Playwright. It includes best practices and configurations for various features like screenshots, videos, accessibility testing, and continuous integration with GitHub Actions.

## Features

- Playwright for end-to-end testing
- TypeScript for type safety
- Cucumber for BDD
- Axe-core for accessibility testing
- Prettier for code formatting
- Page Object Model (POM) pattern
- GitHub Actions for CI/CD
- Supports testing on multiple browsers including Chromium, Firefox, WebKit, and emulated Android/iOS

## Project Structure

```plaintext
src/
  pages/
    example.page.ts
  tests/
    example.test.ts
    accessibility.test.ts
  utils/
    accessibility.ts
  features/
    example.feature
  steps/
    example.steps.ts
playwright.config.ts
tsconfig.json
cucumber.js
package.json
.gitignore
README.md
LICENSE.md
```

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/gdautoqa/playwright-boilerplate
    cd playwright-boilerplate
    ```

2. Install dependencies:
    ```bash
    npm install
    npx playwright install
    ```

3. Run tests:
    ```bash
    npx playwright test
    ```

4. Run accessibility tests:
    ```bash
    npx playwright test src/tests/accessibility.test.ts
    ```

## CI/CD with GitHub Actions

This project includes a GitHub Actions workflow to run the tests on every push and pull request. The workflow is defined in `.github/workflows/playwright.yml`.

## Writing Tests

- **Page Object Model:** Create page objects under `src/pages` and use them in your tests.
- **BDD with Cucumber:** Define feature files under `src/features` and step definitions under `src/steps`.
- **Accessibility Testing:** Use `axe-core` with Playwright to check for accessibility issues.

## License

This project is licensed under the MIT License.