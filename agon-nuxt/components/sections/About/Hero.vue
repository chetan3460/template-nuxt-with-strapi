<template>


    <div v-if="heroData !== null" class="full-width banner-hero banner-2 bg-[#bee1e6]">
        <div v-for="(item, index) in heroData" :key="item.id"
            class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center">
            <div class="lg:w-[60%] lg:mr-[150px]">
                <span
                    class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">
                    {{ item.subtitle }}
                </span>
                <h1
                    class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-[20px]">
                    {{ item.title }}
                </h1>
                <p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[44px] md:w-[36ch]">
                    {{ item.content }}
                </p>
                <div class="flex items-center justify-start mb-[50px]">
                    <button type="button">
                        <NuxtLink :to="item.ContactBtnLink"
                            class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]">
                            <span
                                class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                                {{ item.ContactBtnText }}
                            </span>
                            <i>
                                <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                    src="/assets/images/icons/icon-right.svg" alt="arrow right icon" />
                            </i>
                        </NuxtLink>
                    </button>
                    <NuxtLink
                        class="text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]"
                        :to="item.BtnLink">
                        {{ item.btnText }}
                        <i>
                            <img class="ml-[7px] w-[12px]" src="/assets/images/icons/icon-right.svg"
                                alt="arrow right icon" />
                        </i>
                    </NuxtLink>
                </div>
            </div>
            <div class="hidden relative lg:block">
                <img v-if="item.imageLeft?.url"
                    class="animate-float absolute rounded-2xl max-w-[240px] max-h-[340px] bottom-[-12%] left-[-50%]"
                    :src="`${strapiBaseUrl}${item.imageLeft.url}`" alt="Agon" />
                <img v-if="item.imageRight?.url" class="animate-hero-thumb-sm-animation max-w-[512px] max-h-[689px]"
                    :src="`${strapiBaseUrl}${item.imageRight.url}`" alt="Agon" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const heroData = ref([]); // Initialize as an empty array
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const route = useRoute();  // Get the current route object

// Watch for the change in slug (route params) and fetch data accordingly
watchEffect(async () => {
    const slug = route.params.slug; // Get the current slug from the route
    if (slug) {
        try {
            // Fetch data based on the current slug
            const { data, error } = await useFetch(`${strapiBaseUrl}/api/sitemaps?filters[PageURL][$eq]=${slug}&populate[0]=Blocks&populate[1]=Blocks.imageLeft&populate[2]=Blocks.imageRight&populate[3]=seo`);
            if (data.value) {
                // Log the full data response to inspect its structure
                // console.log("Full Data Response:", data.value);

                // Filter the hero block data from the response
                const blocks = data.value.data[0]?.Blocks || [];
                // Log the blocks to verify the component type
                // console.log("Blocks:", blocks);

                // Filter the blocks to include only the hero blocks
                heroData.value = blocks.filter(block => block.__component === 'page-blocks.hero-about-block');  // Adjust this based on your actual block type
            } else if (error.value) {
                console.error("Error fetching data:", error.value);
            }
        } catch (e) {
            console.error("Error during fetch:", e);
        }
    }
});
</script>
