<template>
    <div v-if="sitemap">
        <h1>{{ sitemap.PageTitle }}</h1>

        <!-- Debugging: Display raw block data for verification -->
        <div v-for="(block, index) in sitemap.Blocks" :key="index" class="mb-4">
            <pre>{{ block }}</pre> <!-- Debugging: Log raw block data -->
        </div>

        <!-- Render valid blocks -->
        <div v-for="block in filteredBlocks" :key="block.id">
            <component :is="resolveComponent(block.__component)" :data="block" />
        </div>
    </div>
    <div v-else>
        <p>{{ loadingMessage }}</p>
    </div>
</template>

<script setup>
import { ref, watchEffect, computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useNuxtApp } from '#app';

// Dynamic component resolver for Strapi block components
const resolveComponent = (componentName) => {
    const componentMap = {
        'page-blocks.hero-about-block': defineAsyncComponent(() => import('~/components/sections/About/Hero.vue')),
        'page-blocks.content-image-block': defineAsyncComponent(() => import('~/components/sections/About/Section3.vue')),
        // Add more block mappings here as needed
    };

    return componentMap[componentName] || null; // Return null for unmapped components
};

// Reactive states
const sitemap = ref(null);
const loadingMessage = ref('Loading or no data available...');
const route = useRoute();

// Filtered blocks for rendering
const filteredBlocks = computed(() => {
    if (!sitemap.value || !Array.isArray(sitemap.value.Blocks)) return [];
    return sitemap.value.Blocks.filter(
        (block) => block && block.__component && resolveComponent(block.__component)
    );
});

// Fetch data for the page based on the route's slug
const fetchData = async (slug) => {
    try {
        const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
        const response = await fetch(`${strapiBaseUrl}/api/sitemaps?populate=Blocks`);
        const data = await response.json();

        // console.log('Fetched data from Strapi:', data); // Debug fetched data

        if (data?.data) {
            // Find page by slug
            const pageData = data.data.find(
                (item) => item.PageURL?.trim().toLowerCase() === slug.trim().toLowerCase()
            );

            if (!pageData) {
                console.error(`Page with slug "${slug}" not found.`);
                loadingMessage.value = `Error: Page with slug "${slug}" not found.`;
                return;
            }

            sitemap.value = pageData; // Set the sitemap data
        } else {
            loadingMessage.value = 'No data received from API.';
        }
    } catch (err) {
        console.error('Error fetching data:', err);
        loadingMessage.value = 'Failed to fetch data from the API.';
    }
};

// Watch for changes in the route and re-fetch data
watchEffect(() => {
    const slug = route.params.slug;
    console.log('Slug.vue Current route slug:', slug); // Debug route slug

    if (slug) {
        sitemap.value = null; // Reset sitemap
        fetchData(slug); // Fetch new data
    }
});
</script>