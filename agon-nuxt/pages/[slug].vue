<template>
    <div v-if="sitemap">
        <!-- <h1>{{ sitemap.PageTitle }}</h1> -->
        <!-- Render each block dynamically -->
        <div v-for="block in sitemap.Blocks" :key="block.id">
            <component :is="resolveComponent(block.__component)" :data="block" />
        </div>
    </div>
    <!-- <div v-else>
        <p>{{ loadingMessage }}</p>
    </div> -->
</template>

<script setup>
import { ref, watchEffect, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useRuntimeConfig, useNuxtApp } from '#app';

// Reactive states
const sitemap = ref(null);
const loadingMessage = ref('Loading or no data available...');
const route = useRoute();
const slug = route.params.slug; // Get the slug from the route

// Dynamic component resolver with async loading
const resolveComponent = (componentName) => {
    const componentMap = {
        'page-blocks.hero-about-block': defineAsyncComponent(() => import('~/components/sections/About/Hero.vue')),
        // Add other components here as needed
    };

    // Return the appropriate component or fallback to a default component
    return componentMap[componentName] || defineAsyncComponent(() => import('~/components/DefaultComponent.vue'));
};

// Fetching the sitemap data from Strapi
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

watchEffect(async () => {
    try {
        const response = await fetch(`${strapiBaseUrl}/api/sitemaps?populate=Blocks`);
        const data = await response.json();

        // Log the API response to check its structure
        console.log("API Response:", data);

        if (data?.data) {
            // Find the page by slug
            sitemap.value = data.data.find(item => item.PageURL?.trim().toLowerCase() === slug.trim().toLowerCase());

            if (sitemap.value) {
                // Log the available blocks for the page
                console.log("Available blocks:", sitemap.value.Blocks);
            } else {
                console.error(`No page found for slug "${slug}"`);
                loadingMessage.value = `Error: Page with slug "${slug}" not found.`;
            }
        } else {
            loadingMessage.value = 'No data received from API.';
        }
    } catch (err) {
        // Catch and log any errors that occur during the fetch
        console.error('Error fetching sitemap data:', err);
        loadingMessage.value = 'Failed to fetch data from the API.';
    }
});
</script>