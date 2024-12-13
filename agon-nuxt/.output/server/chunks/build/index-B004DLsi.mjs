import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BFJLsJpZ.mjs';
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3, d as _imports_4, e as _imports_5, f as _imports_6, g as _imports_7, h as _imports_8$1, i as _imports_9, j as _imports_10$1, k as _imports_11, l as _imports_8, m as _imports_10 } from './virtual_public-n4QcWAsw.mjs';
import { e as _imports_9$1, _ as _imports_11$1, a as _imports_14, b as _imports_15, c as _imports_16, d as _imports_17 } from './virtual_public-_YVnpyIH.mjs';
import { c as _imports_5$1, d as _imports_6$1, _ as _imports_0$1, a as _imports_1$1$1, b as _imports_2$1$1, e as _imports_0$5, f as _imports_1$3, g as _imports_2$2 } from './virtual_public-Bn3-DqT8.mjs';
import { _ as _imports_1$1, a as _imports_2$1 } from './virtual_public-BnXtLk0F.mjs';
import { _ as _imports_5$2, a as _imports_6$2 } from './virtual_public-dmXcmHGb.mjs';
import { _ as _imports_0$2 } from './virtual_public-9znkGGCe.mjs';
import { a as _imports_6$3, _ as _imports_7$1 } from './virtual_public-DK7fe_BP.mjs';
import { _ as _imports_4$1 } from './virtual_public-BUWQ-iTC.mjs';
import { _ as _imports_3$1 } from './virtual_public-DFfbIHzD.mjs';
import { _ as _imports_0$3 } from './virtual_public-edIg6YOR.mjs';
import { _ as _imports_1$2 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_0$4 } from './virtual_public-CatqWA01.mjs';
import { _ as _imports_11$2 } from './virtual_public-D-HlBqo0.mjs';
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

const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-gray-100" }, _attrs))}><div class="text-center px-5 pt-[74px] pb-[90px]"><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-7">Shop: Electronic</h1><p class="font-bold font-chivo text-[14px] md:text-heading-6 text-gray-600 mx-auto md:max-w-[55ch]">From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises.</p></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Shop1/Section1.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[93px]" }, _attrs))}><div class="mb-[50px]"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Browse by category</h2><p class="text-quote md:text-lead-lg text-gray-600 md:max-w-[50ch]">All the smart devices, electronics or software you need are ready to be discovered. Let\u2019s go!</p></div><div class="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6"><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_0)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>Desktop PC</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_0,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "Desktop PC"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_1)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>Mobile Phone</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_1,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "Mobile Phone"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_2)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>Headphone</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_2,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "Headphone"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_3)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>Laptop</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_3,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "Laptop"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_4)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>Printer</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_4,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "Printer"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_5)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>Tablet</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_5,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "Tablet"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_6)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>USB Flash</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_6,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "USB Flash"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_7)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>Game Mouse</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_7,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "Game Mouse"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_8$1)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>Security</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_8$1,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "Security"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_9)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>Smart Watch</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_9,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "Smart Watch"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_10$1)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>Scanner</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_10$1,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "Scanner"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl border border-gray-200 py-8 text-center transition-all duration-200 group hover:border-bg-6 hover:translate-y-[-2px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="mb-5 mx-auto transition-all duration-200 group-hover:filter-green"${ssrRenderAttr("src", _imports_11)} alt="computer icon"${_scopeId}><p class="text-heading-5 font-chivo font-bold mb-[5px]"${_scopeId}>Desktop PC</p><p class="text-text text-gray-500"${_scopeId}>1253 products</p>`);
      } else {
        return [
          createVNode("img", {
            class: "mb-5 mx-auto transition-all duration-200 group-hover:filter-green",
            src: _imports_11,
            alt: "computer icon"
          }),
          createVNode("p", { class: "text-heading-5 font-chivo font-bold mb-[5px]" }, "Desktop PC"),
          createVNode("p", { class: "text-text text-gray-500" }, "1253 products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Shop1/Section2.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[98px]" }, _attrs))}><div class="mb-[35px] md:mb-[64px]"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]"> Latest products</h2><p class="text-quote md:text-lead-lg text-gray-600">Don\u2019t miss world trending </p></div><div class="flex items-center bg-gray-100 flex-col gap-5 mb-10 py-[23px] px-[29px] md:flex-row"><p class="text-lead text-gray-500 font-bold flex-1">There are <span class="text-green-900">1853</span> products in this category </p><div class="flex items-center gap-6"><div class="flex items-center relative gap-[5px]"><label class="flex items-center gap-[5px]" for="show"><img${ssrRenderAttr("src", _imports_8)} alt="grid icon"><span class="text-text text-gray-500">Show:</span></label><select class="bg-transparent outline-none text-green-900 cursor-pointer min-w-[38px]" id="show" name="show"><option class="text-green-900" value="50">50</option><option class="text-green-900" value="100">100</option><option class="text-green-900" value="150">150</option></select><img class="filter-gray-500 absolute right-0 pointer-events-none w-[13px] h-[7px]"${ssrRenderAttr("src", _imports_9$1)} alt="caret icon"></div><div class="flex items-center relative gap-[5px]"><label class="flex items-center gap-[5px]" for="show"><img${ssrRenderAttr("src", _imports_10)} alt="grid icon"><span class="text-text text-gray-500">Sort by:</span></label><select class="bg-transparent outline-none text-green-900 cursor-pointer min-w-[88px]" id="show" name="show"><option class="text-green-900" value="Featured">Featured</option><option class="text-green-900" value="Rating">Rating</option><option class="text-green-900" value="Low Price">Low Price</option></select><img class="filter-gray-500 absolute right-0 pointer-events-none w-[13px] h-[7px]"${ssrRenderAttr("src", _imports_9$1)} alt="caret icon"></div></div></div><div class="product-list-2 mb-[64px]"><div class="grid-cols-1 !grid mt-[5px] gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_11$1)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_11$1,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(86 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[80%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(86 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_15)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_15,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(186 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[40%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(186 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_16)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_16,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[60%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(826 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[60%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(826 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_17)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_17,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[100%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(836 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[100%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(836 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_16)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_16,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[20%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(122 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[20%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(122 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_11$1)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_11$1,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(3 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[40%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(3 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_15)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_15,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[60%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(6 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[60%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(6 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_17)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_17,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(46 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[40%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(46 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_11$1)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_11$1,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(48 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[80%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(48 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_16)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_16,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(234 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[40%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(234 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_11$1)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_11$1,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(44 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[80%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(44 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_15)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_15,
            alt: "featured image product"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="flex items-center border border-gray-200 overflow-hidden w-fit bg-white max-h-[48px] rounded-[7px] absolute opacity-0 invisible transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 group-hover:visible">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-100 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5$1)} alt="heart icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$1,
            alt: "heart icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center border-r border-gray-200 hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_6$1)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6$1,
            alt: "shuffle icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "grid place-items-center hover:bg-gray-200 w-[48px] h-[48px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_14)} alt="eye icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_14,
            alt: "eye icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex flex-col justify-between flex-1",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$1)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[100%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$1)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(257 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$1,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[100%]" }, [
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$1,
                    alt: "star icon"
                  })
                ])
              ]),
              createVNode("p", { class: "text-tiny font-semibold text-gray-400" }, "(257 rates)")
            ])
          ]),
          createVNode("div", { class: "flex items-center justify-between" }, [
            createVNode("div", { class: "flex items-baseline gap-2" }, [
              createVNode("h4", { class: "font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900" }, "$22.51 "),
              createVNode("span", { class: "text-gray-400 line-through text-tiny lg:text-md" }, "$2.80")
            ]),
            createVNode("button", { class: "flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit" }, "Add + ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div class="flex items-center gap-[10px]"><div class="grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-prev"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_5$2)} alt="control icon button"></div><div class="product-paging number-dots"></div><div class="grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-next"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_6$2)} alt="control icon button"></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Shop1/Section3.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[100px]" }, _attrs))}><div class="mb-[35px] md:mb-[64px]"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]"> Viewed products</h2><p class="text-quote md:text-lead-lg text-gray-600">Take it to your cart </p></div><div class="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-2 xl:grid-cols-3"><div class="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="h-full w-full object-cover max-w-[170px]"${ssrRenderAttr("src", _imports_0$1)} alt="product image"${_scopeId}><div class="font-chivo"${_scopeId}><p class="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>Bass ultra x-203. Head phone</p><div class="flex items-center gap-3"${_scopeId}><span class="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span><span class="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span></div></div>`);
      } else {
        return [
          createVNode("img", {
            class: "h-full w-full object-cover max-w-[170px]",
            src: _imports_0$1,
            alt: "product image"
          }),
          createVNode("div", { class: "font-chivo" }, [
            createVNode("p", { class: "font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]" }, "Bass ultra x-203. Head phone"),
            createVNode("div", { class: "flex items-center gap-3" }, [
              createVNode("span", { class: "text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8"),
              createVNode("span", { class: "text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="h-full w-full object-cover max-w-[170px]"${ssrRenderAttr("src", _imports_1$1$1)} alt="product image"${_scopeId}><div class="font-chivo"${_scopeId}><p class="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>Bass ultra x-203. Head phone</p><div class="flex items-center gap-3"${_scopeId}><span class="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span><span class="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span></div></div>`);
      } else {
        return [
          createVNode("img", {
            class: "h-full w-full object-cover max-w-[170px]",
            src: _imports_1$1$1,
            alt: "product image"
          }),
          createVNode("div", { class: "font-chivo" }, [
            createVNode("p", { class: "font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]" }, "Bass ultra x-203. Head phone"),
            createVNode("div", { class: "flex items-center gap-3" }, [
              createVNode("span", { class: "text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8"),
              createVNode("span", { class: "text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="h-full w-full object-cover max-w-[170px]"${ssrRenderAttr("src", _imports_2$1$1)} alt="product image"${_scopeId}><div class="font-chivo"${_scopeId}><p class="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>Bass ultra x-203. Head phone</p><div class="flex items-center gap-3"${_scopeId}><span class="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span><span class="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span></div></div>`);
      } else {
        return [
          createVNode("img", {
            class: "h-full w-full object-cover max-w-[170px]",
            src: _imports_2$1$1,
            alt: "product image"
          }),
          createVNode("div", { class: "font-chivo" }, [
            createVNode("p", { class: "font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]" }, "Bass ultra x-203. Head phone"),
            createVNode("div", { class: "flex items-center gap-3" }, [
              createVNode("span", { class: "text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8"),
              createVNode("span", { class: "text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="h-full w-full object-cover max-w-[170px]"${ssrRenderAttr("src", _imports_0$1)} alt="product image"${_scopeId}><div class="font-chivo"${_scopeId}><p class="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>Bass ultra x-203. Head phone</p><div class="flex items-center gap-3"${_scopeId}><span class="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span><span class="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span></div></div>`);
      } else {
        return [
          createVNode("img", {
            class: "h-full w-full object-cover max-w-[170px]",
            src: _imports_0$1,
            alt: "product image"
          }),
          createVNode("div", { class: "font-chivo" }, [
            createVNode("p", { class: "font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]" }, "Bass ultra x-203. Head phone"),
            createVNode("div", { class: "flex items-center gap-3" }, [
              createVNode("span", { class: "text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8"),
              createVNode("span", { class: "text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="h-full w-full object-cover max-w-[170px]"${ssrRenderAttr("src", _imports_1$1$1)} alt="product image"${_scopeId}><div class="font-chivo"${_scopeId}><p class="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>Bass ultra x-203. Head phone</p><div class="flex items-center gap-3"${_scopeId}><span class="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span><span class="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span></div></div>`);
      } else {
        return [
          createVNode("img", {
            class: "h-full w-full object-cover max-w-[170px]",
            src: _imports_1$1$1,
            alt: "product image"
          }),
          createVNode("div", { class: "font-chivo" }, [
            createVNode("p", { class: "font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]" }, "Bass ultra x-203. Head phone"),
            createVNode("div", { class: "flex items-center gap-3" }, [
              createVNode("span", { class: "text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8"),
              createVNode("span", { class: "text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="h-full w-full object-cover max-w-[170px]"${ssrRenderAttr("src", _imports_2$1$1)} alt="product image"${_scopeId}><div class="font-chivo"${_scopeId}><p class="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>Bass ultra x-203. Head phone</p><div class="flex items-center gap-3"${_scopeId}><span class="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span><span class="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span></div></div>`);
      } else {
        return [
          createVNode("img", {
            class: "h-full w-full object-cover max-w-[170px]",
            src: _imports_2$1$1,
            alt: "product image"
          }),
          createVNode("div", { class: "font-chivo" }, [
            createVNode("p", { class: "font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]" }, "Bass ultra x-203. Head phone"),
            createVNode("div", { class: "flex items-center gap-3" }, [
              createVNode("span", { class: "text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8"),
              createVNode("span", { class: "text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]" }, "$29.8")
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Shop1/Section4.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[140px]" }, _attrs))}><div class="mb-[40px] lg:mb-[73px]"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">What&#39;s new</h2><p class="text-quote md:text-lead-lg text-gray-600">From Our blog and Event fanpage</p></div><div class="grid grid-cols-1 gap-[30px] md:grid-cols-2 gap-y-[60px] lg:grid-cols-3"><div class="relative cursor-pointer"><div class="relative"><div class="pr-[26px] aspect-[458/557]"><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$2)} alt="Agon"></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div></div></div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mt-[45px] md:mt-[73px] mb-[18px]">How To Blow Through Capital At An Incredible Rate</h3><p class="text-text text-gray-500 mb-[15px]">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc. Consequat semper viverra nam libero justo laoreet facilisis magna etiam.</p><div class="flex items-center gap-[15px]"><img class="h-full w-full object-cover rounded-full max-w-[60px]"${ssrRenderAttr("src", _imports_6$3)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] font-chivo lg:text-heading-6">Jenny Wilson</p><p class="font-bold text-sm">August 25, 2024</p></div></div></div><div class="relative cursor-pointer"><div class="relative"><div class="pr-[26px] aspect-[458/557]"><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_4$1)} alt="Agon"></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div></div></div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mt-[45px] md:mt-[73px] mb-[18px]">How To Blow Through Capital At An Incredible Rate</h3><p class="text-text text-gray-500 mb-[15px]">Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc. Consequat semper viverra nam libero justo laoreet facilisis magna etiam.</p><div class="flex items-center gap-[15px]"><img class="h-full w-full object-cover rounded-full max-w-[60px]"${ssrRenderAttr("src", _imports_3$1)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] font-chivo lg:text-heading-6">Jenny Wilson</p><p class="font-bold text-sm">August 25, 2024</p></div></div></div><div class="flex flex-col gap-8 md:col-span-2 lg:col-span-1"><div class="flex items-center gap-6 pb-12 border-b border-gray-200 justify-between cursor-pointer"><div class="flex-1"><p class="font-bold font-chivo text-[14px] md:text-heading-6 line-clamp-2 mb-[18px]">Design Studios That Everyone Should Know</p><div class="flex items-center gap-[11px]"><img class="h-full w-full object-cover rounded-full max-w-[42px]"${ssrRenderAttr("src", _imports_3$1)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px]">Jane Cooper</p><p class="font-bold text-sm">August 25, 2024</p></div></div></div><div class="relative flex-1 max-w-[133px]"><div class="pr-[13px] aspect-square"><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$3)} alt="Agon"></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[13px] pl-[13px]"><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-10 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div></div></div></div><div class="flex items-center gap-6 pb-12 border-b border-gray-200 justify-between cursor-pointer"><div class="flex-1"><p class="font-bold font-chivo text-[14px] md:text-heading-6 line-clamp-2 mb-[18px]">Design Studios That Everyone Should Know</p><div class="flex items-center gap-[11px]"><img class="h-full w-full object-cover rounded-full max-w-[42px]"${ssrRenderAttr("src", _imports_7$1)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px]">Jane Cooper</p><p class="font-bold text-sm">August 25, 2024</p></div></div></div><div class="relative flex-1 max-w-[133px]"><div class="pr-[13px] aspect-square"><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_1$2)} alt="Agon"></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[13px] pl-[13px]"><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-3 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div></div></div></div><div class="flex items-center gap-6 pb-12 border-b border-gray-200 justify-between cursor-pointer"><div class="flex-1"><p class="font-bold font-chivo text-[14px] md:text-heading-6 line-clamp-2 mb-[18px]">Design Studios That Everyone Should Know</p><div class="flex items-center gap-[11px]"><img class="h-full w-full object-cover rounded-full max-w-[42px]"${ssrRenderAttr("src", _imports_0$4)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px]">Jane Cooper</p><p class="font-bold text-sm">August 25, 2024</p></div></div></div><div class="relative flex-1 max-w-[133px]"><div class="pr-[13px] aspect-square"><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$2)} alt="Agon"></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[13px] pl-[13px]"><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-5 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div></div></div></div><div class="flex items-center gap-6 pb-12 border-b border-gray-200 justify-between cursor-pointer"><div class="flex-1"><p class="font-bold font-chivo text-[14px] md:text-heading-6 line-clamp-2 mb-[18px]">Design Studios That Everyone Should Know</p><div class="flex items-center gap-[11px]"><img class="h-full w-full object-cover rounded-full max-w-[42px]"${ssrRenderAttr("src", _imports_11$2)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px]">Jane Cooper</p><p class="font-bold text-sm">August 25, 2024</p></div></div></div><div class="relative flex-1 max-w-[133px]"><div class="pr-[13px] aspect-square"><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_4$1)} alt="Agon"></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[13px] pl-[13px]"><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"></div></div></div></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Shop1/Section5.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[111px]" }, _attrs))}><div class="rounded-2xl p-[30px] md:py-[41px] md:px-[87px] bg-green-900 flex relative"><div class="lg:w-[45%]"><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold text-white mb-[6px]">You can order on App and Play store</h1><p class="text-gray-200 text-md md:text-[18px] mb-[60px]">Bring the world of shopping to your phone</p><div class="flex items-center gap-5 mb-[22px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$5)} alt="app store link button"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$5,
            alt: "app store link button"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$3)} alt="google store link button"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$3,
            alt: "google store link button"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center gap-5"><div class="flex items-center gap-[7px]"><div class="bg-green-500 w-[14px] h-[14px] rounded-[2px]"></div><p class="text-sm text-[#B4B4B4]">Order direct from the app</p></div><div class="flex items-center gap-[7px]"><div class="bg-green-500 w-[14px] h-[14px] rounded-[2px]"></div><p class="text-sm text-[#B4B4B4]">Save and searches</p></div></div></div><img class="absolute right-0 hidden w-[54%] lg:block lg:top-1/4 xl:top-[40px]"${ssrRenderAttr("src", _imports_2$2)} alt=""></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Shop1/Section6.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative shop-1-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsShop1Section1 = __nuxt_component_0;
      const _component_SectionsShop1Section2 = __nuxt_component_1;
      const _component_SectionsShop1Section3 = __nuxt_component_2;
      const _component_SectionsShop1Section4 = __nuxt_component_3;
      const _component_SectionsShop1Section5 = __nuxt_component_4;
      const _component_SectionsShop1Section6 = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsShop1Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsShop1Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsShop1Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsShop1Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsShop1Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsShop1Section6, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shop-1/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B004DLsi.mjs.map
