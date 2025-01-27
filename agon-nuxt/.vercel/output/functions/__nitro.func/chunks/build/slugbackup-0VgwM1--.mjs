import { ref, computed, watchEffect, createVNode, resolveDynamicComponent, useSSRContext, defineAsyncComponent } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { e as useNuxtApp } from './server.mjs';
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

const _sfc_main = {
  __name: "slugbackup",
  __ssrInlineRender: true,
  setup(__props) {
    const resolveComponent = (componentName) => {
      const componentMap = {
        "page-blocks.hero-about-block": defineAsyncComponent(() => import('./HeroAboutBlock-Dq75WEvm.mjs')),
        "page-blocks.content-image-block": defineAsyncComponent(() => import('./ContentImageBlock-CHTcg4BT.mjs')),
        "page-blocks.cards-block": defineAsyncComponent(() => import('./CardsBlock-BOAy_G8w.mjs')),
        "page-blocks.process-block": defineAsyncComponent(() => import('./ProcessBlock-B579Y_M4.mjs')),
        "page-blocks.faq-block": defineAsyncComponent(() => import('./FaqBlock-Bb3Syfp0.mjs')),
        "page-blocks.service-page-banner-block": defineAsyncComponent(() => import('./ServicePageBannerBlock-DiOJvKmi.mjs')),
        "page-blocks.partner-block": defineAsyncComponent(() => import('./PartnerBlock-qkPkD9mG.mjs')),
        "page-blocks.card-block-layout-two": defineAsyncComponent(() => import('./CardBlockLayoutTwo-rvUDlke1.mjs')),
        "page-blocks.two-col-image-content-block": defineAsyncComponent(() => import('./TwoColImageContentBlock-Bfq4nd7N.mjs')),
        "page-blocks.contact-us": defineAsyncComponent(() => import('./ContactUs-D26PqnWQ.mjs'))
        // Add more block mappings here as needed
      };
      return componentMap[componentName] || null;
    };
    const sitemap = ref(null);
    const loadingMessage = ref("Loading or no data available...");
    const route = useRoute();
    const filteredBlocks = computed(() => {
      if (!sitemap.value || !Array.isArray(sitemap.value.Blocks)) return [];
      return sitemap.value.Blocks.filter(
        (block) => block && block.__component && resolveComponent(block.__component)
      );
    });
    const fetchData = async (slug) => {
      try {
        const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
        const response = await fetch(`${strapiBaseUrl}/api/sitemaps?populate=Blocks`);
        const data = await response.json();
        if (data == null ? void 0 : data.data) {
          const pageData = data.data.find(
            (item) => {
              var _a;
              return ((_a = item.PageURL) == null ? void 0 : _a.trim().toLowerCase()) === slug.trim().toLowerCase();
            }
          );
          if (!pageData) {
            console.error(`Page with slug "${slug}" not found.`);
            loadingMessage.value = `Error: Page with slug "${slug}" not found.`;
            return;
          }
          sitemap.value = pageData;
        } else {
          loadingMessage.value = "No data received from API.";
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        loadingMessage.value = "Failed to fetch data from the API.";
      }
    };
    watchEffect(() => {
      const slug = route.params.slug;
      if (slug) {
        sitemap.value = null;
        fetchData(slug);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (sitemap.value) {
        _push(`<div${ssrRenderAttrs(_attrs)}><h1>${ssrInterpolate(sitemap.value.PageTitle)}</h1><!--[-->`);
        ssrRenderList(filteredBlocks.value, (block) => {
          _push(`<div>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(resolveComponent(block.__component)), { data: block }, null), _parent);
          _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/test/slugbackup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=slugbackup-0VgwM1--.mjs.map
