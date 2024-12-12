<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[140px]">
        <div class="text-center mb-[40px] lg:mb-[77px]">
            <h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Our Free Resources</h2>
            <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[691px]">We provide many categories, choose a category according to your expertise to make it easier to find a job.</p>
        </div>
        <div class="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:gap-y-[66px] xl:gap-x-[77px] mb-[40px] lg:mb-[66px]">
            <div>
                <NuxtLink class="mb-8 block aspect-[658/400]" to="#"><img class="h-full w-full object-cover" src="/assets/images/resource-1.png" alt="Agon" /></NuxtLink>
                <NuxtLink to="#">
                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">Design Studios That Everyone Should Know About?</h4>
                </NuxtLink>
                <div class="w-full bg-gray-200 h-[1px] mb-[30px]"></div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-[34px]"><NuxtLink class="text-sm font-bold text-green-900 transition-colors duration-200 hover:text-gray-900" to="#">Building</NuxtLink><span class="text-gray-500 text-sm font-bold">August 25, 2024</span></div>
                    <NuxtLink class="text-sm uppercase underline font-bold text-green-900 transition-colors duration-200 hover:text-gray-900" to="#">READ MORE</NuxtLink>
                </div>
            </div>
            <div>
                <NuxtLink class="mb-8 block aspect-[658/400]" to="#"><img class="h-full w-full object-cover" src="/assets/images/resource-2.png" alt="Agon" /></NuxtLink>
                <NuxtLink to="#">
                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">We can blend colors multiple ways, the most common</h4>
                </NuxtLink>
                <div class="w-full bg-gray-200 h-[1px] mb-[30px]"></div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-[34px]"><NuxtLink class="text-sm font-bold text-green-900 transition-colors duration-200 hover:text-gray-900" to="#">Design</NuxtLink><span class="text-gray-500 text-sm font-bold">September 25, 2024</span></div>
                    <NuxtLink class="text-sm uppercase underline font-bold text-green-900 transition-colors duration-200 hover:text-gray-900" to="#">READ MORE</NuxtLink>
                </div>
            </div>
            <div>
                <NuxtLink class="mb-8 block aspect-[658/400]" to="#"><img class="h-full w-full object-cover" src="/assets/images/resource-3.png" alt="Agon" /></NuxtLink>
                <NuxtLink to="#">
                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">How To Blow Through Capital At An Incredible Rate</h4>
                </NuxtLink>
                <div class="w-full bg-gray-200 h-[1px] mb-[30px]"></div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-[34px]"><NuxtLink class="text-sm font-bold text-green-900 transition-colors duration-200 hover:text-gray-900" to="#">Building</NuxtLink><span class="text-gray-500 text-sm font-bold">October 25, 2024</span></div>
                    <NuxtLink class="text-sm uppercase underline font-bold text-green-900 transition-colors duration-200 hover:text-gray-900" to="#">READ MORE</NuxtLink>
                </div>
            </div>
            <div>
                <NuxtLink class="mb-8 block aspect-[658/400]" to="#"><img class="h-full w-full object-cover" src="/assets/images/resource-4.png" alt="Agon" /></NuxtLink>
                <NuxtLink to="#">
                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">Microsoft Patch Management For Home Users</h4>
                </NuxtLink>
                <div class="w-full bg-gray-200 h-[1px] mb-[30px]"></div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-[34px]"><NuxtLink class="text-sm font-bold text-green-900 transition-colors duration-200 hover:text-gray-900" to="#">Design</NuxtLink><span class="text-gray-500 text-sm font-bold">August 25, 2024</span></div>
                    <NuxtLink class="text-sm uppercase underline font-bold text-green-900 transition-colors duration-200 hover:text-gray-900" to="#">READ MORE</NuxtLink>
                </div>
            </div>
        </div>
        <button type="button">
            <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit mx-auto" to="#"
                ><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Load more resource</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
            ></NuxtLink>
        </button>
    </div>
</template>
