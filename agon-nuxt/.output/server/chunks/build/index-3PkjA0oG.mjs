import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = publicAssetsURL("/assets/images/icons/icon-envelope.svg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative signUp-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center" }, _attrs))}><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[13px]">Reset password </h2><p class="text-text text-gray-500 mb-[60px]">Enter your email to reset your password. </p><form class="bg-white w-full p-8 shadow-3 mx-auto border border-gray-200 rounded-[6px] md:p-12 max-w-[400px]" action="#"><div class="relative mb-6 last-of-type:mb-4"><input class="outline-none flex-1 pr-3 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" id="mail" required type="text" name="mail" placeholder="Enter your email"><span class="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900"></span><i class="absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]"><img${ssrRenderAttr("src", _imports_0)} alt="eye icon"></i></div><button class="mb-6 w-full text-white bg-green-900 transition-opacity duration-200 text-heading-6 font-chivo font-bold shadow-sm py-[13px] hover:opacity-75" type="submit">Reset password</button><div class="flex gap-2"><a class="text-green-900 hover:opacity-70" href="/"><p class="text-text">Back to Homepage </p></a></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/reset-password/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3PkjA0oG.mjs.map
