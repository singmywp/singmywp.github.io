import{_ as e}from"./sn-topbar.A9l38UY4.js";import{d as t,r as o,b as s,o as a,e as n,f as r,g as l,u as i}from"./index-BV7wVSs2.js";import{$ as u,r as c}from"./uni-app.es.BzKMvEv9.js";import{_ as p}from"./sn-alert.yUyLj5uH.js";import{_ as f}from"./sn-view.uvue_vue_type_script_setup_true_lang.DVH2fFIC.js";import{_ as d}from"./com-card.YVwaER4k.js";import{b as m,c as _}from"./sn-button.68-4Ol7n.js";import{_ as v}from"./sn-page.Jy_rsgwA.js";const g=_(t({__name:"sn-view",setup(t){const _=u.colors,g=o("");function b(e){e.event.preventDefault();let t=UTS.JSON.stringify(e);g.value=t}function j(e){var t;null===(t=null==e?void 0:e.event)||void 0===t||t.preventDefault();let o=UTS.JSON.stringify(e);g.value=o}return(t=null,o=null)=>{const x=c(s("sn-topbar"),e),w=c(s("sn-alert"),p),h=c(s("sn-view"),f),T=c(s("com-card"),d),k=c(s("sn-text"),m),y=c(s("sn-page"),v);return a(),n(y,null,{default:r((()=>[l(x,{title:"View 视图容器"}),l(w,{type:"warning",icon:"notification-fill",text:"手势事件可通过 event 属性操作原事件，例如阻止冒泡、阻止默认行为"}),l(T,{title:"基础用法",note:"用法与内置 view 组件无异。但扩展了组件的手势事件，相当于简化版的 sn-e-gesture。"},{default:r((()=>[l(h)])),_:1}),l(T,{title:"手势事件"},{default:r((()=>[l(h,{class:"gesture-block",padding:"10px",borderRadius:i(u).configs.radius.normal,bgColor:i(_).page,onClick:j,onLongpress:b,onDbclick:j,onTouchmove:b,onTouchstart:b,onTouchend:b,onTouchcancel:b},{default:r((()=>[l(k,{text:i(g),color:i(_).text,style:{height:"auto",wordBreak:"break-all"}},null,8,["text","color"])])),_:1},8,["borderRadius","bgColor"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-a05a7c3d"]]);export{g as default};