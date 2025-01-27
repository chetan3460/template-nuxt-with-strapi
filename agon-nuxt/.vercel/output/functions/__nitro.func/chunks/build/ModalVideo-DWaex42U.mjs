import { p as publicAssetsURL } from '../nitro/nitro.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';

const _imports_0 = publicAssetsURL("/assets/images/icons/icon-play.svg");
const _sfc_main = {
  props: {
    videoId: String,
    channel: String,
    isOpen: Boolean,
    youtube: {
      type: Object,
      default: function() {
        return {
          autoplay: 1,
          cc_load_policy: 1,
          color: null,
          controls: 1,
          disablekb: 0,
          enablejsapi: 0,
          end: null,
          fs: 1,
          h1: null,
          iv_load_policy: 1,
          list: null,
          listType: null,
          loop: 0,
          modestbranding: null,
          origin: null,
          playlist: null,
          playsinline: null,
          rel: 0,
          showinfo: 1,
          start: 0,
          wmode: "transparent",
          theme: "dark"
        };
      }
    },
    ratio: {
      type: String,
      default: "16:9"
    },
    vimeo: {
      type: Object,
      default: function() {
        return {
          api: false,
          autopause: true,
          autoplay: true,
          byline: true,
          callback: null,
          color: null,
          height: null,
          loop: false,
          maxheight: null,
          maxwidth: null,
          player_id: null,
          portrait: true,
          title: true,
          width: null,
          xhtml: false
        };
      }
    },
    allowFullScreen: {
      type: Boolean,
      default: true
    },
    animationSpeed: {
      type: Number,
      default: 300
    },
    classNames: {
      type: Object,
      default: function() {
        return {
          modalVideoEffect: "modal-video-effect",
          modalVideo: "modal-video",
          modalVideoClose: "modal-video-close",
          modalVideoBody: "modal-video-body",
          modalVideoInner: "modal-video-inner",
          modalVideoIframeWrap: "modal-video-movie-wrap",
          modalVideoCloseBtn: "modal-video-close-btn"
        };
      }
    },
    aria: {
      type: Object,
      default: function() {
        return {
          openMessage: "Modal video opened",
          dismissBtnMessage: "Close the modal video"
        };
      }
    }
  },
  methods: {
    getQueryString(obj) {
      let url = "";
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] !== null) {
            url += key + "=" + obj[key] + "&";
          }
        }
      }
      return url.substr(0, url.length - 1);
    },
    getYoutubeUrl(youtube, videoId) {
      const query = this.getQueryString(youtube);
      return "//www.youtube.com/embed/" + videoId + "?" + query;
    },
    getVimeoUrl(vimeo, videoId) {
      const query = this.getQueryString(vimeo);
      return "//player.vimeo.com/video/" + videoId + "?" + query;
    },
    getPadding(ratio) {
      const arr = ratio.split(":");
      const width = Number(arr[0]);
      const height = Number(arr[1]);
      const padding = height * 100 / width;
      return padding + "%";
    }
  },
  computed: {
    fullVideoUrl() {
      if (this.channel === "youtube") {
        return this.getYoutubeUrl(this.youtube, this.videoId);
      } else if (this.channel === "vimeo") {
        return this.getVimeoUrl(this.vimeo, this.videoId);
      }
    },
    paddingBottom() {
      return this.getPadding(this.ratio);
    }
  },
  watch: {
    isOpen: {
      handler: function(val) {
        this.$nextTick(() => {
          if (this.$refs.closeBtn && typeof this.$refs.closeBtn.focus === "function") {
            this.$refs.closeBtn.focus();
          }
        });
      },
      deep: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.isOpen) {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-f222a7c1><div class="${ssrRenderClass($props.classNames.modalVideo)}" tabIndex="-1" role="dialog"${ssrRenderAttr("aria-label", $props.aria.openMessage)} data-v-f222a7c1><div class="${ssrRenderClass($props.classNames.modalVideoBody)}" data-v-f222a7c1><button class="${ssrRenderClass($props.classNames.modalVideoCloseBtn)}"${ssrRenderAttr("aria-label", $props.aria.dismissBtnMessage)} data-v-f222a7c1></button><div class="${ssrRenderClass($props.classNames.modalVideoInner)}" data-v-f222a7c1><div class="${ssrRenderClass($props.classNames.modalVideoIframeWrap)}" style="${ssrRenderStyle({ "padding-bottom": $options.paddingBottom })}" data-v-f222a7c1><iframe width="460" height="230"${ssrRenderAttr("src", $options.fullVideoUrl)} frameBorder="0"${ssrIncludeBooleanAttr($props.allowFullScreen) ? " allowfullscreen" : ""} tabIndex="-1" data-v-f222a7c1></iframe></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/elements/ModalVideo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ModalVideo = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f222a7c1"]]);

export { ModalVideo as M, _imports_0 as _ };
//# sourceMappingURL=ModalVideo-DWaex42U.mjs.map
