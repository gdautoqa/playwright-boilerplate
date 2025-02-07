# Playwright Boilerplate

This boilerplate provides a robust, modern setup for end-to-end testing with Playwright. It is designed to support both UI and API tests while promoting best practices and maintainability.

## Features

- **Playwright for End-to-End Testing:** Write tests for both UI and API endpoints.
- **TypeScript:** Enjoy full type safety across your test code.
- **BDD with Cucumber:** Write feature files and step definitions for behavior-driven testing.
- **Page Object Model (POM):** Organize your UI interactions in dedicated page classes (see `src/pages`).
- **API Testing Support:** Separate API page objects and test fixtures (see `src/api` and `src/tests/api`).
- **ESLint & Prettier Integration:** Use an `eslint.config.mjs` configured with the `eslint-plugin-playwright` and `@typescript-eslint` plugins, along with Prettier for consistent code formatting.
- **GitHub Actions CI/CD:** Includes a workflow (`.github/workflows/playwright.yml`) that installs dependencies, runs tests across multiple browsers (including mobile projects like Pixel 8 and iPhone 15), and uploads a Playwright report artifact.
- **Utility Helpers:** Reusable helpers for logging and API response validation (`src/utils/apiLogger.ts` and `src/utils/apiTestHelper.ts`).

## Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/gdautoqa/playwright-boilerplate
   cd playwright-boilerplate
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   npx playwright install
   ```

3. **Run Tests:**

   For UI and API tests, run:

   ```bash
   npx playwright test
   ```

4. **Linting and Formatting:**

   - Check for linting errors:

     ```bash
     npm run lint
     ```

   - Auto-fix lint issues:

     ```bash
     npm run lint:fix
     ```

   - Format code with Prettier:

     ```bash
     npm run format
     ```

## CI/CD with GitHub Actions

This project includes a GitHub Actions workflow that automatically runs tests on every push and pull request. The workflow defined in `.github/workflows/playwright.yml`:

- Checks out the repository.
- Sets up Node.js.
- Installs dependencies and Playwright browsers.
- Runs tests across projects defined in `playwright.config.ts` (e.g., Desktop Chrome, Firefox, WebKit, Pixel 8, iPhone 15, and API tests).
- Uploads the Playwright report as an artifact for later review.

If you need to adjust the mobile device names or add new projects, update the configuration in `playwright.config.ts`.

## Writing Tests

- **UI Tests:**  
  Create page objects under `src/pages` (e.g., `Example.page.ts`) and write tests in `src/tests`.

- **API Tests:**  
  Define API-related classes in `src/api` (e.g., `BaseApiPage.ts`) and extend API test fixtures in `src/tests/api`.

- **BDD Tests:**  
  Place feature files under `src/features` and step definitions under `src/steps` (e.g., `example.steps.ts`). The Cucumber configuration is provided in `cucumber.js`.

## Configuration Files

- **ESLint:** Configured in `eslint.config.mjs` for enforcing best practices and Playwright-specific rules.
- **TypeScript:** Configured in `tsconfig.json` for strict type-checking.
- **Prettier:** Configured in `.prettierrc` for consistency.
- **Playwright:** Multi-project testing configuration is provided in `playwright.config.ts`, which includes UI and API testing along with browser/device profiles.
