import{a as t,b as e,c as a}from"./sn-button.B1LvAG78.js";import{d as s,$ as l,c as o,a as n,b as i,e as r,q as c,u,y as f,j as d,o as p,B as y,C as g,f as S}from"./index-DoInGK9X.js";import{r as m}from"./uni-app.es.K1mZmM8s.js";const b=a(s(Object.assign({name:"sn-alert"},{__name:"sn-alert",props:{text:{type:String,default:""},icon:{type:String,default:""},type:{type:String,default:"info"},effect:{type:String,default:"light"},bgColor:{type:String,default:""},textColor:{type:String,default:""},textSize:{type:String,default:""},iconColor:{type:String,default:""},iconSize:{type:String,default:""},borderRadius:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})},customTextStyle:{type:Object,default:new UTSJSONObject({})},customIconStyle:{type:Object,default:new UTSJSONObject({})}},setup(a){const s=l.utils,b=l.colors,v=a,x=o((()=>!s.isEmpty(v.icon))),j=o((()=>["light","dark"].includes(v.effect)?v.effect:"light")),z=o((()=>["info","primary","success","error","warning"].includes(v.type)?v.type:"info")),O=o((()=>s.isEmpty(v.bgColor)?"dark"==j.value?b.value["".concat(z.value)]:b.value["".concat(z.value,"Light")]:v.bgColor)),T=o((()=>"info"==z.value?b.value.text:"dark"==j.value?b.value["".concat(z.value,"Text")]:b.value["".concat(z.value,"LightText")])),C=o((()=>f("color",v.iconColor,T.value))),_=o((()=>f("font",v.iconSize,l.configs.font.size(3)))),h=o((()=>f("font",v.textSize,l.configs.font.size(2)))),k=o((()=>f("radius",v.borderRadius,l.configs.radius.small))),w=o((()=>{let t=new Map;return t.set("background",O.value),t.set("border-radius",k.value),t.set("transition-duration",l.configs.aniTime.normal),t}));return(s=null,l=null)=>{const o=m(n("sn-icon"),t),f=m(n("sn-text"),e),b=d;return p(),i(b,{class:"sn-alert",style:c([u(w),a.customStyle])},{default:r((()=>[y(s.$slots,"default",{},(()=>[u(x)?(p(),i(o,{key:0,class:"sn-alert-icon",name:a.icon,color:u(C),size:u(_)},null,8,["name","color","size"])):g("",!0),S(f,{class:"sn-alert-text",text:a.text,color:u(T),size:u(h),style:c([a.customTextStyle])},null,8,["text","color","size","style"])]),!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-e08e87f8"]]);export{b as _};
