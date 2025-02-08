import { Page } from '@playwright/test';

export class ExamplePage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('/example');
  }

  async getTitle() {
    return await this.page.title();
  }
}
