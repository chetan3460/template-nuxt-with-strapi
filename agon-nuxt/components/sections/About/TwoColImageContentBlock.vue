<template>
    <div v-if="cardBlockData?.length">
        <div v-for="item in cardBlockData" :key="item.id" class="px-3 md:px-9 xl:px-0 mt-16 lg:mt-32">
            <div class="text-center mb-8 md:mb-20">
                <h2 v-if="item.title"
                    class="font-bold font-chivo text-3xl md:text-5xl text-gray-900 mb-4 max-w-3xl mx-auto">
                    {{ item.title }}
                </h2>
                <p v-if="item.content" class="text-gray-600 max-w-4xl mx-auto">{{ item.content }}</p>
            </div>

            <div v-if="item.TwoCardsReapeater?.length" class="mx-auto lg:flex gap-8 max-w-5xl">
                <div v-for="(card, pIndex) in item.TwoCardsReapeater" :key="card.id"
                    class="text-center rounded-2xl p-5 md:p-10 mb-20 lg:mb-0 transition hover:-translate-y-1 bg-bg-{{ pIndex + 1 }}">

                    <h3 v-if="card.title" class="font-bold text-xl md:text-2xl mb-4">
                        {{ card.title }}
                    </h3>
                    <p v-if="card.content" class="text-gray-600 mb-4">{{ card.content }}</p>

                    <img class="p-5 rounded-2xl object-cover mx-auto w-full bg-gray-200"
                        :src="getImageUrl(card.icon?.url)" :alt="card.icon?.alternativeText || 'Feature image'" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getImageUrl } from '~/utils/getImageUrl';
import qs from 'qs';

const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const route = useRoute();

const { data: cardBlockData } = await useAsyncData(`two-col-block-${route.params.slug}`, async () => {
    const queryParams = qs.stringify({
        filters: { PageURL: { $eq: route.params.slug } },
        populate: "Blocks.TwoCardsReapeater.icon",
    });

    const response = await fetch(`${strapiBaseUrl}/api/sitemaps?${queryParams}`);
    return (await response.json())?.data?.[0]?.Blocks?.filter(block => block.__component === 'page-blocks.two-col-image-content-block') ?? [];
});
</script>
