import { ref, watchEffect, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import qs from 'qs';
import { e as useNuxtApp, j as useRoute } from './server.mjs';
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
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import './asyncData-J0SEPLbh.mjs';

const _sfc_main = {
  __name: "TwoColImageContentBlock",
  __ssrInlineRender: true,
  setup(__props) {
    const cardBlockData = ref([]);
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const route = useRoute();
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
            populate: [
              "Blocks.TwoCardsReapeater.icon"
            ]
          });
          const { data, error } = await useFetch(
            `${strapiBaseUrl}/api/sitemaps?${queryParams}`,
            "$azlvlBVVf4"
          );
          if (data.value) {
            const blocks = ((_a = data.value.data[0]) == null ? void 0 : _a.Blocks) || [];
            cardBlockData.value = blocks.filter((block) => block.__component === "page-blocks.two-col-image-content-block");
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if ((_a = cardBlockData.value) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(cardBlockData.value, (item, index) => {
          var _a2;
          _push(`<div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[133px]"><div class="text-center mb-[30px] md:mb-[90px]">`);
          if (item.title) {
            _push(`<h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">${ssrInterpolate(item.title)}</h2>`);
          } else {
            _push(`<!---->`);
          }
          if (item.content) {
            _push(`<p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">${ssrInterpolate(item.content)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if ((_a2 = item.TwoCardsReapeater) == null ? void 0 : _a2.length) {
            _push(`<div class="mx-auto lg:flex gap-[30px] max-w-[1190px]"><!--[-->`);
            ssrRenderList(item.TwoCardsReapeater, (card, pIndex) => {
              _push(`<div class="${ssrRenderClass(`text-center rounded-2xl p-5 max-h-[300px] md:max-h-[450px] lg:max-h-[380px] xl:max-h-[455px] md:p-14 mb-[150px] md:mb-[300px] lg:mb-0 transition-all duration-300 hover:translate-y-[-3px] bg-bg-${pIndex + 1}`)}">`);
              if (card.title) {
                _push(`<h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[18px]">${ssrInterpolate(card.title)}</h3>`);
              } else {
                _push(`<!---->`);
              }
              if (card.content) {
                _push(`<p class="text-md text-gray-600 mb-[22px] lg:mx-16">${ssrInterpolate(card.content)}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<img class="p-5 rounded-2xl object-cover mx-auto w-full bg-[#EBECF4]"${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${card.icon.url}`)} alt="Feature image"></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/TwoColImageContentBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=TwoColImageContentBlock-Bfq4nd7N.mjs.map
