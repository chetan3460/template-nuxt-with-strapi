import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, b as _imports_0$1, a as _imports_0 } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative error-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] flex flex-col justify-center items-center text-center lg:mt-[161px]" }, _attrs))}><div class="max-w-[565px] mb-[50px]"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_0$1)} alt="404 image"></div><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-7"> Whoops! That page doesn\u2019t exist. </h1><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 text-gray-500 mb-[70px]">The page you requested could not be found </h4><button type="button"><a class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 flex-row-reverse" href="/"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Back to Homepage</span><i><img class="mr-4 rotate-180 filter-white w-[12px] group-hover:filter-black"${ssrRenderAttr("src", _imports_0)} alt="arrow right icon"></i></a></button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/error-404/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DehvJSjs.mjs.map
