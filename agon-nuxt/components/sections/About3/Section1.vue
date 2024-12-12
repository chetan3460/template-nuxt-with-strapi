<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center">
        <div class="text-center mb-[35px] md:mb-[43px]">
            <h2
                class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">
                Our Story</h2>
            <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
            </p>
        </div>
        <h3
            class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 text-gray-600 mx-auto mb-[40px] md:mb-[75px] md:w-[47ch]">
            We supply enterprises, organizations and institutes of high-tech industries with modern components. We build
            long-term trusting relationships with our customers and partnes for further fruitful cooperations.
        </h3>
        <div class="relative mx-auto max-w-[1190px]"><img class="h-full w-full object-cover rounded-2xl"
                src="/assets/images/thumbnail-23.png" alt="Agon">
            <button @click="openVideo"
                class="rounded-full bg-white grid place-items-center absolute play-video w-[60px] h-[60px] md:w-[138px] md:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><img
                    src="/assets/images/icons/icon-play.svg" alt="play button" width="26"></button>
        </div>
    </div>
    <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
</template>
<script>
import ModalVideo from '../components/elements/ModalVideo.vue'
export default {
    components: {
        ModalVideo
    },
    data: () => {
        return {
            videoIsOpen: false
        }
    },
    methods: {
        openVideo() {
            this.videoIsOpen = !this.videoIsOpen
        }
    },
    computed: {
        videoChannel: function () {
            //Logic to extract based on URL
            return 'youtube'
        },
        videoId: function () {
            //Logic to extract based on URL
            return 'QiqQoqtnHrk'
        }
    }
}
</script>