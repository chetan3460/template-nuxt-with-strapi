<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[138px]">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-[45px] md:mb-[87px]">
            <div>
                <h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Latest News</h2>
                <p class="text-quote md:text-lead-lg text-gray-600">From Our blog and Event fanpage</p>
            </div>
            <button type="button">
                <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit" to="#"
                    ><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">View More</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                ></NuxtLink>
            </button>
        </div>
        <div class="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">
            <NuxtLink class="block group" to="/single">
                <div class="flex items-center mb-[11px]">
                    <div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                    <span class="uppercase text-gray-500">company</span>
                </div>
                <p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">We can blend colors multiple ways, the most common</p>
                <div class="relative mb-16">
                    <div class="relative">
                        <div class="pr-[26px] aspect-[430/275]"><img class="h-full w-full object-cover rounded-2xl z-10 relative" src="/assets/images/thumbnail-3.png" alt="Agon" /></div>
                        <div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                            <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                        </div>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink class="block group" to="/single">
                <div class="flex items-center mb-[11px]">
                    <div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                    <span class="uppercase text-gray-500">Marketing Event</span>
                </div>
                <p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">How To Blow Through Capital At An Incredible Rate</p>
                <div class="relative mb-16">
                    <div class="relative">
                        <div class="pr-[26px] aspect-[430/275]"><img class="h-full w-full object-cover rounded-2xl z-10 relative" src="/assets/images/thumbnail-4.png" alt="Agon" /></div>
                        <div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                            <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                        </div>
                    </div>
                </div>
            </NuxtLink>
            <NuxtLink class="block group" to="/single">
                <div class="flex items-center mb-[11px]">
                    <div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"></div>
                    <span class="uppercase text-gray-500">Customer Services</span>
                </div>
                <p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]">Design Studios That Everyone Should Know About?</p>
                <div class="relative mb-16">
                    <div class="relative">
                        <div class="pr-[26px] aspect-[430/275]"><img class="h-full w-full object-cover rounded-2xl z-10 relative" src="/assets/images/thumbnail-5.png" alt="Agon" /></div>
                        <div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]">
                            <div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div>
                        </div>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px] mt-[150px]" padding="px-[15px] py-[50px] md:px-[52px] md:py-[72px]">
            <div class="flex-1 mb-[30px]">
                <p class="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">newsletter</p>
                <h4 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">Subscribe our newsletter</h4>
                <p class="text-text text-gray-500">By clicking the button, you are agreeing with our</p>
                <NuxtLink class="text-green-900" to="/index">Term & Conditions</NuxtLink>
                <form class="mt-[30px]" action="/">
                    <div class="bg-white flex items-center justify-between p-3 rounded-[55px]">
                        <input class="ml-[25px]" type="text" placeholder="Enter your mail ..." />
                        <button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit">
                            <img class="filter-white" src="/assets/images/icons/icon-right.svg" alt="" />
                        </button>
                    </div>
                </form>
            </div>
            <div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0" src="/assets/images/thumbnail-2.png" alt="Agon" /><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]" src="/assets/images/chart.png" alt="Agon" /></div>
        </div>
    </div>
</template>
