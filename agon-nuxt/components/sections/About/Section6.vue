<template>
    <div v-if="faqData?.length">
        <div v-for="(item, index) in faqData" :key="item.id"
            class="gap-6 flex flex-col mx-auto px-5 xl:gap-[50px] max-w-[950px] mt-[70px] lg:mt-[98px]">

            <div class="flex-1 mb-[40px]">
                <div class="text-center mb-[22px]">
                    <h2 v-if="item.HeadingBlock?.title"
                        class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                        {{ item.HeadingBlock?.title }}</h2>
                    <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
                </div>
                <p v-if="item.HeadingBlock?.content"
                    class="text-text text-gray-600 text-center mx-auto mb-[40px] md:w-[55ch]">{{
                        item.HeadingBlock.content }}</p>


                <div class="flex flex-col md:flex-row md:gap-[35px]">
                    <div v-for="(appraochItem, pIndex) in item.ApproachRepeater" :key="appraochItem.id"
                        class="mb-[30px] lg:mb-0">
                        <div class="flex items-center mb-[17px]"><img class="mr-[9px]"
                                src="/assets/images/icons/icon-leaf.svg" alt="leaf icon">
                            <h4 v-if="appraochItem.title" class="text-heading-6 font-chivo font-bold">{{
                                appraochItem.title }}</h4>
                        </div>
                        <p v-if="appraochItem.description" class="text-excerpt text-gray-600">
                            {{ appraochItem.description }}</p>
                    </div>


                </div>



            </div>

            <div class="flex-[1.5]">
                <div v-for="(faqItem, pindex) in item.FaqRepeater" :key="faqItem.id"
                    class="relative accordion-item mb-5">
                    <details>
                        <summary class="flex justify-between py-5 items-center gap-5 px-[30px]">
                            <h4 v-if="faqItem.title" class="font-bold font-chivo text-[14px] xl:text-heading-5">{{
                                faqItem.title }}</h4>
                        </summary>
                        <div v-if="faqItem.description"
                            class="prose prose-p:text-text prose-p:content prose-p:font-chivo prose-p:mt-[30px] prose-p:ml-[30px]"
                            v-html="renderMarkdown(faqItem.description)">


                        </div>

                    </details>
                </div>

            </div>

        </div>
    </div>
    <!-- <div v-else
        class="flex items-center p-4 my-10 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800 justify-center"
        role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span class="sr-only">Info</span>
        <div>
            <span class="font-medium">No data available.</span>
        </div>
    </div> -->
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import qs from 'qs';

const faqData = ref([]);
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const route = useRoute();
import MarkdownIt from 'markdown-it';
// Initialize the Markdown parser
const markdownParser = new MarkdownIt();

// Define a method to render Markdown
const renderMarkdown = (content) => {
    return markdownParser.render(content);
};
watchEffect(async () => {
    const slug = route.params.slug;
    if (slug) {
        try {
            // Use the qs library to build the query parameters for the API request
            const queryParams = qs.stringify({
                filters: {
                    PageURL: {
                        $eq: slug  // Filter for the matching page based on the slug
                    }
                },
                populate: 'Blocks.ApproachRepeater,Blocks.FaqRepeater,Blocks.HeadingBlock'
                // Include related data (icons and heading blocks)
            });


            const { data, error } = await useFetch(
                `${strapiBaseUrl}/api/sitemaps?${queryParams}`  // Append the query string to the API endpoint
            );


            if (data.value) {
                const blocks = data.value.data[0]?.Blocks || [];
                faqData.value = blocks.filter(
                    (block) => block.__component === "page-blocks.faq-block"
                );
            } else if (error.value) {
                console.error('Error fetching data:', error.value);
            }
        } catch (err) {
            console.error("Error fetching data:", err);

        }
    }
})


</script>