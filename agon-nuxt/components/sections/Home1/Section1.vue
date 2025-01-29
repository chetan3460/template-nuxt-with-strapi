<template>
    <div class="full-width banner-hero bg-orange-100 banner-1">
        <div class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center"
            v-if="bannerBlock !== null">
            <div class="flex-1">
                <h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[40px]"
                    v-html="bannerBlock.title"></h1>
                <p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[40px]">
                    {{ bannerBlock.description }}
                </p>
                <!-- <div v-html="renderMarkdown(bannerBlock.test)"></div> -->

                <div class="flex items-center justify-start">
                    <button type="button">
                        <NuxtLink
                            class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px] hover:translate-y-[-2px]"
                            :to="bannerBlock.btnLink"><span
                                class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">{{
                                    bannerBlock.btnText }}</span><i> <img
                                    class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                    src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></NuxtLink>
                    </button>
                    <NuxtLink
                        class="text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]"
                        to="/">Learn More <i> <img class="ml-[7px] w-[12px]" src="/assets/images/icons/icon-right.svg"
                                alt="arrow right icon" /></i></NuxtLink>
                </div>
            </div>
            <div class="hidden relative flex-1 h-auto self-stretch lg:block">
                <div class="absolute w-full left-20 animate-hero-thumb-sm-animation bottom-[-60px] max-w-[526px]">


                    <!-- <img :src="`${strapiBaseUrl}${bannerBlock.bannerImage.url}`" class="h-full w-full object-cover"
                        alt="image" /> -->
                    <!-- <img :src="bannerBlock?.bannerImage?.url" class="h-full w-full object-cover" alt="image" /> -->
                    <img :src="getImageUrl(bannerBlock?.bannerImage?.url)" class="h-full w-full object-cover"
                        alt="image" />


                </div>
                <div class="absolute opacity-80 animate-float max-w-[176px] bottom-[10%] -translate-x-1/3">
                    <div class="relative bg-green-900 bg-opacity-80 rounded-2xl grid place-items-center">


                        <img class="h-full w-full object-cover" :src="getImageUrl(bannerBlock.videoImg?.url)"
                            alt="Agon">

                        <p class="text-heading-4 absolute text-white font-chivo font-bold ml-[49px]">Watch intro video
                        </p>
                        <button @click="openVideo"
                            class="rounded-full bg-white grid place-items-center absolute play-video w-[64px] h-[64px] left-[-15%]">
                            <img src="/assets/images/icons/icon-play.svg" alt="play button" width="15" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" @toggle-video="openVideo" />
    <!-- <p>Base URL: {{ $baseUrl }}</p> -->

</template>

<script setup>

import { ref, computed } from 'vue';
import qs from 'qs'; // Import qs for query string handling
import ModalVideo from "../components/elements/ModalVideo.vue";
import MarkdownIt from 'markdown-it';
import { getImageUrl } from './utils/getImageUrl';
// Initialize the Markdown parser
const markdownParser = new MarkdownIt();

// Method to render Markdown content
const renderMarkdown = (content) => {
    return markdownParser.render(content);
};

// Fetch the Strapi base URL dynamically from the Nuxt app instance
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// Define reactive state for the banner data
const bannerBlock = ref(null);

// Define the query string using qs to populate specific fields
const query = qs.stringify(
    {
        populate: {
            bannerImage: true, // Populate 'bannerImage'
            videoImg: true,    // Populate 'videoImg'
        },
    },
    { encode: false } // Prevent encoding for better readability
);

// Fetch data using useFetch
const { data, error } = await useFetch(`${strapiBaseUrl}/api/banner-block?${query}`);

// Handle data and errors
if (data.value) {
    bannerBlock.value = data.value.data;
} else if (error.value) {
    console.error("Error fetching data:", error.value);
}

// Define a reactive state for the video open/close status
const videoIsOpen = ref(false);

// Method to toggle video state
const openVideo = () => {
    videoIsOpen.value = !videoIsOpen.value;
};

// Computed properties to extract video channel and video ID
const videoChannel = computed(() => {
    // Replace with logic to extract the channel from the video URL if needed
    return "youtube";
});

const videoId = computed(() => {
    // Replace with logic to extract the video ID from the video URL if needed
    return "QiqQoqtnHrk";
});
</script>
