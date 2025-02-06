<template>
    <transition name="fade" mode="out-in">
        <!-- Only render once data is available -->
        <div v-if="sitemap && filteredBlocks.length" :key="route.fullPath">
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
                <keep-alive>
                    <component :is="resolveComponent(block.__component)" :data="block" />
                </keep-alive>
            </div>
        </div>
    </transition>
</template>

<script setup>
import Breadcrumbs from '~/components/elements/Breadcrumbs.vue';
import { useDynamicComponents } from '~/composables/useDynamicComponents';
import { useSeoConfig } from '~/composables/useSeoConfig';

const { sitemap, filteredBlocks, resolveComponent, fetchData, route } = useDynamicComponents('/api/sitemaps');

// Watch for route changes to fetch data dynamically
watchEffect(() => {
    const slug = route.params.slug;
    if (slug && (!sitemap.value || sitemap.value.PageURL !== slug)) {
        sitemap.value = null; // Reset sitemap only if slug changes
        fetchData(slug);
    }
});

const { seoMetadata } = useSeoConfig(sitemap);

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>