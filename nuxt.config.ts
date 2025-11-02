import tailwindcss from "@tailwindcss/vite"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: false,
  vite: {
    build: {
      assetsInlineLimit: 8192,
    },
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    baseURL: '/AboutMalloy/',
    head: {
      title: 'AboutMalloy - A Front-end Developer Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal portfolio of Malloy - A front-end developer who loves Web, Minecraft & manga' },
        { name: 'author', content: 'Malloy' },
      ],
      link: [
        { rel: 'icon', href: '/AboutMalloy/Malloy.ico' }
      ],
    }
  }
})
