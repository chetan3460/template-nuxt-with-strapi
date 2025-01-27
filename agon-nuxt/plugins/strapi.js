

export default defineNuxtPlugin(nuxtApp => {
    // Accessing the runtime config to get the STRAPI_BASE_URL
    const strapiBaseUrl = useRuntimeConfig().STRAPI_BASE_URL || 'http://localhost:1337' || 'https://agon-cms-strapi.onrender.com';

    // Provide globally so it can be accessed in components
    nuxtApp.provide('strapiBaseUrl', strapiBaseUrl);

});
