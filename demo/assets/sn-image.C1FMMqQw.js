import{d as e,$ as t,r as a,c as l,o,a as s,e as n,f as i,p as u,u as r,x as d,_ as c,b as g,W as m,X as v,g as f,B as h,n as p,aa as y,L as w}from"./index-DYMgrqHp.js";import{_ as S}from"./sn-view.BSUxthDa.js";import{r as b}from"./uni-app.es.DgDfNdgy.js";import{_ as j,b as _}from"./sn-text.euomPoe8.js";import{u as k}from"./useResize.Cfi37DcV.js";const O=_(e(Object.assign({name:"sn-image"},{__name:"sn-image",props:{width:{type:String,default:""},height:{type:String,default:""},src:{type:String,default:""},mode:{type:String,default:"aspectFit"},borderRadius:{type:String,default:""},loadingBgColor:{type:String,default:""},loadingSize:{type:String,default:"80px"},lazyLoad:{type:Boolean,default:!1},fadeShow:{type:Boolean,default:!0},enablePreview:{type:Boolean,default:!1},customStyle:{type:Object,default:new UTSJSONObject({})},customImageStyle:{type:Object,default:new UTSJSONObject({})},customLoadingStyle:{type:Object,default:new UTSJSONObject({})}},emits:["error","load","click","dbclick","longpress"],setup(e,_){var O=_.emit;const L=t.utils,x=t.colors,z=O,B=e,T=a(!1),C=a(!1),J=a("auto"),R=a("auto"),I=a(!1),M=a({width:0,height:0}),N=a(null),U=l((()=>"auto"!=B.width&&""!=B.width));l((()=>"auto"!=B.height&&""!=B.height));const D=l((()=>"aspectFit"==B.mode&&""==B.height)),E=l((()=>d("color",B.loadingBgColor,x.value.info))),F=l((()=>d("radius",B.borderRadius,t.configs.radius.small))),P=l((()=>d("color",B.loadingBgColor,x.value.infoDark))),$=l((()=>{const e=new Map;return D.value?U.value?(e.set("width",J.value),e.set("height",R.value)):e.set("flex","1"):(e.set("width",J.value),e.set("height",R.value)),e.set("border-radius",F.value),e.set("transition-duration",t.configs.aniTime.normal),e})),W=l((()=>{const e=new Map;return e.set("width",J.value),e.set("height",R.value),e.set("border-radius",F.value),e.set("transition-duration",t.configs.aniTime.normal),e})),X=l((()=>{const e=new Map;return e.set("background",E.value),e.set("width",B.loadingSize),e.set("height",B.loadingSize),e.set("border-radius",F.value),e.set("transition-duration",t.configs.aniTime.normal),e}));function Z(e){z("error",e),T.value=!0}function q(){let e=M.value;0!=e.width&&p((()=>{var t;let a=null===(t=N.value)||void 0===t?void 0:t.getBoundingClientRect();null!=a&&null!=a.width&&(J.value="".concat(a.width,"px"),R.value="".concat(a.width*(e.height/e.width),"px"))}))}function A(e){C.value=!0,z("load",e),D.value&&(p((()=>{M.value=e.detail,q(),setTimeout((()=>{q()}),3e3)})),I.value=!0)}function G(e){L.debounce((()=>{B.enablePreview&&!T.value&&y({urls:[B.src]}),z("click",e.event)}),300)}function H(e){L.debounce((()=>{z("dbclick",e.event)}),300)}function K(e){z("longpress",e)}return o((()=>{D.value?U.value&&(J.value=B.width):(J.value=B.width,R.value=B.height),k(N.value,(()=>{I.value&&q()}))})),(t=null,a=null)=>{const l=w,o=b(s("sn-view"),S),d=b(s("sn-icon"),j),p=c;return g(),n(p,{class:"sn-image-contain",ref_key:"containEle",ref:N,style:u([r($),e.customStyle])},{default:i((()=>[m(f(o,{class:"sn-image",onClick:G,onDbclick:H,onLongpress:K,style:u([r($),e.customStyle])},{default:i((()=>[f(l,{class:"sn-image-image",src:e.src,mode:e.mode,lazyLoad:e.lazyLoad,fadeShow:e.fadeShow,onError:Z,onLoad:A,style:u([r(W),e.customImageStyle])},null,8,["src","mode","lazyLoad","fadeShow","style"])])),_:1},8,["style"]),[[v,r(C)]]),r(C)?h("",!0):(g(),n(p,{key:0,class:"sn-image-unloaded",style:u([r(X),e.customLoadingStyle])},{default:i((()=>[f(d,{name:"image-line",color:r(P)},null,8,["color"])])),_:1},8,["style"]))])),_:1},8,["style"])}}})),[["__scopeId","data-v-99e774ab"]]);export{O as _};