const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 10000,
  loginUrl: "https://edu.ultima.school/lgn/",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
