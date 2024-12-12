import { M as ModalVideo, _ as _imports_3 } from './virtual_public-nLEhPKKc.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead, _ as _export_sfc, a as _imports_1$1 } from './server.mjs';
import { _ as _imports_0$2, a as _imports_1, b as _imports_2 } from './virtual_public-C3LypWMC.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CvGZZJI3.mjs';
import { _ as _imports_0$3 } from './virtual_public-CatqWA01.mjs';
import { _ as _imports_7, a as _imports_6 } from './virtual_public-DK7fe_BP.mjs';
import { _ as _imports_3$1 } from './virtual_public-DFfbIHzD.mjs';
import { _ as _imports_0$4 } from './virtual_public-DTZSeK32.mjs';
import { _ as _imports_0$5, a as _imports_1$2 } from './virtual_public-CFL_IyyG.mjs';
import { _ as _imports_0$6 } from './virtual_public-9znkGGCe.mjs';
import { _ as _imports_4 } from './virtual_public-BUWQ-iTC.mjs';
import { _ as _imports_2$1 } from './virtual_public-Cet6Xz5C.mjs';
import { _ as _imports_1$3 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_2$2 } from './virtual_public-BYCduXmb.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0$1 = publicAssetsURL("/assets/images/thumbnail-23.png");
const _sfc_main$8 = {
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
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center"><div class="text-center mb-[35px] md:mb-[43px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]"> Our Story</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p></div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 text-gray-600 mx-auto mb-[40px] md:mb-[75px] md:w-[47ch]"> We supply enterprises, organizations and institutes of high-tech industries with modern components. We build long-term trusting relationships with our customers and partnes for further fruitful cooperations. </h3><div class="relative mx-auto max-w-[1190px]"><img class="h-full w-full object-cover rounded-2xl"${ssrRenderAttr("src", _imports_0$1)} alt="Agon"><button class="rounded-full bg-white grid place-items-center absolute play-video w-[60px] h-[60px] md:w-[138px] md:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><img${ssrRenderAttr("src", _imports_3)} alt="play button" width="26"></button></div></div>`);
  _push(ssrRenderComponent(_component_modal_video, {
    channel: $options.videoChannel,
    videoId: $options.videoId,
    isOpen: _ctx.videoIsOpen,
    "onUpdate:isOpen": ($event) => _ctx.videoIsOpen = $event
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About3/Section1.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[138px]" }, _attrs))}><div class="text-center mb-[45px] lg:mb-[88px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-full">Providing solutions of every kind</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[743px]">In a professional context it often happens that private or corporate clients order a publication to publish news.</p></div><div class="lg:flex lg:items-center gap-[30px]"><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">1. Acquisition</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_1)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">2. Activation</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px]"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_2)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">3. Retention</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About3/Section2.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-bg-6" }, _attrs))}><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex flex-col gap-6 mx-auto py-[98px] lg:flex-row max-w-[1320px]"><div class="flex-[1.36] mr-[90px]"><span class="font-chivo inline-block bg-bg-9 text-gray-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[36px]">Built Exclusively For You</span><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-[25px]">Don\u2019t take our word for it. See what our clients say.</h1><p class="text-quote md:text-lead-lg text-gray-600 mb-[55px]">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1$1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="flex flex-col gap-8 flex-1"><div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]"><p class="text-text mb-[15px]">&quot;No matter where you go, It&#39;s is the coolest, most happening thing around! Not able to tell you how happy I am with it.&quot;</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover rounded-full max-w-[80px]"${ssrRenderAttr("src", _imports_0$3)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-lead">Jenny Wilson</p><p class="text-md text-gray-500">Biffco Enterprises Ltd.</p></div></div></div><div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]"><p class="text-text mb-[15px]">&quot;Wow what great service, I love it! It&#39;s is the most valuable business resource we have EVER purchased. We can&#39;t understand how we&#39;ve been living without it. I couldn&#39;t have asked for more than this.&quot;</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover rounded-full max-w-[80px]"${ssrRenderAttr("src", _imports_7)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-lead">Jenny Wilson</p><p class="text-md text-gray-500">Biffco Enterprises Ltd.</p></div></div></div></div><div class="flex flex-col gap-8 flex-1"><div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]"><p class="text-text mb-[15px]">&quot;Your company is truly upstanding and is behind its product 100%. It&#39;s the perfect solution for our business. It has really helped our business. Needless to say we are extremely satisfied with the results. &quot;</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover rounded-full max-w-[80px]"${ssrRenderAttr("src", _imports_3$1)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-lead">Jenny Wilson</p><p class="text-md text-gray-500">Biffco Enterprises Ltd.</p></div></div></div><div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]"><p class="text-text mb-[15px]">&quot;It&#39;s is both attractive and highly adaptable. It&#39;s exactly what I&#39;ve been looking for. Definitely worth the investment.&quot;</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover rounded-full max-w-[80px]"${ssrRenderAttr("src", _imports_6)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-lead">Jenny Wilson</p><p class="text-md text-gray-500">Biffco Enterprises Ltd.</p></div></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About3/Section3.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0 = publicAssetsURL("/assets/images/thumbnail-24.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="lg:grid lg:grid-cols-2 gap-[150px]"><img class="h-full w-full object-cover order-first rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"${ssrRenderAttr("src", _imports_0)} alt="Agon"><div class="flex-1 order-1 lg:gap-[30px] xl:gap-[64px]"><span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">An Exceptionally unique experience Tailored to you</span><h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">From the big picture to every tiny detail, we got you covered.</h3><p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">Necessary to deliver white glove, fully managed campaigns that surpass industry benchmarks.Take your career to next level. Apply to our team and see what we can do together. You\u2019re good enough.</p><div class="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]"><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$4)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Boost your sale</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$4)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Smart Installation Tools</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$4)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Introducing New Features</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$4)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Dynamic Boosting</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About3/Section4.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[88px]" }, _attrs))}><div class="grid grid-cols-2 flex-1 text-center gap-2 gap-y-8 md:grid-cols-2 xl:gap-y-[70px] lg:grid-cols-5 mb-[44px] md:mb-[88px]"><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">+12</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">years in business</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">2K+</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">projects done</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">28+</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">countries /offices</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">86</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">Constant clients</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900">+12</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">years in business</p></div></div><div class="w-full bg-gray-300 h-[1px]"></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About3/Section5.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[128px]" }, _attrs))}><div class="text-center mb-[30px] md:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] md:w-[23ch]">Building the Work Ecosystem</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[56ch]">From year to year we strive to invent the most innovative technology that is used by both small and big enterprises</p></div><div class="mx-auto lg:flex gap-[30px] max-w-[1190px]"><div class="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">Cross-Platform</h3><p class="text-md text-gray-600 mb-[22px] lg:mx-16">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p><img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"${ssrRenderAttr("src", _imports_0$5)} alt="Feature image"></div><div class="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-6"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">Extremely Flexible</h3><p class="text-md text-gray-600 mb-[22px] lg:mx-16">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p><img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"${ssrRenderAttr("src", _imports_1$2)} alt="Feature image"></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About3/Section6.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[238px]" }, _attrs))}><div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-[45px] md:mb-[87px]"><div><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">From Our Blog</h2><p class="text-quote md:text-lead-lg text-gray-600">From Our blog and Event fanpage</p></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>View More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "View More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
              src: _imports_1$1,
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
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>company</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>We can blend colors multiple ways, the most common</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$6)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
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
                  src: _imports_0$6,
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
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Marketing Event</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>How To Blow Through Capital At An Incredible Rate</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_4)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
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
                  src: _imports_4,
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
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Customer Services</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>Design Studios That Everyone Should Know About?</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_2$1)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
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
                  src: _imports_2$1,
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About3/Section7.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[138px]" }, _attrs))}><div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]" padding="px-[15px] py-[50px] md:px-[52px] md:py-[72px]"><div class="flex-1 mb-[30px]"><p class="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">newsletter</p><h4 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">Subscribe our newsletter</h4><p class="text-text text-gray-500">By clicking the button, you are agreeing with our</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-green-900",
    to: "/index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Term &amp; Conditions`);
      } else {
        return [
          createTextVNode("Term & Conditions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_1$1)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$3)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2$2)} alt="Agon"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About3/Section8.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative about-3-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsAbout3Section1 = __nuxt_component_0;
      const _component_SectionsAbout3Section2 = __nuxt_component_1;
      const _component_SectionsAbout3Section3 = __nuxt_component_2;
      const _component_SectionsAbout3Section4 = __nuxt_component_3;
      const _component_SectionsAbout3Section5 = __nuxt_component_4;
      const _component_SectionsAbout3Section6 = __nuxt_component_5;
      const _component_SectionsAbout3Section7 = __nuxt_component_6;
      const _component_SectionsAbout3Section8 = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsAbout3Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout3Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout3Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout3Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout3Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout3Section6, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout3Section7, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsAbout3Section8, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about-3/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-iGWOuikG.mjs.map
