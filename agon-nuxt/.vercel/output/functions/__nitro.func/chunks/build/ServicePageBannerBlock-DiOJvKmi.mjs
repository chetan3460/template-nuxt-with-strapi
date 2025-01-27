import { _ as __nuxt_component_0 } from './nuxt-link-DwEQ30mH.mjs';
import { ref, watchEffect, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { e as useNuxtApp, j as useRoute, f as _imports_0 } from './server.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import qs from 'qs';
import MarkdownIt from 'markdown-it';
import { u as useFetch } from './fetch-5adf4HwG.mjs';
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

const _imports_1 = publicAssetsURL("/assets/images/icons/icon-button.svg");
const _sfc_main = {
  __name: "ServicePageBannerBlock",
  __ssrInlineRender: true,
  setup(__props) {
    const serviceBannerData = ref([]);
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const route = useRoute();
    const markdownParser = new MarkdownIt();
    const renderMarkdown = (content) => {
      return markdownParser.render(content);
    };
    watchEffect(async () => {
      var _a;
      const slug = route.params.slug;
      if (slug) {
        try {
          const queryParams = qs.stringify({
            filters: {
              PageURL: {
                $eq: slug
              }
            },
            populate: "Blocks.image,Blocks.TitleContentItem"
          });
          const { data, error } = await useFetch(
            `${strapiBaseUrl}/api/sitemaps?${queryParams}`,
            "$JA8qi4xi9I"
          );
          if (data.value) {
            const blocks = ((_a = data.value.data[0]) == null ? void 0 : _a.Blocks) || [];
            serviceBannerData.value = blocks.filter(
              (block) => block.__component === "page-blocks.service-page-banner-block"
            );
          } else if (error.value) {
            console.error("Error fetching data:", error.value);
          }
        } catch (error) {
          console.error("Error fetching service banner data:", error);
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0;
      if ((_a = serviceBannerData.value) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(serviceBannerData.value, (item, index) => {
          var _a2;
          _push(`<div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center z-10 relative lg:mt-[99px]"><div class="text-center">`);
          if (item.TitleContentItem && item.TitleContentItem.title) {
            _push(`<div class="prose-h1:font-bold prose-h1:font-chivo prose-h1:mx-auto prose-h1:text-gray-900 prose-h1:mb-5 prose-h1:md:mb-[30px] prose-h1:text-[35px] prose-h1:leading-[44px] prose-h1:md:text-[46px] prose-h1:md:leading-[52px] prose-h1:lg:text-heading-1 prose-h1:md:w-[20ch]">${(_a2 = renderMarkdown(item.TitleContentItem.title)) != null ? _a2 : ""}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (item.TitleContentItem && item.TitleContentItem.content) {
            _push(`<p class="text-quote md:text-lead-lg text-gray-500 mx-auto md:w-[47ch] mb-[50px]">${ssrInterpolate(item.TitleContentItem.content)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex items-center justify-center mb-[87px]"><button type="button">`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px]",
            to: "#"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Start</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_0)} alt="arrow right icon"${_scopeId}></i>`);
              } else {
                return [
                  createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Start"),
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
          _push(`</button><div class="flex items-center gap-3"><i><img${ssrRenderAttr("src", _imports_1)} alt=""></i>`);
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
            _: 2
          }, _parent));
          _push(`</div></div><div class="relative mx-auto max-w-[1190px]">`);
          if (item.image && item.image.url) {
            _push(`<img class="h-full w-full object-cover rounded-2xl"${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${item.image.url}`)} alt="Agon">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/ServicePageBannerBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ServicePageBannerBlock-DiOJvKmi.mjs.map
