import { resolve } from "path";
const fs = require('fs');
const path = require('path');

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      strapiBaseUrl: process.env.STRAPI_BASE_URL || 'http://localhost:1337',
    },
  },
  image: {
    strapi: {
      baseURL: process.env.STRAPI_BASE_URL + '/uploads/',
    },
    formats: ['webp', 'avif'],
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  alias: {
    "@": resolve(__dirname, "./"),
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
  ],
  buildModules: ['@nuxtjs/tailwindcss'],

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Chivo: { wght: [400, 700, 900] },
          "Noto Sans": { wght: [400, 500, 600, 700, 800] },
        },
        download: true,
        inject: true,
      }
    ],
    "@nuxt/image", 
    "@nuxtjs/seo", 
    '@nuxtjs/sitemap'
  ],

  app: {
    head: {
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
      title: "Agon - Multipurpose Agency TailwindCSS NuxtJS Template",
      titleTemplate: '%s %seperator %siteName',
      templateParams: {
        seperator: '—',
        siteName: 'MySite'
      },
    },
  },

  seo: {
    robots: {
      rules: [
        {
          UserAgent: '*',
          Disallow: process.env.NODE_ENV === 'production' ? '' : '/', // Allow indexing in production
        },
      ],
      Sitemap: process.env.BASE_URL + '/sitemap.xml',
    },
  },

  site: { 
    url: 'http://localhost:3000/', 
    name: 'My Awesome Website' 
  },
  // sitemap: {
  //   sources: [
  //     '/api/sitemaps',
  //     '/api/blogs', // This should match the path where your sitemap handler is located
  //   ],
  // },
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
  compatibilityDate: "2024-12-12",
});