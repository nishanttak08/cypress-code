// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/**
 * Custom command for login functionality
 * Usage: cy.login(username, password)
 */
Cypress.Commands.add('login', (username, password) => {
  cy.get('#username').clear().type(username);
  cy.get('#password').clear().type(password);
  cy.get('button[type="submit"]').click();
});

/**
 * Custom command to verify flash message
 * Usage: cy.verifyFlashMessage(message, type)
 */
Cypress.Commands.add('verifyFlashMessage', (message, type = 'success') => {
  cy.get('#flash')
    .should('be.visible')
    .and('contain', message)
    .and('have.class', 'flash')
    .and('have.class', type);
});

/**
 * Custom command to clear session storage and cookies
 * Usage: cy.clearSession()
 */
Cypress.Commands.add('clearSession', () => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.window().then((window) => {
    window.sessionStorage.clear();
  });
});

/**
 * Custom command to wait for page to load
 * Usage: cy.waitForPageLoad()
 */
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible');
  cy.document().should('have.property', 'readyState').and('eq', 'complete');
});

// Custom command type definitions for TypeScript support
// (Add these to cypress/support/index.d.ts if using TypeScript)
/*
declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<void>
      verifyFlashMessage(message: string, type?: string): Chainable<void>
      clearSession(): Chainable<void>
      waitForPageLoad(): Chainable<void>
    }
  }
}
*/
