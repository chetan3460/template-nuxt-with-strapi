<template>
    <div v-if="testimonialData !== null" class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">
        <div class="items-center justify-between md:flex mb-[30px] md:mb-[80px]">
            <div>
                <h2
                    class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
                    {{ testimonialData.heading }}</h2>
                <p class="text-quote md:text-lead-lg text-gray-600">{{ testimonialData.content }}</p>
            </div>
            <div class="flex items-center gap-5 self-end">
                <div
                    class="tap1 place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-prev grid">
                    <img class="group-hover:filter-white" src="/assets/images/icons/icon-prev.svg"
                        alt="control icon button" />
                </div>
                <div
                    class="tan1 place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-next grid">
                    <img class="group-hover:filter-white" src="/assets/images/icons/icon-next.svg"
                        alt="control icon button" />
                </div>
            </div>
        </div>
        <swiper :slides-per-view="5" :space-between="0" :loop="true" :autoplay="{
            delay: 8000,
            disableOnInteraction: true
        }" :breakpoints="{
            320: {
                slidesPerView: 1
                //   spaceBetween: 30,
            },
            575: {
                slidesPerView: 2
                //   spaceBetween: 30,
            },
            767: {
                slidesPerView: 2
                //   spaceBetween: 30,
            },
            991: {
                slidesPerView: 2
                //   spaceBetween: 30,
            },
            1199: {
                slidesPerView: 3
                //   spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3
                //   spaceBetween: 30,
            }
        }" :pagination="{
            el: '.swiper-pagination',
            clickable: true
        }" :navigation="{
            nextEl: '.tan1',
            prevEl: '.tap1'
        }" :modules="modules" class="feedback-list ml-[-15px]">
            <swiper-slide v-for="(item, index) in testimonialData.testimonialItems" :key="item.id" :virtualIndex="index"
                :virtual="true"
                class="p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4">


                <NuxtImg class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]"
                    :src="getImageUrl(item.image?.url)" :alt="item.image.alternativeText"
                    :width="item.image.width || 50" :height="item.image.height || 50" format="webp" />

                <p class="text-heading-6 font-chivo font-bold mb-[6px]">{{ item.name }}</p>
                <p class="text-sm font-bold mb-5 text-gray-700">{{ item.company }}</p>
                <p class="text-text text-gray-500">{{ item.content }}</p>
            </swiper-slide>

        </swiper>
    </div>
</template>



<script setup>
import { getImageUrl } from '~/utils/getImageUrl';
import { ref } from 'vue';
import { Autoplay, Navigation, Pagination, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import qs from 'qs'; // Import qs for query string handling
// Declare components directly in script setup
const modules = [Autoplay, Pagination, Navigation, Virtual];

const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

const testimonialData = ref([]);

// Define the query string to populate testimonialItems.image field
const query = qs.stringify(
    {
        populate: {
            testimonialItems: {
                populate: ['image'], // Only populate the image field inside testimonialItems
            },
        },
    },
    { encode: false } // Prevent encoding for better readability
);

// Fetch the testimonial-block data
const { data, pending, error, refresh } = await useFetch(`${strapiBaseUrl}/api/testimonial-block?${query}`);

if (data.value) {
    testimonialData.value = data.value.data;
    // You can access testimonialItems and their images in your template
} else if (error.value) {
    console.log(error.value);
} else {
    console.log('Loading...');
}
</script>
