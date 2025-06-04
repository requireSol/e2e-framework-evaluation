import { TestHelper } from "./testHelper";

//Fixed it without if i dont perform and logouts. Because my entity provide will delete the session.

//https://github.com/cypress-io/cypress/issues/26028
//https://stackoverflow.com/questions/76462207/cypress-session-tests-not-working-for-the-second-time
//https://github.com/cypress-io/cypress/discussions/25222
//https://github.com/cypress-io/cypress/issues/25227

Cypress.Commands.add("customLogin", (user: 1 | 2) => {
  const userName = Cypress.env(`USERNAME${user}`);
  const password = Cypress.env(`PASSWORD${user}`);

  cy.session(
    userName,
    () => {
      cy.visit(Cypress.env("baseUrl"));
      cy.get("button[component=SignInButton]").click();

      cy.origin(
        Cypress.env("AUTH_URL"),
        { args: { userName, password } },
        ({ userName, password }) => {
          cy.get("input[id=identifier-field]").type(userName);
          cy.get("body").then(($body) => {
            if ($body.find("button[data-localization-key=formButtonPrimary]").length > 0) {
              cy.get("button[data-localization-key=formButtonPrimary]").click();
            }
          });
          cy.get("input[name=password]").type(password);
          cy.get("button[data-localization-key=formButtonPrimary]").click();
        },
      );
      cy.location("pathname").should("eq", "/dashboard");
    },
    {
      validate() {
        cy.visit(Cypress.env("baseUrl") + "/dashboard");
        cy.get(TestHelper.testIdData("text_dashboard")).contains("Dashboard");
      },
    },
  );
  cy.visit(Cypress.env("baseUrl") + "/dashboard");
  cy.get(TestHelper.testIdData("text_dashboard")).contains("Dashboard");
});

Cypress.Commands.add("signOut", () => {
  cy.get("span[class*=cl-avatarBox]").click();
  cy.get("button[class*=cl-button__signOut]").click();
});

//https://docs.cypress.io/app/core-concepts/best-practices
Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args);
});

Cypress.Commands.add("getBySelLike", (selector, ...args) => {
  return cy.get(`[data-testid*=${selector}]`, ...args);
});
