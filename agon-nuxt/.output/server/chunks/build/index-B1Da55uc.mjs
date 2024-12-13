import { _ as __nuxt_component_0 } from './nuxt-link-BFJLsJpZ.mjs';
import { useSSRContext, ref, withAsyncContext, computed, withCtx, createVNode, toDisplayString, createTextVNode, unref, mergeProps, toValue, reactive, resolveComponent, shallowRef, toRef, getCurrentInstance, onServerPrefetch } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { u as useHead, c as useNuxtApp, a as _imports_1$1, _ as _export_sfc, f as fetchDefaults, d as asyncDataDefaults, e as createError } from './server.mjs';
import { _ as _imports_3, M as ModalVideo } from './virtual_public-nLEhPKKc.mjs';
import { p as hash } from '../nitro/nitro.mjs';
import { _ as _imports_0$3, a as _imports_1$3, b as _imports_2$2, c as _imports_3$1, d as _imports_4, e as _imports_5 } from './virtual_public-DSob6RUo.mjs';
import { _ as _imports_0$4 } from './virtual_public-edIg6YOR.mjs';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _imports_0$5 } from './virtual_public-9znkGGCe.mjs';
import { _ as _imports_4$1 } from './virtual_public-BUWQ-iTC.mjs';
import { _ as _imports_2$3 } from './virtual_public-Cet6Xz5C.mjs';
import { _ as _imports_4$2 } from './virtual_public-B-EIOM7I.mjs';
import { _ as _imports_8 } from './virtual_public-BWmlYrrs.mjs';
import { _ as _imports_0$6 } from './virtual_public-Bu2XTia_.mjs';
import { _ as _imports_2$4, a as _imports_4$3, b as _imports_6 } from './virtual_public-DL0aym9q.mjs';
import { _ as _imports_3$2 } from './virtual_public-DwzqiSUB.mjs';
import { _ as _imports_3$3 } from './virtual_public-DWqgV7xc.mjs';
import { _ as _imports_1$4 } from './virtual_public-C3wDJg80.mjs';
import { _ as _imports_0$7 } from './virtual_public-DTZSeK32.mjs';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _imports_0$8 } from './virtual_public-Dje3ZdMY.mjs';
import { _ as _imports_1$5, a as _imports_2$5 } from './virtual_public-FjLltpP8.mjs';
import { _ as __nuxt_component_0$1 } from './Testimonial1-Bce7avcF.mjs';
import { _ as _imports_0$9, a as _imports_1$6 } from './virtual_public-BzD1hskI.mjs';
import { _ as _imports_0$2 } from './virtual_public-BjNzXJKo.mjs';
import { _ as _imports_1$2, a as _imports_2$1 } from './virtual_public-BjCH7PF9.mjs';
import { _ as _imports_2$6 } from './virtual_public-BYCduXmb.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './virtual_public-MKHZdP9B.mjs';
import './virtual_public-B-ThRufd.mjs';
import './virtual_public-ug1V0zRq.mjs';
import './virtual_public-D-HlBqo0.mjs';

function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = asyncDataDefaults.errorValue;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main$a = {
  __name: "Section1",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const strapiBaseUrl = useNuxtApp().$strapiBaseUrl;
    const bannerBlock = ref(null);
    const { data, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${strapiBaseUrl}/api/banner-block?populate=*`, "$Z0s5OE3hU7")), __temp = await __temp, __restore(), __temp);
    if (data.value) {
      bannerBlock.value = data.value.data;
    } else if (error.value) {
      console.error("Error fetching data:", error.value);
    }
    const videoIsOpen = ref(false);
    const openVideo = () => {
      videoIsOpen.value = !videoIsOpen.value;
    };
    const videoChannel = computed(() => {
      return "youtube";
    });
    const videoId = computed(() => {
      return "QiqQoqtnHrk";
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><div class="full-width banner-hero bg-orange-100 banner-1">`);
      if (bannerBlock.value !== null) {
        _push(`<div class="px-[12px] md:px-[36px] xl:px-0 mt-0 z-10 relative mx-auto py-[60px] max-w-[1320px] lg:flex lg:items-center"><div class="flex-1"><h1 class="font-chivo font-bold lg:text-display-2 md:text-[64px] md:leading-[70px] sm:text-[50px] sm:leading-[58px] text-[40px] leading-[48px] mb-[40px]">${(_a2 = bannerBlock.value.title) != null ? _a2 : ""}</h1><p class="text-quote md:text-lead-lg text-gray-500 pr-[40px] lg:pr-[60px] mb-[40px]">${ssrInterpolate(bannerBlock.value.description)}</p><div class="flex items-center justify-start"><button type="button">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black text-heading-6 tracking-wide mr-[22px] hover:translate-y-[-2px]",
          to: bannerBlock.value.btnLink
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>${ssrInterpolate(bannerBlock.value.btnText)}</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
            } else {
              return [
                createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, toDisplayString(bannerBlock.value.btnText), 1),
                createVNode("i", null, [
                  createVNode("img", {
                    class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                    src: _imports_1$1,
                    alt: "arrow right icon"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-base flex items-center font-chivo font-bold text-[18px] leading-[18px] gap-[5px]",
          to: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Learn More <i${_scopeId}><img class="ml-[7px] w-[12px]"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
            } else {
              return [
                createTextVNode("Learn More "),
                createVNode("i", null, [
                  createVNode("img", {
                    class: "ml-[7px] w-[12px]",
                    src: _imports_1$1,
                    alt: "arrow right icon"
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="hidden relative flex-1 h-auto self-stretch lg:block"><div class="absolute w-full left-20 animate-hero-thumb-sm-animation bottom-[-60px] max-w-[526px]"><img${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${(_a = bannerBlock.value.bannerImage) == null ? void 0 : _a.url}`)} class="h-full w-full object-cover" alt="image"></div><div class="absolute opacity-80 animate-float max-w-[176px] bottom-[10%] -translate-x-1/3"><div class="relative bg-green-900 bg-opacity-80 rounded-2xl grid place-items-center"><img class="h-full w-full object-cover"${ssrRenderAttr("src", `${unref(strapiBaseUrl)}${(_b = bannerBlock.value.videoImg) == null ? void 0 : _b.url}`)} alt="Agon"><p class="text-heading-4 absolute text-white font-chivo font-bold ml-[49px]">Watch intro video </p><button class="rounded-full bg-white grid place-items-center absolute play-video w-[64px] h-[64px] left-[-15%]"><img${ssrRenderAttr("src", _imports_3)} alt="play button" width="15"></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(ModalVideo, {
        channel: videoChannel.value,
        videoId: videoId.value,
        isOpen: videoIsOpen.value,
        "onUpdate:isOpen": ($event) => videoIsOpen.value = $event,
        onToggleVideo: openVideo
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section1.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}><div class="grid grid-cols-2 md:grid-cols-4 gap-x-[24px] lg:grid-cols-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0$3)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0$3,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_1$3)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_1$3,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_2$2)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_2$2,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_3$1)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_3$1,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-2 lg:col-start-auto",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_4)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_4,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "transition-all duration-300 partner-item p-[15px] md:pr-[15px] xl:w-auto lg:w-[184px] hover:translate-y-[-3px] md:col-start-3 lg:col-start-auto",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_5)} alt="partner logo"${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_5,
            alt: "partner logo"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section2.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$7]]);
const _imports_2 = publicAssetsURL("/assets/images/icons/pattern-3.svg");
const _sfc_main$8 = {
  components: {
    ModalVideo
  },
  data() {
    return {
      selectedTab: 0,
      videoIsOpen: false
    };
  },
  methods: {
    selectTab(index) {
      this.selectedTab = index;
    },
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
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_modal_video = resolveComponent("modal-video");
  _push(`<!--[--><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px]"><div class="text-center"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]"> See why we are trusted the world over</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum \u2014 semper quis lectus nulla. </p></div><div class="flex items-center gap-5 justify-center flex-wrap mx-auto w-full mt-[90px] sm:w-[80%] xl:w-full mb-[58px]"><p class="${ssrRenderClass([{ "active": $data.selectedTab === 0 }, "text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"])}" id="branding">Branding</p><p class="${ssrRenderClass([{ "active": $data.selectedTab === 1 }, "text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"])}" id="development">Development</p><p class="${ssrRenderClass([{ "active": $data.selectedTab === 2 }, "text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"])}" id="animation">Animation</p><p class="${ssrRenderClass([{ "active": $data.selectedTab === 3 }, "text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"])}" id="user-exp">User Experience</p><p class="${ssrRenderClass([{ "active": $data.selectedTab === 4 }, "text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"])}" id="social-network">Social Network</p><p class="${ssrRenderClass([{ "active": $data.selectedTab === 5 }, "text-gray-600 font-bold bg-gray-100 rounded-full border-transparent transition-all duration-200 cursor-pointer tab-item font-chivo text-sm px-5 py-[10px] text-[14px] leading-[18px] lg:text-[18px] lg:leading-[22px] lg:px-[32px] lg:py-[22px] hover:bg-transparent hover:text-green-900 border-[2px] hover:border-green-900 hover:translate-y-[-2px]"])}" id="marketing">Marketing</p></div><div class="${ssrRenderClass([{ "!hidden": $data.selectedTab !== 0 }, "tab-content lg:gap-[30px] lg:flex bg-bg-2 branding"])}" style="${ssrRenderStyle($data.selectedTab === 0 ? null : { display: "none" })}"><div class="p-5 md:p-[60px] lg:w-1/2"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Optimize and scale, easy to start </h2><p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1$1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="relative lg:w-1/2"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_0$4)} alt="Agon"><img class="absolute top-0 right-0"${ssrRenderAttr("src", _imports_2)} alt="pattern"><button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img${ssrRenderAttr("src", _imports_3)} alt="play button" width="30"></button></div></div><div class="${ssrRenderClass([{ "!hidden": $data.selectedTab !== 1 }, "tab-content lg:gap-[30px] lg:flex bg-bg-3 development"])}" style="${ssrRenderStyle($data.selectedTab === 1 ? null : { display: "none" })}"><div class="p-5 md:p-[60px] lg:w-1/2"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Design Studios That Everyone Should Know </h2><p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1$1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="relative lg:w-1/2"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_0$5)} alt="Agon"><img class="absolute top-0 right-0"${ssrRenderAttr("src", _imports_2)} alt="pattern"><button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img${ssrRenderAttr("src", _imports_3)} alt="play button" width="30"></button></div></div><div class="${ssrRenderClass([{ "!hidden": $data.selectedTab !== 2 }, "tab-content lg:gap-[30px] lg:flex bg-bg-4 animation"])}" style="${ssrRenderStyle($data.selectedTab === 2 ? null : { display: "none" })}"><div class="p-5 md:p-[60px] lg:w-1/2"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">We can blend colors multiple ways </h2><p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1$1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="relative lg:w-1/2"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4$1)} alt="Agon"><img class="absolute top-0 right-0"${ssrRenderAttr("src", _imports_2)} alt="pattern"><button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img${ssrRenderAttr("src", _imports_3)} alt="play button" width="30"></button></div></div><div class="${ssrRenderClass([{ "!hidden": $data.selectedTab !== 3 }, "tab-content lg:gap-[30px] lg:flex bg-bg-5 user-exp"])}" style="${ssrRenderStyle($data.selectedTab === 3 ? null : { display: "none" })}"><div class="p-5 md:p-[60px] lg:w-1/2"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Choose The Best Plan That&#39;s For You </h2><p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1$1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="relative lg:w-1/2"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_2$3)} alt="Agon"><img class="absolute top-0 right-0"${ssrRenderAttr("src", _imports_2)} alt="pattern"><button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img${ssrRenderAttr("src", _imports_3)} alt="play button" width="30"></button></div></div><div class="${ssrRenderClass([{ "!hidden": $data.selectedTab !== 4 }, "tab-content lg:gap-[30px] lg:flex bg-bg-6 social-network"])}" style="${ssrRenderStyle($data.selectedTab === 4 ? null : { display: "none" })}"><div class="p-5 md:p-[60px] lg:w-1/2"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Subscribe our newsletter to get gift </h2><p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1$1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="relative lg:w-1/2"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_4$2)} alt="Agon"><img class="absolute top-0 right-0"${ssrRenderAttr("src", _imports_2)} alt="pattern"><button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img${ssrRenderAttr("src", _imports_3)} alt="play button" width="30"></button></div></div><div class="${ssrRenderClass([{ "!hidden": $data.selectedTab !== 5 }, "tab-content lg:gap-[30px] lg:flex bg-bg-7 marketing"])}" style="${ssrRenderStyle($data.selectedTab === 5 ? null : { display: "none" })}"><div class="p-5 md:p-[60px] lg:w-1/2"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Ready to get started? Create and Account </h2><p class="text-excerpt mb-[40px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1$1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="relative lg:w-1/2"><img class="h-full w-full object-cover"${ssrRenderAttr("src", _imports_8)} alt="Agon"><img class="absolute top-0 right-0"${ssrRenderAttr("src", _imports_2)} alt="pattern"><button class="rounded-full bg-white grid place-items-center absolute play-video w-[135px] h-[135px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0"><img${ssrRenderAttr("src", _imports_3)} alt="play button" width="30"></button></div></div></div>`);
  _push(ssrRenderComponent(_component_modal_video, {
    channel: $options.videoChannel,
    videoId: $options.videoId,
    isOpen: $data.videoIsOpen,
    "onUpdate:isOpen": ($event) => $data.videoIsOpen = $event
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section3.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[100px]" }, _attrs))}><div class="text-center mb-[70px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">We facilitate the creation of strategy and design</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]">Interactively transform magnetic growth strategies whereas prospective &quot;outside the box&quot; thinking.</p></div><div class="lg:flex lg:gap-5 xl:gap-[30px]"><div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-5 hover:translate-y-[-2px]"><div><img class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_0$6)} alt="icon"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Business strategy</h2><p class="text-excerpt text-gray-600 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1$1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button><img class="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"${ssrRenderAttr("src", _imports_2$4)} alt="icon"></div><div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-9 hover:translate-y-[-2px]"><div><img class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_3$2)} alt="icon"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Local Marketing</h2><p class="text-excerpt text-gray-600 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1$1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button><img class="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"${ssrRenderAttr("src", _imports_4$3)} alt="icon"></div><div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] relative mb-5 flex flex-col justify-between transition-all duration-300 bg-bg-2 hover:translate-y-[-2px]"><div><img class="h-full w-full object-cover mb-[30px] max-w-[80px] max-h-[80px]"${ssrRenderAttr("src", _imports_3$3)} alt="icon"><h2 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[30px]">Social Media</h2><p class="text-excerpt text-gray-600 mb-[30px]">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-white text-gray-900 hover:bg-gray-900 hover:text-white w-fit hover:translate-y-[-3px]",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>Learn More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-black group-hover:filter-white"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "Learn More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-black group-hover:filter-white",
              src: _imports_1$1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button><img class="absolute bottom-0 right-0 z-0 max-w-[90px] md:max-w-[144px] max-h-[90px] md:max-h-[144px] translate-x-[20%] translate-y-[20%] xl:translate-x-0 xl:translate-y-0"${ssrRenderAttr("src", _imports_6)} alt="icon"></div></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section4.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] lg:mt-[100px]" }, _attrs))}><div class="lg:grid lg:grid-cols-2 lg:gap-[30px] xl:gap-[95px]"><div class="relative"><img class="rounded-2xl mb-[30px] lg:mb-0 lg:flex-1"${ssrRenderAttr("src", _imports_1$4)} alt="Agon"></div><div class="flex-1 order-1"><span class="font-chivo inline-block bg-bg-2 text-orange-900 py-[14px] px-[28px] rounded-[50px] text-[14px] leading-[14px] mb-[22px]">What We Do, What You Get</span><h3 class="font-chivo font-bold lg:text-heading-1 md:text-[46px] md:leading-[52px] text-[35px] leading-[44px] mb-[22px]">We believe that our works can contribute to a better world.</h3><p class="text-quote md:text-lead-lg text-gray-600 mb-[50px]">Necessary to deliver white glove, fully managed campaigns that surpass industry benchmarks.Take your career to next level. Apply to our team and see what we can do together. You\u2019re good enough.</p><div class="border border-green-900 border-dashed mb-[48px]"></div><div class="md:grid md:grid-cols-2 md:gap-y-[34px] lg:gap-x-[70px]"><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$7)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Boost your sale</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$7)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Smart Installation Tools</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$7)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Introducing New Features</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div><div class="mb-[30px] lg:mb-0"><div class="flex items-center mb-[17px]"><img class="mr-[9px]"${ssrRenderAttr("src", _imports_0$7)} alt="leaf icon"><h4 class="text-heading-6 font-chivo font-bold">Dynamic Boosting</h4></div><p class="text-excerpt text-gray-600">The latest design trends meet hand-crafted templates.</p></div></div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section5.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$1 = publicAssetsURL("/assets/images/icons/pattern-4.svg");
const _sfc_main$5 = {
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}><div class="bg-bg-2 relative px-[12px] py-[70px] rounded-[50px]"><img class="absolute top-0 left-0 z-0 -translate-x-1/4"${ssrRenderAttr("src", _imports_0$1)} alt="pattern icon"><div class="text-center relative mb-[70px] md:mb-[90px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-gray-900 mb-5 md:mb-[30px] max-w-[725px]">What We Offer</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto md:max-w-[50ch]">What makes us different from others? We give holistic solutions with strategy, design &amp; technology.</p></div>`);
  _push(ssrRenderComponent(_component_swiper, {
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
        // spaceBetween: 30,
      },
      575: {
        slidesPerView: 2
        // spaceBetween: 30,
      },
      767: {
        slidesPerView: 2
        // spaceBetween: 30,
      },
      991: {
        slidesPerView: 2
        // spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3
        // spaceBetween: 30,
      },
      1350: {
        slidesPerView: 3
        // spaceBetween: 30,
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".h1n",
      prevEl: ".h1p"
    },
    modules: $setup.modules,
    class: "offer-list dots"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_0$8)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Market research</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_0$8,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_1$5)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Strategic Consulting</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_1$5,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_2$5)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Cognitive Solution</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_2$5,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_0$8)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Market research</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_0$8,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_1$5)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Strategic Consulting</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_1$5,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_2$5)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Cognitive Solution</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_2$5,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_0$8)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Market research</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_0$8,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_1$5)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Strategic Consulting</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_1$5,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<img class="h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]"${ssrRenderAttr("src", _imports_2$5)} alt="icon"${_scopeId2}><h3 class="font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]"${_scopeId2}>Cognitive Solution</h3><p class="text-text text-gray-600"${_scopeId2}>One make creepeth, man bearing theira firmament.</p>`);
            } else {
              return [
                createVNode("img", {
                  class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                  src: _imports_2$5,
                  alt: "icon"
                }),
                createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
                createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_0$8,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_1$5,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_2$5,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_0$8,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_1$5,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_2$5,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_0$8,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Market research"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_1$5,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Strategic Consulting"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          }),
          createVNode(_component_swiper_slide, { class: "rounded-2xl py-[20px] px-[24px] md:py-[43px] md:px-[63px] md:mx-5 transition-all duration-300 hover:translate-y-[-3px] bg-white" }, {
            default: withCtx(() => [
              createVNode("img", {
                class: "h-full w-full object-cover mb-[30px] max-w-[50px] max-h-[50px]",
                src: _imports_2$5,
                alt: "icon"
              }),
              createVNode("h3", { class: "font-chivo font-bold text-[18px] md:text-heading-5 mb-[20px]" }, "Cognitive Solution"),
              createVNode("p", { class: "text-text text-gray-600" }, "One make creepeth, man bearing theira firmament.")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section6.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_SliderTestimonial1 = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}><div class="items-center justify-between md:flex mb-[30px] md:mb-[80px]"><div><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Our Happy Customers</h2><p class="text-quote md:text-lead-lg text-gray-600">Know about our clients, we are a woldwide corporate brand</p></div><div class="flex items-center gap-5 self-end"><div class="tap1 place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-prev grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_0$9)} alt="control icon button"></div><div class="tan1 place-items-center border border-gray-200 bg-gray-100 rounded-full cursor-pointer group transition-colors duration-200 w-[48px] xl:w-[64px] h-[48px] xl:h-[64px] hover:bg-gray-900 feedback-next grid"><img class="group-hover:filter-white"${ssrRenderAttr("src", _imports_1$6)} alt="control icon button"></div></div></div>`);
  _push(ssrRenderComponent(_component_SliderTestimonial1, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section7.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px]" }, _attrs))}><div class="items-center justify-between mb-[70px] md:mb-[90px] md:flex"><div><h2 class="text-gray-900 font-bold font-chivo mb-5 text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 md:mb-[30px] max-w-[725px]">Latest News</h2><p class="text-quote md:text-lead-lg text-gray-600">From Our blog and Event fanpage</p></div><button type="button">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "flex items-center z-10 relative transition-all duration-200 group px-[22px] py-[15px] lg:px-[32px] lg:py-[22px] rounded-[50px] bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 bg-black w-fit",
    to: "#"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold"${_scopeId}>View More</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
      } else {
        return [
          createVNode("span", { class: "block text-inherit w-full h-full rounded-[50px] text-lg font-chivo font-semibold" }, "View More"),
          createVNode("i", null, [
            createVNode("img", {
              class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
              src: _imports_1$1,
              alt: "arrow right icon"
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</button></div><div class="lg:grid lg:grid-cols-3 lg:gap-x-5 xl:gap-x-[30px] gap-y-[50px] xl:gap-y-[87px]">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>company</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>We can blend colors multiple ways, the most common</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_0$5)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "company")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "We can blend colors multiple ways, the most common"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_0$5,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-9 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Marketing Event</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>How To Blow Through Capital At An Incredible Rate</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_4$1)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "Marketing Event")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "How To Blow Through Capital At An Incredible Rate"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_4$1,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-6 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "block group",
    to: "/single"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-center mb-[11px]"${_scopeId}><div class="bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]"${_scopeId}></div><span class="uppercase text-gray-500"${_scopeId}>Customer Services</span></div><p class="text-heading-4 font-chivo font-bold inline-block mb-[26px]"${_scopeId}>Design Studios That Everyone Should Know About?</p><div class="relative mb-16"${_scopeId}><div class="relative"${_scopeId}><div class="pr-[26px] aspect-[430/275]"${_scopeId}><img class="h-full w-full object-cover rounded-2xl z-10 relative"${ssrRenderAttr("src", _imports_2$3)} alt="Agon"${_scopeId}></div><div class="absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]"${_scopeId}><div class="w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]"${_scopeId}></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-center mb-[11px]" }, [
            createVNode("div", { class: "bg-gray-500 rounded-full w-[3px] h-[3px] mr-[6px]" }),
            createVNode("span", { class: "uppercase text-gray-500" }, "Customer Services")
          ]),
          createVNode("p", { class: "text-heading-4 font-chivo font-bold inline-block mb-[26px]" }, "Design Studios That Everyone Should Know About?"),
          createVNode("div", { class: "relative mb-16" }, [
            createVNode("div", { class: "relative" }, [
              createVNode("div", { class: "pr-[26px] aspect-[430/275]" }, [
                createVNode("img", {
                  class: "h-full w-full object-cover rounded-2xl z-10 relative",
                  src: _imports_2$3,
                  alt: "Agon"
                })
              ]),
              createVNode("div", { class: "absolute w-full h-full left-0 z-0 top-0 translate-y-[30px] pl-[33px]" }, [
                createVNode("div", { class: "w-full h-full rounded-2xl bg-opacity-50 transition-all duration-200 bg-bg-4 group-hover:-translate-x-[10px] group-hover:-translate-y-[10px]" })
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section8.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = publicAssetsURL("/assets/images/icons/pattern-2.svg");
const _imports_1 = publicAssetsURL("/assets/images/icons/pattern-1.svg");
const _sfc_main$2 = {
  __name: "Section9",
  __ssrInlineRender: true,
  setup(__props) {
    const isToggled = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full-width bg-green-900 relative" }, _attrs))}><img class="absolute right-0 opacity-30 top-[-150px]"${ssrRenderAttr("src", _imports_0)} alt=""><img class="absolute opacity-30 bottom-[-90px] left-[-15px]"${ssrRenderAttr("src", _imports_1)} alt=""><div class="px-[12px] md:px-[36px] xl:px-0 mt-[70px] pt-[90px] pb-[111px]"><div class="text-center text-white mb-[56px]"><h2 class="font-bold font-chivo mx-auto text-[35px] leading-[44px] md:text-[46px] md:leading-[52px] lg:text-heading-1 text-white mb-5 md:mb-[30px] max-w-[725px]"> Choose The Best Plan That\u2019s For You</h2><p class="text-quote md:text-lead-lg text-gray-600 mx-auto max-w-[976px]"></p></div><div class="flex items-center justify-center gap-[10px] mb-[54px] text-white"><p class="text-text">Bill Monthly </p><div class="flex items-center justify-center"><label class="flex items-center cursor-pointer" for="billSwitch"><div class="relative"><input class="sr-only peer" id="billSwitch" type="checkbox" name=""><div class="block rounded-full w-[65px] h-[30px] bg-white"></div><div class="dot absolute left-1 top-1 rounded-full transition h-[21px] w-[21px] bg-gray-900"></div></div></label></div><p class="text-text">Bill Annually </p></div><div class="package"><div class="grid mx-auto gap-[44px] md:grid-cols-2 lg:grid-cols-3 max-w-[970px]"><div class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card bill-monthly"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$`);
      if (isToggled.value) {
        _push(`<!--[-->420<!--]-->`);
      } else {
        _push(`<!--[-->35<!--]-->`);
      }
      _push(`</span><span class="text-sm font-bold text-gray-400 ml-[2px]">/month</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$2)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$2)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
              createVNode("i", null, [
                createVNode("img", {
                  class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                  src: _imports_1$1,
                  alt: "arrow right icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><div class="rounded-2xl p-[35px] bg-white bill-monthly flex flex-col justify-between"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$`);
      if (isToggled.value) {
        _push(`<!--[-->1068<!--]-->`);
      } else {
        _push(`<!--[-->89<!--]-->`);
      }
      _push(`</span><span class="text-sm font-bold text-gray-400 ml-[2px]">/`);
      if (isToggled.value) {
        _push(`<!--[-->year<!--]-->`);
      } else {
        _push(`<!--[-->month<!--]-->`);
      }
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Essentials</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_0$2)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_0$2)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
              createVNode("i", null, [
                createVNode("img", {
                  class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                  src: _imports_1$1,
                  alt: "arrow right icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><div class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card col-span-1 bill-monthly md:col-span-2 lg:col-span-1"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$ `);
      if (isToggled.value) {
        _push(`<!--[-->1500 <!--]-->`);
      } else {
        _push(`<!--[-->125 <!--]-->`);
      }
      _push(`</span><span class="text-sm font-bold text-gray-400 ml-[2px]">/`);
      if (isToggled.value) {
        _push(`<!--[-->year<!--]-->`);
      } else {
        _push(`<!--[-->month <!--]-->`);
      }
      _push(`</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Premium</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">Avanced features for pros who need more customization.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$2)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$2)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
              createVNode("i", null, [
                createVNode("img", {
                  class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                  src: _imports_1$1,
                  alt: "arrow right icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><div class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card bill-annually"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$420</span><span class="text-sm font-bold text-gray-400 ml-[2px]">/year</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Standard</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$2)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$2)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
              createVNode("i", null, [
                createVNode("img", {
                  class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                  src: _imports_1$1,
                  alt: "arrow right icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><div class="rounded-2xl p-[35px] bg-white bill-annually flex flex-col justify-between"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$1068</span><span class="text-sm font-bold text-gray-400 ml-[2px]">/year</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Essentials</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">All the basics for businesses that are just getting started.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_0$2)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_0$2)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
              createVNode("i", null, [
                createVNode("img", {
                  class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                  src: _imports_1$1,
                  alt: "arrow right icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div><div class="rounded-2xl p-[35px] bg-white flex flex-col justify-between transition-all duration-300 package-card col-span-1 bill-annually md:col-span-2 lg:col-span-1"><div><div class="mb-[21px]"><span class="text-heading-3 font-bold font-chivo">$1500</span><span class="text-sm font-bold text-gray-400 ml-[2px]">/year</span></div><h5 class="text-heading-5 font-chivo font-bold mb-[9px]">Premium</h5><p class="text-sm font-bold text-gray-400 mb-[43px]">Avanced features for pros who need more customization.</p><div class="w-full bg-gray-300 h-[1px] mb-[21px]"></div><ul class="mb-[76px]"><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$2)} alt="icon"><span class="text-md text-gray-500">Unlimited updates</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img class="tick-icon"${ssrRenderAttr("src", _imports_0$2)} alt="icon"><img class="hidden tick-icon-active"${ssrRenderAttr("src", _imports_1$2)} alt="icon"><span class="text-md text-gray-500">Custom permissions</span></li><li class="flex items-center gap-[10px] mb-[17px]"><img${ssrRenderAttr("src", _imports_2$1)} alt="icon"><span class="text-md text-gray-500">Custom designs &amp; features</span></li></ul></div><button type="button">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center z-10 relative transition-all duration-200 group py-[11px] px-[22px] rounded-md bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 border-[2px] border-[#171B24]",
        to: "#"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold"${_scopeId}>Get Started</span><i${_scopeId}><img class="ml-[7px] w-[12px] filter-white group-hover:filter-black"${ssrRenderAttr("src", _imports_1$1)} alt="arrow right icon"${_scopeId}></i>`);
          } else {
            return [
              createVNode("span", { class: "block text-inherit w-full h-full rounded-md text-lg font-chivo font-semibold" }, "Get Started"),
              createVNode("i", null, [
                createVNode("img", {
                  class: "ml-[7px] w-[12px] filter-white group-hover:filter-black",
                  src: _imports_1$1,
                  alt: "arrow right icon"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section9.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-[12px] md:px-[36px] xl:px-0 mt-[70px] md:mt-[150px]" }, _attrs))}><div class="rounded-2xl p-[30px] md:py-[53px] md:px-[48px] gap-5 mx-auto bg-orange-100 md:flex lg:gap-[40px] lg:h-[420px] xl:h-[390px] max-w-[1190px]" padding="px-[15px] py-[50px] md:px-[52px] md:py-[72px]"><div class="flex-1 mb-[30px]"><p class="text-capitalized uppercase text-gray-500 tracking-[2px] mb-[13px]">newsletter</p><h4 class="font-bold font-chivo text-[28px] leading-[32px] md:text-heading-2 mb-[20px]">Subscribe our newsletter</h4><p class="text-text text-gray-500">By clicking the button, you are agreeing with our</p>`);
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
  _push(`<form class="mt-[30px]" action="/"><div class="bg-white flex items-center justify-between p-3 rounded-[55px]"><input class="ml-[25px]" type="text" placeholder="Enter your mail ..."><button class="rounded-full bg-green-900 grid place-items-center w-[56px] h-[56px]" type="submit"><img class="filter-white"${ssrRenderAttr("src", _imports_1$1)} alt=""></button></div></form></div><div class="relative flex-1"><img class="h-full w-full object-cover rounded-2xl img-shadow lg:absolute lg:max-w-[332px] lg:h-[403px] lg:right-0"${ssrRenderAttr("src", _imports_1$4)} alt="Agon"><img class="h-full w-full object-cover absolute animate-float max-w-[225px] max-h-[170px] rounded-[14px] bottom-[-20px] left-[-10px]"${ssrRenderAttr("src", _imports_2$6)} alt="Agon"></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sections/Home1/Section10.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      bodyAttrs: {
        class: "overflow-x-hidden w-screen relative home-page"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionsHome1Section1 = _sfc_main$a;
      const _component_SectionsHome1Section2 = __nuxt_component_1;
      const _component_SectionsHome1Section3 = __nuxt_component_2;
      const _component_SectionsHome1Section4 = __nuxt_component_3;
      const _component_SectionsHome1Section5 = __nuxt_component_4;
      const _component_SectionsHome1Section6 = __nuxt_component_5;
      const _component_SectionsHome1Section7 = __nuxt_component_6;
      const _component_SectionsHome1Section8 = __nuxt_component_7;
      const _component_SectionsHome1Section9 = _sfc_main$2;
      const _component_SectionsHome1Section10 = __nuxt_component_9;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_SectionsHome1Section1, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section2, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section3, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section4, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section5, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section6, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section7, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section8, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section9, null, null, _parent));
      _push(ssrRenderComponent(_component_SectionsHome1Section10, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B1Da55uc.mjs.map
