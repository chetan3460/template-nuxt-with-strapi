import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_8$1 } from './virtual_public-CpP-F1uf.mjs';
import { _ as _export_sfc } from './server.mjs';

const _imports_8 = publicAssetsURL("/assets/images/thumbnail-22.png");
const _imports_0 = publicAssetsURL("/assets/images/avatar-1.png");
const _imports_1 = publicAssetsURL("/assets/images/avatar-2.png");
const _imports_2 = publicAssetsURL("/assets/images/avatar-3.png");
const _imports_3 = publicAssetsURL("/assets/images/avatar-4.png");
const _imports_4 = publicAssetsURL("/assets/images/avatar-5.png");
const _imports_5 = publicAssetsURL("/assets/images/avatar-6.png");
const _imports_6 = publicAssetsURL("/assets/images/avatar-7.png");
const _sfc_main = {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(ssrRenderComponent(_component_swiper, mergeProps({
    "slides-per-view": 5,
    "space-between": 0,
    loop: true,
    autoplay: {
      delay: 8e3,
      disableOnInteraction: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1
        //   spaceBetween: 30,
      },
      575: {
        slidesPerView: 2
        //   spaceBetween: 30,
      },
      767: {
        slidesPerView: 2
        //   spaceBetween: 30,
      },
      991: {
        slidesPerView: 2
        //   spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3
        //   spaceBetween: 30,
      },
      1350: {
        slidesPerView: 3
        //   spaceBetween: 30,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".tan1",
      prevEl: ".tap1"
    },
    modules: $setup.modules,
    class: "feedback-list ml-[-15px]"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]"${ssrRenderAttr("src", _imports_0)} alt="avatar"${_scopeId2}><p class="text-heading-6 font-chivo font-bold mb-[6px]"${_scopeId2}>Wade Warren</p><p class="text-sm font-bold mb-5 text-gray-700"${_scopeId2}>Louis Vuitton</p><p class="text-text text-gray-500"${_scopeId2}>Even factoring differences in body weight between children and adults into account.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                  src: _imports_0,
                  alt: "avatar"
                }),
                createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
                createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
                createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]"${ssrRenderAttr("src", _imports_1)} alt="avatar"${_scopeId2}><p class="text-heading-6 font-chivo font-bold mb-[6px]"${_scopeId2}>Wade Warren</p><p class="text-sm font-bold mb-5 text-gray-700"${_scopeId2}>Louis Vuitton</p><p class="text-text text-gray-500"${_scopeId2}>Even factoring differences in body weight between children and adults into account.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                  src: _imports_1,
                  alt: "avatar"
                }),
                createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
                createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
                createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]"${ssrRenderAttr("src", _imports_2)} alt="avatar"${_scopeId2}><p class="text-heading-6 font-chivo font-bold mb-[6px]"${_scopeId2}>Wade Warren</p><p class="text-sm font-bold mb-5 text-gray-700"${_scopeId2}>Louis Vuitton</p><p class="text-text text-gray-500"${_scopeId2}>Even factoring differences in body weight between children and adults into account.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                  src: _imports_2,
                  alt: "avatar"
                }),
                createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
                createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
                createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]"${ssrRenderAttr("src", _imports_3)} alt="avatar"${_scopeId2}><p class="text-heading-6 font-chivo font-bold mb-[6px]"${_scopeId2}>Wade Warren</p><p class="text-sm font-bold mb-5 text-gray-700"${_scopeId2}>Louis Vuitton</p><p class="text-text text-gray-500"${_scopeId2}>Even factoring differences in body weight between children and adults into account.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                  src: _imports_3,
                  alt: "avatar"
                }),
                createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
                createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
                createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]"${ssrRenderAttr("src", _imports_4)} alt="avatar"${_scopeId2}><p class="text-heading-6 font-chivo font-bold mb-[6px]"${_scopeId2}>Wade Warren</p><p class="text-sm font-bold mb-5 text-gray-700"${_scopeId2}>Louis Vuitton</p><p class="text-text text-gray-500"${_scopeId2}>Even factoring differences in body weight between children and adults into account.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                  src: _imports_4,
                  alt: "avatar"
                }),
                createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
                createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
                createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]"${ssrRenderAttr("src", _imports_5)} alt="avatar"${_scopeId2}><p class="text-heading-6 font-chivo font-bold mb-[6px]"${_scopeId2}>Wade Warren</p><p class="text-sm font-bold mb-5 text-gray-700"${_scopeId2}>Louis Vuitton</p><p class="text-text text-gray-500"${_scopeId2}>Even factoring differences in body weight between children and adults into account.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                  src: _imports_5,
                  alt: "avatar"
                }),
                createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
                createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
                createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]"${ssrRenderAttr("src", _imports_6)} alt="avatar"${_scopeId2}><p class="text-heading-6 font-chivo font-bold mb-[6px]"${_scopeId2}>Wade Warren</p><p class="text-sm font-bold mb-5 text-gray-700"${_scopeId2}>Louis Vuitton</p><p class="text-text text-gray-500"${_scopeId2}>Even factoring differences in body weight between children and adults into account.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                  src: _imports_6,
                  alt: "avatar"
                }),
                createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
                createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
                createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]"${ssrRenderAttr("src", _imports_8$1)} alt="avatar"${_scopeId2}><p class="text-heading-6 font-chivo font-bold mb-[6px]"${_scopeId2}>Wade Warren</p><p class="text-sm font-bold mb-5 text-gray-700"${_scopeId2}>Louis Vuitton</p><p class="text-text text-gray-500"${_scopeId2}>Even factoring differences in body weight between children and adults into account.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                  src: _imports_8$1,
                  alt: "avatar"
                }),
                createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
                createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
                createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                src: _imports_0,
                alt: "avatar"
              }),
              createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
              createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
              createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                src: _imports_1,
                alt: "avatar"
              }),
              createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
              createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
              createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                src: _imports_2,
                alt: "avatar"
              }),
              createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
              createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
              createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                src: _imports_3,
                alt: "avatar"
              }),
              createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
              createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
              createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-4" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                src: _imports_4,
                alt: "avatar"
              }),
              createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
              createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
              createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-6" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                src: _imports_5,
                alt: "avatar"
              }),
              createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
              createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
              createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-10" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                src: _imports_6,
                alt: "avatar"
              }),
              createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
              createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
              createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "p-10 transition-all duration-300 border-[10px] mx-[15px] hover:translate-y-[-2px] mt-[2px] border-bg-9" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover max-w-[55px] max-h-[55px] mb-[22px]",
                src: _imports_8$1,
                alt: "avatar"
              }),
              createVNode("p", { class: "text-heading-6 font-chivo font-bold mb-[6px]" }, "Wade Warren"),
              createVNode("p", { class: "text-sm font-bold mb-5 text-gray-700" }, "Louis Vuitton"),
              createVNode("p", { class: "text-text text-gray-500" }, "Even factoring differences in body weight between children and adults into account.")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/slider/Testimonial1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _imports_8 as _, __nuxt_component_0 as a };
//# sourceMappingURL=Testimonial1-CcdhIxve.mjs.map
