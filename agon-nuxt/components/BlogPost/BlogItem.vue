<template>
    <div class="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
        <!-- Limit to the first 3 blogs using slice -->
        <NuxtLink v-for="(blog, index) in blogPostData.slice(0, 3)" :key="blog.id" class="block group"
            :to="`blog-details/${blog.slug}`">
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
                    class="font-chivo inline-block bg-bg-6 text-green-900 py-[10px] px-[18px] rounded-[50px] text-[14px] leading-[14px] ">{{
                        blog.tag
                    }}</span>
                <span class="inline-block text-[14px] leading-[14px]">
                    🕛 {{ formatPublishedDate(blog.publishedAt) }}
                </span>
            </div>
            <p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">{{ blog.title }}</p>
        </NuxtLink>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';


const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

const blogPostData = ref([]);

const { data, pending, error, refresh } = await useFetch(`${strapiBaseUrl}/api/blogs?populate=*`);

if (data.value) {
    blogPostData.value = data.value.data;
} else if (error.value) {
    console.log(error.value);
} else {
    console.log('Loading...');
}


const formatPublishedDate = (dateString) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
};
</script>