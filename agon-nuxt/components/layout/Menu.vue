<template>
    <ul class="navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row">
        <li class="flex items-center group">
            <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="/">Home
            </NuxtLink>

        </li>
        <li class="flex items-center group">
            <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/about-1">
                About</NuxtLink>

        </li>
        <li class="flex items-center group">
            <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/services-2">
                Services</NuxtLink>

        </li>

        <li class="flex items-center group">
            <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]" to="/blog">
                Blog
            </NuxtLink>

        </li>

        <li class="flex items-center group">
            <NuxtLink class="hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]"
                to="/contact">
                Contact</NuxtLink>

        </li>

    </ul>
</template>
