<template>
    <template v-if="style === 1">
        <button @click="openVideo">Play</button>
    </template>
    <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
</template>
<script setup>
const props = defineProps(["style"]);
</script>
<script>
import ModalVideo from "./ModalVideo.vue";
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
