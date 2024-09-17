import{_ as e}from"./sn-topbar.D5ol6wWa.js";import{d as t,$ as l,r as a,c as s,l as o,m as r,a as n,u as i,b as u,e as c,q as d,v,z as p,j as f,o as m,f as y,H as x,I as b}from"./index-BDGnenFq.js";import{c as g,b as _,r as S}from"./uni-app.es.BfR9KIrQ.js";import{a as z,b as w,c as h}from"./sn-button.DCeBN0oM.js";import{u as k}from"./useResize.C1IVTLMN.js";import{_ as C}from"./com-card.CltZjJtY.js";import{_ as T}from"./sn-page.BIWIogO0.js";const j=h(t(Object.assign({name:"sn-notice-bar"},{__name:"sn-notice-bar",props:{texts:{type:Array,default:[]},bgColor:{type:String,default:""},textColor:{type:String,default:""},textSize:{type:String,default:""},icon:{type:String,default:"volume-up-line"},iconColor:{type:String,default:""},iconSize:{type:String,default:""},borderRadius:{type:String,default:""},speed:{type:Number,default:50},swiperInterval:{type:Number,default:2e3},vertical:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},mode:{type:String,default:"scroll"},customStyle:{type:Object,default:{}},customTextStyle:{type:Object,default:{}},customIconStyle:{type:Object,default:{}}},emits:["close","click","change"],setup(e,t){var h=t.emit;const C=l.utils,T=l.colors,j=h,I=e,B=a(C.randomComId()),$=a(!1),N=a(null),R=a(null),A=a(0),E=a(null),M=a(0),O=a(0),P=a(!1),L=a(0),U=a(0),q=a(0),D=a(""),F=a(""),H=s((()=>!C.isEmpty(I.icon))),X=s((()=>p("color",I.bgColor,T.value.warningLight))),Z=s((()=>p("radius",I.borderRadius,l.configs.radius.small))),G=s((()=>p("color",I.textColor,T.value.warning))),J=s((()=>p("font",I.textSize,l.configs.font.baseSize))),K=s((()=>p("color",I.iconColor,G.value))),Q=s((()=>p("font",I.iconSize,l.configs.font.size(3)))),V=s((()=>{let e="";return e=["scroll","swiper"].includes(I.mode)?I.mode:"scroll",I.vertical&&(e="swiper"),e})),W=s((()=>{let e=new Map;return e.set("background",X.value),e.set("border-radius",Z.value),e.set("transition-duration",l.configs.aniTime.normal),e})),Y=s((()=>{let e=new Map;return e.set("transform","translateX(".concat(A.value,"px)")),e.set("width",P.value?"100000px":""),e})),ee=s((()=>{let e=new Map;return e.set("height",C.addPx(Math.max(C.getPx(Q.value),C.getPx(J.value)))),e}));function te(e){e.stopPropagation(),$.value=!0,j("close")}function le(e){if(I.disabled)return null;j("click",e)}function ae(){let e=O.value+M.value,t=C.formatNumber(e/I.speed*1e3);q.value=0,A.value=O.value,L.value=setTimeout((()=>{q.value=t,r((()=>{A.value=O.value-e-50,P.value=!0,U.value=setTimeout((()=>{P.value=!1,ae()}),t)}))}),200)}function se(){q.value=0,r((()=>{"scroll"==V.value&&(A.value=2e5,M.value=E.value.$el.getBoundingClientRect().width,O.value=N.value.getBoundingClientRect().width),C.debounce((()=>{r((()=>{"scroll"==V.value?ae():function(){const e=I.texts;let t=0,l=1;var a;D.value=e[t],F.value=null!==(a=e[l])&&void 0!==a?a:"",setInterval((()=>{t+=1,l+=1,t>e.length-1&&(t=0),l>e.length-1&&(l=0),t%2==0?D.value=e[t]:F.value=e[t]}),I.swiperInterval)}()}))}),100,B.value)}))}return o((()=>{se(),k(R.value,(()=>{se()}))})),g((()=>{clearTimeout(L.value),clearTimeout(U.value),q.value=0,A.value=0,P.value=!1})),_((()=>{r((()=>{se()}))})),(t=null,l=null)=>{const a=S(n("sn-icon"),z),s=S(n("sn-text"),w),o=x,r=b,p=f;return i($)?v("",!0):(m(),u(p,{key:0,class:"sn-notice-bar",ref_key:"noticeBarEle",ref:R,onClick:le,style:d([i(W),e.customStyle])},{default:c((()=>[i(H)?(m(),u(a,{key:0,class:"sn-notice-bar-icon",name:e.icon,color:i(K),size:i(Q)},null,8,["name","color","size"])):v("",!0),y(p,{class:"sn-notice-bar-text-zone",ref_key:"textZoneEle",ref:N},{default:c((()=>{var t;return["scroll"==i(V)?(m(),u(s,{key:0,class:"sn-notice-bar-scroll-text",ref_key:"scrollTextEle",ref:E,lines:1,text:null!==(t=e.texts[0])&&void 0!==t?t:"",color:i(G),size:i(J),aniTime:"".concat(i(q),"ms"),onTransitionend:ae,style:d([i(Y),e.customTextStyle])},null,8,["text","color","size","aniTime","style"])):v("",!0),"swiper"==i(V)?(m(),u(r,{key:1,class:"sn-notice-bar-swiper","disable-touch":!0,autoplay:!0,vertical:e.vertical,interval:e.swiperInterval,circular:!0,lines:1,style:d([i(ee)])},{default:c((()=>[e.texts.length>=1?(m(),u(o,{key:0,class:"sn-notice-bar-swiper-item"},{default:c((()=>{var t;return[y(s,{text:null!==(t=i(D))&&void 0!==t?t:"",color:i(G),size:i(J),lines:1,style:d([e.customTextStyle])},null,8,["text","color","size","style"])]})),_:1})):v("",!0),e.texts.length>=2?(m(),u(o,{key:1,class:"sn-notice-bar-swiper-item"},{default:c((()=>{var t;return[y(s,{text:null!==(t=i(F))&&void 0!==t?t:"",color:i(G),size:i(J),lines:1,style:d([e.customTextStyle])},null,8,["text","color","size","style"])]})),_:1})):v("",!0)])),_:1},8,["vertical","interval","style"])):v("",!0)]})),_:1},512),e.closable?(m(),u(a,{key:1,class:"sn-notice-bar-close",name:"close-large-line",color:i(K),size:i(Q),onClick:te},null,8,["color","size"])):v("",!0)])),_:1},8,["style"]))}}})),[["__scopeId","data-v-ba8d7025"]]),I=t({__name:"sn-notice-bar",setup(t){l.colors;const a=["朝辞白帝彩云间","千里江陵一日还。","两岸猿声啼不住","轻舟已过万重山。"],s=["SinleUI ，一个简洁、轻巧的现代移动应用UI框架。"];return(t=null,l=null)=>{const o=S(n("sn-topbar"),e),r=S(n("sn-notice-bar"),j),i=S(n("com-card"),C),d=S(n("sn-page"),T);return m(),u(d,null,{default:c((()=>[y(o,{title:"Notice Bar 通知栏"}),y(i,{title:"基础用法",note:"一般用于滚动公告等多种场景。\\n注意和 Alert 组件区别。Notice Bar 单行、可多条、可滚动；Alert 可多行，多主题，固定不滚动。"},{default:c((()=>[y(r,{texts:s})])),_:1}),y(i,{title:"可关闭"},{default:c((()=>[y(r,{closable:"",texts:s})])),_:1}),y(i,{title:"无图标"},{default:c((()=>[y(r,{icon:" ",texts:s})])),_:1}),y(i,{title:"自定义滚动速度"},{default:c((()=>[y(r,{speed:200,texts:s})])),_:1}),y(i,{title:"步进滚动"},{default:c((()=>[y(r,{mode:"swiper",texts:a}),y(r,{vertical:"",texts:a})])),_:1}),y(i,{title:"自定义样式"},{default:c((()=>[y(r,{texts:s,bgColor:"$primary",textColor:"$primaryText"}),y(r,{vertical:"",texts:a,bgColor:"$errorLight",textColor:"$errorLightText"})])),_:1})])),_:1})}}});export{I as default};
