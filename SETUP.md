# Cypress Login Test Suite - Setup Instructions

## Quick Start Guide

### Step 1: Prerequisites
Ensure you have the following installed:
- Node.js (v16+): Download from https://nodejs.org/
- npm (comes with Node.js) or yarn
- Git (optional, for version control)

### Step 2: Installation
```bash
# Navigate to the project directory
cd cypress-login-tests

# Install all dependencies
npm install

# Verify Cypress installation
npx cypress verify
```

### Step 3: Running Tests

#### Option A: Interactive Mode (Recommended for development)
```bash
npm run cy:open
```
This opens the Cypress Test Runner where you can:
- See all test files
- Run tests individually
- Debug tests in real-time
- View test results visually

#### Option B: Headless Mode (For CI/CD)
```bash
# Run all tests
npm test

# Run with browser visible
npm run test:headed

# Run specific test file
npx cypress run --spec "cypress/e2e/login.cy.js"
```

### Step 4: View Results
- **Videos**: Check `cypress/videos/` folder
- **Screenshots**: Check `cypress/screenshots/` folder (on failures)
- **Console output**: View detailed logs in terminal

## Troubleshooting

### Common Setup Issues

1. **Node.js Version Error**
   ```bash
   # Check Node version
   node --version
   
   # Should be v16 or higher
   # If not, download latest from nodejs.org
   ```

2. **Cypress Installation Issues**
   ```bash
   # Clear npm cache
   npm cache clean --force
   
   # Reinstall Cypress
   npm uninstall cypress
   npm install cypress --save-dev
   ```

3. **Permission Issues (Windows)**
   - Run command prompt as Administrator
   - Or use PowerShell with elevated privileges

4. **Network/Firewall Issues**
   - Ensure https://the-internet.herokuapp.com is accessible
   - Check corporate firewall settings
   - Try running tests with different network connection

### Verification Commands
```bash
# Verify Cypress installation
npx cypress verify

# Check Cypress version
npx cypress version

# Test basic functionality
npx cypress run --spec "cypress/e2e/login.cy.js" --headed
```

## Configuration Options

### Environment Variables
Create a `.env` file in the project root for custom settings:
```env
CYPRESS_baseUrl=https://the-internet.herokuapp.com
CYPRESS_defaultCommandTimeout=10000
CYPRESS_viewportWidth=1280
CYPRESS_viewportHeight=720
```

### Custom Configuration
Modify `cypress.config.js` for:
- Different base URL
- Timeout values
- Browser settings
- Video/screenshot options

## Next Steps

1. **Run the tests** using one of the methods above
2. **Explore the test files** in `cypress/e2e/`
3. **Check the Page Objects** in `cypress/support/pages/`
4. **Review test data** in `cypress/fixtures/`
5. **Customize** the tests for your needs

## Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Review the full README.md for detailed information
3. Check Cypress documentation: https://docs.cypress.io/
4. Verify the test site is accessible: https://the-internet.herokuapp.com/login

---

**Ready to test! 🚀**
