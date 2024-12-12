<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[111px]">
        <div class="flex items-center justify-between md:mb-[82px] mb-[40px]">
            <h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 w-[16ch]">Featured Product
                For Pre-Order
            </h2>
            <div class="flex items-center gap-5">
                <div
                    class="place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 undefined-prev grid">
                    <img class="group-hover:filter-white" src="/assets/images/icons/icon-prev.svg"
                        alt="control icon button">
                </div>
                <div
                    class="place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 undefined-next grid">
                    <img class="group-hover:filter-white" src="/assets/images/icons/icon-next.svg"
                        alt="control icon button">
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-1.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                <img src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <img src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <img src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <img src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <img src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]">
                                    <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon">
                                    <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon">
                                    <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon">
                                    <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon">
                                    <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon">
                                </div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(86 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-2.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"></div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(186 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-3.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[60%]"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"></div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(826 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-4.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[100%]"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"></div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(836 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-3.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[20%]"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"></div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(122 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-1.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"></div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(3 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-2.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[60%]"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"></div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(6 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-4.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"></div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(46 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-1.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"></div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(48 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-3.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"></div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(234 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-1.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"></div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(44 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
            <div
                class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                <div class="relative">
                    <NuxtLink to="/single-product"> <img src="/assets/images/product-md-2.png"
                            alt="featured image product"></NuxtLink>
                    <div
                        class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon"></NuxtLink>
                        <NuxtLink
                            class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]"
                            to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon"></NuxtLink>
                        <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img
                                src="/assets/images/icons/icon-eye.svg" alt="eye icon"></NuxtLink>
                    </div>
                </div>
                <NuxtLink class="flex flex-col justify-between flex-1" to="/single-product">
                    <div>
                        <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                        <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs
                        </p>
                        <div class="flex items-center gap-[10px] mb-9">
                            <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon"><img
                                    src="/assets/images/icons/icon-star.svg" alt="star icon">
                                <div class="flex items-center absolute overflow-hidden gap-[3px] w-[100%]"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"><img
                                        src="/assets/images/icons/icon-star-yellow.svg" alt="star icon"></div>
                            </div>
                            <p class="text-tiny font-semibold text-gray-400">(257 rates)</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-baseline gap-2">
                            <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51
                            </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                        </div>
                        <button
                            class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add
                            +
                        </button>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>