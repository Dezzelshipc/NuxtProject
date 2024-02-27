// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    payloadExtraction: true
  },

  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      Anta: true,
      Montserrat: true,
      'Open Sans': true
    }
  }
})

