import { resolve } from "path"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
      "@": resolve(__dirname, "/"),
  },

  app: {
      head: {
          meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
          title: "Agon - Multipurpose Agency TailwindCSS NuxtJS Template",
          script: []
      }
  },

  css: [
      'swiper/css',
      'swiper/css/navigation',
      'swiper/css/pagination',
      'swiper/css/free-mode',
      'swiper/css/thumbs',
      "~/public/assets/styles/app.min.css",
      "~/public/assets/styles/tailwind.min.css",
  ],

  modules: [
      [
          "@nuxtjs/google-fonts",
          {
              families: {
                  Chivo: {
                      wght: [400, 700, 900]
                  },
                  "Noto+Sans": {
                      wght: [400, 500, 600, 700,800]
                  },
                  download: true,
                  inject: true
              }
          }
      ],
      // "swiper"
      // "vue-youtube-embed"
  ],

  compatibilityDate: "2024-12-12",
})