import{d as e,r as t,c as l,w as a,k as i,l as o,b as n,e as s,f as u,m as r,u as d,p as g,o as c,g as f,t as v,h as m,j as b,F as x,S as p}from"./index-D82xabMX.js";import{b as h,c as y}from"./sn-button.CJ0ZsVkl.js";import{$ as C,r as S}from"./uni-app.es.Cv0ss-rw.js";import{_ as w}from"./sn-badge.DHHFmXVC.js";import{u as _}from"./useResize.C5gdmbvL.js";const k=y(e(Object.assign({name:"sn-tabs"},{__name:"sn-tabs",props:{modelValue:{type:Number,default:0},scrollable:{type:Boolean,default:!1},data:{type:Array,default:[]},width:{type:String,default:"100%"},height:{type:String,default:"40px"},bgColor:{type:String,default:""},textColor:{type:String,default:""},textSize:{type:String,default:""},disabledTextColor:{type:String,default:""},activeTextColor:{type:String,default:""},itemPadding:{type:String,default:"12px"},lineColor:{type:String,default:""},lineWidth:{type:String,default:""},lineHeight:{type:String,default:"2px"},customItemStyle:{type:Object,default:{}},customTextStyle:{type:Object,default:{}},customActiveItemStyle:{type:Object,default:{}},customStyle:{type:Object,default:{}}},emits:["change","update:modelValue"],setup(e,y){var k=y.emit;const z=C.utils,j=C.colors,T=k,M=e,A=t(null),B=t(null),R=t(null),E=t(null),I=t(null),O=t(0),P=t(0),V=t(0),H=t(0),W=t(""),Z=l({get:()=>M.modelValue,set:e=>{T("update:modelValue",e)}}),$=l((()=>""==M.bgColor?j.value.front:M.bgColor)),F=l((()=>""==M.textColor?j.value.title:M.textColor)),N=l((()=>""==M.textSize?C.configs.font.size(2):M.textSize)),X=l((()=>""==M.activeTextColor?j.value.primary:M.activeTextColor)),q=l((()=>""==M.disabledTextColor?j.value.disabledText:M.disabledTextColor)),D=l((()=>""==M.lineColor?j.value.primary:M.lineColor)),G=l((()=>{let e=new Map;return e.set("width",M.width),e.set("height",M.height),e.set("background",$.value),e.set("border-radius",C.configs.radius.normal),e.set("transition-duration",C.configs.aniTime.normal),e})),J=l((()=>{let e=new Map,t=z.getPx(M.itemPadding.split(" ")[0]);return M.scrollable?(e.set("padding-left","".concat(t,"px")),e.set("padding-right","".concat(t,"px"))):e.set("flex","1"),e.set("transition-duration",C.configs.aniTime.normal),e})),K=l((()=>{let e=new Map;return e.set("transform","translateX(".concat(O.value,"px")),e.set("width","".concat(P.value,"px")),e.set("height",M.lineHeight),e.set("bottom","".concat(z.getPx(M.lineHeight),"px")),e.set("background",D.value),e.set("border-radius",C.configs.radius.circle),e.set("transition-duration",C.configs.aniTime.normal),e}));function L(e){var t,l,a,i,o,n;if(0==M.data.length)return null;let s=M.data[e].id,u=0,r=0,d=!1;I.value.forEach(((e,t)=>{let l=e.getBoundingClientRect().width;u+=l,s==e.getAttribute("id")?d=!0:d||(r+=l)})),V.value=u;let g=I.value[Z.value].getBoundingClientRect().width,c=""==M.lineWidth?.7*g:z.getPx(M.lineWidth);r+=(g-c)/2,P.value=c,O.value=r;let f=I.value[Z.value].getBoundingClientRect(),v=B.value.getBoundingClientRect(),m=v.left-(null!==(a=null===(l=null===(t=R.value)||void 0===t?void 0:t.getBoundingClientRect())||void 0===l?void 0:l.width)&&void 0!==a?a:0),b=v.right-(null!==(n=null===(o=null===(i=E.value)||void 0===i?void 0:i.getBoundingClientRect())||void 0===o?void 0:o.width)&&void 0!==n?n:0),x="";if(m<=f.left){x=I.value[Math.max(0,Z.value-2)].getAttribute("id")}else if(b<=f.right){x=I.value[Math.min(I.value.length-1,Z.value+2)].getAttribute("id")}else{x=I.value[Math.max(0,Z.value-2)].getAttribute("id")}W.value=x}return a((()=>M.modelValue),((e,t)=>{var l;if(e==Z.value)return null;(e>=M.data.length||e<0||null!==(l=M.data[e].disabled)&&void 0!==l&&l)&&(Z.value=t),T("change",e),L(e)})),i((()=>{function e(){M.data.length>0&&L(Math.min(M.data.length-1,Math.max(0,Z.value)))}H.value=Z.value,o((()=>{e()})),_(A.value,(()=>{e()}))})),(t=null,l=null)=>{const a=g,i=S(n("sn-text"),h),y=S(n("sn-badge"),w),C=p;return c(),s(a,{class:"sn-tabs",ref_key:"containEle",ref:A,style:r([d(G),e.customStyle])},{default:u((()=>[f(a,{ref_key:"leftEle",ref:R},{default:u((()=>[v(t.$slots,"left",{},void 0,!0)])),_:3},512),f(C,{class:"sn-tabs-scroll",ref_key:"scrollEle",ref:B,"show-scrollbar":!1,direction:e.scrollable?"horizontal":"none","scroll-into-view":d(W),"scroll-with-animation":!0},{default:u((()=>[(c(!0),m(x,null,b(e.data,((t,l)=>(c(),s(a,{class:"sn-tabs-item",ref_for:!0,ref_key:"itemsEle",ref:I,key:l,id:t.id,onClick:(e=null)=>function(e,t){var l;if(null!==(l=e.disabled)&&void 0!==l&&l)return null;Z.value=t,T("change",t),L(t),o((()=>{L(t)}))}(t,l),style:r(l==d(Z)?[d(J),e.customItemStyle]:[d(J),e.customActiveItemStyle])},{default:u((()=>{var a,o,n,g,v,m,b,x,p,h;return[null==t.badgeConfig?(c(),s(i,{key:0,class:"sn-tabs-item-text",align:"center",text:t.text,size:d(N),color:null!==(a=t.disabled)&&void 0!==a&&a?d(q):l==d(Z)?d(X):d(F)},null,8,["text","size","color"])):(c(),s(y,{key:1,value:null!==(o=t.badgeConfig.value)&&void 0!==o?o:0,max:null!==(n=t.badgeConfig.max)&&void 0!==n?n:-1,size:null!==(g=t.badgeConfig.size)&&void 0!==g?g:"",offset:null!==(v=t.badgeConfig.offset)&&void 0!==v?v:"translate(15px, -5px)",mode:null!==(m=t.badgeConfig.mode)&&void 0!==m?m:"number",text:null!==(b=t.badgeConfig.text)&&void 0!==b?b:"",showZero:null!==(x=t.badgeConfig.showZero)&&void 0!==x&&x,textColor:null!==(p=t.badgeConfig.textColor)&&void 0!==p?p:"",bgColor:null!==(h=t.badgeConfig.bgColor)&&void 0!==h?h:""},{default:u((()=>{var a;return[f(i,{class:"sn-tabs-item-text",align:"center",text:t.text,size:d(N),color:null!==(a=t.disabled)&&void 0!==a&&a?d(q):l==d(Z)?d(X):d(F),style:r([e.customTextStyle])},null,8,["text","size","color","style"])]})),_:2},1032,["value","max","size","offset","mode","text","showZero","textColor","bgColor"]))]})),_:2},1032,["id","onClick","style"])))),128)),f(a,{class:"sn-tabs-line",style:r(d(K))},null,8,["style"])])),_:1},8,["direction","scroll-into-view"]),f(a,{ref_key:"rightEle",ref:E},{default:u((()=>[v(t.$slots,"right",{},void 0,!0)])),_:3},512)])),_:3},8,["style"])}}})),[["__scopeId","data-v-a885f2e8"]]);export{k as _};
