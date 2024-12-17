import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative home-page-2"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHome2Section1 = resolveComponent("SectionsHome2Section1");
      const _component_SectionsHome2Section2 = resolveComponent("SectionsHome2Section2");
      const _component_SectionsHome2Section3 = resolveComponent("SectionsHome2Section3");
      const _component_SectionsHome2Section4 = resolveComponent("SectionsHome2Section4");
      const _component_SectionsHome2Section5 = resolveComponent("SectionsHome2Section5");
      const _component_SectionsHome2Section6 = resolveComponent("SectionsHome2Section6");
      const _component_SectionsHome2Section7 = resolveComponent("SectionsHome2Section7");
      const _component_SectionsHome2Section8 = resolveComponent("SectionsHome2Section8");
      const _component_SectionsHome2Section9 = resolveComponent("SectionsHome2Section9");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsHome2Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section6, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section7, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section8, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome2Section9, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home-2/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DLeX4rjt.mjs.map
