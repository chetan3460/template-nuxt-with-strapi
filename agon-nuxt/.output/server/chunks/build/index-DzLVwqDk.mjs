import { _ as __nuxt_component_0$1 } from './nuxt-link-CvGZZJI3.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc, a as _imports_1$2 } from './server.mjs';
import { _ as _imports_1$3 } from './virtual_public-BOIFuNvI.mjs';
import { _ as _imports_2$2 } from './virtual_public-D4tZ-TSE.mjs';
import { _ as _imports_3$1 } from './virtual_public-DWqgV7xc.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_0$2 } from './virtual_public-pmdZ9FbH.mjs';
import { _ as _imports_0$3 } from './virtual_public-DTZSeK32.mjs';
import { _ as _imports_0$1 } from './virtual_public-BjNzXJKo.mjs';
import { _ as _imports_1$1, a as _imports_2$1 } from './virtual_public-BjCH7PF9.mjs';
import { _ as _imports_1$4 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_2$3 } from './virtual_public-BYCduXmb.mjs';
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

const _imports_4$1 = publicAssetsURL("/assets/images/hero-services-1.png");
const _imports_5$1 = publicAssetsURL("/assets/images/bussiness-card.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-bg-5" }, _attrs))}><div class="items-center mx-auto px-5 pt-24 lg:flex max-w-[1320px]"><div class="flex-1"><h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[30px] md:w-[13ch]">Building the Work Ecosystem</h1><p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[150px] mb-[44px] md:w-[57ch]">Connect your conversations with the tools and services that you use to get the job done. With over 1,500 apps and a robust API</p><div class="flex items-center justify-start mb-[85px]"><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Start</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Start"),
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
  _push(`</button><div class="flex items-center gap-3"><i><img${ssrRenderAttr("src", _imports_1$3)} alt=""></i>`);
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
  _push(`</div></div><div class="flex w-full gap-[60px]"><div class="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]"><div class="bg-white rounded-full w-[80px] h-[80px]"><img class="h-full w-full object-cover p-[18px]"${ssrRenderAttr("src", _imports_2$2)} alt="icon"></div><div class="flex-1"><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">+12k</h2><p class="text-text text-gray-500">Projects done</p></div></div><div class="flex items-start lg:mb-[60px] last:mb-0 gap-[26px]"><div class="bg-white rounded-full w-[80px] h-[80px]"><img class="h-full w-full object-cover p-[18px]"${ssrRenderAttr("src", _imports_3$1)} alt="icon"></div><div class="flex-1"><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-900 mb-[5px]">+68</h2><p class="text-text text-gray-500">Offices / Factories</p></div></div></div></div><div class="hidden relative h-auto self-end lg:block min-w-[680px]"><div class="absolute bottom-0 translate-x-[-120px]"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4$1)} alt="Agon"></div><img class="absolute animate-float max-w-[300px] bottom-[336px] left-[-28%]"${ssrRenderAttr("src", _imports_5$1)} alt="Agon"></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services1/Section1.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = publicAssetsURL("/assets/images/icons/icon-job-1.svg");
const _imports_1 = publicAssetsURL("/assets/images/icons/icon-job-2.svg");
const _imports_2 = publicAssetsURL("/assets/images/icons/icon-job-3.svg");
const _imports_3 = publicAssetsURL("/assets/images/icons/icon-job-4.svg");
const _imports_4 = publicAssetsURL("/assets/images/icons/icon-job-5.svg");
const _imports_5 = publicAssetsURL("/assets/images/icons/icon-job-6.svg");
const _imports_6 = publicAssetsURL("/assets/images/icons/icon-job-7.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[25px]">What We Do</span><div class="mb-[45px] md:mb-[75px]"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">We&#39;re always looking for new faces and fresh ideas</h2><p class="text-quote md:text-lead-lg text-gray-600"></p></div><div class="grid grid-cols-1 gap-x-[30px] gap-y-[45px] lg:gap-x-[46px] lg:gap-y-[77px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-[60px] lg:mb-[132px]"><div class="flex items-start gap-[15px] md:gap-[30px]"><img class="max-w-[40px] md:max-w-[52px]"${ssrRenderAttr("src", _imports_0)} alt="icon"><div><p class="font-bold font-chivo text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">Support Engineer</p><p class="text-text">We commit to original work of the highest standard and giving credit where it&#39;s due.</p></div></div><div class="flex items-start gap-[15px] md:gap-[30px]"><img class="max-w-[40px] md:max-w-[52px]"${ssrRenderAttr("src", _imports_1)} alt="icon"><div><p class="font-bold font-chivo text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">Web Developer</p><p class="text-text">We become a bonafide agency with a tiny team of 3 and then hire our first developers</p></div></div><div class="flex items-start gap-[15px] md:gap-[30px]"><img class="max-w-[40px] md:max-w-[52px]"${ssrRenderAttr("src", _imports_2)} alt="icon"><div><p class="font-bold font-chivo text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">Business Analyst</p><p class="text-text">We create our first campaign for Kaleidoscope Tech and it goes viral</p></div></div><div class="flex items-start gap-[15px] md:gap-[30px]"><img class="max-w-[40px] md:max-w-[52px]"${ssrRenderAttr("src", _imports_3)} alt="icon"><div><p class="font-bold font-chivo text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">Product Designer</p><p class="text-text">With a growing body of work, we bring more artists, designers on board.</p></div></div><div class="flex items-start gap-[15px] md:gap-[30px]"><img class="max-w-[40px] md:max-w-[52px]"${ssrRenderAttr("src", _imports_4)} alt="icon"><div><p class="font-bold font-chivo text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">Share stories</p><p class="text-text">We earn our first organic feature in Magazine as a creative agency</p></div></div><div class="flex items-start gap-[15px] md:gap-[30px]"><img class="max-w-[40px] md:max-w-[52px]"${ssrRenderAttr("src", _imports_5)} alt="icon"><div><p class="font-bold font-chivo text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">Build communities</p><p class="text-text">We&#39;re not in the business of selling at any cost or running after unrealistic</p></div></div><div class="flex items-start gap-[15px] md:gap-[30px]"><img class="max-w-[40px] md:max-w-[52px]"${ssrRenderAttr("src", _imports_6)} alt="icon"><div><p class="font-bold font-chivo text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">A team with a mission</p><p class="text-text">We tell powerful stories that matter to your customers (and us)</p></div></div></div><div class="w-full bg-gray-200 h-[1px]"></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services1/Section2.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="lg:grid lg:grid-cols-2 gap-[150px]"><img class="h-full w-full object-cover order-2 rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"${ssrRenderAttr("src", _imports_0$2)} alt="Agon"><div class="flex-1 order-1 lg:gap-[30px] xl:gap-[64px]"><span class="font-chivo inline-block bg-bg-9 text-primary py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">Built Exclusively For You</span><h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">From the big picture to every tiny detail, we got you covered.</h3><p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">Necessary to deliver white glove, fully managed campaigns that surpass industry benchmarks.Take your career to next level. Apply to our team and see what we can do together. You\u2019re good enough.</p><div class="border border-green-900 border-dashed mb-[48px]"></div><div class="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]"><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$3)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Boost your sale</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$3)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Smart Installation Tools</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$3)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Introducing New Features</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$3)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Dynamic Boosting</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services1/Section3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  __name: "Section4",
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
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
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services1/Section4.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-bg-6 md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px] mt-[70px] lg:mt-[150px]",
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
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_1$2)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$4)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2$3)} alt="Agon"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services1/Section5.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative services-1-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsServices1Section1 = __nuxt_component_0;
      const _component_SectionsServices1Section2 = __nuxt_component_1;
      const _component_SectionsServices1Section3 = __nuxt_component_2;
      const _component_SectionsServices1Section4 = _sfc_main$2;
      const _component_SectionsServices1Section5 = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsServices1Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices1Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices1Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices1Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices1Section5, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services-1/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DzLVwqDk.mjs.map
