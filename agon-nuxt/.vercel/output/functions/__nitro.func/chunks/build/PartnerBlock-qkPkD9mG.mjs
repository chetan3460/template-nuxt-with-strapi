import { ref, watchEffect, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "PartnerBlock",
  __ssrInlineRender: true,
  setup(__props) {
    const partnerData = ref([]);
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
                // Match the page slug
              }
            },
            populate: [
              "Blocks.HeadingBlock",
              "Blocks.ImageRepeater.images",
              "*"
              // Populate partner images
            ].join(",")
          });
          const { data, error } = await useFetch(
            `${strapiBaseUrl}/api/sitemaps?${queryParams}`,
            "$Wm4vl1KyNX"
          );
          if (data.value) {
            const blocks = ((_a = data.value.data[0]) == null ? void 0 : _a.Blocks) || [];
            partnerData.value = blocks.filter(
              (block) => block.__component === "page-blocks.partner-block"
            );
          } else if (error.value) {
            console.error("Error fetching data:", error.value);
          }
        } catch (err) {
          console.error("Error fetching data:", err);
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if ((_a = partnerData.value) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(partnerData.value, (item, index) => {
          var _a2, _b, _c;
          _push(`<div class="px-[12px] md:px-[36px] xl:px-0 mt-[30px] md:mt-[80px] lg:mt-[143px]">`);
          if ((_a2 = item.HeadingBlock) == null ? void 0 : _a2.title) {
            _push(`<h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 text-center mb-[40px] md:mb-[60px] lg:mb-[84px]">${ssrInterpolate((_b = item.HeadingBlock) == null ? void 0 : _b.title)}</h2>`);
          } else {
            _push(`<!---->`);
          }
          if ((_c = item.ImageRepeater) == null ? void 0 : _c.length) {
            _push(`<div class="flex flex-wrap items-center justify-center mb-[30px] md:mb-[60px] lg:mb-[80px]"><!--[-->`);
            ssrRenderList(item.ImageRepeater.flatMap((block) => block.images), (image) => {
              _push(`<div class="router-link-active router-link-exact-active transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]"><img${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${image.url}`)}${ssrRenderAttr("alt", image.alternativeText || "Partner Image")}></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="w-full bg-gray-300 h-[1px] mb-[50px] md:mb-[90px] lg:mb-[150px]"></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/PartnerBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=PartnerBlock-qkPkD9mG.mjs.map
