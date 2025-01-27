import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[88px]" }, _attrs))}><div class="grid grid-cols-2 flex-1 text-center gap-2 gap-y-8 md:grid-cols-2 xl:gap-y-[70px] lg:grid-cols-4 mb-[45px] md:mb-[88px]"><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900"> +12</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">years in business</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900"> 2K+</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">projects done</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900"> 28+</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">countries /offices</p></div><div><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-1 text-green-900"> 86</h1><p class="text-text text-gray-500 mx-auto md:w-[26ch]">Constant clients</p></div></div><div class="bg-gray-300 mx-auto w-[90%] h-[1px]"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/Section2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Section2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Section2 as default };
//# sourceMappingURL=Section2-CKyk0BBi.mjs.map
