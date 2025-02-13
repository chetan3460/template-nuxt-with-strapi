<template>
    <div v-if="isReady && sitemap && filteredBlocks.length" :key="route.fullPath">
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
import { useSitemapStore } from '~/stores/sitemapStore';
import { useDynamicComponents } from '~/composables/useDynamicComponents';
import { useSeoConfig } from '~/composables/useSeoConfig';

const route = useRoute();
const sitemapStore = useSitemapStore();
const isReady = ref(false);

// ✅ Ensure fetchData() is awaited before hydration
await sitemapStore.fetchData(route.params.slug || 'homepage');
isReady.value = true;

const { sitemap, filteredBlocks, resolveComponent } = useDynamicComponents();
const { seoMetadata } = useSeoConfig(sitemap);

// ✅ Watch route changes and fetch new data
watchEffect(() => {
    if (route.params.slug && route.params.slug !== sitemap.value?.PageURL) {
        sitemapStore.fetchData(route.params.slug);
    }
});
</script>
