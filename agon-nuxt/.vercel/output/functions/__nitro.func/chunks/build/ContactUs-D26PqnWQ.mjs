import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { e as useNuxtApp, j as useRoute, f as _imports_0$1 } from './server.mjs';
import { ref, watchEffect, useSSRContext } from 'vue';
import qs from 'qs';
import { u as useFetch } from './fetch-5adf4HwG.mjs';
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
import './asyncData-J0SEPLbh.mjs';

const _imports_0 = publicAssetsURL("/assets/images/mail.png");
const _imports_1 = publicAssetsURL("/assets/images/icons/icon-home-fill.svg");
const _sfc_main = {
  __name: "ContactUs",
  __ssrInlineRender: true,
  setup(__props) {
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const route = useRoute();
    const contactBlockData = ref([]);
    const formData = ref({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    });
    const formStatus = ref({
      success: null,
      message: ""
    });
    watchEffect(async () => {
      var _a;
      const slug = route.params.slug;
      if (slug) {
        try {
          const queryParams = qs.stringify({
            filters: {
              PageURL: {
                $eq: slug
              }
            },
            populate: [
              "Blocks"
            ]
          });
          const { data } = await useFetch(
            `${strapiBaseUrl}/api/sitemaps?${queryParams}`,
            "$UOup9RBOZS"
          );
          if (data.value) {
            const blocks = ((_a = data.value.data[0]) == null ? void 0 : _a.Blocks) || [];
            contactBlockData.value = blocks.filter((block) => block.__component === "page-blocks.contact-us");
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if ((_a = contactBlockData.value) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(_attrs)}><!--[-->`);
        ssrRenderList(contactBlockData.value, (item, index) => {
          _push(`<div class="bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-[150px] rounded-[58px]"><div class="mx-auto relative max-w-[1320px]"><img class="absolute right-0 max-w-[129px] top-[-50px]"${ssrRenderAttr("src", _imports_0)} alt="mail image"><p class="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">${ssrInterpolate(item.FormTitle)}</p><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">${ssrInterpolate(item.SectionTitle)}</h2><p class="text-text text-gray-600 mb-[30px] md:mb-[60px]">${ssrInterpolate(item.Content)}</p><div class="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]"><div><div class="flex gap-[13px] mb-[15px] md:mb-[25px]"><i><img${ssrRenderAttr("src", _imports_1)} alt="home icon"></i><p class="text-heading-6 font-bold font-chivo">Agon Studio</p></div><p class="text-text text-gray-600">4517 Washington Ave.</p><p class="text-text text-gray-600 mb-[10px] md:mb-[16px]">Manchester, Kentucky 39495</p><p class="text-text text-gray-600 underline">(239) 555-0108</p><p class="text-text text-gray-600 underline">contact@agon.com</p></div><form class="flex-1"><div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"${ssrRenderAttr("value", formData.value.name)} type="text" placeholder="Enter your name" required><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"${ssrRenderAttr("value", formData.value.company)} type="text" placeholder="Company (optional)"></div><div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"${ssrRenderAttr("value", formData.value.email)} type="email" placeholder="Your email" required><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]"${ssrRenderAttr("value", formData.value.phone)} type="tel" placeholder="Phone number"></div><textarea class="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]" placeholder="Tell us about yourself" required>${ssrInterpolate(formData.value.message)}</textarea><div class="flex flex-col gap-5"><button class="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 w-fit" type="submit"> Send Message <i><img class="ml-[7px] w-[12px] filter-white"${ssrRenderAttr("src", _imports_0$1)} alt="arrow right icon"></i></button>`);
          if (formStatus.value.success === true) {
            _push(`<p class="text-green-500">${ssrInterpolate(formStatus.value.message)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (formStatus.value.success === false) {
            _push(`<p class="text-red-500">${ssrInterpolate(formStatus.value.message)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></form></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/About/ContactUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ContactUs-D26PqnWQ.mjs.map
