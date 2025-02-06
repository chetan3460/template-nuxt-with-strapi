// stores/sitemapStore.js
import { defineStore } from 'pinia';

export const useSitemapStore = defineStore('sitemap', {
    state: () => ({
        sitemap: null,  // Store fetched sitemap data
        loading: false,  // Loading state for data fetching
        error: null,  // To store error messages
    }),
    actions: {
        // Fetch sitemap data based on the slug
        async fetchData(slug) {
            this.loading = true;
            try {
                const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;                // Use config for the API URL
                const response = await fetch(`${strapiBaseUrl}/api/sitemaps?populate=Blocks`);
                const data = await response.json();

                if (data?.data) {
                    this.sitemap = data.data;  // Store fetched data
                    this.error = null;
                } else {
                    this.error = 'No data found';
                }
            } catch (err) {
                this.error = 'Failed to fetch data';
            } finally {
                this.loading = false;
            }
        },
    },
});
