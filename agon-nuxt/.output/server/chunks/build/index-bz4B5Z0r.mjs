import { _ as __nuxt_component_0$1 } from './nuxt-link-CvGZZJI3.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc, a as _imports_1 } from './server.mjs';
import { _ as _imports_1$1 } from './virtual_public-BOIFuNvI.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_0$1, b as _imports_2$1, a as _imports_4$2 } from './virtual_public-6Hhs9ole.mjs';
import { _ as _imports_0$2 } from './virtual_public-9znkGGCe.mjs';
import { _ as _imports_4$1 } from './virtual_public-BUWQ-iTC.mjs';
import { _ as _imports_1$2 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_0$3 } from './virtual_public-BjNzXJKo.mjs';
import { M as ModalVideo, _ as _imports_3$1 } from './virtual_public-nLEhPKKc.mjs';
import { _ as _imports_0$4 } from './virtual_public-DWP5uY88.mjs';
import { _ as _imports_0$5, a as _imports_1$3, b as _imports_2$2 } from './virtual_public-C3LypWMC.mjs';
import { _ as _imports_0$6 } from './virtual_public-DTZSeK32.mjs';
import { _ as _imports_0$7, a as _imports_1$4, b as _imports_2$3, c as _imports_3$2, d as _imports_4$3, e as _imports_5$1 } from './virtual_public-DSob6RUo.mjs';
import { _ as _imports_2$4, a as _imports_3$3 } from './virtual_public-D05v_FUI.mjs';
import { _ as _imports_2$5 } from './virtual_public-Cet6Xz5C.mjs';
import { _ as _imports_0$8 } from './virtual_public-edIg6YOR.mjs';
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

const _imports_2 = publicAssetsURL("/assets/images/hero-6.png");
const _imports_3 = publicAssetsURL("/assets/images/chart-1.png");
const _imports_4 = publicAssetsURL("/assets/images/icons/line-chart.svg");
const _sfc_main$8 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] items-center lg:flex" }, _attrs))}><div class="lg:w-[70%] mb-[80px]"><span class="font-chivo inline-block bg-green-900 text-white py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">Digital Marketing Agency</span><h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[54px]">The Fastest way to achieve success</h1><p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[150px] mb-[44px]">It was popularised in the 1960s with the release sheets. We bring the right people together</p><div class="flex items-center justify-start mb-[50px]"><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Start</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Start"),
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
  _push(`</button><div class="flex items-center gap-3"><i><img${ssrRenderAttr("src", _imports_1$1)} alt=""></i>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-base flex items-center font-chivo font-medium text-[18px] leading-[18px] gap-[5px]",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`How it works`);
      } else {
        return [
          createTextVNode("How it works")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="hidden relative lg:block"><img class="relative z-10 animate-hero-thumb-sm-animation"${ssrRenderAttr("src", _imports_2)} alt="Agon"><img class="absolute z-0 animate-float -right-1/4 top-[15%]"${ssrRenderAttr("src", _imports_3)} alt="chart image"><img class="absolute animate-float top-1/2"${ssrRenderAttr("src", _imports_4)} alt="line image"></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home6/Section1.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$7]]);
const _imports_5 = publicAssetsURL("/assets/images/icons/icon-right-arrow.svg");
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-bg-6 z-50" }, _attrs))}><div class="px-[12px] md:px-[36px] xl:px-0 mt-0 mx-auto hidden max-w-[1320px] lg:flex gap-[30px] -translate-y-[30%]"><div class="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between h-full",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center gap-4 mb-5"${_scopeId}><div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]"${_scopeId}><img class="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"${ssrRenderAttr("src", _imports_0$1)} alt=""${_scopeId}></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5"${_scopeId}>Computer for Designer, Art</h4></div><img class="object-cover rounded-2xl aspect-[285/160]"${ssrRenderAttr("src", _imports_0$2)} alt="Agon"${_scopeId}>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center gap-4 mb-5" }, [
            createVNode("div", { class: "bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]" }, [
              createVNode("img", {
                class: "rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white",
                src: _imports_0$1,
                alt: ""
              })
            ]),
            createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5" }, "Computer for Designer, Art")
          ]),
          createVNode("img", {
            class: "object-cover rounded-2xl aspect-[285/160]",
            src: _imports_0$2,
            alt: "Agon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-[20px] xl:p-[30px] border border-gray-200 bg-white group flex-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between h-full",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center gap-4 mb-5"${_scopeId}><div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]"${_scopeId}><img class="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"${ssrRenderAttr("src", _imports_2$1)} alt=""${_scopeId}></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5"${_scopeId}>Computer for Designer, Art</h4></div><img class="object-cover rounded-2xl aspect-[285/160]"${ssrRenderAttr("src", _imports_4$1)} alt="Agon"${_scopeId}>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center gap-4 mb-5" }, [
            createVNode("div", { class: "bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]" }, [
              createVNode("img", {
                class: "rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white",
                src: _imports_2$1,
                alt: ""
              })
            ]),
            createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5" }, "Computer for Designer, Art")
          ]),
          createVNode("img", {
            class: "object-cover rounded-2xl aspect-[285/160]",
            src: _imports_4$1,
            alt: "Agon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-[20px] border border-gray-200 group bg-white flex-[1.4]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex h-full",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col gap-1"${_scopeId}><div class="bg-opacity-20 rounded-full transition-all duration-200 w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-green-900"${_scopeId}><img class="rounded-full p-[8px] xl:p-[18px] max-w-[60px] group-hover:filter-white"${ssrRenderAttr("src", _imports_4$2)} alt=""${_scopeId}></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5"${_scopeId}>Computer for Designer, Art</h4><p class="text-gray-500 text-[14px] xl:text-lead-lg xl:mb-5"${_scopeId}>Real-time display of data</p><img class="w-[18px]"${ssrRenderAttr("src", _imports_5)} alt="arrow icon"${_scopeId}></div><img class="object-cover rounded-2xl xl:max-h-[249px] xl:max-w-[188px] max-w-[50%]"${ssrRenderAttr("src", _imports_1$2)} alt="Agon"${_scopeId}>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col gap-1" }, [
            createVNode("div", { class: "bg-opacity-20 rounded-full transition-all duration-200 w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-green-900" }, [
              createVNode("img", {
                class: "rounded-full p-[8px] xl:p-[18px] max-w-[60px] group-hover:filter-white",
                src: _imports_4$2,
                alt: ""
              })
            ]),
            createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5" }, "Computer for Designer, Art"),
            createVNode("p", { class: "text-gray-500 text-[14px] xl:text-lead-lg xl:mb-5" }, "Real-time display of data"),
            createVNode("img", {
              class: "w-[18px]",
              src: _imports_5,
              alt: "arrow icon"
            })
          ]),
          createVNode("img", {
            class: "object-cover rounded-2xl xl:max-h-[249px] xl:max-w-[188px] max-w-[50%]",
            src: _imports_1$2,
            alt: "Agon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home6/Section2.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] gap-8 flex flex-col lg:mt-[137px] lg:flex-row xl:gap-[180px]" }, _attrs))}><div class="grid grid-cols-1 flex-1 gap-[30px] md:grid-cols-2 xl:gap-y-[70px]"><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">17+</h1><p class="text-quote mb-3">Our Office</p><p class="text-text text-gray-500 mx-auto md:w-[26ch]">We always provide people a complete solution upon focused of any business</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">2K+</h1><p class="text-quote mb-3">Completed Cases</p><p class="text-text text-gray-500 mx-auto md:w-[26ch]">We always provide people a complete solution upon focused of any business</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">28+</h1><p class="text-quote mb-3">Happy Clients</p><p class="text-text text-gray-500 mx-auto md:w-[26ch]">We always provide people a complete solution upon focused of any business</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1">86</h1><p class="text-quote mb-3">Skilled People</p><p class="text-text text-gray-500 mx-auto md:w-[26ch]">We always provide people a complete solution upon focused of any business</p></div></div><div class="flex-1"><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-[30px] lg:mb-[53px]">Tell us about your business, we are ready to solve.</h1><div class="bg-white py-3 px-4 flex items-center justify-between border border-gray-100 input-shadow rounded-[10px] mb-[49px]"><input class="outline-none ml-5 w-1/2" type="text" placeholder="Enter you mail .."><div><button class="flex items-center transition-colors duration-200 py-[17px] px-[26px] rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-900 whitespace-nowrap flex-1 w-fit gap-5"> Get A Quote<i><img class="ml-[7px] w-[12px] filter-white"${ssrRenderAttr("src", _imports_1)} alt="arrow right icon"></i></button></div></div><div class="flex items-center gap-9"><div class="flex items-center gap-[10px]"><img${ssrRenderAttr("src", _imports_0$3)} alt="icon"><span class="text-md text-gray-500">Subscribe Newsletter</span></div><div class="flex items-center gap-[10px]"><img${ssrRenderAttr("src", _imports_0$3)} alt="icon"><span class="text-md text-gray-500">Get The Latest News</span></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home6/Section3.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[234px]"><div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] bg-bg-2"><div class="relative mx-auto max-w-[1190px] -translate-y-[50%] md:-translate-y-[30%] mb-[-50px]"><img class="h-full w-full object-cover rounded-2xl"${ssrRenderAttr("src", _imports_0$4)} alt="Agon"><button class="rounded-full bg-white grid place-items-center absolute play-video w-[100px] h-[100px] lg:w-[138px] lg:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><img${ssrRenderAttr("src", _imports_3$1)} alt="play button" width="26"></button></div><div class="lg:flex lg:items-center gap-[30px]"><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_0$5)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">1. Acquisition</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_1$3)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">2. Activation</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px]"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_2$2)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">3. Retention</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_modal_video, {
    channel: $options.videoChannel,
    videoId: $options.videoId,
    isOpen: _ctx.videoIsOpen,
    "onUpdate:isOpen": ($event) => _ctx.videoIsOpen = $event
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home6/Section4.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0 = publicAssetsURL("/assets/images/thumbnail-14.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="lg:grid lg:grid-cols-2 gap-[150px]"><img class="h-full w-full object-cover rounded-2xl order-0 mb-[30px] lg:mb-0 lg:flex-1"${ssrRenderAttr("src", _imports_0)} alt="Agon"><div class="flex-1 order-1 items-center lg:gap-[30px] xl:gap-[45px] !grid-cols-[637px_1fr]"><span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">What We Do, What You Get</span><h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">Exceptional Solution for Digital Business Model</h3><p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">In a professional context it often happens that private or corporate clients order a publication news while still not being ready.</p><div class="border border-green-900 border-dashed mb-[48px]"></div><div class="md:grid md:grid-cols-2 md:gap-y-[22px] lg:gap-x-[70px]"><div class="mb-[30px] lg:mb-0"><div class="flex items-center"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$6)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Boost your sale</h4></div></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$6)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Smart Installation Tools</h4></div></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$6)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Introducing New Features</h4></div></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$6)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Dynamic Boosting</h4></div></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home6/Section5.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[90px]" }, _attrs))}><div class="grid grid-cols-2 md:grid-cols-4 gap-x-[24px] lg:grid-cols-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$7)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$7,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$4)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$4,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2$3)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$3,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3$2)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3$2,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-2 lg:col-start-auto",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_4$3)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4$3,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-3 lg:col-start-auto",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home6/Section6.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-gray-100" }, _attrs))}><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto lg:mt-[143px] max-w-[1320px]"><div class="bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px]"><div class="mx-auto relative max-w-[1320px]"><img class="absolute right-0 max-w-[129px] top-[-50px]"${ssrRenderAttr("src", _imports_2$4)} alt="mail image"><p class="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">Contact us</p><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">Have an project in mind?</h2><p class="text-text text-gray-600 mb-[30px] md:mb-[60px]">The right move at the right time saves your investment. live the dream of expanding your business.</p><div class="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]"><div><div class="flex gap-[13px] mb-[15px] md:mb-[25px]"><i><img${ssrRenderAttr("src", _imports_3$3)} alt="home icon"></i><p class="text-heading-6 font-bold font-chivo">Agon Studio</p></div><p class="text-text text-gray-600">4517 Washington Ave.</p><p class="text-text text-gray-600 mb-[10px] md:mb-[16px]">Manchester, Kentucky 39495</p><p class="text-text text-gray-600 underline">(239) 555-0108</p><p class="text-text text-gray-600 underline">contact@agon.com</p></div><form class="flex-1" action="/"><div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Enter your name"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Company (optional)"></div><div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Your email"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Phone number"></div><textarea class="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]" name="" cols="100" rows="10" placeholder="Tell us about yourself"></textarea><div class="flex flex-col gap-5"><button class="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 w-fit" type="submit"> Send Message<i><img class="ml-[7px] w-[12px] filter-white"${ssrRenderAttr("src", _imports_1)} alt="arrow right icon"></i></button><p class="text-md text-gray-500">By clicking contact us button, you agree our terms and policy,</p></div></form></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home6/Section7.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[138px]" }, _attrs))}><div class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between mb-[45px] md:mb-[87px]"><div><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Latest News</h2><p class="text-quote md:text-lead-lg text-gray-600">From Our blog and Event fanpage</p></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit",
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
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>company</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>We can blend colors multiple ways, the most common</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$2)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
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
                  src: _imports_0$2,
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
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Customer Services</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>Design Studios That Everyone Should Know About?</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_2$5)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
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
                  src: _imports_2$5,
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
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>company</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>We can blend colors multiple ways, the most common</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$8)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
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
                  src: _imports_0$8,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
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
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Marketing Event</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>How To Blow Through Capital At An Incredible Rate</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$2)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-8 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
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
                  src: _imports_0$2,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-8 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
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
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Customer Services</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>Design Studios That Everyone Should Know About?</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_4$1)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-1 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
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
                  src: _imports_4$1,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-1 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home6/Section8.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative home-page-6"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHome6Section1 = __nuxt_component_0;
      const _component_SectionsHome6Section2 = __nuxt_component_1;
      const _component_SectionsHome6Section3 = __nuxt_component_2;
      const _component_SectionsHome6Section4 = __nuxt_component_3;
      const _component_SectionsHome6Section5 = __nuxt_component_4;
      const _component_SectionsHome6Section6 = __nuxt_component_5;
      const _component_SectionsHome6Section7 = __nuxt_component_6;
      const _component_SectionsHome6Section8 = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsHome6Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome6Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome6Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome6Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome6Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome6Section6, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome6Section7, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome6Section8, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-6/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-bz4B5Z0r.mjs.map
