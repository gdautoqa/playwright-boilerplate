import { APIRequestContext } from '@playwright/test';

export class BaseApiPage {
  constructor(protected request: APIRequestContext) {}

  async get(endpoint: string) {
    return await this.request.get(endpoint);
  }

  async post(endpoint: string, data: any) {
    return await this.request.post(endpoint, { data });
  }

  async put(endpoint: string, data: any) {
    return await this.request.put(endpoint, { data });
  }

  async delete(endpoint: string) {
    return await this.request.delete(endpoint);
  }
}
