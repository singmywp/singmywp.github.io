import{b as t,c as e}from"./sn-button.BaZjRh9m.js";import{d as o,c as s,b as l,o as a,e as r,f as n,u as i,q as c,v as u,t as d,k as p}from"./index-DNTc1GxZ.js";import{$ as f,r as m}from"./uni-app.es.D9ZkitmT.js";const g=e(o({__name:"com-card",props:{title:{type:String,default:""},note:{type:String,default:""},titleColor:{type:String,default:""},noteColor:{type:String,default:""},bgColor:{type:String,default:""},spaceBeforeParagraph:{type:Boolean,default:!0},customStyle:{type:Object,default:{}}},setup(e){const o=f.colors,g=e,y=s((()=>""==g.noteColor?o.value.textLight:g.noteColor)),b=s((()=>""==g.titleColor?o.value.title:g.titleColor)),x=s((()=>""==g.bgColor?o.value.front:g.bgColor)),S=s((()=>g.spaceBeforeParagraph?"　　"+g.note.replaceAll("\\n","\n　　"):g.note)),C=s((()=>{let t=new Map;return t.set("background",x.value),t.set("border-radius",f.configs.radius.normal),t.set("transition-duration",f.configs.aniTime.normal),t}));return(o=null,s=null)=>{const g=m(l("sn-text"),t),x=p;return a(),r(x,{class:"com-card",style:c([i(C),e.customStyle])},{default:n((()=>[""!=e.title?(a(),r(g,{key:0,class:"com-card-title",font:"misans-semibold",text:e.title,size:i(f).configs.font.size(4),color:i(b),style:c([new UTSJSONObject({marginBottom:i(f).utils.isEmpty(i(S))?"0px":"10px"})])},null,8,["text","size","color","style"])):u("",!0),""!=e.note?(a(),r(g,{key:1,class:"com-card-note",text:i(S),size:i(f).configs.font.size(2),color:i(y),style:c([new UTSJSONObject({marginBottom:null!=o.$slots.default?"10px":"0px"})])},null,8,["text","size","color","style"])):u("",!0),d(o.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}}),[["__scopeId","data-v-4d6ddef8"]]);export{g as _};