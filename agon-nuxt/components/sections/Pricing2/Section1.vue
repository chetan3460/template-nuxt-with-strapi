<template>
    <img class="absolute w-full top-0 left-0 z-[-1] aspect-[1920/866]" src="/assets/images/pricing-2-bg.png" alt="image" />
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[139px]">
        <div class="text-center mb-10 md:mb-[80px]">
            <h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Choose The Best Plan That’s For You</h2>
            <p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p>
        </div>
        <div class="input-shadow bg-white p-5 rounded-[36px] lg:py-[72px] lg:px-[66px] lg:flex lg:gap-[38px] mb-[80px]">
            <div class="bg-green-900 py-10 px-5 rounded-2xl flex-1 lg:py-10 lg:px-12 mb-[30px] lg:mb-0">
                <div class="inline-block bg-green-500 py-1 bill-monthly bill px-[6px] rounded-[28px] mb-[55px]" @click="handleToggle">
                    <span class="inline-block text-text text-white py-2 cursor-pointer btn-text-monthly px-[21px] rounded-[24px]" :class="{ ' bg-green-900': !isToggled }">Monthly</span>
                    <span class="inline-block text-text text-white py-2 cursor-pointer btn-text-yearly px-[21px] rounded-[24px]" :class="{ ' bg-green-900': isToggled }">Yearly</span>
                </div>
                <ul class="text-white text-text px-5">
                    <li class="flex items-center justify-between mb-10 lg:mb-12"><span>Unlimited updates</span><img src="/assets/images/icons/icon-check-green.svg" alt="icon check" /></li>
                    <li class="flex items-center justify-between mb-10 lg:mb-12"><span>Custom designs & features</span><img src="/assets/images/icons/icon-check-green.svg" alt="icon check" /></li>
                    <li class="flex items-center justify-between mb-10 lg:mb-12"><span>Custom permissions</span><img src="/assets/images/icons/icon-check-green.svg" alt="icon check" /></li>
                    <li class="flex items-center justify-between mb-10 lg:mb-12"><span>Custom instructors</span><img src="/assets/images/icons/icon-x-green.svg" alt="icon X" /></li>
                    <li class="flex items-center justify-between mb-5"><span>Many devices</span><img src="/assets/images/icons/icon-x-green.svg" alt="icon X" /></li>
                </ul>
            </div>
            <div class="flex flex-col gap-6 flex-1 package">
                <div class="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item active">
                    <div class="flex items-center gap-5 lg:gap-[35px]">
                        <div class="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]"></div>
                        <div>
                            <p class="text-heading-5 font-chivo font-bold mb-[14px]">Standard</p>
                            <p class="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">Save 20%</p>
                        </div>
                    </div>
                    <div>
                        <span class="text-heading-3 font-bold font-chivo">$<template v-if="isToggled">420</template><template v-else>35</template></span
                        ><span class="text-sm font-bold text-gray-400 price-length ml-[2px]">/<template v-if="isToggled">year</template><template v-else>month</template></span>
                    </div>
                </div>
                <div class="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item">
                    <div class="flex items-center gap-5 lg:gap-[35px]">
                        <div class="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]"></div>
                        <div>
                            <p class="text-heading-5 font-chivo font-bold mb-[14px]">Standard</p>
                            <p class="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">Save 20%</p>
                        </div>
                    </div>
                    <div>
                        <span class="text-heading-3 font-bold font-chivo">$<template v-if="isToggled">1068</template><template v-else>89</template></span
                        ><span class="text-sm font-bold text-gray-400 price-length ml-[2px]">/<template v-if="isToggled">year</template><template v-else>month</template></span>
                    </div>
                </div>
                <div class="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item">
                    <div class="flex items-center gap-5 lg:gap-[35px]">
                        <div class="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]"></div>
                        <div>
                            <p class="text-heading-5 font-chivo font-bold mb-[14px]">Standard</p>
                            <p class="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">Save 20%</p>
                        </div>
                    </div>
                    <div>
                        <span class="text-heading-3 font-bold font-chivo">$<template v-if="isToggled">1500</template><template v-else>125</template></span
                        ><span class="text-sm font-bold text-gray-400 price-length ml-[2px]">/<template v-if="isToggled">year</template><template v-else>month</template></span>
                    </div>
                </div>
                <div class="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item">
                    <div class="flex items-center gap-5 lg:gap-[35px]">
                        <div class="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]"></div>
                        <div>
                            <p class="text-heading-5 font-chivo font-bold mb-[14px]">Standard</p>
                            <p class="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">Save 20%</p>
                        </div>
                    </div>
                    <div>
                        <span class="text-heading-3 font-bold font-chivo">$<template v-if="isToggled">2388</template><template v-else>199</template></span
                        ><span class="text-sm font-bold text-gray-400 price-length ml-[2px]">/<template v-if="isToggled">year</template><template v-else>month</template></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="mx-auto flex items-center justify-center flex-col gap-5 md:flex-row">
            <button type="button">
                <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900" to="#"
                    ><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Start free trial</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-black" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                ></NuxtLink>
            </button>
            <button type="button">
                <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white" to="#"
                    ><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">View plans comparison</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                ></NuxtLink>
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
const isToggled = ref(false);
const handleToggle = () => {
    isToggled.value = !isToggled.value;
};
</script>
