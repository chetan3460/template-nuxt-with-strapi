import { ref, withAsyncContext, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './virtual_public-DTZSeK32.mjs';
import qs from 'qs';
import MarkdownIt from 'markdown-it';
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
  __name: "FaqBlock",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a, _b, _c;
    let __temp, __restore;
    const faqData = ref([]);
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const route = useRoute();
    const markdownParser = new MarkdownIt();
    const renderMarkdown = (content) => {
      return markdownParser.render(content);
    };
    const slug = route.params.slug;
    const queryParams = qs.stringify({
      filters: {
        PageURL: {
          $eq: slug
        }
      },
      populate: ["Blocks.ApproachRepeater,Blocks.FaqRepeater,Blocks.HeadingBlock"]
    });
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/sitemaps?${queryParams}`, "$ZbRyv6DlRz")), __temp = await __temp, __restore(), __temp);
    if ((_b = (_a = data == null ? void 0 : data.value) == null ? void 0 : _a.data) == null ? void 0 : _b.length) {
      const blocks = ((_c = data.value.data[0]) == null ? void 0 : _c.Blocks) || [];
      faqData.value = blocks.filter(
        (block) => block.__component === "page-blocks.faq-block"
      );
    } else if (error.value) {
      console.error("Error fetching data:", error.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      if ((_a2 = faqData.value) == null ? void 0 : _a2.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(faqData.value, (item, index) => {
          var _a3, _b2, _c2;
          _push(`<div class="gap-6 flex flex-col mx-auto px-5 xl:gap-[50px] max-w-[950px] mt-[70px] lg:mt-[98px]"><div class="flex-1 mb-[40px]"><div class="text-center mb-[22px]">`);
          if ((_a3 = item.HeadingBlock) == null ? void 0 : _a3.title) {
            _push(`<h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">${ssrInterpolate((_b2 = item.HeadingBlock) == null ? void 0 : _b2.title)}</h2>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if ((_c2 = item.HeadingBlock) == null ? void 0 : _c2.content) {
            _push(`<p class="text-text text-gray-600 text-center mx-auto mb-[40px] md:w-[55ch]">${ssrInterpolate(item.HeadingBlock.content)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="flex flex-col md:flex-row md:gap-[35px]"><!--[-->`);
          ssrRenderList(item.ApproachRepeater, (appraochItem, pIndex) => {
            _push(`<div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0)} alt="leaf icon">`);
            if (appraochItem.title) {
              _push(`<h4 class="text-heading-6 font-chivo font-bold">${ssrInterpolate(appraochItem.title)}</h4>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
            if (appraochItem.description) {
              _push(`<p class="text-excerpt text-gray-600">${ssrInterpolate(appraochItem.description)}</p>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]--></div></div><div class="flex-[1.5]"><!--[-->`);
          ssrRenderList(item.FaqRepeater, (faqItem, pindex) => {
            var _a4;
            _push(`<div class="relative accordion-item mb-5"><details><summary class="flex justify-between py-5 items-center gap-5 px-[30px]">`);
            if (faqItem.title) {
              _push(`<h4 class="font-bold font-chivo text-[14px] xl:text-heading-5">${ssrInterpolate(faqItem.title)}</h4>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</summary>`);
            if (faqItem.description) {
              _push(`<div class="prose prose-p:text-text prose-p:content prose-p:font-chivo prose-p:mt-[30px] prose-p:ml-[30px]">${(_a4 = renderMarkdown(faqItem.description)) != null ? _a4 : ""}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</details></div>`);
          });
          _push(`<!--]--></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/FaqBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=FaqBlock-Bb3Syfp0.mjs.map
