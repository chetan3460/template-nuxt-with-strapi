import { _ as __nuxt_component_0$2 } from './nuxt-link-BFJLsJpZ.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createTextVNode, createVNode, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead, _ as _export_sfc } from './server.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Thumbs } from 'swiper/modules';
import { _ as _imports_5$1, a as _imports_6$2 } from './virtual_public-dmXcmHGb.mjs';
import { _ as _imports_1$2, a as _imports_2$2 } from './virtual_public-BnXtLk0F.mjs';
import { c as _imports_5, d as _imports_6, _ as _imports_0$1$1, a as _imports_1$1$1, b as _imports_2$1$1, e as _imports_0$4, f as _imports_1$3, g as _imports_2$3 } from './virtual_public-Bn3-DqT8.mjs';
import { _ as _imports_3$3 } from './virtual_public-DFfbIHzD.mjs';
import { a as _imports_6$1, _ as _imports_7 } from './virtual_public-DK7fe_BP.mjs';
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

const _imports_0$3 = publicAssetsURL("/assets/images/icons/icon-home-gray.svg");
const _imports_1$1 = publicAssetsURL("/assets/images/icons/icon-angle-right-gray.svg");
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-gray-100" }, _attrs))}><div class="px-5 py-4 mx-auto max-w-[1320px]"><ul class="flex items-center flex-wrap gap-[8px]"><li class="flex items-center gap-[5px]"><img${ssrRenderAttr("src", _imports_0$3)} alt="home icon">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-md text-gray-500 transition-colors duration-200 hover:text-gray-900",
    to: "/index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home`);
      } else {
        return [
          createTextVNode(" Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex items-center gap-[8px]"><img${ssrRenderAttr("src", _imports_1$1)} alt="home icon">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-md text-gray-500 transition-colors duration-200 hover:text-gray-900",
    to: "/index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Shop`);
      } else {
        return [
          createTextVNode(" Shop")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex items-center gap-[8px]"><img${ssrRenderAttr("src", _imports_1$1)} alt="home icon">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-md text-gray-500 transition-colors duration-200 hover:text-gray-900",
    to: "/index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Headphone`);
      } else {
        return [
          createTextVNode(" Headphone")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex items-center gap-[8px]"><img${ssrRenderAttr("src", _imports_1$1)} alt="home icon">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-md text-gray-500 transition-colors duration-200 hover:text-gray-900",
    to: "/index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Sony Digital Surround Wireless Headphones`);
      } else {
        return [
          createTextVNode(" Sony Digital Surround Wireless Headphones")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/SingleProduct/Section1.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$2 = publicAssetsURL("/assets/images/icons/icon-zoom-in.svg");
const _imports_1 = publicAssetsURL("/assets/images/product-1.png");
const _imports_2$1 = publicAssetsURL("/assets/images/product-2.png");
const _imports_3$2 = publicAssetsURL("/assets/images/product-3.png");
const _imports_4$2 = publicAssetsURL("/assets/images/product-4.png");
const _sfc_main$6 = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper;
    };
    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [Navigation, Thumbs]
    };
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<!--[--><div class="lg:w-[65%] xl:w-[75%] lg:ml-6 lg:mr-1 product-image-left">`);
  _push(ssrRenderComponent(_component_swiper, {
    spaceBetween: 10,
    navigation: {
      nextEl: ".product-single-next",
      prevEl: ".product-single-prev"
    },
    thumbs: { swiper: $setup.thumbsSwiper && !$setup.thumbsSwiper.destroyed ? $setup.thumbsSwiper : null },
    modules: $setup.modules,
    class: "product-main mb-[30px]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-1.png)]"${_scopeId2}><img class="absolute top-0 right-0"${ssrRenderAttr("src", _imports_0$2)} alt="zoom in icon"${_scopeId2}><img class="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0"${ssrRenderAttr("src", _imports_1)} alt="image of a product"${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-1.png)]" }, [
                  createVNode("img", {
                    class: "absolute top-0 right-0",
                    src: _imports_0$2,
                    alt: "zoom in icon"
                  }),
                  createVNode("img", {
                    class: "h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0",
                    src: _imports_1,
                    alt: "image of a product"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-2.png)]"${_scopeId2}><img class="absolute top-0 right-0"${ssrRenderAttr("src", _imports_0$2)} alt="zoom in icon"${_scopeId2}><img class="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0"${ssrRenderAttr("src", _imports_2$1)} alt="image of a product"${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-2.png)]" }, [
                  createVNode("img", {
                    class: "absolute top-0 right-0",
                    src: _imports_0$2,
                    alt: "zoom in icon"
                  }),
                  createVNode("img", {
                    class: "h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0",
                    src: _imports_2$1,
                    alt: "image of a product"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-3.png)]"${_scopeId2}><img class="absolute top-0 right-0"${ssrRenderAttr("src", _imports_0$2)} alt="zoom in icon"${_scopeId2}><img class="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0"${ssrRenderAttr("src", _imports_3$2)} alt="image of a product"${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-3.png)]" }, [
                  createVNode("img", {
                    class: "absolute top-0 right-0",
                    src: _imports_0$2,
                    alt: "zoom in icon"
                  }),
                  createVNode("img", {
                    class: "h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0",
                    src: _imports_3$2,
                    alt: "image of a product"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-4.png)]"${_scopeId2}><img class="absolute top-0 right-0"${ssrRenderAttr("src", _imports_0$2)} alt="zoom in icon"${_scopeId2}><img class="h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0"${ssrRenderAttr("src", _imports_4$2)} alt="image of a product"${_scopeId2}></div>`);
            } else {
              return [
                createVNode("div", { class: "relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-4.png)]" }, [
                  createVNode("img", {
                    class: "absolute top-0 right-0",
                    src: _imports_0$2,
                    alt: "zoom in icon"
                  }),
                  createVNode("img", {
                    class: "h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0",
                    src: _imports_4$2,
                    alt: "image of a product"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]" }, {
            default: withCtx(() => [
              createVNode("div", { class: "relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-1.png)]" }, [
                createVNode("img", {
                  class: "absolute top-0 right-0",
                  src: _imports_0$2,
                  alt: "zoom in icon"
                }),
                createVNode("img", {
                  class: "h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0",
                  src: _imports_1,
                  alt: "image of a product"
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]" }, {
            default: withCtx(() => [
              createVNode("div", { class: "relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-2.png)]" }, [
                createVNode("img", {
                  class: "absolute top-0 right-0",
                  src: _imports_0$2,
                  alt: "zoom in icon"
                }),
                createVNode("img", {
                  class: "h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0",
                  src: _imports_2$1,
                  alt: "image of a product"
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]" }, {
            default: withCtx(() => [
              createVNode("div", { class: "relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-3.png)]" }, [
                createVNode("img", {
                  class: "absolute top-0 right-0",
                  src: _imports_0$2,
                  alt: "zoom in icon"
                }),
                createVNode("img", {
                  class: "h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0",
                  src: _imports_3$2,
                  alt: "image of a product"
                })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "border border-gray-200 rounded-2xl relative p-[30px] mr-[1px]" }, {
            default: withCtx(() => [
              createVNode("div", { class: "relative image-zoom bg-[length:840px] bg-[url(./assets/images/product-4.png)]" }, [
                createVNode("img", {
                  class: "absolute top-0 right-0",
                  src: _imports_0$2,
                  alt: "zoom in icon"
                }),
                createVNode("img", {
                  class: "h-full w-full object-cover transition-all duration-300 cursor-crosshair hover:opacity-0",
                  src: _imports_4$2,
                  alt: "image of a product"
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="z-1 order-first overflow-y-scroll scrollbar-hide lg:w-[35%] xl:w-[25%] max-h-[430px]">`);
  _push(ssrRenderComponent(_component_swiper, {
    onSwiper: $setup.setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 3,
    modules: $setup.modules,
    direction: "vertical"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="w-full object-cover min-w-[91px]"${ssrRenderAttr("src", _imports_1)} alt="image of a product"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-full object-cover min-w-[91px]",
                  src: _imports_1,
                  alt: "image of a product"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="w-full object-cover min-w-[91px]"${ssrRenderAttr("src", _imports_2$1)} alt="image of a product"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-full object-cover min-w-[91px]",
                  src: _imports_2$1,
                  alt: "image of a product"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="w-full object-cover min-w-[91px]"${ssrRenderAttr("src", _imports_3$2)} alt="image of a product"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-full object-cover min-w-[91px]",
                  src: _imports_3$2,
                  alt: "image of a product"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="w-full object-cover min-w-[91px]"${ssrRenderAttr("src", _imports_4$2)} alt="image of a product"${_scopeId2}>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-full object-cover min-w-[91px]",
                  src: _imports_4$2,
                  alt: "image of a product"
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "w-full object-cover min-w-[91px]",
                src: _imports_1,
                alt: "image of a product"
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "w-full object-cover min-w-[91px]",
                src: _imports_2$1,
                alt: "image of a product"
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "w-full object-cover min-w-[91px]",
                src: _imports_3$2,
                alt: "image of a product"
              })
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "product-img-thumb border border-gray-200 rounded-2xl p-[10px] mx-[10px]" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "w-full object-cover min-w-[91px]",
                src: _imports_4$2,
                alt: "image of a product"
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="z-2 grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-single-prev absolute left-0 translate-y-[-75px] lg:bottom-0 lg:translate-y-0 lg:translate-x-[75%] lg:top-[52%] xl:translate-x-[45%] xl:top-[66%] lg:-rotate-90"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_5$1)} alt="control icon button"></div><div class="z-2 grid place-items-center bg-gray-200 rounded-full cursor-pointer group transition-colors duration-200 w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] hover:bg-green-900 product-single-next absolute right-0 translate-y-[-75px] lg:bottom-0 lg:translate-y-0 lg:left-[50px] lg:translate-x-[75%] lg:top-[52%] xl:left-[60px] xl:translate-x-[45%] xl:top-[66%] lg:-rotate-90"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_6$2)} alt="control icon button"></div><!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/ProductThumbSlider.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$1 = publicAssetsURL("/assets/images/icons/icon-colon.svg");
const msInSecond = 1e3;
const _sfc_main$5 = {
  __name: "Countdown",
  __ssrInlineRender: true,
  props: ["countDay"],
  setup(__props) {
    const msInMinute = 60 * msInSecond;
    const msInHour = 60 * msInMinute;
    const msInDay = 24 * msInHour;
    const getPartsOfTimeDuration = (duration) => {
      const days = Math.floor(duration / msInDay);
      const hours = Math.floor(duration % msInDay / msInHour);
      const minutes = Math.floor(duration % msInHour / msInMinute);
      const seconds = Math.floor(duration % msInMinute / msInSecond);
      return { days, hours, minutes, seconds };
    };
    const currentTime = /* @__PURE__ */ new Date();
    currentTime.setDate(currentTime.getDate() + __props.countDay);
    const targetDate = ref(currentTime);
    const timeRemaining = ref(targetDate.value.getTime() - Date.now());
    const timeParts = ref(getPartsOfTimeDuration(timeRemaining.value));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center gap-[25px]" }, _attrs))} data-v-513103c7><div data-v-513103c7><div class="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]" data-v-513103c7><p class="text-heading-5 font-bold font-chivo text-green-1000" data-v-513103c7>${ssrInterpolate(timeParts.value.days)}</p><img class="absolute right-[-28%]"${ssrRenderAttr("src", _imports_0$1)} alt="colon icon" data-v-513103c7></div><p class="text-tiny font-semibold text-gray-500 text-center" data-v-513103c7>Days</p></div><div data-v-513103c7><div class="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]" data-v-513103c7><p class="text-heading-5 font-bold font-chivo text-green-1000" data-v-513103c7>${ssrInterpolate(timeParts.value.hours)}</p><img class="absolute right-[-28%]"${ssrRenderAttr("src", _imports_0$1)} alt="colon icon" data-v-513103c7></div><p class="text-tiny font-semibold text-gray-500 text-center" data-v-513103c7>Hours</p></div><div data-v-513103c7><div class="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]" data-v-513103c7><p class="text-heading-5 font-bold font-chivo text-green-1000" data-v-513103c7>${ssrInterpolate(timeParts.value.minutes)}</p><img class="absolute right-[-28%]"${ssrRenderAttr("src", _imports_0$1)} alt="colon icon" data-v-513103c7></div><p class="text-tiny font-semibold text-gray-500 text-center" data-v-513103c7>Minutes</p></div><div data-v-513103c7><div class="border border-gray-200 rounded grid place-items-center relative w-[57px] h-[64px] mb-[2px]" data-v-513103c7><p class="text-heading-5 font-bold font-chivo text-green-1000" data-v-513103c7>${ssrInterpolate(timeParts.value.seconds)}</p></div><p class="text-tiny font-semibold text-gray-500 text-center" data-v-513103c7>Seconds</p></div></div>`);
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Countdown.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-513103c7"]]);
const _imports_2 = publicAssetsURL("/assets/images/icons/icon-caret-up-green.svg");
const _imports_3$1 = publicAssetsURL("/assets/images/icons/icon-caret-down-green.svg");
const _imports_4$1 = publicAssetsURL("/assets/images/icons/icon-cart.svg");
const _sfc_main$4 = {
  __name: "Section2",
  __ssrInlineRender: true,
  setup(__props) {
    const qtyVal = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ElementsProductThumbSlider = __nuxt_component_0;
      const _component_ElementsCountdown = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:grid lg:grid-cols-2 gap-[35px] xl:gap-0" }, _attrs))}><div class="relative lg:flex">`);
      _push(ssrRenderComponent(_component_ElementsProductThumbSlider, null, null, _parent));
      _push(`</div><div class="col-start-2 mt-[30px] lg:ml-6"><div class="flex items-center justify-between mb-[22px]"><p class="text-sm text-gray-500 font-bold">Audio &amp; Speakers</p><div class="flex items-center gap-[10px]"><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[20%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div><p class="text-tiny font-semibold text-gray-400">(138 rates)</p></div></div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-8">Sony Digital Surround Wireless Headphones Black Bundle with Deco Gear 6FT Universal 4K</h3><div class="flex items-baseline gap-4 mb-8"><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-green-1000">$318.00</h2><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 text-gray-500 line-through">$420.00</h3><p class="text-text text-gray-500">(In stock)</p></div><p class="text-text text-gray-500 mb-8">The WH-L600 delivers cinematic surround sound to immerse you in whatever you&#39;re watching or listening to. Sound modes enhance movies, dialogue, games, and sport, while a 98.43-ft wireless listening range gives you the freedom to move around.</p><div class="flex flex-col gap-5 mb-[30px] md:flex-row md:gap-[37px]"><div class="flex-1"><div class="font-chivo text-heading-6 font-bold text-green-1000 mb-[10px]"><span class="block">Hurry up!</span><span class="block">Sales ends soon!</span></div><div class="w-full bg-gray-200 h-[11px] rounded-[10px] mb-[6px]"><div class="bg-danger h-[11px] rounded-[10px] w-[60%]"></div></div><p class="text-gray-500 font-bold text-sm">63/158 sold</p></div>`);
      _push(ssrRenderComponent(_component_ElementsCountdown, { countDay: 2 }, null, _parent));
      _push(`</div><div class="w-full bg-gray-200 h-[1px] mb-[46px]"></div><div class="flex flex-col gap-[10px] mb-[46px] md:flex-row"><div class="detail-qty border border-green-100 rounded-lg flex items-center justify-between w-[118px]"><input class="qty-val text-green-1000 px-4 text-center font-bold font-chivo text-[20px] max-w-[80px]"${ssrRenderAttr("value", qtyVal.value)}><div class="flex flex-col"><span class="qty-down cursor-pointer"><i><img${ssrRenderAttr("src", _imports_2)} alt="caret icon"></i></span><span class="qty-up cursor-pointer"><i><img${ssrRenderAttr("src", _imports_3$1)} alt="caret icon"></i></span></div></div><div class="flex items-center gap-[10px]"><button class="bg-green-100 flex items-center rounded transition-colors duration-300 border border-green-100 py-[15px] px-[22px] gap-[13px] hover:bg-white"><img${ssrRenderAttr("src", _imports_4$1)} alt="cart icon"><p class="text-green-1000 font-chivo font-bold text-[14px] md:text-[18px] md:leading-[20px]">Add To Cart</p></button><div class="border border-green-100 grid place-items-center cursor-pointer transition-all duration-300 w-[50px] h-[50px] rounded-[5px] hover:bg-green-100 hover:translate-y-[-5px]"><img${ssrRenderAttr("src", _imports_5)} alt="icon"></div><div class="border border-green-100 grid place-items-center cursor-pointer transition-all duration-300 w-[50px] h-[50px] rounded-[5px] hover:bg-green-100 hover:translate-y-[-5px]"><img${ssrRenderAttr("src", _imports_6)} alt="icon"></div></div></div><div class="flex items-center gap-[46px]"><p class="text-text"><span>Vendor:</span><span class="text-gray-500">\xA0AgonMart</span></p><p class="text-text"><span>SKU:</span><span class="text-gray-500">\xA0FWM15VKT</span></p></div></div></div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/SingleProduct/Section2.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/assets/images/noodles-logo.svg");
const _imports_3 = publicAssetsURL("/assets/images/icons/icon-location-black.svg");
const _imports_4 = publicAssetsURL("/assets/images/icons/icon-contact-black.svg");
const _sfc_main$3 = {
  data() {
    return {
      selectedTab: 0
    };
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[104px] xl:max-w-[996px] xl:mx-auto" }, _attrs))}><div class="flex flex-wrap mb-14 gap-[15px] md:gap-[25px]"><div class="${ssrRenderClass([{ active: $data.selectedTab === 0 }, "cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px]"])}">Description</div><div class="${ssrRenderClass([{ active: $data.selectedTab === 1 }, "cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px]"])}">Additional info</div><div class="${ssrRenderClass([{ active: $data.selectedTab === 2 }, "cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px]"])}">Vendors</div><div class="${ssrRenderClass([{ active: $data.selectedTab === 3 }, "cursor-pointer inline-block p-3 border border-gray-200 text-gray-500 font-bold transition-all duration-200 text-sm product-tab md:py-[20px] md:px-[35px] rounded-[50px] md:text-[18px] md:leading-[20px] hover:text-green-1000 hover:border-green-100 hover:translate-y-[-2px]"])}">Reviews (3)</div></div><div class="product-tag-content text-gray-500 active" style="${ssrRenderStyle($data.selectedTab === 0 ? null : { display: "none" })}"><p class="text-text mb-9">Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.<br><br><span>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</span></p><p class="text-text font-bold mb-7">E9SNWHL600B</p><ul class="mb-9 !list-disc ml-[19px]"><li class="mb-2">WH-L600 Digital Surround Wireless Headphones (Black)</li><li class="mb-2">Charging Stand</li><li class="mb-2">AC Adapter</li><li class="mb-2">Optical Digital Audio Cable</li><li class="mb-2">USA Warranty</li></ul><p class="text-text font-bold mb-7">Bundle Includes:</p><ul class="mb-9 !list-disc ml-[19px]"><li class="mb-2">Sony Digital Surround Wireless Headphones Black</li><li class="mb-2">Deco Gear 6FT Universal 4K HDMI 2.0 Cable with 28AWG Pure Copper Conductors</li><li class="mb-2">1 Year Extended Warranty for Products Valued up to $500</li></ul></div><div class="product-tag-content text-gray-500 active" style="${ssrRenderStyle($data.selectedTab === 1 ? null : { display: "none" })}"><table class="border-collapse w-full"><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Stand Up</th><td class="px-5 border border-gray-200 text-left py-2.5">35\u2033L x 24\u2033W x 37-45\u2033H(front to back wheel)</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Folded (w/o wheels)</th><td class="px-5 border border-gray-200 text-left py-2.5">32.5\u2033L x 18.5\u2033W x 16.5\u2033H</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Folded (w/ wheels)</th><td class="px-5 border border-gray-200 text-left py-2.5">32.5\u2033L x 24\u2033W x 18.5\u2033H</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Door Pass Through</th><td class="px-5 border border-gray-200 text-left py-2.5">24</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Frame</th><td class="px-5 border border-gray-200 text-left py-2.5">Aluminum</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Weight (w/o wheels)</th><td class="px-5 border border-gray-200 text-left py-2.5">20 LBS</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Weight Capacity</th><td class="px-5 border border-gray-200 text-left py-2.5">60 LBS</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Width</th><td class="px-5 border border-gray-200 text-left py-2.5">24\u2033</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Handle height (ground to handle)</th><td class="px-5 border border-gray-200 text-left py-2.5">37-45\u2033</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Wheels</th><td class="px-5 border border-gray-200 text-left py-2.5">12\u2033 air / wide track slick tread</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Seat back height</th><td class="px-5 border border-gray-200 text-left py-2.5">21.5\u2033</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Head room (inside canopy)</th><td class="px-5 border border-gray-200 text-left py-2.5">25\u2033</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Color</th><td class="px-5 border border-gray-200 text-left py-2.5">Black, Blue, Red, White</td></tr><tr><th class="px-5 border border-gray-200 text-left font-normal py-2.5">Size</th><td class="px-5 border border-gray-200 text-left py-2.5">M, S</td></tr></table></div><div class="product-tag-content text-gray-500 active" style="${ssrRenderStyle($data.selectedTab === 2 ? null : { display: "none" })}"><div class="flex gap-x-4 mb-[30px]"><img${ssrRenderAttr("src", _imports_0)} alt="noodles logo"><div class="flex flex-col gap-y-1"><h6>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-green-900 font-bold",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Noodles Co.`);
      } else {
        return [
          createTextVNode("Noodles Co.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</h6><div class="flex items-center gap-x-1"><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[90%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div><span>(32 reviews)</span></div></div></div><ul class="mb-[50px]"><li class="flex items-center"><img class="mr-2"${ssrRenderAttr("src", _imports_3)} alt="icon location"><strong class="text-black mr-1">Address:</strong><span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</span></li><li class="flex items-center"><img class="mr-2"${ssrRenderAttr("src", _imports_4)} alt="icon contact"><strong class="text-black mr-1">Contact Seller:</strong><span>(+91) - 540-025-553</span></li></ul><div class="flex gap-x-7 mb-[55px]"><div class="flex flex-col gap-y-1"><p class="text-[13px]">Rating</p><h4 class="text-black font-bold text-[28px] leading-[34px]">92%</h4></div><div class="flex flex-col gap-y-1"><p class="text-[13px]">Ship on time</p><h4 class="text-black font-bold text-[28px] leading-[34px]">100%</h4></div><div class="flex flex-col gap-y-1"><p class="text-[13px]">Chat response</p><h4 class="text-black font-bold text-[28px] leading-[34px]">89%</h4></div></div><p>Noodles &amp; Company is an American fast-casual restaurant that offers international and American noodle dishes and pasta in addition to soups and salads. Noodles &amp; Company was founded in 1995 by Aaron Kennedy and is headquartered in Broomfield, Colorado. The company went public in 2013 and recorded a $457 million revenue in 2017.In late 2018, there were 460 Noodles &amp; Company locations across 29 states and Washington, D.C.</p></div><div class="product-tag-content text-gray-500 active" style="${ssrRenderStyle($data.selectedTab === 3 ? null : { display: "none" })}"><div class="flex justify-between flex-col lg:flex-row gap-[30px]"><div class="flex flex-col gap-y-[30px] lg:w-[60%]"><h4 class="font-bold text-lg">Customer questions &amp; answers</h4><article class="flex gap-x-4 p-5 border border-gray-200 rounded-2xl group"><div class="flex flex-col gap-y-2 items-center flex-1"><img class="max-w-[50px] lg:max-w-[80px]"${ssrRenderAttr("src", _imports_3$3)} alt="customer">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-green-900 font-bold text-[13px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Sienna`);
      } else {
        return [
          createTextVNode("Sienna")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div><div class="flex justify-between mb-3"><span class="font-chivo flex-1 text-[13px]">December 4, 2022 at 3:12 pm</span><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[100%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div></div><span class="text-base leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</span><span class="text-base leading-7 ml-1 inline-block transition duration-300 opacity-0 cursor-pointer text-[#06d6a0] hover:text-green-1000 group-hover:opacity-100">Reply</span></div></article><article class="flex gap-x-4 p-5 border border-gray-200 rounded-2xl group ml-[30px]"><div class="flex flex-col gap-y-2 items-center flex-1"><img class="max-w-[50px] lg:max-w-[80px]"${ssrRenderAttr("src", _imports_6$1)} alt="customer">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-green-900 font-bold text-[13px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Brenna`);
      } else {
        return [
          createTextVNode("Brenna")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div><div class="flex justify-between mb-3"><span class="font-chivo flex-1 text-[13px]">December 4, 2022 at 3:12 pm</span><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[90%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div></div><span class="text-base leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</span><span class="text-base leading-7 ml-1 inline-block transition duration-300 opacity-0 cursor-pointer text-[#06d6a0] hover:text-green-1000 group-hover:opacity-100">Reply</span></div></article><article class="flex gap-x-4 p-5 border border-gray-200 rounded-2xl group"><div class="flex flex-col gap-y-2 items-center flex-1"><img class="max-w-[50px] lg:max-w-[80px]"${ssrRenderAttr("src", _imports_7)} alt="customer">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-green-900 font-bold text-[13px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Gemma`);
      } else {
        return [
          createTextVNode("Gemma")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div><div class="flex justify-between mb-3"><span class="font-chivo flex-1 text-[13px]">December 4, 2022 at 3:12 pm</span><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[80%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div></div><span class="text-base leading-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, suscipit exercitationem accusantium obcaecati quos voluptate nesciunt facilis itaque modi commodi dignissimos sequi repudiandae minus ab deleniti totam officia id incidunt?</span><span class="text-base leading-7 ml-1 inline-block transition duration-300 opacity-0 cursor-pointer text-[#06d6a0] hover:text-green-1000 group-hover:opacity-100">Reply</span></div></article></div><div class="flex flex-col gap-y-[30px] lg:w-[36%]"><h4 class="font-bold text-lg">Customer reviews</h4><div class="flex items-center gap-x-3"><div class="flex items-center relative z-10 overflow-hidden gap-[3px] max-w-[75px]"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_1$2)} alt="star icon"><div class="flex items-center absolute overflow-hidden gap-[3px] w-[90%]"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"><img${ssrRenderAttr("src", _imports_2$2)} alt="star icon"></div></div><span class="text-black font-bold">4.8 out of 5</span></div><ul class="flex flex-col gap-y-[14px]"><li class="flex overflow-hidden bg-gray-100 text-[13px]"><span class="bg-white pr-[10px]">5 star</span><div class="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[50%]" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div></li><li class="flex overflow-hidden bg-gray-100 text-[13px]"><span class="bg-white pr-[10px]">4 star</span><div class="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[25%]" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div></li><li class="flex overflow-hidden bg-gray-100 text-[13px]"><span class="bg-white pr-[10px]">3 star</span><div class="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[45%]" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div></li><li class="flex overflow-hidden bg-gray-100 text-[13px]"><span class="bg-white pr-[10px]">2 star</span><div class="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[65%]" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div></li><li class="flex overflow-hidden bg-gray-100 text-[13px]"><span class="bg-white pr-[10px]">1 star</span><div class="flex flex-col justify-center text-white overflow-hidden text-center bg-green-900 whitespace-nowrap w-[85%]" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div></li></ul>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-[13px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`How are ratings calculated?`);
      } else {
        return [
          createTextVNode("How are ratings calculated?")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/SingleProduct/Section3.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[100px]" }, _attrs))}><div class="mb-[35px] md:mb-[64px]"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">You may also like</h2><p class="text-quote md:text-lead-lg text-gray-600">Take it to your cart</p></div><div class="grid grid-cols-1 items-center gap-[30px] lg:grid-cols-2 xl:grid-cols-3"><div class="rounded-2xl py-[18px] px-[13px] border border-gray-200 gap-2 w-full product-shadow transition-all duration-300 hover:translate-y-[-3px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center",
    to: "/single-product"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="h-full w-full object-cover max-w-[170px]"${ssrRenderAttr("src", _imports_0$1$1)} alt="product image"${_scopeId}><div class="font-chivo"${_scopeId}><p class="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>Bass ultra x-203. Head phone</p><div class="flex items-center gap-3"${_scopeId}><span class="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span><span class="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span></div></div>`);
      } else {
        return [
          createVNode("img", {
            class: "h-full w-full object-cover max-w-[170px]",
            src: _imports_0$1$1,
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
        _push2(`<img class="h-full w-full object-cover max-w-[170px]"${ssrRenderAttr("src", _imports_0$1$1)} alt="product image"${_scopeId}><div class="font-chivo"${_scopeId}><p class="font-bold mb-3 text-[18px] leading-[21px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>Bass ultra x-203. Head phone</p><div class="flex items-center gap-3"${_scopeId}><span class="text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span><span class="text-gray-500 strike line-through text-[20px] leading-[24px] lg:text-[26px] lg:leading-[32px]"${_scopeId}>$29.8</span></div></div>`);
      } else {
        return [
          createVNode("img", {
            class: "h-full w-full object-cover max-w-[170px]",
            src: _imports_0$1$1,
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/SingleProduct/Section4.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[111px]" }, _attrs))}><div class="rounded-2xl p-[30px] md:py-[41px] md:px-[87px] bg-green-900 flex relative"><div class="lg:w-[45%]"><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold text-white mb-[6px]">You can order on App and Play store</h1><p class="text-gray-200 text-md md:text-[18px] mb-[60px]">Bring the world of shopping to your phone</p><div class="flex items-center gap-5 mb-[22px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$4)} alt="app store link button"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$4,
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
  _push(`</div><div class="flex items-center gap-5"><div class="flex items-center gap-[7px]"><div class="bg-green-500 w-[14px] h-[14px] rounded-[2px]"></div><p class="text-sm text-[#B4B4B4]">Order direct from the app</p></div><div class="flex items-center gap-[7px]"><div class="bg-green-500 w-[14px] h-[14px] rounded-[2px]"></div><p class="text-sm text-[#B4B4B4]">Save and searches</p></div></div></div><img class="absolute right-0 hidden w-[54%] lg:block lg:top-1/4 xl:top-[40px]"${ssrRenderAttr("src", _imports_2$3)} alt=""></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/SingleProduct/Section5.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative single-product-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsSingleProductSection1 = __nuxt_component_0$1;
      const _component_SectionsSingleProductSection2 = _sfc_main$4;
      const _component_SectionsSingleProductSection3 = __nuxt_component_2;
      const _component_SectionsSingleProductSection4 = __nuxt_component_3;
      const _component_SectionsSingleProductSection5 = __nuxt_component_4;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsSingleProductSection1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsSingleProductSection2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsSingleProductSection3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsSingleProductSection4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsSingleProductSection5, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/single-product/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BNhglFhy.mjs.map
