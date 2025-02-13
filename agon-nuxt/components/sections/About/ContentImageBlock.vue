<template>
    <div v-if="contentImageData.length">
        <div v-for="(item, index) in contentImageData" :key="item.id"
            class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center lg:mt-[137px]">

            <!-- Subtitle -->
            <span
                class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[18px]">
                {{ item.subtitle }}
            </span>

            <!-- Title -->
            <div class="text-center mb-[40px] md:mb-[62px]">
                <h2
                    class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                    {{ item.title }}
                </h2>
            </div>

            <!-- Image -->
            <div class="relative mx-auto max-w-[1190px]">
                <img class="h-full w-full object-cover rounded-2xl" :src="getImageUrl(item.image?.url)" alt="Agon"
                    v-if="item.image?.url" />

                <!-- Play Button -->
                <button @click="videoIsOpen = true"
                    class="rounded-full bg-white grid place-items-center absolute play-video w-[60px] h-[60px] md:w-[138px] md:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img src="/assets/images/icons/icon-play.svg" alt="play button" width="26" />
                </button>
            </div>
        </div>

        <!-- Modal Video -->
        <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import qs from "qs";
import { getImageUrl } from "~/utils/getImageUrl";
import ModalVideo from "../components/elements/ModalVideo.vue";

// Get Nuxt App instance & route
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const route = useRoute();

// Modal state
const videoIsOpen = ref(false);

// Video Properties
const videoChannel = computed(() => "youtube");
const videoId = computed(() => "QiqQoqtnHrk");

// Compute slug reactively
const slug = computed(() => route.params.slug);

// Compute query parameters dynamically
const queryParams = computed(() => qs.stringify({
    filters: { PageURL: { $eq: slug.value } },
    populate: ['Blocks', 'Blocks.image']
}));

// Fetch data using useAsyncData to prevent hydration mismatches
const { data } = await useAsyncData(`content-image-block-${slug.value}`, () =>
    $fetch(`${strapiBaseUrl}/api/sitemaps?${queryParams.value}`)
);

// Extract Content Image Block data safely
const contentImageData = computed(() =>
    data.value?.data?.[0]?.Blocks?.filter(block => block.__component === 'page-blocks.content-image-block') || []
);
</script>
