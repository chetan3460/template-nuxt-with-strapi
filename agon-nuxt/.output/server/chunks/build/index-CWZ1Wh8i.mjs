import { _ as __nuxt_component_0$1 } from './nuxt-link-BFJLsJpZ.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc, a as _imports_0$1 } from './server.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_0$2, a as _imports_1$1$1, b as _imports_2$1, c as _imports_3, d as _imports_4, e as _imports_5, g as _imports_0$3, h as _imports_1$2, i as _imports_2$2, f as _imports_0$1$1 } from './virtual_public-B7jNupp5.mjs';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _imports_1$3, a as _imports_2$3 } from './virtual_public-nUl_eC9X.mjs';
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

const _imports_1$1 = publicAssetsURL("/assets/images/icons/icon-button.svg");
const _imports_2 = publicAssetsURL("/assets/images/hero-services-2.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center z-10 relative lg:mt-[99px]" }, _attrs))}><div class="text-center"><h2 class="font-bold font-chivo mx-auto text-gray-900 mb-5 md:mb-[30px] text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:w-[20ch]">Advanced <span class="text-green-900">analytics</span> to grow your business</h2><p class="text-quote md:text-lead-lg text-gray-500 mx-auto md:w-[47ch] mb-[50px]">Connect your conversations with the tools and services that you use to get the job done. With over 1,500 apps and a robust API</p></div><div class="flex items-center justify-center mb-[87px]"><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Start</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_0$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Start"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
              src: _imports_0$1,
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
  _push(`</div></div><div class="relative mx-auto max-w-[1190px]"><img class="h-full w-full object-cover rounded-2xl"${ssrRenderAttr("src", _imports_2)} alt="Agon"></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services2/Section1.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
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
        _push2(`<img${ssrRenderAttr("src", _imports_1$1$1)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$1$1,
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
        _push2(`<img${ssrRenderAttr("src", _imports_2$1)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$1,
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
        _push2(`<img${ssrRenderAttr("src", _imports_3)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3,
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
        _push2(`<img${ssrRenderAttr("src", _imports_4)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4,
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
        _push2(`<img${ssrRenderAttr("src", _imports_1$1$1)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$1$1,
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
        _push2(`<img${ssrRenderAttr("src", _imports_2$1)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$1,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="w-full bg-gray-300 h-[1px] mb-[50px] md:mb-[90px] lg:mb-[150px]"></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services2/Section2.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0 = publicAssetsURL("/assets/images/thumbnail-8.png");
const _imports_1 = publicAssetsURL("/assets/images/thumbnail-9.png");
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[133px]" }, _attrs))}><div class="text-center mb-[30px] md:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Discover powerful features to boost your productivity</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum \u2014 semper quis lectus nulla.</p></div><div class="mx-auto lg:flex gap-[30px] max-w-[1190px]"><div class="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">Cross-Platform</h3><p class="text-md text-gray-600 mb-[22px] lg:mx-16">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p><img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"${ssrRenderAttr("src", _imports_0)} alt="Feature image"></div><div class="text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-6"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">Extremely Flexible</h3><p class="text-md text-gray-600 mb-[22px] lg:mx-16">Your site is not complete with only landings. Get essential inner pages using our ready demos.</p><img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"${ssrRenderAttr("src", _imports_1)} alt="Feature image"></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services2/Section3.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[260px]" }, _attrs))}><div class="bg-bg-2 relative px-[12px] py-[70px] rounded-[50px]"><div class="text-center relative mb-[70px] md:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">What We Offer</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[43ch]">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p></div>`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 5,
    "space-between": 0,
    loop: true,
    autoplay: {
      delay: 8e3,
      disableOnInteraction: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1
        // spaceBetween: 30,
      },
      575: {
        slidesPerView: 2
        // spaceBetween: 30,
      },
      767: {
        slidesPerView: 2
        // spaceBetween: 30,
      },
      991: {
        slidesPerView: 2
        // spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3
        // spaceBetween: 30,
      },
      1350: {
        slidesPerView: 3
        // spaceBetween: 30,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".h1n",
      prevEl: ".h1p"
    },
    modules: $setup.modules,
    class: "offer-list dots"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_0$3)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Market research</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_0$3,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_1$2)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Strategic Consulting</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_1$2,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_2$2)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Cognitive Solution</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_2$2,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_0$3)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Market research</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_0$3,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_1$2)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Strategic Consulting</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_1$2,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_2$2)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Cognitive Solution</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_2$2,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_0$3)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Market research</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_0$3,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_1$2)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Strategic Consulting</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_1$2,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_2$2)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Cognitive Solution</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_2$2,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_0$3,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_1$2,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_2$2,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_0$3,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_1$2,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_2$2,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_0$3,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_1$2,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_2$2,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services2/Section4.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "gap-6 px-5 lg:flex xl:gap-[50px] mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="flex-1 mb-[40px]"><div class="mb-[22px]"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Frequently asked questions</h2><p class="text-quote md:text-lead-lg text-gray-600"></p></div><p class="text-text text-gray-600 mb-[40px]">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p><div class="flex flex-col lg:max-w-[303px] md:gap-[35px] lg:mb-[48px]"><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$1$1)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Boost your sale</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$1$1)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Introducing New Features</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div></div><div class="flex items-center"><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Contact Us</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_0$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Contact Us"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
              src: _imports_0$1,
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
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-transparent text-white hover:bg-gray-100 text-gray-900 w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Support Center</span>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Support Center")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div></div><div class="flex-[1.5]"><div class="relative accordion-item mb-5"><details><summary class="flex justify-between py-5 items-center gap-5 px-[30px]"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5">Where is my order? Quisque molestie</h4></summary><p class="text-text content font-chivo mt-[30px] ml-[30px]">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</p></details></div><div class="relative accordion-item mb-5"><details><summary class="flex justify-between py-5 items-center gap-5 px-[30px]"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5">How can I return an item purchased online?</h4></summary><p class="text-text content font-chivo mt-[30px] ml-[30px]">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</p></details></div><div class="relative accordion-item mb-5"><details><summary class="flex justify-between py-5 items-center gap-5 px-[30px]"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5">Can I cancel or change my order?</h4></summary><p class="text-text content font-chivo mt-[30px] ml-[30px]">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</p></details></div><div class="relative accordion-item mb-5"><details><summary class="flex justify-between py-5 items-center gap-5 px-[30px]"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5">I have promotional or discount code?</h4></summary><p class="text-text content font-chivo mt-[30px] ml-[30px]">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</p></details></div><div class="relative accordion-item mb-5"><details><summary class="flex justify-between py-5 items-center gap-5 px-[30px]"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5">What are the delivery types you use?</h4></summary><p class="text-text content font-chivo mt-[30px] ml-[30px]">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</p></details></div><div class="relative accordion-item mb-5"><details><summary class="flex justify-between py-5 items-center gap-5 px-[30px]"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5">How can I pay for my purchases?</h4></summary><p class="text-text content font-chivo mt-[30px] ml-[30px]">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</p></details></div><div class="relative accordion-item mb-5"><details><summary class="flex justify-between py-5 items-center gap-5 px-[30px]"><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5">Can I cancel my order?</h4></summary><p class="text-text content font-chivo mt-[30px] ml-[30px]">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</p></details></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services2/Section5.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
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
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_0$1)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$3)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2$3)} alt="Agon"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Services2/Section6.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative services-2-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsServices2Section1 = __nuxt_component_0;
      const _component_SectionsServices2Section2 = __nuxt_component_1;
      const _component_SectionsServices2Section3 = __nuxt_component_2;
      const _component_SectionsServices2Section4 = __nuxt_component_3;
      const _component_SectionsServices2Section5 = __nuxt_component_4;
      const _component_SectionsServices2Section6 = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsServices2Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices2Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices2Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices2Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices2Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices2Section6, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services-2/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CWZ1Wh8i.mjs.map
