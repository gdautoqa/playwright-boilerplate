export const apiTestHelper = {
  validateStatus: (actualStatus: number, expectedStatus: number) => {
    if (actualStatus !== expectedStatus) {
      throw new Error(
        `Expected status ${expectedStatus} but got ${actualStatus}`,
      );
    }
  },
};
