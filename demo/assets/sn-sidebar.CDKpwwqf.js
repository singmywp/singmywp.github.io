import{b as e,c as t}from"./sn-button.DCeBN0oM.js";import{d as a,$ as l,c as s,a as o,b as r,e as n,q as i,u as d,z as u,j as c,o as m,f as p,g as y,h as f,F as b,t as S,K as g,G as w,J as v}from"./index-BDGnenFq.js";import{r as x}from"./uni-app.es.BfR9KIrQ.js";const h=t(a(Object.assign({name:"sn-sidebar"},{__name:"sn-sidebar",props:{modelValue:{type:Number,default:0},data:{type:Array,default:[]},width:{type:String,default:"100px"},itemWidth:{type:String,default:"100px"},itemPadding:{type:String,default:"15px 0"},itemTextColor:{type:String,default:""},itemTextSize:{type:String,default:""},activeItemTextColor:{type:String,default:""},itemBgColor:{type:String,default:""},itemBorderRadius:{type:String,default:"0"},activeItemBgColor:{type:String,default:""},disabled:{type:Boolean,default:!1},anchor:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},lineColor:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})},customItemStyle:{type:Object,default:new UTSJSONObject({})},customBarStyle:{type:Object,default:new UTSJSONObject({})},customContentStyle:{type:Object,default:new UTSJSONObject({})}},emits:["update:modelValue","change"],setup(t,a){var h=a.emit;l.utils;const C=l.colors,j=h,O=t,B=s({get:()=>O.modelValue,set:e=>{j("update:modelValue",e),j("change",e)}}),T=s((()=>u("color",O.itemBgColor,C.value.transparent))),_=s((()=>u("color",O.activeItemBgColor,C.value.front))),z=s((()=>u("font",O.itemTextSize,l.configs.font.size(3)))),I=s((()=>u("color",O.itemTextColor,C.value.text))),J=s((()=>u("color",O.activeItemTextColor,C.value.primary))),N=s((()=>O.anchor?O.data[B.value].id:"")),U=s((()=>u("color",O.lineColor,C.value.primary))),V=s((()=>u("radius",O.itemBorderRadius,"0px"))),k=s((()=>{let e=new Map;return e.set("width",O.width),e.set("transition-duration",l.configs.aniTime.normal),e})),L=s((()=>{let e=new Map;return e.set("width",O.itemWidth),e.set("padding",O.itemPadding),e.set("border-radius",V.value),e})),M=s((()=>new Map));return(a=null,l=null)=>{const s=x(o("sn-text"),e),u=v,h=g,j=c,V=w;return m(),r(j,{class:"sn-siderbar-contain",style:i([d(M),t.customStyle])},{default:n((()=>[p(j,{class:"sn-siderbar-bar",style:i([d(k),t.customBarStyle])},{default:n((()=>[p(h,{class:"sn-siderbar-bar-list","show-scrollbar":!1,bounces:!1},{default:n((()=>[(m(!0),y(b,null,f(t.data,((e,a)=>(m(),r(u,{class:"sn-siderbar-bar-item",style:i([d(L),{background:d(B)==a?d(_):d(T),borderLeft:t.showLine?"2px solid ".concat(d(B)==a?d(U):d(C).transparent):"none"},t.customItemStyle]),onClick:(e=null)=>function(e){if(O.disabled)return null;B.value=e}(a)},{default:n((()=>[p(s,{align:"center",text:e.text,color:d(B)==a?d(J):d(I),size:d(z)},null,8,["text","color","size"])])),_:2},1032,["style","onClick"])))),256))])),_:1})])),_:1},8,["style"]),p(V,{class:"sn-siderbar-scroll-view","show-scrollbar":!1,"scroll-with-animation":!0,"scroll-into-view":d(N),style:i([t.customContentStyle])},{default:n((()=>[S(a.$slots,"default",{},void 0,!0)])),_:3},8,["scroll-into-view","style"])])),_:3},8,["style"])}}})),[["__scopeId","data-v-d12c2d3e"]]);export{h as _};