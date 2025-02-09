const { defineConfig } = require("cypress"); // ✅ Correct in .cjs

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Add Cypress plugins here
    },
  },
});
