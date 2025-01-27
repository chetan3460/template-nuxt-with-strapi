import { ref, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import qs from 'qs';
import { e as useNuxtApp } from './server.mjs';
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
  __name: "CardsBlock",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const cardBlockData = ref([]);
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const route = useRoute();
    const slug = route.params.slug;
    const queryParams = qs.stringify({
      filters: {
        PageURL: { $eq: slug }
      },
      populate: ["Blocks.ItemRepeater.icon"]
    });
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/sitemaps?${queryParams}`, "$W7VpbKVdat")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      const blocks = ((_a = data.value.data[0]) == null ? void 0 : _a.Blocks) || [];
      cardBlockData.value = blocks.filter((block) => block.__component === "page-blocks.cards-block");
    } else if (error.value) {
      console.error("Error fetching card block data:", error.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (cardBlockData.value.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><!--[-->`);
        ssrRenderList(cardBlockData.value, (item, index) => {
          _push(`<div><div class="text-center mb-[40px] lg:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] w-full">${ssrInterpolate(item.title)}</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">${ssrInterpolate(item.content)}</p></div>`);
          if (item.ItemRepeater && item.ItemRepeater.length) {
            _push(`<div><div class="lg:flex lg:items-center gap-[30px]"><!--[-->`);
            ssrRenderList(item.ItemRepeater, (item2, index2) => {
              var _a2;
              _push(`<div class="flex items-start gap-5 transition-all duration-300 hover:translate-y-[-3px] border-b border-gray-200 pb-[50px]"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${(_a2 = item2.icon) == null ? void 0 : _a2.url}`)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">${ssrInterpolate(index2 + 1)}. ${ssrInterpolate(item2.title)}</h3><p class="text-excerpt">${ssrInterpolate(item2.content)}</p></div></div>`);
            });
            _push(`<!--]--></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/CardsBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=CardsBlock-BOAy_G8w.mjs.map
