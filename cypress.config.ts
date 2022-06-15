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
    viewportWidth: 1280,
    viewportHeight: 720
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    screenshotOnRunFailure: false,
    video: false,
  },
});
