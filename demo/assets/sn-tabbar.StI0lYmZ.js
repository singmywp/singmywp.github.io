import{d as e,$ as l,r as t,w as a,c as n,aW as o,N as i,l as s,m as r,a as u,b as d,e as v,q as c,u as g,a6 as p,z as b,j as f,o as m,T as y,U as x,t as S,v as h,f as w,g as z,h as C,F as k,ai as _,x as O}from"./index-BDGnenFq.js";import{_ as P}from"./sn-avatar.BXOU_hdn.js";import{r as j}from"./uni-app.es.BfR9KIrQ.js";import{a as $,b as B,c as I}from"./sn-button.DCeBN0oM.js";import{_ as M}from"./sn-badge.Dfmw76z5.js";import{_ as T}from"./sn-view.D-czNReK.js";import{u as R}from"./useResize.C1IVTLMN.js";const N=I(e(Object.assign({name:"sn-tabbar"},{__name:"sn-tabbar",props:{data:{type:Array,default:[]},index:{type:Number,default:1},imageSize:{type:String,default:"35px"},fixed:{type:Boolean,default:!0},padding:{type:String,default:"5px"},margin:{type:String,default:"0px"},bgColor:{type:String,default:""},itemBorderRadius:{type:String,default:""},itemPadding:{type:String,default:"0px"},itemSpacing:{type:String,default:"0px"},itemBgColor:{type:String,default:""},itemActiveBgColor:{type:String,default:""},border:{type:String,default:""},borderRadius:{type:String,default:"0"},textColor:{type:String,default:""},textSize:{type:String,default:""},activeTextColor:{type:String,default:""},iconColor:{type:String,default:""},iconSize:{type:String,default:""},activeIconColor:{type:String,default:""},showPages:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},customStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))},customContainStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))}},emits:["change","heightchange"],setup(e,I){var N=I.expose,U=I.emit;const A=l.utils,J=l.colors,E=O(),Z=U,F=e,W=t(!1),q=t(!1),G=t(!1),L=t(!1),D=t(!1),H=t(0),K=t(0),Q=t(null),V=t(null),X=t(null),Y=t(0),ee=t(0),le=t(0);a(le,((e,l)=>{e!=l&&Z("heightchange",e)}));const te=n((()=>A.addPx(A.getPx(F.itemSpacing)/2))),ae=n((()=>{let e=p(),l=!1;return l=e.hasOwnProperty("1")||e.hasOwnProperty("2")||e.hasOwnProperty("3")||e.hasOwnProperty("4")||e.hasOwnProperty("5"),l})),ne=n((()=>b("radius",F.borderRadius,"0px"))),oe=n((()=>b("radius",F.itemBorderRadius,A.addPx(A.getInnerRadius(Y.value,A.getPx(ne.value),ee.value))))),ie=n((()=>b("color",F.bgColor,J.value.front))),se=n((()=>b("font",F.textSize,l.configs.font.size(0)))),re=n((()=>b("font",F.iconSize,l.configs.font.size(4)))),ue=n((()=>b("color",F.textColor,J.value.text))),de=n((()=>b("color",F.activeTextColor,J.value.primary))),ve=n((()=>b("color",F.iconColor,J.value.text))),ce=n((()=>b("color",F.activeIconColor,J.value.primary))),ge=n((()=>b("color",F.itemBgColor,J.value.transparent))),pe=n((()=>b("color",F.itemActiveBgColor,J.value.transparent))),be=n((()=>{let e=new Map;return e.set("position",F.fixed?"fixed":"flex"),e.set("background",J.value.transparent),e.set("padding-bottom",A.addPx(K.value)),e})),fe=n((()=>{let e=new Map;return e.set("flex-direction","row"),e.set("margin",F.margin),e.set("margin-top","0px"),e.set("padding",F.padding),e.set("border",F.border),e.set("background",ie.value),e.set("border-radius",ne.value),e})),me=n((()=>{let e=new Map;return e.set("transition-duration","0ms !important"),e})),ye=n((()=>{let e=new Map;return e.set("position","absolute"),e.set("top","0"),e.set("left","0"),e.set("right","0"),e.set("bottom","0"),e})),xe=n((()=>{let e=new Map;return e.set("padding",F.itemPadding),e.set("border-radius",oe.value),e})),Se=n((()=>{let e=new Map;return e.set("margin",F.margin),e.set("padding",F.padding),e.set("itemPadding",F.itemPadding),e.set("textSize",se.value),e.set("iconSize",re.value),e}));function he(){r((()=>{_().in(E.proxy).select(".sn-tabbar-bar-wrap").boundingClientRect().exec((e=>{var l;if(e.length>0){let t=e[0];le.value=null!==(l=null==t?void 0:t.height)&&void 0!==l?l:0}}))}))}function we(e){var l,t;let a=e-1;if(a<0||a>=F.data.length)return null;let n=F.data[a];if(null!=n.interceptor){if(!(null===(t=null===(l=n.interceptor)||void 0===l?void 0:l.call(n))||void 0===t||t))return null}H.value=e,function(e){switch(e){case 1:W.value=!0;break;case 2:q.value=!0;break;case 3:G.value=!0;break;case 4:L.value=!0;break;case 5:D.value=!0}}(e),Z("change",e)}function ze(){var e,l,t,a,n,o;if(null==V.value||null==X.value||0==(null!==(l=null===(e=X.value)||void 0===e?void 0:e.length)&&void 0!==l?l:0))return null;let i=V.value.$el.getBoundingClientRect(),s=X.value[0].getBoundingClientRect();Y.value=Math.min(null!==(t=i.width)&&void 0!==t?t:0,null!==(a=i.height)&&void 0!==a?a:0),ee.value=Math.min(null!==(n=s.width)&&void 0!==n?n:0,null!==(o=s.height)&&void 0!==o?o:0)}return N({changeToIndex:we}),o((()=>{var e;we(Math.min(Math.max(F.index,1),5));const l=i();K.value=null!==(e=l.safeAreaInsets.bottom)&&void 0!==e?e:0})),a(Se,(()=>{he()})),s((()=>{r((()=>{ze(),he()})),R(Q.value,(()=>{ze(),he()}))})),(l=null,t=null)=>{const a=f,n=j(u("sn-avatar"),P),o=j(u("sn-icon"),$),i=j(u("sn-text"),B),s=j(u("sn-badge"),M),r=j(u("sn-view"),T);return m(),d(a,{class:"sn-tabbar-contain",style:c(g(ae)&&e.showPages?[g(ye),e.customContainStyle]:[e.customContainStyle])},{default:v((()=>[null!=l.$slots[1]&&g(W)?y((m(),d(a,{key:0,class:"sn-tabbar-page"},{default:v((()=>[S(l.$slots,"1",{},void 0,!0)])),_:3},512)),[[x,1==g(H)]]):h("",!0),null!=l.$slots[2]&&g(q)?y((m(),d(a,{key:1,class:"sn-tabbar-page"},{default:v((()=>[S(l.$slots,"2",{},void 0,!0)])),_:3},512)),[[x,2==g(H)]]):h("",!0),null!=l.$slots[3]&&g(G)?y((m(),d(a,{key:2,class:"sn-tabbar-page"},{default:v((()=>[S(l.$slots,"3",{},void 0,!0)])),_:3},512)),[[x,3==g(H)]]):h("",!0),null!=l.$slots[4]&&g(L)?y((m(),d(a,{key:3,class:"sn-tabbar-page"},{default:v((()=>[S(l.$slots,"4",{},void 0,!0)])),_:3},512)),[[x,4==g(H)]]):h("",!0),null!=l.$slots[5]&&g(D)?y((m(),d(a,{key:4,class:"sn-tabbar-page"},{default:v((()=>[S(l.$slots,"5",{},void 0,!0)])),_:3},512)),[[x,5==g(H)]]):h("",!0),w(a,{class:"sn-tabbar-bar-wrap",ref_key:"barWrapEle",ref:Q,style:c(g(be))},{default:v((()=>[w(r,{class:"sn-tabbar-bar",ref_key:"barEle",ref:V,aniTime:"0ms",disabled:e.disabled,style:c([g(fe),e.customStyle])},{default:v((()=>[(m(!0),z(k,null,C(e.data,((l,t)=>(m(),d(a,{class:"sn-tabbar-bar-item",ref_for:!0,ref_key:"itemEles",ref:X,onClick:(e=null)=>function(e){if(F.disabled)return null;we(e+1)}(t),style:c([g(xe),{background:g(H)==t+1?g(pe):g(ge),marginLeft:0==t?"0px":g(te),marginRight:t==e.data.length-1?"0px":g(te)}])},{default:v((()=>{var a,r,u,p,b,f,y,x,S,w,C,_,O,P,j,$,B,I,M,T,R;return[null==l.badge?(m(),z(k,{key:0},[""!=(null!==(a=null==l?void 0:l.image)&&void 0!==a?a:"")?(m(),d(n,{key:0,src:g(H)==t+1?null!==(r=null==l?void 0:l.activeImage)&&void 0!==r?r:null!==(u=null==l?void 0:l.image)&&void 0!==u?u:"":null!==(p=null==l?void 0:l.image)&&void 0!==p?p:"",size:e.imageSize},null,8,["src","size"])):""!=(null!==(b=null==l?void 0:l.icon)&&void 0!==b?b:"")?(m(),d(o,{key:1,name:g(H)==t+1?null!==(f=null==l?void 0:l.activeIcon)&&void 0!==f?f:null!==(y=null==l?void 0:l.icon)&&void 0!==y?y:"":null!==(x=null==l?void 0:l.icon)&&void 0!==x?x:"",color:g(H)==t+1?g(ce):g(ve),size:g(re),style:c(g(me))},null,8,["name","color","size","style"])):h("",!0),""!=(null!==(S=null==l?void 0:l.text)&&void 0!==S?S:"")?(m(),d(i,{key:2,color:g(H)==t+1?g(de):g(ue),text:g(H)==t+1?null!==(w=null==l?void 0:l.activeText)&&void 0!==w?w:null!==(C=null==l?void 0:l.text)&&void 0!==C?C:"":null!==(_=null==l?void 0:l.text)&&void 0!==_?_:"",size:g(se)},null,8,["color","text","size"])):h("",!0)],64)):(m(),d(s,{key:1,value:null!==(O=l.badge.value)&&void 0!==O?O:0,max:null!==(P=l.badge.max)&&void 0!==P?P:-1,size:null!==(j=l.badge.size)&&void 0!==j?j:"",offset:null!==($=l.badge.offset)&&void 0!==$?$:"",mode:null!==(B=l.badge.mode)&&void 0!==B?B:"number",text:null!==(I=l.badge.text)&&void 0!==I?I:"",showZero:null!==(M=l.badge.showZero)&&void 0!==M&&M,textColor:null!==(T=l.badge.textColor)&&void 0!==T?T:"",bgColor:null!==(R=l.badge.bgColor)&&void 0!==R?R:"",style:{"flex-direction":"column"}},{default:v((()=>{var a,s,r,u,v,p,b,f,y,x,S,w;return[""!=(null!==(a=null==l?void 0:l.image)&&void 0!==a?a:"")?(m(),d(n,{key:0,src:g(H)==t+1?null!==(s=null==l?void 0:l.activeImage)&&void 0!==s?s:null!==(r=null==l?void 0:l.image)&&void 0!==r?r:"":null!==(u=null==l?void 0:l.image)&&void 0!==u?u:"",size:e.imageSize},null,8,["src","size"])):""!=(null!==(v=null==l?void 0:l.icon)&&void 0!==v?v:"")?(m(),d(o,{key:1,name:g(H)==t+1?null!==(p=null==l?void 0:l.activeIcon)&&void 0!==p?p:null!==(b=null==l?void 0:l.icon)&&void 0!==b?b:"":null!==(f=null==l?void 0:l.icon)&&void 0!==f?f:"",color:g(H)==t+1?g(ce):g(ve),size:g(re),style:c(g(me))},null,8,["name","color","size","style"])):h("",!0),""!=(null!==(y=null==l?void 0:l.text)&&void 0!==y?y:"")?(m(),d(i,{key:2,color:g(H)==t+1?g(de):g(ue),text:g(H)==t+1?null!==(x=null==l?void 0:l.activeText)&&void 0!==x?x:null!==(S=null==l?void 0:l.text)&&void 0!==S?S:"":null!==(w=null==l?void 0:l.text)&&void 0!==w?w:"",size:g(se)},null,8,["color","text","size"])):h("",!0)]})),_:2},1032,["value","max","size","offset","mode","text","showZero","textColor","bgColor"]))]})),_:2},1032,["onClick","style"])))),256))])),_:1},8,["disabled","style"])])),_:1},8,["style"])])),_:3},8,["style"])}}})),[["__scopeId","data-v-8b011ca6"]]);export{N as _};
