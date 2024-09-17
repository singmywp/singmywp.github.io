import{b as e,c as a}from"./sn-button.DCeBN0oM.js";import{$ as t,a2 as s,d as l,a3 as r,r as n,k as i,c as o,l as u,a as c,b as m,e as b,q as d,z as f,a4 as p,j as y,o as g,f as k,u as v,v as x,t as h,x as S}from"./index-BDGnenFq.js";import{r as j}from"./uni-app.es.BfR9KIrQ.js";import{_ as w}from"./sn-alert.YjlOp3ma.js";import{_}from"./sn-line.CxWqAnnd.js";const z=t.utils;const N=a(l(Object.assign({name:"sn-form-item"},{__name:"sn-form-item",props:{type:{type:String,default:""},field:{type:String,default:""},rule:{type:Object,default:()=>new r({})},label:{type:String,default:""},labelColor:{type:String,default:""},labelSize:{type:String,default:""},labelWidth:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))}},setup(a,l){var r=l.expose;const N=t.utils,O=t.colors,q=S(),C=a,I=n(!0),$=n("　"),E=i("type",n("embed")),L=i("labelColor",o((()=>O.value.textLight))),P=i("labelSize",o((()=>t.configs.font.size(3)))),A=i("showBorder",n(!1)),M=i("showError",n(!0)),T=o((()=>f("other",C.type,E.value))),U=o((()=>{var e;return null!==(e=C.rule.required)&&void 0!==e&&e})),J=o((()=>f("color",C.labelColor,L.value))),Q=o((()=>f("font",C.labelSize,P.value))),W=o((()=>{let e=new Map;return"float"==T.value?(e.set("padding","10px 15px"),e.set("background",O.value.infoLight),e.set("border-radius",t.configs.radius.circle)):(e.set("padding","0px"),e.set("background",O.value.transparent),e.set("border-radius","")),e.set("transition-duration",t.configs.aniTime.normal),e})),B=o((()=>{let e=new Map;return e.set("width",C.labelWidth),e}));return r({verify:function(e=null,a){return function(e,a,t,l,r=null,n){let i=l,o=i.type,u=!0,c=i.message,m=!1;if("string"==typeof r?""==r&&(m=!0):Array.isArray(r)&&0==r.length&&(m=!0),null!=i.transform&&(r=i.transform(r)),null!=i.valid){let e=i.valid(r);u=""==e.trim(),c=u?c:e}if(null!=i.pattern&&"string"==typeof r&&(i.pattern.test(r)||(u=!1)),1==i.required&&"string"==typeof r&&z.isEmpty(r)&&(u=!1),null!=o){let e=function(e){typeof r!=e&&(u=!1)};switch(o){case"string":e("string");break;case"number":z.isNumber(r)||(u=!1);break;case"boolean":e("boolean");break;case"object":e("object");break;case"array":e("array");break;case"integer":z.isNumber(r)&&z.isInteger(r)||(u=!1);break;case"float":z.isNumber(r)&&z.isFloat(r)||(u=!1);break;case"enum":null==i.enum||i.enum.includes(r)||(u=!1);break;case"url":m||z.isURL(r)||(u=!1);break;case"email":m||z.isEmail(r)||(u=!1);break;case"idcard":m||z.isIDCard(r)||(u=!1);break;case"phone":m||z.isPhone(r)||(u=!1);break;case"landline":m||z.isLandline(r)||(u=!1);break;case"qqnumber":m||z.isQQNumber(r)||(u=!1);break;case"abc":m||z.isAbc(r)||(u=!1);break;case"chinese":m||z.isChinese(r)||(u=!1);break;case"carnumber":m||z.isCarNumber(r)||(u=!1);break;case"ipv4":m||z.isIPv4(r)||(u=!1);break;case"ipv6":m||z.isIPv6(r)||(u=!1)}}"string"==typeof r&&(null!=i.min&&r.length<i.min&&(u=!1),null!=i.max&&r.length>i.max&&(u=!1),null!=i.len&&(u=r.length==i.len)),z.isNumber(r)&&(null!=i.min&&r<i.min&&(u=!1),null!=i.max&&r>i.max&&(u=!1)),e.value=u,a.value=null!=c?c:"",n(new s({message:c,valid:u,field:t}))}(I,$,C.field,C.rule,e,a)}}),u((()=>{!function(){let e=q.proxy,a=N.findParent(e,["sn-form"]),t=new p({field:C.field,instance:e});null!=a&&a.$callMethod("register",t)}()})),(t=null,s=null)=>{const l=j(c("sn-text"),e),r=y,n=j(c("sn-alert"),w),i=j(c("sn-line"),_);return g(),m(r,{class:"sn-form-item",style:d([a.customStyle])},{default:b((()=>[k(r,{class:"sn-form-item-body",style:d(v(W))},{default:b((()=>[k(r,{class:"sn-form-item-label",style:d(v(B))},{default:b((()=>[v(U)?(g(),m(l,{key:0,class:"sn-form-item-label-required",text:"*",color:"$error",size:v(Q)},null,8,["size"])):x("",!0),k(l,{text:a.label,color:v(J),size:v(Q)},null,8,["text","color","size"])])),_:1},8,["style"]),k(r,{class:"sn-form-item-content"},{default:b((()=>[h(t.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style"]),v(M)&&!v(I)?h(t.$slots,"error",{key:0},(()=>[k(n,{type:"error",class:"sn-form-item-error",text:v($)},null,8,["text"])]),!0):x("",!0),v(A)&&"embed"==v(T)?(g(),m(i,{key:1,margin:"15px 0 0 0"})):x("",!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-e32f269d"]]);export{N as _};