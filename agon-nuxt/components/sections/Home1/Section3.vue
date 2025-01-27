<template>
    <div v-if="seeWhyData !== null" class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">
        <div class="text-center">
            <h2
                class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                {{ seeWhyData.heading }}
            </h2>
            <div class="prose-p:font-bold">
                <p class=" text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">{{
                    seeWhyData.content }}</p>
            </div>

        </div>

        <div
            class="flex items-center gap-5 justify-center flex-wrap mx-auto w-full mt-[90px] sm:w-[80%] xl:w-full mb-[58px]">
            <p v-for="(item, index) in seeWhyData.SeeWhyBlockItems" :key="item.id" @click="selectTab(index)"
                :class="{ 'active': selectedTab === index }"
                class="text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]">
                {{ item.title }}
            </p>
        </div>

        <!-- Iterate over the items for tab content -->
        <div v-for="(item, index) in seeWhyData.SeeWhyBlockItems" :key="item.id"
            :class="['tab-content lg:gap-[30px] lg:flex', selectedTab === index ? (index === 0 ? 'bg-bg-2' : 'bg-bg-3') : '!hidden']">
            <div class="p-5 md:p-[60px] lg:w-1/2">

                <div class="prose prose-h2:font-bold prose-h2:font-chivo prose-h2:text-[28px] prose-h2:leading-[32px] prose-h2:mb-[30px] prose-p:text-excerpt prose-p:text-[20px] prose-p:mb-[40px] mb-[60px]"
                    v-html="renderMarkdown(item.description)">
                </div>



                <button type="button">
                    <NuxtLink
                        class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit"
                        :to="item.btnLink">
                        <span
                            class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">{{
                                item.btnText }}</span>
                        <i><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                                src="/assets/images/icons/icon-right.svg" alt="arrow right icon"></i>
                    </NuxtLink>
                </button>
            </div>
            <div class="relative lg:w-1/2">

                <NuxtImg :src="`${strapiBaseUrl}${item.image.url}`"
                    :alt="item.image.alternativeText || `Partner logo ${index + 1}`" :width="item.image.width || 150"
                    :height="item.image.height || 75" format="webp" class="h-full w-full object-cover" />

                <!-- <img class="h-full w-full object-cover" src="/assets/images/thumbnail-1.png" alt="Agon"> -->
                <img class="absolute top-0 right-0" src="/assets/images/icons/pattern-3.svg" alt="pattern">

                <button @click="openVideo"
                    class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0">
                    <img src="/assets/images/icons/icon-play.svg" alt="play button" width="30">
                </button>
            </div>
        </div>
    </div>
    <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
</template>
<!-- <script setup>

import { ref, computed } from 'vue'
import ModalVideo from '../components/elements/ModalVideo.vue'
import MarkdownIt from 'markdown-it';
// Initialize the Markdown parser
const markdownParser = new MarkdownIt();

// Define a method to render Markdown
const renderMarkdown = (content) => {
    return markdownParser.render(content);
};

// Base URL for Strapi images
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// State to hold partnerItems data
const seeWhyData = ref([]);

// Fetch partner items
const { data, error } = await useFetch(`${strapiBaseUrl}/api/see-why-block?populate=SeeWhyBlockItems.image`);
// console.log(data.value);



if (data.value) {
    seeWhyData.value = data.value.data

} else if (error.value) {
    // Log the error details for debugging
    console.error("Error fetching data:", error.value);
} else {
    // Optional: Handle cases where both data and error are undefined
    console.warn("No data or error received.");
}

// Defining reactive variables using ref
// `selectedTab` keeps track of the currently selected tab
const selectedTab = ref(0)

// `videoIsOpen` controls whether the video modal is open or closed
const videoIsOpen = ref(false)

// Method to change the selected tab based on the index passed
const selectTab = (index) => {
    selectedTab.value = index // Update the selected tab's value
}

// Method to toggle the video modal's open/close state
const openVideo = () => {
    videoIsOpen.value = !videoIsOpen.value // Invert the current state of `videoIsOpen`
}

// Computed property to determine the video channel (e.g., YouTube, Vimeo)
// In this case, it always returns 'youtube', but you can implement logic here to extract it from a URL
const videoChannel = computed(() => {
    return 'youtube'
})

// Computed property to extract the video ID from a URL
// Here, it is hardcoded, but you can implement logic to parse a URL and retrieve the ID dynamically
const videoId = computed(() => {
    return 'QiqQoqtnHrk'
})
</script> -->



<script setup>
import { ref, computed } from 'vue'
import ModalVideo from '../components/elements/ModalVideo.vue'
import MarkdownIt from 'markdown-it';
import qs from 'qs'; // Import qs for query string handling

// Initialize the Markdown parser
const markdownParser = new MarkdownIt();

// Define a method to render Markdown
const renderMarkdown = (content) => {
    return markdownParser.render(content);
};

// Base URL for Strapi images
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// State to hold seeWhyData
const seeWhyData = ref([]);

// Define the query string to populate the SeeWhyBlockItems.image field
const query = qs.stringify(
    {
        populate: {
            SeeWhyBlockItems: {
                populate: "image", // Populate the image field within SeeWhyBlockItems
            },
        },
    },
    { encode: false } // Prevent encoding for better readability
);

// Fetch see-why block data
const { data, error } = await useFetch(`${strapiBaseUrl}/api/see-why-block?${query}`);
// console.log(data.value);

// Handle data and errors
if (data.value) {
    seeWhyData.value = data.value?.data || []; // Safely access the seeWhyData
} else if (error.value) {
    // Log the error details for debugging
    console.error("Error fetching data:", error.value);
} else {
    // Optional: Handle cases where both data and error are undefined
    console.warn("No data or error received.");
}

// Defining reactive variables using ref
// `selectedTab` keeps track of the currently selected tab
const selectedTab = ref(0)

// `videoIsOpen` controls whether the video modal is open or closed
const videoIsOpen = ref(false)

// Method to change the selected tab based on the index passed
const selectTab = (index) => {
    selectedTab.value = index // Update the selected tab's value
}

// Method to toggle the video modal's open/close state
const openVideo = () => {
    videoIsOpen.value = !videoIsOpen.value // Invert the current state of `videoIsOpen`
}

// Computed property to determine the video channel (e.g., YouTube, Vimeo)
// In this case, it always returns 'youtube', but you can implement logic here to extract it from a URL
const videoChannel = computed(() => {
    return 'youtube'
})

// Computed property to extract the video ID from a URL
// Here, it is hardcoded, but you can implement logic to parse a URL and retrieve the ID dynamically
const videoId = computed(() => {
    return 'QiqQoqtnHrk'
})
</script>
