<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[111px]">
        <div class="text-center mb-[45px] md:mb-[80px]">
            <h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Explore by Categories.</h2>
            <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[691px]">We provide many categories, choose a category according to your expertise to make it easier to find a job.</p>
        </div>
        <div class="gap-10 lg:grid lg:grid-cols-2">
            <div class="rounded-2xl p-5 md:p-[40px] border border-gray-200 mb-10 card-shadow lg:mb-0">
                <h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[35px]">Popular Categories</h3>
                <div class="flex flex-col gap-8">
                    <NuxtLink class="font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px] pb-[25px] border-b border-gray-200" to="#"
                        ><span class="text-gray-500 transition-all duration-200 group-hover:text-green-900">Computer - Laptop</span>
                        <div class="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900">
                            <p class="text-green-900 transition-all duration-300 group-hover:text-white">6</p>
                        </div>
                    </NuxtLink>
                    <NuxtLink class="font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px] pb-[25px] border-b border-gray-200" to="#"
                        ><span class="text-gray-500 transition-all duration-200 group-hover:text-green-900">Smart phone &amp; Tablets</span>
                        <div class="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900">
                            <p class="text-green-900 transition-all duration-300 group-hover:text-white">12</p>
                        </div>
                    </NuxtLink>
                    <NuxtLink class="font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px] pb-[25px] border-b border-gray-200" to="#"
                        ><span class="text-gray-500 transition-all duration-200 group-hover:text-green-900">Fashion &amp; Accessories</span>
                        <div class="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900">
                            <p class="text-green-900 transition-all duration-300 group-hover:text-white">14</p>
                        </div>
                    </NuxtLink>
                    <NuxtLink class="font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px]" to="#"
                        ><span class="text-gray-500 transition-all duration-200 group-hover:text-green-900">Health &amp; Beauty</span>
                        <div class="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900">
                            <p class="text-green-900 transition-all duration-300 group-hover:text-white">8</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div>
                <div class="grid grid-cols-1 gap-6 md:grid-cols-2 mb-[50px]">
                    <div class="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">
                        <NuxtLink class="flex items-center gap-[17px]" to="#">
                            <div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                                <img class="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white" src="/assets/images/icons/icon-media.svg" alt="" />
                            </div>
                            <p class="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white">Computer for Designer, Art</p>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">
                        <NuxtLink class="flex items-center gap-[17px]" to="#">
                            <div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                                <img class="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white" src="/assets/images/icons/icon-human-dolly.svg" alt="" />
                            </div>
                            <p class="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white">Sport, Home, Outdoor</p>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">
                        <NuxtLink class="flex items-center gap-[17px]" to="#">
                            <div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                                <img class="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white" src="/assets/images/icons/icon-business.svg" alt="" />
                            </div>
                            <p class="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white">Laptop for office, students</p>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">
                        <NuxtLink class="flex items-center gap-[17px]" to="#">
                            <div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                                <img class="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white" src="/assets/images/icons/icon-account.svg" alt="" />
                            </div>
                            <p class="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white">Software, card, book</p>
                        </NuxtLink>
                    </div>
                </div>
                <div class="rounded-2xl py-[20px] px-[30px] border border-gray-200 flex items-center card-shadow group cursor-pointer transition-all duration-200 mx-auto w-fit hover:bg-green-900 hover:-translate-y-1 gap-[17px] lg:w-1/2">
                    <div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[20px] h-[20px] xl:w-[33px] xl:h-[33px] bg-[#0B7B3F] group-hover:bg-[#158E99]">
                        <img class="rounded-full max-w-[11px] xl:max-w-[33x] group-hover:filter-white" src="/assets/images/icons/icon-seeding.svg" alt="" />
                    </div>
                    <p class="text-heading-6 font-bold font-chivo group-hover:text-white">See All Categories</p>
                    <img class="max-w-[16px] group-hover:filter-white" src="/assets/images/icons/icon-angle-down.svg" alt="angle icon" />
                </div>
            </div>
        </div>
    </div>
</template>
