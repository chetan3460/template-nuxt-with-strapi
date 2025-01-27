<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">

        <div v-if="partnerItems !== null" class="grid grid-cols-2 md:grid-cols-4 gap-x-[24px] lg:grid-cols-6">
            <NuxtImg v-for="(item, index) in partnerItems" :key="item.id" :src="`${strapiBaseUrl}${item.Image.url}`"
                :alt="item.Image.alternativeText || `Partner logo ${index + 1}`" :width="item.Image.width || 150"
                :height="item.Image.height || 75" format="webp"
                class="transition-all duration-300 partner-item p-[15px] hover:translate-y-[-3px]" />
        </div>

        <!-- Fallback message -->
        <div v-else class="text-center py-4">
            <p>No partner logos available at the moment.</p>
        </div>
    </div>

</template>


<!-- <script setup>
import { ref } from "vue";

// Base URL for Strapi images
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// State to hold partnerItems data
const partnerItems = ref([]);

// Fetch partner items
const { data, error } = await useFetch(`${strapiBaseUrl}/api/partner-logo?populate=partnerItems.Image`);

// Log the data to verify the structure
// console.log(data.value);

// Handle data and errors
if (data.value) {
    partnerItems.value = data.value?.data?.partnerItems || []; // Safely access the partnerItems array
} else if (error.value) {
    console.error("Error fetching data:", error.value);
}
</script> -->

<script setup>
import { ref } from "vue";
import qs from "qs"; // Import qs for query string handling

// Base URL for Strapi images
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// State to hold partnerItems data
const partnerItems = ref([]);

// Define the query string to populate the partnerItems.Image field
const query = qs.stringify(
    {
        populate: {
            partnerItems: {
                populate: "Image", // Populate the Image field within partnerItems
            },
        },
    },
    { encode: false } // Prevent encoding for better readability
);

// Fetch partner items
const { data, error } = await useFetch(`${strapiBaseUrl}/api/partner-logo?${query}`);

// Log the data to verify the structure
// console.log(data.value);

// Handle data and errors
if (data.value) {
    partnerItems.value = data.value?.data?.partnerItems || []; // Safely access the partnerItems array
} else if (error.value) {
    console.error("Error fetching data:", error.value);
}
</script>
