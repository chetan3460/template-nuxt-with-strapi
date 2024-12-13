import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as _sfc_main$2, a as __nuxt_component_2, b as __nuxt_component_3 } from './Footer1-DmXf0xEn.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import './nuxt-link-BFJLsJpZ.mjs';
import './virtual_public-CatqWA01.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-with address hidden" }, _attrs))}><div class="flex items-center px-3 justify-between gap-5 mx-auto max-w-[1320px] py-[10px] md:mx-8"><p class="text-base hidden font-bold md:block">66 avenue des Champs, 75008, Paris, France</p><div class="flex items-center contact ml-auto gap-[10px] md:gap-5 md:flex-row"><span>(+01) - 456 789</span><div class="border border-dashed border-white self-stretch"></div><span>contact@agon.com</span></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Topbar1.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutTopbar1 = __nuxt_component_0;
  const _component_LayoutHeader1 = _sfc_main$2;
  const _component_ElementsBackToTop = __nuxt_component_2;
  const _component_LayoutFooter1 = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_LayoutTopbar1, null, null, _parent));
  _push(`<div class="wrapper mx-auto text-gray-900 font-normal max-w-[1320px]">`);
  _push(ssrRenderComponent(_component_LayoutHeader1, null, null, _parent));
  _push(`<div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_ElementsBackToTop, null, null, _parent));
  _push(ssrRenderComponent(_component_LayoutFooter1, null, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/layout2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const layout2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { layout2 as default };
//# sourceMappingURL=layout2-Dp-gJ26S.mjs.map
