import { _ as __nuxt_component_0 } from './nuxt-link-DwEQ30mH.mjs';
import { _ as _sfc_main$1 } from './NuxtImg-zynjdDAX.mjs';
import { withCtx, unref, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { e as useNuxtApp } from './server.mjs';

const _sfc_main = {
  __name: "BlogItem",
  __ssrInlineRender: true,
  props: {
    blogPostData: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const formatPublishedDate = (dateString) => {
      const options = { month: "long", day: "numeric", year: "numeric" };
      return new Date(dateString).toLocaleDateString("en-GB", options);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<!--[-->`);
      ssrRenderList(__props.blogPostData, (blog, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: blog.id,
          class: "block group",
          to: `blog-details/${blog.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: `${unref(strapiBaseUrl)}${blog.image.url}`,
                alt: blog.image.alternativeText,
                width: blog.image.width || 50,
                height: blog.image.height || 50,
                format: "webp",
                class: "h-full w-full object-cover rounded-2xl z-10 relative"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="${ssrRenderClass(`w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-${index % 10 + 1} group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]`)}"${_scopeId}></div></div></div></div><div class="flex items-center mb-[11px] gap-2"${_scopeId}><span class="font-chivo inline-block bg-bg-6 text-green-900 py-[10px] px-[18px] rounded-[50px] text-[14px] leading-[14px]"${_scopeId}>${ssrInterpolate(blog.tag)}</span><span class="inline-block text-[14px] leading-[14px]"${_scopeId}> \u{1F55B} ${ssrInterpolate(formatPublishedDate(blog.publishedAt))}</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>${ssrInterpolate(blog.title)}</p>`);
            } else {
              return [
                createVNode("div", { class: "relative mb-16" }, [
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                      createVNode(_component_NuxtImg, {
                        src: `${unref(strapiBaseUrl)}${blog.image.url}`,
                        alt: blog.image.alternativeText,
                        width: blog.image.width || 50,
                        height: blog.image.height || 50,
                        format: "webp",
                        class: "h-full w-full object-cover rounded-2xl z-10 relative"
                      }, null, 8, ["src", "alt", "width", "height"])
                    ]),
                    createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                      createVNode("div", {
                        class: `w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-${index % 10 + 1} group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]`
                      }, null, 2)
                    ])
                  ])
                ]),
                createVNode("div", { class: "flex items-center mb-[11px] gap-2" }, [
                  createVNode("span", { class: "font-chivo inline-block bg-bg-6 text-green-900 py-[10px] px-[18px] rounded-[50px] text-[14px] leading-[14px]" }, toDisplayString(blog.tag), 1),
                  createVNode("span", { class: "inline-block text-[14px] leading-[14px]" }, " \u{1F55B} " + toDisplayString(formatPublishedDate(blog.publishedAt)), 1)
                ]),
                createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, toDisplayString(blog.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogPost/BlogItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=BlogItem-Cg8DEZqi.mjs.map
