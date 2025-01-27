import { ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import qs from 'qs';
import { useRoute } from 'vue-router';
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
  __name: "ProcessBlock",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const processData = ref([]);
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const route = useRoute();
    const classes = ["bg-bg-2", "bg-bg-3", "bg-bg-5", "bg-bg-9"];
    const slug = route.params.slug;
    const queryParams = qs.stringify({
      filters: {
        PageURL: {
          $eq: slug
        }
      },
      populate: "Blocks.ProcessRepeater.icon,Blocks.ProcessRepeater.shapeImg,Blocks.HeadingBlock"
    });
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/sitemaps?${queryParams}`, "$BtDDi36gGN")), __temp = await __temp, __restore(), __temp);
    if (data == null ? void 0 : data.value) {
      const blocks = ((_a = data.value.data[0]) == null ? void 0 : _a.Blocks) || [];
      processData.value = blocks.filter(
        (block) => block.__component === "page-blocks.process-block"
      );
    } else if (error.value) {
      console.error("Error fetching data:", error.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (processData.value.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(processData.value, (item, index) => {
          var _a2, _b;
          _push(`<div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center mx-auto max-w-[905px]">`);
          if ((_a2 = item.HeadingBlock) == null ? void 0 : _a2.subtitle) {
            _push(`<span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-4">${ssrInterpolate(item.HeadingBlock.subtitle)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="text-center mb-[88px]">`);
          if ((_b = item.HeadingBlock) == null ? void 0 : _b.title) {
            _push(`<h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">${ssrInterpolate(item.HeadingBlock.title)}</h2>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex flex-col gap-5 items-center justify-center relative md:flex-wrap md:flex-row lg:gap-[30px] xl:gap-[110px]"><!--[-->`);
          ssrRenderList(item.ProcessRepeater, (process, pIndex) => {
            var _a3, _b2;
            _push(`<div class="${ssrRenderClass([
              "rounded-2xl p-[30px] md:py-[20px] md:px-[53px] self-stretch relative md:w-[calc(50%-20px)] lg:w-[calc(33.33%-30px)] xl:w-[calc(33.33%-75px)] transition-all duration-300 hover:translate-y-[-3px]",
              classes[pIndex % classes.length]
            ])}">`);
            if ((_a3 = process.icon) == null ? void 0 : _a3.url) {
              _push(`<div class="bg-white rounded-full grid place-items-center mx-auto mb-8 w-[80px] h-[80px]"><img${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${process.icon.url}`)} alt="icon" class="max-w-[36px]"></div>`);
            } else {
              _push(`<!---->`);
            }
            if (process.title) {
              _push(`<h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[15px]">${ssrInterpolate(process.title)}</h4>`);
            } else {
              _push(`<!---->`);
            }
            if (process.content) {
              _push(`<p class="text-text text-gray-500">${ssrInterpolate(process.content)}</p>`);
            } else {
              _push(`<!---->`);
            }
            if ((_b2 = process.shapeImg) == null ? void 0 : _b2.url) {
              _push(`<div class="${ssrRenderClass({
                "hidden absolute right-0 top-full lg:block translate-x-[-60px] z-[-1] xl:translate-y-[30px]": pIndex === 2,
                "hidden absolute right-0 lg:block top-1/2 translate-x-[30px] z-[-1] xl:translate-x-full xl:right-[-15px]": pIndex !== 2
              })}"><img${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${process.shapeImg.url}`)} alt="direction arrow"></div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/ProcessBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProcessBlock-B579Y_M4.mjs.map
