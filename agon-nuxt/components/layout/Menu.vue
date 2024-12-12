<template>
    <ul class="navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row">
        <li class="flex items-center group">
            <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="#">Home</NuxtLink><i><img class="icon-caret group-hover:filter-green" src="/assets/images/icons/icon-caret.svg" alt="caret" /></i>
            <ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-2 w-[340px]">
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp1">
                    <NuxtLink class="flex items-center text-[14px]" to="/"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-home.svg" alt="" /><span class="whitespace-nowrap">Homepage 01</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp2">
                    <NuxtLink class="flex items-center text-[14px]" to="/home-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-home.svg" alt="" /><span class="whitespace-nowrap">Homepage 02</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp3">
                    <NuxtLink class="flex items-center text-[14px]" to="/home-3"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-home.svg" alt="" /><span class="whitespace-nowrap">Homepage 03</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp4">
                    <NuxtLink class="flex items-center text-[14px]" to="/home-4"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-home.svg" alt="" /><span class="whitespace-nowrap">Homepage 04</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp5">
                    <NuxtLink class="flex items-center text-[14px]" to="/home-5"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-home.svg" alt="" /><span class="whitespace-nowrap">Homepage 05</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp6">
                    <NuxtLink class="flex items-center text-[14px]" to="/home-6"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-home.svg" alt="" /><span class="whitespace-nowrap">Homepage 06</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp7">
                    <NuxtLink class="flex items-center text-[14px]" to="/home-7"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-home.svg" alt="" /><span class="whitespace-nowrap">Homepage 07</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp8">
                    <NuxtLink class="flex items-center text-[14px]" to="/home-8"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-home.svg" alt="" /><span class="whitespace-nowrap">Homepage 08</span></NuxtLink>
                </li>
            </ul>
        </li>
        <li class="flex items-center group">
            <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="#">About</NuxtLink><i><img class="icon-caret group-hover:filter-green" src="/assets/images/icons/icon-caret.svg" alt="caret" /></i>
            <ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="ab1">
                    <NuxtLink class="flex items-center text-[14px]" to="/about-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-star-header.svg" alt="" /><span class="whitespace-nowrap">About 01</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="ab2">
                    <NuxtLink class="flex items-center text-[14px]" to="/about-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-star-header.svg" alt="" /><span class="whitespace-nowrap">About 02</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="ab3">
                    <NuxtLink class="flex items-center text-[14px]" to="/about-3"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-star-header.svg" alt="" /><span class="whitespace-nowrap">About 03</span></NuxtLink>
                </li>
            </ul>
        </li>
        <li class="flex items-center group">
            <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="#">Company</NuxtLink><i><img class="icon-caret group-hover:filter-green" src="/assets/images/icons/icon-caret.svg" alt="caret" /></i>
            <ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv1">
                    <NuxtLink class="flex items-center text-[14px]" to="/services-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-gem.svg" alt="" /><span class="whitespace-nowrap">Services 01</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv2">
                    <NuxtLink class="flex items-center text-[14px]" to="/services-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-gem.svg" alt="" /><span class="whitespace-nowrap">Services 02</span></NuxtLink>
                </li>
                <li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="p1">
                    <NuxtLink class="flex items-center text-[14px]" to="/pricing-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-database.svg" alt="" /><span class="whitespace-nowrap">Pricing 01</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="p2">
                    <NuxtLink class="flex items-center text-[14px]" to="/pricing-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-database.svg" alt="" /><span class="whitespace-nowrap">Pricing 02</span></NuxtLink>
                </li>
                <li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="faqs1">
                    <NuxtLink class="flex items-center text-[14px]" to="/faqs-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-headset.svg" alt="" /><span class="whitespace-nowrap">FAQS 01</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="faqs2">
                    <NuxtLink class="flex items-center text-[14px]" to="/faqs-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-headset.svg" alt="" /><span class="whitespace-nowrap">FAQS 02</span></NuxtLink>
                </li>
                <li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="career">
                    <NuxtLink class="flex items-center text-[14px]" to="/career"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-briefcase.svg" alt="" /><span class="whitespace-nowrap">Career</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="career-details">
                    <NuxtLink class="flex items-center text-[14px]" to="/career-details"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-briefcase.svg" alt="" /><span class="whitespace-nowrap">Career Detials</span></NuxtLink>
                </li>
            </ul>
        </li>
        <li class="flex items-center group">
            <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="#">Pages</NuxtLink><i><img class="icon-caret group-hover:filter-green" src="/assets/images/icons/icon-caret.svg" alt="caret" /></i>
            <ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="contact">
                    <NuxtLink class="flex items-center text-[14px]" to="/contact"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-plane-header.svg" alt="" /><span class="whitespace-nowrap">Contact</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="singup">
                    <NuxtLink class="flex items-center text-[14px]" to="/signup"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-user-add.svg" alt="" /><span class="whitespace-nowrap">Sign Up</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="login">
                    <NuxtLink class="flex items-center text-[14px]" to="/login"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-fingerprint.svg" alt="" /><span class="whitespace-nowrap">Log In</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="rp">
                    <NuxtLink class="flex items-center text-[14px]" to="/reset-password"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-settings.svg" alt="" /><span class="whitespace-nowrap">Reset Password</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="error404">
                    <NuxtLink class="flex items-center text-[14px]" to="/error-404"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-exclamation.svg" alt="" /><span class="whitespace-nowrap">Error 404</span></NuxtLink>
                </li>
            </ul>
        </li>
        <li class="flex items-center group">
            <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="#">Blog</NuxtLink><i><img class="icon-caret group-hover:filter-green" src="/assets/images/icons/icon-caret.svg" alt="caret" /></i>
            <ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="b1">
                    <NuxtLink class="flex items-center text-[14px]" to="/blog-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-edit.svg" alt="" /><span class="whitespace-nowrap">Blog 01</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="b2">
                    <NuxtLink class="flex items-center text-[14px]" to="/blog-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-edit.svg" alt="" /><span class="whitespace-nowrap">Blog 02</span></NuxtLink>
                </li>
                <li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="single">
                    <NuxtLink class="flex items-center text-[14px]" to="/single"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-document-signed.svg" alt="" /><span class="whitespace-nowrap">Blog Single</span></NuxtLink>
                </li>
            </ul>
        </li>
        <li class="flex items-center group">
            <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="#">Shop</NuxtLink><i><img class="icon-caret group-hover:filter-green" src="/assets/images/icons/icon-caret.svg" alt="caret" /></i>
            <ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[''] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]">
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="s1">
                    <NuxtLink class="flex items-center text-[14px]" to="/shop-1"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-edit.svg" alt="" /><span class="whitespace-nowrap">Shop 01</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="s2">
                    <NuxtLink class="flex items-center text-[14px]" to="/shop-2"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-edit.svg" alt="" /><span class="whitespace-nowrap">Shop 02</span></NuxtLink>
                </li>
                <li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="product">
                    <NuxtLink class="flex items-center text-[14px]" to="/single-product"><img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]" src="/assets/images/icons/icon-edit.svg" alt="" /><span class="whitespace-nowrap">Product Details</span></NuxtLink>
                </li>
            </ul>
        </li>
    </ul>
</template>
