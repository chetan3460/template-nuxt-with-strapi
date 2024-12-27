<!-- <template>
    <div>
        <SectionsAboutSection1 />
        <SectionsAboutSection2 />
        <SectionsAboutSection3 />
        <SectionsAboutSection4 />
        <SectionsAboutSection5 />
        <SectionsAboutSection6 />
        <SectionsAboutSection7 />
        <SectionsAboutSection8 />
    </div>
</template>
<script setup>
useHead({
    bodyAttrs: {
        class: "overflow-x-hidden w-screen relative about-page-1"
    }
});
</script> -->
<template>
    <!-- Render only if data exists -->
    <div v-if="aboutPage">
        <div v-for="section in aboutPage[0].AboutPageDynamicZone" :key="section.id">
            <!-- Check if section has a valid title or content before rendering -->
            <component :is="resolveComponent(section.__component)" :data="section"
                v-if="section.title && section.content" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// State for the About Page data
const aboutPage = ref(null);

// Dynamic import resolver for components
const resolveComponent = (componentName) => {
    const componentMap = {
        'hero-section': () => import('~/components/sections/About/Hero.vue'),
        // 'content-section': () => import('~/components/sections/About/Content.vue'),
        // Add other components here as needed
    };
    return componentMap[componentName]?.() || null;
};

// Fetch data from Strapi
const fetchAboutPageData = async () => {
    const response = await fetch('http://localhost:1337/api/about-pages?populate=AboutPageDynamicZone'); // Adjust Strapi API endpoint
    const data = await response.json();
    aboutPage.value = data.data.aboutPages; // Assuming the response follows the structure
};

onMounted(() => {
    fetchAboutPageData();
});
</script>
