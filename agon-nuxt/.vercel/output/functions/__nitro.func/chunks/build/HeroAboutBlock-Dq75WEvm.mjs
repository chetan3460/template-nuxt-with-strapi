import { _ as __nuxt_component_0 } from './nuxt-link-DwEQ30mH.mjs';
import { ref, withAsyncContext, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { e as useNuxtApp, f as _imports_0 } from './server.mjs';
import { useRoute } from 'vue-router';
import qs from 'qs';
import { u as useFetch } from './fetch-5adf4HwG.mjs';
import '../nitro/nitro.mjs';
import 'lru-cache';
import '@unocss/core';
import '@unocss/preset-wind';
import 'devalue';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'consola/core';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import './asyncData-J0SEPLbh.mjs';

const _sfc_main = {
  __name: "HeroAboutBlock",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b;
    let __temp, __restore;
    const heroData = ref([]);
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const route = useRoute();
    const slug = route.params.slug;
    const queryParams = qs.stringify({
      filters: { PageURL: { $eq: slug } },
      populate: ["Blocks", "Blocks.imageLeft", "Blocks.imageRight"]
    });
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${strapiBaseUrl}/api/sitemaps?${queryParams}`,
      "$bwjLRost3g"
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      console.error("Error fetching hero data:", error.value);
    } else {
      heroData.value = ((_b = (_a = data.value) == null ? void 0 : _a.data[0]) == null ? void 0 : _b.Blocks.filter((block) => block.__component === "page-blocks.hero-about-block")) || [];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (heroData.value !== null) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width banner-hero banner-2 bg-[#bee1e6]" }, _attrs))}><!--[-->`);
        ssrRenderList(heroData.value, (item, index) => {
          var _a2, _b2;
          _push(`<div class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center"><div class="lg:w-[60%] lg:mr-[150px]">`);
          if (item.subtitle) {
            _push(`<span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[29px]">${ssrInterpolate(item.subtitle)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-[20px]">${ssrInterpolate(item.title)}</h1><p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[44px] md:w-[36ch]">${ssrInterpolate(item.content)}</p><div class="flex items-center justify-start mb-[50px]"><button type="button">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: item.ContactBtnLink,
            class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>${ssrInterpolate(item.ContactBtnText)}</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_0)} alt="arrow right icon"${_scopeId}></i>`);
              } else {
                return [
                  createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, toDisplayString(item.ContactBtnText), 1),
                  createVNode("i", null, [
                    createVNode("img", {
                      class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                      src: _imports_0,
                      alt: "arrow right icon"
                    })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</button>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]",
            to: item.BtnLink
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.btnText)} <i${_scopeId}><img class="ml-[7px] w-[12px]"${ssrRenderAttr("src", _imports_0)} alt="arrow right icon"${_scopeId}></i>`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.btnText) + " ", 1),
                  createVNode("i", null, [
                    createVNode("img", {
                      class: "ml-[7px] w-[12px]",
                      src: _imports_0,
                      alt: "arrow right icon"
                    })
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div><div class="hidden relative lg:block">`);
          if ((_a2 = item.imageLeft) == null ? void 0 : _a2.url) {
            _push(`<img class="animate-float absolute rounded-2xl max-w-[240px] max-h-[340px] bottom-[-12%] left-[-50%]"${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${item.imageLeft.url}`)} alt="Left Image">`);
          } else {
            _push(`<!---->`);
          }
          if ((_b2 = item.imageRight) == null ? void 0 : _b2.url) {
            _push(`<img class="animate-hero-thumb-sm-animation max-w-[512px] max-h-[689px]"${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${item.imageRight.url}`)} alt="Right Image">`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/HeroAboutBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HeroAboutBlock-Dq75WEvm.mjs.map
