import{d as t,$ as a,N as e,c as s,b as r,q as n,u as o,y as u,j as c,o as i}from"./index-DoInGK9X.js";import{c as l}from"./sn-button.B1LvAG78.js";const d=l(t(Object.assign({name:"sn-gap"},{__name:"sn-gap",props:{height:{type:String,default:""},mode:{type:String,default:"custom"},bgColor:{type:String,default:""},borderRadius:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(t){const l=a.colors,d=t,g=e(),p=s((()=>u("color",d.bgColor,l.value.transparent))),m=s((()=>u("radius",d.borderRadius,a.configs.radius.normal))),b=s((()=>["custom","statusbar","safearea"].includes(d.mode)?d.mode:"custom")),f=s((()=>{switch(b.value){case"custom":default:return""==d.height?"20px":d.height;case"statusbar":return"".concat(g.statusBarHeight,"px");case"safearea":return"".concat(g.windowHeight-g.safeArea.height,"px")}})),h=s((()=>{let t=new Map;return t.set("height",f.value),t.set("background",p.value),t.set("border-radius",m.value),t.set("transition-duration",a.configs.aniTime.normal),t}));return(a=null,e=null)=>{const s=c;return i(),r(s,{class:"sn-gap",style:n([o(h),t.customStyle])},null,8,["style"])}}})),[["__scopeId","data-v-dea9da5a"]]);export{d as _};