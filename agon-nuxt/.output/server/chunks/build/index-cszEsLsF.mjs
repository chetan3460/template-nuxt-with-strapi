import { resolveComponent, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useHead } from './server.mjs';
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
        class: "overflow-x-hidden w-screen relative services-1-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsServices1Section1 = resolveComponent("SectionsServices1Section1");
      const _component_SectionsServices1Section2 = resolveComponent("SectionsServices1Section2");
      const _component_SectionsServices1Section3 = resolveComponent("SectionsServices1Section3");
      const _component_SectionsServices1Section4 = resolveComponent("SectionsServices1Section4");
      const _component_SectionsServices1Section5 = resolveComponent("SectionsServices1Section5");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsServices1Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices1Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices1Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices1Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsServices1Section5, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services-1/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-cszEsLsF.mjs.map
