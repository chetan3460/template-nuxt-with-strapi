<template>
    <div v-if="whatWeOfferData !== null" class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">
        <div class="bg-bg-2 relative px-[12px] py-[70px] rounded-[50px]">
            <img class="absolute top-0 left-0 z-0 -translate-x-1/4" src="/assets/images/icons/pattern-4.svg"
                alt="pattern icon" />
            <div class="text-center relative mb-[70px] md:mb-[90px]">
                <h2
                    class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                    {{ whatWeOfferData.heading }}</h2>
                <p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">{{ whatWeOfferData.content
                    }}</p>
            </div>
            <swiper :slides-per-view="5" :space-between="0" :loop="true" :autoplay="{
                delay: 8000,
                disableOnInteraction: true
            }" :breakpoints="{
                320: {
                    slidesPerView: 1
                    // spaceBetween: 30,
                },
                575: {
                    slidesPerView: 2
                    // spaceBetween: 30,
                },
                767: {
                    slidesPerView: 2
                    // spaceBetween: 30,
                },
                991: {
                    slidesPerView: 2
                    // spaceBetween: 30,
                },
                1199: {
                    slidesPerView: 3
                    // spaceBetween: 30,
                },
                1350: {
                    slidesPerView: 3
                    // spaceBetween: 30,
                }
            }" :pagination="{
                el: '.swiper-pagination',
                clickable: true
            }" :navigation="{
                nextEl: '.h1n',
                prevEl: '.h1p'
            }" :modules="modules" class="offer-list dots">
                <swiper-slide v-for="(item, index) in whatWeOfferData.SliderItems" :key="item.id" :virtualIndex="index"
                    :virtual="true"
                    class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white">
                    <NuxtImg class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"
                        :src="getImageUrl(item.sliderImage.url)" :alt="item.sliderImage.alternativeText"
                        :width="item.sliderImage.width || 50" :height="item.sliderImage.height || 50" format="webp" />

                    <h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">{{ item.title }}</h3>
                    <p class="text-text text-gray-600">{{ item.content }}</p>
                </swiper-slide>

            </swiper>
        </div>
    </div>
</template>


<script setup>
import { Autoplay, Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { ref } from "vue";
import { getImageUrl } from "~/utils/getImageUrl";
import qs from "qs"; // Import qs for query string handling

// Declare components directly in script setup
const modules = [Autoplay, Pagination, Navigation, Virtual];

const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
const whatWeOfferData = ref([]);

// Define the query string to populate SliderItems.sliderImage
const query = qs.stringify(
    {
        populate: {
            SliderItems: {
                populate: 'sliderImage' // Ensure only sliderImage is populated
            }
        }
    },
    { encode: false }
);

// Fetch the what-we-offer-block data
const { data, pending, error, refresh } = await useFetch(`${strapiBaseUrl}/api/what-we-offer-block?${query}`);

if (data.value) {
    whatWeOfferData.value = data.value.data;
    // console.log(whatWeOfferData.value);
} else if (error.value) {
    console.log(error.value);
} else {
    console.log('Loading...');
}
</script>
