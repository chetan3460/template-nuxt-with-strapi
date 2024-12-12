<template>
    <div class="full-width bg-bg-2">
        <div class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-end lg:justify-between">
            <div class="lg:w-[60%] lg:mr-[150px]">
                <span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[10px]">What We Do, What You Get</span>
                <h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[30px]">Advanced analytics to grow your business</h1>
                <p class="text-quote md:text-lead-lg text-gray-500 relative z-10 pr-[40px] lg:pr-[60px] mb-[44px]">Integrated workflow designed for product teams. We create world-class development and branding</p>
                <div class="flex items-center justify-start mb-[50px]">
                    <button type="button">
                        <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]" to="#"
                            ><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Join Our Team</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                        ></NuxtLink>
                    </button>
                    <NuxtLink class="text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]" to="/">Contact Us</NuxtLink><i> <img class="ml-[7px] w-[12px]" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i>
                </div>
            </div>
            <div class="relative">
                <div class="flex justify-between w-full flex-wrap lg:flex-col gap-[40px] lg:gap-0">
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
                    <div class="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]">
                        <div class="bg-white rounded-full w-[80px] h-[80px]"><img class="h-full w-full object-cover p-[18px]" src="/assets/images/icons/icon-anchor.svg" alt="icon" /></div>
                        <div class="flex-1">
                            <h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">+15k</h2>
                            <p class="text-text text-gray-500">Constant clients</p>
                        </div>
                    </div>
                </div>
                <div class="absolute hidden bottom-[-60px] left-[-117px] translate-x-[-260px] lg:block"><img class="h-full w-full object-cover animate-hero-thumb-sm-animation" src="/assets/images/hero-about2.png" alt="Agon" /></div>
            </div>
        </div>
    </div>
</template>
