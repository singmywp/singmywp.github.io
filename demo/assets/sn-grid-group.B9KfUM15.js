import{d as t,$ as e,k as s,r as a,c as n,b as o,e as l,q as r,u,j as c,o as i,t as d,y as p}from"./index-BDGnenFq.js";import{c as g}from"./sn-button.DCeBN0oM.js";const m=g(t(Object.assign({name:"sn-grid-item"},{__name:"sn-grid-item",props:{bgColor:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(t){const p=e.colors,g=t,m=s("col",a(4)),f=n((()=>""==g.bgColor?p.value.transparent:g.bgColor)),b=n((()=>{let t=new Map;return t.set("width","".concat(100/m.value,"%")),t.set("background",f.value),t.set("transition-duration",e.configs.aniTime.normal),t}));return(e=null,s=null)=>{const a=c;return i(),o(a,{class:"sn-grid-item",style:r([u(b),t.customStyle])},{default:l((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-e700b7f6"]]),f=g(t(Object.assign({name:"sn-grid-group"},{__name:"sn-grid-group",props:{col:{type:Number,default:4},align:{type:String,default:"left"},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(t){const s=t,a=n((()=>s.col));p("col",a);const g=n((()=>{let t=s.align;return"left"==t||"start"==t?"flex-start":"right"==t||"end"==t?"flex-end":"around"==t||"between"==t?"space-".concat(t):t})),m=n((()=>{let t=new Map;return t.set("justify-content",g.value),t.set("transition-duration",e.configs.aniTime.normal),t}));return(e=null,s=null)=>{const a=c;return i(),o(a,{class:"sn-grid-group",style:r([u(m),t.customStyle])},{default:l((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-2b8b8840"]]);export{m as _,f as a};