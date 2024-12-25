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
                v-html="renderMarkdown(blogDetails.richText)">
            </div>
        </div>

        <!-- Related Blogs -->
        <div v-if="relatedBlogs.length" class="related-blogs mt-[50px]">
            <h2 class="text-[28px] font-bold mb-[20px]">Related Blogs</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="blog in relatedBlogs" :key="blog.slug"
                    class="blog-card border border-gray-300 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow">
                    <NuxtImg :src="`${strapiBaseUrl}${blog.featuredImage.url}`"
                        :alt="blog.featuredImage.alternativeText" width="100%" height="200px"
                        class="rounded-t-md object-cover w-full h-[200px]" />
                    <h3 class="text-[20px] font-semibold mt-3">{{ blog.title }}</h3>
                    <p class="text-gray-600 text-[14px] mt-2">
                        {{ blog.richText.slice(0, 100) }}...
                    </p>
                    <nuxt-link :to="'/blog-details/' + blog.slug" class="text-blue-500 font-medium mt-4 inline-block">
                        Read More
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>

    <div v-else>
        <p>Blog not found.</p>
    </div>
</template>

<script setup>
import MarkdownIt from 'markdown-it';
import { defineProps } from 'vue';

const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// Initialize the Markdown parser
const markdownParser = new MarkdownIt();

// Define a method to render Markdown
const renderMarkdown = (content) => {
    return markdownParser.render(content);
};

// Define props
const props = defineProps({
    blogDetails: {
        type: Object,
        required: true, // Make sure the object is passed correctly
    },
    relatedBlogs: {
        type: Array,
        default: () => [],
    },
});
</script>

<style scoped>
.related-blogs {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.blog-card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
}
</style>
