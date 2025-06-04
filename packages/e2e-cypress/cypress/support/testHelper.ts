import { TTestIds } from "@e2e-frontend-testing-framework-evaluation/lib-common/src/E2ETestIds";

export class TestHelper {
  static testIdData(testId: TTestIds): string {
    return `[data-testid=${testId}]`;
  }

}
