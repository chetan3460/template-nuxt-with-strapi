<template>
    <div v-if="sitemap">
        <h1>{{ sitemap.PageTitle }}</h1>

        <!-- Render each block dynamically -->
        <div v-for="block in sitemap.Blocks" :key="block.id">
            <component :is="resolveComponent(block.__component)" :data="block" v-if="block.title && block.content" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// State for the sitemap data
const sitemap = ref(null);

// Get the dynamic slug from the route
const route = useRoute();
const slug = route.params.slug;

// Dynamic import resolver for components based on the __component field
const resolveComponent = (componentName) => {
    const componentMap = {
        'page-blocks.hero-about-block': () => import('~/components/sections/About/Hero.vue'),
        // Add other components here as needed
    };
    return componentMap[componentName]?.() || null;
};

// Fetch the sitemap data using useFetch
const fetchData = async () => {
    if (slug) {
        const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
        const { data, error } = await useFetch(`${strapiBaseUrl}/api/sitemaps/${slug}?populate=Blocks`);

        if (error.value) {
            console.error("Error fetching sitemap data:", error.value);
        } else if (data.value) {
            sitemap.value = data.value.data; // Assign the data to the sitemap variable
        }
    } else {
        console.error('No slug found!');
    }
};

onMounted(() => {
    fetchData();
});
</script>
