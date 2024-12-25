<template>
    <div v-if="pending">Loading...</div>
    <BlogDetails v-if="!pending && details.length" v-bind:blogDetails="details[0]" />
    <div v-else-if="!pending && details.length === 0">Blog not found.</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BlogDetails from '~/components/BlogDetails.vue';

const route = useRoute();
const details = ref([]);
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// Get the slug from the route parameters
const slug = route.params.slug ? route.params.slug : '';

// Use the useFetch hook to fetch the blog details
const { data, pending, error } = await useFetch(`${strapiBaseUrl}/api/blogs?filters[slug][$eq]=${slug}&populate=*`);

onMounted(() => {
    if (data.value) {
        details.value = data.value.data; // Assign the fetched data to details
        console.log(details.value);
    } else if (error.value) {
        console.error('Error fetching blog details:', error.value);
    }
});
</script>
