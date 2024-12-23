<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[100px]">
        <div v-if="whatWeDoData !== null" class="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]">
            <div class="relative">
                <NuxtImg :src="`${strapiBaseUrl}${whatWeDoData.Image.url}`" :alt="whatWeDoData.Image.alternativeText"
                    :width="whatWeDoData.Image.width || 637" :height="whatWeDoData.Image.height || 738" format="webp"
                    class="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1" />

            </div>
            <div class="flex-1 order-1">
                <span v-if="whatWeDoData.Subtitle"
                    class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">{{
                        whatWeDoData.Subtitle
                    }}</span>
                <h3 v-if="whatWeDoData.Heading"
                    class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">
                    {{ whatWeDoData.Heading }}</h3>
                <p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">{{ whatWeDoData.Content }}</p>

                <div class="border border-green-900 border-dashed mb-[48px]"></div>
                <div v-if="whatWeDoData.ListItems" class="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]">
                    <div v-for="(item, index) in whatWeDoData.ListItems" :key="item.id" class="mb-[30px] lg:mb-0">
                        <div class="flex items-center mb-[17px]">
                            <img class="mr-[9px]" src="/assets/images/icons/icon-leaf.svg" alt="leaf icon" />
                            <h4 class="text-heading-6 font-chivo font-bold">{{ item.Title }}</h4>
                        </div>
                        <p class="text-excerpt text-gray-600">{{ item.description }}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const whatWeDoData = ref([]);

const { data, pending, error, refresh } = await useFetch(`${strapiBaseUrl}/api/what-we-do-block?populate=*`);

if (data.value) {
    whatWeDoData.value = data.value.data;
    // console.log(whatWeDoData.value);
} else if (error.value) {
    console.log(error.value);
} else {
    console.log('Loading...');
}

</script>
