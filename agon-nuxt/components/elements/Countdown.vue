<template>
    <div class="flex items-center justify-center gap-[25px]">
        <div>
            <div class="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]">
                <p class="text-heading-5 font-bold font-chivo text-green-1000">{{ timeParts.days }}</p>
                <img class="absolute right-[-28%]" src="/assets/images/icons/icon-colon.svg" alt="colon icon" />
            </div>
            <p class="text-tiny font-semibold text-gray-500 text-center">Days</p>
        </div>
        <div>
            <div class="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]">
                <p class="text-heading-5 font-bold font-chivo text-green-1000">{{ timeParts.hours }}</p>
                <img class="absolute right-[-28%]" src="/assets/images/icons/icon-colon.svg" alt="colon icon" />
            </div>
            <p class="text-tiny font-semibold text-gray-500 text-center">Hours</p>
        </div>
        <div>
            <div class="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]">
                <p class="text-heading-5 font-bold font-chivo text-green-1000">{{ timeParts.minutes }}</p>
                <img class="absolute right-[-28%]" src="/assets/images/icons/icon-colon.svg" alt="colon icon" />
            </div>
            <p class="text-tiny font-semibold text-gray-500 text-center">Minutes</p>
        </div>
        <div>
            <div class="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]">
                <p class="text-heading-5 font-bold font-chivo text-green-1000">{{ timeParts.seconds }}</p>
            </div>
            <p class="text-tiny font-semibold text-gray-500 text-center">Seconds</p>
        </div>
    </div>
</template>
<script setup>
const { countDay } = defineProps(["countDay"]);
import { onMounted, onUnmounted, ref } from "vue";
const msInSecond = 1000;
const msInMinute = 60 * msInSecond;
const msInHour = 60 * msInMinute;
const msInDay = 24 * msInHour;
const getPartsOfTimeDuration = (duration) => {
    const days = Math.floor(duration / msInDay);
    const hours = Math.floor((duration % msInDay) / msInHour);
    const minutes = Math.floor((duration % msInHour) / msInMinute);
    const seconds = Math.floor((duration % msInMinute) / msInSecond);
    return { days, hours, minutes, seconds };
};
const currentTime = new Date();
currentTime.setDate(currentTime.getDate() + countDay);
const targetDate = ref(currentTime);
const timeRemaining = ref(targetDate.value.getTime() - Date.now());
const timeParts = ref(getPartsOfTimeDuration(timeRemaining.value));
const updateCountdown = () => {
    timeRemaining.value = Math.max(targetDate.value.getTime() - Date.now(), 0);
    timeParts.value = getPartsOfTimeDuration(timeRemaining.value);
};
onMounted(() => {
    const intervalId = setInterval(updateCountdown, 1000);
    onUnmounted(() => {
        clearInterval(intervalId);
    });
});
</script>
<style scoped>
.countdown-clock {
    display: flex;
}
.item {
    margin-right: 10px;
}
.number {
    font-size: 24px;
    font-weight: bold;
}
.text {
    font-size: 14px;
}
</style>
