<template>
    <div v-if="blogs.length" class="related-blogs mt-[50px]">
        <div class="mb-[70px] md:mb-[90px]">
            <h2
                class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
                Related Blogs
            </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink v-for="(blog, index) in blogs" :key="blog.slug" class="block group"
                :to="'/blog-details/' + blog.slug">
                <div class="relative mb-16">
                    <div class="relative">
                        <div class="pr-[26px] aspect-[430/275]">
                            <NuxtImg :src="`${strapiBaseUrl}${blog.image.url}`" :alt="blog.image.alternativeText"
                                :width="blog.image.width || 50" :height="blog.image.height || 50" format="webp"
                                class="h-full w-full object-cover rounded-2xl z-10 relative" />
                        </div>
                        <div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                            <div
                                :class="`w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-${(index % 10) + 1} group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]`">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center mb-[11px] gap-2">
                    <span
                        class="font-chivo inline-block bg-bg-6 text-green-900 py-[10px] px-[18px] rounded-[50px] text-[14px] leading-[14px]">
                        {{ blog.tag }}
                    </span>
                    <span class="inline-block text-[14px] leading-[14px]">
                        🕛 {{ formatPublishedDate(blog.publishedAt) }}
                    </span>
                </div>
                <h3 class="text-[20px] font-semibold mt-3">{{ blog.title }}</h3>
                <p>{{ blog.richText.slice(0, 100) }}...</p>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// Props
defineProps({
    blogs: {
        type: Array,
        default: () => [],
    },
});

// Format date
const formatPublishedDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
};
</script>