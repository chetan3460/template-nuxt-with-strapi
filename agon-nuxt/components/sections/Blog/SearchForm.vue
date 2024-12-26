<!-- components/SearchForm.vue -->

<template>
    <div class="flex-1 mb-[30px] px-[12px] md:px-[36px] xl:px-0">
        <!-- Search Form -->
        <form @submit.prevent="handleSearch">
            <div class="bg-white flex items-center justify-between p-3 rounded-[55px] relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input v-model="searchQuery" class="block w-full ps-10 text-base text-gray-900 rounded-lg outline-0"
                    type="text" placeholder="Search blogs..." />
                <button class="rounded-full bg-green-900 grid place-items-center w-[60px] h-[56px] min-w-[60px]"
                    type="submit">
                    <img class="filter-white" src="/assets/images/icons/icon-right.svg" alt="" />
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Search query state
const searchQuery = ref('');

// Emit the search query to the parent component
const emitSearchQuery = (searchQuery) => {
    emit('search', searchQuery);
};

const handleSearch = () => {
    emitSearchQuery(searchQuery.value);
};
</script>