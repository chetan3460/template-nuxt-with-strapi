import { useSSRContext, ref, mergeProps, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { u as useHead, _ as _export_sfc, a as _imports_1$1 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-CvGZZJI3.mjs';
import { _ as _imports_1, a as _imports_2, b as _imports_3 } from './virtual_public-5dCY9vD3.mjs';
import { _ as _imports_3$1 } from './virtual_public-DFfbIHzD.mjs';
import { _ as _imports_4 } from './virtual_public-B-EIOM7I.mjs';
import { _ as _imports_6 } from './virtual_public-ug1V0zRq.mjs';
import { _ as _imports_11 } from './virtual_public-D-HlBqo0.mjs';
import { _ as _imports_12 } from './virtual_public-MKHZdP9B.mjs';
import { _ as _imports_13 } from './virtual_public-B7J_E0Te.mjs';
import { _ as _imports_1$2 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_2$1 } from './virtual_public-BYCduXmb.mjs';
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

const _imports_0 = publicAssetsURL("/assets/images/hero-single.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width relative" }, _attrs))}><div class="aspect-[384/91] h-[350px] md:h-[455px]"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_0)} alt="Agon"></div><div class="absolute w-full h-full bg-gray-900 top-0 opacity-50"></div><div class="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[41px]">TECHNOLOGY NEWS</span><h1 class="font-chivo text-[35px] leading-[44px] sm:text-[46px] sm:leading-[52px] md:text-heading-1 font-semibold text-white w-[18ch] lg:w-[25ch]">Microsoft Patch Management For Home Users</h1></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Single/Section1.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_5 = publicAssetsURL("/assets/images/icons/icon-left-quote.svg");
const _imports_7 = publicAssetsURL("/assets/images/thumbnail-20.png");
const _imports_8 = publicAssetsURL("/assets/images/post-img-1.png");
const _imports_9 = publicAssetsURL("/assets/images/post-img-2.png");
const _imports_10 = publicAssetsURL("/assets/images/post-img-3.png");
const _sfc_main$2 = {
  __name: "Section2",
  __ssrInlineRender: true,
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] mx-auto text-md text-gray-500 relative blog-content max-w-[830px] text-[14px] leading-[25px] md:text-[18px] md:leading-[32px]" }, _attrs))}><div class="flex flex-col items-center gap-6 follow-scroll translate-x-[-106px] absolute top-0"><p class="text-heading-6 font-bold font-chivo text-gray-400">Share</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_2,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: "#" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_3,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="font-bold mb-6 md:mb-9">The fancy moon going in little artist painting. Thirty days of lavender in the dreamy light inside. Other perfect oh plants, for and again. I\u2019ve honey feeling. Caring dreamland projects noteworthy than minimal, their it oh pretty feeling may. Include pink be.</p><div class="flex items-center justify-between mb-7 md:mb-[57px]"><div class="flex items-center gap-[15px]"><img class="h-full w-full object-cover rounded-full max-w-[55px]"${ssrRenderAttr("src", _imports_3$1)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6">Jenny Wilson</p><p class="text-sm font-bold">August 25, 2024</p></div></div><span class="font-chivo inline-block bg-bg-6 text-green-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px]">18 comments</span></div><div class="mb-6 md:mb-9"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4)} alt="post image"></div><p class="mb-6 md:mb-9">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id conse ctetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellu s ut sit.</p><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-6 text-gray-900 md:mb-9">Use your headings</h2><p class="mb-6 md:mb-9">Thirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p><div class="bg-green-900 grid place-items-center px-5 rounded-[20px] pb-[45px] pt-[45px] md:pb-[77px] mb-[49px]"><div class="text-center max-w-[625px]"><img class="mb-5 mx-auto scale-75 md:mb-7 md:scale-100"${ssrRenderAttr("src", _imports_5)} alt="quote icon"><p class="text-white font-chivo mb-5 text-lead md:text-[32px] md:leading-[48px] md:mb-7">Blandit consequat feugiat sed dapibus lorem diam nibh venenatis sodales pulvinar augue adipiscing turpis nulla sit tincidunt non lacus sit amet et white dreamy dramatically place.</p><div class="flex items-center justify-center scale-75 gap-[15px] md:scale-100"><img class="h-full w-full object-cover rounded-full max-w-[55px]"${ssrRenderAttr("src", _imports_6)} alt="avatar"><p class="text-white font-bold font-chivo text-[22px] leading-[38px]">Ronald Richards</p></div></div></div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 text-gray-900 mb-6 md:mb-9">Smaller heading</h3><div class="flex gap-4 mb-6 flex-col md:flex-row md:mb-9"><div class="flex-1"><p class="mb-6 md:mb-9">TThirty there &amp; time wear across days, make inside on these you. Can young a really, roses blog small of song their dreamy life pretty? Because really duo living to noteworthy bloom bell. Transform clean daydreaming cute twenty process rooms cool. White white dreamy dramatically place everything although.</p><p>White white dreamy dramatically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade. Thirty she a studio of she whimsical projects, afternoon effect going an floated maybe.</p></div><div><img class="h-full w-full object-cover rounded-2xl"${ssrRenderAttr("src", _imports_7)} alt="Agon"></div></div><p class="mb-8 md:mb-12">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id consectetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellus ut sit.</p><figure class="mb-8 md:mb-12"><div class="grid md:grid-cols-2 gap-[30px]"><img class="h-full w-full object-cover rounded-2xl row-span-2"${ssrRenderAttr("src", _imports_8)} alt="post image"><img class="h-full w-full object-cover rounded-2xl"${ssrRenderAttr("src", _imports_9)} alt="post image"><img class="h-full w-full object-cover rounded-2xl"${ssrRenderAttr("src", _imports_10)} alt="post image"></div><figcaption class="text-center mt-4">furniture in your house</figcaption></figure><h2 class="font-bold font-chivo text-[25px] leading-[30px] md:text-heading-3 mb-10 text-gray-900">Use your headings</h2><p class="mb-[40px] md:mb-[71px]">Tortor placerat bibendum consequat sapien, facilisi facilisi pellentesque morbi. Id consectetur ut vitae a massa a. Lacus ut bibendum sollicitudin fusce sociis mi. Dictum volutpat praesent ornare accumsan elit venenatis. Congue sodales nunc quis ultricies odio porta. Egestas mauris placerat leo phasellus ut sit.</p><div class="w-full bg-gray-200 mb-7 h-[1px] md:mb-10"></div><div class="flex items-center gap-4 mb-10 flex-wrap md:mb-[60px]"><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-3 px-5 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-md font-normal"${_scopeId}>Nature</span>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-md font-normal" }, "Nature")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-3 px-5 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-md font-normal"${_scopeId}>Beauty</span>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-md font-normal" }, "Beauty")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-3 px-5 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-md font-normal"${_scopeId}>Travel tips</span>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-md font-normal" }, "Travel tips")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-3 px-5 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-md font-normal"${_scopeId}>House</span>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-md font-normal" }, "House")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 text-gray-900 mb-[35px] md:mb-[52px]">Comments</h2><div class="md:mb-[120px] mb-[60px]"><div class="flex items-start flex-col gap-5 md:gap-[100px] mb-[30px] md:mb-[42px] md:flex-row"><div class="flex items-center gap-[15px] w-[190px]"><img class="h-full w-full object-cover rounded-full max-w-[55px]"${ssrRenderAttr("src", _imports_3$1)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6">Jenny Wilson</p><p class="text-sm font-bold">August 25, 2024</p></div></div><p class="bg-gray-100 rounded-2xl rounded-tl-none pt-7 pl-7 text-gray-900 flex-1 pr-[15px] pb-[30px]">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.</p></div><div class="flex items-start flex-col gap-5 md:gap-[100px] mb-[30px] md:mb-[42px] md:flex-row"><div class="flex items-center gap-[15px] w-[190px]"><img class="h-full w-full object-cover rounded-full max-w-[55px]"${ssrRenderAttr("src", _imports_11)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6">Robert Fox</p><p class="text-sm font-bold">August 25, 2024</p></div></div><p class="bg-gray-100 rounded-2xl rounded-tl-none pt-7 pl-7 text-gray-900 flex-1 pr-[15px] pb-[30px]">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.</p></div><div class="flex items-start flex-col gap-5 md:gap-[100px] mb-[30px] md:mb-[42px] md:flex-row ml-[50px] md:ml-0"><div class="flex items-center gap-[15px] w-[190px] md:translate-x-[50px]"><img class="h-full w-full object-cover rounded-full max-w-[55px]"${ssrRenderAttr("src", _imports_12)} alt="avatar"><div><p class="line-clamp-2 font-bold mb-[3px] text-gray-900 text-heading-6">Eleanor Pena</p><p class="text-sm font-bold">August 25, 2024</p></div></div><p class="bg-gray-100 rounded-2xl rounded-tl-none pt-7 pl-7 text-gray-900 flex-1 pr-[15px] pb-[30px]">White white dreamy drama tically place everything although. Place out apartment afternoon whimsical kinder, little romantic joy we flowers handmade.</p></div></div><div class="w-full bg-gray-200 mb-7 h-[1px] md:mb-10"></div><h3 class="font-bold font-chivo text-[20px] leading-[26px] md:text-heading-4 text-gray-900 mb-[30px] md:mb-[42px]">Leave a comment</h3><form><textarea class="border border-gray-200 resize-none rounded-2xl w-full max-h-[140px] p-[26px] mb-[33px]" id="comment" name="comment" placeholder="Write a comment"></textarea><div class="flex items-start justify-between w-full flex-col gap-8 md:flex-row"><div class="flex items-start gap-3"><div class="relative w-7 h-7 transition-all duration-200 p-[5px] hover:bg-gray-200 rounded-[4px]"><input class="opacity-0 cursor-pointer relative z-10 peer" id="post-comment" type="checkbox" name="post-comment"><img class="absolute hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:block"${ssrRenderAttr("src", _imports_13)} alt="checked icon"><div class="absolute bg-transparent pointer-events-none z-0 border-[2px] rounded-[4px] w-[18px] h-[18px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer-checked:border-transparent border-[#3B4256]"></div></div><span class="text-md text-gray-400 max-w-[40ch]">Save my name, email, and website in this browser for the next time I comment.</span></div><button class="flex items-center transition-colors duration-200 px-5 py-[14px] rounded-[8px] text-text bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900" type="submit">Post comment</button></div></form></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Single/Section2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[80px] md:mt-[150px]" }, _attrs))}><div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-bg-6 md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]" padding="px-[15px] py-[50px] md:px-[52px] md:py-[72px]"><div class="flex-1 mb-[30px]"><p class="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">newsletter</p><h4 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">Subscribe our newsletter</h4><p class="text-text text-gray-500">By clicking the button, you are agreeing with our</p>`);
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
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_1$1)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$2)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2$1)} alt="Agon"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Single/Section3.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative single-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsSingleSection1 = __nuxt_component_0;
      const _component_SectionsSingleSection2 = _sfc_main$2;
      const _component_SectionsSingleSection3 = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsSingleSection1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsSingleSection2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsSingleSection3, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/single/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DbpnbLcT.mjs.map
