<template>
    <div class="full-width bg-bg-5">
        <div class="items-center mx-auto px-5 pt-24 lg:flex max-w-[1320px]">
            <div class="flex-1">
                <h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[30px] md:w-[13ch]">Building the Work Ecosystem</h1>
                <p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[150px] mb-[44px] md:w-[57ch]">Connect your conversations with the tools and services that you use to get the job done. With over 1,500 apps and a robust API</p>
                <div class="flex items-center justify-start mb-[85px]">
                    <button type="button">
                        <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]" to="#"
                            ><span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">Get Start</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                        ></NuxtLink>
                    </button>
                    <div class="flex items-center gap-3">
                        <i> <img src="/assets/images/icons/icon-button.svg" alt="" /></i>
                        <NuxtLink class="text-base flex items-center font-chivo font-medium text-[18px] leading-[18px] gap-[5px]" to="/">How it works</NuxtLink>
                    </div>
                </div>
                <div class="flex w-full gap-[60px]">
                    <div class="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                        <div class="bg-white rounded-full w-[80px] h-[80px]"><img class="h-full w-full object-cover p-[18px]" src="/assets/images/icons/icon-waves.svg" alt="icon" /></div>
                        <div class="flex-1">
                            <h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">+12k</h2>
                            <p class="text-text text-gray-500">Projects done</p>
                        </div>
                    </div>
                    <div class="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                        <div class="bg-white rounded-full w-[80px] h-[80px]"><img class="h-full w-full object-cover p-[18px]" src="/assets/images/icons/icon-pine.svg" alt="icon" /></div>
                        <div class="flex-1">
                            <h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">+68</h2>
                            <p class="text-text text-gray-500">Offices / Factories</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden relative h-auto self-end lg:block min-w-[680px]">
                <div class="absolute bottom-0 translate-x-[-120px]"><img class="h-full w-full object-cover" src="/assets/images/hero-services-1.png" alt="Agon" /></div>
                <img class="absolute animate-float max-w-[300px] bottom-[336px] left-[-28%]" src="/assets/images/bussiness-card.png" alt="Agon" />
            </div>
        </div>
    </div>
</template>
