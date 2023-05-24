//
// nuxt.config.ts
//

import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  rootDir: 'src',
  build: {
    transpile: ['vuetify'],
  },
  css: ['@/assets/scss/main.scss', '@fortawesome/vue-fontawesome'],
  hooks: {
    'vite:extendConfig': (config) => {
      config.plugins!.push(vuetify())
    },
  },
  vite: {
    ssr: {
      noExternal: ['vuetify'], // add the vuetify vite plugin
    },
    define: {
      'process.env.DEBUG': false,
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
})
