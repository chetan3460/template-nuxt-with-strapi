<template>
    <div v-if="blogDetails">
        <!-- Blog Header -->
        <div class="full-width relative">
            <div class="aspect-[384/91] h-[350px] md:h-[455px]">
                <NuxtImg :src="`${strapiBaseUrl}${blogDetails.featuredImage.url}`"
                    :alt="blogDetails.featuredImage.alternativeText" :width="blogDetails.featuredImage.width || 50"
                    :height="blogDetails.featuredImage.height || 50" format="webp" class="h-full w-full object-cover" />
            </div>
            <div class="absolute w-full h-full bg-gray-900 top-0 opacity-50"></div>
            <div class="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1
                    class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-semibold text-white w-[18ch] lg:w-[25ch]">
                    {{ blogDetails.title }}
                </h1>
            </div>
        </div>

        <!-- Blog Content -->
        <div
            class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto text-md text-gray-500 relative max-w-[830px] text-[14px] leading-[25px] md:text-[18px] md:leading-[32px]">
            <div class="blog-content prose-p:mb-6 prose-p:md:mb-9 prose-h2:font-bold prose-h2:font-chivo prose-h2:text-[25px] prose-h2:leading-[30px] prose-h2:md:text-heading-3 prose-h2:mb-6 prose-h2:text-gray-900 prose-h2:md:mb-9 prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6 prose-ul:md:mb-9 prose-h3:font-bold prose-h3:font-chivo prose-h3:text-[20px] prose-h3:leading-[26px] prose-h3:md:text-heading-4 prose-h3:text-gray-900 prose-h3:mb-6 prose-h3:md:mb-9 prose-h4:font-bold prose-h4:font-chivo prose-h4:text-[20px] prose-h4:leading-[26px] prose-h4:md:text-heading-5 prose-h4:text-gray-900 prose-h4:mb-6 prose-h4:md:mb-9"
                v-html="renderMarkdown(blogDetails.richText)"></div>
        </div>

        <!-- Related Blogs -->
        <RelatedBlogs :blogs="relatedBlogs" />
    </div>

    <div v-else>
        <p>Blog not found.</p>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

import MarkdownIt from 'markdown-it';
import RelatedBlogs from './RelatedBlogs.vue';
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// Initialize Markdown parser
const markdownParser = new MarkdownIt();

// Props
defineProps({
    blogDetails: {
        type: Object,
        required: true,
    },
    relatedBlogs: {
        type: Array,
        default: () => [],
    },
});

// Render Markdown
const renderMarkdown = (content) => markdownParser.render(content);


const scroll = ref(false);
const handleScroll = () => {
    const scrollCheck = window.scrollY > 100;
    if (scrollCheck !== scroll.value) {
        scroll.value = scrollCheck;
    }
};
onMounted(() => {
    document.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
    document.removeEventListener("scroll", handleScroll);
});
</script>