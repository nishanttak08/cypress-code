/**
 * Login Functionality Test Suite
 * 
 * This test suite covers comprehensive testing of the login functionality
 * including positive and negative test scenarios using the Page Object Model pattern.
 * 
 * Test Site: https://the-internet.herokuapp.com/login
 * Valid Credentials: username: tomsmith, password: SuperSecretPassword!
 * 
 * Test Coverage:
 * - Successful login with valid credentials
 * - Failed login with invalid username
 * - Failed login with invalid password
 * - Error message validation
 */

import LoginPage from '../support/pages/LoginPage';
import SecureAreaPage from '../support/pages/SecureAreaPage';

describe('Login Functionality Test Suite', () => {
  
  // Page object instances
  let loginPage;
  let secureAreaPage;
  
  // Test data
  let testData;
  
  // Setup before all tests
  before(() => {
    // Load test data from fixtures
    cy.fixture('loginData').then((data) => {
      testData = data;
    });
  });
  
  // Setup before each test
  beforeEach(() => {
    // Initialize page objects
    loginPage = new LoginPage();
    secureAreaPage = new SecureAreaPage();
    
    // Clear any existing session data
    cy.clearSession();
    
    // Navigate to login page and verify it loads correctly
    loginPage.visit();
  });
  
  // Test Suite 1: Successful Login Scenarios
  describe('Successful Login Scenarios', () => {
    
    it('Should successfully login with valid credentials', () => {
      // Test Description: Verify that a user can successfully login with valid credentials
      // and is redirected to the secure area with appropriate success message
      
      // Arrange: Get valid credentials from test data
      const { username, password } = testData.validCredentials;
      
      // Act: Perform login with valid credentials
      loginPage.login(username, password);
      
      // Assert: Verify successful login
      secureAreaPage.verifySecureAreaPage();
      secureAreaPage.verifySuccessMessage(testData.expectedMessages.successMessage);
      
      // Additional verification: Check that logout button is available
      secureAreaPage.logoutButton.should('be.visible');
      
      // Verify URL change
      cy.url().should('include', '/secure');
      cy.url().should('not.include', '/login');
    });
  });
  
  // Test Suite 2: Failed Login Scenarios
  describe('Failed Login Scenarios', () => {
    
    it('Should fail login with invalid username', () => {
      // Test Description: Verify that login fails with invalid username
      // and appropriate error message is displayed
      
      // Arrange: Get invalid username scenario
      const invalidUserScenario = testData.invalidCredentials.find(
        cred => cred.scenario === 'invalid username'
      );
      
      // Act: Attempt login with invalid username
      loginPage.login(invalidUserScenario.username, invalidUserScenario.password);
      
      // Assert: Verify login failure
      loginPage.verifyStillOnLoginPage();
      loginPage.verifyErrorMessage(testData.expectedMessages.invalidCredentialsMessage);
      
      // Verify we're still on login page
      cy.url().should('include', '/login');
      cy.url().should('not.include', '/secure');
    });
    
    it('Should fail login with invalid password', () => {
      // Test Description: Verify that login fails with invalid password
      // and appropriate error message is displayed
      
      // Arrange: Get invalid password scenario
      const invalidPasswordScenario = testData.invalidCredentials.find(
        cred => cred.scenario === 'invalid password'
      );
      
      // Act: Attempt login with invalid password
      loginPage.login(invalidPasswordScenario.username, invalidPasswordScenario.password);
      
      // Assert: Verify login failure
      loginPage.verifyStillOnLoginPage();
      loginPage.verifyErrorMessage(testData.expectedMessages.invalidPasswordMessage);
      
      // Verify form is still accessible
      loginPage.usernameInput.should('be.visible');
      loginPage.passwordInput.should('be.visible');
      loginPage.loginButton.should('be.visible');
    });
  });
  
  // Test Suite 4: Error Message Validation
  describe('Error Message Validation', () => {
    
    it('Should display error messages with correct styling', () => {
      // Test Description: Verify error messages have proper CSS classes and styling
      
      // Act: Trigger an error by using invalid credentials
      loginPage.login('invalid', 'invalid');
      
      // Assert: Verify error message styling
      loginPage.errorMessage
        .should('be.visible')
        .and('have.class', 'flash')
        .and('have.class', 'error');
      
      // Verify error message is prominently displayed
      loginPage.errorMessage.should('be.visible');
    });   
  }); 
  // Cleanup after all tests
  after(() => {
    // Clear any remaining session data
    cy.clearSession();
  });
});
