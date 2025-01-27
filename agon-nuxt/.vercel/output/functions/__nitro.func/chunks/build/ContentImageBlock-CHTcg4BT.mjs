import { ref, computed, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0, M as ModalVideo } from './ModalVideo-DWaex42U.mjs';
import { useRoute } from 'vue-router';
import qs from 'qs';
import { e as useNuxtApp } from './server.mjs';
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

const _sfc_main = {
  __name: "ContentImageBlock",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const contentImageData = ref([]);
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const route = useRoute();
    const videoIsOpen = ref(false);
    const videoChannel = computed(() => "youtube");
    const videoId = computed(() => "QiqQoqtnHrk");
    const slug = route.params.slug;
    const queryParams = qs.stringify({
      filters: { PageURL: { $eq: slug } },
      populate: ["Blocks", "Blocks.image"]
    });
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/sitemaps?${queryParams}`, "$mByOMF3gWL")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      const blocks = ((_a = data.value.data[0]) == null ? void 0 : _a.Blocks) || [];
      contentImageData.value = blocks.filter((block) => block.__component === "page-blocks.content-image-block");
    } else if (error.value) {
      console.error("Error fetching data:", error.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (contentImageData.value !== null) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(contentImageData.value, (item, index) => {
          var _a2;
          _push(`<div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] text-center lg:mt-[137px]"><span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[18px]">${ssrInterpolate(item.subtitle)}</span><div class="text-center mb-[40px] md:mb-[62px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">${ssrInterpolate(item.title)}</h2></div><div class="relative mx-auto max-w-[1190px]"><img class="h-full w-full object-cover rounded-2xl"${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${(_a2 = item.image) == null ? void 0 : _a2.url}`)} alt="Agon"><button class="rounded-full bg-white grid place-items-center absolute play-video w-[60px] h-[60px] md:w-[138px] md:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><img${ssrRenderAttr("src", _imports_0)} alt="play button" width="26"></button></div></div>`);
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(ModalVideo, {
          channel: unref(videoChannel),
          videoId: unref(videoId),
          isOpen: videoIsOpen.value,
          "onUpdate:isOpen": ($event) => videoIsOpen.value = $event
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/ContentImageBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContentImageBlock-CHTcg4BT.mjs.map
