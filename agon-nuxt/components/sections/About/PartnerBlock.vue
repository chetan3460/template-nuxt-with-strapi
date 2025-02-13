<template>
    <div v-if="partnerData?.length">
        <div v-for="(item, index) in partnerData" :key="item.id"
            class="px-[12px] md:px-[36px] xl:px-0 mt-[30px] md:mt-[80px] lg:mt-[143px]">

            <!-- Heading Block -->
            <h2 v-if="item.HeadingBlock?.title"
                class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-center mb-[40px] md:mb-[60px] lg:mb-[84px]">
                {{ item.HeadingBlock.title }}
            </h2>

            <!-- Image Block -->
            <div v-if="item.ImageRepeater?.length"
                class="flex flex-wrap items-center justify-center mb-[30px] md:mb-[60px] lg:mb-[80px]">

                <div v-for="image in item.ImageRepeater.flatMap(block => block?.images || [])" :key="image?.id"
                    class="router-link-active router-link-exact-active transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]">

                    <img v-if="image?.url" :src="getImageUrl(image?.url)"
                        :alt="image.alternativeText || 'Partner Image'" />
                </div>
            </div>

            <!-- Divider -->
            <div class="w-full bg-gray-300 h-[1px] mb-[50px] md:mb-[90px] lg:mb-[150px]"></div>
        </div>
    </div>
</template>

<script setup>
import { getImageUrl } from '~/utils/getImageUrl';
import qs from 'qs';
import { useRoute } from 'vue-router';

const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const route = useRoute();

const { data } = await useAsyncData(`partner-block-${route.params.slug}`, async () => {
    const queryParams = qs.stringify({
        filters: {
            PageURL: {
                $eq: route.params.slug
            }
        },
        populate: [
            "Blocks.HeadingBlock",
            "Blocks.ImageRepeater.images",
        ].join(","),
    });

    const response = await fetch(`${strapiBaseUrl}/api/sitemaps?${queryParams}`);
    const json = await response.json();

    return json?.data[0]?.Blocks?.filter(block => block.__component === "page-blocks.partner-block") || [];
});

const partnerData = data;
</script>
