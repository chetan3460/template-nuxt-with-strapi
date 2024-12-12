import { _ as __nuxt_component_0$1 } from './nuxt-link-CvGZZJI3.mjs';
import { useSSRContext, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './virtual_public-FuXTmLfm.mjs';
import { _ as _imports_13 } from './virtual_public-B7J_E0Te.mjs';
import { u as useHead, _ as _export_sfc } from './server.mjs';
import { _ as _imports_0$1 } from './virtual_public-DWP5uY88.mjs';
import { _ as _imports_1$1 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_2 } from './virtual_public-Cet6Xz5C.mjs';
import { _ as _imports_3 } from './virtual_public-6U-jVfO3.mjs';
import { _ as _imports_4 } from './virtual_public-BUWQ-iTC.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-bg-6 px-5 text-center flex flex-col items-center justify-center pt-[127px] pb-[300px] lg:pb-[400px]" }, _attrs))}><div class="max-w-[400px]"><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-[50px]">Let\u2019s join us</h2><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group py-[13px] md:px-[95px] px-[60px] rounded-md bg-white text-gray-500 hover:text-gray-900 flex-row-reverse w-fit mb-[30px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-md text-md font-chivo font-semibold"${_scopeId}>Sign up with Google</span><img class="mr-5"${ssrRenderAttr("src", _imports_0)} alt="google icon"${_scopeId}>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-md font-chivo font-semibold" }, "Sign up with Google"),
          createVNode("img", {
            class: "mr-5",
            src: _imports_0,
            alt: "google icon"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button><div class="flex items-center justify-center gap-[7px] mb-[25px]"><div class="bg-gray-300 w-[50px] h-[2px]"></div><p class="text-text text-gray-500">Or, sign up with your email</p><div class="bg-gray-300 w-[50px] h-[2px]"></div></div><form class="bg-white w-full p-8 shadow-3 rounded-[6px] md:p-12" action="#"><div class="relative mb-6"><input class="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" type="text" placeholder="Your name *" required>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-text text-green-900 absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Edit`);
      } else {
        return [
          createTextVNode("Edit")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="relative mb-6"><input class="outline-none flex-1 pr-3 border caret-green-900 w-full placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" type="text" placeholder="Your email *" required></div><div class="relative mb-6 last-of-type:mb-4"><input class="outline-none flex-1 pr-3 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" required type="password" name="password" id="password"><span class="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">Password</span><i class="absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]"><img${ssrRenderAttr("src", _imports_1)} alt="eye icon"></i></div><div class="relative mb-6 last-of-type:mb-4"><input class="outline-none flex-1 pr-3 border caret-green-900 w-full peer placeholder:text-gray-400 placeholder:text-text placeholder:font-chivo border-[#C2C8D0] rounded-[4px] py-[14px] pl-[16px] focus:border-green-900 focus:border-[2px]" required type="password" name="password" id="retype-password"><span class="text-gray-400 text-sm px-1 font-chivo font-medium absolute left-3 bg-white -translate-y-1/2 peer-focus:text-green-900">Re-type Password</span><i class="absolute hover:opacity-70 top-1/2 -translate-y-1/2 right-[12px]"><img${ssrRenderAttr("src", _imports_1)} alt="eye icon"></i></div><div class="flex items-center mb-6 gap-[7px]"><div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]"><input class="opacity-0 cursor-pointer relative z-10 peer" id="term" type="checkbox" name="term"><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"${ssrRenderAttr("src", _imports_13)} alt="checked icon"><div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-[#3B4256]"></div></div><span class="text-sm font-bold text-gray-500">Agree to `);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-green-900 hover:opacity-70",
    to: "/index"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`terms &amp; conditions`);
      } else {
        return [
          createTextVNode("terms & conditions")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</span></div><button class="mb-6 w-full text-white bg-green-900 transition-opacity duration-200 text-heading-6 font-chivo font-bold shadow-sm py-[13px] hover:opacity-75" type="submit">Continue</button><div class="flex gap-2"><p class="text-text text-gray-500">Already have an account?</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-green-900 hover:opacity-70",
    to: "/login"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p class="text-text"${_scopeId}>Sign in now</p>`);
      } else {
        return [
          createVNode("p", { class: "text-text" }, "Sign in now")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Signup/Section1.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width scale-75 translate-y-[-61%] mb-[-250px]" }, _attrs))}><div class="flex gap-[50px] ml-[-175px] lg:ml-[-315px]"><img class="rounded-2xl object-cover max-w-[332px] max-h-[403px]"${ssrRenderAttr("src", _imports_0$1)} alt="Agon"><img class="rounded-2xl relative object-cover bottom-[-170px] max-w-[281px] max-h-[325px]"${ssrRenderAttr("src", _imports_1$1)} alt="Agon"><img class="rounded-2xl relative object-cover w-[637px] h-[434px] bottom-[-50px]"${ssrRenderAttr("src", _imports_2)} alt="Agon"><img class="rounded-2xl relative object-cover bottom-[-270px] max-w-[253px] max-h-[293px]"${ssrRenderAttr("src", _imports_3)} alt="Agon"><img class="rounded-2xl object-cover relative max-w-[346px] max-h-[399px] bottom-[-90px]"${ssrRenderAttr("src", _imports_4)} alt="Agon"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Signup/Section2.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative signUp-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsSignupSection1 = __nuxt_component_0;
      const _component_SectionsSignupSection2 = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsSignupSection1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsSignupSection2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/signup/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D4QX8IuO.mjs.map
