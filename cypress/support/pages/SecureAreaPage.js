/**
 * Secure Area Page Object Model
 * This class encapsulates all the elements and actions related to the secure area page
 * (the page users see after successful login)
 */
class SecureAreaPage {
  
  // Page elements
  get pageTitle() {
    return cy.get('h2');
  }
  
  get successMessage() {
    return cy.get('#flash');
  }
  
  get logoutButton() {
    return cy.get('a[href="/logout"]');
  }
  
  get pageContent() {
    return cy.get('.example');
  }
  
  // Page actions
  
  /**
   * Click the logout button
   */
  logout() {
    this.logoutButton.click();
    return this;
  }
  
  // Verification methods
  
  /**
   * Verify that we're on the secure area page
   */
  verifySecureAreaPage() {
    // Check URL
    cy.url().should('include', '/secure');
    
    // Check page title
    this.pageTitle.should('contain', 'Secure Area');
    
    // Check logout button is visible
    this.logoutButton.should('be.visible');
    
    return this;
  }
  
  /**
   * Verify the success message after login
   * @param {string} expectedMessage - Expected success message
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
   * Verify page content
   */
  verifyPageContent() {
    this.pageContent.should('be.visible');
    this.pageContent.should('contain', 'Welcome to the-internet');
    return this;
  }
}

export default SecureAreaPage;
