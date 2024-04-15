// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
    'nuxt-primevue',
    'nuxt-swiper'
  ],

  css: [
    'primevue/resources/themes/aura-light-green/theme.css',
    'primevue/resources/primevue.min.css',
  ],

  googleFonts: {
    families: {
      Montserrat: true,
      'Open Sans': true
    }
  }
})

