// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
    'nuxt-primevue',
    'nuxt-swiper'
  ],

  googleFonts: {
    families: {
      Montserrat: true,
      'Open Sans': true
    }
  }
})

