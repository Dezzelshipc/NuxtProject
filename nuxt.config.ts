// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-svgo'
  ],

  googleFonts: {
    families: {
      Montserrat: true,
      'Open Sans': true
    }
  }
})

