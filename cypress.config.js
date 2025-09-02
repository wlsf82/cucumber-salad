import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    env: {
      grepFilterSpecs: true,
      grepOmitFiltered: true
    },
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config)
      return config
    },
  },
})
