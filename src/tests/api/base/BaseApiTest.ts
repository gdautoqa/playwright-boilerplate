import { test as base, expect } from '@playwright/test';

export class BaseApiTest {}

const test = base.extend({});

export { test, expect };
