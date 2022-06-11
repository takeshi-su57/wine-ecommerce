import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure: false,
    video: false,
    baseUrl: "http://localhost:3000",
    projectId: "41jjfa",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
