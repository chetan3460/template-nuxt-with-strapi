<template>
    <header class="h-auto full-width relative py-[15px] first-letter:lg:py-[26px]" :class="{ 'sticky-header': scroll }">
        <div
            class="px-[12px] md:px-[36px] xl:px-0 mt-0 flex items-center justify-between mx-auto relative max-w-[1320px]">
            <NuxtLink class="flex" href="/"><img class="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]"
                    src="/assets/images/logo.svg" alt="logo image" /></NuxtLink>
            <nav class="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block">
                <LayoutMenu />
            </nav>

        </div>
    </header>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
const scroll = ref(false);
const handleScroll = () => {
    const scrollCheck = window.scrollY > 100;
    if (scrollCheck !== scroll.value) {
        scroll.value = scrollCheck;
    }
};
onMounted(() => {
    document.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
    document.removeEventListener("scroll", handleScroll);
});
</script>
