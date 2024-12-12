<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex flex-col gap-[30px] lg:grid lg:grid-cols-[336px_1fr]">
        <div class="flex flex-col gap-[30px]">
            <div class="rounded-2xl border border-gray-200 h-fit p-[30px]">
                <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[22px]">Filter items</h4>
                <div class="w-full bg-gray-200 h-[1px] mb-[33px]"></div>
                <div class="flex items-center gap-[15px] mb-2">
                    <p class="text-text text-gray-500 font-bold">Price Range ($):</p>
                    <p class="text-heading-5 text-green-900 font-bold font-chivo">0 - {{ value }}</p>
                </div>
                <div class="mb-5">
                    <input type="range" min="1" max="50000" v-model="value" class="range" @input="handleChange" />
                </div>
                <p class="font-bold font-chivo text-[14px] md:text-heading-6 text-green-900 mb-[18px]">Used for</p>
                <ul class="mb-5">
                    <li class="flex items-center gap-[5px] mb-[10px]">
                        <div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                            <input class="opacity-0 cursor-pointer relative z-10 peer" id="professtional" type="checkbox" name="professtional" /><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block" src="/assets/images/icons/icon-check-green-sqr.svg" alt="checked icon" />
                            <div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200"></div>
                        </div>
                        <p class="text-text">Professtional</p>
                    </li>
                    <li class="flex items-center gap-[5px] mb-[10px]">
                        <div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                            <input class="opacity-0 cursor-pointer relative z-10 peer" id="students" type="checkbox" name="students" /><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block" src="/assets/images/icons/icon-check-green-sqr.svg" alt="checked icon" />
                            <div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200"></div>
                        </div>
                        <p class="text-text">Students</p>
                    </li>
                    <li class="flex items-center gap-[5px] mb-[10px]">
                        <div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                            <input class="opacity-0 cursor-pointer relative z-10 peer" id="office" type="checkbox" name="office" /><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block" src="/assets/images/icons/icon-check-green-sqr.svg" alt="checked icon" />
                            <div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200"></div>
                        </div>
                        <p class="text-text">Office</p>
                    </li>
                    <li class="flex items-center gap-[5px] mb-[10px]">
                        <div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                            <input class="opacity-0 cursor-pointer relative z-10 peer" id="company" type="checkbox" name="company" /><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block" src="/assets/images/icons/icon-check-green-sqr.svg" alt="checked icon" />
                            <div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200"></div>
                        </div>
                        <p class="text-text">Company</p>
                    </li>
                    <li class="flex items-center gap-[5px] mb-[10px]">
                        <div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                            <input class="opacity-0 cursor-pointer relative z-10 peer" id="sport" type="checkbox" name="sport" /><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block" src="/assets/images/icons/icon-check-green-sqr.svg" alt="checked icon" />
                            <div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200"></div>
                        </div>
                        <p class="text-text">Sport</p>
                    </li>
                </ul>
                <p class="font-bold font-chivo text-[14px] md:text-heading-6 text-green-900 mb-[18px]">Brand</p>
                <ul class="mb-5">
                    <li class="flex items-center gap-[5px] mb-[10px]">
                        <div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                            <input class="opacity-0 cursor-pointer relative z-10 peer" id="apply" type="checkbox" name="apply" /><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block" src="/assets/images/icons/icon-check-green-sqr.svg" alt="checked icon" />
                            <div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200"></div>
                        </div>
                        <p class="text-text">Apply</p>
                    </li>
                    <li class="flex items-center gap-[5px] mb-[10px]">
                        <div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                            <input class="opacity-0 cursor-pointer relative z-10 peer" id="assus" type="checkbox" name="assus" /><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block" src="/assets/images/icons/icon-check-green-sqr.svg" alt="checked icon" />
                            <div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200"></div>
                        </div>
                        <p class="text-text">Assus</p>
                    </li>
                    <li class="flex items-center gap-[5px] mb-[10px]">
                        <div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                            <input class="opacity-0 cursor-pointer relative z-10 peer" id="samsung" type="checkbox" name="samsung" /><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block" src="/assets/images/icons/icon-check-green-sqr.svg" alt="checked icon" />
                            <div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200"></div>
                        </div>
                        <p class="text-text">Samsung</p>
                    </li>
                    <li class="flex items-center gap-[5px] mb-[10px]">
                        <div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                            <input class="opacity-0 cursor-pointer relative z-10 peer" id="sony" type="checkbox" name="sony" /><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block" src="/assets/images/icons/icon-check-green-sqr.svg" alt="checked icon" />
                            <div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200"></div>
                        </div>
                        <p class="text-text">Sony</p>
                    </li>
                    <li class="flex items-center gap-[5px] mb-[10px]">
                        <div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                            <input class="opacity-0 cursor-pointer relative z-10 peer" id="toshiba" type="checkbox" name="toshiba" /><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block" src="/assets/images/icons/icon-check-green-sqr.svg" alt="checked icon" />
                            <div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-gray-200"></div>
                        </div>
                        <p class="text-text">Toshiba</p>
                    </li>
                </ul>
                <p class="font-bold font-chivo text-[14px] md:text-heading-6 text-green-900 mb-[18px]">Color</p>
                <ul class="mb-5">
                    <li class="flex items-center gap-[10px] mb-[10px]">
                        <div class="rounded-full bg-danger w-[18px] h-[18px]"></div>
                        <p class="text-text">Apply</p>
                    </li>
                    <li class="flex items-center gap-[10px] mb-[10px]">
                        <div class="rounded-full bg-success w-[18px] h-[18px]"></div>
                        <p class="text-text">Assus</p>
                    </li>
                    <li class="flex items-center gap-[10px] mb-[10px]">
                        <div class="rounded-full bg-primary w-[18px] h-[18px]"></div>
                        <p class="text-text">Samsung</p>
                    </li>
                    <li class="flex items-center gap-[10px] mb-[10px]">
                        <div class="rounded-full bg-gray-900 w-[18px] h-[18px]"></div>
                        <p class="text-text">Sony</p>
                    </li>
                    <li class="flex items-center gap-[10px] mb-[10px]">
                        <div class="rounded-full bg-warning w-[18px] h-[18px]"></div>
                        <p class="text-text">Toshiba</p>
                    </li>
                </ul>
                <button class="flex items-center bg-bg-6 py-3 justify-center transition-colors duration-200 w-[130px] gap-[6px] rounded-[4px] hover:bg-bg-9 hover:text-gray-900">
                    <img src="/assets/images/icons/icon-filter.svg" alt="filter icon" />
                    <p class="font-bold font-chivo text-[14px] md:text-heading-6 text-green-900">Filter</p>
                </button>
            </div>
            <div class="rounded-2xl border border-gray-200 h-fit p-[30px]">
                <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[22px]">Popular Items</h4>
                <div class="w-full bg-gray-200 h-[1px] mb-[33px]"></div>
                <div class="flex flex-col gap-[33px]">
                    <div class="flex items-center gap-[15px]">
                        <div class="max-w-[80px]"><img class="h-full w-full object-cover" src="/assets/images/product-sm-1.png" alt="product image" /></div>
                        <div>
                            <p class="text-md font-bold mb-[6px]">HP 232v Printers</p>
                            <div class="flex items-center gap-[10px] mb-[17px]">
                                <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                    <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                    <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                </div>
                                <p class="text-tiny font-semibold text-gray-400">(84 rates)</p>
                            </div>
                            <div class="flex items-baseline gap-2">
                                <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-[15px]">
                        <div class="max-w-[80px]"><img class="h-full w-full object-cover" src="/assets/images/product-sm-2.png" alt="product image" /></div>
                        <div>
                            <p class="text-md font-bold mb-[6px]">Apple Charger</p>
                            <div class="flex items-center gap-[10px] mb-[17px]">
                                <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                    <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                    <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                </div>
                                <p class="text-tiny font-semibold text-gray-400">(84 rates)</p>
                            </div>
                            <div class="flex items-baseline gap-2">
                                <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-[15px]">
                        <div class="max-w-[80px]"><img class="h-full w-full object-cover" src="/assets/images/product-sm-3.png" alt="product image" /></div>
                        <div>
                            <p class="text-md font-bold mb-[6px]">DP 10 Internet Router</p>
                            <div class="flex items-center gap-[10px] mb-[17px]">
                                <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                    <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                    <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                </div>
                                <p class="text-tiny font-semibold text-gray-400">(84 rates)</p>
                            </div>
                            <div class="flex items-baseline gap-2">
                                <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-[15px]">
                        <div class="max-w-[80px]"><img class="h-full w-full object-cover" src="/assets/images/product-sm-2.png" alt="product image" /></div>
                        <div>
                            <p class="text-md font-bold mb-[6px]">Eagle Eye Camera</p>
                            <div class="flex items-center gap-[10px] mb-[17px]">
                                <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                    <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                    <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                </div>
                                <p class="text-tiny font-semibold text-gray-400">(84 rates)</p>
                            </div>
                            <div class="flex items-baseline gap-2">
                                <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-[15px]">
                        <div class="max-w-[80px]"><img class="h-full w-full object-cover" src="/assets/images/product-sm-3.png" alt="product image" /></div>
                        <div>
                            <p class="text-md font-bold mb-[6px]">Sony x6 Speaker</p>
                            <div class="flex items-center gap-[10px] mb-[17px]">
                                <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                    <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                    <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                </div>
                                <p class="text-tiny font-semibold text-gray-400">(84 rates)</p>
                            </div>
                            <div class="flex items-baseline gap-2">
                                <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-[15px]">
                        <div class="max-w-[80px]"><img class="h-full w-full object-cover" src="/assets/images/product-sm-1.png" alt="product image" /></div>
                        <div>
                            <p class="text-md font-bold mb-[6px]">Window CD Software</p>
                            <div class="flex items-center gap-[10px] mb-[17px]">
                                <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                    <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                    <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                </div>
                                <p class="text-tiny font-semibold text-gray-400">(84 rates)</p>
                            </div>
                            <div class="flex items-baseline gap-2">
                                <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-[15px]">
                        <div class="max-w-[80px]"><img class="h-full w-full object-cover" src="/assets/images/product-sm-2.png" alt="product image" /></div>
                        <div>
                            <p class="text-md font-bold mb-[6px]">Noise N10 Headphone</p>
                            <div class="flex items-center gap-[10px] mb-[17px]">
                                <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                    <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                    <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                </div>
                                <p class="text-tiny font-semibold text-gray-400">(84 rates)</p>
                            </div>
                            <div class="flex items-baseline gap-2">
                                <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form class="bg-gray-100 rounded-2xl h-fit p-[30px]" action="#">
                <p class="mb-9 text-heading-6 font-bold font-chivo">Get free coupons</p>
                <p class="text-text text-gray-500 mb-[18px]">Enter you email address and get free coupons.</p>
                <div class="flex items-center p-4 bg-white gap-[9px] rounded-[8px] mb-[22px]">
                    <img src="/assets/images/icons/icon-mail.svg" alt="Mail icon" />
                    <input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo p-0" type="text" placeholder="Enter email address" />
                </div>
                <button class="flex items-center transition-colors duration-200 py-3 px-[33px] rounded-[50px] text-heading-6 font-chivo font-bold bg-green-900 text-white hover:bg-black">Submit</button>
            </form>
        </div>
        <div class="row-span-3">
            <div class="flex items-center bg-gray-100 flex-col gap-5 mb-10 py-[23px] px-[29px] md:flex-row">
                <p class="text-lead text-gray-500 font-bold flex-1">
                    There are <span class="text-green-900">1853</span>
                    products in this category
                </p>
                <div class="flex items-center gap-6">
                    <div class="flex items-center relative gap-[5px]">
                        <label class="flex items-center gap-[5px]" for="show"><img src="/assets/images/icons/icon-grid.svg" alt="grid icon" /><span class="text-text text-gray-500">Show:</span></label>
                        <select class="bg-transparent outline-none text-green-900 cursor-pointer min-w-[38px]" id="show" name="show">
                            <option class="text-green-900" value="50">50</option>
                            <option class="text-green-900" value="100">100</option>
                            <option class="text-green-900" value="150">150</option></select
                        ><img class="filter-gray-500 absolute right-0 pointer-events-none w-[13px] h-[7px]" src="/assets/images/icons/icon-angle-down.svg" alt="caret icon" />
                    </div>
                    <div class="flex items-center relative gap-[5px]">
                        <label class="flex items-center gap-[5px]" for="show"><img src="/assets/images/icons/icon-sort.svg" alt="grid icon" /><span class="text-text text-gray-500">Sort by:</span></label>
                        <select class="bg-transparent outline-none text-green-900 cursor-pointer min-w-[88px]" id="show" name="show">
                            <option class="text-green-900" value="Featured">Featured</option>
                            <option class="text-green-900" value="Rating">Rating</option>
                            <option class="text-green-900" value="Low Price">Low Price</option></select
                        ><img class="filter-gray-500 absolute right-0 pointer-events-none w-[13px] h-[7px]" src="/assets/images/icons/icon-angle-down.svg" alt="caret icon" />
                    </div>
                </div>
            </div>
            <div class="product mb-[64px]">
                <div class="grid-cols-1 !grid mt-[5px] gap-[30px] lg:grid-cols-2 xl:grid-cols-3">
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-1.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(86 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-2.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(186 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-3.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[60%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(826 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-4.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[100%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(836 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-3.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[20%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(122 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-1.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(3 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-2.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[60%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(6 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-4.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(46 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-1.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(48 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-3.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(234 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-1.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(44 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-2.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[100%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(257 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-1.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(3 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-2.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[60%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(6 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1">
                        <div class="relative">
                            <NuxtLink to="/single - product"> <img src="/assets/images/product-md-4.png" alt="featured image product" /></NuxtLink>
                            <div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-heart.svg" alt="heart icon" /></NuxtLink>
                                <NuxtLink class="grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]" to="#"> <img src="/assets/images/icons/icon-shuffle.svg" alt="shuffle icon" /> </NuxtLink>
                                <NuxtLink class="grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]" to="#">
                                    <img src="/assets/images/icons/icon-eye.svg" alt="eye icon" />
                                </NuxtLink>
                            </div>
                        </div>
                        <NuxtLink class="flex flex-col justify-between flex-1" to="/single - product">
                            <div>
                                <p class="text-xs text-gray-500 font-bold mb-[7px]">Sony</p>
                                <p class="text-lead font-bold mb-[11px]">All Natural Italian-Style Chicken Meatballs</p>
                                <div class="flex items-center gap-[10px] mb-9">
                                    <div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]">
                                        <img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" /><img src="/assets/images/icons/icon-star.svg" alt="star icon" />
                                        <div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /><img src="/assets/images/icons/icon-star-yellow.svg" alt="star icon" /></div>
                                    </div>
                                    <p class="text-tiny font-semibold text-gray-400">(46 rates)</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-baseline gap-2">
                                    <h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51</h4>
                                    <span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span>
                                </div>
                                <button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Add +</button>
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-[10px]">
                <div class="grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-prev">
                    <img class="group-hover:filter-white" src="/assets/images/icons/icon-arrow-left.svg" alt="control icon button" />
                </div>
                <div class="product-paging number-dots"></div>
                <div class="grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-next">
                    <img class="group-hover:filter-white" src="/assets/images/icons/icon-arrow-right.svg" alt="control icon button" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: 25000
        };
    },
    methods: {
        handleChange(e) {
            this.value = Math.ceil(e.target.value / 5) * 5;
        }
    }
};
</script>
