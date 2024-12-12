<template>
    <div class="flex items-center z-10 relative gap-[30px] lg:gap-[50px]">
        <div class="place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 blog-prev hidden md:grid">
            <img class="group-hover:filter-white" src="/assets/images/icons/icon-prev.svg" alt="control icon button" />
        </div>
        <swiper
            :slides-per-view="1"
            :space-between="0"
            :loop="true"
            :autoplay="{
                delay: 8000,
                disableOnInteraction: true
            }"
            :pagination="{
                el: '.swiper-pagination',
                clickable: true
            }"
            :navigation="{
                nextEl: '.blog-next',
                prevEl: '.blog-prev'
            }"
            :modules="modules"
            class="blog-post flex-1 w-[80%]"
        >
            <swiper-slide class="relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]">
                <div class="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row">
                    <NuxtLink class="block self-stretch flex-1 aspect-[580/421]" to="#"><img class="h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl" src="/assets/images/thumbnail-4.png" alt="Agon" /></NuxtLink>
                    <div class="flex-1">
                        <div class="my-[60px] mr-[50px]">
                            <div class="flex items-center mb-3">
                                <div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                                <span class="uppercase text-gray-500">Marketing Event</span>
                            </div>
                            <h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5">
                                <NuxtLink to="#">How To Blow Through Capital At An Incredible Rate</NuxtLink>
                            </h2>
                            <p class="text-text text-gray-500 mb-[44px]">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam.</p>
                            <div class="flex items-center gap-[15px]">
                                <img class="h-full w-full object-cover rounded-full max-w-[55px]" src="/assets/images/avatar-11.png" alt="avatar" />
                                <div>
                                    <p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6">Jenny Wilson</p>
                                    <p class="text-sm font-bold">August 25, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]">
                    <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                </div>
            </swiper-slide>
            <swiper-slide class="relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]">
                <div class="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row">
                    <NuxtLink class="block self-stretch flex-1 aspect-[580/421]" to="#"><img class="h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl" src="/assets/images/thumbnail-4.png" alt="Agon" /></NuxtLink>
                    <div class="flex-1">
                        <div class="my-[60px] mr-[50px]">
                            <div class="flex items-center mb-3">
                                <div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                                <span class="uppercase text-gray-500">Marketing Event</span>
                            </div>
                            <h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5">
                                <NuxtLink to="#">How To Blow Through Capital At An Incredible Rate</NuxtLink>
                            </h2>
                            <p class="text-text text-gray-500 mb-[44px]">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam.</p>
                            <div class="flex items-center gap-[15px]">
                                <img class="h-full w-full object-cover rounded-full max-w-[55px]" src="/assets/images/avatar-11.png" alt="avatar" />
                                <div>
                                    <p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6">Jenny Wilson</p>
                                    <p class="text-sm font-bold">August 25, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]">
                    <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                </div>
            </swiper-slide>
            <swiper-slide class="relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]">
                <div class="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row">
                    <NuxtLink class="block self-stretch flex-1 aspect-[580/421]" to="#"><img class="h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl" src="/assets/images/thumbnail-4.png" alt="Agon" /></NuxtLink>
                    <div class="flex-1">
                        <div class="my-[60px] mr-[50px]">
                            <div class="flex items-center mb-3">
                                <div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                                <span class="uppercase text-gray-500">Marketing Event</span>
                            </div>
                            <h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5">
                                <NuxtLink to="#">How To Blow Through Capital At An Incredible Rate</NuxtLink>
                            </h2>
                            <p class="text-text text-gray-500 mb-[44px]">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam.</p>
                            <div class="flex items-center gap-[15px]">
                                <img class="h-full w-full object-cover rounded-full max-w-[55px]" src="/assets/images/avatar-11.png" alt="avatar" />
                                <div>
                                    <p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6">Jenny Wilson</p>
                                    <p class="text-sm font-bold">August 25, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]">
                    <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 blog-next hidden md:grid">
            <img class="group-hover:filter-white" src="/assets/images/icons/icon-next.svg" alt="control icon button" />
        </div>
    </div>
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
