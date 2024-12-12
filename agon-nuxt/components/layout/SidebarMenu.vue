<template>
    <div @click="handleToggle" :class="{ 'burger-close': isToggled }" class="burger-icon burger-icon-white menu__icon"><span class="burger-icon-top"></span><span class="burger-icon-mid"> </span><span class="burger-icon-bottom"></span></div>
    <nav :class="{ 'opacity-0 pointer-events-none ': !isToggled }" class="fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100]">
        <div class="flex items-center border-b p-[15px] lg:p-[26px] gap-[10px] border-[#F2F4F7]">
            <img class="max-w-[50px]" src="/assets/images/avatar-9.png" alt="avatar" />
            <div>
                <p class="font-bold">Hi! Steven</p>
                <p class="text-sm font-chivo text-gray-500">You have 5 new messages</p>
            </div>
        </div>
        <div class="p-[30px]">
            <ul class="font-chivo font-medium text-[16px] leading-[16px]">
                <li class="group menu-mobile-item py-[13px]" @click="handleClick(1)">
                    <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                        <p>Home</p>
                        <img class="w-[18px] h-[18px]" src="/assets/images/icons/icon-angle-down-fill.svg" alt="angle icon" />
                    </div>
                    <ul class="pl-5 menu-child pt-[10px]" v-show="isActive.key === 1">
                        <li class="text-md py-[10px]" id="hp1">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="#">Homepage 01</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="hp2">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/home-2">Homepage 02</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="hp3">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/home-3">Homepage 03</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="hp4">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/home-4">Homepage 04</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="hp5">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/home-5">Homepage 05</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="hp6">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/home-6">Homepage 06</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="hp7">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/home-7">Homepage 07</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="hp8">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/home-8">Homepage 08</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="group menu-mobile-item py-[13px]" @click="handleClick(2)">
                    <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                        <p>About</p>
                        <img class="w-[18px] h-[18px]" src="/assets/images/icons/icon-angle-down-fill.svg" alt="angle icon" />
                    </div>
                    <ul class="pl-5 menu-child pt-[10px]" v-show="isActive.key === 2">
                        <li class="text-md py-[10px]" id="ab1">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/about-1">About 01</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="ab2">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/about-2">About 02</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="ab3">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/about-3">About 03</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="group menu-mobile-item py-[13px]" @click="handleClick(3)">
                    <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                        <p>Services</p>
                        <img class="w-[18px] h-[18px]" src="/assets/images/icons/icon-angle-down-fill.svg" alt="angle icon" />
                    </div>
                    <ul class="pl-5 menu-child pt-[10px]" v-show="isActive.key === 3">
                        <li class="text-md py-[10px]" id="sv1">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/services-1">Services 01</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="sv2">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/services-2">Services 02</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="p1">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/pricing-1">Pricing 01</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="p2">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/pricing-2">Pricing 02</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="faqs1">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/faqs-1">FAQS 01</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="faqs2">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/faqs-2">FAQS 02</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="career">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/career">Career</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="career-details">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/career-details">Career Detials</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="group menu-mobile-item py-[13px]" @click="handleClick(4)">
                    <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                        <p>Pages</p>
                        <img class="w-[18px] h-[18px]" src="/assets/images/icons/icon-angle-down-fill.svg" alt="angle icon" />
                    </div>
                    <ul class="pl-5 menu-child pt-[10px]" v-show="isActive.key === 4">
                        <li class="text-md py-[10px]" id="contact">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/contact">Contact</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="singup">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/signup">Sign Up</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="login">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/login">Log In</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="rp">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/reset-password">Reset Password</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="error404">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/error-404">Error 404</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="group menu-mobile-item py-[13px]" @click="handleClick(5)">
                    <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                        <p>Blog</p>
                        <img class="w-[18px] h-[18px]" src="/assets/images/icons/icon-angle-down-fill.svg" alt="angle icon" />
                    </div>
                    <ul class="pl-5 menu-child pt-[10px]" v-show="isActive.key === 5">
                        <li class="text-md py-[10px]" id="b1">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/blog-1">Blog 01</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="b2">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/blog-2">Blog 02</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="single">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/single">Blog Single</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="group menu-mobile-item py-[13px]" @click="handleClick(6)">
                    <div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]">
                        <p>Shop</p>
                        <img class="w-[18px] h-[18px]" src="/assets/images/icons/icon-angle-down-fill.svg" alt="angle icon" />
                    </div>
                    <ul class="pl-5 menu-child pt-[10px]" v-show="isActive.key === 6">
                        <li class="text-md py-[10px]" id="s1">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/shop-1">Shop 01</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="s2">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/shop-2">Shop 02</NuxtLink>
                        </li>
                        <li class="text-md py-[10px]" id="product">
                            <NuxtLink class="block transition-all duration-200 hover:text-green-900 hover:translate-x-1" href="/single-product">Product Details</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="mt-5 border-t border-b border-gray-100 pb-5 mb-[25px] pt-[30px]">
                <p class="font-bold text-heading-6 mb-[10px]">Your Account</p>
                <ul class="text-[15px]">
                    <li class="py-[13px]">
                        <NuxtLink class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#"> Profile</NuxtLink>
                    </li>
                    <li class="py-[13px]">
                        <NuxtLink class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#"> Work Preferences</NuxtLink>
                    </li>
                    <li class="py-[13px]">
                        <NuxtLink class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#"> My Boosted Shots</NuxtLink>
                    </li>
                    <li class="py-[13px]">
                        <NuxtLink class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#"> My Collections</NuxtLink>
                    </li>
                    <li class="py-[13px]">
                        <NuxtLink class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#"> Account Settings</NuxtLink>
                    </li>
                    <li class="py-[13px]">
                        <NuxtLink class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#"> Go Pro</NuxtLink>
                    </li>
                    <li class="py-[13px]">
                        <NuxtLink class="transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]" href="#"> Sign Out</NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="text-gray-400 font-chivo text-[13px]">
                Copyright 2024 © Agon - Agency Template.<br /><span>Designed by</span>
                <NuxtLink class="text-green-900" href="http://alithemes.com">&nbsp;AliThemes</NuxtLink>
            </div>
        </div>
    </nav>
    <div class="overlay" :class="{ show: isToggled }" @click="handleToggle"></div>
</template>
<script setup>
import { ref } from "vue";
const isToggled = ref(false);
const handleToggle = () => {
    isToggled.value = !isToggled.value;
};
const isActive = ref({
    status: false,
    key: ""
});
const handleClick = (key) => {
    if (isActive.value.key === key) {
        isActive.value.status = false;
    } else {
        isActive.value.status = true;
        isActive.value.key = key;
    }
};
</script>
