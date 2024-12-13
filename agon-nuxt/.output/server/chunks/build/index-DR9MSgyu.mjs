import { _ as __nuxt_component_0$1 } from './nuxt-link-BFJLsJpZ.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc, a as _imports_1$1 } from './server.mjs';
import { _ as _imports_1$2 } from './virtual_public-BOIFuNvI.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_0$2, a as _imports_1$3, b as _imports_2$2, c as _imports_3$1, d as _imports_4$1, e as _imports_5 } from './virtual_public-DSob6RUo.mjs';
import { _ as _imports_2$3 } from './virtual_public-BYCduXmb.mjs';
import { _ as _imports_1$4, a as _imports_2$4, b as _imports_3$2 } from './virtual_public-CGWXnhd5.mjs';
import { _ as _imports_0$3, a as _imports_1$5 } from './virtual_public-CFL_IyyG.mjs';
import { _ as _imports_0$4, a as _imports_1$6, b as _imports_2$5 } from './virtual_public-C3LypWMC.mjs';
import { _ as _imports_0$5 } from './virtual_public-pmdZ9FbH.mjs';
import { _ as _imports_0$6 } from './virtual_public-DTZSeK32.mjs';
import { _ as _imports_0$7, a as _imports_1$7 } from './virtual_public-B-ThRufd.mjs';
import { _ as _imports_6 } from './virtual_public-ug1V0zRq.mjs';
import { _ as _imports_11 } from './virtual_public-D-HlBqo0.mjs';
import { _ as _imports_0$1 } from './virtual_public-BjNzXJKo.mjs';
import { _ as _imports_1, a as _imports_2$1 } from './virtual_public-BjCH7PF9.mjs';
import { _ as _imports_1$8 } from './virtual_public-C3wDJg80.mjs';
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

const _imports_2 = publicAssetsURL("/assets/images/hero-2.png");
const _imports_3 = publicAssetsURL("/assets/images/card-1.png");
const _imports_4 = publicAssetsURL("/assets/images/card-2.png");
const _sfc_main$9 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width banner-hero bg-bg-6 banner-2" }, _attrs))}><div class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center"><div class="lg:w-[60%] lg:mr-[150px]"><span class="font-chivo inline-block bg-green-900 text-white py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">Digital Marketing Agency</span><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-[20px]">A small creative team excited to create beautiful things</h1><p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[44px]">Integrated workflow designed for product teams. We create world-class development and branding</p><div class="flex items-center justify-start mb-[50px]"><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Start</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Start"),
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
  _push(`</button><div class="flex items-center gap-3"><i><img${ssrRenderAttr("src", _imports_1$2)} alt=""></i>`);
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
  _push(`</div></div><div class="flex items-center gap-14"><div><p class="text-heading-4 font-bold font-chivo text-gray-900">5000+</p><p class="text-md text-gray-500">Happy Clients</p></div><div><p class="text-heading-4 font-bold font-chivo text-gray-900">756+</p><p class="text-md text-gray-500">Project Done</p></div><div><p class="text-heading-4 font-bold font-chivo text-gray-900">100%</p><p class="text-md text-gray-500">Client Satisfaction</p></div></div></div><div class="hidden relative lg:block"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2)} alt="Agon"><img class="absolute rounded-2xl w-[220px] bottom-[11px] left-[-35%]"${ssrRenderAttr("src", _imports_3)} alt="Agon"><img class="absolute rounded-2xl w-[155px] top-[135px] right-[-18%]"${ssrRenderAttr("src", _imports_4)} alt="Agon"></div></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home2/Section1.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[30px] md:mt-[80px] lg:mt-[143px]" }, _attrs))}><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-center mb-[40px] md:mb-[60px] lg:mb-[84px]">Trusted by the world\u2019s leading companies</h2><div class="flex flex-wrap items-center justify-center mb-[30px] md:mb-[60px] lg:mb-[80px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_1$3)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$3,
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
        _push2(`<img${ssrRenderAttr("src", _imports_2$2)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_3$1)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3$1,
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
        _push2(`<img${ssrRenderAttr("src", _imports_4$1)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4$1,
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
        _push2(`<img${ssrRenderAttr("src", _imports_5)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5,
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
        _push2(`<img${ssrRenderAttr("src", _imports_0$2)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_1$3)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$3,
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
        _push2(`<img${ssrRenderAttr("src", _imports_2$2)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$2,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="w-full bg-gray-300 h-[1px] mb-[50px] md:mb-[90px] lg:mb-[150px]"></div></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home2/Section2.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0 = publicAssetsURL("/assets/images/thumbnail-7.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}><div class="lg:grid lg:grid-cols-2 gap-[160px]"><div class="relative"><img class="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"${ssrRenderAttr("src", _imports_0)} alt="Agon"><img class="absolute rounded-2xl bottom-0 shadow-3 animate-float max-w-[296px] right-[-15%]"${ssrRenderAttr("src", _imports_2$3)} alt="chart image"></div><div class="flex-1 order-1 lg:gap-[30px] xl:gap-[64px]"><span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">What We Do, What You Get</span><h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">Fresh Ideas. Thoughtful Design.</h3><p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">Feugiat primis ligula risus auctor egestas and augue viverra mauri tortor in iaculis magna a feugiat mauris ipsum and placerat viverra tortor gravida purus.</p><div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_1$4)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Work smarter with powerful features</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_2$4)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Designed for teams of all sorts and sizes</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_3$2)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Advanced analytics to grow your business</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home2/Section3.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[133px]" }, _attrs))}><div class="text-center mb-[30px] md:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Discover powerful features to boost your productivity</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum \u2014 semper quis lectus nulla.</p></div><div class="mx-auto lg:flex gap-[30px] max-w-[1190px]"><div class="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">Cross-Platform</h3><p class="text-md text-gray-600 mb-[22px] lg:mx-16">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p><img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"${ssrRenderAttr("src", _imports_0$3)} alt="Feature image"></div><div class="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-6"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">Extremely Flexible</h3><p class="text-md text-gray-600 mb-[22px] lg:mx-16">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p><img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"${ssrRenderAttr("src", _imports_1$5)} alt="Feature image"></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home2/Section4.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[286px]" }, _attrs))}><div class="text-center mb-[40px] lg:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Built exclusively for you</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum \u2014 semper quis lectus nulla.</p></div><div class="lg:flex lg:items-center gap-[30px]"><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_0$4)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">1. Acquisition</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_1$6)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">2. Activation</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px]"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_2$5)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">3. Retention</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home2/Section5.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="lg:grid lg:grid-cols-2 gap-[150px]"><img class="h-full w-full object-cover order-2 rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"${ssrRenderAttr("src", _imports_0$5)} alt="Agon"><div class="flex-1 lg:gap-[30px] xl:gap-[64px]"><span class="font-chivo inline-block bg-bg-9 text-primary py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">Built Exclusively For You</span><h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">From the big picture to every tiny detail, we got you covered.</h3><p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">Necessary to deliver white glove, fully managed campaigns that surpass industry benchmarks.Take your career to next level. Apply to our team and see what we can do together. You\u2019re good enough.</p><div class="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]"><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$6)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Boost your sale</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$6)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Smart Installation Tools</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$6)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Introducing New Features</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$6)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Dynamic Boosting</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home2/Section6.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="rounded-2xl px-5 py-24 lg:pt-[96px] lg:px-[122px] lg:pb-[139px] bg-gray-100"><div class="text-center"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-[8px] max-w-[725px]">Our Happy Customers</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p></div><p class="text-quote md:text-lead-lg text-gray-600 mx-auto text-center max-w-[509px] mb-[30px] lg:mb-[60px]">Know about our clients, we are a woldwide corporate brand</p><div class="grid grid-cols-1 gap-y-8 gap-x-[30px] lg:grid-cols-2"><div class="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">Satisfied client testimonial</h4><p class="text-text text-gray-600 mb-[30px]">Even factoring differences in body weight between children and adults into account, it would still not reach an intoxicating level in children.</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover max-w-[80px] rounded-[4px]"${ssrRenderAttr("src", _imports_0$7)} alt="avatar"><div><p class="text-lead font-bold mb-[3px]">Jane Cooper</p><p class="text-md text-gray-500">Biffco Enterprises Ltd.</p></div></div></div><div class="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">98% of residents recommend us</h4><p class="text-text text-gray-600 mb-[30px]">So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover max-w-[80px] rounded-[4px]"${ssrRenderAttr("src", _imports_1$7)} alt="avatar"><div><p class="text-lead font-bold mb-[3px]">Wade Warren</p><p class="text-md text-gray-500">Krusty Krab</p></div></div></div><div class="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">Our success stories</h4><p class="text-text text-gray-600 mb-[30px]">\u201CIt has been an absolute pleasure dealing with Scan during the lockdown. Our church began to livestream our services, and Scan had a great selection of hardware....\u201D</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover max-w-[80px] rounded-[4px]"${ssrRenderAttr("src", _imports_6)} alt="avatar"><div><p class="text-lead font-bold mb-[3px]">Leslie Alexander</p><p class="text-md text-gray-500">Rundofase</p></div></div></div><div class="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">This is simply unbelievable</h4><p class="text-text text-gray-600 mb-[30px]">\u201CI was also lucky enough to read @Coding_Career early and I was thoroughly blown away! It\u2019s the book I wish I had when I started my dev career.\u201D</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover max-w-[80px] rounded-[4px]"${ssrRenderAttr("src", _imports_11)} alt="avatar"><div><p class="text-lead font-bold mb-[3px]">Jenny Wilson</p><p class="text-md text-gray-500">Soylent Corp</p></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home2/Section7.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  __name: "Section8",
  __ssrInlineRender: true,
  setup(__props) {
    const isToggled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[139px]" }, _attrs))}><div class="text-center"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]"> Choose The Best Plan That\u2019s For You</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p></div><div class="flex items-center justify-center gap-[10px] mb-[54px] text-gray-900"><p class="text-text">Bill Monthly </p><div class="flex items-center justify-center"><label class="flex items-center cursor-pointer" for="billSwitch"><div class="relative"><input class="sr-only peer" id="billSwitch" type="checkbox" name=""><div class="block rounded-full w-[65px] h-[30px] bg-gray-900 peer-checked:bg-green-900"></div><div class="dot absolute left-1 top-1 rounded-full transition h-[21px] w-[21px] bg-white"></div></div></label></div><p class="text-text">Bill Annually </p></div><div class="package"><div class="grid package-list gap-[30px] md:grid-cols-2 xl:grid-cols-4"><div class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card border border-gray-900 bill-monthly"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$`);
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
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
      _push(`</button></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home2/Section8.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
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
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_1$1)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$8)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2$3)} alt="Agon"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home2/Section9.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative home-page-2"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHome2Section1 = __nuxt_component_0;
      const _component_SectionsHome2Section2 = __nuxt_component_1;
      const _component_SectionsHome2Section3 = __nuxt_component_2;
      const _component_SectionsHome2Section4 = __nuxt_component_3;
      const _component_SectionsHome2Section5 = __nuxt_component_4;
      const _component_SectionsHome2Section6 = __nuxt_component_5;
      const _component_SectionsHome2Section7 = __nuxt_component_6;
      const _component_SectionsHome2Section8 = _sfc_main$2;
      const _component_SectionsHome2Section9 = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsHome2Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section6, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section7, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section8, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section9, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-2/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DR9MSgyu.mjs.map
