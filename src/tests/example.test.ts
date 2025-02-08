import { test, expect } from '@playwright/test';
import { ExamplePage } from '../pages/examplePage';
test('example test', async ({ page }) => {
  const examplePage = new ExamplePage(page);
  await examplePage.navigate();
  expect(await examplePage.getTitle()).toBe(
    'Example Playwright Boilerplate Page',
  );
});
