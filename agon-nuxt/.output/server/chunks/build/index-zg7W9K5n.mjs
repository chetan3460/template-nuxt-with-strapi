import { _ as __nuxt_component_0$1 } from './nuxt-link-BFJLsJpZ.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, resolveComponent, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { u as useHead, _ as _export_sfc, a as _imports_0 } from './server.mjs';
import { M as ModalVideo, _ as _imports_3$1 } from './virtual_public-nLEhPKKc.mjs';
import { _ as _imports_1 } from './virtual_public-XaGP-aac.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_1$1, a as _imports_2 } from './virtual_public-nUl_eC9X.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-bg-2" }, _attrs))}><div class="text-center px-5 pt-[74px] pb-[90px]"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mx-auto mb-[22px] md:w-[27ch]">Senior Full Stack Engineer, Creator Success Full Time</h2><div class="flex items-center justify-center">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-text",
    to: "/index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-text text-gray-500",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`/ Jobs details`);
      } else {
        return [
          createTextVNode("/ Jobs details")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CareerDetails/Section1.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_3 = publicAssetsURL("/assets/images/icons/icon-facebook-color.svg");
const _imports_4 = publicAssetsURL("/assets/images/icons/icon-twitter-color.svg");
const _imports_5 = publicAssetsURL("/assets/images/icons/icon-pinterest-color.svg");
const _sfc_main$2 = {
  components: {
    ModalVideo
  },
  data: () => {
    return {
      videoIsOpen: false
    };
  },
  methods: {
    openVideo() {
      this.videoIsOpen = !this.videoIsOpen;
    }
  },
  computed: {
    videoChannel: function() {
      return "youtube";
    },
    videoId: function() {
      return "QiqQoqtnHrk";
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto max-w-[1090px]"><div class="mx-auto max-w-[866px]"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">Job Description</h3><p class="text-text">The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency.</p><br><p class="text-text">The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p><br></div><div class="relative mx-auto max-w-[1190px]"><img class="h-full w-full object-cover rounded-2xl"${ssrRenderAttr("src", _imports_1)} alt="Agon"> <button class="rounded-full bg-white grid place-items-center absolute play-video w-[60px] h-[60px] md:w-[138px] md:h-[138px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><img${ssrRenderAttr("src", _imports_3$1)} alt="play button" width="26"></button><br></div><div class="mx-auto max-w-[866px]"><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">Essential Knowledge, Skills, and Experience</h3><ul class="list-disc pl-5"><li>A portfolio demonstrating well thought through and polished end to end customer journeys</li><li>5+ years of industry experience in interactive design and / or visual design</li><li>Excellent interpersonal skills</li><li>Aware of trends in\u202Fmobile, communications, and collaboration</li><li>Ability to create highly polished design prototypes, mockups, and other communication artifacts</li><li>The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li><li>History of impacting shipping products with your work</li><li>A Bachelor\u2019s Degree in Design (or related field) or equivalent professional experience</li><li>Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li></ul><br><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">Preferred Experience</h3><ul class="list-disc pl-5"><li>Designing user experiences for enterprise software / services</li><li>Creating and applying established design principles and interaction patterns</li><li>Aligning or influencing design thinking with teams working in other geographies</li></ul><br><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 mb-[17px]">Product Designer</h3><p class="text-text">Product knowledge: Deeply understand the technology and features of the product area to which you are assigned.</p><p class="text-text">Research: Provide human and business impact and insights for products.</p><p class="text-text">Deliverables: Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.</p><p class="text-text">Communication: Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.</p><div class="w-full opacity-10 h-[1px] bg-[#061224] mt-[50px] mb-[34px]"></div><div class="flex items-center justify-between flex-col md:flex-row gap-[30px]"><div class="flex items-center gap-[22px]"><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-green-900 text-white hover:bg-gray-900",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-chivo font-semibold"${_scopeId}>Apply Now</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-white"${ssrRenderAttr("src", _imports_0)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-heading-6 font-chivo font-semibold" }, "Apply Now"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-white group-hover:filter-white",
              src: _imports_0,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-heading-6 font-chivo font-semibold"${_scopeId}>Contact Us</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_0)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-heading-6 font-chivo font-semibold" }, "Contact Us"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_0,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="flex items-center gap-[15px]"><div class="border border-opacity-10 flex items-center border-[#061224] rounded-[5px] py-[10px] px-[15px] gap-[11px]"><img${ssrRenderAttr("src", _imports_3)} alt="social icon"><p class="text-text text-[#37404E]">Share</p></div><div class="border border-opacity-10 flex items-center border-[#061224] rounded-[5px] py-[10px] px-[15px] gap-[11px]"><img${ssrRenderAttr("src", _imports_4)} alt="social icon"><p class="text-text text-[#37404E]">Tweet</p></div><div class="border border-opacity-10 flex items-center border-[#061224] rounded-[5px] py-[10px] px-[15px] gap-[11px]"><img${ssrRenderAttr("src", _imports_5)} alt="social icon"><p class="text-text text-[#37404E]">Pin</p></div></div></div></div></div>`);
  _push(ssrRenderComponent(_component_modal_video, {
    channel: $options.videoChannel,
    videoId: $options.videoId,
    isOpen: _ctx.videoIsOpen,
    "onUpdate:isOpen": ($event) => _ctx.videoIsOpen = $event
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CareerDetails/Section2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px] mt-[86px]",
    padding: "px-[15px] py-[50px] md:px-[52px] md:py-[72px]"
  }, _attrs))}><div class="flex-1 mb-[30px]"><p class="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">newsletter</p><h4 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">Subscribe our newsletter</h4><p class="text-text text-gray-500">By clicking the button, you are agreeing with our</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-green-900",
    to: "/index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Term &amp; Conditions`);
      } else {
        return [
          createTextVNode("Term & Conditions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_0)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$1)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2)} alt="Agon"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/CareerDetails/Section3.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative career-details-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsCareerDetailsSection1 = __nuxt_component_0;
      const _component_SectionsCareerDetailsSection2 = __nuxt_component_1;
      const _component_SectionsCareerDetailsSection3 = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsCareerDetailsSection1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsCareerDetailsSection2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsCareerDetailsSection3, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/career-details/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-zg7W9K5n.mjs.map
