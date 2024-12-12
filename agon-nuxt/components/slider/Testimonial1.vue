<template>
    <swiper
        :slides-per-view="5"
        :space-between="0"
        :loop="true"
        :autoplay="{
            delay: 8000,
            disableOnInteraction: true
        }"
        :breakpoints="{
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
        }"
        :pagination="{
            el: '.swiper-pagination',
            clickable: true
        }"
        :navigation="{
            nextEl: '.tan1',
            prevEl: '.tap1'
        }"
        :modules="modules"
        class="feedback-list ml-[-15px]"
    >
        <swiper-slide class="p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4">
            <img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]" src="/assets/images/avatar-1.png" alt="avatar" />
            <p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
            <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
            <p class="text-text text-gray-500">Even factoring differences in body weight between children and adults into account.</p>
        </swiper-slide>
        <swiper-slide class="p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6">
            <img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]" src="/assets/images/avatar-2.png" alt="avatar" />
            <p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
            <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
            <p class="text-text text-gray-500">Even factoring differences in body weight between children and adults into account.</p>
        </swiper-slide>
        <swiper-slide class="p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10">
            <img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]" src="/assets/images/avatar-3.png" alt="avatar" />
            <p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
            <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
            <p class="text-text text-gray-500">Even factoring differences in body weight between children and adults into account.</p>
        </swiper-slide>
        <swiper-slide class="p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9">
            <img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]" src="/assets/images/avatar-4.png" alt="avatar" />
            <p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
            <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
            <p class="text-text text-gray-500">Even factoring differences in body weight between children and adults into account.</p>
        </swiper-slide>
        <swiper-slide class="p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4">
            <img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]" src="/assets/images/avatar-5.png" alt="avatar" />
            <p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
            <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
            <p class="text-text text-gray-500">Even factoring differences in body weight between children and adults into account.</p>
        </swiper-slide>
        <swiper-slide class="p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6">
            <img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]" src="/assets/images/avatar-6.png" alt="avatar" />
            <p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
            <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
            <p class="text-text text-gray-500">Even factoring differences in body weight between children and adults into account.</p>
        </swiper-slide>
        <swiper-slide class="p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10">
            <img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]" src="/assets/images/avatar-7.png" alt="avatar" />
            <p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
            <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
            <p class="text-text text-gray-500">Even factoring differences in body weight between children and adults into account.</p>
        </swiper-slide>
        <swiper-slide class="p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9">
            <img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]" src="/assets/images/avatar-8.png" alt="avatar" />
            <p class="text-heading-6 font-chivo font-bold mb-[6px]">Wade Warren</p>
            <p class="text-sm font-bold mb-5 text-gray-700">Louis Vuitton</p>
            <p class="text-text text-gray-500">Even factoring differences in body weight between children and adults into account.</p>
        </swiper-slide>
    </swiper>
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation]
        };
    }
};
</script>
