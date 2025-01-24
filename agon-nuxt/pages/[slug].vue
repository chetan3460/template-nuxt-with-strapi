<template>
    <transition name="fade" mode="out-in">
        <!-- Render content only if sitemap exists and filtered blocks are present -->
        <div v-if="sitemap && filteredBlocks.length">
            <div class="full-width bg-gray-100">
                <div class="text-center px-5 pt-[74px] pb-[90px]">
                    <Breadcrumbs />
                    <h1
                        class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] m-0">
                        {{ sitemap.PageTitle }}
                    </h1>
                </div>
            </div>

            <!-- Render dynamic blocks with keep-alive to improve performance -->
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

const { sitemap, filteredBlocks, resolveComponent } = useDynamicComponents('/api/sitemaps');
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