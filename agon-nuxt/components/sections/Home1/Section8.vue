<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">
        <div v-if="blogData !== null" class="items-center justify-between mb-[70px] md:mb-[90px] md:flex">
            <div>
                <h2
                    class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
                    {{ blogData.heading }}</h2>
                <p class="text-quote md:text-lead-lg text-gray-600">{{ blogData.shortDesc }}</p>
            </div>
            <button type="button">
                <NuxtLink
                    class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black w-fit"
                    :to="blogData.btnLink"><span
                        class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">{{
                            blogData.btnText }}</span><i> <img
                            class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                            src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></NuxtLink>
            </button>
        </div>
        <BlogItem />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import BlogItem from '~/components/BlogPost/BlogItem.vue';


const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

const blogData = ref([]);

const { data, pending, error, refresh } = await useFetch(`${strapiBaseUrl}/api/blog-post`);

if (data.value) {
    blogData.value = data.value.data;
    // console.log(blogData.value);
} else if (error.value) {
    console.log(error.value);
} else {
    console.log('Loading...');
}
</script>