describe('Testing if a valid user can login and out', () => {
  beforeEach(() => {
    cy.visit('https://benjamel.github.io/social-media-client/');
    cy.wait(1000);
    cy.get('#registerModal button')
      .should('be.visible')
      .contains('Login')
      .click({ force: true });
    cy.wait(500);
    cy.get("input#loginEmail[name='email']").type(Cypress.env('email'));
    cy.get("input#loginPassword[name='password']").type(
      Cypress.env('password')
    );
    cy.get("button[type='submit']")
      .should('be.visible')
      .contains('Login')
      .click({ force: true });
    cy.wait(2000);
    cy.title().should('eq', 'Test Client');
  });

  it('Logging out the user and clear token from local storage', () => {
    cy.get('button[data-auth=logout]').click();
    cy.clearLocalStorage();
  });
});
