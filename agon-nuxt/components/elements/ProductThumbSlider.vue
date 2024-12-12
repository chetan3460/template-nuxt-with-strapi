<template>
    <div class="lg:w-[65%] xl:w-[75%] lg:ml-6 lg:mr-1 product-image-left">
        <swiper
            :spaceBetween="10"
            :navigation="{
                nextEl: '.product-single-next',
                prevEl: '.product-single-prev'
            }"
            :thumbs="{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }"
            :modules="modules"
            class="product-main mb-[30px]"
        >
            <swiper-slide class="border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]">
                <div class="relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-1.png)]"><img class="absolute top-0 right-0" src="/assets/images/icons/icon-zoom-in.svg" alt="zoom in icon" /><img class="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0" src="/assets/images/product-1.png" alt="image of a product" /></div>
            </swiper-slide>
            <swiper-slide class="border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]">
                <div class="relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-2.png)]"><img class="absolute top-0 right-0" src="/assets/images/icons/icon-zoom-in.svg" alt="zoom in icon" /><img class="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0" src="/assets/images/product-2.png" alt="image of a product" /></div>
            </swiper-slide>
            <swiper-slide class="border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]">
                <div class="relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-3.png)]"><img class="absolute top-0 right-0" src="/assets/images/icons/icon-zoom-in.svg" alt="zoom in icon" /><img class="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0" src="/assets/images/product-3.png" alt="image of a product" /></div>
            </swiper-slide>
            <swiper-slide class="border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]">
                <div class="relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-4.png)]"><img class="absolute top-0 right-0" src="/assets/images/icons/icon-zoom-in.svg" alt="zoom in icon" /><img class="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0" src="/assets/images/product-4.png" alt="image of a product" /></div>
            </swiper-slide>
        </swiper>
    </div>
    <div class="z-1 order-first overflow-y-scroll scrollbar-hide lg:w-[35%] xl:w-[25%] max-h-[430px]">
        <swiper @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="3" :modules="modules" :direction="'vertical'">
            <swiper-slide class="product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]">
                <img class="w-full object-cover min-w-[91px]" src="/assets/images/product-1.png" alt="image of a product" />
            </swiper-slide>
            <swiper-slide class="product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]">
                <img class="w-full object-cover min-w-[91px]" src="/assets/images/product-2.png" alt="image of a product" />
            </swiper-slide>
            <swiper-slide class="product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]">
                <img class="w-full object-cover min-w-[91px]" src="/assets/images/product-3.png" alt="image of a product" />
            </swiper-slide>
            <swiper-slide class="product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]">
                <img class="w-full object-cover min-w-[91px]" src="/assets/images/product-4.png" alt="image of a product" />
            </swiper-slide>
        </swiper>
    </div>
    <div class="z-2 grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-single-prev absolute left-0 translate-y-[-75px] lg:bottom-0 lg:translate-y-0 lg:translate-x-[75%] lg:top-[52%] xl:translate-x-[45%] xl:top-[66%] lg:-rotate-90">
        <img class="group-hover:filter-white" src="/assets/images/icons/icon-arrow-left.svg" alt="control icon button" />
    </div>
    <div class="z-2 grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-single-next absolute right-0 translate-y-[-75px] lg:bottom-0 lg:translate-y-0 lg:left-[50px] lg:translate-x-[75%] lg:top-[52%] xl:left-[60px] xl:translate-x-[45%] xl:top-[66%] lg:-rotate-90">
        <img class="group-hover:filter-white" src="/assets/images/icons/icon-arrow-right.svg" alt="control icon button" />
    </div>
</template>
<script>
import { ref } from "vue";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Navigation, Thumbs } from "swiper/modules";
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const thumbsSwiper = ref(null);
        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };
        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [Navigation, Thumbs]
        };
    }
};
</script>
