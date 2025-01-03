<template>
    <div v-if="serviceBannerData?.length">
        <div v-for="(item, index) in serviceBannerData" :key="item.id"
            class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center z-10 relative lg:mt-[99px]">
            <div class="text-center">
                <div v-if="item.TitleContentItem?.title"
                    class="prose-h1:font-bold prose-h1:font-chivo prose-h1:mx-auto prose-h1:text-gray-900 prose-h1:mb-5 prose-h1:md:mb-[30px] prose-h1:text-[35px] prose-h1:leading-[44px] prose-h1:md:text-[46px] prose-h1:md:leading-[52px] prose-h1:lg:text-heading-1 prose-h1:md:w-[20ch]"
                    v-html="renderMarkdown(item.TitleContentItem.title)">

                </div>

                <p v-if="item.TitleContentItem?.content"
                    class="text-quote md:text-lead-lg text-gray-500 mx-auto md:w-[47ch] mb-[50px]">{{
                        item.TitleContentItem.content }}</p>

            </div>
            <div class="flex items-center justify-center mb-[87px]">
                <button type="button">
                    <NuxtLink
                        class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]"
                        to="#"><span
                            class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">Get
                            Start</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></NuxtLink>
                </button>
                <div class="flex items-center gap-3">
                    <i> <img src="/assets/images/icons/icon-button.svg" alt="" /></i>
                    <NuxtLink
                        class="text-base flex items-center font-chivo font-medium text-[18px] leading-[18px] gap-[5px]"
                        to="/">How it works</NuxtLink>
                </div>
            </div>
            <div class="relative mx-auto max-w-[1190px]"><img class="h-full w-full object-cover rounded-2xl"
                    :src="`${strapiBaseUrl}${item.image?.url}`" alt="Agon" /></div>
        </div>
    </div>
    <div v-else>
        <Alert :class="`text-base`" />
    </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import qs from 'qs';

const serviceBannerData = ref([]);
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const route = useRoute();
import MarkdownIt from 'markdown-it';
import Alert from '~/components/elements/Alert.vue';
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
            const queryParams = qs.stringify({
                filters: {
                    PageURL: {
                        $eq: slug
                    }
                },
                populate: 'Blocks.image,Blocks.TitleContentItem'
            });

            const { data, error } = await useFetch(
                `${strapiBaseUrl}/api/sitemaps?${queryParams}`  // Append the query string to the API endpoint
            );
            if (data.value) {
                const blocks = data.value.data[0]?.Blocks || [];
                serviceBannerData.value = blocks.filter(
                    (block) => block.__component === "page-blocks.service-page-banner-block"
                );
            } else if (error.value) {
                console.error('Error fetching data:', error.value);
            }

        } catch (error) {
            console.error('Error fetching service banner data:', error);
        }
    }
})

</script>
