/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import { createVuetify } from 'vuetify'
import { mdi, aliases } from 'vuetify/iconsets/mdi-svg'
import { fa } from 'vuetify/iconsets/fa-svg'
import { config, library } from '@fortawesome/fontawesome-svg-core'
// eslint-disable-next-line
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { DEFAULT_THEME, lightTheme, darkTheme } from '@/utils/themes'

// FontAwesome Setup:
// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false
// You can add your icons directly in this plugin.
// See other examples for how you can add other styles or just individual icons.
library.add(fas)
library.add(far)
library.add(fab)

export default defineNuxtPlugin((nuxtApp) => {
  // Register font-awesome-icon component globally
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
  nuxtApp.vueApp.component('font-awesome-layers', FontAwesomeLayers)
  nuxtApp.vueApp.component('font-awesome-layers-text', FontAwesomeLayersText)

  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
        fa,
      },
    },
    theme: {
      defaultTheme: DEFAULT_THEME,
      themes: {
        lightTheme,
        darkTheme,
      },
      variations: {
        colors: ['primary', 'secondary', 'accent'],
        lighten: 9,
        darken: 9,
      },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})
