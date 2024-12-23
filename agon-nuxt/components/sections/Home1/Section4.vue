<template>
    <div v-if="featureItemData !== null" class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[100px]">
        <div class="text-center mb-[70px]">
            <h2
                class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                {{ featureItemData.heading }}</h2>
            <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">{{ featureItemData.content }}</p>
        </div>
        <div class="lg:flex lg:gap-5 xl:gap-[30px]">
            <div v-for="(item, index) in featureItemData.featureBlockItems" :key="item.id"
                class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-5 hover:translate-y-[-2px]">
                <div>
                    <NuxtImg :src="`${strapiBaseUrl}${item.featureImg.url}`"
                        class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]" />

                    <h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">
                        {{ item.featureTitle }}</h2>
                    <p class="text-excerpt text-gray-600 mb-[30px]">{{ item.featureContent }}</p>
                </div>

                <button type="button">
                    <NuxtLink
                        class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit hover:translate-y-[-3px]"
                        :to="item.featureLink"><span
                            class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">{{
                                item.featureBtn }}</span><i> <img
                                class="ml-[7px] w-[12px] filter-black group-hover:filter-white"
                                src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i></NuxtLink>
                </button>

                <NuxtImg :src="`${strapiBaseUrl}${item.featureBackImg.url}`" :alt="item.featureBackImg.alternativeText"
                    :width="item.featureBackImg.width || 150" :height="item.featureBackImg.height || 75" format="webp"
                    class="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0" />

            </div>


        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
// Base URL for Strapi images
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// State to hold featureItems data
const featureItemData = ref([]);

const { data, pending, error, refresh } = await useFetch(`${strapiBaseUrl}/api/feature-block?populate[0]=featureBlockItems.featureImg&populate[1]=featureBlockItems.featureBackImg`);

if (data.value) {
    featureItemData.value = data.value.data;
    // console.log(featureItemData.value);

} else if (error.value) {
    console.log(error.value);
} else {
    console.log('Loading...');
}

</script>