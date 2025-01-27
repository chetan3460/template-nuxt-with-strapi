import { useSSRContext, ref, withAsyncContext, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { g as useHead, e as useNuxtApp, f as _imports_0 } from './server.mjs';
import { _ as _sfc_main$2 } from './BlogItem-Cg8DEZqi.mjs';
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
import 'vue-router';
import '@unhead/addons';
import '@unhead/schema-org/vue';
import './nuxt-link-DwEQ30mH.mjs';
import './NuxtImg-zynjdDAX.mjs';
import './asyncData-J0SEPLbh.mjs';

const _sfc_main$1 = {
  __name: "BlogList",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const blogPostData = ref([]);
    const searchQuery = ref("");
    const visibleBlogsCount = ref(3);
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const apiEndpoint = `${strapiBaseUrl}/api/blogs?populate=*`;
    [__temp, __restore] = withAsyncContext(() => useFetch(apiEndpoint, "$LaAR4L0rw8")), __temp = await __temp, __restore();
    const filteredBlogs = computed(() => {
      if (!searchQuery.value) {
        return blogPostData.value;
      }
      return blogPostData.value.filter((blog) => {
        var _a, _b;
        const title = ((_a = blog == null ? void 0 : blog.title) == null ? void 0 : _a.toLowerCase()) || "";
        const content = ((_b = blog == null ? void 0 : blog.richText) == null ? void 0 : _b.toLowerCase()) || "";
        console.log("Blog Title:", title);
        console.log("Blog Content:", content);
        return title.includes(searchQuery.value.toLowerCase()) || content.includes(searchQuery.value.toLowerCase());
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="full-width bg-bg-6 lg:py-20 py-14"><div class="text-center px-5"><h1 class="font-chivo font-bold lg:text-display-3 md:text-[45px] md:leading-[52px] text-[35px] leading-[42px] mb-7"> Our Blog</h1><p class="font-bold font-chivo text-[14px] md:text-heading-6 text-gray-600 mx-auto md:max-w-[55ch] mb-10"> From year to year we strive to invent the most innovative technology that is used by both small enterprises and space enterprises.</p></div><div class="rounded-2xl gap-5 mx-auto md:flex lg:gap-[40px] max-w-[700px]"><div class="flex-1 mb-[30px] px-[12px] md:px-[36px] xl:px-0"><form><div class="bg-white flex items-center justify-between p-3 rounded-[55px] relative"><div class="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none"><svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path></svg></div><input${ssrRenderAttr("value", searchQuery.value)} class="block w-full ps-10 text-base text-gray-900 rounded-lg outline-0" type="text" placeholder="Search blogs..."><button class="rounded-full bg-green-900 grid place-items-center w-[60px] h-[56px] min-w-[60px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_0)} alt=""></button></div></form></div></div>`);
      if (searchQuery.value) {
        _push(`<div class="p-4 mb-4 text-base text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 text-center max-w-[800px] mx-auto" role="alert"><span class="font-medium">${ssrInterpolate(filteredBlogs.value.length)} result</span>${ssrInterpolate(filteredBlogs.value.length !== 1 ? "s" : "")} found for &quot;${ssrInterpolate(searchQuery.value)}&quot; </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[138px]"><div class="lg:grid lg:grid-cols-3 lg:gap-x-3 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        blogPostData: filteredBlogs.value.slice(0, visibleBlogsCount.value)
      }, null, _parent));
      _push(`</div>`);
      if (visibleBlogsCount.value < filteredBlogs.value.length) {
        _push(`<button type="button" class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit mx-auto mt-[70px] lg:mt-[112px]"><span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold">Load more posts</span><i><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_0)} alt="arrow right icon"></i></button>`);
      } else {
        _push(`<!---->`);
      }
      if (filteredBlogs.value.length === 0 && searchQuery.value) {
        _push(`<div class="w-full p-4 mb-4 text-base text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 text-center inline-block" role="alert"><span class="font-medium">No results found for &quot;${ssrInterpolate(searchQuery.value)}&quot;</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Blog/BlogList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative blog-2-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsBlogList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsBlogList, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DaUk739S.mjs.map
