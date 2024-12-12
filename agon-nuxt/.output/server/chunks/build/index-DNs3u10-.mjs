import { useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-BjNzXJKo.mjs';
import { u as useHead, _ as _export_sfc, a as _imports_1$1 } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_2$1 } from './virtual_public-BYCduXmb.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CvGZZJI3.mjs';
import { _ as _imports_0$1, a as _imports_1$1$1, b as _imports_2$1$1, c as _imports_5$1, d as _imports_6, e as _imports_0$7, f as _imports_1$5, g as _imports_2$5 } from './virtual_public-Bn3-DqT8.mjs';
import { _ as _imports_0$2, a as _imports_1$2 } from './virtual_public-BzD1hskI.mjs';
import { _ as _imports_11, a as _imports_14, b as _imports_15, c as _imports_16, d as _imports_17, e as _imports_9 } from './virtual_public-_YVnpyIH.mjs';
import { _ as _imports_1$3, a as _imports_2$2 } from './virtual_public-BnXtLk0F.mjs';
import { _ as _imports_0$3, a as _imports_4$2, b as _imports_2$3 } from './virtual_public-6Hhs9ole.mjs';
import { _ as _imports_0$4, a as _imports_1$4, b as _imports_2$4, c as _imports_3, d as _imports_4$3, e as _imports_5$2, f as _imports_7 } from './virtual_public-DoPwShJ5.mjs';
import { _ as _imports_0$5 } from './virtual_public-Dje3ZdMY.mjs';
import { _ as _imports_0$6 } from './virtual_public-Bu2XTia_.mjs';
import { _ as _imports_0$8, a as _imports_1$6, b as _imports_2$6, c as _imports_3$1, d as _imports_4$4, e as _imports_5$3 } from './virtual_public-DSob6RUo.mjs';
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

const _imports_2 = publicAssetsURL("/assets/images/hero-5.png");
const _imports_4$1 = publicAssetsURL("/assets/images/small-circle.png");
const _imports_5 = publicAssetsURL("/assets/images/medium-circle.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[104px]" }, _attrs))}><div class="flex items-center"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 text-gray-400 mb-[25px]">Exclusive Smart Watch</h3><h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px]">Let go of the challenge</h1><h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[45px]">See yourself better</h1><p class="text-quote md:text-lead-lg text-gray-500 mb-[40px]">Real-time display of data such as exercise duration, mileage, heart rate, etc</p><ul class="grid grid-cols-2 md:grid-cols-3 gap-[17px] mb-[70px]"><li class="flex items-center gap-[10px]"><img${ssrRenderAttr("src", _imports_0)} alt="icon"><span class="text-md text-gray-500">Anti fingerprints</span></li><li class="flex items-center gap-[10px]"><img${ssrRenderAttr("src", _imports_0)} alt="icon"><span class="text-md text-gray-500">Delicate touch</span></li><li class="flex items-center gap-[10px]"><img${ssrRenderAttr("src", _imports_0)} alt="icon"><span class="text-md text-gray-500">Hardness screen</span></li><li class="flex items-center gap-[10px]"><img${ssrRenderAttr("src", _imports_0)} alt="icon"><span class="text-md text-gray-500">Dust prevention</span></li><li class="flex items-center gap-[10px]"><img${ssrRenderAttr("src", _imports_0)} alt="icon"><span class="text-md text-gray-500">3D anti-chip</span></li><li class="flex items-center gap-[10px]"><img${ssrRenderAttr("src", _imports_0)} alt="icon"><span class="text-md text-gray-500">Impact resistant</span></li></ul><div class="bg-white py-3 px-4 flex items-center justify-between border border-gray-100 input-shadow rounded-[10px]"><input class="outline-none ml-5 w-1/2" type="text" placeholder="Enter you mail .."><div><button class="flex items-center transition-colors duration-200 py-[17px] px-[26px] rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-900 whitespace-nowrap flex-1 w-fit gap-5"> Join Pre-Order<i><img class="ml-[7px] w-[12px] filter-white"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"></i></button></div></div></div><div class="relative hidden lg:block"><img class="h-full w-full object-cover animate-float-md"${ssrRenderAttr("src", _imports_2)} alt="Agon"><img class="absolute rounded-2xl animate-float max-w-[296px] -right-[45px] -bottom-[45px]"${ssrRenderAttr("src", _imports_2$1)} alt="chart image"><img class="absolute rounded-2xl animate-float bottom-0 left-[10%]"${ssrRenderAttr("src", _imports_4$1)} alt="circle image"><img class="absolute rounded-2xl animate-hero-thumb-sm-animation top-[-15px] left-[-40px]"${ssrRenderAttr("src", _imports_5)} alt="circle image"></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home5/Section1.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}><div class="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-2 xl:grid-cols-3"><div class="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">`);
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home5/Section2.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[111px]" }, _attrs))}><div class="flex items-center justify-between md:mb-[82px] mb-[40px]"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 w-[16ch]">Featured Product For Pre-Order </h2><div class="flex items-center gap-5"><div class="place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 undefined-prev grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_0$2)} alt="control icon button"></div><div class="place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 undefined-next grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_1$2)} alt="control icon button"></div></div></div><div class="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"><div class="rounded-2xl p-7 border border-gray-200 flex flex-col transition-all duration-200 group hover:border-green-900 hover:-translate-y-1"><div class="relative">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/single-product" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_11)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_11,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(86 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[80%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(186 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[40%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[60%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(826 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[60%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[100%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(836 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[100%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[20%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(122 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[20%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_11)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_11,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(3 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[40%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[60%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(6 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[60%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(46 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[40%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_11)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_11,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(48 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[80%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[40%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(234 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[40%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_11)} alt="featured image product"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_11,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(44 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[80%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_6)} alt="shuffle icon"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_6,
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
        _push2(`<div${_scopeId}><p class="text-xs text-gray-500 font-bold mb-[7px]"${_scopeId}>Sony</p><p class="text-lead font-bold mb-[11px]"${_scopeId}>All Natural Italian-Style Chicken Meatballs </p><div class="flex items-center gap-[10px] mb-9"${_scopeId}><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"${_scopeId}><div class="flex items-center absolute overflow-hidden gap-[3px] w-[100%]"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"${_scopeId}></div></div><p class="text-tiny font-semibold text-gray-400"${_scopeId}>(257 rates)</p></div></div><div class="flex items-center justify-between"${_scopeId}><div class="flex items-baseline gap-2"${_scopeId}><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900"${_scopeId}>$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md"${_scopeId}>$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit"${_scopeId}>Add + </button></div>`);
      } else {
        return [
          createVNode("div", null, [
            createVNode("p", { class: "text-xs text-gray-500 font-bold mb-[7px]" }, "Sony"),
            createVNode("p", { class: "text-lead font-bold mb-[11px]" }, "All Natural Italian-Style Chicken Meatballs "),
            createVNode("div", { class: "flex items-center gap-[10px] mb-9" }, [
              createVNode("div", { class: "flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]" }, [
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("img", {
                  src: _imports_1$3,
                  alt: "star icon"
                }),
                createVNode("div", { class: "flex items-center absolute overflow-hidden gap-[3px] w-[100%]" }, [
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
                    alt: "star icon"
                  }),
                  createVNode("img", {
                    src: _imports_2$2,
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
  _push(`</div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home5/Section3.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_1 = publicAssetsURL("/assets/images/icons/icon-human-dolly.svg");
const _imports_4 = publicAssetsURL("/assets/images/icons/icon-seeding.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[111px]" }, _attrs))}><div class="text-center mb-[45px] md:mb-[80px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Explore by Categories.</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[691px]">We provide many categories, choose a category according to your expertise to make it easier to find a job.</p></div><div class="gap-10 lg:grid lg:grid-cols-2"><div class="rounded-2xl p-5 md:p-[40px] border border-gray-200 mb-10 card-shadow lg:mb-0"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[35px]">Popular Categories</h3><div class="flex flex-col gap-8">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px] pb-[25px] border-b border-gray-200",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-gray-500 transition-all duration-200 group-hover:text-green-900"${_scopeId}>Computer - Laptop</span><div class="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900"${_scopeId}><p class="text-green-900 transition-all duration-300 group-hover:text-white"${_scopeId}>6</p></div>`);
      } else {
        return [
          createVNode("span", { class: "text-gray-500 transition-all duration-200 group-hover:text-green-900" }, "Computer - Laptop"),
          createVNode("div", { class: "bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900" }, [
            createVNode("p", { class: "text-green-900 transition-all duration-300 group-hover:text-white" }, "6")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px] pb-[25px] border-b border-gray-200",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-gray-500 transition-all duration-200 group-hover:text-green-900"${_scopeId}>Smart phone &amp; Tablets</span><div class="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900"${_scopeId}><p class="text-green-900 transition-all duration-300 group-hover:text-white"${_scopeId}>12</p></div>`);
      } else {
        return [
          createVNode("span", { class: "text-gray-500 transition-all duration-200 group-hover:text-green-900" }, "Smart phone & Tablets"),
          createVNode("div", { class: "bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900" }, [
            createVNode("p", { class: "text-green-900 transition-all duration-300 group-hover:text-white" }, "12")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px] pb-[25px] border-b border-gray-200",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-gray-500 transition-all duration-200 group-hover:text-green-900"${_scopeId}>Fashion &amp; Accessories</span><div class="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900"${_scopeId}><p class="text-green-900 transition-all duration-300 group-hover:text-white"${_scopeId}>14</p></div>`);
      } else {
        return [
          createVNode("span", { class: "text-gray-500 transition-all duration-200 group-hover:text-green-900" }, "Fashion & Accessories"),
          createVNode("div", { class: "bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900" }, [
            createVNode("p", { class: "text-green-900 transition-all duration-300 group-hover:text-white" }, "14")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "font-chivo font-medium flex items-center justify-between group text-[19px] leading-[29px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-gray-500 transition-all duration-200 group-hover:text-green-900"${_scopeId}>Health &amp; Beauty</span><div class="bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900"${_scopeId}><p class="text-green-900 transition-all duration-300 group-hover:text-white"${_scopeId}>8</p></div>`);
      } else {
        return [
          createVNode("span", { class: "text-gray-500 transition-all duration-200 group-hover:text-green-900" }, "Health & Beauty"),
          createVNode("div", { class: "bg-gray-200 rounded-full w-11 h-11 grid place-items-center group-hover:bg-green-900" }, [
            createVNode("p", { class: "text-green-900 transition-all duration-300 group-hover:text-white" }, "8")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div><div class="grid grid-cols-1 gap-6 md:grid-cols-2 mb-[50px]"><div class="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center gap-[17px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]"${_scopeId}><img class="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"${ssrRenderAttr("src", _imports_0$3)} alt=""${_scopeId}></div><p class="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white"${_scopeId}>Computer for Designer, Art</p>`);
      } else {
        return [
          createVNode("div", { class: "bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]" }, [
            createVNode("img", {
              class: "rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white",
              src: _imports_0$3,
              alt: ""
            })
          ]),
          createVNode("p", { class: "text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white" }, "Computer for Designer, Art")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center gap-[17px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]"${_scopeId}><img class="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}></div><p class="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white"${_scopeId}>Sport, Home, Outdoor</p>`);
      } else {
        return [
          createVNode("div", { class: "bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]" }, [
            createVNode("img", {
              class: "rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white",
              src: _imports_1,
              alt: ""
            })
          ]),
          createVNode("p", { class: "text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white" }, "Sport, Home, Outdoor")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center gap-[17px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]"${_scopeId}><img class="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"${ssrRenderAttr("src", _imports_4$2)} alt=""${_scopeId}></div><p class="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white"${_scopeId}>Laptop for office, students</p>`);
      } else {
        return [
          createVNode("div", { class: "bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]" }, [
            createVNode("img", {
              class: "rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white",
              src: _imports_4$2,
              alt: ""
            })
          ]),
          createVNode("p", { class: "text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white" }, "Laptop for office, students")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl py-[35px] px-[30px] border border-gray-200 card-shadow group cursor-pointer transition-all duration-200 hover:bg-green-900 hover:-translate-y-1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center gap-[17px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]"${_scopeId}><img class="rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white"${ssrRenderAttr("src", _imports_2$3)} alt=""${_scopeId}></div><p class="text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white"${_scopeId}>Software, card, book</p>`);
      } else {
        return [
          createVNode("div", { class: "bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[40px] h-[40px] xl:w-[60px] xl:h-[60px] bg-[#0B7B3F] group-hover:bg-[#158E99]" }, [
            createVNode("img", {
              class: "rounded-full xl:p-[18px] max-w-[20px] xl:max-w-[60px] group-hover:filter-white",
              src: _imports_2$3,
              alt: ""
            })
          ]),
          createVNode("p", { class: "text-heading-6 font-bold font-chivo transition-colors duration-200 group-hover:text-white" }, "Software, card, book")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="rounded-2xl py-[20px] px-[30px] border border-gray-200 flex items-center card-shadow group cursor-pointer transition-all duration-200 mx-auto w-fit hover:bg-green-900 hover:-translate-y-1 gap-[17px] lg:w-1/2"><div class="bg-opacity-20 rounded-full transition-all duration-200 grid place-items-center w-[20px] h-[20px] xl:w-[33px] xl:h-[33px] bg-[#0B7B3F] group-hover:bg-[#158E99]"><img class="rounded-full max-w-[11px] xl:max-w-[33x] group-hover:filter-white"${ssrRenderAttr("src", _imports_4)} alt=""></div><p class="text-heading-6 font-bold font-chivo group-hover:text-white">See All Categories</p><img class="max-w-[16px] group-hover:filter-white"${ssrRenderAttr("src", _imports_9)} alt="angle icon"></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home5/Section4.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center mx-auto max-w-[905px]" }, _attrs))}><span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-4">How It Work ?</span><div class="text-center mb-[88px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Cross-border ordering has never been easier</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p></div><div class="flex flex-col gap-5 items-center justify-center relative md:flex-wrap md:flex-row lg:gap-[30px] xl:gap-[110px]"><div class="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-2 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]"><div class="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]"><img class="max-w-[36px]"${ssrRenderAttr("src", _imports_0$4)} alt="icon"></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">Start Plan</h4><p class="text-text text-gray-500">Choose any of our packages</p><img class="hidden absolute right-0 lg:block top-1/2 translate-x-[30px] z-[-1] xl:translate-x-full xl:right-[-15px]"${ssrRenderAttr("src", _imports_1$4)} alt="direction arrow"></div><div class="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-3 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]"><div class="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]"><img class="max-w-[36px]"${ssrRenderAttr("src", _imports_2$4)} alt="icon"></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">Connect</h4><p class="text-text text-gray-500">Receive concepts In 24 hours</p><img class="hidden absolute right-0 lg:block top-1/2 translate-x-[30px] z-[-1] xl:translate-x-full xl:right-[-15px]"${ssrRenderAttr("src", _imports_3)} alt="direction arrow"></div><div class="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-5 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]"><div class="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]"><img class="max-w-[36px]"${ssrRenderAttr("src", _imports_4$3)} alt="icon"></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">Match</h4><p class="text-text text-gray-500">Development Stage</p><img class="hidden absolute right-0 top-full lg:block translate-x-[-60px] z-[-1] xl:translate-y-[30px]"${ssrRenderAttr("src", _imports_5$2)} alt="direction arrow"></div><div class="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-9 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px] lg:order-1"><div class="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]"><img class="max-w-[36px]"${ssrRenderAttr("src", _imports_0$5)} alt="icon"></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">Review</h4><p class="text-text text-gray-500">Project launch and checkout</p><img class="hidden absolute left-0 lg:block top-1/2 translate-x-[-30px] z-[-1] xl:-translate-x-full xl:left-[-15px]"${ssrRenderAttr("src", _imports_7)} alt="direction arrow"></div><div class="rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative bg-bg-5 md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]"><div class="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]"><img class="max-w-[36px]"${ssrRenderAttr("src", _imports_0$6)} alt="icon"></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">Complete</h4><p class="text-text text-gray-500">After-release Support</p></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home5/Section5.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[111px]" }, _attrs))}><div class="rounded-2xl p-[30px] md:py-[41px] md:px-[87px] bg-green-900 flex relative"><div class="lg:w-[45%]"><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold text-white mb-[6px]">You can order on App and Play store</h1><p class="text-gray-200 text-md md:text-[18px] mb-[60px]">Bring the world of shopping to your phone</p><div class="flex items-center gap-5 mb-[22px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$7)} alt="app store link button"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$7,
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
        _push2(`<img${ssrRenderAttr("src", _imports_1$5)} alt="google store link button"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$5,
            alt: "google store link button"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="flex items-center gap-5"><div class="flex items-center gap-[7px]"><div class="bg-green-500 w-[14px] h-[14px] rounded-[2px]"></div><p class="text-sm text-[#B4B4B4]">Order direct from the app</p></div><div class="flex items-center gap-[7px]"><div class="bg-green-500 w-[14px] h-[14px] rounded-[2px]"></div><p class="text-sm text-[#B4B4B4]">Save and searches</p></div></div></div><img class="absolute right-0 hidden w-[54%] lg:block lg:top-1/4 xl:top-[40px]"${ssrRenderAttr("src", _imports_2$5)} alt=""></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home5/Section6.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[30px] md:mt-[80px] lg:mt-[143px]" }, _attrs))}><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-center mb-[40px] md:mb-[60px] lg:mb-[84px]">Trusted by the world\u2019s leading companies</h2><div class="flex flex-wrap items-center justify-center mb-[30px] md:mb-[60px] lg:mb-[80px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$8)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$8,
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
        _push2(`<img${ssrRenderAttr("src", _imports_1$6)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$6,
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
        _push2(`<img${ssrRenderAttr("src", _imports_2$6)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$6,
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
        _push2(`<img${ssrRenderAttr("src", _imports_4$4)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4$4,
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
        _push2(`<img${ssrRenderAttr("src", _imports_5$3)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5$3,
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
        _push2(`<img${ssrRenderAttr("src", _imports_0$8)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$8,
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
        _push2(`<img${ssrRenderAttr("src", _imports_1$6)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$6,
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
        _push2(`<img${ssrRenderAttr("src", _imports_2$6)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$6,
            alt: "partner logo"
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home5/Section7.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative home-page-5"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHome5Section1 = __nuxt_component_0;
      const _component_SectionsHome5Section2 = __nuxt_component_1;
      const _component_SectionsHome5Section3 = __nuxt_component_2;
      const _component_SectionsHome5Section4 = __nuxt_component_3;
      const _component_SectionsHome5Section5 = __nuxt_component_4;
      const _component_SectionsHome5Section6 = __nuxt_component_5;
      const _component_SectionsHome5Section7 = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsHome5Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome5Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome5Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome5Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome5Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome5Section6, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome5Section7, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-5/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DNs3u10-.mjs.map
