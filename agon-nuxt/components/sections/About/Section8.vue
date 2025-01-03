<template>
    <div v-if="partnerData?.length">
        <div v-for="(item, index) in partnerData" :key="item.id"
            class="px-[12px] md:px-[36px] xl:px-0 mt-[30px] md:mt-[80px] lg:mt-[143px]">
            <!-- Heading Block -->
            <h2 v-if="item.HeadingBlock?.title"
                class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-center mb-[40px] md:mb-[60px] lg:mb-[84px]">
                {{ item.HeadingBlock?.title }}
            </h2>


            <!-- Image Block -->

            <!-- Check if the ImageRepeater array exists and has content -->
            <div v-if="item.ImageRepeater?.length"
                class="flex flex-wrap items-center justify-center mb-[30px] md:mb-[60px] lg:mb-[80px]">

                <!-- Flatten the nested structure within ImageRepeater to extract all images and loop over them -->
                <div v-for="image in item.ImageRepeater.flatMap(block => block.images)" :key="image.id"
                    class="router-link-active router-link-exact-active transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]">

                    <!-- Display each image using its URL and provide alternative text for accessibility -->
                    <img :src="`${strapiBaseUrl}${image.url}`" :alt="image.alternativeText || 'Partner Image'" />
                </div>
            </div>



            <!-- Divider -->
            <div class="w-full bg-gray-300 h-[1px] mb-[50px] md:mb-[90px] lg:mb-[150px]"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import qs from 'qs';

const partnerData = ref([]);
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const route = useRoute();

watchEffect(async () => {
    const slug = route.params.slug;
    if (slug) {
        try {
            // Use the qs library to build query parameters
            const queryParams = qs.stringify({
                filters: {
                    PageURL: {
                        $eq: slug, // Match the page slug
                    },
                },
                populate: [
                    "Blocks.HeadingBlock",
                    "Blocks.ImageRepeater.images", // Populate partner images
                ].join(","),
            });

            // Fetch data from the Strapi API
            const { data, error } = await useFetch(
                `${strapiBaseUrl}/api/sitemaps?${queryParams}`
            );

            if (data.value) {
                const blocks = data.value.data[0]?.Blocks || [];
                console.log("blocks:", blocks);

                partnerData.value = blocks.filter(
                    (block) => block.__component === "page-blocks.partner-block"
                );
            } else if (error.value) {
                console.error("Error fetching data:", error.value);
            }
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    }
});
</script>
