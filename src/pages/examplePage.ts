import { Page } from '@playwright/test';

export class ExamplePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('http://www.example.com');
  }

  async getTitle() {
    return await this.page.title();
  }
}
