<template>
    <div class="full-width banner-hero bg-bg-6 banner-2">
        <div class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center">
            <div class="lg:w-[60%] lg:mr-[150px]">
                <span class="font-chivo inline-block bg-green-900 text-white py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">Digital Marketing Agency</span>
                <h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-[20px]">A small creative team excited to create beautiful things</h1>
                <p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[44px]">Integrated workflow designed for product teams. We create world-class development and branding</p>
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
                <div class="flex items-center gap-14">
                    <div>
                        <p class="text-heading-4 font-bold font-chivo text-gray-900">5000+</p>
                        <p class="text-md text-gray-500">Happy Clients</p>
                    </div>
                    <div>
                        <p class="text-heading-4 font-bold font-chivo text-gray-900">756+</p>
                        <p class="text-md text-gray-500">Project Done</p>
                    </div>
                    <div>
                        <p class="text-heading-4 font-bold font-chivo text-gray-900">100%</p>
                        <p class="text-md text-gray-500">Client Satisfaction</p>
                    </div>
                </div>
            </div>
            <div class="hidden relative lg:block"><img class="h-full w-full object-cover" src="/assets/images/hero-2.png" alt="Agon" /><img class="absolute rounded-2xl w-[220px] bottom-[11px] left-[-35%]" src="/assets/images/card-1.png" alt="Agon" /><img class="absolute rounded-2xl w-[155px] top-[135px] right-[-18%]" src="/assets/images/card-2.png" alt="Agon" /></div>
        </div>
    </div>
</template>
