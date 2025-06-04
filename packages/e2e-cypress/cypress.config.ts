import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.baseUrl = config.env.baseUrl as string;
      //config.waitAfterEachCommand = 200;
    },
    video: true,
    experimentalRunAllSpecs: true,
    specPattern: ["cypress/e2e/*.cy.ts"],
    //testIsolation: false,
  },
});
