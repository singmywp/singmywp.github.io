import{_ as e,b as l}from"./sn-topbar.CX0rMkKy.js";import{d as a,r as s,b as o,o as n,h as t,g as i,f as m,u as r,i as u,F as p}from"./index-DNTc1GxZ.js";import{$ as d,r as f,S as c}from"./uni-app.es.D9ZkitmT.js";import{_}from"./sn-switch.C3UtPu7N.js";import{_ as y}from"./sn-form-item.iui4qf57.js";import{_ as j}from"./sn-stepper.D3yVS7uF.js";import{_ as v,c as V}from"./sn-button.BaZjRh9m.js";import{_ as b}from"./sn-form.uvue_vue_type_script_setup_true_lang.CpEqESxD.js";import{_ as k}from"./com-card.22LSjaaf.js";import{_ as g}from"./sn-page.CEVOSUw5.js";import"./sn-alert.BVqfDC3L.js";import"./sn-line.BJRaATTn.js";import"./sn-input.ojC213jP.js";const C=V(a({__name:"sn-overlay",setup(a){const V=s(null),C=s({maskClose:!0,aniTime:parseInt(d.configs.aniTime.long),opacity:.3});function T(){var e,l;null===(l=null===(e=V.value)||void 0===e?void 0:e.open)||void 0===l||l.call(e)}function h(e){"run"==e.id&&T()}return(a=null,s=null)=>{const d=f(o("sn-topbar"),e),w=f(o("sn-switch"),_),x=f(o("sn-form-item"),y),U=f(o("sn-stepper"),j),B=f(o("sn-button"),v),I=f(o("sn-form"),b),q=f(o("com-card"),k),E=f(o("sn-page"),g),F=f(o("sn-overlay"),l);return n(),t(p,null,[i(E,null,{default:m((()=>[i(d,{title:"Overlay 遮罩层",features:[new c({id:"run",icon:"play-circle-fill"})],onButtonClick:h}),i(q,{title:"组件演示",note:"强调特定元素，常与弹出层等组件搭配使用。通过插槽放置弹出层。"},{default:m((()=>[i(I,{modelValue:r(C),"onUpdate:modelValue":s[4]||(s[4]=(e=null)=>u(C)?C.value=e:null),showBorder:!1},{default:m((()=>[i(x,{label:"点击遮罩关闭"},{default:m((()=>[i(w,{modelValue:r(C).maskClose,"onUpdate:modelValue":s[0]||(s[0]=(e=null)=>r(C).maskClose=e)},null,8,["modelValue"])])),_:1}),i(x,{label:"动画时长"},{default:m((()=>[i(U,{modelValue:r(C).aniTime,"onUpdate:modelValue":s[1]||(s[1]=(e=null)=>r(C).aniTime=e),step:100,min:100},null,8,["modelValue"])])),_:1}),i(x,{label:"遮罩透明度"},{default:m((()=>[i(U,{modelValue:r(C).opacity,"onUpdate:modelValue":s[2]||(s[2]=(e=null)=>r(C).opacity=e),step:.1,min:0,max:1},null,8,["modelValue"])])),_:1}),i(B,{text:"打开",level:"second",type:"primary",onClick:s[3]||(s[3]=(e=null)=>T()),style:{"margin-top":"10px"}})])),_:1},8,["modelValue"])])),_:1})])),_:1}),i(F,{ref_key:"overlayEle",ref:V,maskClose:r(C).maskClose,opacity:r(C).opacity,aniTime:r(C).aniTime},null,8,["maskClose","opacity","aniTime"])],64)}}}),[["__scopeId","data-v-1c81f8cb"]]);export{C as default};