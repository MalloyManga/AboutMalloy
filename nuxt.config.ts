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
      title: 'AboutMalloy',
      link: [
        { rel: 'icon', href: '/AboutMalloy/Malloy.ico' }
      ],
    }
  }
})
