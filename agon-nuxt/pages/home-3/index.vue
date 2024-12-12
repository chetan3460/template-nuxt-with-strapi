<template>
    <div>
        <SectionsHome3Section1 />
        <SectionsHome3Section2 />
        <SectionsHome3Section3 />
        <SectionsHome3Section4 />
        <SectionsHome3Section5 />
        <SectionsHome3Section6 />
        <SectionsHome3Section7 />
        <SectionsHome3Section8 />
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'layout2'
})


useHead({
    bodyAttrs: {
        class: "overflow-x-hidden w-screen relative home-page-3"
    },
})
</script>
