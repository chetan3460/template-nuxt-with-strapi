<template>
    <div v-if="sitemap">
        <!-- Render valid blocks -->
        <div v-for="block in filteredBlocks" :key="block.id">
            <component :is="resolveComponent(block.__component)" :data="block" />
        </div>
    </div>

    <!-- <div v-else>
        <div class="flex items-center justify-center space-x-2">
            <div class="w-8 h-8 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
            <p class="text-gray-500">{{ loadingMessage }}</p>
        </div>
    </div> -->
</template>


<script setup>
import { ref, computed, watchEffect, defineAsyncComponent } from 'vue';
// import { useHead } from '#imports'; // Import useHead
import { useRoute } from 'vue-router';
import { useSeoMeta } from '#app';
import { useNuxtApp } from '#app';

// Dynamically resolve components from Strapi block components
const resolveComponent = (componentName) => {
    if (!componentName) return null;

    // Dynamically import all Vue files from the folder
    const components = import.meta.glob('~/components/sections/About/**/*.vue');

    // Convert Strapi component name to file path
    const formattedName = componentName
        .replace('page-blocks.', '') // Remove prefix
        .split('-') // Split by hyphen
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1)) // Convert to PascalCase
        .join(''); // Join back to form file name
    const path = `/components/sections/About/${formattedName}.vue`;

    // Find and return the matching component
    const matchedComponent = components[path];

    if (matchedComponent) {
        return defineAsyncComponent(matchedComponent);
    } else {
        console.error(`Component not found for: ${componentName}. Expected path: ${path}`);
        return null;
    }
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

// Fetch data from the API
const fetchData = async (slug) => {
    try {
        const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
        const response = await fetch(
            `${strapiBaseUrl}/api/sitemaps?filters[PageURL][$eq]=${slug}&populate[seo][populate][ogImage]=true&populate[Blocks]=true`
        );
        const data = await response.json();

        // Check if response is valid
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

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

            sitemap.value = pageData;
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
    console.log("Current Route Slug:", slug); // Debugging

    if (slug) {
        sitemap.value = null; // Reset sitemap
        fetchData(slug); // Fetch new data
    }
});

// Computed SEO metadata
const seoMetadata = computed(() => {
    const metadata = sitemap.value?.seo || {};
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

    return {
        title: metadata.metaTitle || 'Default Title',
        description: metadata.metaDescription || 'Default Description',
        keywords: metadata.keywords || 'default, keywords',
        ogTitle: metadata.metaTitle || 'Default Title',
        ogDescription: metadata.metaDescription || 'Default Description',
        ogImage: metadata.ogImage?.url ? `${strapiBaseUrl}${metadata.ogImage.url}` : '/default-og-image.jpg',
        ogSiteName: 'Agon',
        twitterCard: 'summary_large_image',
        twitterTitle: metadata.metaTitle || 'Default Title',
        twitterDescription: metadata.metaDescription || 'Default Description',
        twitterImage: metadata.ogImage?.url ? `${strapiBaseUrl}${metadata.ogImage.url}` : '/default-og-image.jpg',
    };
});

// Update SEO metadata dynamically
watchEffect(() => {
    if (sitemap.value) {
        useSeoMeta(seoMetadata.value);
    }
});

useHead({
    bodyAttrs: {
        class: "overflow-x-hidden w-screen relative"

    },
})
// Dynamically generate the page class based on the URL or title
// const dynamicClass = computed(() => {
//     if (!sitemap.value || !sitemap.value?.seo?.metaTitle) return '';
//     const pageTitle = sitemap.value?.seo?.metaTitle || '';
//     return `page-${pageTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}-template`;
// });

// // Watch for changes in the route and update the body class
// watchEffect(() => {
//     const pageClass = dynamicClass.value;

//     // Only update the body class if there is a valid class
//     if (pageClass) {
//         useHead({
//             bodyAttrs: {
//                 class: `overflow-x-hidden w-screen relative ${pageClass}`,
//             },
//         });
//     }
// });

</script>
