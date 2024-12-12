<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[104px] xl:max-w-[996px] xl:mx-auto">
        <div class="flex flex-wrap mb-14 gap-[15px] md:gap-[25px]">
            <div class="cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px]" :class="{ active: selectedTab === 0 }" @click="selectTab(0)">Description</div>
            <div class="cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px]" :class="{ active: selectedTab === 1 }" @click="selectTab(1)">Additional info</div>
            <div class="cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px]" :class="{ active: selectedTab === 2 }" @click="selectTab(2)">Vendors</div>
            <div class="cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px]" :class="{ active: selectedTab === 3 }" @click="selectTab(3)">Reviews (3)</div>
        </div>
        <div class="product-tag-content text-gray-500 active" v-show="selectedTab === 0">
            <p class="text-text mb-9">Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.<br /><br /><span>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</span></p>
            <p class="text-text font-bold mb-7">E9SNWHL600B</p>
            <ul class="mb-9 !list-disc ml-[19px]">
                <li class="mb-2">WH-L600 Digital Surround Wireless Headphones (Black)</li>
                <li class="mb-2">Charging Stand</li>
                <li class="mb-2">AC Adapter</li>
                <li class="mb-2">Optical Digital Audio Cable</li>
                <li class="mb-2">USA Warranty</li>
            </ul>
            <p class="text-text font-bold mb-7">Bundle Includes:</p>
            <ul class="mb-9 !list-disc ml-[19px]">
                <li class="mb-2">Sony Digital Surround Wireless Headphones Black</li>
                <li class="mb-2">Deco Gear 6FT Universal 4K HDMI 2.0 Cable with 28AWG Pure Copper Conductors</li>
                <li class="mb-2">1 Year Extended Warranty for Products Valued up to $500</li>
            </ul>
        </div>
        <div class="product-tag-content text-gray-500 active" v-show="selectedTab === 1">
            <table class="border-collapse w-full">
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Stand Up</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">35″L x 24″W x 37-45″H(front to back wheel)</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Folded (w/o wheels)</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">32.5″L x 18.5″W x 16.5″H</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Folded (w/ wheels)</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">32.5″L x 24″W x 18.5″H</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Door Pass Through</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">24</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Frame</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">Aluminum</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Weight (w/o wheels)</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">20 LBS</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Weight Capacity</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">60 LBS</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Width</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">24″</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Handle height (ground to handle)</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">37-45″</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Wheels</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">12″ air / wide track slick tread</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Seat back height</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">21.5″</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Head room (inside canopy)</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">25″</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Color</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">Black, Blue, Red, White</td>
                </tr>
                <tr>
                    <th class="px-5 border border-gray-200 text-left font-normal py-2.5">Size</th>
                    <td class="px-5 border border-gray-200 text-left py-2.5">M, S</td>
                </tr>
            </table>
        </div>
        <div class="product-tag-content text-gray-500 active" v-show="selectedTab === 2">
            <div class="flex gap-x-4 mb-[30px]">
                <img src="/assets/images/noodles-logo.svg" alt="noodles logo" />
                <div class="flex flex-col gap-y-1">
                    <h6>
                        <NuxtLink class="text-green-900 font-bold" to="#">Noodles Co.</NuxtLink>
                    </h6>
                    <div class="flex items-center gap-x-1">
                        <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                            <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                            <div class="flex items-center absolute overflow-hidden gap-[3px] w-[90%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                        </div>
                        <span>(32 reviews)</span>
                    </div>
                </div>
            </div>
            <ul class="mb-[50px]">
                <li class="flex items-center"><img class="mr-2" src="/assets/images/icons/icon-location-black.svg" alt="icon location" /><strong class="text-black mr-1">Address:</strong><span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li>
                <li class="flex items-center"><img class="mr-2" src="/assets/images/icons/icon-contact-black.svg" alt="icon contact" /><strong class="text-black mr-1">Contact Seller:</strong><span>(+91) - 540-025-553</span></li>
            </ul>
            <div class="flex gap-x-7 mb-[55px]">
                <div class="flex flex-col gap-y-1">
                    <p class="text-[13px]">Rating</p>
                    <h4 class="text-black font-bold text-[28px] leading-[34px]">92%</h4>
                </div>
                <div class="flex flex-col gap-y-1">
                    <p class="text-[13px]">Ship on time</p>
                    <h4 class="text-black font-bold text-[28px] leading-[34px]">100%</h4>
                </div>
                <div class="flex flex-col gap-y-1">
                    <p class="text-[13px]">Chat response</p>
                    <h4 class="text-black font-bold text-[28px] leading-[34px]">89%</h4>
                </div>
            </div>
            <p>Noodles & Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles & Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles & Company locations across 29 states and Washington, D.C.</p>
        </div>
        <div class="product-tag-content text-gray-500 active" v-show="selectedTab === 3">
            <div class="flex justify-between flex-col lg:flex-row gap-[30px]">
                <div class="flex flex-col gap-y-[30px] lg:w-[60%]">
                    <h4 class="font-bold text-lg">Customer questions & answers</h4>
                    <article class="flex gap-x-4 p-5 border border-gray-200 rounded-2xl group">
                        <div class="flex flex-col gap-y-2 items-center flex-1">
                            <img class="max-w-[50px] lg:max-w-[80px]" src="/assets/images/avatar-11.png" alt="customer" />
                            <NuxtLink class="text-green-900 font-bold text-[13px]" to="#">Sienna</NuxtLink>
                        </div>
                        <div>
                            <div class="flex justify-between mb-3">
                                <span class="font-chivo flex-1 text-[13px]">December 4, 2022 at 3:12 pm</span>
                                <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                    <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                    <div class="flex items-center absolute overflow-hidden gap-[3px] w-[100%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                </div>
                            </div>
                            <span class="text-base leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</span><span class="text-base leading-7 ml-1 inline-block transition duration-300 opacity-0 cursor-pointer text-[#06d6a0] hover:text-green-1000 group-hover:opacity-100">Reply</span>
                        </div>
                    </article>
                    <article class="flex gap-x-4 p-5 border border-gray-200 rounded-2xl group ml-[30px]">
                        <div class="flex flex-col gap-y-2 items-center flex-1">
                            <img class="max-w-[50px] lg:max-w-[80px]" src="/assets/images/avatar-12.png" alt="customer" />
                            <NuxtLink class="text-green-900 font-bold text-[13px]" to="#">Brenna</NuxtLink>
                        </div>
                        <div>
                            <div class="flex justify-between mb-3">
                                <span class="font-chivo flex-1 text-[13px]">December 4, 2022 at 3:12 pm</span>
                                <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                    <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                    <div class="flex items-center absolute overflow-hidden gap-[3px] w-[90%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                </div>
                            </div>
                            <span class="text-base leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</span><span class="text-base leading-7 ml-1 inline-block transition duration-300 opacity-0 cursor-pointer text-[#06d6a0] hover:text-green-1000 group-hover:opacity-100">Reply</span>
                        </div>
                    </article>
                    <article class="flex gap-x-4 p-5 border border-gray-200 rounded-2xl group">
                        <div class="flex flex-col gap-y-2 items-center flex-1">
                            <img class="max-w-[50px] lg:max-w-[80px]" src="/assets/images/avatar-10.png" alt="customer" />
                            <NuxtLink class="text-green-900 font-bold text-[13px]" to="#">Gemma</NuxtLink>
                        </div>
                        <div>
                            <div class="flex justify-between mb-3">
                                <span class="font-chivo flex-1 text-[13px]">December 4, 2022 at 3:12 pm</span>
                                <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                    <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                    <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                </div>
                            </div>
                            <span class="text-base leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</span><span class="text-base leading-7 ml-1 inline-block transition duration-300 opacity-0 cursor-pointer text-[#06d6a0] hover:text-green-1000 group-hover:opacity-100">Reply</span>
                        </div>
                    </article>
                </div>
                <div class="flex flex-col gap-y-[30px] lg:w-[36%]">
                    <h4 class="font-bold text-lg">Customer reviews</h4>
                    <div class="flex items-center gap-x-3">
                        <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                            <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                            <div class="flex items-center absolute overflow-hidden gap-[3px] w-[90%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                        </div>
                        <span class="text-black font-bold">4.8 out of 5</span>
                    </div>
                    <ul class="flex flex-col gap-y-[14px]">
                        <li class="flex overflow-hidden bg-gray-100 text-[13px]">
                            <span class="bg-white pr-[10px]">5 star</span>
                            <div class="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[50%]" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
                        </li>
                        <li class="flex overflow-hidden bg-gray-100 text-[13px]">
                            <span class="bg-white pr-[10px]">4 star</span>
                            <div class="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[25%]" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </li>
                        <li class="flex overflow-hidden bg-gray-100 text-[13px]">
                            <span class="bg-white pr-[10px]">3 star</span>
                            <div class="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[45%]" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div>
                        </li>
                        <li class="flex overflow-hidden bg-gray-100 text-[13px]">
                            <span class="bg-white pr-[10px]">2 star</span>
                            <div class="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[65%]" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
                        </li>
                        <li class="flex overflow-hidden bg-gray-100 text-[13px]">
                            <span class="bg-white pr-[10px]">1 star</span>
                            <div class="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[85%]" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
                        </li>
                    </ul>
                    <NuxtLink class="text-[13px]" to="#">How are ratings calculated?</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectedTab: 0
        };
    },
    methods: {
        selectTab(index) {
            this.selectedTab = index;
        }
    }
};
</script>
