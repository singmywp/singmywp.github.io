import{d as e,r as o,c as r,b as t,e as l,f as s,k as a,o as n,g as i,t as u,v as d,u as c,q as p,G as f,H as h,aa as m,h as g,j as _,F as v,n as y}from"./index-DNTc1GxZ.js";import{_ as b,a as S}from"./sn-topbar.CX0rMkKy.js";import{u as T,v as x,r as w,$ as C,w as k}from"./uni-app.es.D9ZkitmT.js";import{_ as j}from"./sn-alert.BVqfDC3L.js";import{_ as U}from"./com-card.22LSjaaf.js";import{c as B,b as $}from"./sn-button.BaZjRh9m.js";import{_ as N}from"./sn-tag.DvvI2107.js";import{_ as M}from"./sn-loadmore.D2J6x6Jv.js";import{_ as E}from"./sn-backtop.BKzLNVUV.js";import{_ as R}from"./sn-toast.I0rPCv6N.js";import{_ as z}from"./sn-page.CEVOSUw5.js";import"./sn-line.BJRaATTn.js";const D=B(e(Object.assign({name:"sn-longlist"},{__name:"sn-longlist",props:{associativeContainer:{type:String,default:""},bounces:{type:Boolean,default:!1},upperThreshold:{type:Number,default:50},lowerThreshold:{type:Number,default:50},scrollTop:{type:Number,default:0},showScrollbar:{type:Boolean,default:!1},scrollIntoView:{type:String,default:""},scrollWithAnimation:{type:Boolean,default:!0},refresherEnabled:{type:Boolean,default:!1},refresherThreshold:{type:Number,default:45},refresherMaxDragDistance:{type:Number,default:100},refresherBackground:{type:String,default:"transparent"},refresherTriggered:{type:Boolean,default:!1},backtop:{type:Boolean,default:!0},loadmore:{type:Boolean,default:!0},refresherDefaultStyle:{type:String,default:"white"},loadmoreStatus:{type:String,default:"loadmore"},loadmoreConfig:{type:Object,default:new T({})},refresherConfig:{type:Object,default:new x({})},customNestedScroll:{type:Boolean,default:!1},customStyle:{type:Object,default:{}}},emits:["refresherpulling","refresherrefresh","refresherrestore","refresherabort","scrolltoupper","scrolltolower","scroll","scrollend","click","loadmore"],setup(e,m){var g=m.expose;const _=m.emit,v=e,y=o([e=>{}]),b=o(null),S=o("refresh"),T=r((()=>v.refresherDefaultStyle));function x(e){y.value.forEach((o=>{o(e)}))}function C(){_("loadmore")}function k(e){S.value="refresh",_("refresherpulling",e)}function j(e){S.value="refreshing",_("refresherrefresh",e)}function U(e){S.value="refresh",_("refresherrestore",e)}function B(e){S.value="refresh",_("refresherabort",e)}function $(e){_("scrolltoupper",e)}function N(e){_("scrolltolower",e)}function R(e){_("scroll",e),x(e.detail.scrollTop)}function z(e){_("scrollend",e)}return g({scrollTo:function(e,o){x(o),null!=b.value&&(b.value.scrollTop=e,b.value.scrollLeft=o)},registerBacktop:function(e){y.value.push(e)}}),(o=null,r=null)=>{const m=w(t("sn-loadmore"),M),g=f,v=h,y=w(t("sn-backtop"),E),S=a;return n(),l(S,null,{default:s((()=>[i(v,{class:"sn-longlist",ref_key:"listEle",ref:b,"refresher-default-style":c(T),"associative-container":e.associativeContainer,bounces:e.bounces,"upper-threshold":e.upperThreshold,"lower-threshold":e.lowerThreshold,"scroll-top":e.scrollTop,"show-scrollbar":e.showScrollbar,"scroll-into-view":e.scrollIntoView,"scroll-with-animation":e.scrollWithAnimation,"refresher-enabled":e.refresherEnabled,"refresher-threshold":e.refresherThreshold,"refresher-max-drag-distance":e.refresherMaxDragDistance,"refresher-background":e.refresherBackground,"refresher-triggered":e.refresherTriggered,"custom-nested-scroll":e.customNestedScroll,onRefresherpulling:k,onRefresherrefresh:j,onRefresherrestore:U,onRefresherabort:B,onScrolltolower:N,onScrolltoupper:$,onScroll:R,onScrollend:z,onClick:r[0]||(r[0]=(e=null)=>_("click")),style:p([e.customStyle])},{default:s((()=>[u(o.$slots,"default",{},void 0,!0),e.loadmore?(n(),l(g,{key:0,type:"99998"},{default:s((()=>{var o,r,t,l,s,a,n,u,d,c,p;return[i(m,{status:e.loadmoreStatus,dashed:null!==(o=e.loadmoreConfig.dashed)&&void 0!==o&&o,disabled:null!==(r=e.loadmoreConfig.disabled)&&void 0!==r&&r,textSize:null!==(t=e.loadmoreConfig.textSize)&&void 0!==t?t:"",textColor:null!==(l=e.loadmoreConfig.textColor)&&void 0!==l?l:"",iconSize:null!==(s=e.loadmoreConfig.iconSize)&&void 0!==s?s:"",iconColor:null!==(a=e.loadmoreConfig.iconColor)&&void 0!==a?a:"",lineHeight:null!==(n=e.loadmoreConfig.lineHeight)&&void 0!==n?n:"0.5px",lineColor:null!==(u=e.loadmoreConfig.lineColor)&&void 0!==u?u:"",loadingText:null!==(d=e.loadmoreConfig.loadingText)&&void 0!==d?d:"",nomoreText:null!==(c=e.loadmoreConfig.nomoreText)&&void 0!==c?c:"",loadmoreText:null!==(p=e.loadmoreConfig.loadmoreText)&&void 0!==p?p:"",onLoadmore:C},null,8,["status","dashed","disabled","textSize","textColor","iconSize","iconColor","lineHeight","lineColor","loadingText","nomoreText","loadmoreText"])]})),_:1})):d("",!0)])),_:3},8,["refresher-default-style","associative-container","bounces","upper-threshold","lower-threshold","scroll-top","show-scrollbar","scroll-into-view","scroll-with-animation","refresher-enabled","refresher-threshold","refresher-max-drag-distance","refresher-background","refresher-triggered","custom-nested-scroll","style"]),e.backtop?(n(),l(y,{key:0})):d("",!0)])),_:3})}}})),[["__scopeId","data-v-e0ddb3a3"]]);class V extends UTS.UTSType{static get$UTSMetadata$(){return{kind:2,get fields(){return{title:{type:String,optional:!1},index:{type:Number,optional:!1},hotValue:{type:String,optional:!1},link:{type:String,optional:!1}}}}}constructor(e,o=V.get$UTSMetadata$(),r=!1){super(),this.__props__=UTS.UTSType.initProps(e,o,r),this.title=this.__props__.title,this.index=this.__props__.index,this.hotValue=this.__props__.hotValue,this.link=this.__props__.link,delete this.__props__}}class H extends UTS.UTSType{static get$UTSMetadata$(){return{kind:2,get fields(){return{code:{type:Number,optional:!1},result:{type:UTS.UTSType.withGenerics(Array,[V]),optional:!1},msg:{type:String,optional:!1}}}}}constructor(e,o=H.get$UTSMetadata$(),r=!1){super(),this.__props__=UTS.UTSType.initProps(e,o,r),this.code=this.__props__.code,this.result=this.__props__.result,this.msg=this.__props__.msg,delete this.__props__}}const L=e({__name:"sn-longlist",setup(e){const a=C.colors,u=o(!1),d=o([]),h=o([]),T=o("loading"),x=o(0),B=o(null);k((()=>{B.value.show(),m({url:"https://api.oioweb.cn/api/common/fetchHotSearchBoard?type=toutiao",method:"GET",success:e=>{var o,r;let t=null!==(r=null===(o=e.data)||void 0===o?void 0:o.result)&&void 0!==r?r:[];B.value.close(),d.value=t,h.value=h.value.concat(d.value),T.value="loadmore",x.value+=1}},H)}));const M=r((()=>{let e=new Map;return e.set("padding","15px 10px"),e.set("margin-bottom","10px"),e.set("border-radius",C.configs.radius.normal),e.set("background",a.value.front),e.set("overflow","visible"),e.set("transition-duration",C.configs.aniTime.normal),e}));function E(){if("nomore"==T.value)return null;x.value+=1,T.value="loading",B.value.show(),setTimeout((()=>{B.value.close(),h.value=h.value.concat(d.value),setTimeout((()=>{x.value>=3?T.value="nomore":T.value="loadmore"}),1e3)}),500)}function V(){u.value=!0,setTimeout((()=>{u.value=!1}),2e3)}return(e=null,o=null)=>{const r=w(t("sn-topbar"),b),a=w(t("sn-alert"),j),d=w(t("com-card"),U),m=w(t("sn-text"),$),x=w(t("sn-tag"),N),C=w(t("sn-row"),S),k=f,H=w(t("sn-longlist"),D),L=w(t("sn-toast"),R),A=w(t("sn-page"),z);return n(),l(A,null,{default:s((()=>[i(r,{title:"Longlist 长列表"}),i(a,{type:"primary",text:"一次性初始化太多列表项，因为创建大量 vnode 耗时，会导致列表初始化变慢。此时推荐使用官方的扩展组件 uni-recycle-view 来解决初始化慢的问题，该组件内部会分批创建节点，自动实现节点复用。"}),i(d,{note:"Longlist 组件用于显示大量同类信息。Longlist 本身只是容器，不预设任何样式。在 Android 端基于 recycle-view，性能优秀（设置固定的高度才支持高性能滚动）。\\nsn-longlist 的子组件为 list-item。"}),i(H,{loadmoreStatus:c(T),refresherTriggered:c(u),refresherEnabled:"",onRefresherrefresh:V,onScrolltolower:E,style:{flex:"1"}},{default:s((()=>[(n(!0),g(v,null,_(c(h),((e,o)=>(n(),l(k,{onClick:(o=null)=>{var r;y({url:"/pages/other/webview?title=".concat((r=e).title,"&url=").concat(encodeURIComponent(r.link))})},style:p(c(M))},{default:s((()=>[i(C,{justify:"space-between"},{default:s((()=>[i(m,{text:e.title},null,8,["text"]),i(x,{type:"error",text:e.hotValue,customStyle:{padding:"2px 7px",borderRadius:"1000px"}},null,8,["text"])])),_:2},1024)])),_:2},1032,["onClick","style"])))),256))])),_:1},8,["loadmoreStatus","refresherTriggered"]),i(L,{ref_key:"toastEle",ref:B,text:"加载中",loading:""},null,512)])),_:1})}}});export{L as default};