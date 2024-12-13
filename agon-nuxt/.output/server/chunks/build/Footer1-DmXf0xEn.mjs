import { _ as __nuxt_component_0 } from './nuxt-link-BFJLsJpZ.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { a as _imports_1$3, _ as _export_sfc } from './server.mjs';
import { _ as _imports_0$3 } from './virtual_public-CatqWA01.mjs';

const _imports_0$2 = publicAssetsURL("/assets/images/icons/icon-caret.svg");
const _imports_1$2 = publicAssetsURL("/assets/images/icons/icon-home.svg");
const _imports_2$1 = publicAssetsURL("/assets/images/icons/icon-star-header.svg");
const _imports_3$1 = publicAssetsURL("/assets/images/icons/icon-gem.svg");
const _imports_4$1 = publicAssetsURL("/assets/images/icons/icon-database.svg");
const _imports_5 = publicAssetsURL("/assets/images/icons/icon-headset.svg");
const _imports_6 = publicAssetsURL("/assets/images/icons/icon-briefcase.svg");
const _imports_7 = publicAssetsURL("/assets/images/icons/icon-plane-header.svg");
const _imports_8 = publicAssetsURL("/assets/images/icons/icon-user-add.svg");
const _imports_9 = publicAssetsURL("/assets/images/icons/icon-fingerprint.svg");
const _imports_10 = publicAssetsURL("/assets/images/icons/icon-settings.svg");
const _imports_11 = publicAssetsURL("/assets/images/icons/icon-exclamation.svg");
const _imports_12 = publicAssetsURL("/assets/images/icons/icon-edit.svg");
const _imports_13 = publicAssetsURL("/assets/images/icons/icon-document-signed.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row" }, _attrs))}><li class="flex items-center group">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i><img class="icon-caret group-hover:filter-green"${ssrRenderAttr("src", _imports_0$2)} alt="caret"></i><ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[&#39;&#39;] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-2 w-[340px]"><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_1$2)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Homepage 01</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_1$2,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Homepage 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/home-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_1$2)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Homepage 02</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_1$2,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Homepage 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/home-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_1$2)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Homepage 03</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_1$2,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Homepage 03")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp4">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/home-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_1$2)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Homepage 04</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_1$2,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Homepage 04")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp5">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/home-5"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_1$2)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Homepage 05</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_1$2,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Homepage 05")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/home-6"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_1$2)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Homepage 06</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_1$2,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Homepage 06")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp7">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/home-7"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_1$2)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Homepage 07</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_1$2,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Homepage 07")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="hp8">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/home-8"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_1$2)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Homepage 08</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_1$2,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Homepage 08")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="flex items-center group">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i><img class="icon-caret group-hover:filter-green"${ssrRenderAttr("src", _imports_0$2)} alt="caret"></i><ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[&#39;&#39;] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]"><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="ab1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/about-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_2$1)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>About 01</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_2$1,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "About 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="ab2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/about-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_2$1)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>About 02</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_2$1,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "About 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="ab3">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/about-3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_2$1)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>About 03</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_2$1,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "About 03")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="flex items-center group">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Company`);
      } else {
        return [
          createTextVNode("Company")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i><img class="icon-caret group-hover:filter-green"${ssrRenderAttr("src", _imports_0$2)} alt="caret"></i><ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[&#39;&#39;] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]"><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/services-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_3$1)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Services 01</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_3$1,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Services 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="sv2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/services-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_3$1)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Services 02</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_3$1,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Services 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="p1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/pricing-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_4$1)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Pricing 01</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_4$1,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Pricing 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="p2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/pricing-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_4$1)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Pricing 02</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_4$1,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Pricing 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="faqs1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/faqs-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_5)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>FAQS 01</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_5,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "FAQS 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="faqs2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/faqs-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_5)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>FAQS 02</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_5,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "FAQS 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="career">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/career"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_6)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Career</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_6,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Career")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="career-details">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/career-details"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_6)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Career Detials</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_6,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Career Detials")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="flex items-center group">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pages`);
      } else {
        return [
          createTextVNode("Pages")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i><img class="icon-caret group-hover:filter-green"${ssrRenderAttr("src", _imports_0$2)} alt="caret"></i><ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[&#39;&#39;] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]"><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="contact">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/contact"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_7)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Contact</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_7,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="singup">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/signup"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_8)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Sign Up</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_8,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Sign Up")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="login">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/login"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_9)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Log In</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_9,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Log In")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="rp">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/reset-password"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_10)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Reset Password</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_10,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Reset Password")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="error404">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/error-404"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_11)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Error 404</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_11,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Error 404")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="flex items-center group">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i><img class="icon-caret group-hover:filter-green"${ssrRenderAttr("src", _imports_0$2)} alt="caret"></i><ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[&#39;&#39;] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]"><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="b1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/blog-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_12)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Blog 01</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_12,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Blog 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="b2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/blog-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_12)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Blog 02</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_12,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Blog 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="single">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_13)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Blog Single</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_13,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Blog Single")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="flex items-center group">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Shop`);
      } else {
        return [
          createTextVNode("Shop")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i><img class="icon-caret group-hover:filter-green"${ssrRenderAttr("src", _imports_0$2)} alt="caret"></i><ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[&#39;&#39;] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]"><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="s1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/shop-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_12)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Shop 01</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_12,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Shop 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="s2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/shop-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_12)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Shop 02</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_12,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Shop 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="product">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_12)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Product Details</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_12,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Product Details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li></ul>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Menu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_1$1 = publicAssetsURL("/assets/images/icons/icon-angle-down-fill.svg");
const _sfc_main$3 = {
  __name: "SidebarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const isToggled = ref(false);
    const isActive = ref({
      status: false,
      key: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="${ssrRenderClass([{ "burger-close": isToggled.value }, "burger-icon burger-icon-white menu__icon"])}"><span class="burger-icon-top"></span><span class="burger-icon-mid"></span><span class="burger-icon-bottom"></span></div><nav class="${ssrRenderClass([{ "opacity-0 pointer-events-none ": !isToggled.value }, "fixed top-0 right-0 bg-white flex flex-col h-screen nav-shadow overflow-y-scroll nav-mobile transition-all duration-200 w-[380px] z-[100]"])}"><div class="flex items-center border-b p-[15px] lg:p-[26px] gap-[10px] border-[#F2F4F7]"><img class="max-w-[50px]"${ssrRenderAttr("src", _imports_0$3)} alt="avatar"><div><p class="font-bold">Hi! Steven</p><p class="text-sm font-chivo text-gray-500">You have 5 new messages</p></div></div><div class="p-[30px]"><ul class="font-chivo font-medium text-[16px] leading-[16px]"><li class="group menu-mobile-item py-[13px]"><div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"><p>Home</p><img class="w-[18px] h-[18px]"${ssrRenderAttr("src", _imports_1$1)} alt="angle icon"></div><ul class="pl-5 menu-child pt-[10px]" style="${ssrRenderStyle(isActive.value.key === 1 ? null : { display: "none" })}"><li class="text-md py-[10px]" id="hp1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Homepage 01`);
          } else {
            return [
              createTextVNode("Homepage 01")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="hp2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/home-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Homepage 02`);
          } else {
            return [
              createTextVNode("Homepage 02")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="hp3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/home-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Homepage 03`);
          } else {
            return [
              createTextVNode("Homepage 03")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="hp4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/home-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Homepage 04`);
          } else {
            return [
              createTextVNode("Homepage 04")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="hp5">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/home-5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Homepage 05`);
          } else {
            return [
              createTextVNode("Homepage 05")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="hp6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/home-6"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Homepage 06`);
          } else {
            return [
              createTextVNode("Homepage 06")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="hp7">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/home-7"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Homepage 07`);
          } else {
            return [
              createTextVNode("Homepage 07")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="hp8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/home-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Homepage 08`);
          } else {
            return [
              createTextVNode("Homepage 08")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="group menu-mobile-item py-[13px]"><div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"><p>About</p><img class="w-[18px] h-[18px]"${ssrRenderAttr("src", _imports_1$1)} alt="angle icon"></div><ul class="pl-5 menu-child pt-[10px]" style="${ssrRenderStyle(isActive.value.key === 2 ? null : { display: "none" })}"><li class="text-md py-[10px]" id="ab1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/about-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About 01`);
          } else {
            return [
              createTextVNode("About 01")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="ab2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/about-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About 02`);
          } else {
            return [
              createTextVNode("About 02")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="ab3">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/about-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About 03`);
          } else {
            return [
              createTextVNode("About 03")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="group menu-mobile-item py-[13px]"><div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"><p>Services</p><img class="w-[18px] h-[18px]"${ssrRenderAttr("src", _imports_1$1)} alt="angle icon"></div><ul class="pl-5 menu-child pt-[10px]" style="${ssrRenderStyle(isActive.value.key === 3 ? null : { display: "none" })}"><li class="text-md py-[10px]" id="sv1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/services-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services 01`);
          } else {
            return [
              createTextVNode("Services 01")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="sv2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/services-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Services 02`);
          } else {
            return [
              createTextVNode("Services 02")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="p1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/pricing-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing 01`);
          } else {
            return [
              createTextVNode("Pricing 01")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="p2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/pricing-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing 02`);
          } else {
            return [
              createTextVNode("Pricing 02")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="faqs1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/faqs-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`FAQS 01`);
          } else {
            return [
              createTextVNode("FAQS 01")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="faqs2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/faqs-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`FAQS 02`);
          } else {
            return [
              createTextVNode("FAQS 02")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="career">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/career"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Career`);
          } else {
            return [
              createTextVNode("Career")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="career-details">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/career-details"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Career Detials`);
          } else {
            return [
              createTextVNode("Career Detials")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="group menu-mobile-item py-[13px]"><div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"><p>Pages</p><img class="w-[18px] h-[18px]"${ssrRenderAttr("src", _imports_1$1)} alt="angle icon"></div><ul class="pl-5 menu-child pt-[10px]" style="${ssrRenderStyle(isActive.value.key === 4 ? null : { display: "none" })}"><li class="text-md py-[10px]" id="contact">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="singup">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/signup"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign Up`);
          } else {
            return [
              createTextVNode("Sign Up")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="login">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/login"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Log In`);
          } else {
            return [
              createTextVNode("Log In")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="rp">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/reset-password"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Reset Password`);
          } else {
            return [
              createTextVNode("Reset Password")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="error404">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/error-404"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Error 404`);
          } else {
            return [
              createTextVNode("Error 404")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="group menu-mobile-item py-[13px]"><div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"><p>Blog</p><img class="w-[18px] h-[18px]"${ssrRenderAttr("src", _imports_1$1)} alt="angle icon"></div><ul class="pl-5 menu-child pt-[10px]" style="${ssrRenderStyle(isActive.value.key === 5 ? null : { display: "none" })}"><li class="text-md py-[10px]" id="b1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/blog-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog 01`);
          } else {
            return [
              createTextVNode("Blog 01")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="b2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/blog-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog 02`);
          } else {
            return [
              createTextVNode("Blog 02")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="single">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/single"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog Single`);
          } else {
            return [
              createTextVNode("Blog Single")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li><li class="group menu-mobile-item py-[13px]"><div class="flex items-center justify-between transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]"><p>Shop</p><img class="w-[18px] h-[18px]"${ssrRenderAttr("src", _imports_1$1)} alt="angle icon"></div><ul class="pl-5 menu-child pt-[10px]" style="${ssrRenderStyle(isActive.value.key === 6 ? null : { display: "none" })}"><li class="text-md py-[10px]" id="s1">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/shop-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shop 01`);
          } else {
            return [
              createTextVNode("Shop 01")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="s2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/shop-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Shop 02`);
          } else {
            return [
              createTextVNode("Shop 02")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="text-md py-[10px]" id="product">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "block transition-all duration-200 hover:text-green-900 hover:translate-x-1",
        href: "/single-product"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Product Details`);
          } else {
            return [
              createTextVNode("Product Details")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></li></ul><div class="mt-5 border-t border-b border-gray-100 pb-5 mb-[25px] pt-[30px]"><p class="font-bold text-heading-6 mb-[10px]">Your Account</p><ul class="text-[15px]"><li class="py-[13px]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]",
        href: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile`);
          } else {
            return [
              createTextVNode(" Profile")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="py-[13px]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]",
        href: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Work Preferences`);
          } else {
            return [
              createTextVNode(" Work Preferences")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="py-[13px]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]",
        href: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` My Boosted Shots`);
          } else {
            return [
              createTextVNode(" My Boosted Shots")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="py-[13px]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]",
        href: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` My Collections`);
          } else {
            return [
              createTextVNode(" My Collections")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="py-[13px]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]",
        href: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Account Settings`);
          } else {
            return [
              createTextVNode(" Account Settings")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="py-[13px]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]",
        href: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Go Pro`);
          } else {
            return [
              createTextVNode(" Go Pro")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="py-[13px]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "transition-all duration-200 hover:text-green-900 hover:translate-x-[2px]",
        href: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Sign Out`);
          } else {
            return [
              createTextVNode(" Sign Out")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div><div class="text-gray-400 font-chivo text-[13px]"> Copyright 2024 \xA9 Agon - Agency Template.<br><span>Designed by</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-green-900",
        href: "http://alithemes.com"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\xA0AliThemes`);
          } else {
            return [
              createTextVNode("\xA0AliThemes")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav><div class="${ssrRenderClass([{ show: isToggled.value }, "overlay"])}"></div><!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/SidebarMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/assets/images/logo.svg");
const _sfc_main$2 = {
  __name: "Header1",
  __ssrInlineRender: true,
  setup(__props) {
    const scroll = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_LayoutMenu = __nuxt_component_1;
      const _component_LayoutSidebarMenu = _sfc_main$3;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["h-auto full-width relative py-[15px] first-letter:lg:py-[26px]", { "sticky-header": scroll.value }]
      }, _attrs))}><div class="px-[12px] md:px-[36px] xl:px-0 mt-0 flex items-center justify-between mx-auto relative max-w-[1320px]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]"${ssrRenderAttr("src", _imports_0$1)} alt="logo image"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]",
                src: _imports_0$1,
                alt: "logo image"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block">`);
      _push(ssrRenderComponent(_component_LayoutMenu, null, null, _parent));
      _push(`</nav><div class="hidden xl:block"><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white",
        href: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-chivo"${_scopeId}>Learn more</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$3)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-heading-6 font-bold font-chivo" }, "Learn more"),
              createVNode("i", null, [
                createVNode("img", {
                  class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
                  src: _imports_1$3,
                  alt: "arrow right icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div></div>`);
      _push(ssrRenderComponent(_component_LayoutSidebarMenu, null, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/assets/images/icons/icon-up.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "bg fixed bottom-28 rounded-full grid place-items-center opacity-0 invisible transition-all duration-300 right-[20px] z-[9999] w-[48px] h-[48px]",
    id: "backToTop"
  }, _attrs))}><a class="rounded-full bg-green-900 grid place-items-center w-[48px] h-[48px]" href="#top"><img${ssrRenderAttr("src", _imports_0)} alt="to top icon"></a></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/BackToTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_1 = publicAssetsURL("/assets/images/icons/icon-facebook-green.svg");
const _imports_2 = publicAssetsURL("/assets/images/icons/icon-instagram-green.svg");
const _imports_3 = publicAssetsURL("/assets/images/icons/icon-twitter-green.svg");
const _imports_4 = publicAssetsURL("/assets/images/icons/icon-linkedin-green.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "mt-[92px] lg:mt-[150px] xl:mt-[200px] mb-[30px]" }, _attrs))}><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]"><div class="flex flex-col items-center gap-2 mb-14 md:flex-row md:justify-between"><img class="h-full w-full object-cover max-w-[162px]"${ssrRenderAttr("src", _imports_0$1)} alt="logo"><div class="flex items-center flex-col gap-5 md:flex-row lg:gap-[30px]"><p class="text-heading-6 font-chivo font-bold">Ready to get started?</p><button type="button"><a class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit" href="#"><span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">Create an Account</span></a></button></div></div><div class="w-full bg-gray-200 h-[1px] mb-[52px]"></div><div class="text-gray-600 grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-5 xl:gap-[98px]"><div><h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Contact</h5><p class="text-text mb-5">4517 Washington Ave. Manchester, Kentucky 39495</p><p class="text-text underline">(239) 555-0108</p><p class="text-text underline">contact@agon.com</p></div><div><h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">About Us</h5><ul><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Mission &amp; Vision</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Our Team</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Careers</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Press &amp; Media</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Advertising</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Testimonials</a></li></ul></div><div><h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Discover</h5><ul><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Our Blog</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Plans &amp; Pricing</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Knowledge Base</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Cookie Policy</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Office Center</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">News &amp; Events</a></li></ul></div><div><h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Support</h5><ul><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">FAQs</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Editor Help</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Community</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Live Chatting</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Contact Us</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Support Center</a></li></ul></div><div><h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Useful links</h5><ul><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Request an offer</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">How it works</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Pricing</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Reviews</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Stories</a></li></ul></div></div><div class="w-full bg-gray-200 h-[1px] mb-[46px]"></div><div class="text-gray-400 lg:flex lg:items-center lg:justify-between"><div class="md:flex md:items-center md:gap-6"><p class="text-lead font-bold">\xA9Agon Official 2024</p><div class="flex items-center justify-between md:gap-6"><a class="text-text" href="#">Privacy policy</a><a class="text-text" href="#">Cookies</a><a class="text-text" href="#">Terms of service</a></div></div><div class="flex items-center justify-center gap-5 mt-5 lg:mt-0"><a class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_1)} alt="facebook icon"></a><a class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2)} alt="instagram icon"></a><a class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3)} alt="twitter icon"></a><a class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="linkedin icon"></a></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _sfc_main$2 as _, __nuxt_component_2 as a, __nuxt_component_3 as b };
//# sourceMappingURL=Footer1-DmXf0xEn.mjs.map
