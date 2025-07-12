/**
 * Login Page Object Model
 * This class encapsulates all the elements and actions related to the login page
 */
class LoginPage {
  
  // Page elements - using getter methods for better maintainability
  get usernameInput() {
    return cy.get('#username');
  }
  
  get passwordInput() {
    return cy.get('#password');
  }
  
  get loginButton() {
    return cy.get('button[type="submit"]');
  }
  
  get errorMessage() {
    return cy.get('#flash');
  }
  
  get successMessage() {
    return cy.get('#flash');
  }
  
  get logoutButton() {
    return cy.get('a[href="/logout"]');
  }
  
  get pageTitle() {
    return cy.get('h2');
  }
  
  get loginForm() {
    return cy.get('#login');
  }
  
  // Page actions
  
  /**
   * Navigate to the login page
   */
  visit() {
    cy.visit('/login');
    
    // Wait for the page to load and verify we're on the login page
    this.pageTitle.should('contain', 'Login Page');
    this.loginForm.should('be.visible');
    
    return this;
  }
  
  /**
   * Enter username in the username field
   * @param {string} username - The username to enter
   */
  enterUsername(username) {
    this.usernameInput.clear().type(username);
    return this;
  }
  
  /**
   * Enter password in the password field
   * @param {string} password - The password to enter
   */
  enterPassword(password) {
    this.passwordInput.clear().type(password);
    return this;
  }
  
  /**
   * Click the login button
   */
  clickLogin() {
    this.loginButton.click();
    return this;
  }
  
  /**
   * Perform a complete login action
   * @param {string} username - The username to login with
   * @param {string} password - The password to login with
   */
  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
    return this;
  }
  
  /**
   * Click the logout button (available after successful login)
   */
  logout() {
    this.logoutButton.click();
    return this;
  }
  
  // Verification methods
  
  /**
   * Verify that success message is displayed
   * @param {string} expectedMessage - The expected success message
   */
  verifySuccessMessage(expectedMessage) {
    this.successMessage
      .should('be.visible')
      .and('contain', expectedMessage)
      .and('have.class', 'flash')
      .and('have.class', 'success');
    return this;
  }
  
  /**
   * Verify that error message is displayed
   * @param {string} expectedMessage - The expected error message
   */
  verifyErrorMessage(expectedMessage) {
    this.errorMessage
      .should('be.visible')
      .and('contain', expectedMessage)
      .and('have.class', 'flash')
      .and('have.class', 'error');
    return this;
  }
  
  /**
   * Verify that login was successful by checking URL and page elements
   */
  verifySuccessfulLogin() {
    // Check URL contains secure area
    cy.url().should('include', '/secure');
    
    // Check logout button is visible
    this.logoutButton.should('be.visible');
    
    // Check page title
    cy.get('h2').should('contain', 'Secure Area');
    
    return this;
  }
  
  /**
   * Verify that we're still on the login page (failed login)
   */
  verifyStillOnLoginPage() {
    cy.url().should('include', '/login');
    this.pageTitle.should('contain', 'Login Page');
    this.loginForm.should('be.visible');
    return this;
  }
}
export default LoginPage;
