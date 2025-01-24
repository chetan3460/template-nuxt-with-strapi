<template>
    <div v-if="faqData?.length">
        <div v-for="(item, index) in faqData" :key="item.id"
            class="gap-6 flex flex-col mx-auto px-5 xl:gap-[50px] max-w-[950px] mt-[70px] lg:mt-[98px]">

            <div class="flex-1 mb-[40px]">
                <div class="text-center mb-[22px]">
                    <h2 v-if="item.HeadingBlock?.title"
                        class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                        {{ item.HeadingBlock?.title }}</h2>
                </div>
                <p v-if="item.HeadingBlock?.content"
                    class="text-text text-gray-600 text-center mx-auto mb-[40px] md:w-[55ch]">{{
                        item.HeadingBlock.content }}</p>

                <div class="flex flex-col md:flex-row md:gap-[35px]">
                    <div v-for="(appraochItem, pIndex) in item.ApproachRepeater" :key="appraochItem.id"
                        class="mb-[30px] lg:mb-0">
                        <div class="flex items-center mb-[17px]">
                            <img class="mr-[9px]" src="/assets/images/icons/icon-leaf.svg" alt="leaf icon">
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
</template>

<script setup>
import { ref } from 'vue';
import qs from 'qs';
import MarkdownIt from 'markdown-it';

const faqData = ref([]);
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const route = useRoute();
const markdownParser = new MarkdownIt();

const renderMarkdown = (content) => {
    return markdownParser.render(content);
};

const slug = route.params.slug;
const queryParams = qs.stringify({
    filters: {
        PageURL: {
            $eq: slug
        }
    },
    populate: ['Blocks.ApproachRepeater,Blocks.FaqRepeater,Blocks.HeadingBlock']
});
const { data, error } = await useFetch(`${strapiBaseUrl}/api/sitemaps?${queryParams}`);

if (data?.value?.data?.length) {
    // Filter the hero block data from the response
    const blocks = data.value.data[0]?.Blocks || [];
    // Filter the blocks to include only the content-image blocks
    faqData.value = blocks.filter(
        (block) => block.__component === "page-blocks.faq-block"
    );
} else if (error.value) {
    console.error("Error fetching data:", error.value);
}
</script>
