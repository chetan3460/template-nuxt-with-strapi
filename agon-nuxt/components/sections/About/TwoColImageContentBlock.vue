<template>
    <div v-if="cardBlockData?.length">
        <div v-for="(item, index) in cardBlockData" :key="item.id"
            class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[133px]">
            <div class="text-center mb-[30px] md:mb-[90px]">
                <h2 v-if="item.title"
                    class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                    {{ item.title }}</h2>
                <p v-if="item.content" class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">{{
                    item.content }}</p>
            </div>
            <div v-if="item.TwoCardsReapeater?.length" class="mx-auto lg:flex gap-[30px] max-w-[1190px]">
                <div v-for="(card, pIndex) in item.TwoCardsReapeater" :key="card.id"
                    :class="`text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-${pIndex + 1}`">

                    <h3 v-if="card.title"
                        class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">
                        {{ card.title }}</h3>

                    <p v-if="card.content" class="text-md text-gray-600 mb-[22px] lg:mx-16">{{ card.content }}</p>

                    <img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"
                        :src="`${strapiBaseUrl}${card.icon.url}`" alt="Feature image" />
                </div>

            </div>




        </div>
    </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import qs from 'qs';
const cardBlockData = ref([]);
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const route = useRoute();
watchEffect(async () => {
    const slug = route.params.slug;
    if (slug) {
        try {
            const queryParams = qs.stringify({
                filters: {
                    PageURL: {
                        $eq: slug,
                    },
                },
                populate: [
                    "Blocks.TwoCardsReapeater.icon",
                ]
            });
            const { data, error } = await useFetch(
                `${strapiBaseUrl}/api/sitemaps?${queryParams}`
            );

            if (data.value) {
                const blocks = data.value.data[0]?.Blocks || [];
                cardBlockData.value = blocks.filter(block => block.__component === 'page-blocks.two-col-image-content-block');
            }
        } catch (error) {
            console.error(error);
        }
    }

});

</script>