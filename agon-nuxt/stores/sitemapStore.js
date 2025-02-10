import { defineStore } from 'pinia';

export const useSitemapStore = defineStore('sitemap', {
    state: () => ({
        cache: {}, // ✅ Store cached data to prevent re-fetching
    }),

    actions: {
        async fetchData(slug) {
            if (this.cache[slug]) {
                console.log('✅ Returning cached data:', this.cache[slug]);
                return this.cache[slug];
            }

            try {
                const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

                console.log(`🟡 Fetching data for slug: ${slug}`);

                // ✅ Using `useFetch`
                const { data, error } = await useFetch(`${strapiBaseUrl}/api/sitemaps`, {
                    query: {
                        'filters[PageURL][$eq]': slug,
                        'populate': '*'
                    }
                });

                if (error.value) {
                    console.error('❌ Error fetching data:', error.value);
                    return null;
                }

                console.log('🔹 Fetched data:', data.value);

                if (data.value?.data?.length > 0) {
                    this.cache[slug] = data.value.data[0];
                    console.log('✅ Storing in cache:', this.cache);
                    return this.cache[slug];
                } else {
                    console.warn('⚠️ No data found for this slug:', slug);
                }
            } catch (error) {
                console.error('❌ Unexpected error fetching data:', error);
            }

            return null; // Prevents undefined state
        }
    }
});
