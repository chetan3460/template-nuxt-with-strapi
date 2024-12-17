import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc, a as _imports_0$1 } from './server.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { _ as _imports_0$2, a as _imports_1$1, b as _imports_2 } from './virtual_public-C3LypWMC.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'ipx';

const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-bg-2" }, _attrs))}><div class="text-center px-5 pt-[74px] pb-[90px]"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[22px]">Contact Us</h2><p class="text-text text-gray-500 mx-auto md:w-[49ch]">Equidem necessitatibus ei eam, ceteros expetenda hendrerit ei per, tation vituperatoribus ut.</p></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Contact/Section1.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0 = publicAssetsURL("/assets/images/mail.png");
const _imports_1 = publicAssetsURL("/assets/images/icons/icon-home-fill.svg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gray-100 relative p-[40px] md:pt-[91px] md:pr-[98px] md:pb-[86px] md:pl-[92px] mt-[150px] rounded-[58px]" }, _attrs))}><div class="mx-auto relative max-w-[1320px]"><img class="absolute right-0 max-w-[129px] top-[-50px]"${ssrRenderAttr("src", _imports_0)} alt="mail image"><p class="text-capitalized text-gray-500 uppercase tracking-[2px] mb-[15px]">Contact us</p><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[22px]">Have an project in mind?</h2><p class="text-text text-gray-600 mb-[30px] md:mb-[60px]">The right move at the right time saves your investment. live the dream of expanding your business.</p><div class="flex flex-col gap-8 mb-[15px] md:mb-[25px] lg:flex-row lg:gap-[50px] xl:gap-[98px]"><div><div class="flex gap-[13px] mb-[15px] md:mb-[25px]"><i><img${ssrRenderAttr("src", _imports_1)} alt="home icon"></i><p class="text-heading-6 font-bold font-chivo">Agon Studio</p></div><p class="text-text text-gray-600">4517 Washington Ave.</p><p class="text-text text-gray-600 mb-[10px] md:mb-[16px]">Manchester, Kentucky 39495</p><p class="text-text text-gray-600 underline">(239) 555-0108</p><p class="text-text text-gray-600 underline">contact@agon.com</p></div><form class="flex-1" action="/"><div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Enter your name"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Company (optional)"></div><div class="flex flex-col gap-6 mb-6 lg:flex-row xl:gap-[30px]"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Your email"><input class="outline-none flex-1 placeholder:text-gray-400 placeholder:text-md placeholder:font-chivo py-5 px-[30px]" type="text" placeholder="Phone number"></div><textarea class="w-full py-5 resize-none outline-0 px-[30px] max-h-[150px] mb-[35px] md:mb-[56px]" name="" cols="100" rows="10" placeholder="Tell us about yourself"></textarea><div class="flex flex-col gap-5"><button class="flex items-center transition-colors duration-200 px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] font-chivo font-semibold text-md md:text-lg text-white bg-gray-900 w-fit" type="submit"> Send Message<i><img class="ml-[7px] w-[12px] filter-white"${ssrRenderAttr("src", _imports_0$1)} alt="arrow right icon"></i></button><p class="text-md text-gray-500">By clicking contact us button, you agree our terms and policy,</p></div></form></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Contact/Section2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[138px]" }, _attrs))}><div class="text-center mb-[100px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-full">Our Location</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[743px]">In a professional context it often happens that private or corporate clients order a publication to publish news.</p></div><div class="justify-between lg:flex lg:items-center gap-[30px]"><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Office</h3><p class="text-[#7E7E7E] text-[14px] leading-[18px]">205 North Michigan Avenue, Suite 810</p><p class="text-[#7E7E7E] text-[14px] leading-[18px]">Chicago, 60601, USA</p><p class="text-[#7E7E7E] text-[14px] leading-[18px]">Phone: (123) 456-7890</p><p class="text-[#7E7E7E] text-[14px] leading-[18px]">Email: contact@Evara.com</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px] last:mb-0"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_1$1)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Studio</h3><p class="text-[#7E7E7E] text-[14px] leading-[18px]">205 North Michigan Avenue, Suite 810</p><p class="text-[#7E7E7E] text-[14px] leading-[18px]">Chicago, 60601, USA</p><p class="text-[#7E7E7E] text-[14px] leading-[18px]">Phone: (123) 456-7890</p><p class="text-[#7E7E7E] text-[14px] leading-[18px]">Email: contact@Evara.com</p></div></div><div class="flex items-start gap-5 transition-all duration-300 mb-[33px] hover:translate-y-[-3px] border-b border-gray-200 pb-[50px]"><img class="h-full w-full object-cover max-w-[64px]"${ssrRenderAttr("src", _imports_2)} alt="icon"><div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[14px]">Factory</h3><p class="text-[#7E7E7E] text-[14px] leading-[18px]">205 North Michigan Avenue, Suite 810</p><p class="text-[#7E7E7E] text-[14px] leading-[18px]">Chicago, 60601, USA</p><p class="text-[#7E7E7E] text-[14px] leading-[18px]">Phone: (123) 456-7890</p><p class="text-[#7E7E7E] text-[14px] leading-[18px]">Email: contact@Evara.com</p></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Contact/Section3.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative contact-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsContactSection1 = __nuxt_component_0;
      const _component_SectionsContactSection2 = __nuxt_component_1;
      const _component_SectionsContactSection3 = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsContactSection1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsContactSection2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsContactSection3, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-gPaIwXaA.mjs.map
