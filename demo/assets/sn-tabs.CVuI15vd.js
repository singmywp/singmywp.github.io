import{d as e,r as t,c as l,w as a,l as i,m as o,b as n,e as s,f as u,q as r,u as d,k as g,o as c,g as f,t as v,h as m,j as b,F as x,S as p,p as h}from"./index-DNTc1GxZ.js";import{b as y,c as C}from"./sn-button.BaZjRh9m.js";import{$ as S,r as w}from"./uni-app.es.D9ZkitmT.js";import{_}from"./sn-badge.jE1Gx1zd.js";import{u as k}from"./useResize.BiiI_cO4.js";const z=C(e(Object.assign({name:"sn-tabs"},{__name:"sn-tabs",props:{modelValue:{type:Number,default:0},scrollable:{type:Boolean,default:!1},data:{type:Array,default:[]},width:{type:String,default:"100%"},height:{type:String,default:"40px"},bgColor:{type:String,default:""},textColor:{type:String,default:""},textSize:{type:String,default:""},disabledTextColor:{type:String,default:""},activeTextColor:{type:String,default:""},itemPadding:{type:String,default:"12px"},lineColor:{type:String,default:""},lineWidth:{type:String,default:""},lineHeight:{type:String,default:"2px"},customItemStyle:{type:Object,default:{}},customTextStyle:{type:Object,default:{}},customActiveItemStyle:{type:Object,default:{}},customStyle:{type:Object,default:{}}},emits:["change","update:modelValue"],setup(e,C){var z=C.emit;const T=S.utils,j=S.colors,M=z,A=e,B=t(null),R=t(null),E=t(null),I=t(null),O=t(null),P=t(0),V=t(0),H=t(0),W=t(0),Z=t(""),$=l({get:()=>A.modelValue,set:e=>{M("update:modelValue",e)}}),q=l((()=>""==A.bgColor?j.value.front:A.bgColor)),F=l((()=>""==A.textColor?j.value.title:A.textColor)),N=l((()=>""==A.textSize?S.configs.font.size(2):A.textSize)),X=l((()=>""==A.activeTextColor?j.value.primary:A.activeTextColor)),D=l((()=>""==A.disabledTextColor?j.value.disabledText:A.disabledTextColor)),G=l((()=>""==A.lineColor?j.value.primary:A.lineColor)),J=l((()=>{let e=new Map;return e.set("width",A.width),e.set("height",A.height),e.set("background",q.value),e.set("border-radius",S.configs.radius.normal),e.set("transition-duration",S.configs.aniTime.normal),e})),K=l((()=>{let e=new Map,t=T.getPx(A.itemPadding.split(" ")[0]);return A.scrollable?(e.set("padding-left","".concat(t,"px")),e.set("padding-right","".concat(t,"px"))):e.set("flex","1"),e.set("transition-duration",S.configs.aniTime.normal),e})),L=l((()=>{let e=new Map;return e.set("transform","translateX(".concat(P.value,"px")),e.set("width","".concat(V.value,"px")),e.set("height",A.lineHeight),e.set("bottom","".concat(T.getPx(A.lineHeight),"px")),e.set("background",G.value),e.set("border-radius",S.configs.radius.circle),e.set("transition-duration",S.configs.aniTime.normal),e}));function Q(e){var t,l,a,i,o,n;if(0==A.data.length)return null;let s=A.data[e].id,u=0,r=0,d=!1;O.value.forEach(((e,t)=>{let l=e.getBoundingClientRect().width;u+=l,s==e.getAttribute("id")?d=!0:d||(r+=l)})),H.value=u;let g=O.value[$.value].getBoundingClientRect().width,c=""==A.lineWidth?.7*g:T.getPx(A.lineWidth);r+=(g-c)/2,V.value=c,P.value=r;let f=O.value[$.value].getBoundingClientRect(),v=R.value.getBoundingClientRect(),m=v.left-(null!==(a=null===(l=null===(t=E.value)||void 0===t?void 0:t.getBoundingClientRect())||void 0===l?void 0:l.width)&&void 0!==a?a:0),b=v.right-(null!==(n=null===(o=null===(i=I.value)||void 0===i?void 0:i.getBoundingClientRect())||void 0===o?void 0:o.width)&&void 0!==n?n:0),x="";if(m<=f.left){x=O.value[Math.max(0,$.value-2)].getAttribute("id")}else if(b<=f.right){x=O.value[Math.min(O.value.length-1,$.value+2)].getAttribute("id")}else{x=O.value[Math.max(0,$.value-2)].getAttribute("id")}Z.value=x}return a((()=>A.modelValue),((e,t)=>{var l;if(e==$.value)return null;(e>=A.data.length||e<0||null!==(l=A.data[e].disabled)&&void 0!==l&&l)&&($.value=t),M("change",e),Q(e)})),i((()=>{function e(){A.data.length>0&&Q(Math.min(A.data.length-1,Math.max(0,$.value)))}W.value=$.value,o((()=>{e()})),k(B.value,(()=>{e()}))})),(t=null,l=null)=>{const a=g,i=w(n("sn-text"),y),C=w(n("sn-badge"),_),S=p;return c(),s(a,{class:"sn-tabs",ref_key:"containEle",ref:B,style:r([d(J),e.customStyle])},{default:u((()=>[f(a,{ref_key:"leftEle",ref:E},{default:u((()=>[v(t.$slots,"left",{},void 0,!0)])),_:3},512),f(S,{class:"sn-tabs-scroll",ref_key:"scrollEle",ref:R,"show-scrollbar":!1,direction:e.scrollable?"horizontal":"none","scroll-into-view":d(Z),"scroll-with-animation":!0},{default:u((()=>[(c(!0),m(x,null,b(e.data,((t,l)=>{var n;return c(),s(a,{class:h(["sn-tabs-item",null!==(n=t.disabled)&&void 0!==n&&n?"disabled":""]),ref_for:!0,ref_key:"itemsEle",ref:O,key:l,id:t.id,onClick:(e=null)=>function(e,t){var l;if(null!==(l=e.disabled)&&void 0!==l&&l)return null;$.value=t,M("change",t),Q(t),o((()=>{Q(t)}))}(t,l),style:r(l==d($)?[d(K),e.customItemStyle]:[d(K),e.customActiveItemStyle])},{default:u((()=>{var a,o,n,g,v,m,b,x,p,h;return[null==t.badgeConfig?(c(),s(i,{key:0,class:"sn-tabs-item-text",align:"center",text:t.text,size:d(N),color:null!==(a=t.disabled)&&void 0!==a&&a?d(D):l==d($)?d(X):d(F)},null,8,["text","size","color"])):(c(),s(C,{key:1,value:null!==(o=t.badgeConfig.value)&&void 0!==o?o:0,max:null!==(n=t.badgeConfig.max)&&void 0!==n?n:-1,size:null!==(g=t.badgeConfig.size)&&void 0!==g?g:"",offset:null!==(v=t.badgeConfig.offset)&&void 0!==v?v:"translate(15px, -5px)",mode:null!==(m=t.badgeConfig.mode)&&void 0!==m?m:"number",text:null!==(b=t.badgeConfig.text)&&void 0!==b?b:"",showZero:null!==(x=t.badgeConfig.showZero)&&void 0!==x&&x,textColor:null!==(p=t.badgeConfig.textColor)&&void 0!==p?p:"",bgColor:null!==(h=t.badgeConfig.bgColor)&&void 0!==h?h:""},{default:u((()=>{var a;return[f(i,{class:"sn-tabs-item-text",align:"center",text:t.text,size:d(N),color:null!==(a=t.disabled)&&void 0!==a&&a?d(D):l==d($)?d(X):d(F),style:r([e.customTextStyle])},null,8,["text","size","color","style"])]})),_:2},1032,["value","max","size","offset","mode","text","showZero","textColor","bgColor"]))]})),_:2},1032,["class","id","onClick","style"])})),128)),f(a,{class:"sn-tabs-line",style:r(d(L))},null,8,["style"])])),_:1},8,["direction","scroll-into-view"]),f(a,{ref_key:"rightEle",ref:I},{default:u((()=>[v(t.$slots,"right",{},void 0,!0)])),_:3},512)])),_:3},8,["style"])}}})),[["__scopeId","data-v-084bf661"]]);export{z as _};