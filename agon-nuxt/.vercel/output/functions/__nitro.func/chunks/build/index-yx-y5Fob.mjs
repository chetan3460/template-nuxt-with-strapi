import { _ as __nuxt_component_0 } from './nuxt-link-DwEQ30mH.mjs';
import { unref, createVNode, resolveDynamicComponent, useSSRContext, ref, withAsyncContext, computed, withCtx, toDisplayString, createTextVNode, mergeProps, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { e as useNuxtApp, f as _imports_0$2 } from './server.mjs';
import { _ as _imports_0$3, M as ModalVideo } from './ModalVideo-DWaex42U.mjs';
import MarkdownIt from 'markdown-it';
import { u as useFetch } from './fetch-5adf4HwG.mjs';
import { _ as _sfc_main$a } from './NuxtImg-zynjdDAX.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _imports_0$4 } from './virtual_public-DTZSeK32.mjs';
import { Autoplay, Pagination, Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _sfc_main$9 } from './BlogItem-Cg8DEZqi.mjs';
import { u as useDynamicComponents } from './useDynamicComponents-CbeC4ghp.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import 'devalue';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'node:url';
import 'ipx';
import './asyncData-J0SEPLbh.mjs';

const _sfc_main$8 = {
  __name: "Section1",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    new MarkdownIt();
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const bannerBlock = ref(null);
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/banner-block?populate=*`, "$Z0s5OE3hU7")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      bannerBlock.value = data.value.data;
    } else if (error.value) {
      console.error("Error fetching data:", error.value);
    }
    const videoIsOpen = ref(false);
    const openVideo = () => {
      videoIsOpen.value = !videoIsOpen.value;
    };
    const videoChannel = computed(() => {
      return "youtube";
    });
    const videoId = computed(() => {
      return "QiqQoqtnHrk";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="full-width banner-hero bg-orange-100 banner-1">`);
      if (bannerBlock.value !== null) {
        _push(`<div class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center"><div class="flex-1"><h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[40px]">${(_a2 = bannerBlock.value.title) != null ? _a2 : ""}</h1><p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[40px]">${ssrInterpolate(bannerBlock.value.description)}</p><div class="flex items-center justify-start"><button type="button">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px] hover:translate-y-[-2px]",
          to: bannerBlock.value.btnLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>${ssrInterpolate(bannerBlock.value.btnText)}</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_0$2)} alt="arrow right icon"${_scopeId}></i>`);
            } else {
              return [
                createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, toDisplayString(bannerBlock.value.btnText), 1),
                createVNode("i", null, [
                  createVNode("img", {
                    class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                    src: _imports_0$2,
                    alt: "arrow right icon"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]",
          to: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Learn More <i${_scopeId}><img class="ml-[7px] w-[12px]"${ssrRenderAttr("src", _imports_0$2)} alt="arrow right icon"${_scopeId}></i>`);
            } else {
              return [
                createTextVNode("Learn More "),
                createVNode("i", null, [
                  createVNode("img", {
                    class: "ml-[7px] w-[12px]",
                    src: _imports_0$2,
                    alt: "arrow right icon"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="hidden relative flex-1 h-auto self-stretch lg:block"><div class="absolute w-full left-20 animate-hero-thumb-sm-animation bottom-[-60px] max-w-[526px]"><img${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${(_a = bannerBlock.value.bannerImage) == null ? void 0 : _a.url}`)} class="h-full w-full object-cover" alt="image"></div><div class="absolute opacity-80 animate-float max-w-[176px] bottom-[10%] -translate-x-1/3"><div class="relative bg-green-900 bg-opacity-80 rounded-2xl grid place-items-center"><img class="h-full w-full object-cover"${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${(_b = bannerBlock.value.videoImg) == null ? void 0 : _b.url}`)} alt="Agon"><p class="text-heading-4 absolute text-white font-chivo font-bold ml-[49px]">Watch intro video </p><button class="rounded-full bg-white grid place-items-center absolute play-video w-[64px] h-[64px] left-[-15%]"><img${ssrRenderAttr("src", _imports_0$3)} alt="play button" width="15"></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(ModalVideo, {
        channel: videoChannel.value,
        videoId: videoId.value,
        isOpen: videoIsOpen.value,
        "onUpdate:isOpen": ($event) => videoIsOpen.value = $event,
        onToggleVideo: openVideo
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section1.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "Section2",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const partnerItems = ref([]);
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/partner-logo?populate=partnerItems.Image`, "$Cz1cmFR1CE")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      partnerItems.value = ((_b = (_a = data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.partnerItems) || [];
    } else if (error.value) {
      console.error("Error fetching data:", error.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}>`);
      if (partnerItems.value !== null) {
        _push(`<div class="grid grid-cols-2 md:grid-cols-4 gap-x-[24px] lg:grid-cols-6"><!--[-->`);
        ssrRenderList(partnerItems.value, (item, index) => {
          _push(ssrRenderComponent(_component_NuxtImg, {
            key: item.id,
            src: `${unref(strapiBaseUrl)}${item.Image.url}`,
            alt: item.Image.alternativeText || `Partner logo ${index + 1}`,
            width: item.Image.width || 150,
            height: item.Image.height || 75,
            format: "webp",
            class: "transition-all duration-300 partner-item p-[15px] hover:translate-y-[-3px]"
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-center py-4"><p>No partner logos available at the moment.</p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section2.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_1$1 = publicAssetsURL("/assets/images/icons/pattern-3.svg");
const _sfc_main$6 = {
  __name: "Section3",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const markdownParser = new MarkdownIt();
    const renderMarkdown = (content) => {
      return markdownParser.render(content);
    };
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const seeWhyData = ref([]);
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/see-why-block?populate=SeeWhyBlockItems.image`, "$nllH3o6E47")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      seeWhyData.value = data.value.data;
    } else if (error.value) {
      console.error("Error fetching data:", error.value);
    } else {
      console.warn("No data or error received.");
    }
    const selectedTab = ref(0);
    const videoIsOpen = ref(false);
    const videoChannel = computed(() => {
      return "youtube";
    });
    const videoId = computed(() => {
      return "QiqQoqtnHrk";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$a;
      _push(`<!--[-->`);
      if (seeWhyData.value !== null) {
        _push(`<div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]"><div class="text-center"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">${ssrInterpolate(seeWhyData.value.heading)}</h2><div class="prose-p:font-bold"><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">${ssrInterpolate(seeWhyData.value.content)}</p></div></div><div class="flex items-center gap-5 justify-center flex-wrap mx-auto w-full mt-[90px] sm:w-[80%] xl:w-full mb-[58px]"><!--[-->`);
        ssrRenderList(seeWhyData.value.SeeWhyBlockItems, (item, index) => {
          _push(`<p class="${ssrRenderClass([{ "active": selectedTab.value === index }, "text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"])}">${ssrInterpolate(item.title)}</p>`);
        });
        _push(`<!--]--></div><!--[-->`);
        ssrRenderList(seeWhyData.value.SeeWhyBlockItems, (item, index) => {
          var _a;
          _push(`<div class="${ssrRenderClass(["tab-content lg:gap-[30px] lg:flex", selectedTab.value === index ? index === 0 ? "bg-bg-2" : "bg-bg-3" : "!hidden"])}"><div class="p-5 md:p-[60px] lg:w-1/2"><div class="prose prose-h2:font-bold prose-h2:font-chivo prose-h2:text-[28px] prose-h2:leading-[32px] prose-h2:mb-[30px] prose-p:text-excerpt prose-p:text-[20px] prose-p:mb-[40px] mb-[60px]">${(_a = renderMarkdown(item.description)) != null ? _a : ""}</div><button type="button">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
            to: item.btnLink
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>${ssrInterpolate(item.btnText)}</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_0$2)} alt="arrow right icon"${_scopeId}></i>`);
              } else {
                return [
                  createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, toDisplayString(item.btnText), 1),
                  createVNode("i", null, [
                    createVNode("img", {
                      class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
                      src: _imports_0$2,
                      alt: "arrow right icon"
                    })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</button></div><div class="relative lg:w-1/2">`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: `${unref(strapiBaseUrl)}${item.image.url}`,
            alt: item.image.alternativeText || `Partner logo ${index + 1}`,
            width: item.image.width || 150,
            height: item.image.height || 75,
            format: "webp",
            class: "h-full w-full object-cover"
          }, null, _parent));
          _push(`<img class="absolute top-0 right-0"${ssrRenderAttr("src", _imports_1$1)} alt="pattern"><button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img${ssrRenderAttr("src", _imports_0$3)} alt="play button" width="30"></button></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(ModalVideo, {
        channel: videoChannel.value,
        videoId: videoId.value,
        isOpen: videoIsOpen.value,
        "onUpdate:isOpen": ($event) => videoIsOpen.value = $event
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section3.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "Section4",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const featureItemData = ref([]);
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/feature-block?populate[0]=featureBlockItems.featureImg&populate[1]=featureBlockItems.featureBackImg`, "$hXrSNXdp3k")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      featureItemData.value = data.value.data;
    } else if (error.value) {
      console.log(error.value);
    } else {
      console.log("Loading...");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$a;
      const _component_NuxtLink = __nuxt_component_0;
      if (featureItemData.value !== null) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[100px]" }, _attrs))}><div class="text-center mb-[70px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">${ssrInterpolate(featureItemData.value.heading)}</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">${ssrInterpolate(featureItemData.value.content)}</p></div><div class="lg:flex lg:gap-5 xl:gap-[30px]"><!--[-->`);
        ssrRenderList(featureItemData.value.featureBlockItems, (item, index) => {
          _push(`<div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-5 hover:translate-y-[-2px]"><div>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: `${unref(strapiBaseUrl)}${item.featureImg.url}`,
            class: "h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"
          }, null, _parent));
          _push(`<h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">${ssrInterpolate(item.featureTitle)}</h2><p class="text-excerpt text-gray-600 mb-[30px]">${ssrInterpolate(item.featureContent)}</p></div><button type="button">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit hover:translate-y-[-3px]",
            to: item.featureLink
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>${ssrInterpolate(item.featureBtn)}</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_0$2)} alt="arrow right icon"${_scopeId}></i>`);
              } else {
                return [
                  createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, toDisplayString(item.featureBtn), 1),
                  createVNode("i", null, [
                    createVNode("img", {
                      class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
                      src: _imports_0$2,
                      alt: "arrow right icon"
                    })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</button>`);
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: `${unref(strapiBaseUrl)}${item.featureBackImg.url}`,
            alt: item.featureBackImg.alternativeText,
            width: item.featureBackImg.width || 150,
            height: item.featureBackImg.height || 75,
            format: "webp",
            class: "absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section4.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "Section5",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const whatWeDoData = ref([]);
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/what-we-do-block?populate=*`, "$QsRunil2nR")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      whatWeDoData.value = data.value.data;
    } else if (error.value) {
      console.log(error.value);
    } else {
      console.log("Loading...");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[100px]" }, _attrs))}>`);
      if (whatWeDoData.value !== null) {
        _push(`<div class="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]"><div class="relative">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${unref(strapiBaseUrl)}${whatWeDoData.value.Image.url}`,
          alt: whatWeDoData.value.Image.alternativeText,
          width: whatWeDoData.value.Image.width || 637,
          height: whatWeDoData.value.Image.height || 738,
          format: "webp",
          class: "rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"
        }, null, _parent));
        _push(`</div><div class="flex-1 order-1">`);
        if (whatWeDoData.value.Subtitle) {
          _push(`<span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">${ssrInterpolate(whatWeDoData.value.Subtitle)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (whatWeDoData.value.Heading) {
          _push(`<h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">${ssrInterpolate(whatWeDoData.value.Heading)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">${ssrInterpolate(whatWeDoData.value.Content)}</p><div class="border border-green-900 border-dashed mb-[48px]"></div>`);
        if (whatWeDoData.value.ListItems) {
          _push(`<div class="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]"><!--[-->`);
          ssrRenderList(whatWeDoData.value.ListItems, (item, index) => {
            _push(`<div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$4)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">${ssrInterpolate(item.Title)}</h4></div><p class="text-excerpt text-gray-600">${ssrInterpolate(item.description)}</p></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section5.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _imports_0$1 = publicAssetsURL("/assets/images/icons/pattern-4.svg");
const _sfc_main$3 = {
  __name: "Section6",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const modules = [Autoplay, Pagination, Navigation, Virtual];
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const whatWeOfferData = ref([]);
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/what-we-offer-block?populate=SliderItems.sliderImage`, "$lJQD9FIrwZ")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      whatWeOfferData.value = data.value.data;
    } else if (error.value) {
      console.log(error.value);
    } else {
      console.log("Loading...");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$a;
      if (whatWeOfferData.value !== null) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}><div class="bg-bg-2 relative px-[12px] py-[70px] rounded-[50px]"><img class="absolute top-0 left-0 z-0 -translate-x-1/4"${ssrRenderAttr("src", _imports_0$1)} alt="pattern icon"><div class="text-center relative mb-[70px] md:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">${ssrInterpolate(whatWeOfferData.value.heading)}</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">${ssrInterpolate(whatWeOfferData.value.content)}</p></div>`);
        _push(ssrRenderComponent(unref(Swiper), {
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
          modules,
          class: "offer-list dots"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(whatWeOfferData.value.SliderItems, (item, index) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: item.id,
                  virtualIndex: index,
                  virtual: true,
                  class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtImg, {
                        class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                        src: `${unref(strapiBaseUrl)}${item.sliderImage.url}`,
                        alt: item.sliderImage.alternativeText,
                        width: item.sliderImage.width || 50,
                        height: item.sliderImage.height || 50,
                        format: "webp"
                      }, null, _parent3, _scopeId2));
                      _push3(`<h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>${ssrInterpolate(item.title)}</h3><p class="text-text text-gray-600"${_scopeId2}>${ssrInterpolate(item.content)}</p>`);
                    } else {
                      return [
                        createVNode(_component_NuxtImg, {
                          class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                          src: `${unref(strapiBaseUrl)}${item.sliderImage.url}`,
                          alt: item.sliderImage.alternativeText,
                          width: item.sliderImage.width || 50,
                          height: item.sliderImage.height || 50,
                          format: "webp"
                        }, null, 8, ["src", "alt", "width", "height"]),
                        createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, toDisplayString(item.title), 1),
                        createVNode("p", { class: "text-text text-gray-600" }, toDisplayString(item.content), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(whatWeOfferData.value.SliderItems, (item, index) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: item.id,
                    virtualIndex: index,
                    virtual: true,
                    class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtImg, {
                        class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                        src: `${unref(strapiBaseUrl)}${item.sliderImage.url}`,
                        alt: item.sliderImage.alternativeText,
                        width: item.sliderImage.width || 50,
                        height: item.sliderImage.height || 50,
                        format: "webp"
                      }, null, 8, ["src", "alt", "width", "height"]),
                      createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, toDisplayString(item.title), 1),
                      createVNode("p", { class: "text-text text-gray-600" }, toDisplayString(item.content), 1)
                    ]),
                    _: 2
                  }, 1032, ["virtualIndex"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section6.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/assets/images/icons/icon-prev.svg");
const _imports_1 = publicAssetsURL("/assets/images/icons/icon-next.svg");
const _sfc_main$2 = {
  __name: "Section7",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const modules = [Autoplay, Pagination, Navigation, Virtual];
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const testimonialData = ref([]);
    const { data, pending, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/testimonial-block?populate=testimonialItems.image`, "$xcPIv5nwp2")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      testimonialData.value = data.value.data;
    } else if (error.value) {
      console.log(error.value);
    } else {
      console.log("Loading...");
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$a;
      if (testimonialData.value !== null) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}><div class="items-center justify-between md:flex mb-[30px] md:mb-[80px]"><div><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">${ssrInterpolate(testimonialData.value.heading)}</h2><p class="text-quote md:text-lead-lg text-gray-600">${ssrInterpolate(testimonialData.value.content)}</p></div><div class="flex items-center gap-5 self-end"><div class="tap1 place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-prev grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_0)} alt="control icon button"></div><div class="tan1 place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-next grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_1)} alt="control icon button"></div></div></div>`);
        _push(ssrRenderComponent(unref(Swiper), {
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
              //   spaceBetween: 30,
            },
            575: {
              slidesPerView: 2
              //   spaceBetween: 30,
            },
            767: {
              slidesPerView: 2
              //   spaceBetween: 30,
            },
            991: {
              slidesPerView: 2
              //   spaceBetween: 30,
            },
            1199: {
              slidesPerView: 3
              //   spaceBetween: 30,
            },
            1350: {
              slidesPerView: 3
              //   spaceBetween: 30,
            }
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          navigation: {
            nextEl: ".tan1",
            prevEl: ".tap1"
          },
          modules,
          class: "feedback-list ml-[-15px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(testimonialData.value.testimonialItems, (item, index) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: item.id,
                  virtualIndex: index,
                  virtual: true,
                  class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_NuxtImg, {
                        class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                        src: `${unref(strapiBaseUrl)}${item.image.url}`,
                        alt: item.image.alternativeText,
                        width: item.image.width || 50,
                        height: item.image.height || 50,
                        format: "webp"
                      }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-heading-6 font-chivo font-bold mb-[6px]"${_scopeId2}>${ssrInterpolate(item.name)}</p><p class="text-sm font-bold mb-5 text-gray-700"${_scopeId2}>${ssrInterpolate(item.company)}</p><p class="text-text text-gray-500"${_scopeId2}>${ssrInterpolate(item.content)}</p>`);
                    } else {
                      return [
                        createVNode(_component_NuxtImg, {
                          class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                          src: `${unref(strapiBaseUrl)}${item.image.url}`,
                          alt: item.image.alternativeText,
                          width: item.image.width || 50,
                          height: item.image.height || 50,
                          format: "webp"
                        }, null, 8, ["src", "alt", "width", "height"]),
                        createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, toDisplayString(item.name), 1),
                        createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, toDisplayString(item.company), 1),
                        createVNode("p", { class: "text-text text-gray-500" }, toDisplayString(item.content), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(testimonialData.value.testimonialItems, (item, index) => {
                  return openBlock(), createBlock(unref(SwiperSlide), {
                    key: item.id,
                    virtualIndex: index,
                    virtual: true,
                    class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_NuxtImg, {
                        class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                        src: `${unref(strapiBaseUrl)}${item.image.url}`,
                        alt: item.image.alternativeText,
                        width: item.image.width || 50,
                        height: item.image.height || 50,
                        format: "webp"
                      }, null, 8, ["src", "alt", "width", "height"]),
                      createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, toDisplayString(item.name), 1),
                      createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, toDisplayString(item.company), 1),
                      createVNode("p", { class: "text-text text-gray-500" }, toDisplayString(item.content), 1)
                    ]),
                    _: 2
                  }, 1032, ["virtualIndex"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section7.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Section8",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const blogData = ref(null);
    const blogPostData = ref([]);
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    [__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/blog-post`, "$caGyR0HCHE")), __temp = await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/blogs?populate=*`, "$W3FJsJ7Iu9")), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}>`);
      if (blogData.value !== null) {
        _push(`<div class="items-center justify-between mb-[70px] md:mb-[90px] md:flex"><div><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">${ssrInterpolate(blogData.value.heading)}</h2><p class="text-quote md:text-lead-lg text-gray-600">${ssrInterpolate(blogData.value.shortDesc)}</p></div><button type="button">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black w-fit",
          to: blogData.value.btnLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>${ssrInterpolate(blogData.value.btnText)}</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_0$2)} alt="arrow right icon"${_scopeId}></i>`);
            } else {
              return [
                createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, toDisplayString(blogData.value.btnText), 1),
                createVNode("i", null, [
                  createVNode("img", {
                    class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                    src: _imports_0$2,
                    alt: "arrow right icon"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">`);
      _push(ssrRenderComponent(_sfc_main$9, {
        blogPostData: blogPostData.value.slice(0, 3)
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section8.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { sitemap, filteredBlocks, resolveComponent, fetchData } = useDynamicComponents("/api/sitemaps");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHome1Section1 = _sfc_main$8;
      const _component_SectionsHome1Section2 = _sfc_main$7;
      const _component_SectionsHome1Section3 = _sfc_main$6;
      const _component_SectionsHome1Section4 = _sfc_main$5;
      const _component_SectionsHome1Section5 = _sfc_main$4;
      const _component_SectionsHome1Section6 = _sfc_main$3;
      const _component_SectionsHome1Section7 = _sfc_main$2;
      const _component_SectionsHome1Section8 = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsHome1Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section6, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section7, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section8, null, null, _parent));
      if (unref(sitemap)) {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(filteredBlocks), (block) => {
          _push(`<div>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(resolveComponent)(block.__component)), { data: block }, null), _parent);
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div><p>No dynamic blocks available for the homepage.</p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-yx-y5Fob.mjs.map
