<template>
    <!-- Breadcrumbs -->
    <nav aria-label="Breadcrumbs" class="flex items-center space-x-2 justify-center  mb-6">
        <ul class="flex flex-wrap items-center whitespace-nowrap overflow-hidden text-ellipsis gap-[8px]">
            <!-- Home Icon -->
            <li v-if="items[0]" class="flex items-center gap-[8px]">
                <NuxtLink :to="items[0].to" class="flex items-center space-x-1">


                    <img class="" src="/assets/images/icons/icon-home-gray.svg" alt="leaf icon">
                </NuxtLink>
                <!-- <span class="mx-[0.8rem]">/</span> -->
                <img src="/assets/images/icons/icon-angle-right-gray.svg" alt="home icon">
            </li>

            <!-- Breadcrumb Items -->
            <li v-for="(item, key) in items.slice(1)" :key="key" class="text-breadcrumb whitespace-break-spaces ">
                <NuxtLink v-bind="item"
                    class="flex items-center space-x-1 text-md text-gray-500 transition-colors duration-200 hover:text-gray-900 pointer-events-none">
                    <span>{{ item.label }}</span>
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const items = useBreadcrumbItems();

// Assuming the title is the last breadcrumb or you can set it directly
</script>
