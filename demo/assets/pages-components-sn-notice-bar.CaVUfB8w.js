import{_ as e}from"./sn-topbar.CX0rMkKy.js";import{d as t,r as l,c as a,l as o,m as s,b as r,u as n,e as i,f as u,q as c,v as d,k as v,o as m,g as p,D as f,E as y}from"./index-DNTc1GxZ.js";import{$ as x,g,f as b,r as _}from"./uni-app.es.D9ZkitmT.js";import{a as C,b as S,c as z}from"./sn-button.BaZjRh9m.js";import{u as w}from"./useResize.BiiI_cO4.js";import{_ as k}from"./com-card.22LSjaaf.js";import{_ as h}from"./sn-page.CEVOSUw5.js";const T=z(t(Object.assign({name:"sn-notice-bar"},{__name:"sn-notice-bar",props:{texts:{type:Array,default:[]},bgColor:{type:String,default:""},textColor:{type:String,default:""},textSize:{type:String,default:""},icon:{type:String,default:"volume-up-line"},iconColor:{type:String,default:""},iconSize:{type:String,default:""},speed:{type:Number,default:50},swiperInterval:{type:Number,default:2e3},vertical:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},mode:{type:String,default:"scroll"},customStyle:{type:Object,default:{}},customTextStyle:{type:Object,default:{}},customIconStyle:{type:Object,default:{}}},emits:["close","click","change"],setup(e,t){var z=t.emit;const k=x.utils,h=x.colors,T=z,j=e,I=l(k.randomComId()),B=l(!1),E=l(null),N=l(null),M=l(0),O=l(null),P=l(0),A=l(0),L=l(!1),R=l(0),q=l(0),U=l(0),$=l(""),D=l(""),X=a((()=>!k.isEmpty(j.icon))),Z=a((()=>""==j.bgColor?h.value.warningLight:j.bgColor)),F=a((()=>""==j.textColor?h.value.warning:j.textColor)),G=a((()=>""==j.textSize?x.configs.font.baseSize:j.textSize)),H=a((()=>k.isEmpty(j.iconColor)?F.value:j.iconColor)),J=a((()=>""==j.iconSize?x.configs.font.size(3):j.iconSize)),K=a((()=>{let e="";return e=["scroll","swiper"].includes(j.mode)?j.mode:"scroll",j.vertical&&(e="swiper"),e})),Q=a((()=>{let e=new Map;return e.set("background",Z.value),e.set("border-radius",x.configs.radius.small),e.set("transition-duration",x.configs.aniTime.normal),e})),V=a((()=>{let e=new Map;return e.set("transform","translateX(".concat(M.value,"px)")),e.set("width",L.value?"100000px":""),e})),W=a((()=>{let e=new Map;return e.set("height",k.addPx(Math.max(k.getPx(J.value),k.getPx(G.value)))),e}));function Y(e){e.stopPropagation(),B.value=!0,T("close")}function ee(e){if(j.disabled)return null;T("click",e)}function te(){let e=A.value+P.value,t=k.formatNumber(e/j.speed*1e3);U.value=0,M.value=A.value,R.value=setTimeout((()=>{U.value=t,s((()=>{M.value=A.value-e-50,L.value=!0,q.value=setTimeout((()=>{L.value=!1,te()}),t)}))}),50)}function le(){U.value=0,s((()=>{"scroll"==K.value&&(M.value=2e5,P.value=O.value.$el.getBoundingClientRect().width,A.value=E.value.getBoundingClientRect().width),k.debounce((()=>{"scroll"==K.value?te():function(){const e=j.texts;let t=0,l=1;var a;$.value=e[t],D.value=null!==(a=e[l])&&void 0!==a?a:"",setInterval((()=>{t+=1,l+=1,t>e.length-1&&(t=0),l>e.length-1&&(l=0),t%2==0?$.value=e[t]:D.value=e[t]}),j.swiperInterval)}()}),100,I.value)}))}return o((()=>{le(),w(N.value,(()=>{le()}))})),g((()=>{clearTimeout(R.value),clearTimeout(q.value),U.value=0,M.value=0,L.value=!1})),b((()=>{s((()=>{le()}))})),(t=null,l=null)=>{const a=_(r("sn-icon"),C),o=_(r("sn-text"),S),s=f,x=y,g=v;return n(B)?d("",!0):(m(),i(g,{key:0,class:"sn-notice-bar",ref_key:"noticeBarEle",ref:N,onClick:ee,style:c([n(Q),e.customStyle])},{default:u((()=>[n(X)?(m(),i(a,{key:0,class:"sn-notice-bar-icon",name:e.icon,color:n(H),size:n(J)},null,8,["name","color","size"])):d("",!0),p(g,{class:"sn-notice-bar-text-zone",ref_key:"textZoneEle",ref:E},{default:u((()=>{var t;return["scroll"==n(K)?(m(),i(o,{key:0,class:"sn-notice-bar-scroll-text",ref_key:"scrollTextEle",ref:O,lines:1,text:null!==(t=e.texts[0])&&void 0!==t?t:"",color:n(F),size:n(G),aniTime:n(U),onTransitionend:te,style:c([n(V),e.customTextStyle])},null,8,["text","color","size","aniTime","style"])):d("",!0),"swiper"==n(K)?(m(),i(x,{key:1,class:"sn-notice-bar-swiper","disable-touch":!0,autoplay:!0,vertical:e.vertical,interval:e.swiperInterval,circular:!0,lines:1,style:c([n(W)])},{default:u((()=>[e.texts.length>=1?(m(),i(s,{key:0,class:"sn-notice-bar-swiper-item"},{default:u((()=>{var t;return[p(o,{text:null!==(t=n($))&&void 0!==t?t:"",color:n(F),size:n(G),lines:1,style:c([e.customTextStyle])},null,8,["text","color","size","style"])]})),_:1})):d("",!0),e.texts.length>=2?(m(),i(s,{key:1,class:"sn-notice-bar-swiper-item"},{default:u((()=>{var t;return[p(o,{text:null!==(t=n(D))&&void 0!==t?t:"",color:n(F),size:n(G),lines:1,style:c([e.customTextStyle])},null,8,["text","color","size","style"])]})),_:1})):d("",!0)])),_:1},8,["vertical","interval","style"])):d("",!0)]})),_:1},512),e.closable?(m(),i(a,{key:1,class:"sn-notice-bar-close",name:"close-large-line",color:n(H),size:n(J),onClick:Y},null,8,["color","size"])):d("",!0)])),_:1},8,["style"]))}}})),[["__scopeId","data-v-7021a5df"]]),j=t({__name:"sn-notice-bar",setup(t){const l=x.colors,a=["朝辞白帝彩云间","千里江陵一日还。","两岸猿声啼不住","轻舟已过万重山。"],o=["SinleUI ，一个简洁、轻巧的现代移动应用UI框架。"];return(t=null,s=null)=>{const c=_(r("sn-topbar"),e),d=_(r("sn-notice-bar"),T),v=_(r("com-card"),k),f=_(r("sn-page"),h);return m(),i(f,null,{default:u((()=>[p(c,{title:"Notice Bar 通知栏"}),p(v,{title:"基础用法",note:"一般用于滚动公告等多种场景。\\n注意和 Alert 组件区别。Notice Bar 单行、可多条、可滚动；Alert 可多行，多主题，固定不滚动。"},{default:u((()=>[p(d,{texts:o})])),_:1}),p(v,{title:"可关闭"},{default:u((()=>[p(d,{closable:"",texts:o})])),_:1}),p(v,{title:"无图标"},{default:u((()=>[p(d,{icon:" ",texts:o})])),_:1}),p(v,{title:"自定义滚动速度"},{default:u((()=>[p(d,{speed:200,texts:o})])),_:1}),p(v,{title:"步进滚动"},{default:u((()=>[p(d,{mode:"swiper",texts:a}),p(d,{vertical:"",texts:a})])),_:1}),p(v,{title:"自定义样式"},{default:u((()=>[p(d,{texts:o,bgColor:n(l).primary,textColor:n(l).primaryText},null,8,["bgColor","textColor"]),p(d,{vertical:"",texts:a,bgColor:n(l).errorLight,textColor:n(l).errorLightText},null,8,["bgColor","textColor"])])),_:1})])),_:1})}}});export{j as default};