<template>

    <div v-if="heroData.length" class="full-width banner-hero banner-2">
        <!-- <img class="w-full absolute left-0 z-0 object-fill top-[112px] h-[750px]" src="/assets/images/about-1-bg.png"
            alt="Agon" /> -->
        <div v-for="(item, index) in heroData" :key="item.id"
            class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center">
            <div class="lg:w-[60%] lg:mr-[150px]">
                <span
                    class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">
                    {{ item.subtitle }}</span>
                <h1
                    class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-[20px]">
                    {{ item.title }}</h1>
                <p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[44px] md:w-[36ch]">{{
                    item.content }}</p>
                <div class="flex items-center justify-start mb-[50px]">
                    <button type="button">
                        <NuxtLink
                            class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]"
                            to="#">
                            <span
                                class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">{{
                                    item.ContactBtnText }}</span><i>
                                <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                    src="/assets/images/icons/icon-right.svg" alt="arrow right icon" />
                            </i>
                        </NuxtLink>
                    </button>
                    <NuxtLink
                        class="text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]"
                        to="/">
                        {{ item.btnText }}</NuxtLink><i> <img class="ml-[7px] w-[12px]"
                            src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i>
                </div>
            </div>
            <div class="hidden relative lg:block">
                <img class="animate-float absolute rounded-2xl max-w-[240px] max-h-[340px] bottom-[-12%] left-[-50%]"
                    :src="`${strapiBaseUrl}${item.imageLeft.url}`" alt="Agon" />
                <img class="animate-hero-thumb-sm-animation max-w-[512px] max-h-[689px]"
                    :src="`${strapiBaseUrl}${item.imageRight.url}`" alt="Agon" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const heroData = ref([]); // Initialize as an empty array
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

const { data, error } = await useFetch(`${strapiBaseUrl}/api/sitemaps?populate[0]=Blocks&populate[1]=Blocks.imageLeft&populate[2]=Blocks.imageRight&populate[3]=seo`);

// Check for fetched data or handle error
if (data.value) {
    heroData.value = data.value.data[0]?.Blocks || [];  // Ensure proper structure
    console.log("Data:", heroData.value);
} else if (error.value) {
    console.error("Error fetching data:", error.value);
} else {
    console.warn("No data or error received.");
}
</script>
