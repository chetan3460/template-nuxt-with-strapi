<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]">
        <div class="items-center justify-between md:flex mb-[30px] md:mb-[80px]">
            <div>
                <h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Our Happy Customers</h2>
                <p class="text-quote md:text-lead-lg text-gray-600">Know about our clients, we are a woldwide corporate brand</p>
            </div>
            <div class="flex items-center gap-5 self-end">
                <div class="tap1 place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-prev grid">
                    <img class="group-hover:filter-white" src="/assets/images/icons/icon-prev.svg" alt="control icon button" />
                </div>
                <div class="tan1 place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-next grid">
                    <img class="group-hover:filter-white" src="/assets/images/icons/icon-next.svg" alt="control icon button" />
                </div>
            </div>
        </div>
        <SliderTestimonial1 />
    </div>
</template>
