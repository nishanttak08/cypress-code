# Test Execution Commands

## Basic Commands

### Install Dependencies
```bash
npm install
```

### Run Tests - Interactive Mode
```bash
# Open Cypress Test Runner (recommended for development)
npm run cy:open

# Alternative command
npx cypress open
```

### Run Tests - Headless Mode
```bash
# Run all tests in headless mode
npm run cy:run
npm test

# Run tests with browser visible
npm run test:headed
npx cypress run --headed

# Run specific test file
npm run test:spec cypress/e2e/login.cy.js
npx cypress run --spec "cypress/e2e/login.cy.js"
```

### Browser-Specific Testing
```bash
# Run tests in Chrome
npm run cy:run:chrome
npx cypress run --browser chrome

# Run tests in Firefox
npm run cy:run:firefox
npx cypress run --browser firefox

# Run tests in Edge
npx cypress run --browser edge
```

## Advanced Commands

### Debugging
```bash
# Run with debugging enabled
npx cypress run --headed --no-exit

# Run with browser DevTools open
npx cypress open --browser chrome --dev-tools
```

### Reporting
```bash
# Generate reports (if configured)
npx cypress run --reporter json --reporter-options "outputDir=cypress/reports"

# Run with custom reporter
npx cypress run --reporter mochawesome
```

### Configuration Override
```bash
# Override base URL
npx cypress run --config baseUrl=https://staging.example.com

# Override viewport
npx cypress run --config viewportWidth=1920,viewportHeight=1080

# Set environment variables
npx cypress run --env username=testuser,password=testpass
```

### Parallel Execution
```bash
# Run tests in parallel (requires Cypress Dashboard)
npx cypress run --parallel --record --key <dashboard-key>
```

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm run cy:open` | Open Cypress Test Runner |
| `npm run cy:run` | Run all tests headlessly |
| `npm run test:headed` | Run tests with browser visible |
| `npm run cy:run:chrome` | Run tests in Chrome |
| `npm run cy:run:firefox` | Run tests in Firefox |

## Example Usage

```bash
# 1. Install dependencies
npm install

# 2. Run tests interactively (best for development)
npm run cy:open

# 3. Run tests in headless mode (best for CI/CD)
npm run cy:run

# 4. Run specific test with Chrome browser
npx cypress run --spec "cypress/e2e/login.cy.js" --browser chrome --headed
```
