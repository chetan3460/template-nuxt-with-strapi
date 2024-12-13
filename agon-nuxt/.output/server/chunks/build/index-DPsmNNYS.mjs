import { _ as __nuxt_component_0 } from './nuxt-link-BFJLsJpZ.mjs';
import { useSSRContext, ref, withCtx, createVNode, mergeProps, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead, a as _imports_1$2, _ as _export_sfc } from './server.mjs';
import { _ as _imports_0$2, a as _imports_1$3, b as _imports_2$1 } from './virtual_public-C3LypWMC.mjs';
import { _ as _imports_0$3, a as _imports_1$4 } from './virtual_public-CFL_IyyG.mjs';
import { _ as _imports_2$2, a as _imports_3 } from './virtual_public-D05v_FUI.mjs';
import { _ as _imports_1$5 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_2$3 } from './virtual_public-BYCduXmb.mjs';
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

const _imports_0$1 = publicAssetsURL("/assets/images/pricing-2-bg.png");
const _imports_1$1 = publicAssetsURL("/assets/images/icons/icon-check-green.svg");
const _imports_2 = publicAssetsURL("/assets/images/icons/icon-x-green.svg");
const _sfc_main$4 = {
  __name: "Section1",
  __ssrInlineRender: true,
  setup(__props) {
    const isToggled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><img class="absolute w-full top-0 left-0 z-[-1] aspect-[1920/866]"${ssrRenderAttr("src", _imports_0$1)} alt="image"><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[139px]"><div class="text-center mb-10 md:mb-[80px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Choose The Best Plan That\u2019s For You</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p></div><div class="input-shadow bg-white p-5 rounded-[36px] lg:py-[72px] lg:px-[66px] lg:flex lg:gap-[38px] mb-[80px]"><div class="bg-green-900 py-10 px-5 rounded-2xl flex-1 lg:py-10 lg:px-12 mb-[30px] lg:mb-0"><div class="inline-block bg-green-500 py-1 bill-monthly bill px-[6px] rounded-[28px] mb-[55px]"><span class="${ssrRenderClass([{ " bg-green-900": !isToggled.value }, "inline-block text-text text-white py-2 cursor-pointer btn-text-monthly px-[21px] rounded-[24px]"])}">Monthly</span><span class="${ssrRenderClass([{ " bg-green-900": isToggled.value }, "inline-block text-text text-white py-2 cursor-pointer btn-text-yearly px-[21px] rounded-[24px]"])}">Yearly</span></div><ul class="text-white text-text px-5"><li class="flex items-center justify-between mb-10 lg:mb-12"><span>Unlimited updates</span><img${ssrRenderAttr("src", _imports_1$1)} alt="icon check"></li><li class="flex items-center justify-between mb-10 lg:mb-12"><span>Custom designs &amp; features</span><img${ssrRenderAttr("src", _imports_1$1)} alt="icon check"></li><li class="flex items-center justify-between mb-10 lg:mb-12"><span>Custom permissions</span><img${ssrRenderAttr("src", _imports_1$1)} alt="icon check"></li><li class="flex items-center justify-between mb-10 lg:mb-12"><span>Custom instructors</span><img${ssrRenderAttr("src", _imports_2)} alt="icon X"></li><li class="flex items-center justify-between mb-5"><span>Many devices</span><img${ssrRenderAttr("src", _imports_2)} alt="icon X"></li></ul></div><div class="flex flex-col gap-6 flex-1 package"><div class="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item active"><div class="flex items-center gap-5 lg:gap-[35px]"><div class="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]"></div><div><p class="text-heading-5 font-chivo font-bold mb-[14px]">Standard</p><p class="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">Save 20%</p></div></div><div><span class="text-heading-3 font-bold font-chivo">$`);
      if (isToggled.value) {
        _push(`<!--[-->420<!--]-->`);
      } else {
        _push(`<!--[-->35<!--]-->`);
      }
      _push(`</span><span class="text-sm font-bold text-gray-400 price-length ml-[2px]">/`);
      if (isToggled.value) {
        _push(`<!--[-->year<!--]-->`);
      } else {
        _push(`<!--[-->month<!--]-->`);
      }
      _push(`</span></div></div><div class="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item"><div class="flex items-center gap-5 lg:gap-[35px]"><div class="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]"></div><div><p class="text-heading-5 font-chivo font-bold mb-[14px]">Standard</p><p class="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">Save 20%</p></div></div><div><span class="text-heading-3 font-bold font-chivo">$`);
      if (isToggled.value) {
        _push(`<!--[-->1068<!--]-->`);
      } else {
        _push(`<!--[-->89<!--]-->`);
      }
      _push(`</span><span class="text-sm font-bold text-gray-400 price-length ml-[2px]">/`);
      if (isToggled.value) {
        _push(`<!--[-->year<!--]-->`);
      } else {
        _push(`<!--[-->month<!--]-->`);
      }
      _push(`</span></div></div><div class="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item"><div class="flex items-center gap-5 lg:gap-[35px]"><div class="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]"></div><div><p class="text-heading-5 font-chivo font-bold mb-[14px]">Standard</p><p class="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">Save 20%</p></div></div><div><span class="text-heading-3 font-bold font-chivo">$`);
      if (isToggled.value) {
        _push(`<!--[-->1500<!--]-->`);
      } else {
        _push(`<!--[-->125<!--]-->`);
      }
      _push(`</span><span class="text-sm font-bold text-gray-400 price-length ml-[2px]">/`);
      if (isToggled.value) {
        _push(`<!--[-->year<!--]-->`);
      } else {
        _push(`<!--[-->month<!--]-->`);
      }
      _push(`</span></div></div><div class="border border-gray-400 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 p-[25px] bill-monthly block-price-item"><div class="flex items-center gap-5 lg:gap-[35px]"><div class="block-price-icon w-[26px] h-[26px] bg-[url(/assets/images/icons/icon-checkbox.svg)]"></div><div><p class="text-heading-5 font-chivo font-bold mb-[14px]">Standard</p><p class="text-text px-3 bg-gray-500 text-white discount rounded-[14px]">Save 20%</p></div></div><div><span class="text-heading-3 font-bold font-chivo">$`);
      if (isToggled.value) {
        _push(`<!--[-->2388<!--]-->`);
      } else {
        _push(`<!--[-->199<!--]-->`);
      }
      _push(`</span><span class="text-sm font-bold text-gray-400 price-length ml-[2px]">/`);
      if (isToggled.value) {
        _push(`<!--[-->year<!--]-->`);
      } else {
        _push(`<!--[-->month<!--]-->`);
      }
      _push(`</span></div></div></div></div><div class="mx-auto flex items-center justify-center flex-col gap-5 md:flex-row"><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Start free trial</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Start free trial"),
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
      _push(`</button><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>View plans comparison</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "View plans comparison"),
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
      _push(`</button></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Pricing2/Section1.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/assets/images/icons/icon-question-gray.svg");
const _imports_1 = publicAssetsURL("/assets/images/icons/icon-checkmark.svg");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[104px]" }, _attrs))}><div class="text-center mb-[104px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[16ch]">Compare Pricing Packages</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p></div><div class="overflow-x-auto"><table class="w-full text-text text-center min-w-[800px]"><thead class="pb-8"><tr><th class="pb-9"></th><th class="pb-9"><p class="text-heading-4 font-chivo mb-3">Basic</p><p class="text-text text-gray-400 font-normal">On request</p></th><th class="pb-9"><p class="text-heading-4 font-chivo mb-3">Premium</p><p class="text-text text-gray-400 font-normal">On request</p></th><th class="pb-9"><p class="text-heading-4 font-chivo mb-3">Enterprise</p><p class="text-text text-gray-400 font-normal">On request</p></th></tr></thead><tbody><tr class="odd:bg-gray-100"><td class="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]"><span>Members</span><i class="inline-block align-middle ml-3"><img${ssrRenderAttr("src", _imports_0)} alt="question mark icon"></i></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">1</td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">Up to 3</td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">Unlimited</td></tr><tr class="odd:bg-gray-100"><td class="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]"><span>Workspace roles</span><span class="ml-3 text-gray-400 border text-sm font-bold px-[5px] rounded-[20px] border-[#818B98]">soon</span><i class="inline-block align-middle ml-3"><img${ssrRenderAttr("src", _imports_0)} alt="question mark icon"></i></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">Admin only</td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">Admin only</td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]">Admin &amp; collaborator</td></tr><tr class="odd:bg-gray-100"><td class="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]"><span>Guests</span><span class="ml-3 text-gray-400 border text-sm font-bold px-[5px] rounded-[20px] border-[#818B98]">soon</span><i class="inline-block align-middle ml-3"><img${ssrRenderAttr("src", _imports_0)} alt="question mark icon"></i></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td></tr><tr class="odd:bg-gray-100"><td class="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]"><span>Live collaboration</span><span class="ml-3 text-gray-400 border text-sm font-bold px-[5px] rounded-[20px] border-[#818B98]">soon</span><i class="inline-block align-middle ml-3"><img${ssrRenderAttr("src", _imports_0)} alt="question mark icon"></i></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td></tr><tr class="odd:bg-gray-100"><td class="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]"><span>Integration of sub-brands</span><i class="inline-block align-middle ml-3"><img${ssrRenderAttr("src", _imports_0)} alt="question mark icon"></i></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td></tr><tr class="odd:bg-gray-100"><td class="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]"><span>Access to standard templates</span><i class="inline-block align-middle ml-3"><img${ssrRenderAttr("src", _imports_0)} alt="question mark icon"></i></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td></tr><tr class="odd:bg-gray-100"><td class="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]"><span>Access to pro templates</span><i class="inline-block align-middle ml-3"><img${ssrRenderAttr("src", _imports_0)} alt="question mark icon"></i></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td></tr><tr class="odd:bg-gray-100"><td class="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]"><span>Custom designed templates</span><i class="inline-block align-middle ml-3"><img${ssrRenderAttr("src", _imports_0)} alt="question mark icon"></i></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td></tr><tr class="odd:bg-gray-100"><td class="text-left p-[15px] rounded-tl-[5px] rounded-bl-[5px]"><span>Asset library</span><i class="inline-block align-middle ml-3"><img${ssrRenderAttr("src", _imports_0)} alt="question mark icon"></i></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td><td class="p-[15px] last:rounded-tr-[5px] last:rounded-br-[5px]"><img class="mx-auto"${ssrRenderAttr("src", _imports_1)} alt="checkmark icon"></td></tr></tbody></table></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Pricing2/Section2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[138px]" }, _attrs))}><div class="text-center mb-[45px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-full">Providing solutions of every kind</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[743px]">In a professional context it often happens that private or corporate clients order a publication to publish news.</p></div><div class="lg:flex lg:items-center gap-[30px]"><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">1. Acquisition</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_1$3)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">2. Activation</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px]"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_2$1)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">3. Retention</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Pricing2/Section3.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[133px]" }, _attrs))}><div class="text-center mb-[30px] md:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Discover powerful features to boost your productivity</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum \u2014 semper quis lectus nulla.</p></div><div class="mx-auto lg:flex gap-[30px] max-w-[1190px]"><div class="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">Cross-Platform</h3><p class="text-md text-gray-600 mb-[22px] lg:mx-16">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p><img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"${ssrRenderAttr("src", _imports_0$3)} alt="Feature image"></div><div class="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-6"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">Extremely Flexible</h3><p class="text-md text-gray-600 mb-[22px] lg:mx-16">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p><img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"${ssrRenderAttr("src", _imports_1$4)} alt="Feature image"></div></div><div class="bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-[260px] rounded-[56px]"><div class="mx-auto relative max-w-[1320px]"><img class="absolute right-0 max-w-[129px] top-[-50px]"${ssrRenderAttr("src", _imports_2$2)} alt="mail image"><p class="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">Contact us</p><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">Have an project in mind?</h2><p class="text-text text-gray-600 mb-[30px] md:mb-[60px]">The right move at the right time saves your investment. live the dream of expanding your business.</p><div class="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]"><div><div class="flex gap-[13px] mb-[15px] md:mb-[25px]"><i><img${ssrRenderAttr("src", _imports_3)} alt="home icon"></i><p class="text-heading-6 font-bold font-chivo">Agon Studio</p></div><p class="text-text text-gray-600">4517 Washington Ave.</p><p class="text-text text-gray-600 mb-[10px] md:mb-[16px]">Manchester, Kentucky 39495</p><p class="text-text text-gray-600 underline">(239) 555-0108</p><p class="text-text text-gray-600 underline">contact@agon.com</p></div><form class="flex-1" action="/"><div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Enter your name"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Company (optional)"></div><div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Your email"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Phone number"></div><textarea class="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]" name="" cols="100" rows="10" placeholder="Tell us about yourself"></textarea><div class="flex flex-col gap-5"><button class="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 w-fit" type="submit"> Send Message<i><img class="ml-[7px] w-[12px] filter-white"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"></i></button><p class="text-md text-gray-500">By clicking contact us button, you agree our terms and policy,</p></div></form></div></div></div><div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px] mt-[150px]" padding="px-[15px] py-[50px] md:px-[52px] md:py-[72px]"><div class="flex-1 mb-[30px]"><p class="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">newsletter</p><h4 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">Subscribe our newsletter</h4><p class="text-text text-gray-500">By clicking the button, you are agreeing with our</p>`);
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
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_1$2)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$5)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2$3)} alt="Agon"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Pricing2/Section4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative pricing-2-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsPricing2Section1 = _sfc_main$4;
      const _component_SectionsPricing2Section2 = __nuxt_component_1;
      const _component_SectionsPricing2Section3 = __nuxt_component_2;
      const _component_SectionsPricing2Section4 = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsPricing2Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsPricing2Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsPricing2Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsPricing2Section4, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing-2/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DPsmNNYS.mjs.map
