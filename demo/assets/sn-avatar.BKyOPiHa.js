import{d as e,r as t,c as a,b as l,e as s,f as o,m as r,u as i,p as n,o as c,v as u,N as d,O as p,K as m,L as f,M as g}from"./index-D82xabMX.js";import{a as y,c as v}from"./sn-button.CJ0ZsVkl.js";import{$ as S,r as b}from"./uni-app.es.Cv0ss-rw.js";const k=v(e(Object.assign({name:"sn-avatar"},{__name:"sn-avatar",props:{mode:{type:String,default:"image"},imageMode:{type:String,default:"scaleToFill"},src:{type:String,default:""},text:{type:String,default:""},icon:{type:String,default:""},size:{type:String,default:"40px"},textSize:{type:String,default:"25px"},textColor:{type:String,default:""},iconSize:{type:String,default:"25px"},iconColor:{type:String,default:""},bgColor:{type:String,default:""},shape:{type:String,default:"square"},borderRadius:{type:String,default:""},enablePreview:{type:Boolean,default:!1},customStyle:{type:Object,default:{}},customTextStyle:{type:Object,default:{}},customIconStyle:{type:Object,default:{}}},emits:["click","dbclick","load","error","longpress"],setup(e,v){var k=v.emit;const h=S.colors,x=k,z=e,C=t(!1),T=t(null),j=t("click"),w=a((()=>["image","text","icon"].includes(z.mode)?z.mode:"image"));a((()=>z.shape));const _=a((()=>S.configs.app.theme)),O=a((()=>{let e="light"==_.value?h.value.infoDark:h.value.dark;return""==z.iconColor?e:z.iconColor})),M=a((()=>""==z.bgColor?h.value.info:z.bgColor)),L=a((()=>{let e="light"==_.value?h.value.infoDark:h.value.dark;return""==z.textColor?e:z.textColor})),I=a((()=>""==z.borderRadius?S.configs.radius.xsmall:z.borderRadius)),R=a((()=>{let e=new Map;return e.set("width",z.size),e.set("height",z.size),e.set("border-radius","circle"!=z.shape?I.value:S.configs.radius.circle),e.set("transition-duration",S.configs.aniTime.normal),e})),A=a((()=>{let e=new Map;return e.set("width",z.size),e.set("height",z.size),e.set("border-radius","circle"!=z.shape?I.value:S.configs.radius.circle),e.set("background",C.value?h.value.disabled:M.value),e.set("transition-duration",S.configs.aniTime.normal),e}));function D(e){x("load",e)}function N(e){C.value=!0,x("error",e)}function P(e){setTimeout((()=>{z.enablePreview&&!C.value&&"image"==w.value&&"click"==j.value&&m({urls:[z.src]})}),300),null==T.value?(T.value=setTimeout((()=>{T.value=null}),300),j.value="click"):(clearTimeout(T.value),T.value=null,j.value="dbclick"),x("click"==j.value?"click":"dbclick",e)}function q(e){x("longpress",e)}return(t=null,a=null)=>{const m=f,v=g,S=b(l("sn-icon"),y),k=n;return c(),s(k,{class:"sn-avatar",style:r([i(R)])},{default:o((()=>["image"!=i(w)||i(C)?u("",!0):(c(),s(m,{key:0,class:"sn-avatar-image","fade-show":"",mode:e.imageMode,src:e.src,onLoad:D,onError:N,onClick:P,onLongpress:q,style:r([i(R),e.customStyle])},null,8,["mode","src","style"])),"image"!=i(w)||i(C)?(c(),s(k,{key:1,class:"sn-avatar-placeholder",style:r([i(A),e.customStyle]),onLongpress:q,onClick:P},{default:o((()=>["text"==i(w)?(c(),s(v,{key:0,class:"sn-avatar-placeholder-text",style:r([new UTSJSONObject({color:i(L),fontSize:e.textSize}),e.customTextStyle])},{default:o((()=>[d(p(e.text.charAt(0)),1)])),_:1},8,["style"])):"icon"==i(w)||i(C)?(c(),s(S,{key:1,class:"sn-avatar-placeholder-icon",color:i(C)?i(h).errorActive:i(O),name:i(C)?"close-circle-fill":e.icon,size:e.iconSize,customStyle:e.customIconStyle},null,8,["color","name","size","customStyle"])):u("",!0)])),_:1},8,["style"])):u("",!0)])),_:1},8,["style"])}}})),[["__scopeId","data-v-a21f0784"]]);export{k as _};
