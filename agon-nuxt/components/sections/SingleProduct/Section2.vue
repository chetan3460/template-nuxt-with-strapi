<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:grid lg:grid-cols-2 gap-[35px] xl:gap-0">
        <div class="relative lg:flex">
            <ElementsProductThumbSlider />
        </div>
        <div class="col-start-2 mt-[30px] lg:ml-6">
            <div class="flex items-center justify-between mb-[22px]">
                <p class="text-sm text-gray-500 font-bold">Audio & Speakers</p>
                <div class="flex items-center gap-[10px]">
                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[20%]">
                            <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" />
                            <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" />
                            <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" />
                            <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" />
                            <img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" />
                        </div>
                    </div>
                    <p class="text-tiny font-semibold text-gray-400">(138 rates)</p>
                </div>
            </div>
            <h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-8">Sony Digital Surround Wireless Headphones Black Bundle with Deco Gear 6FT Universal 4K</h3>
            <div class="flex items-baseline gap-4 mb-8">
                <h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-1000">$318.00</h2>
                <h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 text-gray-500 line-through">$420.00</h3>
                <p class="text-text text-gray-500">(In stock)</p>
            </div>
            <p class="text-text text-gray-500 mb-8">The WH-L600 delivers cinematic surround sound to immerse you in whatever you're watching or listening to. Sound modes enhance movies, dialogue, games, and sport, while a 98.43-ft wireless listening range gives you the freedom to move around.</p>
            <div class="flex flex-col gap-5 mb-[30px] md:flex-row md:gap-[37px]">
                <div class="flex-1">
                    <div class="font-chivo text-heading-6 font-bold text-green-1000 mb-[10px]"><span class="block">Hurry up!</span><span class="block">Sales ends soon!</span></div>
                    <div class="w-full bg-gray-200 h-[11px] rounded-[10px] mb-[6px]">
                        <div class="bg-danger h-[11px] rounded-[10px] w-[60%]"></div>
                    </div>
                    <p class="text-gray-500 font-bold text-sm">63/158 sold</p>
                </div>
                <ElementsCountdown :countDay="2" />
            </div>
            <div class="w-full bg-gray-200 h-[1px] mb-[46px]"></div>
            <div class="flex flex-col gap-[10px] mb-[46px] md:flex-row">
                <div class="detail-qty border border-green-100 rounded-lg flex items-center justify-between w-[118px]">
                    <input class="qty-val text-green-1000 px-4 text-center font-bold font-chivo text-[20px] max-w-[80px]" v-model="qtyVal" />
                    <div class="flex flex-col">
                        <span class="qty-down cursor-pointer" @click="increaseCount"
                            ><i><img src="/assets/images/icons/icon-caret-up-green.svg" alt="caret icon" /></i
                        ></span>
                        <span class="qty-up cursor-pointer" @click="decreaseCount"
                            ><i><img src="/assets/images/icons/icon-caret-down-green.svg" alt="caret icon" /></i
                        ></span>
                    </div>
                </div>
                <div class="flex items-center gap-[10px]">
                    <button class="bg-green-100 flex items-center rounded transition-colors duration-300 border border-green-100 py-[15px] px-[22px] gap-[13px] hover:bg-white">
                        <img src="/assets/images/icons/icon-cart.svg" alt="cart icon" />
                        <p class="text-green-1000 font-chivo font-bold text-[14px] md:text-[18px] md:leading-[20px]">Add To Cart</p>
                    </button>
                    <div class="border border-green-100 grid place-items-center cursor-pointer transition-all duration-300 w-[50px] h-[50px] rounded-[5px] hover:bg-green-100 hover:translate-y-[-5px]">
                        <img src="/assets/images/icons/icon-heart.svg" alt="icon" />
                    </div>
                    <div class="border border-green-100 grid place-items-center cursor-pointer transition-all duration-300 w-[50px] h-[50px] rounded-[5px] hover:bg-green-100 hover:translate-y-[-5px]">
                        <img src="/assets/images/icons/icon-shuffle.svg" alt="icon" />
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-[46px]">
                <p class="text-text"><span>Vendor:</span><span class="text-gray-500">&nbsp;AgonMart</span></p>
                <p class="text-text"><span>SKU:</span><span class="text-gray-500">&nbsp;FWM15VKT</span></p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
const qtyVal = ref(1);
function increaseCount() {
    qtyVal.value += 1;
}
function decreaseCount() {
    if (qtyVal.value > 1) {
        qtyVal.value -= 1;
    }
}
</script>
