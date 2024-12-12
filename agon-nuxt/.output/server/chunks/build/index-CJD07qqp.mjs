import { _ as __nuxt_component_0$1 } from './nuxt-link-CvGZZJI3.mjs';
import { useSSRContext, withCtx, createVNode, createTextVNode, mergeProps, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead, _ as _export_sfc, a as _imports_1 } from './server.mjs';
import { _ as _imports_3 } from './virtual_public-6U-jVfO3.mjs';
import { M as ModalVideo, _ as _imports_3$1 } from './virtual_public-nLEhPKKc.mjs';
import { _ as _imports_8$1 } from './virtual_public-BWmlYrrs.mjs';
import { _ as _imports_0$1, a as _imports_1$1, b as _imports_2$2 } from './virtual_public-C3LypWMC.mjs';
import { _ as _imports_0$2 } from './virtual_public-Bu2XTia_.mjs';
import { _ as _imports_3$2 } from './virtual_public-DwzqiSUB.mjs';
import { _ as _imports_3$3 } from './virtual_public-DWqgV7xc.mjs';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _imports_0$3, a as _imports_1$2 } from './virtual_public-BzD1hskI.mjs';
import { _ as _imports_2$3, a as _imports_3$4, b as _imports_4, c as _imports_5 } from './virtual_public-BZYYrGOL.mjs';
import { _ as __nuxt_component_0$2 } from './Testimonial1-Bce7avcF.mjs';
import { _ as _imports_0$4 } from './virtual_public-9znkGGCe.mjs';
import { _ as _imports_4$1 } from './virtual_public-BUWQ-iTC.mjs';
import { _ as _imports_2$4 } from './virtual_public-Cet6Xz5C.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './virtual_public-MKHZdP9B.mjs';
import './virtual_public-B-ThRufd.mjs';
import './virtual_public-ug1V0zRq.mjs';
import './virtual_public-D-HlBqo0.mjs';

const _imports_0 = publicAssetsURL("/assets/images/about-1-bg.png");
const _imports_2$1 = publicAssetsURL("/assets/images/thumbnail-21.png");
const _sfc_main$8 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<!--[--><img class="w-full absolute left-0 z-0 object-fill top-[112px] h-[750px]"${ssrRenderAttr("src", _imports_0)} alt="Agon"><div class="full-width banner-hero banner-2"><div class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center"><div class="lg:w-[60%] lg:mr-[150px]"><span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">What We Do, What You Get</span><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-[20px]">A small creative team excited to create beautiful things</h1><p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[44px] md:w-[36ch]">Integrated workflow designed for product teams. We create world-class development and branding</p><div class="flex items-center justify-start mb-[50px]"><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Join Our Team</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Join Our Team"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
              src: _imports_1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i><img class="ml-[7px] w-[12px]"${ssrRenderAttr("src", _imports_1)} alt="arrow right icon"></i></div></div><div class="hidden relative lg:block"><img class="animate-float absolute rounded-2xl max-w-[240px] max-h-[340px] bottom-[-12%] left-[-50%]"${ssrRenderAttr("src", _imports_2$1)} alt="Agon"><img class="animate-hero-thumb-sm-animation max-w-[512px] max-h-[689px]"${ssrRenderAttr("src", _imports_3)} alt="Agon"></div></div></div><!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About1/Section1.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[88px]" }, _attrs))}><div class="grid grid-cols-2 flex-1 text-center gap-2 gap-y-8 md:grid-cols-2 xl:gap-y-[70px] lg:grid-cols-4 mb-[45px] md:mb-[88px]"><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">+12</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">years in business</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">2K+</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">projects done</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">28+</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">countries /offices</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">86</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">Constant clients</p></div></div><div class="bg-gray-300 mx-auto w-[90%] h-[1px]"></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About1/Section2.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {
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
    videoChannel: function() {
      return "youtube";
    },
    videoId: function() {
      return "QiqQoqtnHrk";
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center lg:mt-[137px]"><span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[18px]">What We Do, What You Get</span><div class="text-center mb-[40px] md:mb-[62px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">We believe in the power of creative ideas</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p></div><div class="relative mx-auto max-w-[1190px]"><img class="h-full w-full object-cover rounded-2xl"${ssrRenderAttr("src", _imports_8$1)} alt="Agon"><button class="rounded-full bg-white grid place-items-center absolute play-video w-[60px] h-[60px] md:w-[138px] md:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><img${ssrRenderAttr("src", _imports_3$1)} alt="play button" width="26"></button></div></div>`);
  _push(ssrRenderComponent(_component_modal_video, {
    channel: $options.videoChannel,
    videoId: $options.videoId,
    isOpen: _ctx.videoIsOpen,
    "onUpdate:isOpen": ($event) => _ctx.videoIsOpen = $event
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About1/Section3.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="text-center mb-[40px] lg:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] w-full">Providing solutions of every kind</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">In a professional context it often happens that private or corporate clients order a publication to publish news.</p></div><div class="lg:flex lg:items-center gap-[30px]"><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">1. Acquisition</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">2. Activation</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px]"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_2$2)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">3. Retention</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About1/Section4.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="text-center"><span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[19px]">What We Do, What You Get</span></div><div class="text-center mb-[70px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] md:w-[19ch]">Bringing the world&#39;s ideas to life</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[63ch]">Developers are trusted to create an engaging experience for their companies, so we build tools to help them.</p></div><div class="lg:flex lg:gap-5 xl:gap-[30px]"><div class="relative mb-5 flex flex-col justify-between transition-all duration-300 border-bg-4 border-[10px] p-[30px] md:py-[53px] md:px-[48px] hover:translate-y-[-2px]"><div><img class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Business strategy</h2><p class="text-excerpt text-gray-600 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="relative mb-5 flex flex-col justify-between transition-all duration-300 border-bg-9 border-[10px] p-[30px] md:py-[53px] md:px-[48px] hover:translate-y-[-2px]"><div><img class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_3$2)} alt="icon"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Local Marketing</h2><p class="text-excerpt text-gray-600 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="relative mb-5 flex flex-col justify-between transition-all duration-300 border-bg-2 border-[10px] p-[30px] md:py-[53px] md:px-[48px] hover:translate-y-[-2px]"><div><img class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_3$3)} alt="icon"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Social Media</h2><p class="text-excerpt text-gray-600 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About1/Section5.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_2 = publicAssetsURL("/assets/images/team-1.png");
const _imports_7 = publicAssetsURL("/assets/images/team-2.png");
const _imports_8 = publicAssetsURL("/assets/images/team-3.png");
const _sfc_main$3 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="items-center justify-between md:flex mb-[80px] md:mb-[90px]"><div class="mb-8"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]"> Our Team</h2><p class="text-quote md:text-lead-lg text-gray-600">Decades of experience in design and development </p></div><div class="flex items-center gap-5"><div class="t1p place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 team-prev grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_0$3)} alt="control icon button"></div><div class="t1n place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 team-next grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_1$2)} alt="control icon button"></div></div></div>`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 1,
    "space-between": 0,
    loop: true,
    autoplay: {
      delay: 8e3,
      disableOnInteraction: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".t1n",
      prevEl: ".t1p"
    },
    modules: $setup.modules,
    class: "team-list"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>UI/UX Designer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darlene Robertson</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_7)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Tester</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Devon Lane</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_8)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Developer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darrell Steward</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_8)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Developer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darrell Steward</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_7)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>UI/UX Designer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darlene Robertson</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_7)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>UI/UX Designer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darlene Robertson</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Developer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darrell Steward</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_8)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Project Manager</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Courtney Henry</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_2,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_7,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Tester"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Devon Lane")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_8,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_8,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_7,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_7,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_2,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_8,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Project Manager"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Courtney Henry")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>UI/UX Designer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darlene Robertson</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_7)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Tester</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Devon Lane</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_8)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Developer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darrell Steward</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_8)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Developer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darrell Steward</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_7)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>UI/UX Designer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darlene Robertson</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_7)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>UI/UX Designer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darlene Robertson</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Developer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darrell Steward</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_8)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Project Manager</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Courtney Henry</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_2,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_7,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Tester"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Devon Lane")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_8,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_8,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_7,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_7,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_2,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_8,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Project Manager"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Courtney Henry")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>UI/UX Designer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darlene Robertson</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_7)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Tester</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Devon Lane</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_8)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Developer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darrell Steward</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_8)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Developer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darrell Steward</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_7)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>UI/UX Designer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darlene Robertson</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_7)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>UI/UX Designer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darlene Robertson</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Software Developer</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Darrell Steward</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div><div${_scopeId2}><div class="mb-[30px]"${_scopeId2}><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_8)} alt="team member picture"${_scopeId2}></div><div class="flex flex-col justify-between"${_scopeId2}><div class="mb-3"${_scopeId2}><p class="text-md mb-2 opacity-50 text-[#0A3361]"${_scopeId2}>Project Manager</p><p class="text-heading-6 font-chivo font-bold"${_scopeId2}>Courtney Henry</p></div><p class="text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6"${_scopeId2}>Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo</p><div${_scopeId2}><p class="text-md text-gray-600 opacity-40 mb-5"${_scopeId2}>Let\u2019s Connect</p><div class="flex items-center gap-4 z-50"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="facebook icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_2$3,
                        alt: "facebook icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3$4)} alt="instagram icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_3$4,
                        alt: "instagram icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="twitter icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_4,
                        alt: "twitter icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_5)} alt="linkedin icon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover",
                        src: _imports_5,
                        alt: "linkedin icon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div></div></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_2,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_7,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Tester"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Devon Lane")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_8,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_8,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_7,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_7,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_2,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mb-[30px]" }, [
                    createVNode("img", {
                      class: "h-full w-full object-cover",
                      src: _imports_8,
                      alt: "team member picture"
                    })
                  ]),
                  createVNode("div", { class: "flex flex-col justify-between" }, [
                    createVNode("div", { class: "mb-3" }, [
                      createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Project Manager"),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Courtney Henry")
                    ]),
                    createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                    createVNode("div", null, [
                      createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                      createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_2$3,
                              alt: "facebook icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_3$4,
                              alt: "instagram icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_4,
                              alt: "twitter icon"
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_NuxtLink, {
                          class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                          to: "#"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "h-full w-full object-cover",
                              src: _imports_5,
                              alt: "linkedin icon"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, {
            default: withCtx(() => [
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_2,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_7,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Tester"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Devon Lane")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_8,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_8,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_7,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_7,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_2,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_8,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Project Manager"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Courtney Henry")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, {
            default: withCtx(() => [
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_2,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_7,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Tester"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Devon Lane")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_8,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_8,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_7,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_7,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_2,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_8,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Project Manager"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Courtney Henry")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "grid-cols-1 !grid gap-x-[30px] gap-y-[48px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" }, {
            default: withCtx(() => [
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_2,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_7,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Tester"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Devon Lane")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_8,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_8,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_7,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_7,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "UI/UX Designer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darlene Robertson")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_2,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Software Developer"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Darrell Steward")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("div", null, [
                createVNode("div", { class: "mb-[30px]" }, [
                  createVNode("img", {
                    class: "h-full w-full object-cover",
                    src: _imports_8,
                    alt: "team member picture"
                  })
                ]),
                createVNode("div", { class: "flex flex-col justify-between" }, [
                  createVNode("div", { class: "mb-3" }, [
                    createVNode("p", { class: "text-md mb-2 opacity-50 text-[#0A3361]" }, "Project Manager"),
                    createVNode("p", { class: "text-heading-6 font-chivo font-bold" }, "Courtney Henry")
                  ]),
                  createVNode("p", { class: "text-excerpt text-gray-600 line-clamp-2 opacity-60 mb-6" }, "Lorem ipsum dolor sit amet consectetur imp adipiscing elit justo"),
                  createVNode("div", null, [
                    createVNode("p", { class: "text-md text-gray-600 opacity-40 mb-5" }, "Let\u2019s Connect"),
                    createVNode("div", { class: "flex items-center gap-4 z-50" }, [
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_2$3,
                            alt: "facebook icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_3$4,
                            alt: "instagram icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_4,
                            alt: "twitter icon"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_NuxtLink, {
                        class: "transition-transform duration-200 w-[26px] h-[26px] hover:-translate-y-1",
                        to: "#"
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            class: "h-full w-full object-cover",
                            src: _imports_5,
                            alt: "linkedin icon"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About1/Section6.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_SliderTestimonial1 = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="items-center justify-between md:flex mb-[30px] md:mb-[90px]"><div class="mb-8"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Our Happy Customers</h2><p class="text-quote md:text-lead-lg text-gray-600">Know about our clients, we are a woldwide corporate brand</p></div></div>`);
  _push(ssrRenderComponent(_component_SliderTestimonial1, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About1/Section7.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="items-center justify-between mb-[70px] md:mb-[90px] md:flex"><div class="mb-[30px]"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Latest News</h2><p class="text-quote md:text-lead-lg text-gray-600">From Our blog and Event fanpage</p></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>View More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "View More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
              src: _imports_1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>company</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>We can blend colors multiple ways, the most common</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$4)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "company")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "We can blend colors multiple ways, the most common"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_0$4,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Marketing Event</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>How To Blow Through Capital At An Incredible Rate</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_4$1)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "Marketing Event")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "How To Blow Through Capital At An Incredible Rate"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_4$1,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Customer Services</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>Design Studios That Everyone Should Know About?</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_2$4)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "Customer Services")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "Design Studios That Everyone Should Know About?"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_2$4,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About1/Section8.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative about-page-1"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsAbout1Section1 = __nuxt_component_0;
      const _component_SectionsAbout1Section2 = __nuxt_component_1;
      const _component_SectionsAbout1Section3 = __nuxt_component_2;
      const _component_SectionsAbout1Section4 = __nuxt_component_3;
      const _component_SectionsAbout1Section5 = __nuxt_component_4;
      const _component_SectionsAbout1Section6 = __nuxt_component_5;
      const _component_SectionsAbout1Section7 = __nuxt_component_6;
      const _component_SectionsAbout1Section8 = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsAbout1Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout1Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout1Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout1Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout1Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout1Section6, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout1Section7, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout1Section8, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-1/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CJD07qqp.mjs.map
