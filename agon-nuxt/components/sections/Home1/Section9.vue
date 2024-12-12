<template>
    <div class="full-width bg-green-900 relative"><img class="absolute right-0 opacity-30 top-[-150px]"
            src="/assets/images/icons/pattern-2.svg" alt=""><img class="absolute opacity-30 bottom-[-90px] left-[-15px]"
            src="/assets/images/icons/pattern-1.svg" alt="">
        <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] pt-[90px] pb-[111px]">
            <div class="text-center text-white mb-[56px]">
                <h2
                    class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-white mb-5 md:mb-[30px] max-w-[725px]">
                    Choose The Best Plan That’s For You</h2>
                <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">
                </p>
            </div>
            <div class="flex items-center justify-center gap-[10px] mb-[54px] text-white">
                <p class="text-text">Bill Monthly
                </p>
                <div class="flex items-center justify-center">
                    <label class="flex items-center cursor-pointer" for="billSwitch">
                        <div class="relative">
                            <input class="sr-only peer" id="billSwitch" type="checkbox" name="" @click="handleToggle">
                            <div class="block rounded-full w-[65px] h-[30px] bg-white"></div>
                            <div class="dot absolute left-1 top-1 rounded-full transition h-[21px] w-[21px] bg-gray-900">
                            </div>
                        </div>
                    </label>
                </div>
                <p class="text-text">Bill Annually
                </p>
            </div>
            <div class="package">
                <div class="grid mx-auto gap-[44px] md:grid-cols-2 lg:grid-cols-3 max-w-[970px]">
                    <div
                        class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card bill-monthly">
                        <div>
                            <div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$<template
                                        v-if="isToggled">420</template><template v-else>35</template>
                                </span><span class="text-sm font-bold text-gray-400 ml-[2px]">/month</span></div>
                            <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5>
                            <p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that
                                are just getting started.</p>
                            <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                            <ul class="mb-[76px]">
                                <li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><img
                                        class="hidden tick-icon-active" src="/assets/images/icons/icon-tick-orange.svg"
                                        alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><img
                                        class="hidden tick-icon-active" src="/assets/images/icons/icon-tick-orange.svg"
                                        alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-close.svg" alt="icon"><span
                                        class="text-md text-gray-500">Custom designs & features</span></li>
                            </ul>
                        </div>
                        <button type="button">
                            <NuxtLink
                                class="flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]"
                                to="#"><span
                                    class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">Get
                                    Started</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                        src="/assets/images/icons/icon-right.svg" alt="arrow right icon"></i></NuxtLink>
                        </button>
                    </div>
                    <div class="rounded-2xl p-[35px] bg-white bill-monthly flex flex-col justify-between">
                        <div>
                            <div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$<template
                                        v-if="isToggled">1068</template><template v-else>89</template>
                                </span><span class="text-sm font-bold text-gray-400 ml-[2px]">/<template
                                        v-if="isToggled">year</template><template v-else>month</template>
                                </span></div>
                            <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Essentials</h5>
                            <p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that
                                are just getting started.</p>
                            <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                            <ul class="mb-[76px]">
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><span
                                        class="text-md text-gray-500">Unlimited updates</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><span
                                        class="text-md text-gray-500">Custom permissions</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-close.svg" alt="icon"><span
                                        class="text-md text-gray-500">Custom designs & features</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-close.svg" alt="icon"><span
                                        class="text-md text-gray-500">Custom designs & features</span></li>
                            </ul>
                        </div>
                        <button type="button">
                            <NuxtLink
                                class="flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]"
                                to="#"><span
                                    class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">Get
                                    Started</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                        src="/assets/images/icons/icon-right.svg" alt="arrow right icon"></i></NuxtLink>
                        </button>
                    </div>
                    <div
                        class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card col-span-1 bill-monthly md:col-span-2 lg:col-span-1">
                        <div>
                            <div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$
                                    <template v-if="isToggled">1500
                                    </template>
                                    <template v-else>125
                                    </template>
                                </span><span class="text-sm font-bold text-gray-400 ml-[2px]">/<template
                                        v-if="isToggled">year</template><template v-else>month </template>
                                </span></div>
                            <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Premium</h5>
                            <p class="text-sm font-bold text-gray-400 mb-[43px]">Avanced features for pros who need
                                more customization.</p>
                            <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                            <ul class="mb-[76px]">
                                <li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><img
                                        class="hidden tick-icon-active" src="/assets/images/icons/icon-tick-orange.svg"
                                        alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><img
                                        class="hidden tick-icon-active" src="/assets/images/icons/icon-tick-orange.svg"
                                        alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-close.svg" alt="icon"><span
                                        class="text-md text-gray-500">Custom designs & features</span></li>
                            </ul>
                        </div>
                        <button type="button">
                            <NuxtLink
                                class="flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]"
                                to="#"><span
                                    class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">Get
                                    Started</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                        src="/assets/images/icons/icon-right.svg" alt="arrow right icon"></i></NuxtLink>
                        </button>
                    </div>
                    <div
                        class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card bill-annually">
                        <div>
                            <div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$420</span><span
                                    class="text-sm font-bold text-gray-400 ml-[2px]">/year</span></div>
                            <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5>
                            <p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that
                                are just getting started.</p>
                            <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                            <ul class="mb-[76px]">
                                <li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><img
                                        class="hidden tick-icon-active" src="/assets/images/icons/icon-tick-orange.svg"
                                        alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><img
                                        class="hidden tick-icon-active" src="/assets/images/icons/icon-tick-orange.svg"
                                        alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-close.svg" alt="icon"><span
                                        class="text-md text-gray-500">Custom designs & features</span></li>
                            </ul>
                        </div>
                        <button type="button">
                            <NuxtLink
                                class="flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]"
                                to="#"><span
                                    class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">Get
                                    Started</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                        src="/assets/images/icons/icon-right.svg" alt="arrow right icon"></i></NuxtLink>
                        </button>
                    </div>
                    <div class="rounded-2xl p-[35px] bg-white bill-annually flex flex-col justify-between">
                        <div>
                            <div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$1068</span><span
                                    class="text-sm font-bold text-gray-400 ml-[2px]">/year</span></div>
                            <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Essentials</h5>
                            <p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that
                                are just getting started.</p>
                            <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                            <ul class="mb-[76px]">
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><span
                                        class="text-md text-gray-500">Unlimited updates</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><span
                                        class="text-md text-gray-500">Custom permissions</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-close.svg" alt="icon"><span
                                        class="text-md text-gray-500">Custom designs & features</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-close.svg" alt="icon"><span
                                        class="text-md text-gray-500">Custom designs & features</span></li>
                            </ul>
                        </div>
                        <button type="button">
                            <NuxtLink
                                class="flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]"
                                to="#"><span
                                    class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">Get
                                    Started</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                        src="/assets/images/icons/icon-right.svg" alt="arrow right icon"></i></NuxtLink>
                        </button>
                    </div>
                    <div
                        class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card col-span-1 bill-annually md:col-span-2 lg:col-span-1">
                        <div>
                            <div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$1500</span><span
                                    class="text-sm font-bold text-gray-400 ml-[2px]">/year</span></div>
                            <h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Premium</h5>
                            <p class="text-sm font-bold text-gray-400 mb-[43px]">Avanced features for pros who need
                                more customization.</p>
                            <div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div>
                            <ul class="mb-[76px]">
                                <li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><img
                                        class="hidden tick-icon-active" src="/assets/images/icons/icon-tick-orange.svg"
                                        alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"
                                        src="/assets/images/icons/icon-tick.svg" alt="icon"><img
                                        class="hidden tick-icon-active" src="/assets/images/icons/icon-tick-orange.svg"
                                        alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li>
                                <li class="flex items-center gap-[10px] mb-[17px]"><img
                                        src="/assets/images/icons/icon-close.svg" alt="icon"><span
                                        class="text-md text-gray-500">Custom designs & features</span></li>
                            </ul>
                        </div>
                        <button type="button">
                            <NuxtLink
                                class="flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]"
                                to="#"><span
                                    class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">Get
                                    Started</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"
                                        src="/assets/images/icons/icon-right.svg" alt="arrow right icon"></i></NuxtLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const isToggled = ref(false)
const handleToggle = () => {
    isToggled.value = !isToggled.value
}
</script>