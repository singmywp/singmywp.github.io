import{d as e,$ as t,c as s,a,b as n,e as o,q as r,u as l,y as u,j as i,o as d,B as c,f,C as m}from"./index-DoInGK9X.js";import{b,c as y}from"./sn-button.B1LvAG78.js";import{r as g}from"./uni-app.es.K1mZmM8s.js";const p=y(e(Object.assign({name:"sn-badge"},{__name:"sn-badge",props:{value:{type:Number,default:0},text:{type:String,default:""},bgColor:{type:String,default:""},textColor:{type:String,default:"#fff"},mode:{type:String,default:"number"},max:{type:Number,default:-1},size:{type:String,default:""},showZero:{type:Boolean,default:!1},offset:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})},customTextStyle:{type:Object,default:new UTSJSONObject({})},customDotStyle:{type:Object,default:new UTSJSONObject({})},customContainStyle:{type:Object,default:new UTSJSONObject({})}},setup(e){const y=t.utils,p=t.colors,x=e,S=s((()=>["number","dot","text"].includes(x.mode)?x.mode:"number")),v=s((()=>!y.isEmpty(x.text))),j=s((()=>u("color",x.bgColor,p.value.error))),O=s((()=>u("font",x.size,"dot"==S.value?"8px":t.configs.font.size(1)))),w=s((()=>u("other",x.offset,"translate(25%, -25%)"))),z=s((()=>{if("number"==S.value){let e=x.max,t=x.value;return-1==e||t<=e?t.toString():e.toString()+"+"}return"text"==S.value?x.text:""})),T=s((()=>{let e=new Map;return e.set("background",j.value),e.set("transform",w.value),e.set("width",O.value),e.set("height",O.value),e.set("z-index",t.configs.zIndex.badge),e.set("border-radius",t.configs.radius.circle),e.set("transition-duration",t.configs.aniTime.normal),e})),h=s((()=>{let e=new Map;return e.set("transform",w.value),e.set("background",j.value),e.set("z-index",t.configs.zIndex.badge),e.set("border-radius",t.configs.radius.circle),e.set("transition-duration",t.configs.aniTime.normal),e})),C=s((()=>{let e=new Map;return e.set("transition-duration",t.configs.aniTime.normal),e}));return(t=null,s=null)=>{const u=i,y=g(a("sn-text"),b);return d(),n(u,{class:"sn-badge",ref:"badgeEle",style:r([l(C),e.customStyle])},{default:o((()=>[c(t.$slots,"default",{},void 0,!0),"dot"==l(S)||"text"==l(S)&&!l(v)?(d(),n(u,{key:0,class:"sn-badge-dot",style:r([l(T),e.customDotStyle])},null,8,["style"])):"number"==l(S)&&(0!=e.value||e.showZero)||"text"==l(S)&&l(v)?(d(),n(u,{key:1,class:"sn-badge-number-text",style:r([l(h),e.customStyle])},{default:o((()=>[f(y,{class:"sn-badge-number-text-text",font:"sans-serif",lineHeight:"1.3",text:l(z),color:""==e.textColor?"#fff":e.textColor,size:l(O),style:r([e.customTextStyle])},null,8,["text","color","size","style"])])),_:1},8,["style"])):m("",!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-1639102c"]]);export{p as _};