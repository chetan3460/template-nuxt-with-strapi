import { useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc, a as _imports_1$2 } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BFJLsJpZ.mjs';
import { _ as _imports_1$3, a as _imports_2$2 } from './virtual_public-BnXtLk0F.mjs';
import { _ as _imports_1$4, a as _imports_2$3, b as _imports_3$3 } from './virtual_public-CGWXnhd5.mjs';
import { _ as __nuxt_component_0$2 } from './Testimonial1-Bce7avcF.mjs';
import { _ as _imports_0$3, a as _imports_1$5 } from './virtual_public-BzD1hskI.mjs';
import { _ as _imports_0$4, a as _imports_1$6, b as _imports_2$4, c as _imports_3$4, d as _imports_4$2, e as _imports_5 } from './virtual_public-DSob6RUo.mjs';
import { _ as _imports_1$7 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_2$5 } from './virtual_public-BYCduXmb.mjs';
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
import 'swiper/modules';
import 'swiper/vue';
import './virtual_public-MKHZdP9B.mjs';
import './virtual_public-B-ThRufd.mjs';
import './virtual_public-ug1V0zRq.mjs';
import './virtual_public-D-HlBqo0.mjs';

const _imports_1$1 = publicAssetsURL("/assets/images/hero-8a.png");
const _imports_2$1 = publicAssetsURL("/assets/images/hero-8b.png");
const _imports_3$2 = publicAssetsURL("/assets/images/hero-8c.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width" }, _attrs))}><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] grid items-center mx-auto lg:mt-[128px] max-w-[1320px] lg:gap-10 lg:grid-cols-2 xl:grid-cols-[minmax(695px,_1fr)_1fr]"><div class="flex-1"><span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">CHECK OUR BEST PROMOTIONS</span><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-6 lg:mb-10"><p class="font-bold inline-block">Search Your\xA0</p><p class="text-green-900 font-bold inline-block">Next Holiday\xA0</p><p class="font-bold inline-block">from Our Destinations</p></h1><p class="text-quote md:text-lead-lg text-gray-600 mb-[45px]">Get a website to be found on the first page of Google to avoid missing out on potential visitors and sales.</p><div class="bg-white py-3 px-4 flex items-center justify-between border border-gray-100 input-shadow rounded-[10px] max-w-[600px]"><input class="outline-none ml-5 w-1/2" type="text" placeholder="Enter you mail .."><div><button class="flex items-center transition-colors duration-200 py-[17px] px-[26px] rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-900 whitespace-nowrap flex-1 w-fit gap-5"> Search<i><img class="ml-[7px] w-[12px] filter-white"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"></i></button></div></div></div><div class="items-center flex-1 relative hidden gap-[17px] lg:flex"><div class="flex-1 z-10"><img class="shadow-3 animate-float rounded-[158px] lg:max-w-[140px] xl:max-w-[184px]"${ssrRenderAttr("src", _imports_1$1)} alt="agon hero banner"></div><div class="flex-1 z-10"><img class="shadow-3 rounded-[158px] lg:max-w-[140px] xl:max-w-[184px]"${ssrRenderAttr("src", _imports_2$1)} alt="agon hero banner"></div><div class="flex-1 z-10"><img class="shadow-3 animate-float rounded-[158px] lg:max-w-[140px] xl:max-w-[184px]"${ssrRenderAttr("src", _imports_3$2)} alt="agon hero banner"></div><div class="rounded-full absolute opacity-50 w-[600px] h-[600px] bg-[#9BE9FB] blur-[200px] z-0 top-0 left-0 -translate-x-1/3 -translate-y-1/3"></div><div class="rounded-full absolute opacity-50 w-[400px] h-[400px] bg-[#FFD5C8] blur-[200px] z-0 bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home8/Section1.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[50px]">Popular Search</h3><ul class="flex items-center flex-wrap gap-[15px]"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`New York`);
      } else {
        return [
          createTextVNode("New York")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`London`);
      } else {
        return [
          createTextVNode("London")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Estonia`);
      } else {
        return [
          createTextVNode("Estonia")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Phuket`);
      } else {
        return [
          createTextVNode("Phuket")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Paris`);
      } else {
        return [
          createTextVNode("Paris")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Nethelands`);
      } else {
        return [
          createTextVNode("Nethelands")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Lotus Temple`);
      } else {
        return [
          createTextVNode("Lotus Temple")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Eiffel Tower`);
      } else {
        return [
          createTextVNode("Eiffel Tower")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`The Colosseum`);
      } else {
        return [
          createTextVNode("The Colosseum")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Rome`);
      } else {
        return [
          createTextVNode("Rome")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Statue of Liberty`);
      } else {
        return [
          createTextVNode("Statue of Liberty")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Machu Picchu`);
      } else {
        return [
          createTextVNode("Machu Picchu")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Bali, Indonesia`);
      } else {
        return [
          createTextVNode("Bali, Indonesia")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Orleans`);
      } else {
        return [
          createTextVNode("Orleans")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Kerry, Ireland`);
      } else {
        return [
          createTextVNode("Kerry, Ireland")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Marrakesh`);
      } else {
        return [
          createTextVNode("Marrakesh")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Morocco`);
      } else {
        return [
          createTextVNode("Morocco")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Central`);
      } else {
        return [
          createTextVNode("Central")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tokyo`);
      } else {
        return [
          createTextVNode("Tokyo")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Dubai`);
      } else {
        return [
          createTextVNode("Dubai")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Bora Bora`);
      } else {
        return [
          createTextVNode("Bora Bora")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Dubrovnik`);
      } else {
        return [
          createTextVNode("Dubrovnik")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Edinburgh`);
      } else {
        return [
          createTextVNode("Edinburgh")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Paro Valley`);
      } else {
        return [
          createTextVNode("Paro Valley")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Jaipur, India`);
      } else {
        return [
          createTextVNode("Jaipur, India")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block px-7 border border-gray-200 text-gray-500 font-bold transition-colors duration-200 py-[18px] rounded-[50px] text-[14px] leading-[14px] hover:text-green-1000 hover:border-green-1000",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Waikato`);
      } else {
        return [
          createTextVNode("Waikato")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home8/Section2.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0$2 = publicAssetsURL("/assets/images/destination-1.png");
const _imports_3$1 = publicAssetsURL("/assets/images/icons/icon-location.svg");
const _imports_4$1 = publicAssetsURL("/assets/images/icons/icon-calendar.svg");
const _imports_6 = publicAssetsURL("/assets/images/destination-2.png");
const _imports_7 = publicAssetsURL("/assets/images/destination-3.png");
const _imports_8 = publicAssetsURL("/assets/images/destination-4.png");
const _imports_9 = publicAssetsURL("/assets/images/destination-5.png");
const _imports_10 = publicAssetsURL("/assets/images/destination-6.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-8">Hot for this Summer</span><div class="mb-14"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]"> Explore Top Destiations</h2><p class="text-quote md:text-lead-lg text-gray-600">We find the absolute best prices on hotels &amp; flights then we pass these savings directly to you. </p></div><div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[50px] mb-[52px]"><div class="rounded-2xl p-[25px] pb-[35px] border border-gray-200"><div class="aspect-[408/275]"><img class="h-full w-full object-cover rounded-2xl mb-[30px]"${ssrRenderAttr("src", _imports_0$2)} alt="Agon"></div><div class="flex items-center gap-[10px] mb-[11px]"><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div><p class="text-tiny font-semibold text-gray-400">(84 rates)</p></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">Home Page 8 </h4><div class="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]"><div class="flex items-baseline gap-[2px]"><img${ssrRenderAttr("src", _imports_3$1)} alt="location icon"><p class="text-sm font-bold text-gray-500">Central Park West, USA</p></div><div class="flex items-baseline gap-[5px]"><img${ssrRenderAttr("src", _imports_4$1)} alt="calendar icon"><p class="text-sm font-bold text-gray-500 -translate-y-[1px]">3 days, 2 night</p></div></div><div class="flex items-center justify-between"><div class="flex items-baseline gap-2"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Explore<i><img class="ml-[7px] w-[12px] filter-green"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"></i></button></div></div><div class="rounded-2xl p-[25px] pb-[35px] border border-gray-200"><div class="aspect-[408/275]"><img class="h-full w-full object-cover rounded-2xl mb-[30px]"${ssrRenderAttr("src", _imports_6)} alt="Agon"></div><div class="flex items-center gap-[10px] mb-[11px]"><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div><p class="text-tiny font-semibold text-gray-400">(84 rates)</p></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">Discovery Island Kayak Tour </h4><div class="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]"><div class="flex items-baseline gap-[2px]"><img${ssrRenderAttr("src", _imports_3$1)} alt="location icon"><p class="text-sm font-bold text-gray-500">Central Park West, USA</p></div><div class="flex items-baseline gap-[5px]"><img${ssrRenderAttr("src", _imports_4$1)} alt="calendar icon"><p class="text-sm font-bold text-gray-500 -translate-y-[1px]">3 days, 2 night</p></div></div><div class="flex items-center justify-between"><div class="flex items-baseline gap-2"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Explore<i><img class="ml-[7px] w-[12px] filter-green"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"></i></button></div></div><div class="rounded-2xl p-[25px] pb-[35px] border border-gray-200"><div class="aspect-[408/275]"><img class="h-full w-full object-cover rounded-2xl mb-[30px]"${ssrRenderAttr("src", _imports_7)} alt="Agon"></div><div class="flex items-center gap-[10px] mb-[11px]"><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div><p class="text-tiny font-semibold text-gray-400">(84 rates)</p></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">Mykonos and Santorini Tour </h4><div class="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]"><div class="flex items-baseline gap-[2px]"><img${ssrRenderAttr("src", _imports_3$1)} alt="location icon"><p class="text-sm font-bold text-gray-500">Central Park West, USA</p></div><div class="flex items-baseline gap-[5px]"><img${ssrRenderAttr("src", _imports_4$1)} alt="calendar icon"><p class="text-sm font-bold text-gray-500 -translate-y-[1px]">3 days, 2 night</p></div></div><div class="flex items-center justify-between"><div class="flex items-baseline gap-2"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Explore<i><img class="ml-[7px] w-[12px] filter-green"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"></i></button></div></div><div class="rounded-2xl p-[25px] pb-[35px] border border-gray-200"><div class="aspect-[408/275]"><img class="h-full w-full object-cover rounded-2xl mb-[30px]"${ssrRenderAttr("src", _imports_8)} alt="Agon"></div><div class="flex items-center gap-[10px] mb-[11px]"><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div><p class="text-tiny font-semibold text-gray-400">(84 rates)</p></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">The Metropolitan Museum Art </h4><div class="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]"><div class="flex items-baseline gap-[2px]"><img${ssrRenderAttr("src", _imports_3$1)} alt="location icon"><p class="text-sm font-bold text-gray-500">Central Park West, USA</p></div><div class="flex items-baseline gap-[5px]"><img${ssrRenderAttr("src", _imports_4$1)} alt="calendar icon"><p class="text-sm font-bold text-gray-500 -translate-y-[1px]">3 days, 2 night</p></div></div><div class="flex items-center justify-between"><div class="flex items-baseline gap-2"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Explore<i><img class="ml-[7px] w-[12px] filter-green"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"></i></button></div></div><div class="rounded-2xl p-[25px] pb-[35px] border border-gray-200"><div class="aspect-[408/275]"><img class="h-full w-full object-cover rounded-2xl mb-[30px]"${ssrRenderAttr("src", _imports_9)} alt="Agon"></div><div class="flex items-center gap-[10px] mb-[11px]"><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div><p class="text-tiny font-semibold text-gray-400">(84 rates)</p></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">Rainbow Mountain Red Valley </h4><div class="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]"><div class="flex items-baseline gap-[2px]"><img${ssrRenderAttr("src", _imports_3$1)} alt="location icon"><p class="text-sm font-bold text-gray-500">Central Park West, USA</p></div><div class="flex items-baseline gap-[5px]"><img${ssrRenderAttr("src", _imports_4$1)} alt="calendar icon"><p class="text-sm font-bold text-gray-500 -translate-y-[1px]">3 days, 2 night</p></div></div><div class="flex items-center justify-between"><div class="flex items-baseline gap-2"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Explore<i><img class="ml-[7px] w-[12px] filter-green"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"></i></button></div></div><div class="rounded-2xl p-[25px] pb-[35px] border border-gray-200"><div class="aspect-[408/275]"><img class="h-full w-full object-cover rounded-2xl mb-[30px]"${ssrRenderAttr("src", _imports_10)} alt="Agon"></div><div class="flex items-center gap-[10px] mb-[11px]"><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$3)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div><p class="text-tiny font-semibold text-gray-400">(84 rates)</p></div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">Los Glaciares &amp; Fitz Roy Trip </h4><div class="flex items-center gap-[15px] lg:gap-[35px] mb-[43px]"><div class="flex items-baseline gap-[2px]"><img${ssrRenderAttr("src", _imports_3$1)} alt="location icon"><p class="text-sm font-bold text-gray-500">Central Park West, USA</p></div><div class="flex items-baseline gap-[5px]"><img${ssrRenderAttr("src", _imports_4$1)} alt="calendar icon"><p class="text-sm font-bold text-gray-500 -translate-y-[1px]">3 days, 2 night</p></div></div><div class="flex items-center justify-between"><div class="flex items-baseline gap-2"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900">$22.51 </h4><span class="text-gray-400 line-through text-tiny lg:text-md">$2.80</span></div><button class="flex items-center transition-colors duration-200 py-[5px] px-4 rounded-[8px] font-chivo font-semibold text-md md:text-lg text-white bg-green-100 text-green-900 w-fit">Explore<i><img class="ml-[7px] w-[12px] filter-green"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"></i></button></div></div></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 mx-auto tracking-wide text-md w-fit gap-4 md:text-heading-6",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Load more destinations</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$2)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Load more destinations"),
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
  _push(`</button></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home8/Section3.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$1 = publicAssetsURL("/assets/images/thumbnail-16.png");
const _imports_1 = publicAssetsURL("/assets/images/icons/icon-user.svg");
const _imports_2 = publicAssetsURL("/assets/images/icons/icon-destination.svg");
const _imports_3 = publicAssetsURL("/assets/images/icons/icon-paperplane.svg");
const _imports_4 = publicAssetsURL("/assets/images/icons/icon-plane.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex items-center flex-col md:flex-row lg:mt-[112px] gap-[35px] md:gap-[85px]" }, _attrs))}><div class="flex-1"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_0$1)} alt="Agon"></div><div class="flex-1 order-1"><h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">How does it works</h3><p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">We find the absolute best prices on hotels &amp; flights then we pass these savings directly to you.</p><div class="flex flex-col"><div class="flex items-start gap-5 mb-[30px] last:mb-0"><div class="input-shadow grid place-items-center w-[64px] h-[64px] rounded-[36px]"><img class="h-full w-full object-cover max-w-[25px] max-h-[25px]"${ssrRenderAttr("src", _imports_1)} alt="icon"></div><div class="flex-1"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900 mb-[14px]">Account</h4><p class="text-text text-gray-500">All the necessary information to create your account are below this.</p></div></div><div class="flex items-start gap-5 mb-[30px] last:mb-0"><div class="input-shadow grid place-items-center w-[64px] h-[64px] rounded-[36px]"><img class="h-full w-full object-cover max-w-[25px] max-h-[25px]"${ssrRenderAttr("src", _imports_2)} alt="icon"></div><div class="flex-1"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900 mb-[14px]">Select Destination</h4><p class="text-text text-gray-500">At first choose the place you wanted to go</p></div></div><div class="flex items-start gap-5 mb-[30px] last:mb-0"><div class="input-shadow grid place-items-center w-[64px] h-[64px] rounded-[36px]"><img class="h-full w-full object-cover max-w-[25px] max-h-[25px]"${ssrRenderAttr("src", _imports_3)} alt="icon"></div><div class="flex-1"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900 mb-[14px]">Book a Trip</h4><p class="text-text text-gray-500">book your tip form our exclusive offers</p></div></div><div class="flex items-start gap-5 mb-[30px] last:mb-0"><div class="input-shadow grid place-items-center w-[64px] h-[64px] rounded-[36px]"><img class="h-full w-full object-cover max-w-[25px] max-h-[25px]"${ssrRenderAttr("src", _imports_4)} alt="icon"></div><div class="flex-1"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-green-900 mb-[14px]">Take your flight</h4><p class="text-text text-gray-500">Take your flight on selected date and joy</p></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home8/Section4.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0 = publicAssetsURL("/assets/images/thumbnail-17.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-bg-7" }, _attrs))}><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex items-center flex-col mx-auto relative md:flex-row lg:mt-[150px] gap-[35px] md:gap-[85px] pt-[143px] pb-[100px] max-w-[1320px]"><div class="flex-1 absolute bottom-0 right-0 max-w-[667px] aspect-[667/600]"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_0)} alt="Agon"></div><div class="flex-1 max-w-[667px]"><h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">A Simply Perfect Place To Get Lost</h3><p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">Feugiat primis ligula risus auctor egestas and augue viverra mauri tortor in iaculis magna a feugiat mauris ipsum and placerat viverra tortor gravida purus.</p><div class="md:mt-[90px]"><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_1$4)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Work smarter with powerful features</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_2$3)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Designed for teams of all sorts and sizes</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_3$3)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Advanced analytics to grow your business</h3><p class="text-excerpt">Aliquam a augue suscipit, luctus neque purus ipsum neque at dolor primis libero tempus, blandit</p></div></div></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home8/Section5.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_SliderTestimonial1 = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}><div class="items-center justify-between md:flex mb-[30px] md:mb-[90px]"><div class="mb-8"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Our Happy Customers</h2><p class="text-quote md:text-lead-lg text-gray-600">Know about our clients, we are a woldwide corporate brand</p></div><div class="flex items-center gap-5"><div class="place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-prev grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_0$3)} alt="control icon button"></div><div class="place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-next grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_1$5)} alt="control icon button"></div></div></div>`);
  _push(ssrRenderComponent(_component_SliderTestimonial1, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home8/Section6.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[30px] md:mt-[80px] lg:mt-[143px]" }, _attrs))}><div class="flex flex-wrap items-center justify-center mb-[30px] md:mb-[60px] lg:mb-[80px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$4)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$4,
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
        _push2(`<img${ssrRenderAttr("src", _imports_2$4)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$4,
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
        _push2(`<img${ssrRenderAttr("src", _imports_3$4)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3$4,
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
        _push2(`<img${ssrRenderAttr("src", _imports_4$2)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4$2,
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
        _push2(`<img${ssrRenderAttr("src", _imports_0$4)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$4,
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
        _push2(`<img${ssrRenderAttr("src", _imports_2$4)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$4,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-bg-6 md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]" padding="px-[15px] py-[50px] md:px-[52px] md:py-[72px]"><div class="flex-1 mb-[30px]"><p class="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">newsletter</p><h4 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">Subscribe our newsletter</h4><p class="text-text text-gray-500">By clicking the button, you are agreeing with our</p>`);
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
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_1$2)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$7)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2$5)} alt="Agon"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home8/Section7.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative home-page-8"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHome8Section1 = __nuxt_component_0;
      const _component_SectionsHome8Section2 = __nuxt_component_1;
      const _component_SectionsHome8Section3 = __nuxt_component_2;
      const _component_SectionsHome8Section4 = __nuxt_component_3;
      const _component_SectionsHome8Section5 = __nuxt_component_4;
      const _component_SectionsHome8Section6 = __nuxt_component_5;
      const _component_SectionsHome8Section7 = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsHome8Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome8Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome8Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome8Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome8Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome8Section6, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome8Section7, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-8/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DhusahWP.mjs.map
