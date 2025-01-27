<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">
        <!-- Check if blogData exists and render the heading and description -->
        <div v-if="blogData !== null" class="items-center justify-between mb-[70px] md:mb-[90px] md:flex">
            <div>
                <h2
                    class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
                    {{ blogData.heading }}
                </h2>
                <p class="text-quote md:text-lead-lg text-gray-600">{{ blogData.shortDesc }}</p>
            </div>
            <button type="button">
                <NuxtLink
                    class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black w-fit"
                    :to="blogData.btnLink">
                    <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">{{
                        blogData.btnText }}</span>
                    <i>
                        <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                            src="/assets/images/icons/icon-right.svg" alt="arrow right icon" />
                    </i>
                </NuxtLink>
            </button>
        </div>

        <!-- Display the BlogItem components for the first 3 blog posts -->
        <div class="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
            <!-- Check if blogPostData has at least 3 items -->
            <BlogItem :blogPostData="blogPostData.slice(0, 3)" />
        </div>
    </div>
</template>

<!-- <script setup>
import { ref, onMounted } from 'vue';
import BlogItem from '~/components/BlogPost/BlogItem.vue';

// Initialize data for blog posts and other data
const blogData = ref(null); // For the blog data (heading, description, etc.)
const blogPostData = ref([]);  // For blog posts data

// Fetch data from both endpoints
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

const { data: blogDataResponse, error: blogDataError, pending: blogDataPending } = await useFetch(`${strapiBaseUrl}/api/blog-post`);
const { data: blogPostDataResponse, error: blogPostDataError, pending: blogPostDataPending } = await useFetch(`${strapiBaseUrl}/api/blogs?populate=*`);

onMounted(() => {
    // Log the data for debugging
    // console.log('Blog Data Response:', blogDataResponse.value);
    // console.log('Blog Post Data Response:', blogPostDataResponse.value);

    // Check and assign the fetched data to the corresponding variables
    if (blogDataResponse.value) {
        blogData.value = blogDataResponse.value.data; // Correcting to use `data` directly
        // console.log('Blog Data:', blogData.value);
    } else if (blogDataError.value) {
        console.error('Error fetching blog data:', blogDataError.value);
    }

    if (blogPostDataResponse.value) {
        blogPostData.value = blogPostDataResponse.value.data; // Assign blog post data
        // console.log('Blog Post Data:', blogPostData.value);
    } else if (blogPostDataError.value) {
        console.error('Error fetching blog post data:', blogPostDataError.value);
    }
});
</script> -->



<script setup>
import { ref, onMounted } from 'vue';
import BlogItem from '~/components/BlogPost/BlogItem.vue';
import qs from 'qs'; // Import qs for query string serialization

// Initialize data for blog posts and other data
const blogData = ref(null); // For the blog data (heading, description, etc.)
const blogPostData = ref([]);  // For blog posts data

// Fetch data from both endpoints using qs
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// Prepare query strings (if needed)
const blogQuery = qs.stringify({ populate: '*' });  // Add any query parameters for the blog data
const blogPostQuery = qs.stringify({ populate: '*' });  // Add any query parameters for the blog posts

const { data: blogDataResponse, error: blogDataError, pending: blogDataPending } = await useFetch(`${strapiBaseUrl}/api/blog-post?${blogQuery}`);
const { data: blogPostDataResponse, error: blogPostDataError, pending: blogPostDataPending } = await useFetch(`${strapiBaseUrl}/api/blogs?${blogPostQuery}`);

onMounted(() => {
    // Log the data for debugging
    // console.log('Blog Data Response:', blogDataResponse.value);
    // console.log('Blog Post Data Response:', blogPostDataResponse.value);

    // Check and assign the fetched data to the corresponding variables
    if (blogDataResponse.value) {
        blogData.value = blogDataResponse.value.data; // Correcting to use `data` directly
        // console.log('Blog Data:', blogData.value);
    } else if (blogDataError.value) {
        console.error('Error fetching blog data:', blogDataError.value);
    }

    if (blogPostDataResponse.value) {
        blogPostData.value = blogPostDataResponse.value.data; // Assign blog post data
        // console.log('Blog Post Data:', blogPostData.value);
    } else if (blogPostDataError.value) {
        console.error('Error fetching blog post data:', blogPostDataError.value);
    }
});
</script>
