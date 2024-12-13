import { useSSRContext, mergeProps, resolveComponent, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc, a as _imports_1$1 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BFJLsJpZ.mjs';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-BzD1hskI.mjs';
import { _ as _imports_4 } from './virtual_public-BUWQ-iTC.mjs';
import { _ as _imports_3 } from './virtual_public-DFfbIHzD.mjs';
import { _ as _imports_0$1 } from './virtual_public-9znkGGCe.mjs';
import { _ as _imports_2 } from './virtual_public-Cet6Xz5C.mjs';
import { _ as _imports_0$2 } from './virtual_public-edIg6YOR.mjs';
import { _ as _imports_1$2 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_2$1 } from './virtual_public-BYCduXmb.mjs';
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

const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width" }, _attrs))}><div class="text-center px-5 pt-[74px] pb-[90px]"><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-7">Our Blog</h1><p class="font-bold font-chivo text-[14px] md:text-heading-6 text-gray-600 mx-auto md:max-w-[55ch]">From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises.</p></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Blog1/Section1.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
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
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center z-10 relative gap-[30px] lg:gap-[50px]" }, _attrs))}><div class="place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 blog-prev hidden md:grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_0)} alt="control icon button"></div>`);
  _push(ssrRenderComponent(_component_swiper, {
    "slides-per-view": 1,
    "space-between": 0,
    loop: true,
    autoplay: {
      delay: 8e3,
      disableOnInteraction: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".blog-next",
      prevEl: ".blog-prev"
    },
    modules: $setup.modules,
    class: "blog-post flex-1 w-[80%]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "block self-stretch flex-1 aspect-[580/421]",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl"${ssrRenderAttr("src", _imports_4)} alt="Agon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl",
                        src: _imports_4,
                        alt: "Agon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="flex-1"${_scopeId2}><div class="my-[60px] mr-[50px]"${_scopeId2}><div class="flex items-center mb-3"${_scopeId2}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId2}></div><span class="uppercase text-gray-500"${_scopeId2}>Marketing Event</span></div><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`How To Blow Through Capital At An Incredible Rate`);
                  } else {
                    return [
                      createTextVNode("How To Blow Through Capital At An Incredible Rate")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h2><p class="text-text text-gray-500 mb-[44px]"${_scopeId2}>Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam.</p><div class="flex items-center gap-[15px]"${_scopeId2}><img class="h-full w-full object-cover rounded-full max-w-[55px]"${ssrRenderAttr("src", _imports_3)} alt="avatar"${_scopeId2}><div${_scopeId2}><p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6"${_scopeId2}>Jenny Wilson</p><p class="text-sm font-bold"${_scopeId2}>August 25, 2024</p></div></div></div></div></div><div class="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]"${_scopeId2}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId2}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row" }, [
                  createVNode(_component_NuxtLink, {
                    class: "block self-stretch flex-1 aspect-[580/421]",
                    to: "#"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        class: "h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl",
                        src: _imports_4,
                        alt: "Agon"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("div", { class: "my-[60px] mr-[50px]" }, [
                      createVNode("div", { class: "flex items-center mb-3" }, [
                        createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
                        createVNode("span", { class: "uppercase text-gray-500" }, "Marketing Event")
                      ]),
                      createVNode("h2", { class: "font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5" }, [
                        createVNode(_component_NuxtLink, { to: "#" }, {
                          default: withCtx(() => [
                            createTextVNode("How To Blow Through Capital At An Incredible Rate")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("p", { class: "text-text text-gray-500 mb-[44px]" }, "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam."),
                      createVNode("div", { class: "flex items-center gap-[15px]" }, [
                        createVNode("img", {
                          class: "h-full w-full object-cover rounded-full max-w-[55px]",
                          src: _imports_3,
                          alt: "avatar"
                        }),
                        createVNode("div", null, [
                          createVNode("p", { class: "line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6" }, "Jenny Wilson"),
                          createVNode("p", { class: "text-sm font-bold" }, "August 25, 2024")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]" }, [
                  createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "block self-stretch flex-1 aspect-[580/421]",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl"${ssrRenderAttr("src", _imports_4)} alt="Agon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl",
                        src: _imports_4,
                        alt: "Agon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="flex-1"${_scopeId2}><div class="my-[60px] mr-[50px]"${_scopeId2}><div class="flex items-center mb-3"${_scopeId2}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId2}></div><span class="uppercase text-gray-500"${_scopeId2}>Marketing Event</span></div><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`How To Blow Through Capital At An Incredible Rate`);
                  } else {
                    return [
                      createTextVNode("How To Blow Through Capital At An Incredible Rate")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h2><p class="text-text text-gray-500 mb-[44px]"${_scopeId2}>Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam.</p><div class="flex items-center gap-[15px]"${_scopeId2}><img class="h-full w-full object-cover rounded-full max-w-[55px]"${ssrRenderAttr("src", _imports_3)} alt="avatar"${_scopeId2}><div${_scopeId2}><p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6"${_scopeId2}>Jenny Wilson</p><p class="text-sm font-bold"${_scopeId2}>August 25, 2024</p></div></div></div></div></div><div class="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]"${_scopeId2}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId2}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row" }, [
                  createVNode(_component_NuxtLink, {
                    class: "block self-stretch flex-1 aspect-[580/421]",
                    to: "#"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        class: "h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl",
                        src: _imports_4,
                        alt: "Agon"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("div", { class: "my-[60px] mr-[50px]" }, [
                      createVNode("div", { class: "flex items-center mb-3" }, [
                        createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
                        createVNode("span", { class: "uppercase text-gray-500" }, "Marketing Event")
                      ]),
                      createVNode("h2", { class: "font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5" }, [
                        createVNode(_component_NuxtLink, { to: "#" }, {
                          default: withCtx(() => [
                            createTextVNode("How To Blow Through Capital At An Incredible Rate")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("p", { class: "text-text text-gray-500 mb-[44px]" }, "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam."),
                      createVNode("div", { class: "flex items-center gap-[15px]" }, [
                        createVNode("img", {
                          class: "h-full w-full object-cover rounded-full max-w-[55px]",
                          src: _imports_3,
                          alt: "avatar"
                        }),
                        createVNode("div", null, [
                          createVNode("p", { class: "line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6" }, "Jenny Wilson"),
                          createVNode("p", { class: "text-sm font-bold" }, "August 25, 2024")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]" }, [
                  createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, {
                class: "block self-stretch flex-1 aspect-[580/421]",
                to: "#"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img class="h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl"${ssrRenderAttr("src", _imports_4)} alt="Agon"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        class: "h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl",
                        src: _imports_4,
                        alt: "Agon"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`<div class="flex-1"${_scopeId2}><div class="my-[60px] mr-[50px]"${_scopeId2}><div class="flex items-center mb-3"${_scopeId2}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId2}></div><span class="uppercase text-gray-500"${_scopeId2}>Marketing Event</span></div><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`How To Blow Through Capital At An Incredible Rate`);
                  } else {
                    return [
                      createTextVNode("How To Blow Through Capital At An Incredible Rate")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</h2><p class="text-text text-gray-500 mb-[44px]"${_scopeId2}>Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam.</p><div class="flex items-center gap-[15px]"${_scopeId2}><img class="h-full w-full object-cover rounded-full max-w-[55px]"${ssrRenderAttr("src", _imports_3)} alt="avatar"${_scopeId2}><div${_scopeId2}><p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6"${_scopeId2}>Jenny Wilson</p><p class="text-sm font-bold"${_scopeId2}>August 25, 2024</p></div></div></div></div></div><div class="w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]"${_scopeId2}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId2}></div></div>`);
            } else {
              return [
                createVNode("div", { class: "rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row" }, [
                  createVNode(_component_NuxtLink, {
                    class: "block self-stretch flex-1 aspect-[580/421]",
                    to: "#"
                  }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        class: "h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl",
                        src: _imports_4,
                        alt: "Agon"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("div", { class: "my-[60px] mr-[50px]" }, [
                      createVNode("div", { class: "flex items-center mb-3" }, [
                        createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
                        createVNode("span", { class: "uppercase text-gray-500" }, "Marketing Event")
                      ]),
                      createVNode("h2", { class: "font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5" }, [
                        createVNode(_component_NuxtLink, { to: "#" }, {
                          default: withCtx(() => [
                            createTextVNode("How To Blow Through Capital At An Incredible Rate")
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("p", { class: "text-text text-gray-500 mb-[44px]" }, "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam."),
                      createVNode("div", { class: "flex items-center gap-[15px]" }, [
                        createVNode("img", {
                          class: "h-full w-full object-cover rounded-full max-w-[55px]",
                          src: _imports_3,
                          alt: "avatar"
                        }),
                        createVNode("div", null, [
                          createVNode("p", { class: "line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6" }, "Jenny Wilson"),
                          createVNode("p", { class: "text-sm font-bold" }, "August 25, 2024")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]" }, [
                  createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]" }, {
            default: withCtx(() => [
              createVNode("div", { class: "rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row" }, [
                createVNode(_component_NuxtLink, {
                  class: "block self-stretch flex-1 aspect-[580/421]",
                  to: "#"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl",
                      src: _imports_4,
                      alt: "Agon"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "my-[60px] mr-[50px]" }, [
                    createVNode("div", { class: "flex items-center mb-3" }, [
                      createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
                      createVNode("span", { class: "uppercase text-gray-500" }, "Marketing Event")
                    ]),
                    createVNode("h2", { class: "font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5" }, [
                      createVNode(_component_NuxtLink, { to: "#" }, {
                        default: withCtx(() => [
                          createTextVNode("How To Blow Through Capital At An Incredible Rate")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("p", { class: "text-text text-gray-500 mb-[44px]" }, "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam."),
                    createVNode("div", { class: "flex items-center gap-[15px]" }, [
                      createVNode("img", {
                        class: "h-full w-full object-cover rounded-full max-w-[55px]",
                        src: _imports_3,
                        alt: "avatar"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6" }, "Jenny Wilson"),
                        createVNode("p", { class: "text-sm font-bold" }, "August 25, 2024")
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]" }, {
            default: withCtx(() => [
              createVNode("div", { class: "rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row" }, [
                createVNode(_component_NuxtLink, {
                  class: "block self-stretch flex-1 aspect-[580/421]",
                  to: "#"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl",
                      src: _imports_4,
                      alt: "Agon"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "my-[60px] mr-[50px]" }, [
                    createVNode("div", { class: "flex items-center mb-3" }, [
                      createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
                      createVNode("span", { class: "uppercase text-gray-500" }, "Marketing Event")
                    ]),
                    createVNode("h2", { class: "font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5" }, [
                      createVNode(_component_NuxtLink, { to: "#" }, {
                        default: withCtx(() => [
                          createTextVNode("How To Blow Through Capital At An Incredible Rate")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("p", { class: "text-text text-gray-500 mb-[44px]" }, "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam."),
                    createVNode("div", { class: "flex items-center gap-[15px]" }, [
                      createVNode("img", {
                        class: "h-full w-full object-cover rounded-full max-w-[55px]",
                        src: _imports_3,
                        alt: "avatar"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6" }, "Jenny Wilson"),
                        createVNode("p", { class: "text-sm font-bold" }, "August 25, 2024")
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "relative mx-5 lg:ml-2 lg:mr-[30px] min-h-[550px]" }, {
            default: withCtx(() => [
              createVNode("div", { class: "rounded-2xl p-0 flex items-center bg-white z-10 relative flex-col lg:gap-[50px] lg:flex-row" }, [
                createVNode(_component_NuxtLink, {
                  class: "block self-stretch flex-1 aspect-[580/421]",
                  to: "#"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      class: "h-full w-full object-cover rounded-2xl lg:rounded-tr-none lg:rounded-br-2xl",
                      src: _imports_4,
                      alt: "Agon"
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "flex-1" }, [
                  createVNode("div", { class: "my-[60px] mr-[50px]" }, [
                    createVNode("div", { class: "flex items-center mb-3" }, [
                      createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
                      createVNode("span", { class: "uppercase text-gray-500" }, "Marketing Event")
                    ]),
                    createVNode("h2", { class: "font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-5" }, [
                      createVNode(_component_NuxtLink, { to: "#" }, {
                        default: withCtx(() => [
                          createTextVNode("How To Blow Through Capital At An Incredible Rate")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode("p", { class: "text-text text-gray-500 mb-[44px]" }, "Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra senectus donec nunc.Consequat semper viverra nam libero justo laoreet facilisis magna etiam."),
                    createVNode("div", { class: "flex items-center gap-[15px]" }, [
                      createVNode("img", {
                        class: "h-full w-full object-cover rounded-full max-w-[55px]",
                        src: _imports_3,
                        alt: "avatar"
                      }),
                      createVNode("div", null, [
                        createVNode("p", { class: "line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6" }, "Jenny Wilson"),
                        createVNode("p", { class: "text-sm font-bold" }, "August 25, 2024")
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "w-full h-full z-0 -translate-y-[95%] translate-x-[2%] pt-[45px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 blog-next hidden md:grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_1)} alt="control icon button"></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Blog1/Section2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] z-10 relative lg:mt-[138px]" }, _attrs))}><div class="flex flex-col gap-6 justify-center lg:flex-row lg:items-center mb-[45px] md:mb-[87px]"><div class="text-center"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Latest News</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">From Our blog and Event fanpage</p></div></div><div class="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>company</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>We can blend colors multiple ways, the most common</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$1)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "company")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "We can blend colors multiple ways, the most common"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_0$1,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Marketing Event</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>How To Blow Through Capital At An Incredible Rate</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_4)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "Marketing Event")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "How To Blow Through Capital At An Incredible Rate"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_4,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Customer Services</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>Design Studios That Everyone Should Know About?</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_2)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "Customer Services")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "Design Studios That Everyone Should Know About?"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_2,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>company</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>We can blend colors multiple ways, the most common</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$2)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "company")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "We can blend colors multiple ways, the most common"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_0$2,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Marketing Event</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>How To Blow Through Capital At An Incredible Rate</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$1)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-8 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "Marketing Event")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "How To Blow Through Capital At An Incredible Rate"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_0$1,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-8 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Customer Services</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>Design Studios That Everyone Should Know About?</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_4)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-1 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "Customer Services")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "Design Studios That Everyone Should Know About?"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_4,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-1 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>company</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>We can blend colors multiple ways, the most common</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$2)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "company")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "We can blend colors multiple ways, the most common"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_0$2,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-2 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Marketing Event</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>How To Blow Through Capital At An Incredible Rate</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$1)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-8 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "Marketing Event")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "How To Blow Through Capital At An Incredible Rate"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_0$1,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-8 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Customer Services</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>Design Studios That Everyone Should Know About?</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_4)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-1 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "Customer Services")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "Design Studios That Everyone Should Know About?"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_4,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-1 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit mx-auto",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Load more posts</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Load more posts"),
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
  _push(`</button></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Blog1/Section3.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-bg-6 md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px] mt-[150px]",
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
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_1$1)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$2)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2$1)} alt="Agon"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Blog1/Section4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative blog-1-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsBlog1Section1 = __nuxt_component_0;
      const _component_SectionsBlog1Section2 = __nuxt_component_1;
      const _component_SectionsBlog1Section3 = __nuxt_component_2;
      const _component_SectionsBlog1Section4 = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsBlog1Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsBlog1Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsBlog1Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsBlog1Section4, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog-1/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-IHE9-5UG.mjs.map
