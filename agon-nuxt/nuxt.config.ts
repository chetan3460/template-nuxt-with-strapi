import { resolve } from "path";
const fs = require('fs');
const path = require('path');

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      strapiBaseUrl: process.env.STRAPI_BASE_URL || 'https://agon-cms-strapi.onrender.com',
    }
  },

  ssr: true, 
  // target: 'server',
  image: {
    strapi: {
      strapiBaseUrl: process.env.STRAPI_BASE_URL + '/uploads/',
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

  modules: [[
    "@nuxtjs/google-fonts",
    {
      families: {
        Chivo: { wght: [400, 700, 900] },
        "Noto Sans": { wght: [400, 500, 600, 700, 800] },
      },
      download: true,
      inject: true,
    }
  ], "@nuxt/image", "@nuxtjs/seo", "nuxt-seo-utils", '@pinia/nuxt'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
      title: "Agon - Multipurpose Agency TailwindCSS NuxtJS Template",
      titleTemplate: '%s %seperator %siteName',
      templateParams: {
        seperator: '—',
        siteName: 'MySite'
      },
    },
    baseURL: '/',
    fetch: true,

  },

  seo: {
    robots: {
      blockNonSeoBots: true,
      rules: [
        {
          UserAgent: '*',
          Disallow: process.env.NODE_ENV === 'production' ? '' : '/', // Allow indexing in production
        },
      ],
      Sitemap: process.env.BASE_URL + '/sitemap.xml',
    },
    // schema: {
    //   "@context": "https://schema.org",
    //   "@type": "WebSite",  // The type of the website (can be changed based on your content)
    //   "name": "Agon",
    //   "url": "https://yourwebsite.com",
    //   "sameAs": [
    //     "https://facebook.com/yourprofile",
    //     "https://twitter.com/yourprofile"
    //   ]
    // },
  },

  site: { 
    url: 'http://localhost:3000/', 
    name: 'My Awesome Website' 
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  },
  build: {
    transpile: ['pinia'],
  },
nitro: {
  preset: 'vercel'
},
publicRuntimeConfig: {
  fetchWithSSR: true,
},
pinia: {
  autoImports: ['defineStore'],
  persist: true, // Auto-import `defineStore`
},
vue: {
  config: {
    productionTip: false,
    devtools: true,
    performance: true
  }
},
// plugins: ['~/plugins/components.js'],
  compatibilityDate: "2024-12-12",
});