import{d as t,z as e,c as s,e as a,f as n,q as o,u as r,k as l,o as u,t as i,C as c}from"./index-DNTc1GxZ.js";import{$ as d}from"./uni-app.es.D9ZkitmT.js";import{c as p}from"./sn-button.BaZjRh9m.js";const g=p(t(Object.assign({name:"sn-grid-item"},{__name:"sn-grid-item",props:{bgColor:{type:String,default:""},customStyle:{type:Object,default:{}}},setup(t){const c=d.colors,p=t,g=e("col",3),m=s((()=>""==p.bgColor?c.value.transparent:p.bgColor)),f=s((()=>{let t=new Map;return t.set("width","".concat(100/g,"%")),t.set("background",m.value),t.set("transition-duration",d.configs.aniTime.normal),t}));return(e=null,s=null)=>{const c=l;return u(),a(c,{class:"sn-grid-item",style:o([r(f),t.customStyle])},{default:n((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-069a60be"]]),m=p(t(Object.assign({name:"sn-grid-group"},{__name:"sn-grid-group",props:{col:{type:Number,default:4},align:{type:String,default:"left"},customStyle:{type:Object,default:{}}},setup(t){const e=t;c("col",e.col);const p=s((()=>{let t=e.align;return"left"==t||"start"==t?"flex-start":"right"==t||"end"==t?"flex-end":"around"==t||"between"==t?"space-".concat(t):t})),g=s((()=>{let t=new Map;return t.set("justify-content",p.value),t.set("transition-duration",d.configs.aniTime.normal),t}));return(e=null,s=null)=>{const c=l;return u(),a(c,{class:"sn-grid-group",style:o([r(g),t.customStyle])},{default:n((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-e578fb2f"]]);export{g as _,m as a};