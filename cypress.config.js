const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      healthCare: "https://katalon-demo-cura.herokuapp.com/",

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
