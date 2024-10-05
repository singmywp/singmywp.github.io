import{_ as e}from"./sn-topbar.DxKzInQK.js";import{d as l,$ as t,r as o,c as a,w as n,T as i,U as s,u as r,b as u,e as v,q as d,y,j as c,o as p,B as f,m,a as P,f as b}from"./index-DoInGK9X.js";import{r as _}from"./uni-app.es.K1mZmM8s.js";import{c as w,_ as h}from"./sn-button.B1LvAG78.js";import{_ as x}from"./com-card.D8_7_rS9.js";import{_ as T}from"./sn-gap.BM3gA-Sq.js";import{_ as g}from"./sn-page.Nlp4LDKz.js";const k=w(l(Object.assign({name:"sn-transition"},{__name:"sn-transition",props:{show:{type:Boolean,default:!1},placed:{type:Boolean,default:!0},mode:{type:String,default:"fade"},aniTime:{type:String,default:t.configs.aniTime.long},timingFunction:{type:String,default:"ease-out"},customStyle:{type:Object,default:new UTSJSONObject({})}},emits:["beforeEnter","enter","afterEnter","beforeLeave","leave","afterLeave","transitionend"],setup(e,l){const P=l.emit,b=e,_=o(null),w=o(!1),h=o(!1),x=o(!1),T=a((()=>{let e=new Map;return e.set("transitionTimingFunction",t.configs.aniTime.normal),e})),g=a((()=>y("aniTime",b.aniTime,t.configs.aniTime.long)));function k(e){switch(b.mode){case"zoom":!function(e){var l,t,o,a,n,i,s,r;e?(h.value=!0,P("beforeEnter"),null===(t=null===(l=_.value)||void 0===l?void 0:l.style)||void 0===t||t.setProperty("transition-duration","".concat(10,"ms")),null===(a=null===(o=_.value)||void 0===o?void 0:o.style)||void 0===a||a.setProperty("opacity",0),null===(i=null===(n=_.value)||void 0===n?void 0:n.style)||void 0===i||i.setProperty("transform","scale(0)"),setTimeout((()=>{var e,l,t,o,a,n;P("enter"),null===(l=null===(e=_.value)||void 0===e?void 0:e.style)||void 0===l||l.setProperty("transition-duration",g.value),null===(o=null===(t=_.value)||void 0===t?void 0:t.style)||void 0===o||o.setProperty("opacity",1),null===(n=null===(a=_.value)||void 0===a?void 0:a.style)||void 0===n||n.setProperty("transform","scale(1)"),x.value=!0}),60)):(P("beforeLeave"),P("leave"),null===(r=null===(s=_.value)||void 0===s?void 0:s.style)||void 0===r||r.setProperty("transform","scale(0)"))}(e);break;case"fade":!function(e){var l,t,o,a,n,i;e?(h.value=!0,P("beforeEnter"),null===(t=null===(l=_.value)||void 0===l?void 0:l.style)||void 0===t||t.setProperty("transition-duration","".concat(10,"ms")),null===(a=null===(o=_.value)||void 0===o?void 0:o.style)||void 0===a||a.setProperty("opacity",0),setTimeout((()=>{var e,l,t,o;P("enter"),null===(l=null===(e=_.value)||void 0===e?void 0:e.style)||void 0===l||l.setProperty("transition-duration",g.value),null===(o=null===(t=_.value)||void 0===t?void 0:t.style)||void 0===o||o.setProperty("opacity",1),x.value=!0}),60)):(P("beforeLeave"),P("leave"),null===(i=null===(n=_.value)||void 0===n?void 0:n.style)||void 0===i||i.setProperty("opacity",0))}(e);break;case"fadeZoom":!function(e){var l,t,o,a,n,i,s,r,u,v;e?(h.value=!0,P("beforeEnter"),null===(t=null===(l=_.value)||void 0===l?void 0:l.style)||void 0===t||t.setProperty("transition-duration","".concat(10,"ms")),null===(a=null===(o=_.value)||void 0===o?void 0:o.style)||void 0===a||a.setProperty("opacity",0),null===(i=null===(n=_.value)||void 0===n?void 0:n.style)||void 0===i||i.setProperty("transform","scale(0)"),setTimeout((()=>{var e,l,t,o,a,n;P("enter"),null===(l=null===(e=_.value)||void 0===e?void 0:e.style)||void 0===l||l.setProperty("transition-duration",g.value),null===(o=null===(t=_.value)||void 0===t?void 0:t.style)||void 0===o||o.setProperty("opacity",1),null===(n=null===(a=_.value)||void 0===a?void 0:a.style)||void 0===n||n.setProperty("transform","scale(1)"),x.value=!0}),60)):(P("beforeLeave"),P("leave"),null===(r=null===(s=_.value)||void 0===s?void 0:s.style)||void 0===r||r.setProperty("opacity",0),null===(v=null===(u=_.value)||void 0===u?void 0:u.style)||void 0===v||v.setProperty("transform","scale(0)"))}(e);break;case"fadeUp":!function(e){var l,t,o,a,n,i,s,r,u,v;e?(h.value=!0,P("beforeEnter"),null===(t=null===(l=_.value)||void 0===l?void 0:l.style)||void 0===t||t.setProperty("transition-duration","".concat(10,"ms")),null===(a=null===(o=_.value)||void 0===o?void 0:o.style)||void 0===a||a.setProperty("opacity",0),null===(i=null===(n=_.value)||void 0===n?void 0:n.style)||void 0===i||i.setProperty("transform","translate(0, 120%)"),setTimeout((()=>{var e,l,t,o,a,n;P("enter"),null===(l=null===(e=_.value)||void 0===e?void 0:e.style)||void 0===l||l.setProperty("transition-duration",g.value),null===(o=null===(t=_.value)||void 0===t?void 0:t.style)||void 0===o||o.setProperty("opacity",1),null===(n=null===(a=_.value)||void 0===a?void 0:a.style)||void 0===n||n.setProperty("transform","translate(0, 0)"),x.value=!0}),60)):(P("beforeLeave"),P("leave"),null===(r=null===(s=_.value)||void 0===s?void 0:s.style)||void 0===r||r.setProperty("opacity",0),null===(v=null===(u=_.value)||void 0===u?void 0:u.style)||void 0===v||v.setProperty("transform","translate(0, 120%)"))}(e);break;case"fadeRight":!function(e){var l,t,o,a,n,i,s,r,u,v;e?(h.value=!0,P("beforeEnter"),null===(t=null===(l=_.value)||void 0===l?void 0:l.style)||void 0===t||t.setProperty("transition-duration","".concat(10,"ms")),null===(a=null===(o=_.value)||void 0===o?void 0:o.style)||void 0===a||a.setProperty("opacity",0),null===(i=null===(n=_.value)||void 0===n?void 0:n.style)||void 0===i||i.setProperty("transform","translate(120%, 0)"),setTimeout((()=>{var e,l,t,o,a,n;P("enter"),null===(l=null===(e=_.value)||void 0===e?void 0:e.style)||void 0===l||l.setProperty("transition-duration",g.value),null===(o=null===(t=_.value)||void 0===t?void 0:t.style)||void 0===o||o.setProperty("opacity",1),null===(n=null===(a=_.value)||void 0===a?void 0:a.style)||void 0===n||n.setProperty("transform","translate(0, 0)"),x.value=!0}),60)):(P("beforeLeave"),P("leave"),null===(r=null===(s=_.value)||void 0===s?void 0:s.style)||void 0===r||r.setProperty("opacity",0),null===(v=null===(u=_.value)||void 0===u?void 0:u.style)||void 0===v||v.setProperty("transform","translate(120%, 0)"))}(e);break;case"fadeDown":!function(e){var l,t,o,a,n,i,s,r,u,v;e?(h.value=!0,P("beforeEnter"),null===(t=null===(l=_.value)||void 0===l?void 0:l.style)||void 0===t||t.setProperty("transition-duration","".concat(10,"ms")),null===(a=null===(o=_.value)||void 0===o?void 0:o.style)||void 0===a||a.setProperty("opacity",0),null===(i=null===(n=_.value)||void 0===n?void 0:n.style)||void 0===i||i.setProperty("transform","translate(0, -120%)"),setTimeout((()=>{var e,l,t,o,a,n;P("enter"),null===(l=null===(e=_.value)||void 0===e?void 0:e.style)||void 0===l||l.setProperty("transition-duration",g.value),null===(o=null===(t=_.value)||void 0===t?void 0:t.style)||void 0===o||o.setProperty("opacity",1),null===(n=null===(a=_.value)||void 0===a?void 0:a.style)||void 0===n||n.setProperty("transform","translate(0, 0)"),x.value=!0}),60)):(P("beforeLeave"),P("leave"),null===(r=null===(s=_.value)||void 0===s?void 0:s.style)||void 0===r||r.setProperty("opacity",0),null===(v=null===(u=_.value)||void 0===u?void 0:u.style)||void 0===v||v.setProperty("transform","translate(0, -120%)"))}(e);break;case"fadeLeft":!function(e){var l,t,o,a,n,i,s,r,u,v;e?(h.value=!0,P("beforeEnter"),null===(t=null===(l=_.value)||void 0===l?void 0:l.style)||void 0===t||t.setProperty("transition-duration","".concat(10,"ms")),null===(a=null===(o=_.value)||void 0===o?void 0:o.style)||void 0===a||a.setProperty("opacity",0),null===(i=null===(n=_.value)||void 0===n?void 0:n.style)||void 0===i||i.setProperty("transform","translate(-120%, 0)"),setTimeout((()=>{var e,l,t,o,a,n;P("enter"),null===(l=null===(e=_.value)||void 0===e?void 0:e.style)||void 0===l||l.setProperty("transition-duration",g.value),null===(o=null===(t=_.value)||void 0===t?void 0:t.style)||void 0===o||o.setProperty("opacity",1),null===(n=null===(a=_.value)||void 0===a?void 0:a.style)||void 0===n||n.setProperty("transform","translate(0, 0)"),x.value=!0}),60)):(P("beforeLeave"),P("leave"),null===(r=null===(s=_.value)||void 0===s?void 0:s.style)||void 0===r||r.setProperty("opacity",0),null===(v=null===(u=_.value)||void 0===u?void 0:u.style)||void 0===v||v.setProperty("transform","translate(-120%, 0)"))}(e);break;case"slideUp":!function(e){var l,t,o,a,n,i,s,r;e?(h.value=!0,P("beforeEnter"),null===(t=null===(l=_.value)||void 0===l?void 0:l.style)||void 0===t||t.setProperty("transition-duration","".concat(10,"ms")),null===(a=null===(o=_.value)||void 0===o?void 0:o.style)||void 0===a||a.setProperty("opacity",0),null===(i=null===(n=_.value)||void 0===n?void 0:n.style)||void 0===i||i.setProperty("transform","translate(0, 130%)"),setTimeout((()=>{var e,l,t,o,a,n;P("enter"),null===(l=null===(e=_.value)||void 0===e?void 0:e.style)||void 0===l||l.setProperty("transition-duration",g.value),null===(o=null===(t=_.value)||void 0===t?void 0:t.style)||void 0===o||o.setProperty("opacity",1),null===(n=null===(a=_.value)||void 0===a?void 0:a.style)||void 0===n||n.setProperty("transform","translate(0, 0)"),x.value=!0}),60)):(P("beforeLeave"),P("leave"),null===(r=null===(s=_.value)||void 0===s?void 0:s.style)||void 0===r||r.setProperty("transform","translate(0, 130%)"))}(e);break;case"slideRight":!function(e){var l,t,o,a,n,i,s,r;e?(h.value=!0,P("beforeEnter"),null===(t=null===(l=_.value)||void 0===l?void 0:l.style)||void 0===t||t.setProperty("transition-duration","".concat(10,"ms")),null===(a=null===(o=_.value)||void 0===o?void 0:o.style)||void 0===a||a.setProperty("opacity",0),null===(i=null===(n=_.value)||void 0===n?void 0:n.style)||void 0===i||i.setProperty("transform","translate(120%, 0)"),setTimeout((()=>{var e,l,t,o,a,n;P("enter"),null===(l=null===(e=_.value)||void 0===e?void 0:e.style)||void 0===l||l.setProperty("transition-duration",g.value),null===(o=null===(t=_.value)||void 0===t?void 0:t.style)||void 0===o||o.setProperty("opacity",1),null===(n=null===(a=_.value)||void 0===a?void 0:a.style)||void 0===n||n.setProperty("transform","translate(0, 0)"),x.value=!0}),60)):(P("beforeLeave"),P("leave"),null===(r=null===(s=_.value)||void 0===s?void 0:s.style)||void 0===r||r.setProperty("transform","translate(120%, 0)"))}(e);break;case"slideDown":!function(e){var l,t,o,a,n,i,s,r;e?(h.value=!0,P("beforeEnter"),null===(t=null===(l=_.value)||void 0===l?void 0:l.style)||void 0===t||t.setProperty("transition-duration","".concat(10,"ms")),null===(a=null===(o=_.value)||void 0===o?void 0:o.style)||void 0===a||a.setProperty("opacity",0),null===(i=null===(n=_.value)||void 0===n?void 0:n.style)||void 0===i||i.setProperty("transform","translate(0, -130%)"),setTimeout((()=>{var e,l,t,o,a,n;P("enter"),null===(l=null===(e=_.value)||void 0===e?void 0:e.style)||void 0===l||l.setProperty("transition-duration",g.value),null===(o=null===(t=_.value)||void 0===t?void 0:t.style)||void 0===o||o.setProperty("opacity",1),null===(n=null===(a=_.value)||void 0===a?void 0:a.style)||void 0===n||n.setProperty("transform","translate(0, 0)"),x.value=!0}),60)):(P("beforeLeave"),P("leave"),null===(r=null===(s=_.value)||void 0===s?void 0:s.style)||void 0===r||r.setProperty("transform","translate(0, -130%)"))}(e);break;case"slideLeft":!function(e){var l,t,o,a,n,i,s,r;e?(h.value=!0,P("beforeEnter"),null===(t=null===(l=_.value)||void 0===l?void 0:l.style)||void 0===t||t.setProperty("transition-duration","".concat(10,"ms")),null===(a=null===(o=_.value)||void 0===o?void 0:o.style)||void 0===a||a.setProperty("opacity",0),null===(i=null===(n=_.value)||void 0===n?void 0:n.style)||void 0===i||i.setProperty("transform","translate(-120%, 0)"),setTimeout((()=>{var e,l,t,o,a,n;P("enter"),null===(l=null===(e=_.value)||void 0===e?void 0:e.style)||void 0===l||l.setProperty("transition-duration",g.value),null===(o=null===(t=_.value)||void 0===t?void 0:t.style)||void 0===o||o.setProperty("opacity",1),null===(n=null===(a=_.value)||void 0===a?void 0:a.style)||void 0===n||n.setProperty("transform","translate(0, 0)"),x.value=!0}),60)):(P("beforeLeave"),P("leave"),null===(r=null===(s=_.value)||void 0===s?void 0:s.style)||void 0===r||r.setProperty("transform","translate(-120%, 0)"))}(e)}}function L(){h.value=!1,x.value&&(b.show?P("afterEnter"):P("afterLeave")),P("transitionend")}return n((()=>b.show),(e=>{e?(w.value=!0,m((()=>{!function(){if(h.value)return null;k(!0)}()}))):(m((()=>{k(!1)})),b.placed||setTimeout((()=>{w.value=e}),parseInt(g.value)))}),{immediate:!0}),(l=null,t=null)=>{const o=c;return i((p(),u(o,{class:"sn-transition",ref_key:"transitionEle",ref:_,onTransitionend:L,style:d([r(T),e.customStyle])},{default:v((()=>[f(l.$slots,"default",{},void 0,!0)])),_:3},8,["style"])),[[s,!!e.placed||r(w)]])}}})),[["__scopeId","data-v-0dd19292"]]),L=w(l({__name:"sn-transition",setup(l){const n=t.colors,i=o([!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]),s=a((()=>{let e=new Map;return e.set("width","100%"),e.set("height","50px"),e.set("margin","20px 0"),e.set("background",n.value.primary),e.set("border-radius",t.configs.radius.normal),e.set("transition-duration",t.configs.aniTime.normal),e}));function y(e){i.value[e]=!0,setTimeout((()=>{i.value[e]=!1}),2*parseFloat(t.configs.aniTime.normal))}return(l=null,t=null)=>{const o=_(P("sn-topbar"),e),a=_(P("sn-button"),h),n=_(P("com-card"),x),f=c,m=_(P("sn-transition"),k),w=_(P("sn-gap"),T),L=_(P("sn-page"),g);return p(),u(L,null,{default:v((()=>[b(o,{class:"com-card",title:"Transition 过渡动画"}),b(n,{class:"com-card",title:"淡入淡出"},{default:v((()=>[b(a,{text:"播放",style:{"z-index":"2"},onClick:t[0]||(t[0]=(e=null)=>y(0))})])),_:1}),b(m,{mode:"fade",show:r(i)[0]},{default:v((()=>[b(f,{style:d(r(s))},null,8,["style"])])),_:1},8,["show"]),b(n,{class:"com-card",title:"缩放"},{default:v((()=>[b(a,{text:"播放",style:{"z-index":"2"},onClick:t[1]||(t[1]=(e=null)=>y(1))})])),_:1}),b(m,{mode:"zoom",show:r(i)[1]},{default:v((()=>[b(f,{style:d(r(s))},null,8,["style"])])),_:1},8,["show"]),b(n,{class:"com-card",title:"淡入淡出缩放"},{default:v((()=>[b(a,{text:"播放",style:{"z-index":"2"},onClick:t[2]||(t[2]=(e=null)=>y(2))})])),_:1}),b(m,{mode:"fadeZoom",show:r(i)[2]},{default:v((()=>[b(f,{style:d(r(s))},null,8,["style"])])),_:1},8,["show"]),b(n,{class:"com-card",title:"上滑淡入"},{default:v((()=>[b(a,{text:"播放",style:{"z-index":"2"},onClick:t[3]||(t[3]=(e=null)=>y(3))})])),_:1}),b(m,{mode:"fadeUp",show:r(i)[3]},{default:v((()=>[b(f,{style:d(r(s))},null,8,["style"])])),_:1},8,["show"]),b(n,{class:"com-card",title:"右滑淡入"},{default:v((()=>[b(a,{text:"播放",style:{"z-index":"2"},onClick:t[4]||(t[4]=(e=null)=>y(4))})])),_:1}),b(m,{mode:"fadeRight",show:r(i)[4]},{default:v((()=>[b(f,{style:d(r(s))},null,8,["style"])])),_:1},8,["show"]),b(n,{class:"com-card",title:"下滑淡入"},{default:v((()=>[b(a,{text:"播放",style:{"z-index":"2"},onClick:t[5]||(t[5]=(e=null)=>y(5))})])),_:1}),b(m,{mode:"fadeDown",show:r(i)[5]},{default:v((()=>[b(f,{style:d(r(s))},null,8,["style"])])),_:1},8,["show"]),b(n,{class:"com-card",title:"左滑淡入"},{default:v((()=>[b(a,{text:"播放",style:{"z-index":"2"},onClick:t[6]||(t[6]=(e=null)=>y(6))})])),_:1}),b(m,{mode:"fadeLeft",show:r(i)[6]},{default:v((()=>[b(f,{style:d(r(s))},null,8,["style"])])),_:1},8,["show"]),b(n,{class:"com-card",title:"上拉"},{default:v((()=>[b(a,{text:"播放",style:{"z-index":"2"},onClick:t[7]||(t[7]=(e=null)=>y(7))})])),_:1}),b(m,{mode:"slideUp",show:r(i)[7]},{default:v((()=>[b(f,{style:d(r(s))},null,8,["style"])])),_:1},8,["show"]),b(n,{class:"com-card",title:"右拉"},{default:v((()=>[b(a,{text:"播放",style:{"z-index":"2"},onClick:t[8]||(t[8]=(e=null)=>y(8))})])),_:1}),b(m,{mode:"slideRight",show:r(i)[8]},{default:v((()=>[b(f,{style:d(r(s))},null,8,["style"])])),_:1},8,["show"]),b(n,{class:"com-card",title:"下拉"},{default:v((()=>[b(a,{text:"播放",style:{"z-index":"2"},onClick:t[9]||(t[9]=(e=null)=>y(9))})])),_:1}),b(m,{mode:"slideDown",show:r(i)[9]},{default:v((()=>[b(f,{style:d(r(s))},null,8,["style"])])),_:1},8,["show"]),b(n,{class:"com-card",title:"左拉"},{default:v((()=>[b(a,{text:"播放",style:{"z-index":"2"},onClick:t[10]||(t[10]=(e=null)=>y(10))})])),_:1}),b(m,{mode:"slideLeft",show:r(i)[10]},{default:v((()=>[b(f,{style:d(r(s))},null,8,["style"])])),_:1},8,["show"]),b(w)])),_:1})}}}),[["__scopeId","data-v-45c23985"]]);export{L as default};
