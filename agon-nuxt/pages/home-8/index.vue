<template>
    <div>
        <SectionsHome8Section1 />
        <SectionsHome8Section2 />
        <SectionsHome8Section3 />
        <SectionsHome8Section4 />
        <SectionsHome8Section5 />
        <SectionsHome8Section6 />
        <SectionsHome8Section7 />
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'layout2'
})

useHead({
    bodyAttrs: {
        class: "overflow-x-hidden w-screen relative home-page-8"
    },
})
</script>
