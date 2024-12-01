import{_ as e}from"./sn-topbar.wm0GzhH3.js";import{d as t,$ as l,r as a,c as o,w as s,o as n,n as r,a as i,u,e as c,f as d,p as v,B as p,x as y,_ as f,b as m,g as x,h as b,j as g,F as _,H as w,G as S}from"./index-DYMgrqHp.js";import{b as h,c as j,r as z}from"./uni-app.es.DgDfNdgy.js";import{_ as C,a as k,b as P}from"./sn-text.euomPoe8.js";import{u as B}from"./useResize.Cfi37DcV.js";import{_ as I}from"./com-card.BtLNzB63.js";import{_ as $}from"./sn-page.Cf6LEMVT.js";import"./sn-button.BjZePiC5.js";import"./sn-loading.t5otRKvs.js";import"./sn-menu-item.DkjoXkWj.js";import"./sn-overlay.CiZFgEyq.js";const M=P(t(Object.assign({name:"sn-notice-bar"},{__name:"sn-notice-bar",props:{texts:{type:Array,default:[]},bgColor:{type:String,default:""},textColor:{type:String,default:""},textSize:{type:String,default:""},icon:{type:String,default:"volume-up-line"},iconColor:{type:String,default:""},iconSize:{type:String,default:""},borderRadius:{type:String,default:""},speed:{type:Number,default:50},swiperInterval:{type:Number,default:2e3},vertical:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},padding:{type:Number,default:10},disabled:{type:Boolean,default:!1},mode:{type:String,default:"scroll"},customStyle:{type:Object,default:{}},customTextStyle:{type:Object,default:{}},customIconStyle:{type:Object,default:{}}},emits:["close"],setup(e,t){const P=t.emit,I=l.colors,$=l.utils,M=e,T=a(null),N=a(null),O=a(null),R=a(0),E=a(0),L=a(3),X=a(!1),A=a(!1),U=a(!1),H=o((()=>!$.isEmpty(M.icon))),J=o((()=>y("color",M.bgColor,I.value.warningLight))),F=o((()=>y("radius",M.borderRadius,l.configs.radius.small))),G=o((()=>y("color",M.textColor,I.value.warning))),K=o((()=>y("font",M.textSize,l.configs.font.baseSize))),Q=o((()=>y("color",M.iconColor,G.value))),W=o((()=>y("font",M.iconSize,l.configs.font.size(3)))),q=o((()=>2*M.padding+$.getPx(K.value))),D=o((()=>{let e="";return e=["scroll","swiper"].includes(M.mode)?M.mode:"scroll",M.vertical&&(e="swiper"),e})),V=o((()=>{let e=new Map;return e.set("background",J.value),e.set("border-radius",F.value),e.set("height","".concat(q.value,"px")),e})),Y=o((()=>{let e=new Map;return e.set("line-height","".concat(q.value,"px")),e.set("padding","0 ".concat($.getPx(W.value)/2,"px")),e})),Z=o((()=>{let e=new Map;return e.set("visibility",U.value?"visible":"hidden"),e.set("width","".concat(U.value?E.value:R.value,"px")),e})),ee=o((()=>{const e=new Map;return e.set("line-height","".concat(q.value,"px")),e.set("padding","0 ".concat($.getPx(W.value)/2,"px")),e}));function te(e){e.stopPropagation(),A.value=!0,X.value=!0,U.value=!1,P("close")}function le(){var e,t,l,a,o,s,n,r,i,u,c,d;if(X.value)return U.value=!1,null===(t=null===(e=N.value)||void 0===e?void 0:e.style)||void 0===t||t.setProperty("transition-duration","40ms"),null===(a=null===(l=N.value)||void 0===l?void 0:l.style)||void 0===a||a.setProperty("transform","translateX(".concat(R.value,"px)")),null;U.value?(U.value=!1,null===(s=null===(o=N.value)||void 0===o?void 0:o.style)||void 0===s||s.setProperty("transition-duration","30ms"),null===(r=null===(n=N.value)||void 0===n?void 0:n.style)||void 0===r||r.setProperty("transform","translateX(".concat(R.value,"px)"))):(U.value=!0,null===(u=null===(i=N.value)||void 0===i?void 0:i.style)||void 0===u||u.setProperty("transition-duration","".concat(L.value,"ms")),null===(d=null===(c=N.value)||void 0===c?void 0:c.style)||void 0===d||d.setProperty("transform","translateX(".concat(-E.value,"px)")))}function ae(){var e,t,l,a,o;let s=0,n=null!==(e=O.value)&&void 0!==e?e:[];for(let i=0;i<n.length;i++){const e=n[i];null!=e.$el&&(s+=e.$el.getBoundingClientRect().width)}let r=T.value.parentElement;null!=r&&(R.value=Math.ceil(r.getBoundingClientRect().width),E.value=Math.ceil(s),L.value=1e3*Math.ceil((R.value+E.value)/M.speed)),"scroll"==D.value&&(null===(l=null===(t=N.value)||void 0===t?void 0:t.style)||void 0===l||l.setProperty("transition-duration","".concat(L.value,"ms")),null===(o=null===(a=N.value)||void 0===a?void 0:a.style)||void 0===o||o.setProperty("transform","translateX(".concat(-E.value,"px)")),U.value=!0)}return s((()=>M.texts),(()=>{ae()})),n((()=>{r((()=>{ae()})),B(T.value,(()=>{ae()}))})),h((()=>{X.value&&(X.value=!1,ae())})),j((()=>{X.value=!0})),(t=null,l=null)=>{const a=z(i("sn-icon"),C),o=z(i("sn-text"),k),s=f,n=S,r=w;return u(A)?p("",!0):(m(),c(s,{key:0,ref_key:"noticeBarEle",ref:T,class:"sn-notice-bar",style:v([u(V),e.customStyle])},{default:d((()=>[u(H)?(m(),c(a,{key:0,class:"sn-notice-bar-icon",name:e.icon,color:u(Q),size:u(W),style:v([u(Y),e.customIconStyle])},null,8,["name","color","size","style"])):p("",!0),"scroll"==u(D)?(m(),c(s,{key:1,class:"sn-notice-bar-wrap"},{default:d((()=>[x(s,{ref_key:"scrollWrapEle",ref:N,class:"sn-notice-bar-wrap-row transform",style:v(u(Z)),onTransitionend:le},{default:d((()=>[(m(!0),b(_,null,g(e.texts,((t,l)=>{var a;return m(),c(o,{class:"sn-notice-bar-scroll-text",ref_for:!0,ref_key:"scrollTextsEle",ref:O,key:l,lines:1,text:null!==(a=e.texts[0])&&void 0!==a?a:"",color:u(G),size:u(K),style:v(new UTSJSONObject({lineHeight:u(K)}))},null,8,["text","color","size","style"])})),128))])),_:1},8,["style"])])),_:1})):"swiper"==u(D)?(m(),c(s,{key:2,class:"sn-notice-bar-wrap"},{default:d((()=>[x(r,{class:"sn-notice-bar-wrap-row",vertical:e.vertical,circular:!0,"disable-touch":!0,"indicator-dots":!1,autoplay:!0,interval:e.swiperInterval},{default:d((()=>[(m(!0),b(_,null,g(e.texts,((t,l)=>(m(),c(n,{class:"sn-notice-bar-wrap-row-swiper-item",key:l},{default:d((()=>[x(o,{text:null!=t?t:"",color:u(G),size:u(K),lines:1,style:v([e.customTextStyle])},null,8,["text","color","size","style"])])),_:2},1024)))),128))])),_:1},8,["vertical","interval"])])),_:1})):p("",!0),e.closable?(m(),c(a,{key:3,class:"sn-notice-bar-close",name:"close-large-line",color:u(Q),size:u(W),style:v([u(ee),e.customIconStyle]),onClick:te},null,8,["color","size","style"])):p("",!0)])),_:1},8,["style"]))}}})),[["__scopeId","data-v-703320ba"]]),T=t({__name:"sn-notice-bar",setup(t){l.colors;const a=["朝辞白帝彩云间","千里江陵一日还。","两岸猿声啼不住","轻舟已过万重山。"],o=["SinleUI ，一个简洁、轻巧的现代移动应用UI框架。"];return(t=null,l=null)=>{const s=z(i("sn-topbar"),e),n=z(i("sn-notice-bar"),M),r=z(i("com-card"),I),u=z(i("sn-page"),$);return m(),c(u,null,{default:d((()=>[x(s,{title:"Notice Bar 通知栏"}),x(r,{title:"基础用法",note:"一般用于滚动公告等多种场景。\\n注意和 Alert 组件区别。Notice Bar 单行、可多条、可滚动；Alert 可多行，多主题，固定不滚动。"},{default:d((()=>[x(n,{texts:o})])),_:1}),x(r,{title:"可关闭"},{default:d((()=>[x(n,{closable:"",texts:o})])),_:1}),x(r,{title:"无图标"},{default:d((()=>[x(n,{icon:" ",texts:o})])),_:1}),x(r,{title:"自定义滚动速度"},{default:d((()=>[x(n,{speed:200,texts:o})])),_:1}),x(r,{title:"步进滚动"},{default:d((()=>[x(n,{mode:"swiper",texts:a}),x(n,{vertical:"",texts:a})])),_:1}),x(r,{title:"自定义样式"},{default:d((()=>[x(n,{texts:o,bgColor:"$primary",textColor:"$primaryText"}),x(n,{vertical:"",texts:a,bgColor:"$errorLight",textColor:"$errorLightText"})])),_:1})])),_:1})}}});export{T as default};