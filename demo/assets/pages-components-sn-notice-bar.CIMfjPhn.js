import{_ as e}from"./sn-topbar.DxKzInQK.js";import{d as t,$ as l,r as a,c as s,l as o,m as r,a as n,u as i,b as u,e as c,q as d,C as v,y as p,j as f,o as m,f as y,H as x,I as b}from"./index-DoInGK9X.js";import{c as g,b as _,r as S}from"./uni-app.es.K1mZmM8s.js";import{a as w,b as z,c as h}from"./sn-button.B1LvAG78.js";import{u as k}from"./useResize.Dia-r-oM.js";import{_ as C}from"./com-card.D8_7_rS9.js";import{_ as T}from"./sn-page.Nlp4LDKz.js";const j=h(t(Object.assign({name:"sn-notice-bar"},{__name:"sn-notice-bar",props:{texts:{type:Array,default:[]},bgColor:{type:String,default:""},textColor:{type:String,default:""},textSize:{type:String,default:""},icon:{type:String,default:"volume-up-line"},iconColor:{type:String,default:""},iconSize:{type:String,default:""},borderRadius:{type:String,default:""},speed:{type:Number,default:50},swiperInterval:{type:Number,default:2e3},vertical:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},mode:{type:String,default:"scroll"},customStyle:{type:Object,default:{}},customTextStyle:{type:Object,default:{}},customIconStyle:{type:Object,default:{}}},emits:["close","click","change"],setup(e,t){var h=t.emit;const C=l.utils,T=l.colors,j=h,I=e,B=a(C.randomComId()),M=a(!1),$=a(null),N=a(null),R=a(0),A=a(null),E=a(0),O=a(0),P=a(!1),L=a(0),H=a(0),U=a(0),q=a(""),G=a(""),K=s((()=>!C.isEmpty(I.icon))),X=s((()=>p("color",I.bgColor,T.value.warningLight))),Z=s((()=>p("radius",I.borderRadius,l.configs.radius.small))),D=s((()=>p("color",I.textColor,T.value.warning))),F=s((()=>p("font",I.textSize,l.configs.font.baseSize))),J=s((()=>p("color",I.iconColor,D.value))),Q=s((()=>p("font",I.iconSize,l.configs.font.size(3)))),V=s((()=>{let e="";return e=["scroll","swiper"].includes(I.mode)?I.mode:"scroll",I.vertical&&(e="swiper"),e})),W=s((()=>{let e=new Map;return e.set("background",X.value),e.set("border-radius",Z.value),e.set("transition-duration",l.configs.aniTime.normal),e})),Y=s((()=>{let e=new Map;return e.set("transform","translateX(".concat(R.value,"px)")),e.set("width",P.value?"100000px":""),e})),ee=s((()=>{let e=new Map;return e.set("height",C.addPx(Math.max(C.getPx(Q.value),C.getPx(F.value)))),e})),te=s((()=>{let e=new Map;return e.set("background",X.value),e.set("padding","0 8px"),e.set("line-height","1000"),e}));function le(e){e.stopPropagation(),M.value=!0,j("close")}function ae(e){if(I.disabled)return null;j("click",e)}function se(){let e=O.value+E.value,t=C.formatNumber(e/I.speed*1e3);U.value=0,R.value=O.value,L.value=setTimeout((()=>{U.value=t,r((()=>{R.value=O.value-e-50,P.value=!0,H.value=setTimeout((()=>{P.value=!1,se()}),t)}))}),200)}function oe(){U.value=0,r((()=>{"scroll"==V.value&&(R.value=2e5,E.value=A.value.$el.getBoundingClientRect().width,O.value=$.value.getBoundingClientRect().width),C.debounce((()=>{r((()=>{"scroll"==V.value?se():function(){const e=I.texts;let t=0,l=1;var a;q.value=e[t],G.value=null!==(a=e[l])&&void 0!==a?a:"",setInterval((()=>{t+=1,l+=1,t>e.length-1&&(t=0),l>e.length-1&&(l=0),t%2==0?q.value=e[t]:G.value=e[t]}),I.swiperInterval)}()}))}),100,B.value)}))}return o((()=>{oe(),k(N.value,(()=>{oe()}))})),g((()=>{clearTimeout(L.value),clearTimeout(H.value),U.value=0,R.value=0,P.value=!1})),_((()=>{r((()=>{oe()}))})),(t=null,l=null)=>{const a=S(n("sn-icon"),w),s=S(n("sn-text"),z),o=x,r=b,p=f;return i(M)?v("",!0):(m(),u(p,{key:0,class:"sn-notice-bar",ref_key:"noticeBarEle",ref:N,onClick:ae,style:d([i(W),e.customStyle])},{default:c((()=>[i(K)?(m(),u(a,{key:0,class:"sn-notice-bar-icon",name:e.icon,color:i(J),size:i(Q)},null,8,["name","color","size"])):v("",!0),y(p,{class:"sn-notice-bar-text-zone",ref_key:"textZoneEle",ref:$},{default:c((()=>{var t;return["scroll"==i(V)?(m(),u(s,{key:0,class:"sn-notice-bar-scroll-text",ref_key:"scrollTextEle",ref:A,lines:1,text:null!==(t=e.texts[0])&&void 0!==t?t:"",color:i(D),size:i(F),aniTime:"".concat(i(U),"ms"),onTransitionend:se,style:d([i(Y),e.customTextStyle])},null,8,["text","color","size","aniTime","style"])):v("",!0),"swiper"==i(V)?(m(),u(r,{key:1,class:"sn-notice-bar-swiper","disable-touch":!0,autoplay:!0,vertical:e.vertical,interval:e.swiperInterval,circular:!0,lines:1,style:d([i(ee)])},{default:c((()=>[e.texts.length>=1?(m(),u(o,{key:0,class:"sn-notice-bar-swiper-item"},{default:c((()=>{var t;return[y(s,{text:null!==(t=i(q))&&void 0!==t?t:"",color:i(D),size:i(F),lines:1,style:d([e.customTextStyle])},null,8,["text","color","size","style"])]})),_:1})):v("",!0),e.texts.length>=2?(m(),u(o,{key:1,class:"sn-notice-bar-swiper-item"},{default:c((()=>{var t;return[y(s,{text:null!==(t=i(G))&&void 0!==t?t:"",color:i(D),size:i(F),lines:1,style:d([e.customTextStyle])},null,8,["text","color","size","style"])]})),_:1})):v("",!0)])),_:1},8,["vertical","interval","style"])):v("",!0)]})),_:1},512),e.closable?(m(),u(a,{key:1,class:"sn-notice-bar-close",name:"close-large-line",color:i(J),size:i(Q),style:d(i(te)),onClick:le},null,8,["color","size","style"])):v("",!0)])),_:1},8,["style"]))}}})),[["__scopeId","data-v-38a52b3d"]]),I=t({__name:"sn-notice-bar",setup(t){l.colors;const a=["朝辞白帝彩云间","千里江陵一日还。","两岸猿声啼不住","轻舟已过万重山。"],s=["SinleUI ，一个简洁、轻巧的现代移动应用UI框架。"];return(t=null,l=null)=>{const o=S(n("sn-topbar"),e),r=S(n("sn-notice-bar"),j),i=S(n("com-card"),C),d=S(n("sn-page"),T);return m(),u(d,null,{default:c((()=>[y(o,{title:"Notice Bar 通知栏"}),y(i,{title:"基础用法",note:"一般用于滚动公告等多种场景。\\n注意和 Alert 组件区别。Notice Bar 单行、可多条、可滚动；Alert 可多行，多主题，固定不滚动。"},{default:c((()=>[y(r,{texts:s})])),_:1}),y(i,{title:"可关闭"},{default:c((()=>[y(r,{closable:"",texts:s})])),_:1}),y(i,{title:"无图标"},{default:c((()=>[y(r,{icon:" ",texts:s})])),_:1}),y(i,{title:"自定义滚动速度"},{default:c((()=>[y(r,{speed:200,texts:s})])),_:1}),y(i,{title:"步进滚动"},{default:c((()=>[y(r,{mode:"swiper",texts:a}),y(r,{vertical:"",texts:a})])),_:1}),y(i,{title:"自定义样式"},{default:c((()=>[y(r,{texts:s,bgColor:"$primary",textColor:"$primaryText"}),y(r,{vertical:"",texts:a,bgColor:"$errorLight",textColor:"$errorLightText"})])),_:1})])),_:1})}}});export{I as default};
