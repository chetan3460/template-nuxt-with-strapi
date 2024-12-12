<template>
    <div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto max-w-[1090px]">
        <div class="mx-auto max-w-[866px]">
            <h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">Job Description</h3>
            <p class="text-text">The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.</p>
            <br />
            <p class="text-text">The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>
            <br />
        </div>
        <div class="relative mx-auto max-w-[1190px]">
            <img class="h-full w-full object-cover rounded-2xl" src="/assets/images/thumbnail-12.png" alt="Agon" /> <button @click="openVideo" class="rounded-full bg-white grid place-items-center absolute play-video w-[60px] h-[60px] md:w-[138px] md:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><img src="/assets/images/icons/icon-play.svg" alt="play button" width="26" /></button><br />
        </div>
        <div class="mx-auto max-w-[866px]">
            <h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">Essential Knowledge, Skills, and Experience</h3>
            <ul class="list-disc pl-5">
                <li>A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                <li>5+ years of industry experience in interactive design and / or visual design</li>
                <li>Excellent interpersonal skills</li>
                <li>Aware of trends in mobile, communications, and collaboration</li>
                <li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                <li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                <li>History of impacting shipping products with your work</li>
                <li>A Bachelor’s Degree in Design (or related field) or equivalent professional experience</li>
                <li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
            </ul>
            <br />
            <h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">Preferred Experience</h3>
            <ul class="list-disc pl-5">
                <li>Designing user experiences for enterprise software / services</li>
                <li>Creating and applying established design principles and interaction patterns</li>
                <li>Aligning or influencing design thinking with teams working in other geographies</li>
            </ul>
            <br />
            <h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">Product Designer</h3>
            <p class="text-text">Product knowledge: Deeply understand the technology and features of the product area to which you are assigned.</p>
            <p class="text-text">Research: Provide human and business impact and insights for products.</p>
            <p class="text-text">Deliverables: Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.</p>
            <p class="text-text">Communication: Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.</p>
            <div class="w-full opacity-10 h-[1px] bg-[#061224] mt-[50px] mb-[34px]"></div>
            <div class="flex items-center justify-between flex-col md:flex-row gap-[30px]">
                <div class="flex items-center gap-[22px]">
                    <button type="button">
                        <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-green-900 text-white hover:bg-gray-900" to="#"
                            ><span class="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-chivo font-semibold">Apply Now</span><i> <img class="ml-[7px] w-[12px] filter-white group-hover:filter-white" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                        ></NuxtLink>
                    </button>
                    <button type="button">
                        <NuxtLink class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white" to="#"
                            ><span class="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-chivo font-semibold">Contact Us</span><i> <img class="ml-[7px] w-[12px] filter-black group-hover:filter-white" src="/assets/images/icons/icon-right.svg" alt="arrow right icon" /></i
                        ></NuxtLink>
                    </button>
                </div>
                <div class="flex items-center gap-[15px]">
                    <div class="border border-opacity-10 flex items-center border-[#061224] rounded-[5px] py-[10px] px-[15px] gap-[11px]">
                        <img src="/assets/images/icons/icon-facebook-color.svg" alt="social icon" />
                        <p class="text-text text-[#37404E]">Share</p>
                    </div>
                    <div class="border border-opacity-10 flex items-center border-[#061224] rounded-[5px] py-[10px] px-[15px] gap-[11px]">
                        <img src="/assets/images/icons/icon-twitter-color.svg" alt="social icon" />
                        <p class="text-text text-[#37404E]">Tweet</p>
                    </div>
                    <div class="border border-opacity-10 flex items-center border-[#061224] rounded-[5px] py-[10px] px-[15px] gap-[11px]">
                        <img src="/assets/images/icons/icon-pinterest-color.svg" alt="social icon" />
                        <p class="text-text text-[#37404E]">Pin</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <modal-video :channel="videoChannel" :videoId="videoId" v-model:isOpen="videoIsOpen" />
</template>
<script>
import ModalVideo from "../components/elements/ModalVideo.vue";
export default {
    components: {
        ModalVideo
    },
    data: () => {
        return {
            videoIsOpen: false
        };
    },
    methods: {
        openVideo() {
            this.videoIsOpen = !this.videoIsOpen;
        }
    },
    computed: {
        videoChannel: function () {
            //Logic to extract based on URL
            return "youtube";
        },
        videoId: function () {
            //Logic to extract based on URL
            return "QiqQoqtnHrk";
        }
    }
};
</script>
