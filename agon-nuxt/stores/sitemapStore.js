import { defineStore } from 'pinia';

export const useSitemapStore = defineStore('sitemap', {
    state: () => ({
        cache: {}, // ✅ Store cached data to prevent re-fetching
    }),

    actions: {
        async fetchData(slug) {
            if (this.cache[slug]) return this.cache[slug]; // ✅ Return cached data if available

            try {
                const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

                const data = await $fetch(`${strapiBaseUrl}/api/sitemaps`, {
                    query: {
                        'filters[PageURL][$eq]': slug,
                        'populate': '*'
                    }
                });

                if (data?.data?.length > 0) {
                    this.cache[slug] = data.data[0]; // ✅ Store in Pinia cache
                    return data.data[0];
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
});
