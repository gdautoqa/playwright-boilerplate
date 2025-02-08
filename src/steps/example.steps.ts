import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ExamplePage } from '../pages/examplePage';

Given('I navigate to the example page', async function () {
  const page = this.page;
  const examplePage = new ExamplePage(page);
  await examplePage.navigate();
});

Then('I should see the title {string}', async function (title: string) {
  const page = this.page;
  const examplePage = new ExamplePage(page);
  expect(await examplePage.getTitle()).toBe(title);
});
