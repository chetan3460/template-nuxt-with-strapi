import { resolve } from "path"

export default defineNuxtConfig({


  devtools: { enabled: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    strapi: {
      baseURL: 'http://localhost:1337/uploads/'
    },
    formats: ['webp', 'avif'],
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },

  app: {
    head: {
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
      title: "Agon - Multipurpose Agency TailwindCSS NuxtJS Template",
      script: [],
    },
  },

  css: [
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
    'swiper/css/free-mode',
    'swiper/css/thumbs',
    "~/public/assets/styles/app.min.css",
    "~/public/css/main.css",
    "~/public/assets/styles/tailwind.min.css",
    // "~/assets/css/tailwind.css",
  ],
  buildModules: ['@nuxtjs/tailwindcss'],

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Chivo: {
            wght: [400, 700, 900], // Font weights
          },
          "Noto Sans": {
            wght: [400, 500, 600, 700, 800], // Font weights for Noto Sans
          },
        },
        download: true, // Allows font download for better performance
        inject: true,   // Injects the fonts into the page
      }
    ],
    "@nuxt/image", // Image optimization
    // "@nuxtjs/tailwindcss"
  ],

  compatibilityDate: "2024-12-12",
})