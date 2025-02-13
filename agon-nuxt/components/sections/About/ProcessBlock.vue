<template>
    <div v-if="processData.length">
        <div v-for="(item, index) in processData" :key="item.id"
            class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center mx-auto max-w-[905px]">

            <span v-if="item.HeadingBlock?.subtitle"
                class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-4">
                {{ item.HeadingBlock.subtitle }}
            </span>

            <div class="text-center mb-[88px]">
                <h2 v-if="item.HeadingBlock?.title"
                    class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                    {{ item.HeadingBlock.title }}
                </h2>
            </div>

            <div
                class="flex flex-col gap-5 items-center justify-center relative md:flex-wrap md:flex-row lg:gap-[30px] xl:gap-[110px]">

                <div v-for="(process, pIndex) in item.ProcessRepeater" :key="process.id" :class="[
                    'rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]',
                    classes[pIndex % classes.length]
                ]">

                    <div v-if="process.icon?.url"
                        class="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]">
                        <img :src="getImageUrl(process.icon?.url)" alt="icon" class="max-w-[36px]" />
                    </div>

                    <h4 v-if="process.title" class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">
                        {{ process.title }}
                    </h4>

                    <p v-if="process.content" class="text-text text-gray-500">
                        {{ process.content }}
                    </p>

                    <div v-if="process.shapeImg?.url" :class="{
                        'hidden absolute right-0 top-full lg:block translate-x-[-60px] z-[-1] xl:translate-y-[30px]': pIndex === 2,
                        'hidden absolute right-0 lg:block top-1/2 translate-x-[30px] z-[-1] xl:translate-x-full xl:right-[-15px]': pIndex !== 2
                    }">
                        <img :src="getImageUrl(process.shapeImg?.url)" alt="direction arrow">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import qs from "qs";
import { useRoute } from "vue-router";
import { getImageUrl } from "~/utils/getImageUrl";

const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const route = useRoute();
const classes = ["bg-bg-2", "bg-bg-3", "bg-bg-5", "bg-bg-9"];

// Fetch data with SSR compatibility
const { data } = await useAsyncData(`process-block-${route.params.slug}`, async () => {
    const queryParams = qs.stringify({
        filters: {
            PageURL: {
                $eq: route.params.slug
            }
        },
        populate: "Blocks.ProcessRepeater.icon,Blocks.ProcessRepeater.shapeImg,Blocks.HeadingBlock"
    });

    const response = await fetch(`${strapiBaseUrl}/api/sitemaps?${queryParams}`);
    const json = await response.json();
    return json.data[0]?.Blocks || [];
});

// Ensure data consistency
const processData = ref(data.value.filter(
    (block) => block.__component === "page-blocks.process-block"
));
</script>
