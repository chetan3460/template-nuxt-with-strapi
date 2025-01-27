import { _ as _sfc_main$1 } from './NuxtImg-zynjdDAX.mjs';
import { ref, watchEffect, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "CardBlockLayoutTwo",
  __ssrInlineRender: true,
  setup(__props) {
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const route = useRoute();
    const cardBlockData = ref([]);
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
              "Blocks.CardLayoutItems.icon"
            ]
          });
          const { data, error } = await useFetch(
            `${strapiBaseUrl}/api/sitemaps?${queryParams}`,
            "$mreeFTHcMo"
          );
          if (data.value) {
            const blocks = ((_a = data.value.data[0]) == null ? void 0 : _a.Blocks) || [];
            cardBlockData.value = blocks.filter((block) => block.__component === "page-blocks.card-block-layout-two");
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtImg = _sfc_main$1;
      if ((_a = cardBlockData.value) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(cardBlockData.value, (item, index) => {
          var _a2;
          _push(`<div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]">`);
          if (item.title) {
            _push(`<span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[25px]">${ssrInterpolate(item.title)}</span>`);
          } else {
            _push(`<!---->`);
          }
          if (item.content) {
            _push(`<div class="mb-[45px] md:mb-[75px]"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">${ssrInterpolate(item.content)}</h2><p class="text-quote md:text-lead-lg text-gray-600"></p></div>`);
          } else {
            _push(`<!---->`);
          }
          if ((_a2 = item.CardLayoutItems) == null ? void 0 : _a2.length) {
            _push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] lg:gap-[46px] mb-[60px] lg:mb-[132px]"><!--[-->`);
            ssrRenderList(item.CardLayoutItems, (card) => {
              var _a3;
              _push(`<div class="flex items-start gap-[15px] md:gap-[30px]"><div>`);
              if ((_a3 = card.icon) == null ? void 0 : _a3.url) {
                _push(ssrRenderComponent(_component_NuxtImg, {
                  class: "max-w-[40px] md:max-w-[52px] min-w-[52px]",
                  src: `${unref(strapiBaseUrl)}${card.icon.url}`,
                  alt: card.icon.alternativeText || "Card Icon",
                  width: card.icon.width,
                  height: card.icon.height,
                  format: "webp"
                }, null, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`</div><div>`);
              if (card.title) {
                _push(`<p class="font-bold font-chivo text-[14px] md:text-heading-6 mb-3 md:mb-[22px]">${ssrInterpolate(card.title)}</p>`);
              } else {
                _push(`<!---->`);
              }
              if (card.content) {
                _push(`<p class="text-text">${ssrInterpolate(card.content)}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="w-full bg-gray-200 h-[1px]"></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/CardBlockLayoutTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CardBlockLayoutTwo-rvUDlke1.mjs.map
