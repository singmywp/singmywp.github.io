import{d as t,$ as e,c as a,b as s,e as n,q as l,u as r,j as o,o as u,t as c}from"./index-BDGnenFq.js";import{c as p}from"./sn-button.DCeBN0oM.js";const f=p(t(Object.assign({name:"sn-col"},{__name:"sn-col",props:{gutter:{type:String,default:"0px"},span:{type:Number,default:12},offset:{type:Number,default:0},justify:{type:String,default:"center"},align:{type:String,default:"flex-start"},wrap:{type:Boolean,default:!1},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(t){const p=e.utils,f=t,i=a((()=>{let t=f.justify;return"left"==t||"start"==t?"flex-start":"right"==t||"end"==t?"flex-end":"around"==t||"between"==t?"space-".concat(t):t})),d=a((()=>{let t=f.align;return"top"==t||"start"==t?"flex-start":"bottom"==t||"end"==t?"flex-end":"around"==t||"between"==t?"space-".concat(t):t})),m=a((()=>Math.max(p.getPx(f.gutter),0))),g=a((()=>Math.max(f.offset,0))),x=a((()=>{let t=new Map;return t.set("width","".concat(100/12*f.span,"%")),t.set("justify-content",i.value),t.set("align-items",d.value),t.set("padding-left","".concat(m.value/2,"px")),t.set("padding-right","".concat(m.value/2,"px")),t.set("margin-feft","".concat(100/12*g.value,"%")),t.set("flex-wrap",f.wrap?"wrap":"nowrap"),t.set("transition-duration",e.configs.aniTime.normal),t}));return(e=null,a=null)=>{const p=o;return u(),s(p,{class:"sn-col",style:l([r(x),t.customStyle])},{default:n((()=>[c(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-11b2b731"]]);export{f as _};
