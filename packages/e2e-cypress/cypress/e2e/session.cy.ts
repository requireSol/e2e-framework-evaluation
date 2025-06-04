describe("session", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"));
  });

  it("can recover 2 sessions", () => {
    //https://docs.cypress.io/api/commands/session#Test-Isolation-Enabled
    // need to disable or multiple session restoring wont work right.
    //Didnt find anything to it
    cy.customLogin(1);
    cy.getBySel("tabmenu_session").click();
    cy.get("span[class*='block w-full truncate']").contains("testuser1");

    cy.customLogin(2);
    cy.getBySel("tabmenu_session").click();
    cy.get("span[class*='block w-full truncate']").contains("testuser2");

    cy.customLogin(1);

    cy.getBySel("tabmenu_session").click();
    cy.get("span[class*='block w-full truncate']").contains("testuser1");

    cy.customLogin(2);
    cy.getBySel("tabmenu_session").click();
    cy.get("span[class*='block w-full truncate']").contains("testuser2");

    cy.signOut();
  });
});
