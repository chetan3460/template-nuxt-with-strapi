export const getImageUrl = (url) => {
    if (!url) return ''; // Prevent errors if the image URL is missing

    const strapiBaseUrl = process.env.NODE_ENV === 'development'
        ? 'http://localhost:1337' // Localhost Strapi URL
        : useRuntimeConfig().public.strapiBaseUrl; // Production URL from Nuxt config

    return url.startsWith('http') ? url : `${strapiBaseUrl}${url}`;
};
