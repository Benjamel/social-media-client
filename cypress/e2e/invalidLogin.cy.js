const user = {
  email: "benjatesting@noroff.no",
  password: "testing1234",
};

describe("Invalid credentials login test", () => {
  beforeEach(() => {
    cy.visit("https://benjamel.github.io/social-media-client/");
    cy.wait(1000);
    cy.clearLocalStorage();
  });

  it("Login with invalid credentials", () => {
    const invalidUser = {
      email: "invaliduser@noroff.no",
      password: "notvalid123",
    };

    cy.title().should("eq", "Test Client");

    cy.get("#registerModal button")
      .should("be.visible")
      .contains("Login")
      .click();
    cy.wait(1000);

    cy.get("input#loginEmail[name='email']").type(invalidUser.email);

    cy.get("input#loginPassword[name='password']").type(invalidUser.password);

    cy.get("button[type='submit']")
      .should("be.visible")
      .contains("Login")
      .click({ force: true });

    cy.on("window:alert", (Text) => {
      expect(Text).to.eq("Email or password is incorrect");
    });

    cy.then(() => {
      expect(localStorage.getItem("token")).to.be.null;
    });
  });
});
