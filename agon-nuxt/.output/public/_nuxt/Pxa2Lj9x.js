import{p as r,_ as u,o as c,i as m,j as o,C as a,ae as f,af as p,n as h}from"./ZGgCcq_-.js";const _=r("/assets/images/icons/icon-play.svg"),g={props:{videoId:String,channel:String,isOpen:Boolean,youtube:{type:Object,default:function(){return{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"}}},ratio:{type:String,default:"16:9"},vimeo:{type:Object,default:function(){return{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1}}},allowFullScreen:{type:Boolean,default:!0},animationSpeed:{type:Number,default:300},classNames:{type:Object,default:function(){return{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"}}},aria:{type:Object,default:function(){return{openMessage:"Modal video opened",dismissBtnMessage:"Close the modal video"}}}},methods:{getQueryString(l){let t="";for(var e in l)l.hasOwnProperty(e)&&l[e]!==null&&(t+=e+"="+l[e]+"&");return t.substr(0,t.length-1)},getYoutubeUrl(l,t){const e=this.getQueryString(l);return"//www.youtube.com/embed/"+t+"?"+e},getVimeoUrl(l,t){const e=this.getQueryString(l);return"//player.vimeo.com/video/"+t+"?"+e},getPadding(l){const t=l.split(":"),e=Number(t[0]);return Number(t[1])*100/e+"%"}},computed:{fullVideoUrl(){if(this.channel==="youtube")return this.getYoutubeUrl(this.youtube,this.videoId);if(this.channel==="vimeo")return this.getVimeoUrl(this.vimeo,this.videoId)},paddingBottom(){return this.getPadding(this.ratio)}},watch:{isOpen:{handler:function(l){this.$nextTick(()=>{this.$refs.closeBtn&&typeof this.$refs.closeBtn.focus=="function"&&this.$refs.closeBtn.focus()})},deep:!0}}},y={key:0},v=["aria-label"],b=["aria-label"],V=["src","allowFullScreen"];function w(l,t,e,n,d,i){return e.isOpen?(c(),m("div",y,[o("div",{class:a(e.classNames.modalVideo),tabIndex:"-1",role:"dialog","aria-label":e.aria.openMessage,onClick:t[1]||(t[1]=s=>l.$emit("update:isOpen",!1)),onKeydown:t[2]||(t[2]=p(s=>l.$emit("update:isOpen",!1),["esc"]))},[o("div",{class:a(e.classNames.modalVideoBody)},[o("button",{class:a(e.classNames.modalVideoCloseBtn),"aria-label":e.aria.dismissBtnMessage,ref:"closeBtn",onClick:t[0]||(t[0]=s=>l.$emit("update:isOpen",!1))},null,10,b),o("div",{class:a(e.classNames.modalVideoInner)},[o("div",{class:a(e.classNames.modalVideoIframeWrap),style:f({"padding-bottom":i.paddingBottom})},[o("iframe",{width:"460",height:"230",src:i.fullVideoUrl,frameBorder:"0",allowFullScreen:e.allowFullScreen,tabIndex:"-1"},null,8,V)],6)],2)],2)],42,v)])):h("",!0)}const S=u(g,[["render",w],["__scopeId","data-v-f222a7c1"]]);export{S as M,_};
