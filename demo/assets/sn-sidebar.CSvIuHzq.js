import{a as e,b as t}from"./sn-text.euomPoe8.js";import{d as a,R as l,$ as s,T as o,w as r,c as n,a as i,e as d,f as u,p as c,u as m,x as p,_ as f,b as y,g as b,h as S,j as g,F as w,z as v,J as x,E as O,I as h}from"./index-DYMgrqHp.js";import{r as j}from"./uni-app.es.DgDfNdgy.js";const C=t(a(Object.assign({name:"sn-sidebar"},{__name:"sn-sidebar",props:l(new UTSJSONObject({data:{type:Array,default:[]},width:{type:String,default:"100px"},itemWidth:{type:String,default:"100px"},itemPadding:{type:String,default:"15px 0"},itemTextColor:{type:String,default:""},itemTextSize:{type:String,default:""},activeItemTextColor:{type:String,default:""},itemBgColor:{type:String,default:""},itemBorderRadius:{type:String,default:"0"},activeItemBgColor:{type:String,default:""},disabled:{type:Boolean,default:!1},anchor:{type:Boolean,default:!1},showLine:{type:Boolean,default:!0},lineColor:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})},customItemStyle:{type:Object,default:new UTSJSONObject({})},customBarStyle:{type:Object,default:new UTSJSONObject({})},customContentStyle:{type:Object,default:new UTSJSONObject({})}}),new UTSJSONObject({modelValue:{type:Number,default:0},modelModifiers:{}})),emits:l(["change"],["update:modelValue"]),setup(t,a){var l=a.emit;s.utils;const C=s.colors,T=l,B=o(t,"modelValue");r(B,(e=>{T("change",e)}));const _=t,I=n((()=>p("color",_.itemBgColor,C.value.transparent))),J=n((()=>p("color",_.activeItemBgColor,C.value.front))),N=n((()=>p("font",_.itemTextSize,s.configs.font.size(3)))),z=n((()=>p("color",_.itemTextColor,C.value.text))),U=n((()=>p("color",_.activeItemTextColor,C.value.primary))),M=n((()=>_.anchor?_.data[B.value].id:"")),k=n((()=>p("color",_.lineColor,C.value.primary))),L=n((()=>p("radius",_.itemBorderRadius,"0px"))),R=n((()=>{const e=new Map;return e.set("width",_.width),e.set("transition-duration",s.configs.aniTime.normal),e})),V=n((()=>{const e=new Map;return e.set("width",_.itemWidth),e.set("padding",_.itemPadding),e.set("border-radius",L.value),e})),P=n((()=>new Map));return(a=null,l=null)=>{const s=j(i("sn-text"),e),o=h,r=x,n=f,p=O;return y(),d(n,{class:"sn-siderbar-contain",style:c([m(P),t.customStyle])},{default:u((()=>[b(n,{class:"sn-siderbar-bar",style:c([m(R),t.customBarStyle])},{default:u((()=>[b(r,{class:"sn-siderbar-bar-list","show-scrollbar":!1,bounces:!1},{default:u((()=>[(y(!0),S(w,null,g(t.data,((e,a)=>(y(),d(o,{class:"sn-siderbar-bar-item",style:c([m(V),{background:B.value==a?m(J):m(I),borderLeft:t.showLine?"2px solid ".concat(B.value==a?m(k):m(C).transparent):"none"},t.customItemStyle]),onClick:(e=null)=>function(e){if(_.disabled)return null;B.value=e}(a)},{default:u((()=>[b(s,{align:"center",text:e.text,color:B.value==a?m(U):m(z),size:m(N)},null,8,["text","color","size"])])),_:2},1032,["style","onClick"])))),256))])),_:1})])),_:1},8,["style"]),b(p,{class:"sn-siderbar-scroll-view","show-scrollbar":!1,"scroll-with-animation":!0,"scroll-into-view":m(M),style:c([t.customContentStyle])},{default:u((()=>[v(a.$slots,"default",{},void 0,!0)])),_:3},8,["scroll-into-view","style"])])),_:3},8,["style"])}}})),[["__scopeId","data-v-bc67de07"]]);export{C as _};