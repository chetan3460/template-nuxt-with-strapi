import { resolve } from "path";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      strapiBaseUrl: process.env.STRAPI_BASE_URL || 'http://localhost:1337', // Ensure the Strapi URL is set correctly
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

  sitemap: {
    hostname: 'http://localhost:3000',
    async routes() {
      const strapiBaseUrl = process.env.STRAPI_BASE_URL || 'http://localhost:1337';
      const response = await fetch(`${strapiBaseUrl}/api/sitemaps?filters[PageURL][$ne]=null&populate=PageURL`);
      const data = await response.json();

      if (!data?.data) {
        console.error('Error: No data returned from Strapi API');
        return [];
      }

      // Log the raw data for debugging
      console.log('Raw Data from API:', data);

      // Extract slugs from the response
      const slugs = data.data.map(item => `/${item.PageURL}`);

      // Log the generated slugs for debugging
      console.log('Generated Slugs:', slugs);

      return slugs; // Return the array of slugs
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

  compatibilityDate: "2024-12-12",
})
