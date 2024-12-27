<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">
        <div class="items-center justify-between md:flex mb-[80px] md:mb-[90px]">
            <div class="mb-8">
                <h2
                    class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">
                    Our Team</h2>
                <p class="text-quote md:text-lead-lg text-gray-600">Decades of experience in design and development
                </p>
            </div>
            <div class="flex items-center gap-5">
                <div
                    class="t1p place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 team-prev grid">
                    <img class="group-hover:filter-white" src="/assets/images/icons/icon-prev.svg"
                        alt="control icon button">
                </div>
                <div
                    class="t1n place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 team-next grid">
                    <img class="group-hover:filter-white" src="/assets/images/icons/icon-next.svg"
                        alt="control icon button">
                </div>
            </div>
        </div>
        <swiper :slides-per-view="1" :space-between="0" :loop="true" :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
        }" :pagination="{
    el: '.swiper-pagination',
    clickable: true,
}" :navigation="{
    nextEl: '.t1n',
    prevEl: '.t1p',
}" :modules="modules" class="team-list">
            <swiper-slide class="grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-1.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">UI/UX Designer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darlene Robertson</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-2.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Tester</p>
                            <p class="text-heading-6 font-chivo font-bold">Devon Lane</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-3.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Developer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darrell Steward</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-3.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Developer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darrell Steward</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-2.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">UI/UX Designer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darlene Robertson</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-2.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">UI/UX Designer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darlene Robertson</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-1.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Developer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darrell Steward</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-3.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Project Manager</p>
                            <p class="text-heading-6 font-chivo font-bold">Courtney Henry</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-1.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">UI/UX Designer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darlene Robertson</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-2.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Tester</p>
                            <p class="text-heading-6 font-chivo font-bold">Devon Lane</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-3.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Developer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darrell Steward</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-3.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Developer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darrell Steward</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-2.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">UI/UX Designer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darlene Robertson</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-2.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">UI/UX Designer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darlene Robertson</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-1.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Developer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darrell Steward</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-3.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Project Manager</p>
                            <p class="text-heading-6 font-chivo font-bold">Courtney Henry</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-1.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">UI/UX Designer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darlene Robertson</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-2.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Tester</p>
                            <p class="text-heading-6 font-chivo font-bold">Devon Lane</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-3.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Developer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darrell Steward</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-3.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Developer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darrell Steward</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-2.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">UI/UX Designer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darlene Robertson</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-2.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">UI/UX Designer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darlene Robertson</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-1.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Software Developer</p>
                            <p class="text-heading-6 font-chivo font-bold">Darrell Steward</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-[30px]"> <img class="h-full w-full object-cover" src="/assets/images/team-3.png"
                            alt="team member picture">
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="mb-3">
                            <p class="text-md mb-2 opacity-50 text-[#0A3361]">Project Manager</p>
                            <p class="text-heading-6 font-chivo font-bold">Courtney Henry</p>
                        </div>
                        <p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6">Lorem ipsum dolor sit
                            amet consectetur imp adipiscing elit justo</p>
                        <div>
                            <p class="text-md text-gray-600 opacity-40 mb-5">Let’s Connect</p>
                            <div class="flex items-center gap-4 z-50">
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-facebook-gray.svg" alt="facebook icon"></NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-instagram-gray.svg" alt="instagram icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-twitter-gray.svg" alt="twitter icon">
                                </NuxtLink>
                                <NuxtLink class="transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1"
                                    to="#"><img class="h-full w-full object-cover"
                                        src="/assets/images/icons/icon-linkedin-gray.svg" alt="linkedin icon">
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/vue"
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        }
    },
}
</script>