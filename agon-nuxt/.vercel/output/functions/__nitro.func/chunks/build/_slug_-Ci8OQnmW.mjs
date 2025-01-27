import { watchEffect, unref, mergeProps, createVNode, resolveDynamicComponent, useSSRContext, withCtx, toDisplayString, computed, toValue, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-DwEQ30mH.mjs';
import { p as publicAssetsURL, P as withoutTrailingSlash, M as defu, a4 as fixSlashes, B as parseURL, a5 as hasTrailingSlash, a6 as stringifyParsedURL, w as withTrailingSlash } from '../nitro/nitro.mjs';
import { _ as _export_sfc, a as useRouter, b as createSitePathResolver, u as useSiteConfig, d as useSchemaOrg } from './server.mjs';
import { defineBreadcrumb } from '@unhead/schema-org/vue';
import { u as useDynamicComponents } from './useDynamicComponents-CbeC4ghp.mjs';
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

const _imports_0 = publicAssetsURL("/assets/images/icons/icon-home-gray.svg");
const _imports_1 = publicAssetsURL("/assets/images/icons/icon-angle-right-gray.svg");
function pathBreadcrumbSegments(path, rootNode = "/") {
  const startNode = parseURL(path);
  const appendsTrailingSlash = hasTrailingSlash(startNode.pathname);
  const stepNode = (node, nodes = []) => {
    const fullPath = stringifyParsedURL(node);
    const currentPathName = node.pathname || "/";
    nodes.push(fullPath || "/");
    if (currentPathName !== rootNode && currentPathName !== "/") {
      node.pathname = currentPathName.substring(0, currentPathName.lastIndexOf("/"));
      if (appendsTrailingSlash)
        node.pathname = withTrailingSlash(node.pathname.substring(0, node.pathname.lastIndexOf("/")));
      stepNode(node, nodes);
    }
    return nodes;
  };
  return stepNode(startNode).reverse();
}
function useI18n() {
  const siteConfig = useSiteConfig();
  return {
    // eslint-disable-next-line unused-imports/no-unused-vars
    t: (_, fallback, options) => fallback,
    te: (_) => false,
    strategy: "no_prefix",
    defaultLocale: ref(siteConfig.defaultLocale || "en"),
    locale: ref(siteConfig.currentLocale || siteConfig.defaultLocale || "en")
  };
}
function withoutQuery(path) {
  return path.split("?")[0];
}
function titleCase(s) {
  return s.replaceAll("-", " ").replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.substr(1).toLowerCase());
}
function useBreadcrumbItems(options = {}) {
  const router = useRouter();
  const i18n = useI18n();
  const siteResolver = createSitePathResolver({
    canonical: true,
    absolute: true
  });
  const siteConfig = useSiteConfig();
  const items = computed(() => {
    var _a;
    let rootNode = "/";
    const current = withoutQuery(withoutTrailingSlash(toValue(options.path || ((_a = router.currentRoute.value) == null ? void 0 : _a.path)) || rootNode));
    const overrides = toValue(options.overrides) || [];
    const segments = pathBreadcrumbSegments(current, rootNode).map((path, index) => {
      let item = {
        to: path
      };
      if (typeof overrides[index] !== "undefined") {
        if (overrides[index] === false)
          return false;
        item = defu(overrides[index], item);
      }
      return item;
    });
    if (options.prepend)
      segments.unshift(...toValue(options.prepend));
    if (options.append)
      segments.push(...toValue(options.append));
    return segments.filter(Boolean).map((item) => {
      var _a2, _b;
      let fallbackLabel = titleCase(String((item.to || "").split("/").pop()));
      let fallbackAriaLabel = "";
      const route = (_b = (_a2 = router.resolve(item.to)) == null ? void 0 : _a2.matched) == null ? void 0 : _b[0];
      if (route) {
        const routeMeta = (route == null ? void 0 : route.meta) || {};
        if (routeMeta.breadcrumb) {
          item = {
            ...item,
            ...routeMeta.breadcrumb
          };
        }
        const routeName = String(route.name).split("___")[0];
        if (routeName === "index") {
          fallbackLabel = "Home";
        }
        fallbackLabel = routeMeta.breadcrumbLabel || routeMeta.breadcrumbTitle || routeMeta.title || fallbackLabel;
        fallbackLabel = i18n.t(`breadcrumb.items.${routeName}.label`, fallbackLabel, { missingWarn: true });
        fallbackAriaLabel = i18n.t(`breadcrumb.items.${routeName}.ariaLabel`, fallbackAriaLabel, { missingWarn: false });
      }
      item.label = item.label || fallbackLabel;
      item.ariaLabel = item.ariaLabel || fallbackAriaLabel || item.label;
      item.current = item.current || item.to === current;
      if (toValue(options.hideCurrent) && item.current)
        return false;
      return item;
    }).map((m) => {
      if (m && m.to) {
        m.to = fixSlashes(siteConfig.trailingSlash, m.to);
        if (m.to === rootNode && toValue(options.hideRoot))
          return false;
      }
      return m;
    }).filter(Boolean);
  });
  const schemaOrgEnabled = typeof options.schemaOrg === "undefined" ? true : options.schemaOrg;
  if (schemaOrgEnabled) {
    useSchemaOrg([
      defineBreadcrumb({
        id: `#${options.id || "breadcrumb"}`,
        itemListElement: computed(() => items.value.map((item) => ({
          name: item.label || item.ariaLabel,
          item: item.to ? siteResolver(item.to) : void 0
        })))
      })
    ]);
  }
  return items;
}
const _sfc_main$1 = {
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  setup(__props) {
    const items = useBreadcrumbItems();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": "Breadcrumbs",
        class: "flex items-center space-x-2 justify-center mb-6"
      }, _attrs))}><ul class="flex flex-wrap items-center whitespace-nowrap overflow-hidden text-ellipsis gap-[8px]">`);
      if (unref(items)[0]) {
        _push(`<li class="flex items-center gap-[8px]">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: unref(items)[0].to,
          class: "flex items-center space-x-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class=""${ssrRenderAttr("src", _imports_0)} alt="leaf icon"${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "",
                  src: _imports_0,
                  alt: "leaf icon"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<img${ssrRenderAttr("src", _imports_1)} alt="home icon"></li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(items).slice(1), (item, key) => {
        _push(`<li class="text-breadcrumb whitespace-break-spaces">`);
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({ ref_for: true }, item, { class: "flex items-center space-x-1 text-md text-gray-500 transition-colors duration-200 hover:text-gray-900 pointer-events-none" }), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${ssrInterpolate(item.label)}</span>`);
            } else {
              return [
                createVNode("span", null, toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/Breadcrumbs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const { sitemap, filteredBlocks, resolveComponent, fetchData, route } = useDynamicComponents("/api/sitemaps");
    watchEffect(() => {
      const slug = route.params.slug;
      if (slug && (!sitemap.value || sitemap.value.PageURL !== slug)) {
        sitemap.value = null;
        fetchData(slug);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(sitemap) && unref(filteredBlocks).length) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: unref(route).fullPath
        }, _attrs))} data-v-da79e4c7><div class="full-width bg-gray-100" data-v-da79e4c7><div class="text-center px-5 pt-[74px] pb-[90px]" data-v-da79e4c7>`);
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
        _push(`<h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] m-0" data-v-da79e4c7>${ssrInterpolate(unref(sitemap).PageTitle)}</h1></div></div><!--[-->`);
        ssrRenderList(unref(filteredBlocks), (block) => {
          _push(`<div data-v-da79e4c7>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(resolveComponent)(block.__component)), { data: block }, null), _parent);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da79e4c7"]]);

export { _slug_ as default };
//# sourceMappingURL=_slug_-Ci8OQnmW.mjs.map
