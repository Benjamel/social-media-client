const user = {
  email: "benjatesting@noroff.no",
  password: "testing1234",
};

describe("An existing valid user logout test", () => {
  beforeEach(() => {
    cy.visit("https://benjamel.github.io/social-media-client/");
    cy.wait(1000);
    cy.clearLocalStorage();
    cy.get("#registerModal button")
      .should("be.visible")
      .contains("Login")
      .click({ force: true });
    cy.wait(1000);
    cy.get("input#loginEmail[name='email']").type(user.email);
    cy.get("input#loginPassword[name='password']").type(user.password);
    cy.get("button[type='submit']")
      .should("be.visible")
      .contains("Login")
      .click({ force: true });
    cy.wait(2000);
    cy.title().should("eq", "Test Client");
    cy.then(() => {
      expect(localStorage.getItem("token")).to.exist;
    });
  });

  it("Logout the user", () => {
    cy.get("button[data-auth=logout]").click();
  });
});
