<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[234px]">
        <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-bg-2">
            <div class="relative mx-auto max-w-[1190px] -translate-y-[50%] md:-translate-y-[30%] mb-[-50px]">
                <img class="h-full w-full object-cover rounded-2xl" src="/assets/images/thumbnail-12.png" alt="Agon" />
                <button @click="openVideo" class="rounded-full bg-white grid place-items-center absolute play-video w-[100px] h-[100px] lg:w-[138px] lg:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><img src="/assets/images/icons/icon-play.svg" alt="play button" width="26" /></button>
            </div>
            <div class="lg:flex lg:items-center gap-[30px]">
                <div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0">
                    <img class="h-full w-full object-cover max-w-[64px]" src="/assets/images/icons/icon-resources.svg" alt="icon" />
                    <div>
                        <h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">1. Acquisition</h3>
                        <p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                    </div>
                </div>
                <div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0">
                    <img class="h-full w-full object-cover max-w-[64px]" src="/assets/images/icons/icon-cards.svg" alt="icon" />
                    <div>
                        <h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">2. Activation</h3>
                        <p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
                    </div>
                </div>
                <div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px]">
                    <img class="h-full w-full object-cover max-w-[64px]" src="/assets/images/icons/icon-stats.svg" alt="icon" />
                    <div>
                        <h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">3. Retention</h3>
                        <p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p>
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
