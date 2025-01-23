<template>
    <div class="full-width bg-bg-6 lg:py-20 py-14">
        <div class="text-center px-5">
            <h1
                class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-7">
                Our Blog</h1>
            <p class="font-bold font-chivo text-[14px] md:text-heading-6 text-gray-600 mx-auto md:max-w-[55ch] mb-10">
                From year to year we strive to invent the most innovative technology that is used by both small
                enterprises and space enterprises.</p>
        </div>

        <div class="rounded-2xl gap-5 mx-auto md:flex lg:gap-[40px] max-w-[700px]">
            <div class="flex-1 mb-[30px] px-[12px] md:px-[36px] xl:px-0 ">
                <form @submit.prevent="handleSearch">
                    <div class="bg-white flex items-center justify-between p-3 rounded-[55px] relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input v-model="searchQuery"
                            class="block w-full ps-10 text-base text-gray-900 rounded-lg outline-0" type="text"
                            placeholder="Search blogs..." />
                        <button class="rounded-full bg-green-900 grid place-items-center w-[60px] h-[56px] min-w-[60px]"
                            type="submit">
                            <img class="filter-white" src="/assets/images/icons/icon-right.svg" alt="" />
                        </button>
                    </div>
                </form>
            </div>



        </div>
        <!-- <SearchForm @search="updateSearchQuery" /> -->

        <div v-if="searchQuery"
            class="p-4 mb-4 text-base text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 text-center max-w-[800px] mx-auto"
            role="alert">

            <span class="font-medium"> {{ filteredBlogs.length }} result</span>{{ filteredBlogs.length !== 1 ? 's' : ''
            }} found for "{{ searchQuery }}"
        </div>

    </div>

    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[138px]">
        <!-- Blog Cards Display -->
        <div class="lg:grid lg:grid-cols-3 lg:gap-x-3 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
            <!-- Display blog posts -->
            <BlogItem :blogPostData="filteredBlogs.slice(0, visibleBlogsCount)" />
        </div>



        <!-- Load More Button -->
        <button v-if="visibleBlogsCount < filteredBlogs.length" type="button" @click="loadMorePosts"
            class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit mx-auto mt-[70px] lg:mt-[112px]">
            <span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Load more
                posts</span>
            <i>
                <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                    src="/assets/images/icons/icon-right.svg" alt="arrow right icon" />
            </i>
        </button>

        <!-- No Results Message -->
        <div v-if="filteredBlogs.length === 0 && searchQuery"
            class="w-full p-4 mb-4 text-base text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 text-center inline-block "
            role="alert">
            <span class="font-medium">No results found for
                "{{ searchQuery }}"</span>
        </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import BlogItem from '~/components/BlogPost/BlogItem.vue';
import SearchForm from './SearchForm.vue';
// Initialize the blog data
const blogPostData = ref([]);

// Search query
const searchQuery = ref('');

// Track how many blogs to display
const visibleBlogsCount = ref(3); // Start by showing 3 blogs

// Fetch blog data from Strapi API
const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;

// Set a valid API endpoint URL (ensure this is correct based on your Strapi setup)
const apiEndpoint = `${strapiBaseUrl}/api/blogs?populate=*`;

// Fetch the blog data with error handling
const { data, error, pending } = await useFetch(apiEndpoint);

// Log out the error or data for debugging
onMounted(() => {
    if (error.value) {
        console.error('Error fetching blog data:', error.value); // Log error for debugging
    } else if (data.value) {
        // console.log('Fetched data:', data.value); 
        // Log data to check if it's correct
        blogPostData.value = data.value.data || []; // Store the fetched blog data
    } else {
        console.log('Loading...');
    }
});

// Filtered blog posts based on search query
const filteredBlogs = computed(() => {
    // console.log('Search Query:', searchQuery.value); 
    // // Log search query
    // console.log('Blog Data:', blogPostData.value); 
    // Log blog data to inspect structure

    if (!searchQuery.value) {
        return blogPostData.value; // If search is empty, return all blogs
    }

    // Filter blogs based on title and content (richText)
    return blogPostData.value.filter((blog) => {
        // Access title and richText directly
        const title = blog?.title?.toLowerCase() || '';
        const content = blog?.richText?.toLowerCase() || '';

        // Log for debugging
        console.log('Blog Title:', title);
        console.log('Blog Content:', content);

        // Perform case-insensitive search only if title and content are non-empty strings
        return title.includes(searchQuery.value.toLowerCase()) ||
            content.includes(searchQuery.value.toLowerCase());
    });
});




// Function to load more posts
const loadMorePosts = () => {
    if (visibleBlogsCount.value + 3 <= filteredBlogs.value.length) {
        visibleBlogsCount.value += 3; // Increment the number of visible blogs by 3
    } else {
        visibleBlogsCount.value = filteredBlogs.value.length; // If there are fewer than 3 posts left, show all remaining posts
    }
};

// Handle search functionality
const handleSearch = () => {
    visibleBlogsCount.value = 3; // Reset visible blogs count when searching
};
</script>
