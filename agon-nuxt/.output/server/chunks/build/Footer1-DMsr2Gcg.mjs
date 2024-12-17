import { _ as __nuxt_component_0 } from './nuxt-link-BFJLsJpZ.mjs';
import { useSSRContext, ref, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_0$2 = publicAssetsURL("/assets/images/icons/icon-caret.svg");
const _imports_1$1 = publicAssetsURL("/assets/images/icons/icon-edit.svg");
const _imports_2$1 = publicAssetsURL("/assets/images/icons/icon-document-signed.svg");
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<ul${ssrRenderAttrs(mergeProps({ class: "navbar flex flex-col justify-center font-chivo gap-[34px] lg:flex-row" }, _attrs))}><li class="flex items-center group">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]",
    to: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home `);
      } else {
        return [
          createTextVNode("Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex items-center group">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]",
    to: "/about-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` About`);
      } else {
        return [
          createTextVNode(" About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex items-center group">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]",
    to: "/services-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Services`);
      } else {
        return [
          createTextVNode(" Services")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="flex items-center group">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog `);
      } else {
        return [
          createTextVNode("Blog ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<i><img class="icon-caret group-hover:filter-green"${ssrRenderAttr("src", _imports_0$2)} alt="caret"></i><ul class="menu-child opacity-0 bg-white top-full z-50 py-2 grid menu-shadow -translate-x-6 translate-y-8 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto lg:absolute rounded-[4px] group-hover:grid group-hover:opacity-100 before:content-[&#39;&#39;] before:block before:absolute before:w-full before:h-12 before:top-[-35px] before:left-0 grid-cols-1 w-[185px]"><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="b1">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/blog-1"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Blog 01</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_1$1,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Blog 01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="b2">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/blog-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Blog 02</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_1$1,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Blog 02")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="hr px-[22px]"><span class="block bg-gray-100 w-full h-[1px] my-[5px]"></span></li><li class="menu-child-item font-chivo group transition-all duration-200 py-[10px] px-[22px] hover:filter-green hover:pl-[25px] hover:opacity-100" data-menu="single">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center text-[14px]",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]"${ssrRenderAttr("src", _imports_2$1)} alt=""${_scopeId}><span class="whitespace-nowrap"${_scopeId}>Blog Single</span>`);
      } else {
        return [
          createVNode("img", {
            class: "opacity-40 w-[12px] h-[12px] mr-[8px] -translate-y-[1px]",
            src: _imports_2$1,
            alt: ""
          }),
          createVNode("span", { class: "whitespace-nowrap" }, "Blog Single")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="flex items-center group">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "hover:text-green-900 text-base font-inter menu-link lg:text-heading-6 mr-[7px]",
    to: "/contact"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Contact`);
      } else {
        return [
          createTextVNode(" Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Menu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = publicAssetsURL("/assets/images/logo.svg");
const _sfc_main$2 = {
  __name: "Header1",
  __ssrInlineRender: true,
  setup(__props) {
    const scroll = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_LayoutMenu = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["h-auto full-width relative py-[15px] first-letter:lg:py-[26px]", { "sticky-header": scroll.value }]
      }, _attrs))}><div class="px-[12px] md:px-[36px] xl:px-0 mt-0 flex items-center justify-between mx-auto relative max-w-[1320px]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex",
        href: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]"${ssrRenderAttr("src", _imports_0$1)} alt="logo image"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "logo z-50 w-[90px] md:w-[101px] lg:w-[122px] xl:w-[138px]",
                src: _imports_0$1,
                alt: "logo image"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="z-50 absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:block">`);
      _push(ssrRenderComponent(_component_LayoutMenu, null, null, _parent));
      _push(`</nav></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Header1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/assets/images/icons/icon-up.svg");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "bg fixed bottom-28 rounded-full grid place-items-center opacity-0 invisible transition-all duration-300 right-[20px] z-[9999] w-[48px] h-[48px]",
    id: "backToTop"
  }, _attrs))}><a class="rounded-full bg-green-900 grid place-items-center w-[48px] h-[48px]" href="#top"><img${ssrRenderAttr("src", _imports_0)} alt="to top icon"></a></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/BackToTop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_1 = publicAssetsURL("/assets/images/icons/icon-facebook-green.svg");
const _imports_2 = publicAssetsURL("/assets/images/icons/icon-instagram-green.svg");
const _imports_3 = publicAssetsURL("/assets/images/icons/icon-twitter-green.svg");
const _imports_4 = publicAssetsURL("/assets/images/icons/icon-linkedin-green.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "mt-[92px] lg:mt-[150px] xl:mt-[200px] mb-[30px]" }, _attrs))}><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]"><div class="flex flex-col items-center gap-2 mb-14 md:flex-row md:justify-between"><img class="h-full w-full object-cover max-w-[162px]"${ssrRenderAttr("src", _imports_0$1)} alt="logo"><div class="flex items-center flex-col gap-5 md:flex-row lg:gap-[30px]"><p class="text-heading-6 font-chivo font-bold">Ready to get started?</p><button type="button"><a class="flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 w-fit" href="#"><span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold">Create an Account</span></a></button></div></div><div class="w-full bg-gray-200 h-[1px] mb-[52px]"></div><div class="text-gray-600 grid gird-cols-1 gap-8 mb-[48px] md:grid-cols-2 lg:grid-cols-5 xl:gap-[98px]"><div><h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Contact</h5><p class="text-text mb-5">4517 Washington Ave. Manchester, Kentucky 39495</p><p class="text-text underline">(239) 555-0108</p><p class="text-text underline">contact@agon.com</p></div><div><h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">About Us</h5><ul><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Mission &amp; Vision</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Our Team</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Careers</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Press &amp; Media</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Advertising</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Testimonials</a></li></ul></div><div><h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Discover</h5><ul><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Our Blog</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Plans &amp; Pricing</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Knowledge Base</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Cookie Policy</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Office Center</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">News &amp; Events</a></li></ul></div><div><h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Support</h5><ul><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">FAQs</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Editor Help</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Community</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Live Chatting</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Contact Us</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Support Center</a></li></ul></div><div><h5 class="text-heading-5 font-chivo font-bold text-gray-900 mb-5 text-[18px]">Useful links</h5><ul><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Request an offer</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">How it works</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Pricing</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Reviews</a></li><li class="mb-2"><a class="transition-all duration-200 hover:text-green-900 hover:pl-[3px]" href="#">Stories</a></li></ul></div></div><div class="w-full bg-gray-200 h-[1px] mb-[46px]"></div><div class="text-gray-400 lg:flex lg:items-center lg:justify-between"><div class="md:flex md:items-center md:gap-6"><p class="text-lead font-bold">\xA9Agon Official 2024</p><div class="flex items-center justify-between md:gap-6"><a class="text-text" href="#">Privacy policy</a><a class="text-text" href="#">Cookies</a><a class="text-text" href="#">Terms of service</a></div></div><div class="flex items-center justify-center gap-5 mt-5 lg:mt-0"><a class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_1)} alt="facebook icon"></a><a class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2)} alt="instagram icon"></a><a class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_3)} alt="twitter icon"></a><a class="w-8 h-8 transition-all duration-300 hover:opacity-70 hover:-translate-y-1" href="#"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="linkedin icon"></a></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/layout/Footer1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _sfc_main$2 as _, __nuxt_component_2 as a, __nuxt_component_3 as b };
//# sourceMappingURL=Footer1-DMsr2Gcg.mjs.map
