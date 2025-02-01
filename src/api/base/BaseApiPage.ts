import { APIRequestContext } from '@playwright/test';

export class BaseApiPage {
  protected request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(endpoint: string) {
    return await this.request.get(endpoint);
  }
}
