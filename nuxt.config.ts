// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  colorMode: {
    preference: 'light',
  },
  css: ['@/assets/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  ssr: false
})
