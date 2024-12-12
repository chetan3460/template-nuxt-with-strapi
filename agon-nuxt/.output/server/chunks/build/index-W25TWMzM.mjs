import { _ as __nuxt_component_0$1 } from './nuxt-link-CvGZZJI3.mjs';
import { M as ModalVideo, _ as _imports_3 } from './virtual_public-nLEhPKKc.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, resolveComponent, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc, a as _imports_1$2 } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_0$2, a as _imports_1$3, b as _imports_2$1 } from './virtual_public-C3LypWMC.mjs';
import { _ as _imports_1$4, a as _imports_2$2, b as _imports_3$1 } from './virtual_public-CGWXnhd5.mjs';
import { _ as _imports_0$3 } from './virtual_public-CatqWA01.mjs';
import { _ as _imports_7, a as _imports_6 } from './virtual_public-DK7fe_BP.mjs';
import { _ as _imports_3$2 } from './virtual_public-DFfbIHzD.mjs';
import { _ as _imports_0$4, a as _imports_1$5 } from './virtual_public-CFL_IyyG.mjs';
import { _ as _imports_0$1 } from './virtual_public-BjNzXJKo.mjs';
import { _ as _imports_1$1, a as _imports_2 } from './virtual_public-BjCH7PF9.mjs';
import { _ as _imports_0$5 } from './virtual_public-9znkGGCe.mjs';
import { _ as _imports_4 } from './virtual_public-BUWQ-iTC.mjs';
import { _ as _imports_2$3 } from './virtual_public-Cet6Xz5C.mjs';
import { _ as _imports_1$6 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_2$4 } from './virtual_public-BYCduXmb.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_1 = publicAssetsURL("/assets/images/hero-4.png");
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
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><div class="full-width banner-hero bg-green-900"><div class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center"><div class="lg:w-[60%] lg:mr-[150px]"><h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] text-white mb-[30px]">Advanced analytics to grow your business</h1><p class="text-quote md:text-lead-lg text-gray-200 pr-[40px] lg:pr-[60px] mb-[44px]">Integrated workflow designed for product teams. We create world-class development and branding</p><div class="flex items-center justify-start mb-[50px]"><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-orange-900 text-white hover:bg-gray-900 text-heading-6 tracking-wide mr-[22px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Start</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-white"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Start"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-white group-hover:filter-white",
              src: _imports_1$2,
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
    class: "text-base flex items-center font-chivo font-medium text-white text-[18px] leading-[18px] gap-[5px]",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Learn More`);
      } else {
        return [
          createTextVNode("Learn More")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center gap-14"><div><p class="text-heading-4 font-bold font-chivo text-white">5000+</p><p class="text-md text-gray-300">Happy Clients</p></div><div><p class="text-heading-4 font-bold font-chivo text-white">756+</p><p class="text-md text-gray-300">Project Done</p></div><div><p class="text-heading-4 font-bold font-chivo text-white">100%</p><p class="text-md text-gray-300">Client Satisfaction</p></div></div></div><div class="hidden relative lg:block"><img class="h-full w-full object-cover animate-hero-thumb-sm-animation"${ssrRenderAttr("src", _imports_1)} alt="Agon"><div class="bg-green-900 rounded-full left-0 absolute grid place-items-center md:w-[108px] md:h-[108px] top-1/2 -translate-x-1/2 -translate-y-1/2"><button class="rounded-full bg-white grid place-items-center absolute play-video left-auto w-[60px] h-[60px] md:w-[91px] md:h-[91px]"><img${ssrRenderAttr("src", _imports_3)} alt="play button" width="26"></button></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home4/Section1.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex flex-col gap-8 lg:mt-[136px] lg:flex-row xl:gap-[88px]" }, _attrs))}><div><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-[28px]"> How It Works </h1><p class="text-excerpt text-gray-600">Ac sapien purus tristique neque nibh vitae faucibus non phasellus vulputate nulla in eget amet, risus</p></div><div class="lg:flex lg:items-center gap-[30px]"><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0 flex-col"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">1. Acquisition </h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0 flex-col"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_1$3)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">2. Activation </h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] flex-col"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_2$1)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">3. Retention </h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home4/Section2.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0 = publicAssetsURL("/assets/images/thumbnail-6.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[112px]" }, _attrs))}><div class="lg:grid lg:grid-cols-2 gap-[150px]"><img class="h-full w-full object-cover rounded-2xl order-0 mb-[30px] lg:mb-0 lg:flex-1"${ssrRenderAttr("src", _imports_0)} alt="Agon"><div class="flex-1 order-1 lg:gap-[30px] xl:gap-[64px]"><span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">What We Do, What You Get</span><h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">The intelligent way to manage projects</h3><p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]"></p><div class="md:mt-[90px]"><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_1$4)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Work smarter with powerful features</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_2$2)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Designed for teams of all sorts and sizes</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_3$1)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Advanced analytics to grow your business</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home4/Section3.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-bg-6" }, _attrs))}><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex flex-col gap-6 mx-auto py-[98px] lg:flex-row max-w-[1320px]"><div class="flex-[1.36] mr-[90px]"><span class="font-chivo inline-block bg-bg-9 text-gray-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[36px]">Built Exclusively For You</span><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-[25px]">Don\u2019t take our word for it. See what our clients say.</h1><p class="text-quote md:text-lead-lg text-gray-600 mb-[55px]">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1$2,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="flex flex-col gap-8 flex-1"><div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]"><p class="text-text mb-[15px]">&quot;No matter where you go, It&#39;s is the coolest, most happening thing around! Not able to tell you how happy I am with it.&quot;</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover rounded-full max-w-[80px]"${ssrRenderAttr("src", _imports_0$3)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-lead">Jenny Wilson</p><p class="text-md text-gray-500">Biffco Enterprises Ltd.</p></div></div></div><div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]"><p class="text-text mb-[15px]">&quot;Wow what great service, I love it! It&#39;s is the most valuable business resource we have EVER purchased. We can&#39;t understand how we&#39;ve been living without it. I couldn&#39;t have asked for more than this.&quot;</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover rounded-full max-w-[80px]"${ssrRenderAttr("src", _imports_7)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-lead">Jenny Wilson</p><p class="text-md text-gray-500">Biffco Enterprises Ltd.</p></div></div></div></div><div class="flex flex-col gap-8 flex-1"><div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]"><p class="text-text mb-[15px]">&quot;Your company is truly upstanding and is behind its product 100%. It&#39;s the perfect solution for our business. It has really helped our business. Needless to say we are extremely satisfied with the results. &quot;</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover rounded-full max-w-[80px]"${ssrRenderAttr("src", _imports_3$2)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-lead">Jenny Wilson</p><p class="text-md text-gray-500">Biffco Enterprises Ltd.</p></div></div></div><div class="bg-white transition-all duration-300 px-[35px] pt-[33px] pb-[28px] hover:translate-y-[-3px]"><p class="text-text mb-[15px]">&quot;It&#39;s is both attractive and highly adaptable. It&#39;s exactly what I&#39;ve been looking for. Definitely worth the investment.&quot;</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover rounded-full max-w-[80px]"${ssrRenderAttr("src", _imports_6)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-lead">Jenny Wilson</p><p class="text-md text-gray-500">Biffco Enterprises Ltd.</p></div></div></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home4/Section4.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[133px]" }, _attrs))}><div class="text-center mb-[30px] md:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Discover powerful features to boost your productivity</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum \u2014 semper quis lectus nulla.</p></div><div class="mx-auto lg:flex gap-[30px] max-w-[1190px]"><div class="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">Cross-Platform</h3><p class="text-md text-gray-600 mb-[22px] lg:mx-16">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p><img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"${ssrRenderAttr("src", _imports_0$4)} alt="Feature image"></div><div class="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-6"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">Extremely Flexible</h3><p class="text-md text-gray-600 mb-[22px] lg:mx-16">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p><img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"${ssrRenderAttr("src", _imports_1$5)} alt="Feature image"></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home4/Section5.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {
  __name: "Section6",
  __ssrInlineRender: true,
  setup(__props) {
    const isToggled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[278px]" }, _attrs))}><div class="text-center"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]"> Choose The Best Plan That\u2019s For You</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p></div><div class="flex items-center justify-center gap-[10px] mb-[54px] text-gray-900"><p class="text-text">Bill Monthly </p><div class="flex items-center justify-center"><label class="flex items-center cursor-pointer" for="billSwitch"><div class="relative"><input class="sr-only peer" id="billSwitch" type="checkbox" name=""><div class="block rounded-full w-[65px] h-[30px] bg-gray-900 peer-checked:bg-green-900"></div><div class="dot absolute left-1 top-1 rounded-full transition h-[21px] w-[21px] bg-white"></div></div></label></div><p class="text-text">Bill Annually </p></div><div class="package"><div class="grid package-list gap-[30px] md:grid-cols-2 xl:grid-cols-4"><div class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card border border-gray-900 bill-monthly"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$`);
      if (isToggled.value) {
        _push(`<!--[-->420<!--]-->`);
      } else {
        _push(`<!--[-->35<!--]-->`);
      }
      _push(`</span><span class="text-sm font-bold text-gray-400 ml-[2px]">/`);
      if (isToggled.value) {
        _push(`<!--[-->year<!--]-->`);
      } else {
        _push(`<!--[-->month<!--]-->`);
      }
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
              createVNode("i", null, [
                createVNode("img", {
                  class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                  src: _imports_1$2,
                  alt: "arrow right icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><div class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card active border border-gray-900 bill-monthly"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$`);
      if (isToggled.value) {
        _push(`<!--[-->1068<!--]-->`);
      } else {
        _push(`<!--[-->89<!--]-->`);
      }
      _push(`</span><span class="text-sm font-bold text-gray-400 ml-[2px]">/`);
      if (isToggled.value) {
        _push(`<!--[-->year<!--]-->`);
      } else {
        _push(`<!--[-->month<!--]-->`);
      }
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
              createVNode("i", null, [
                createVNode("img", {
                  class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                  src: _imports_1$2,
                  alt: "arrow right icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><div class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card border border-gray-900 bill-monthly"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$`);
      if (isToggled.value) {
        _push(`<!--[-->1500<!--]-->`);
      } else {
        _push(`<!--[-->125<!--]-->`);
      }
      _push(`</span><span class="text-sm font-bold text-gray-400 ml-[2px]">/`);
      if (isToggled.value) {
        _push(`<!--[-->year<!--]-->`);
      } else {
        _push(`<!--[-->month<!--]-->`);
      }
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
              createVNode("i", null, [
                createVNode("img", {
                  class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                  src: _imports_1$2,
                  alt: "arrow right icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><div class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card border border-gray-900 bill-monthly"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$`);
      if (isToggled.value) {
        _push(`<!--[-->2388<!--]-->`);
      } else {
        _push(`<!--[-->199<!--]-->`);
      }
      _push(`</span><span class="text-sm font-bold text-gray-400 ml-[2px]">/`);
      if (isToggled.value) {
        _push(`<!--[-->year<!--]-->`);
      } else {
        _push(`<!--[-->month<!--]-->`);
      }
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
              createVNode("i", null, [
                createVNode("img", {
                  class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                  src: _imports_1$2,
                  alt: "arrow right icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home4/Section6.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[138px]" }, _attrs))}><div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-[45px] md:mb-[87px]"><div><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Latest News</h2><p class="text-quote md:text-lead-lg text-gray-600">From Our blog and Event fanpage</p></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>View More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "View More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
              src: _imports_1$2,
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
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>company</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>We can blend colors multiple ways, the most common</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$5)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
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
                  src: _imports_0$5,
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
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Customer Services</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>Design Studios That Everyone Should Know About?</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_2$3)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
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
                  src: _imports_2$3,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home4/Section7.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] md:mt-[150px]" }, _attrs))}><div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-bg-6 md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]" padding="px-[15px] py-[50px] md:px-[52px] md:py-[72px]"><div class="flex-1 mb-[30px]"><p class="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">newsletter</p><h4 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">Subscribe our newsletter</h4><p class="text-text text-gray-500">By clicking the button, you are agreeing with our</p>`);
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
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_1$2)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$6)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2$4)} alt="Agon"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home4/Section8.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative home-page-4"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHome4Section1 = __nuxt_component_0;
      const _component_SectionsHome4Section2 = __nuxt_component_1;
      const _component_SectionsHome4Section3 = __nuxt_component_2;
      const _component_SectionsHome4Section4 = __nuxt_component_3;
      const _component_SectionsHome4Section5 = __nuxt_component_4;
      const _component_SectionsHome4Section6 = _sfc_main$3;
      const _component_SectionsHome4Section7 = __nuxt_component_6;
      const _component_SectionsHome4Section8 = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsHome4Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome4Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome4Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome4Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome4Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome4Section6, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome4Section7, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome4Section8, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-4/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-W25TWMzM.mjs.map
