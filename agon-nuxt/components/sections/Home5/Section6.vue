<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[111px]">
        <div class="rounded-2xl p-[30px] md:py-[41px] md:px-[87px] bg-green-900 flex relative">
            <div class="lg:w-[45%]">
                <h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold text-white mb-[6px]">You can order on App and Play store</h1>
                <p class="text-gray-200 text-md md:text-[18px] mb-[60px]">Bring the world of shopping to your phone</p>
                <div class="flex items-center gap-5 mb-[22px]">
                    <NuxtLink to="#"><img src="/assets/images/Apple-button.png" alt="app store link button" /></NuxtLink>
                    <NuxtLink to="#"><img src="/assets/images/google-play.png" alt="google store link button" /></NuxtLink>
                </div>
                <div class="flex items-center gap-5">
                    <div class="flex items-center gap-[7px]">
                        <div class="bg-green-500 w-[14px] h-[14px] rounded-[2px]"></div>
                        <p class="text-sm text-[#B4B4B4]">Order direct from the app</p>
                    </div>
                    <div class="flex items-center gap-[7px]">
                        <div class="bg-green-500 w-[14px] h-[14px] rounded-[2px]"></div>
                        <p class="text-sm text-[#B4B4B4]">Save and searches</p>
                    </div>
                </div>
            </div>
            <img class="absolute right-0 hidden w-[54%] lg:block lg:top-1/4 xl:top-[40px]" src="/assets/images/app-block-img.png" alt="" />
        </div>
    </div>
</template>
