<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] items-center lg:flex">
        <div class="lg:w-[70%] mb-[80px]">
            <span class="font-chivo inline-block bg-green-900 text-white py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">Digital Marketing Agency</span>
            <h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[54px]">The Fastest way to achieve success</h1>
            <p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[150px] mb-[44px]">It was popularised in the 1960s with the release sheets. We bring the right people together</p>
            <div class="flex items-center justify-start mb-[50px]">
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
        </div>
        <div class="hidden relative lg:block"><img class="relative z-10 animate-hero-thumb-sm-animation" src="/assets/images/hero-6.png" alt="Agon" /><img class="absolute z-0 animate-float -right-1/4 top-[15%]" src="/assets/images/chart-1.png" alt="chart image" /><img class="absolute animate-float top-1/2" src="/assets/images/icons/line-chart.svg" alt="line image" /></div>
    </div>
</template>
