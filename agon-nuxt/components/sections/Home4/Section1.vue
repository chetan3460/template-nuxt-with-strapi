<template>
    <div class="full-width banner-hero bg-green-900">
        <div class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center">
            <div class="lg:w-[60%] lg:mr-[150px]">
                <h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] text-white mb-[30px]">Advanced analytics to grow your business</h1>
                <p class="text-quote md:text-lead-lg text-gray-200 pr-[40px] lg:pr-[60px] mb-[44px]">Integrated workflow designed for product teams. We create world-class development and branding</p>
                <div class="flex items-center justify-start mb-[50px]">
                    <button type="button">
                        <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-orange-900 text-white hover:bg-gray-900 text-heading-6 tracking-wide mr-[22px]" to="#"
                            ><span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">Get Start</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-white" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                        ></NuxtLink>
                    </button>
                    <NuxtLink class="text-base flex items-center font-chivo font-medium text-white text-[18px] leading-[18px] gap-[5px]" to="/">Learn More</NuxtLink>
                </div>
                <div class="flex items-center gap-14">
                    <div>
                        <p class="text-heading-4 font-bold font-chivo text-white">5000+</p>
                        <p class="text-md text-gray-300">Happy Clients</p>
                    </div>
                    <div>
                        <p class="text-heading-4 font-bold font-chivo text-white">756+</p>
                        <p class="text-md text-gray-300">Project Done</p>
                    </div>
                    <div>
                        <p class="text-heading-4 font-bold font-chivo text-white">100%</p>
                        <p class="text-md text-gray-300">Client Satisfaction</p>
                    </div>
                </div>
            </div>
            <div class="hidden relative lg:block">
                <img class="h-full w-full object-cover animate-hero-thumb-sm-animation" src="/assets/images/hero-4.png" alt="Agon" />
                <div class="bg-green-900 rounded-full left-0 absolute grid place-items-center md:w-[108px] md:h-[108px] top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <button @click="openVideo" class="rounded-full bg-white grid place-items-center absolute play-video left-auto w-[60px] h-[60px] md:w-[91px] md:h-[91px]"><img src="/assets/images/icons/icon-play.svg" alt="play button" width="26" /></button>
                </div>
            </div>
        </div>
    </div>
    <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
</template>
<script>
import ModalVideo from "../components/elements/ModalVideo.vue";
export default {
    components: {
        ModalVideo
    },
    data: () => {
        return {
            videoIsOpen: false
        };
    },
    methods: {
        openVideo() {
            this.videoIsOpen = !this.videoIsOpen;
        }
    },
    computed: {
        videoChannel: function () {
            //Logic to extract based on URL
            return "youtube";
        },
        videoId: function () {
            //Logic to extract based on URL
            return "QiqQoqtnHrk";
        }
    }
};
</script>
