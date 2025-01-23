<template>
    <div v-if="sitemap">
        <div class="full-width bg-gray-100">
            <div class="text-center px-5 pt-[74px] pb-[90px]">
                <Breadcrumbs />
                <h1
                    class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] m-0">
                    {{ sitemap.PageTitle }}
                </h1>
            </div>
        </div>
        <div v-for="block in filteredBlocks" :key="block.id">
            <component :is="resolveComponent(block.__component)" :data="block" />
        </div>
    </div>
</template>

<script setup>
import Breadcrumbs from '~/components/elements/Breadcrumbs.vue';
import { useDynamicComponents } from '~/composables/useDynamicComponents';

const { sitemap, filteredBlocks, resolveComponent, fetchData, route } = useDynamicComponents('/api/sitemaps');

// Watch for route changes to fetch data dynamically
watchEffect(() => {
    const slug = route.params.slug;
    if (slug) {
        sitemap.value = null; // Reset sitemap
        fetchData(slug);
    }
});

</script>
