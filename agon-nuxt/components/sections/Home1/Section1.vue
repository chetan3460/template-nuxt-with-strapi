<template>
    <div class="full-width banner-hero bg-orange-100 banner-1">
        <div class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center">
            <div class="flex-1">
                <h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[40px]">We are<span class="text-green-900">&nbsp;awesome team&nbsp;</span><span>for your business dream</span></h1>
                <p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[40px]">Integrated workflow designed for product teams. We create world-class development and branding</p>
                <div class="flex items-center justify-start">
                    <button type="button">
                        <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px] hover:translate-y-[-2px]" to="#"
                            ><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Get Start</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                        ></NuxtLink>
                    </button>
                    <NuxtLink class="text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]" to="/"
                        >Learn More <i> <img class="ml-[7px] w-[12px]" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                    ></NuxtLink>
                </div>
            </div>
            <div class="hidden relative flex-1 h-auto self-stretch lg:block">
                <div class="absolute w-full left-20 animate-hero-thumb-sm-animation bottom-[-60px] max-w-[526px]">
                    <img class="h-full w-full object-cover" src="/assets/images/hero-1.png" alt="Agon" />
                </div>
                <div class="absolute opacity-80 animate-float max-w-[176px] bottom-[10%] -translate-x-1/3">
                    <div class="relative bg-green-900 bg-opacity-80 rounded-2xl grid place-items-center">
                        <img class="h-full w-full object-cover" src="/assets/images/video-bg.png" alt="Agon" />
                        <p class="text-heading-4 absolute text-white font-chivo font-bold ml-[49px]">Watch intro video</p>
                        <button @click="openVideo" class="rounded-full bg-white grid place-items-center absolute play-video w-[64px] h-[64px] left-[-15%]"><img src="/assets/images/icons/icon-play.svg" alt="play button" width="15" /></button>
                    </div>
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
