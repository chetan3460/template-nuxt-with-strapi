import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead, _ as _export_sfc } from './server.mjs';
import { _ as _imports_0$1 } from './virtual_public-Dje3ZdMY.mjs';
import { _ as _imports_1$1, a as _imports_2 } from './virtual_public-FjLltpP8.mjs';
import { _ as _imports_0$2 } from './virtual_public-iIVoVW3n.mjs';
import { _ as __nuxt_component_0$1 } from './Testimonial1-Bce7avcF.mjs';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'swiper/modules';
import 'swiper/vue';
import './virtual_public-MKHZdP9B.mjs';
import './virtual_public-B-ThRufd.mjs';
import './virtual_public-ug1V0zRq.mjs';
import './virtual_public-D-HlBqo0.mjs';

const _imports_0 = publicAssetsURL("/assets/images/icons/icon-search.svg");
const _imports_1 = publicAssetsURL("/assets/images/icons/icon-close-small.svg");
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-bg-2" }, _attrs))}><div class="px-5 mx-auto flex flex-col pt-[48px] pb-[56px] max-w-[1320px] gap-[40px] lg:flex-row lg:items-center"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[23px]">Join the community with more than 12,368 topics already created</h3><p class="text-text text-gray-400">Professional support team will solve your problem.</p></div><div><div class="border bg-white border-opacity-10 shadow-4 flex items-start whitespace-nowrap flex-col gap-5 border-[#061224] py-[25px] px-[28px] rounded-[15px] md:flex-row md:items-center"><div class="flex w-full"><img${ssrRenderAttr("src", _imports_0)} alt=""><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-0 px-[13px]" type="text" placeholder="Your question..."></div><div class="flex flex-col gap-5 md:flex-row"><div class="flex px-5 bg-gray-100 items-center py-[10px] rounded-[10px] gap-[15px]"><p class="text-text">Pricing plan</p><div class="h-5 w-5"><img${ssrRenderAttr("src", _imports_1)} alt="close icon"></div></div><button class="flex items-center transition-colors duration-200 py-[13px] px-[22px] rounded-[8px] text-heading-6 .font-bold bg-green-900 text-white w-fit">Find now</button></div></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Faqs2/Section1.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto lg:mt-[139px] max-w-[1160px]" }, _attrs))}><div class="text-center relative mb-[70px] md:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Frequently Asked Questions</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[51ch]">Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis a libero tempus, blandit and cursus varius and magnis sapien</p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[30px]"><div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2"><img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_0$1)} alt="icon"><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Market research</h3><p class="text-text text-gray-600">One make creepeth, man bearing theira firmament.</p></div><div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2"><img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Strategic Consulting</h3><p class="text-text text-gray-600">One make creepeth, man bearing theira firmament.</p></div><div class="rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-bg-2"><img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_2)} alt="icon"><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]">Cognitive Solution</h3><p class="text-text text-gray-600">One make creepeth, man bearing theira firmament.</p></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Faqs2/Section2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto lg:mt-[139px] max-w-[1248px]" }, _attrs))}><div class="grid grid-cols-1 md:grid-cols-2 gap-x-[70px] gap-y-[30px]"><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$2)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Can I see the demo before purchasing?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$2)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Can I use your system on different devices?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$2)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Can I import my sitemap to your system?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$2)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Can I cancel my subscription at any time?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$2)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">How can I switch my subscription between essential, and premium plan</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$2)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Is there an additional discount when paid annually?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$2)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">I have an issue with my account</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$2)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">What happens if I don\u2019t renew my license after one year?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$2)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">Do you have a free trial?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div><div class="flex items-start gap-3"><img${ssrRenderAttr("src", _imports_0$2)} alt="question icon"><div><h4 class="font-bold font-chivo text-[14px] xl:text-heading-5 mb-[14px]">What kind of payment methods do you provide?</h4><p class="text-text text-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p></div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Faqs2/Section3.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_SliderTestimonial1 = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[150px]" }, _attrs))}><div class="text-center mb-[30px] md:mb-[68px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">Still have a questions?</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:w-[62ch]">If you cannot find answer to your question in our FAQ, you can always contact us. We wil answer to you shortly! Meet our Support team</p></div>`);
  _push(ssrRenderComponent(_component_SliderTestimonial1, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Faqs2/Section4.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative faqs-2-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsFaqs2Section1 = __nuxt_component_0;
      const _component_SectionsFaqs2Section2 = __nuxt_component_1;
      const _component_SectionsFaqs2Section3 = __nuxt_component_2;
      const _component_SectionsFaqs2Section4 = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsFaqs2Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsFaqs2Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsFaqs2Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsFaqs2Section4, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faqs-2/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CkxXNKFP.mjs.map
