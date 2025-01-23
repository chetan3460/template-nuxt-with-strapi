<template>
    <div>
        <!-- Static Sections -->
        <SectionsHome1Section1 />
        <SectionsHome1Section2 />
        <SectionsHome1Section3 />
        <SectionsHome1Section4 />
        <SectionsHome1Section5 />
        <SectionsHome1Section6 />
        <SectionsHome1Section7 />
        <SectionsHome1Section8 />

        <!-- Dynamic Blocks -->
        <div v-if="sitemap">
            <div v-for="block in filteredBlocks" :key="block.id">
                <component :is="resolveComponent(block.__component)" :data="block" />
            </div>
        </div>

        <!-- Fallback message if no blocks are available -->
        <div v-else>
            <p>No dynamic blocks available for the homepage.</p>
        </div>
    </div>

</template>

<script setup>
import { useDynamicComponents } from '~/composables/useDynamicComponents';

const { sitemap, filteredBlocks, resolveComponent, fetchData } = useDynamicComponents('/api/sitemaps');


</script>