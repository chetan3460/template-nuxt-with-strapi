import { _ as _sfc_main$2, a as __nuxt_component_1, b as __nuxt_component_2 } from './Footer1-DA8xlHHv.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-DwEQ30mH.mjs';
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
import 'vue-router';
import './asyncData-J0SEPLbh.mjs';
import 'unhead';
import '@unhead/shared';
import '@unhead/addons';
import '@unhead/schema-org/vue';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutHeader1 = _sfc_main$2;
  const _component_ElementsBackToTop = __nuxt_component_1;
  const _component_LayoutFooter1 = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper mx-auto text-gray-900 font-normal max-w-[1320px]" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutHeader1, null, null, _parent));
  _push(`<div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ElementsBackToTop, null, null, _parent));
  _push(ssrRenderComponent(_component_LayoutFooter1, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BZjSkUgL.mjs.map
