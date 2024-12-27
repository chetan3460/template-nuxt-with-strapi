<template>
    <ul class="navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row">

        <li v-for="(item, index) in sitemapItems" :key="index" class="flex items-center group">
            <NuxtLink :to="`/${item.PageURL}`"
                class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]">
                {{ item.PageTitle }}
            </NuxtLink>
        </li>

        <li v-if="!sitemapItems.length && !loading" class="text-gray-500">No menu items available</li>
    </ul>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const sitemapItems = ref([]);
const loading = ref(true);
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const { data, error } = await useFetch(`${strapiBaseUrl}/api/sitemaps?populate=*`);

if (data.value) {
    sitemapItems.value = data.value.data

} else if (error.value) {
    // Log the error details for debugging
    console.error("Error fetching data:", error.value);
} else {
    // Optional: Handle cases where both data and error are undefined
    console.warn("No data or error received.");
}

</script>
