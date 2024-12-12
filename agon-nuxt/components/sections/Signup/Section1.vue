<template>
    <div class="full-width bg-bg-6 px-5 text-center flex flex-col items-center justify-center pt-[127px] pb-[300px] lg:pb-[400px]">
        <div class="max-w-[400px]">
            <h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[50px]">Let’s join us</h2>
            <button type="button">
                <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group py-[13px] md:px-[95px] px-[60px] rounded-md bg-white text-gray-500 hover:text-gray-900 flex-row-reverse w-fit mb-[30px]" to="#"><span class="block text-inherit w-full h-full rounded-md text-md font-chivo font-semibold">Sign up with Google</span><img class="mr-5" src="/assets/images/icons/Icon-google.svg" alt="google icon" /> </NuxtLink>
            </button>
            <div class="flex items-center justify-center gap-[7px] mb-[25px]">
                <div class="bg-gray-300 w-[50px] h-[2px]"></div>
                <p class="text-text text-gray-500">Or, sign up with your email</p>
                <div class="bg-gray-300 w-[50px] h-[2px]"></div>
            </div>
            <form class="bg-white w-full p-8 shadow-3 rounded-[6px] md:p-12" action="#">
                <div class="relative mb-6">
                    <input class="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" type="text" placeholder="Your name *" required />
                    <NuxtLink class="text-text text-green-900 absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]" to="#">Edit</NuxtLink>
                </div>
                <div class="relative mb-6">
                    <input class="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" type="text" placeholder="Your email *" required />
                </div>
                <div class="relative mb-6 last-of-type:mb-4">
                    <input class="outline-none flex-1 pr-3 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" required type="password" name="password" id="password" /><span class="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">Password</span><i class="absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]"> <img src="/assets/images/icons/icon-eye-gray.svg" alt="eye icon" /></i>
                </div>
                <div class="relative mb-6 last-of-type:mb-4">
                    <input class="outline-none flex-1 pr-3 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" required type="password" name="password" id="retype-password" /><span class="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">Re-type Password</span><i class="absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]"> <img src="/assets/images/icons/icon-eye-gray.svg" alt="eye icon" /></i>
                </div>
                <div class="flex items-center mb-6 gap-[7px]">
                    <div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]">
                        <input class="opacity-0 cursor-pointer relative z-10 peer" id="term" type="checkbox" name="term" /><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block" src="/assets/images/icons/icon-check-gray.svg" alt="checked icon" />
                        <div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-[#3B4256]"></div>
                    </div>
                    <span class="text-sm font-bold text-gray-500">Agree to <NuxtLink class="text-green-900 hover:opacity-70" to="/index">terms & conditions</NuxtLink></span>
                </div>
                <button class="mb-6 w-full text-white bg-green-900 transition-opacity duration-200 text-heading-6 font-chivo font-bold shadow-sm py-[13px] hover:opacity-75" type="submit">Continue</button>
                <div class="flex gap-2">
                    <p class="text-text text-gray-500">Already have an account?</p>
                    <NuxtLink class="text-green-900 hover:opacity-70" to="/login">
                        <p class="text-text">Sign in now</p>
                    </NuxtLink>
                </div>
            </form>
        </div>
    </div>
</template>
