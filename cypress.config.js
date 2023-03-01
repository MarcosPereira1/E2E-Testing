const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "x35f2v",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://notes-serverless-app.com",
    defaultCommandTimeout: 15000,
    chromeWebSecurity: false,
    experimentalStudio: true
  },
  "env": {
    "viewportWidthBreakpoint": 768
  },
});
