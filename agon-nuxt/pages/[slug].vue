<template>
    <div v-if="sitemap">
        <!-- <img :src="`/assets/images/about-1-bg.png`" alt=""
            class="w-full absolute left-0 z-0 object-fill top-[112px] h-[750px]"> -->
        <!-- <h1>{{ sitemap.PageTitle }}</h1> -->

        <!-- Debugging: Display raw block data for verification -->
        <!-- <div v-for="(block, index) in sitemap.Blocks" :key="index" class="mb-4">
            <pre>{{ block }}</pre>
        </div> -->
        <!-- Debugging: Log raw block data -->

        <!-- Render valid blocks -->
        <div v-for="block in filteredBlocks" :key="block.id">
            <component :is="resolveComponent(block.__component)" :data="block" />
        </div>
    </div>

</template>

<script setup>
import { useNuxtApp } from '#app';
import { ref, watchEffect, computed, defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { useSeoMeta } from '#app';


// Dynamic component resolver for Strapi block components
const resolveComponent = (componentName) => {
    const componentMap = {
        'page-blocks.hero-about-block': defineAsyncComponent(() => import('~/components/sections/About/Hero.vue')),
        'page-blocks.content-image-block': defineAsyncComponent(() => import('~/components/sections/About/Section3.vue')),
        'page-blocks.cards-block': defineAsyncComponent(() => import('~/components/sections/About/Section4.vue')),
        'page-blocks.process-block': defineAsyncComponent(() => import('~/components/sections/About/Section5.vue')),
        'page-blocks.faq-block': defineAsyncComponent(() => import('~/components/sections/About/Section6.vue')),
        'page-blocks.service-page-banner-block': defineAsyncComponent(() => import('~/components/sections/About/Section7.vue')),
        'page-blocks.partner-block': defineAsyncComponent(() => import('~/components/sections/About/Section8.vue')),
        'page-blocks.card-block-layout-two': defineAsyncComponent(() => import('~/components/sections/About/Section9.vue')),
        'page-blocks.two-col-image-content-block': defineAsyncComponent(() => import('~/components/sections/About/Section10.vue')),
        'page-blocks.contact-us': defineAsyncComponent(() => import('~/components/sections/About/ContactForm.vue')),
        // Add more block mappings here as needed
    };

    return componentMap[componentName] || null; // Return null for unmapped components
};
// Dynamic component resolver for Strapi block components






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



const fetchData = async (slug) => {
    try {
        const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
        const response = await fetch(
            `${strapiBaseUrl}/api/sitemaps?filters[PageURL][$eq]=${slug}&populate[seo][populate][ogImage]=true&populate[Blocks]=true`
        );
        // const response = await fetch(`${strapiBaseUrl}/api/sitemaps?populate=Blocks`);
        const data = await response.json();

        // Check if response is valid
        if (!response.ok) {
            throw new Error(`Failed to fetch data: ${response.statusText}`);
        }


        // Debugging fetched data
        // console.log('Fetched data from Strapi:', data);

        if (data?.data) {

            // Find page by slug
            const pageData = data.data.find(
                (item) => item.PageURL?.trim().toLowerCase() === slug.trim().toLowerCase()
            );


            // const pageData = data.data[0];

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
    // console.log('Slug.vue Current route slug:', slug); // Debug route slug

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
</script>