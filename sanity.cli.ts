import { defineCliConfig } from 'sanity/cli'
// https://s4jezqfv.api.sanity.io/v1/graphql/production/default
export default defineCliConfig({
  api: {
    projectId: 's4jezqfv',
    dataset: 'production'
  }
})
