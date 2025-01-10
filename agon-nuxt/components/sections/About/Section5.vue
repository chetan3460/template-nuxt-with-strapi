<template>
    <div v-if="processData?.length">
        <div v-for="(item, index) in processData" :key="item.id"
            class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center mx-auto max-w-[905px]">
            <span v-if="item.HeadingBlock?.subtitle"
                class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-4">
                {{ item.HeadingBlock.subtitle }}
            </span>
            <div class="text-center mb-[88px]">
                <h2 v-if="item.HeadingBlock?.title"
                    class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                    {{ item.HeadingBlock.title }}
                </h2>
            </div>

            <div
                class="flex flex-col gap-5 items-center justify-center relative md:flex-wrap md:flex-row lg:gap-[30px] xl:gap-[110px]">
                <div v-for="(process, pIndex) in item.ProcessRepeater" :key="process.id" :class="[
                    'rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]',
                    classes[pIndex % classes.length] // Assign dynamic class
                ]">
                    <div v-if="process.icon?.url"
                        class="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                        <img :src="`${strapiBaseUrl}${process.icon.url}`" alt="icon" class="max-w-[36px]" />
                    </div>
                    <h4 v-if="process.title" class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
                        {{ process.title }}
                    </h4>
                    <p v-if="process.content" class="text-text text-gray-500">
                        {{ process.content }}
                    </p>
                    <!-- Add conditional class based on index (pIndex) for third child -->
                    <div v-if="process.shapeImg?.url" :class="{
                        'hidden absolute right-0 top-full lg:block translate-x-[-60px] z-[-1] xl:translate-y-[30px]': pIndex === 2,
                        'hidden absolute right-0 lg:block top-1/2 translate-x-[30px] z-[-1] xl:translate-x-full xl:right-[-15px]': pIndex !== 2
                    }">
                        <img :src="`${strapiBaseUrl}${process.shapeImg.url}`" alt="direction arrow">
                    </div>

                </div>
            </div>

        </div>
    </div>
    <!-- <div v-else class="text-center text-gray-500 mt-10">No data available.</div> -->
</template>


<script setup>
import { ref, watchEffect } from "vue";  // Import Vue's ref and watchEffect
import qs from "qs";  // Import the qs library for query string manipulation

// Declare a ref for storing process data to be displayed
const processData = ref([]);

// Get Strapi base URL from the Nuxt app instance
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// Get the current route for accessing the dynamic slug parameter
const route = useRoute();

// Define background classes to be used for styling elements dynamically
const classes = ref(["bg-bg-2", "bg-bg-3", "bg-bg-5", "bg-bg-9"]);

// Watch effect to reactively fetch data whenever the slug changes
watchEffect(async () => {
    // Retrieve the slug from the route parameters
    const slug = route.params.slug;

    // Check if the slug exists
    if (slug) {
        try {
            // Use the qs library to build the query parameters for the API request
            const queryParams = qs.stringify({
                filters: {
                    PageURL: {
                        $eq: slug  // Filter for the matching page based on the slug
                    }
                },
                populate: 'Blocks.ProcessRepeater.icon,Blocks.ProcessRepeater.shapeImg,Blocks.HeadingBlock'
                // Include related data (icons and heading blocks)
            });

            // Perform the fetch request to get the data from Strapi API
            const { data, error } = await useFetch(
                `${strapiBaseUrl}/api/sitemaps?${queryParams}`  // Append the query string to the API endpoint
            );

            // If data is returned successfully
            if (data.value) {
                // console.log("Full Data Response:", data.value);  // Log the full data response for debugging

                // Extract blocks from the data (if available)
                const blocks = data.value.data[0]?.Blocks || [];
                // Filter the blocks to only include those that are of the "process-block" component type
                processData.value = blocks.filter(
                    (block) => block.__component === "page-blocks.process-block"
                );
            }
            // If there is an error, log it
            else if (error.value) {
                console.error("Error fetching process block data:", error.value);
            }
        } catch (err) {
            // Catch and log any errors that occur during the API request
            console.error("Error fetching process block data:", err);
        }
    }
});



// Old Code
// watchEffect(async () => {
//     const slug = route.params.slug;
//     if (slug) {
//         try {
//             const { data, error } = await useFetch(
//                 `${strapiBaseUrl}/api/sitemaps?filters[PageURL][$eq]=${slug}&populate=Blocks.ProcessRepeater.icon,Blocks.HeadingBlock`
//             );

//             if (data.value) {
//                 console.log("Full Data Response:", data.value);

//                 const blocks = data.value.data[0]?.Blocks || [];
//                 console.log("Blocks:", blocks);

//                 processData.value = blocks.filter(
//                     (block) => block.__component === "page-blocks.process-block"
//                 );
//             } else if (error.value) {
//                 console.error("Error fetching process block data:", error.value);
//             }
//         } catch (err) {
//             console.error("Error fetching process block data:", err);
//         }
//     }
// });
</script>
