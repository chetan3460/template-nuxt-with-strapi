<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">
        <div v-if="latestBlogData !== null" class="items-center justify-between mb-[70px] md:mb-[90px] md:flex">
            <div>
                <h2
                    class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
                    {{ latestBlogData.heading }}</h2>
                <p class="text-quote md:text-lead-lg text-gray-600">{{ latestBlogData.shortDesc }}</p>
            </div>

        </div>
        <LatestBlogItem />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LatestBlogItem from './RelatedBlogs.vue';


const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

const latestBlogData = ref([]);

const { data, pending, error, refresh } = await useFetch(`${strapiBaseUrl}/api/latest-post`);

if (data.value) {
    latestBlogData.value = data.value.data;
    console.log(latestBlogData.value);
} else if (error.value) {
    console.log(error.value);
} else {
    console.log('Loading...');
}
</script>