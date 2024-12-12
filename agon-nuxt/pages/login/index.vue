<template>
    <div class="full-width flex">
        <div class="hidden flex-[1.2] lg:block"><img class="h-full object-cover" src="/assets/images/thumbnail-18.png" alt="Agon" /></div>
        <div class="flex-1 bg-bg-2 text-center grid place-items-center py-[50px]">
            <div class="max-w-[400px]">
                <h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[50px]">Welcome back.</h2>
                <button type="button">
                    <a class="flex items-center z-10 relative transition-all duration-200 group py-[13px] md:px-[95px] px-[60px] rounded-md bg-white text-gray-500 hover:text-gray-900 flex-row-reverse w-fit mb-[30px]" href="#"><span class="block text-inherit w-full h-full rounded-md text-md font-chivo font-semibold">Sign In with Google</span><img class="mr-5" src="/assets/images/icons/Icon-google.svg" alt="google icon" /></a>
                </button>
                <div class="flex items-center justify-center gap-[7px] mb-[25px]">
                    <div class="bg-gray-300 w-[50px] h-[2px]"></div>
                    <p class="text-text text-gray-500">Or, sign in with your email</p>
                    <div class="bg-gray-300 w-[50px] h-[2px]"></div>
                </div>
                <form class="bg-white w-full p-8 shadow-3 rounded-[6px] md:p-12" action="#">
                    <div class="relative mb-6"><input class="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" type="text" placeholder="Your name *" required /><a class="text-text text-green-900 absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]" href="#">Edit</a></div>
                    <div class="relative mb-6 last-of-type:mb-4">
                        <input class="outline-none flex-1 pr-3 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" required type="password" name="password" id="password" /><span class="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">Password</span><i class="absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]"> <img src="/assets/images/icons/icon-eye-gray.svg" alt="eye icon" /></i>
                    </div>
                    <button class="mb-6 w-full text-white bg-green-900 transition-opacity duration-200 text-heading-6 font-chivo font-bold shadow-sm py-[13px] hover:opacity-75" type="submit">Continue</button>
                    <div class="flex gap-2">
                        <p class="text-text text-gray-500">Don’t have an account?</p>
                        <a class="text-green-900 hover:opacity-70" href="/signup">
                            <p class="text-text">Sign up</p>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
useHead({
    bodyAttrs: {
        class: "overflow-x-hidden w-screen relative login-page"
    }
});
</script>
