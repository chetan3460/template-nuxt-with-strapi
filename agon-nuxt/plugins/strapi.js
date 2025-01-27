

// Local Working URL: http://localhost:1337
// export default defineNuxtPlugin(nuxtApp => {
//     // Accessing the runtime config to get the STRAPI_BASE_URL
//     const strapiBaseUrl = useRuntimeConfig().STRAPI_BASE_URL || 'http://localhost:1337';

//     // Provide globally so it can be accessed in components
//     nuxtApp.provide('strapiBaseUrl', strapiBaseUrl);

// });





// Test code
// export default defineNuxtPlugin(nuxtApp => {
//     // Accessing the runtime config to get the strapiBaseUrl from public configuration
//     const strapiBaseUrl = useRuntimeConfig().public.strapiBaseUrl || 'https://agon-cms-strapi.onrender.com';

//     // Provide globally so it can be accessed in components
//     nuxtApp.provide('strapiBaseUrl', strapiBaseUrl);
// });
// export default defineNuxtPlugin(nuxtApp => {
//     // Accessing the runtime config to get the STRAPI_BASE_URL
//     const strapiBaseUrl = useRuntimeConfig().STRAPI_BASE_URL || 'https://agon-cms-strapi.onrender.com';

//     // Provide globally so it can be accessed in components
//     nuxtApp.provide('strapiBaseUrl', strapiBaseUrl);

// });

// export default defineNuxtPlugin((nuxtApp) => {
//     const strapiBaseUrl =
//         useRuntimeConfig().STRAPI_BASE_URL || 'http://localhost:1337';

//     // Provide it globally
//     nuxtApp.provide('strapiBaseUrl', strapiBaseUrl);
// });

export default defineNuxtPlugin(nuxtApp => {
    // Accessing the runtime config to get the STRAPI_BASE_URL
    const strapiBaseUrl = useRuntimeConfig().STRAPI_BASE_URL || 'https://agon-cms-strapi.onrender.com';

    // Provide globally so it can be accessed in components
    nuxtApp.provide('strapiBaseUrl', strapiBaseUrl);

});