export const fetchSitemap = async () => {
    const { $config } = useNuxtApp();
    const strapiBaseUrl = $config.public.strapiBaseUrl || 'https://agon-cms-strapi.onrender.com';

    try {
        const { data, error } = await useFetch(`${strapiBaseUrl}/api/sitemaps`, {
            query: {
                populate: '*', // Fetch all related data
            },
            key: 'all-sitemaps', // Cache key for all sitemaps
        });

        if (error.value) {
            console.error('Error fetching sitemap:', error.value);
            return [];
        }

        console.log('Sitemap data:', data.value); // Check the response here

        if (!data.value?.data?.length) {
            console.warn('No sitemaps found');
            return [];
        }

        return data.value.data; // Return all results
    } catch (err) {
        console.error('Error fetching sitemap:', err);
        return [];
    }
};
