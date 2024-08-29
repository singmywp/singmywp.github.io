import{_ as e}from"./sn-topbar.CX0rMkKy.js";import{d as l,r as o,c as a,w as t,l as n,b as i,e as u,f as d,p as s,q as r,u as m,U as p,m as c,k as b,o as f,t as v,g,h as V,i as h,F as w}from"./index-DNTc1GxZ.js";import{$ as _,r as x,S}from"./uni-app.es.D9ZkitmT.js";import{_ as z}from"./sn-switch.C3UtPu7N.js";import{_ as y}from"./sn-form-item.iui4qf57.js";import{_ as j}from"./sn-select.CSb66Fnx.js";import{_ as C}from"./sn-stepper.D3yVS7uF.js";import{_ as T}from"./sn-input.ojC213jP.js";import{_ as U}from"./sn-form.uvue_vue_type_script_setup_true_lang.CpEqESxD.js";import{_ as k}from"./com-card.22LSjaaf.js";import{_ as R}from"./sn-page.CEVOSUw5.js";import{a as I,c as B}from"./sn-button.BaZjRh9m.js";import{u as M}from"./useResize.BiiI_cO4.js";import"./sn-alert.BVqfDC3L.js";import"./sn-line.BJRaATTn.js";const O=B(l(Object.assign({name:"sn-float-button"},{__name:"sn-float-button",props:{modelValue:{type:Array,default:[0,0]},position:{type:String,default:"bottom-end"},init:{type:Boolean,default:!0},absorb:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},bgColor:{type:String,default:""},size:{type:String,default:"60px"},icon:{type:String,default:""},iconColor:{type:String,default:""},iconSize:{type:String,default:""},margin:{type:Number,default:20},borderRadius:{type:String,default:""},boxShadow:{type:String,default:"0 0 15px -10px"},aniTime:{type:Number,default:parseInt(_.configs.aniTime.long)},customStyle:{type:Object,default:new UTSJSONObject({})}},emits:["update:modelValue","change","click"],setup(e,l){var V=l.emit;const h=_.utils,w=_.colors,S=V,z=e,y=o(null),j=o(!1),C=o(!1),T=o([0,0]),U=o(0),k=o(0);h.randomComId();const R=a({get:()=>z.modelValue,set:e=>{S("update:modelValue",e),S("change",e),T.value=e}}),B=a((()=>["top-start","top","top-end","right","bottom-end","bottom","bottom-start","left"].includes(z.position)?z.position:"bottom-end")),O=a((()=>h.getPx(z.size))),N=a((()=>""==z.bgColor?w.value.front:z.bgColor)),E=a((()=>""==z.iconColor?w.value.text:z.iconColor)),P=a((()=>""==z.iconSize?_.configs.font.size(6):z.iconSize)),q=a((()=>""==z.borderRadius?_.configs.radius.circle:z.borderRadius)),D=a((()=>z.aniTime==parseInt(_.configs.aniTime.long)?parseInt(_.configs.aniTime.long):z.aniTime)),F=a((()=>{let e=new Map;return e.set("background",z.disabled?w.value.disabled:N.value),e.set("box-shadow",z.boxShadow),e.set("border-radius",q.value),e.set("width",z.size),e.set("height",z.size),e.set("z-index",_.configs.zIndex.float),e.set("transform","translate(".concat(T.value[0],"px,").concat(T.value[1],"px)")),e.set("transition-duration","".concat(j.value?D.value:0,"ms")),e}));function H(){let e=p(),l=z.margin;U.value=e.windowHeight,k.value=e.windowWidth;let o=U.value-O.value-l,a=k.value-O.value-l,t=(U.value-O.value)/2,n=(k.value-O.value)/2;if(z.init)switch(B.value){case"top-start":R.value=[l,l];break;case"top":R.value=[n,l];break;case"top-end":R.value=[a,l];break;case"right":R.value=[a,t];break;case"bottom-end":R.value=[a,o];break;case"bottom":R.value=[n,o];break;case"bottom-start":R.value=[l,o];break;case"left":R.value=[l,t]}c((()=>{j.value=!0}))}function J(e){if(z.disabled)return null;S("click",e)}function L(e,l){j.value=!1,R.value=[Math.min(Math.max(e-O.value/2,0),k.value-O.value),Math.min(Math.max(l-O.value/2,0),U.value-O.value)]}function X(e){if(z.disabled)return null;let l=e.touches[0];e.preventDefault(),e.stopPropagation(),L(l.clientX,l.clientY)}function Y(){if(z.disabled)return null;let e=z.margin;j.value=!0,z.absorb&&(T.value[0]+O.value/2<k.value/2?T.value[0]=e:T.value[0]=k.value-O.value-e)}function $(){if(z.disabled)return null;C.value=!0}function A(){if(z.disabled)return null;C.value=!1,Y()}function W(e){if(z.disabled)return null;e.preventDefault(),e.stopPropagation(),C.value&&L(e.clientX,e.clientY)}return t((()=>z.position),(()=>{H()})),t((()=>z.init),(()=>{H()})),t((()=>z.modelValue),(e=>{T.value=e})),n((()=>{window.addEventListener("mouseup",A),window.addEventListener("mousemove",W),H(),M(y.value,(()=>{H()}))})),(l=null,o=null)=>{const a=x(i("sn-icon"),I),t=b;return f(),u(t,{class:s(["sn-float-button",new UTSJSONObject({disabled:e.disabled})]),ref_key:"buttonEle",ref:y,onClick:J,onTouchmove:X,onTouchend:Y,onTouchcancel:Y,onMousedown:$,style:r([m(F),e.customStyle])},{default:d((()=>[v(l.$slots,"default",{},(()=>[g(a,{name:e.icon,color:e.disabled?m(w).disabledText:m(E),size:m(P)},null,8,["name","color","size"])]),!0)])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-bfd1fc6d"]]),N=l({__name:"sn-float-button",setup(l){const a=_.colors,t=o({model:[0,0],init:!0,position:4,absorb:!0,margin:20,disabled:!1,boxShadow:"0 0 15px -10px",aniTime:parseInt(_.configs.aniTime.long),borderRadius:"",icon:"add-line",iconSize:"",iconColor:"white",size:"60px",bgColor:a.value.primary}),n=[new S({id:"top-start",text:"左上"}),new S({id:"top",text:"正上"}),new S({id:"top-end",text:"右上"}),new S({id:"right",text:"右侧"}),new S({id:"bottom-end",text:"右下"}),new S({id:"bottom",text:"正下"}),new S({id:"bottom-start",text:"左下"}),new S({id:"left",text:"左侧"})];return(l=null,o=null)=>{var a,u,s,r,p,c,b,v,_,S,I,B;const M=x(i("sn-topbar"),e),N=x(i("sn-switch"),z),E=x(i("sn-form-item"),y),P=x(i("sn-select"),j),q=x(i("sn-stepper"),C),D=x(i("sn-input"),T),F=x(i("sn-form"),U),H=x(i("com-card"),k),J=x(i("sn-page"),R),L=x(i("sn-float-button"),O);return f(),V(w,null,[g(J,null,{default:d((()=>[g(M,{title:"Float Button 浮动按钮"}),g(H,{title:"组件演示",note:"单纯的悬浮按钮，也能有很多趣味。"},{default:d((()=>[g(F,{modelValue:m(t),"onUpdate:modelValue":o[12]||(o[12]=(e=null)=>h(t)?t.value=e:null),showBorder:!1},{default:d((()=>[g(E,{label:"是否预设位置"},{default:d((()=>[g(N,{modelValue:m(t).init,"onUpdate:modelValue":o[0]||(o[0]=(e=null)=>m(t).init=e)},null,8,["modelValue"])])),_:1}),g(E,{label:"松手吸附"},{default:d((()=>[g(N,{modelValue:m(t).absorb,"onUpdate:modelValue":o[1]||(o[1]=(e=null)=>m(t).absorb=e)},null,8,["modelValue"])])),_:1}),g(E,{label:"禁用"},{default:d((()=>[g(N,{modelValue:m(t).disabled,"onUpdate:modelValue":o[2]||(o[2]=(e=null)=>m(t).disabled=e)},null,8,["modelValue"])])),_:1}),g(E,{label:"位置"},{default:d((()=>[g(P,{modelValue:m(t).position,"onUpdate:modelValue":o[3]||(o[3]=(e=null)=>m(t).position=e),width:"200px",data:n},null,8,["modelValue"])])),_:1}),g(E,{label:"动画时长"},{default:d((()=>[g(q,{modelValue:m(t).aniTime,"onUpdate:modelValue":o[4]||(o[4]=(e=null)=>m(t).aniTime=e),step:100,min:100},null,8,["modelValue"])])),_:1}),g(E,{label:"按钮尺寸"},{default:d((()=>[g(D,{modelValue:m(t).size,"onUpdate:modelValue":o[5]||(o[5]=(e=null)=>m(t).size=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),g(E,{label:"背景颜色"},{default:d((()=>[g(D,{modelValue:m(t).bgColor,"onUpdate:modelValue":o[6]||(o[6]=(e=null)=>m(t).bgColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),g(E,{label:"圆角大小"},{default:d((()=>[g(D,{modelValue:m(t).borderRadius,"onUpdate:modelValue":o[7]||(o[7]=(e=null)=>m(t).borderRadius=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),g(E,{label:"阴影"},{default:d((()=>[g(D,{modelValue:m(t).boxShadow,"onUpdate:modelValue":o[8]||(o[8]=(e=null)=>m(t).boxShadow=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),g(E,{label:"图标"},{default:d((()=>[g(D,{modelValue:m(t).icon,"onUpdate:modelValue":o[9]||(o[9]=(e=null)=>m(t).icon=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),g(E,{label:"图标字体大小"},{default:d((()=>[g(D,{modelValue:m(t).iconSize,"onUpdate:modelValue":o[10]||(o[10]=(e=null)=>m(t).iconSize=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),g(E,{label:"图标颜色"},{default:d((()=>[g(D,{modelValue:m(t).iconColor,"onUpdate:modelValue":o[11]||(o[11]=(e=null)=>m(t).iconColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),g(L,{modelValue:m(t).model,"onUpdate:modelValue":o[13]||(o[13]=(e=null)=>m(t).model=e),init:null===(a=m(t).init)||void 0===a||a,disabled:null!==(u=m(t).disabled)&&void 0!==u&&u,aniTime:null!==(s=m(t).aniTime)&&void 0!==s?s:0,absorb:null===(r=m(t).absorb)||void 0===r||r,position:n[null!==(p=m(t).position)&&void 0!==p?p:4].id,bgColor:null!==(c=m(t).bgColor)&&void 0!==c?c:"",size:null!==(b=m(t).size)&&void 0!==b?b:"",icon:null!==(v=m(t).icon)&&void 0!==v?v:"",iconSize:null!==(_=m(t).iconSize)&&void 0!==_?_:"",iconColor:null!==(S=m(t).iconColor)&&void 0!==S?S:"",boxShadow:null!==(I=m(t).boxShadow)&&void 0!==I?I:"",borderRadius:null!==(B=m(t).borderRadius)&&void 0!==B?B:""},null,8,["modelValue","init","disabled","aniTime","absorb","position","bgColor","size","icon","iconSize","iconColor","boxShadow","borderRadius"])],64)}}});export{N as default};
