describe("Login Form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display an error message if the password is missing", () => {
    cy.get('input[type="email"]').type("test@example.com");
    cy.get('button[type="submit"]').click();
    cy.contains("Email and password fields are required");
  });

  it("should display an error message if the email is missing", () => {
    cy.get('input[type="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.contains("Email and password fields are required");
  });

  it("should display a success message if both email and password are provided", () => {
    cy.get('input[type="email"]').type("test@example.com");
    cy.get('input[type="password"]').type("password123");
    cy.get('button[type="submit"]').click();
    cy.contains("Successfully logged in");
  });
});
