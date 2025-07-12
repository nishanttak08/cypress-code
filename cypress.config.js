const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Base URL for the application under test
    baseUrl: 'https://the-internet.herokuapp.com',
    
    // Viewport settings
    viewportWidth: 1280,
    viewportHeight: 720,
    
    // Test configuration
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    
    // Video and screenshot settings
    video: true,
    screenshotOnRunFailure: true,
    
    // Retry settings
    retries: {
      runMode: 2,
      openMode: 0
    },
    
    // Test file patterns
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    
    // Setup node events
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
    // Environment variables
    env: {
      // Add any environment-specific variables here
    }
  },
})
