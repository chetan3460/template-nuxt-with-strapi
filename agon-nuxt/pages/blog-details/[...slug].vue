<!-- <template>
    <div v-if="pending">Loading...</div>
    <BlogDetails v-if="!pending && details.length" v-bind:blogDetails="details[0]" />
    <div v-else-if="!pending && details.length === 0">Blog not found.</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BlogDetails from '~/components/BlogPost/BlogDetails.vue';

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
</script> -->

<script setup>
import BlogDetails from '~/components/BlogPost/BlogDetails.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// Get the slug from the route parameters
const slug = route.params.slug;

// Fetch blog details and related blogs
const { data: blogData, pending: isLoading, error } = await useFetch(
    `${strapiBaseUrl}/api/blogs?filters[slug][$eq]=${slug}&populate=*`
);
const { data: relatedBlogs } = await useFetch(
    `${strapiBaseUrl}/api/blogs?filters[slug][$ne]=${slug}&populate=*`
);
</script>

<template>
    <!-- Loading State -->
    <div v-if="isLoading" class="flex items-center justify-center min-h-screen bg-gray-100 text-center">
        <p class="text-xl text-gray-600 font-semibold">Loading...</p>
    </div>

    <!-- Blog Not Found -->
    <div v-else-if="error || !blogData || !blogData.data || blogData.data.length === 0"
        class="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1
            class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-7 text-gray-800">
            Whoops! That page doesn’t exist.
        </h1>
        <p class="font-bold font-chivo text-[14px] xl:text-heading-5 text-gray-500 mb-[70px]">
            Sorry, the blog you are looking for does not exist or may have been removed.
        </p>
        <NuxtLink to="/"
            class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 flex-row-reverse">
            <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">
                Back to Homepage
            </span>
            <i>
                <img class="mr-4 rotate-180 filter-white w-[12px] group-hover:filter-black"
                    src="/assets/images/icons/icon-right.svg" alt="arrow right icon" />
            </i>
        </NuxtLink>
    </div>

    <!-- Blog Details -->
    <div v-else>
        <BlogDetails :blogDetails="blogData.data[0]" :relatedBlogs="relatedBlogs.data || []" />
    </div>
</template>
