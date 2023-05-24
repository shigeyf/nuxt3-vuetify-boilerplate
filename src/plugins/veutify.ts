/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

import { createVuetify } from 'vuetify'
import { mdi, aliases } from 'vuetify/iconsets/mdi-svg'
import { DEFAULT_THEME, lightTheme, darkTheme } from '@/utils/themes'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
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
