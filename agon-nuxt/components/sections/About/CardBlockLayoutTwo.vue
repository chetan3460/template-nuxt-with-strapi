<template>
    <div v-if="cardBlockData?.length">
        <div v-for="(item, index) in cardBlockData" :key="item.id"
            class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">
            <span v-if="item.title"
                class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[25px]">{{
                    item.title }}</span>
            <div v-if="item.content" class="mb-[45px] md:mb-[75px]">
                <h2
                    class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
                    {{ item.content }}</h2>
                <p class="text-quote md:text-lead-lg text-gray-600"></p>
            </div>
            <!-- Card Layout -->
            <div v-if="item.CardLayoutItems?.length"
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] lg:gap-[46px] mb-[60px] lg:mb-[132px]">

                <!-- Render each card -->
                <div v-for="card in item.CardLayoutItems" :key="card.id"
                    class="flex items-start gap-[15px] md:gap-[30px]">

                    <!-- Icon -->
                    <div>
                        <NuxtImg v-if="card.icon?.url" class="max-w-[40px] md:max-w-[52px] min-w-[52px]"
                            :src="getImageUrl(card.icon?.url)" :alt="card.icon.alternativeText || 'Card Icon'"
                            :width="card.icon.width" :height="card.icon.height" format="webp" />
                    </div>

                    <!-- Title and Content -->
                    <div>
                        <p v-if="card.title"
                            class="font-bold font-chivo text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">
                            {{ card.title }}
                        </p>
                        <p v-if="card.content" class="text-text">{{ card.content }}</p>
                    </div>
                </div>
            </div>

            <div class="w-full bg-gray-200 h-[1px]"></div>
        </div>
    </div>
</template>
<script setup>
import { ref, watchEffect } from 'vue';
import { getImageUrl } from '~/utils/getImageUrl';
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const route = useRoute();
const cardBlockData = ref([]);
import qs from 'qs';
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
                    "Blocks.CardLayoutItems.icon",
                ]
            });

            const { data, error } = await useFetch(
                `${strapiBaseUrl}/api/sitemaps?${queryParams}`
            );

            if (data.value) {
                const blocks = data.value.data[0]?.Blocks || [];
                cardBlockData.value = blocks.filter(block => block.__component === 'page-blocks.card-block-layout-two');
            }
        } catch (error) {
            console.error(error);
        }
    }
});
</script>