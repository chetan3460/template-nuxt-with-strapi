<template>
    <div v-if="sitemap">
        <h1>{{ sitemap.title }}</h1>

        <!-- Render each block dynamically -->
        <div v-for="block in sitemap.blocks" :key="block.id">
            <component :is="resolveComponent(block.__component)" :data="block" v-if="block.title && block.content" />
        </div>
    </div>
    <div v-else>
        <p>Loading sitemap...</p> <!-- Loading message while fetching data -->
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchSitemap } from '~/utils/fetchSitemap'; // Adjust the path if necessary

// State for the sitemap data
const sitemap = ref(null);

// Dynamic import resolver for components
const resolveComponent = (componentName) => {
    const componentMap = {
        'page-blocks.hero-about-block': () => import('~/components/sections/About/Hero.vue'),
        // 'page-blocks.content-about-block': () => import('~/components/sections/About/Content.vue'),
        // Add other components here as needed
    };

    // Return the component if it exists, or a fallback component
    // return componentMap[componentName]?.() || import('~/components/EmptyBlock.vue');
};

// Fetch the sitemap data when the component is mounted
const fetchData = async () => {
    sitemap.value = await fetchSitemap('about-us'); // Pass the slug you want to fetch
};

onMounted(() => {
    fetchData();
});
</script>
