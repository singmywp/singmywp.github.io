import{d as e,c as t,b as s,e as a,f as o,m as n,u as l,p as r,o as u,t as i,g as d,v as f}from"./index-BV7wVSs2.js";import{b as c,c as m}from"./sn-button.68-4Ol7n.js";import{$ as g,r as b}from"./uni-app.es.BzKMvEv9.js";const y=m(e(Object.assign({name:"sn-badge"},{__name:"sn-badge",props:{value:{type:Number,default:0},text:{type:String,default:""},bgColor:{type:String,default:""},textColor:{type:String,default:"#fff"},mode:{type:String,default:"number"},max:{type:Number,default:-1},size:{type:String,default:""},showZero:{type:Boolean,default:!1},offset:{type:String,default:""},customStyle:{type:Object,default:{}},customTextStyle:{type:Object,default:{}},customDotStyle:{type:Object,default:{}},customContainStyle:{type:Object,default:{}}},setup(e){const m=g.utils,y=g.colors,p=e,x=t((()=>["number","dot","text"].includes(p.mode)?p.mode:"number")),v=t((()=>!m.isEmpty(p.text))),S=t((()=>""==p.bgColor?y.value.error:p.bgColor)),z=t((()=>""==p.size?"dot"==x.value?"8px":g.configs.font.size(1):p.size)),j=t((()=>""==p.offset?"translate(25%, -25%)":p.offset)),C=t((()=>{if("number"==x.value){let e=p.max,t=p.value;return-1==e||t<=e?t.toString():e.toString()+"+"}return"text"==x.value?p.text:""})),_=t((()=>{let e=new Map;return e.set("background",S.value),e.set("transform",j.value),e.set("width",z.value),e.set("height",z.value),e.set("z-index",g.configs.zIndex.badge),e.set("border-radius",g.configs.radius.circle),e.set("transition-duration",g.configs.aniTime.normal),e})),h=t((()=>{let e=new Map;return e.set("transform",j.value),e.set("background",S.value),e.set("z-index",g.configs.zIndex.badge),e.set("border-radius",g.configs.radius.circle),e.set("transition-duration",g.configs.aniTime.normal),e})),w=t((()=>{let e=new Map;return e.set("transition-duration",g.configs.aniTime.normal),e}));return(t=null,m=null)=>{const g=r,y=b(s("sn-text"),c);return u(),a(g,{class:"sn-badge",ref:"badgeEle",style:n([l(w),e.customStyle])},{default:o((()=>[i(t.$slots,"default",{},void 0,!0),"dot"==l(x)||"text"==l(x)&&!l(v)?(u(),a(g,{key:0,class:"sn-badge-dot",style:n([l(_),e.customDotStyle])},null,8,["style"])):"number"==l(x)&&(0!=e.value||e.showZero)||"text"==l(x)&&l(v)?(u(),a(g,{key:1,class:"sn-badge-number-text",style:n([l(h),e.customStyle])},{default:o((()=>[d(y,{class:"sn-badge-number-text-text",font:"sans-serif",lineHeight:"1.3",text:l(C),color:""==e.textColor?"#fff":e.textColor,size:l(z),style:n([e.customTextStyle])},null,8,["text","color","size","style"])])),_:1},8,["style"])):f("",!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-a1322215"]]);export{y as _};