import { TTestIds } from "@e2e-frontend-testing-framework-evaluation/lib-common/src/E2ETestIds";

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      customLogin(user: 1 | 2): Chainable<Subject>;
      signOut(): Chainable<Subject>;
      getBySel(
        selector: TTestIds,
        arg?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
      ): Chainable<Subject>;
      getBySelLike(
        selector: TTestIds,
        arg?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
      ): Chainable<Subject>;
    }
  }
}
