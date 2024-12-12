<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center lg:mt-[150px]">
        <span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px] md:mb-[43px]">What We Do, What You Get</span>
        <div class="text-center mb-[35px] md:mb-[50px]">
            <h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Advanced analytics to grow your business</h2>
            <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">Get a website to be found on the first page of Google to avoid missing out on potential visitors and sales.</p>
        </div>
        <div class="flex items-center justify-center gap-[22px] mb-[40px] md:mb-[70px]">
            <button type="button">
                <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide" to="#"
                    ><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Start free trial</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                ></NuxtLink>
            </button>
            <button type="button">
                <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white text-heading-6 tracking-wide" to="#"
                    ><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Learn more</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                ></NuxtLink>
            </button>
        </div>
        <div class="relative mx-auto max-w-[1190px]">
            <img class="h-full w-full object-cover rounded-2xl" src="/assets/images/thumbnail-12.png" alt="Agon" />
            <button @click="openVideo" class="rounded-full bg-white grid place-items-center absolute play-video w-[60px] h-[60px] md:w-[138px] md:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><img src="/assets/images/icons/icon-play.svg" alt="play button" width="26" /></button>
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
