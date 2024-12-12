import { _ as __nuxt_component_0 } from './nuxt-link-CvGZZJI3.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BjNzXJKo.mjs';
import { _ as _imports_1, a as _imports_2 } from './virtual_public-BjCH7PF9.mjs';
import { u as useHead, a as _imports_1$1, _ as _export_sfc } from './server.mjs';
import { _ as _imports_0$1, a as _imports_1$2, b as _imports_2$1 } from './virtual_public-C3LypWMC.mjs';
import { _ as _imports_0$2, a as _imports_1$3 } from './virtual_public-B-ThRufd.mjs';
import { _ as _imports_6 } from './virtual_public-ug1V0zRq.mjs';
import { _ as _imports_11 } from './virtual_public-D-HlBqo0.mjs';
import { _ as _imports_0$3 } from './virtual_public-iIVoVW3n.mjs';
import { _ as _imports_1$4 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_2$2 } from './virtual_public-BYCduXmb.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$5 = {
  __name: "Section1",
  __ssrInlineRender: true,
  setup(__props) {
    const isToggled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[137px]" }, _attrs))}><div class="text-center"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]"> Choose The Best Plan That\u2019s For You</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p></div><div class="flex items-center justify-center gap-[10px] mb-[54px] text-gray-900"><p class="text-text">Bill Monthly </p><div class="flex items-center justify-center"><label class="flex items-center cursor-pointer" for="billSwitch"><div class="relative"><input class="sr-only peer" id="billSwitch" type="checkbox" name=""><div class="block rounded-full w-[65px] h-[30px] bg-gray-900 peer-checked:bg-green-900"></div><div class="dot absolute left-1 top-1 rounded-full transition h-[21px] w-[21px] bg-white"></div></div></label></div><p class="text-text">Bill Annually </p></div><div class="package"><div class="grid package-list gap-[30px] md:grid-cols-2 xl:grid-cols-4"><div class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card border border-gray-900 bill-monthly"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$`);
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Pricing1/Section1.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex flex-col gap-8 lg:mt-[120px] lg:flex-row xl:gap-[88px]" }, _attrs))}><div><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-[28px]">How It Works</h1><p class="text-excerpt text-gray-600">Ac sapien purus tristique neque nibh vitae faucibus non phasellus vulputate nulla in eget amet, risus</p></div><div class="lg:flex lg:items-center gap-[30px]"><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0 flex-col"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">1. Acquisition</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0 flex-col"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_1$2)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">2. Activation</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] flex-col"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_2$1)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">3. Retention</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Pricing1/Section2.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="rounded-2xl px-5 py-24 lg:pt-[96px] lg:px-[122px] lg:pb-[139px] bg-gray-100"><div class="text-center"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-[8px] max-w-[725px]">Our Happy Customers</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p></div><p class="text-quote md:text-lead-lg text-gray-600 mx-auto text-center max-w-[509px] mb-[30px] lg:mb-[60px]">Know about our clients, we are a woldwide corporate brand</p><div class="grid grid-cols-1 gap-y-8 gap-x-[30px] lg:grid-cols-2"><div class="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">Satisfied client testimonial</h4><p class="text-text text-gray-600 mb-[30px]">Even factoring differences in body weight between children and adults into account, it would still not reach an intoxicating level in children.</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover max-w-[80px] rounded-[4px]"${ssrRenderAttr("src", _imports_0$2)} alt="avatar"><div><p class="text-lead font-bold mb-[3px]">Jane Cooper</p><p class="text-md text-gray-500">Biffco Enterprises Ltd.</p></div></div></div><div class="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">98% of residents recommend us</h4><p class="text-text text-gray-600 mb-[30px]">So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover max-w-[80px] rounded-[4px]"${ssrRenderAttr("src", _imports_1$3)} alt="avatar"><div><p class="text-lead font-bold mb-[3px]">Wade Warren</p><p class="text-md text-gray-500">Krusty Krab</p></div></div></div><div class="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">Our success stories</h4><p class="text-text text-gray-600 mb-[30px]">\u201CIt has been an absolute pleasure dealing with Scan during the lockdown. Our church began to livestream our services, and Scan had a great selection of hardware....\u201D</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover max-w-[80px] rounded-[4px]"${ssrRenderAttr("src", _imports_6)} alt="avatar"><div><p class="text-lead font-bold mb-[3px]">Leslie Alexander</p><p class="text-md text-gray-500">Rundofase</p></div></div></div><div class="rounded-2xl py-[40px] px-[30px] md:py-[55px] md:px-[48px] hover:translate-y-[-3px] transition-all duration-300 bg-white"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[30px]">This is simply unbelievable</h4><p class="text-text text-gray-600 mb-[30px]">\u201CI was also lucky enough to read @Coding_Career early and I was thoroughly blown away! It\u2019s the book I wish I had when I started my dev career.\u201D</p><div class="flex items-center gap-6"><img class="h-full w-full object-cover max-w-[80px] rounded-[4px]"${ssrRenderAttr("src", _imports_11)} alt="avatar"><div><p class="text-lead font-bold mb-[3px]">Jenny Wilson</p><p class="text-md text-gray-500">Soylent Corp</p></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Pricing1/Section3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto lg:mt-[141px] max-w-[1248px]" }, _attrs))}><div class="text-center relative mb-[70px] md:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] w-full">Frequently Asked Questions</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[51ch]">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien</p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-x-[70px] gap-y-[30px]"><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$3)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Can I see the demo before purchasing?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$3)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Can I use your system on different devices?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$3)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Can I import my sitemap to your system?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$3)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Can I cancel my subscription at any time?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$3)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">How can I switch my subscription between essential, and premium plan</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$3)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Is there an additional discount when paid annually?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$3)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">I have an issue with my account</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$3)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">What happens if I don\u2019t renew my license after one year?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$3)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Do you have a free trial?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$3)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">What kind of payment methods do you provide?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Pricing1/Section4.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px] mt-[70px] lg:mt-[138px]",
    padding: "px-[15px] py-[50px] md:px-[52px] md:py-[72px]"
  }, _attrs))}><div class="flex-1 mb-[30px]"><p class="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">newsletter</p><h4 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">Subscribe our newsletter</h4><p class="text-text text-gray-500">By clicking the button, you are agreeing with our</p>`);
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
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_1$1)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$4)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2$2)} alt="Agon"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Pricing1/Section5.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative pricing-1-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsPricing1Section1 = _sfc_main$5;
      const _component_SectionsPricing1Section2 = __nuxt_component_1;
      const _component_SectionsPricing1Section3 = __nuxt_component_2;
      const _component_SectionsPricing1Section4 = __nuxt_component_3;
      const _component_SectionsPricing1Section5 = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsPricing1Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsPricing1Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsPricing1Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsPricing1Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsPricing1Section5, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing-1/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-C4ZIo5sO.mjs.map
