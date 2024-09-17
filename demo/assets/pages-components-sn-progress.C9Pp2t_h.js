import{_ as e,a as l}from"./sn-topbar.D5ol6wWa.js";import{d as t,$ as a,r as o,c as u,w as s,l as n,m as i,a as r,b as d,e as m,z as c,j as p,o as g,f as v,q as h,u as x,v as f,i as V}from"./index-BDGnenFq.js";import{r as y}from"./uni-app.es.BfR9KIrQ.js";import{b as S,c as T,_ as b}from"./sn-button.DCeBN0oM.js";import{u as w}from"./useResize.C1IVTLMN.js";import{_}from"./com-card.CltZjJtY.js";import{_ as j}from"./sn-gap.DaFvbZ58.js";import{_ as C}from"./sn-page.BIWIogO0.js";const U=T(t(Object.assign({name:"sn-progress"},{__name:"sn-progress",props:{modelValue:{type:Number,default:0},showValueText:{type:Boolean,default:!1},valueTextPosition:{type:String,default:"outside"},valueTextSize:{type:String,default:""},valueTextWidth:{type:String,default:"40px"},height:{type:String,default:"6px"},bgColor:{type:String,default:""},activeColor:{type:String,default:""},textColor:{type:String,default:""},borderRadius:{type:String,default:""},aniTime:{type:String,default:a.configs.aniTime.normal},customStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))},customTextStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))},customActiveStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))}},emits:["update:modelValue","change"],setup(e,l){var t=l.emit;const V=a.utils,T=a.colors,b=t,_=e,j=o(0),C=o(null),U=u({get:()=>_.modelValue,set:e=>{let l=Math.min(100,Math.max(0,e));b("update:modelValue",l),b("change",l)}});s((()=>_.modelValue),(e=>{U.value=e}),{immediate:!0});const O=u((()=>c("color",_.bgColor,T.value.line))),k=u((()=>c("color",_.activeColor,T.value.primary))),z=u((()=>["inside","outside"].includes(_.valueTextPosition)?_.valueTextPosition:"outside")),$=u((()=>c("color",_.textColor,"inside"==z.value?"#fff":T.value.text))),P=u((()=>c("radius",_.borderRadius,a.configs.radius.circle))),N=u((()=>c("aniTime",_.aniTime,a.configs.aniTime.normal))),J=u((()=>V.getPx(_.height))),M=u((()=>c("other",_.valueTextSize,V.addPx(.6*J.value)))),R=u((()=>c("other",_.valueTextSize,a.configs.font.size(2)))),H=u((()=>U.value/100*j.value)),A=u((()=>{let e=new Map;return e.set("height",_.height),e.set("background",O.value),e.set("border-radius",P.value),e.set("transition-duration",a.configs.aniTime.normal),e})),B=u((()=>{let e=new Map;return e.set("width",V.addPx(H.value)),e.set("height",_.height),e.set("border-radius",P.value),e.set("background",k.value),e.set("transition-property","width,height,background-color,border-radius"),e.set("transition-duration",N.value),e})),W=u((()=>{let e=new Map;return e.set("right","6px"),e})),q=u((()=>{let e=new Map;return e.set("width",_.valueTextWidth),e}));function D(){var e,l,t;j.value=null!==(t=null===(l=null===(e=C.value)||void 0===e?void 0:e.getBoundingClientRect())||void 0===l?void 0:l.width)&&void 0!==t?t:0}return n((()=>{i((()=>{D()})),w(C.value,(()=>{D()}))})),(l=null,t=null)=>{const a=y(r("sn-text"),S),o=p;return g(),d(o,{class:"sn-progress-contain"},{default:m((()=>[v(o,{class:"sn-progress",ref_key:"progressEle",ref:C,style:h([x(A),e.customStyle])},{default:m((()=>[v(o,{class:"sn-progress-active",style:h([x(B),e.customStyle])},{default:m((()=>[e.showValueText&&"inside"==x(z)?(g(),d(a,{key:0,class:"sn-progress-inside-text",text:"".concat(x(U),"%"),lineHeight:e.height,color:x($),size:x(M),style:h([x(W),e.customTextStyle])},null,8,["text","lineHeight","color","size","style"])):f("",!0)])),_:1},8,["style"])])),_:1},8,["style"]),e.showValueText&&"outside"==x(z)?(g(),d(a,{key:0,class:"sn-progress-outside-text",align:"right",text:"".concat(x(U),"%"),color:x($),size:x(R),style:h([x(q),e.customTextStyle])},null,8,["text","color","size","style"])):f("",!0)])),_:1})}}})),[["__scopeId","data-v-21fec528"]]),O=t({__name:"sn-progress",setup(t){a.colors,a.utils;const u=o(30),s=o(50),n=o(70),i=o(10),c=o(30);return(t=null,a=null)=>{const o=y(r("sn-topbar"),e),p=y(r("sn-progress"),U),h=y(r("com-card"),_),f=y(r("sn-button"),b),S=y(r("sn-row"),l),T=y(r("sn-gap"),j),w=y(r("sn-page"),C);return g(),d(w,null,{default:m((()=>[v(o,{title:"Progress 进度条"}),v(h,{title:"基础用法"},{default:m((()=>[v(p,{class:"m-t-10",modelValue:x(u),"onUpdate:modelValue":a[0]||(a[0]=(e=null)=>V(u)?u.value=e:null)},null,8,["modelValue"])])),_:1}),v(h,{title:"高度",note:"可以自定义进度条的高度，灵活百变"},{default:m((()=>[v(p,{class:"m-t-10",modelValue:x(s),"onUpdate:modelValue":a[1]||(a[1]=(e=null)=>V(s)?s.value=e:null),height:"3px"},null,8,["modelValue"]),v(p,{class:"m-t-20",modelValue:x(n),"onUpdate:modelValue":a[2]||(a[2]=(e=null)=>V(n)?n.value=e:null),height:"15px"},null,8,["modelValue"])])),_:1}),v(h,{title:"颜色",note:"百变颜色，随心所欲"},{default:m((()=>[v(p,{class:"m-t-10",modelValue:x(s),"onUpdate:modelValue":a[3]||(a[3]=(e=null)=>V(s)?s.value=e:null),height:"6px",activeColor:"$error"},null,8,["modelValue"]),v(p,{class:"m-t-10",modelValue:x(u),"onUpdate:modelValue":a[4]||(a[4]=(e=null)=>V(u)?u.value=e:null),height:"6px",activeColor:"$warning"},null,8,["modelValue"]),v(p,{class:"m-t-10",modelValue:x(n),"onUpdate:modelValue":a[5]||(a[5]=(e=null)=>V(n)?n.value=e:null),height:"6px",activeColor:"$primary"},null,8,["modelValue"]),v(p,{class:"m-t-10",modelValue:x(u),"onUpdate:modelValue":a[6]||(a[6]=(e=null)=>V(u)?u.value=e:null),height:"6px",activeColor:"$success"},null,8,["modelValue"])])),_:1}),v(h,{title:"动画时长",note:"支持双向绑定，动态赋值，可自由设置值变化时的动画时长"},{default:m((()=>[v(p,{class:"m-t-10",modelValue:x(i),"onUpdate:modelValue":a[7]||(a[7]=(e=null)=>V(i)?i.value=e:null)},null,8,["modelValue"]),v(p,{class:"m-t-10",modelValue:x(i),"onUpdate:modelValue":a[8]||(a[8]=(e=null)=>V(i)?i.value=e:null),aniTime:"$short",activeColor:"$warning"},null,8,["modelValue"]),v(p,{class:"m-t-10",modelValue:x(i),"onUpdate:modelValue":a[9]||(a[9]=(e=null)=>V(i)?i.value=e:null),aniTime:"$xlong",activeColor:"$success"},null,8,["modelValue"]),v(S,{class:"m-t-10"},{default:m((()=>[v(f,{text:"增加",onClick:a[10]||(a[10]=(e=null)=>i.value+=10)}),v(f,{class:"m-l-10",text:"减少",onClick:a[11]||(a[11]=(e=null)=>i.value-=10)})])),_:1})])),_:1}),v(h,{title:"文本",note:"支持显示当前值的文本，提供两种位置：内部和外部。"},{default:m((()=>[v(p,{class:"m-t-10",modelValue:x(c),"onUpdate:modelValue":a[12]||(a[12]=(e=null)=>V(c)?c.value=e:null),showValueText:""},null,8,["modelValue"]),v(p,{class:"m-t-10",modelValue:x(c),"onUpdate:modelValue":a[13]||(a[13]=(e=null)=>V(c)?c.value=e:null),height:"20px",showValueText:"",valueTextPosition:"inside",textColor:"black",activeColor:"$warning"},null,8,["modelValue"]),v(S,{class:"m-t-10"},{default:m((()=>[v(f,{text:"增加",onClick:a[14]||(a[14]=(e=null)=>c.value+=10)}),v(f,{class:"m-l-10",text:"减少",onClick:a[15]||(a[15]=(e=null)=>c.value-=10)})])),_:1})])),_:1}),v(T)])),_:1})}}});export{O as default};
