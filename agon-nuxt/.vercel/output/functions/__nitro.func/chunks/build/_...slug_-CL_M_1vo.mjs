import { _ as __nuxt_component_0 } from './nuxt-link-DwEQ30mH.mjs';
import { withAsyncContext, unref, mergeProps, withCtx, createVNode, useSSRContext, ref, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { e as useNuxtApp, f as _imports_0 } from './server.mjs';
import { _ as _sfc_main$3 } from './NuxtImg-zynjdDAX.mjs';
import MarkdownIt from 'markdown-it';
import { useRoute } from 'vue-router';
import { u as useFetch } from './fetch-5adf4HwG.mjs';
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
import './asyncData-J0SEPLbh.mjs';

const _sfc_main$2 = {
  __name: "RelatedBlogs",
  __ssrInlineRender: true,
  props: {
    blogs: {
      type: Array,
      default: () => []
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
      const _component_NuxtImg = _sfc_main$3;
      if (__props.blogs.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "related-blogs mt-[50px]" }, _attrs))}><div class="mb-[70px] md:mb-[90px]"><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]"> Related Blogs </h2></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
        ssrRenderList(__props.blogs, (blog, index) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: blog.slug,
            class: "block group",
            to: "/blog-details/" + blog.slug
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
                _push2(`</div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="${ssrRenderClass(`w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-${index % 10 + 1} group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]`)}"${_scopeId}></div></div></div></div><div class="flex items-center mb-[11px] gap-2"${_scopeId}><span class="font-chivo inline-block bg-bg-6 text-green-900 py-[10px] px-[18px] rounded-[50px] text-[14px] leading-[14px]"${_scopeId}>${ssrInterpolate(blog.tag)}</span><span class="inline-block text-[14px] leading-[14px]"${_scopeId}> \u{1F55B} ${ssrInterpolate(formatPublishedDate(blog.publishedAt))}</span></div><h3 class="text-[20px] font-semibold mt-3"${_scopeId}>${ssrInterpolate(blog.title)}</h3>`);
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
                  createVNode("h3", { class: "text-[20px] font-semibold mt-3" }, toDisplayString(blog.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogPost/RelatedBlogs.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "BlogDetails",
  __ssrInlineRender: true,
  props: {
    blogDetails: {
      type: Object,
      required: true
    },
    relatedBlogs: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const markdownParser = new MarkdownIt();
    const renderMarkdown = (content) => markdownParser.render(content);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtImg = _sfc_main$3;
      if (__props.blogDetails) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="full-width relative"><div class="aspect-[384/91] h-[350px] md:h-[455px]">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: `${unref(strapiBaseUrl)}${__props.blogDetails.featuredImage.url}`,
          alt: __props.blogDetails.featuredImage.alternativeText,
          width: __props.blogDetails.featuredImage.width || 50,
          height: __props.blogDetails.featuredImage.height || 50,
          format: "webp",
          class: "h-full w-full object-cover"
        }, null, _parent));
        _push(`</div><div class="absolute w-full h-full bg-gray-900 top-0 opacity-50"></div><div class="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-semibold text-white w-[18ch] lg:w-[25ch]">${ssrInterpolate(__props.blogDetails.title)}</h1></div></div><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto text-md text-gray-500 relative max-w-[830px] text-[14px] leading-[25px] md:text-[18px] md:leading-[32px]"><div class="blog-content prose-p:mb-6 prose-p:md:mb-9 prose-h2:font-bold prose-h2:font-chivo prose-h2:text-[25px] prose-h2:leading-[30px] prose-h2:md:text-heading-3 prose-h2:mb-6 prose-h2:text-gray-900 prose-h2:md:mb-9 prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6 prose-ul:md:mb-9 prose-h3:font-bold prose-h3:font-chivo prose-h3:text-[20px] prose-h3:leading-[26px] prose-h3:md:text-heading-4 prose-h3:text-gray-900 prose-h3:mb-6 prose-h3:md:mb-9 prose-h4:font-bold prose-h4:font-chivo prose-h4:text-[20px] prose-h4:leading-[26px] prose-h4:md:text-heading-5 prose-h4:text-gray-900 prose-h4:mb-6 prose-h4:md:mb-9">${(_a = renderMarkdown(__props.blogDetails.richText)) != null ? _a : ""}</div></div>`);
        _push(ssrRenderComponent(_sfc_main$2, { blogs: __props.relatedBlogs }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}><p>Blog not found.</p></div>`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogPost/BlogDetails.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const slug = route.params.slug;
    const { data: blogData, pending: isLoading, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${strapiBaseUrl}/api/blogs?filters[slug][$eq]=${slug}&populate=*`,
      "$fuaKcR5Kpa"
    )), __temp = await __temp, __restore(), __temp);
    const { data: relatedBlogs } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      `${strapiBaseUrl}/api/blogs?filters[slug][$ne]=${slug}&populate=*`,
      "$RZ59KPB1d0"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(isLoading)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center min-h-screen bg-gray-100 text-center" }, _attrs))}><p class="text-xl text-gray-600 font-semibold">Loading...</p></div>`);
      } else if (unref(error) || !unref(blogData) || !unref(blogData).data || unref(blogData).data.length === 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center" }, _attrs))}><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-extrabold mb-7 text-gray-800"> Whoops! That page doesn\u2019t exist. </h1><p class="font-bold font-chivo text-[14px] xl:text-heading-5 text-gray-500 mb-[70px]"> Sorry, the blog you are looking for does not exist or may have been removed. </p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 flex-row-reverse"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}> Back to Homepage </span><i${_scopeId}><img class="mr-4 rotate-180 filter-white w-[12px] group-hover:filter-black"${ssrRenderAttr("src", _imports_0)} alt="arrow right icon"${_scopeId}></i>`);
            } else {
              return [
                createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, " Back to Homepage "),
                createVNode("i", null, [
                  createVNode("img", {
                    class: "mr-4 rotate-180 filter-white w-[12px] group-hover:filter-black",
                    src: _imports_0,
                    alt: "arrow right icon"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_sfc_main$1, {
          blogDetails: unref(blogData).data[0],
          relatedBlogs: unref(relatedBlogs).data || []
        }, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog-details/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-CL_M_1vo.mjs.map
