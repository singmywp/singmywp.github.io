import{_ as e}from"./sn-topbar.DxKzInQK.js";import{d as l,$ as a,r as o,c as t,w as n,l as i,a as u,b as s,e as d,p as r,q as m,u as c,y as p,N as b,m as f,j as v,o as g,B as V,f as h,S as w,g as _,i as x,F as S}from"./index-DoInGK9X.js";import{r as y}from"./uni-app.es.K1mZmM8s.js";import{_ as z}from"./sn-switch.EAkaUVVB.js";import{_ as j}from"./sn-form-item.DQivdfXx.js";import{_ as T}from"./sn-select.BifT2hzZ.js";import{_ as C}from"./sn-stepper.8H8ymVUn.js";import{_ as U}from"./sn-input.CG5cj0Ye.js";import{_ as k}from"./sn-form.uvue_vue_type_script_setup_true_lang.ZcEsNHPg.js";import{_ as R}from"./com-card.D8_7_rS9.js";import{_ as O}from"./sn-page.Nlp4LDKz.js";import{a as B,c as M}from"./sn-button.B1LvAG78.js";import{u as N}from"./useResize.Dia-r-oM.js";import"./sn-alert.CWq7Acu6.js";import"./sn-line.DzqrU5y1.js";const E=M(l(Object.assign({name:"sn-float-button"},{__name:"sn-float-button",props:{modelValue:{type:Array,default:[0,0]},position:{type:String,default:"bottom-end"},init:{type:Boolean,default:!0},absorb:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},bgColor:{type:String,default:""},size:{type:String,default:"60px"},icon:{type:String,default:""},iconColor:{type:String,default:""},iconSize:{type:String,default:""},margin:{type:Number,default:20},borderRadius:{type:String,default:""},boxShadow:{type:String,default:"0 0 15px -10px"},aniTime:{type:String,default:a.configs.aniTime.long},customStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))}},emits:["update:modelValue","change","click"],setup(e,l){var w=l.emit;const _=a.utils,x=a.colors,S=w,z=e,j=o(null),T=o(!1),C=o([0,0]),U=o(0),k=o(0),R=o(!1),O=t({get:()=>z.modelValue,set:e=>{S("update:modelValue",e),S("change",e),C.value=e}}),M=t((()=>["top-start","top","top-end","right","bottom-end","bottom","bottom-start","left"].includes(z.position)?z.position:"bottom-end")),E=t((()=>_.getPx(z.size))),I=t((()=>p("color",z.bgColor,x.value.front))),D=t((()=>p("color",z.iconColor,x.value.text))),J=t((()=>p("font",z.iconSize,a.configs.font.size(6)))),L=t((()=>p("radius",z.borderRadius,a.configs.radius.circle))),P=t((()=>p("aniTime",z.aniTime,a.configs.aniTime.long))),X=t((()=>{let e=new Map;return e.set("background",z.disabled?x.value.disabled:I.value),e.set("box-shadow",z.boxShadow),e.set("border-radius",L.value),e.set("width",z.size),e.set("height",z.size),e.set("z-index",a.configs.zIndex.float),e.set("transform","translate(".concat(C.value[0],"px,").concat(C.value[1],"px)")),e.set("transition-duration","".concat(T.value?parseInt(P.value):0,"ms")),e}));function A(){let e=b(),l=z.margin;U.value=e.windowHeight,k.value=e.windowWidth;let a=U.value-E.value-l,o=k.value-E.value-l,t=(U.value-E.value)/2,n=(k.value-E.value)/2;if(z.init)switch(M.value){case"top-start":O.value=[l,l];break;case"top":O.value=[n,l];break;case"top-end":O.value=[o,l];break;case"right":O.value=[o,t];break;case"bottom-end":O.value=[o,a];break;case"bottom":O.value=[n,a];break;case"bottom-start":O.value=[l,a];break;case"left":O.value=[l,t]}f((()=>{T.value=!0}))}function F(e){if(z.disabled)return null;S("click",e)}function H(e,l){T.value=!1,O.value=[Math.min(Math.max(e-E.value/2,0),k.value-E.value),Math.min(Math.max(l-E.value/2,0),U.value-E.value)]}function W(e){if(z.disabled)return null;let l=e.touches[0];e.preventDefault(),e.stopPropagation(),H(l.clientX,l.clientY)}function Y(){if(z.disabled)return null;let e=z.margin;T.value=!0,z.absorb&&(C.value[0]+E.value/2<k.value/2?C.value[0]=e:C.value[0]=k.value-E.value-e)}function $(){if(z.disabled)return null;R.value=!0}function q(){if(z.disabled)return null;R.value=!1,Y()}function G(e){if(z.disabled)return null;e.preventDefault(),e.stopPropagation(),R.value&&H(e.clientX,e.clientY)}return n((()=>z.position),(()=>{A()})),n((()=>z.init),(()=>{A()})),n((()=>z.modelValue),(e=>{C.value=e})),i((()=>{window.addEventListener("mouseup",q),window.addEventListener("mousemove",G),A(),N(j.value,(()=>{A()}))})),(l=null,a=null)=>{const o=y(u("sn-icon"),B),t=v;return g(),s(t,{class:r(["sn-float-button",new UTSJSONObject({disabled:e.disabled})]),ref_key:"buttonEle",ref:j,onClick:F,onTouchmove:W,onTouchend:Y,onTouchcancel:Y,onMousedown:$,style:m([c(X),e.customStyle])},{default:d((()=>[V(l.$slots,"default",{},(()=>[h(o,{name:e.icon,color:e.disabled?c(x).disabledText:c(D),size:c(J)},null,8,["name","color","size"])]),!0)])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-3deb13dc"]]),I=l({__name:"sn-float-button",setup(l){const t=a.colors,n=o({model:[0,0],init:!0,position:4,absorb:!0,margin:20,disabled:!1,boxShadow:"0 0 15px -10px",aniTime:parseInt(a.configs.aniTime.long),borderRadius:"",icon:"add-line",iconSize:"",iconColor:"white",size:"60px",bgColor:t.value.primary}),i=[new w({id:"top-start",text:"左上"}),new w({id:"top",text:"正上"}),new w({id:"top-end",text:"右上"}),new w({id:"right",text:"右侧"}),new w({id:"bottom-end",text:"右下"}),new w({id:"bottom",text:"正下"}),new w({id:"bottom-start",text:"左下"}),new w({id:"left",text:"左侧"})];return(l=null,a=null)=>{var o;const t=y(u("sn-topbar"),e),s=y(u("sn-switch"),z),r=y(u("sn-form-item"),j),m=y(u("sn-select"),T),p=y(u("sn-stepper"),C),b=y(u("sn-input"),U),f=y(u("sn-form"),k),v=y(u("com-card"),R),V=y(u("sn-page"),O),w=y(u("sn-float-button"),E);return g(),_(S,null,[h(V,null,{default:d((()=>[h(t,{title:"Float Button 浮动按钮"}),h(v,{title:"组件演示",note:"单纯的悬浮按钮，也能有很多趣味。"},{default:d((()=>[h(f,{modelValue:c(n),"onUpdate:modelValue":a[12]||(a[12]=(e=null)=>x(n)?n.value=e:null),showBorder:!1},{default:d((()=>[h(r,{label:"是否预设位置"},{default:d((()=>[h(s,{modelValue:c(n).init,"onUpdate:modelValue":a[0]||(a[0]=(e=null)=>c(n).init=e)},null,8,["modelValue"])])),_:1}),h(r,{label:"松手吸附"},{default:d((()=>[h(s,{modelValue:c(n).absorb,"onUpdate:modelValue":a[1]||(a[1]=(e=null)=>c(n).absorb=e)},null,8,["modelValue"])])),_:1}),h(r,{label:"禁用"},{default:d((()=>[h(s,{modelValue:c(n).disabled,"onUpdate:modelValue":a[2]||(a[2]=(e=null)=>c(n).disabled=e)},null,8,["modelValue"])])),_:1}),h(r,{label:"位置"},{default:d((()=>[h(m,{modelValue:c(n).position,"onUpdate:modelValue":a[3]||(a[3]=(e=null)=>c(n).position=e),width:"200px",data:i},null,8,["modelValue"])])),_:1}),h(r,{label:"动画时长"},{default:d((()=>[h(p,{modelValue:c(n).aniTime,"onUpdate:modelValue":a[4]||(a[4]=(e=null)=>c(n).aniTime=e),step:100,min:100},null,8,["modelValue"])])),_:1}),h(r,{label:"按钮尺寸"},{default:d((()=>[h(b,{modelValue:c(n).size,"onUpdate:modelValue":a[5]||(a[5]=(e=null)=>c(n).size=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),h(r,{label:"背景颜色"},{default:d((()=>[h(b,{modelValue:c(n).bgColor,"onUpdate:modelValue":a[6]||(a[6]=(e=null)=>c(n).bgColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),h(r,{label:"圆角大小"},{default:d((()=>[h(b,{modelValue:c(n).borderRadius,"onUpdate:modelValue":a[7]||(a[7]=(e=null)=>c(n).borderRadius=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),h(r,{label:"阴影"},{default:d((()=>[h(b,{modelValue:c(n).boxShadow,"onUpdate:modelValue":a[8]||(a[8]=(e=null)=>c(n).boxShadow=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),h(r,{label:"图标"},{default:d((()=>[h(b,{modelValue:c(n).icon,"onUpdate:modelValue":a[9]||(a[9]=(e=null)=>c(n).icon=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),h(r,{label:"图标字体大小"},{default:d((()=>[h(b,{modelValue:c(n).iconSize,"onUpdate:modelValue":a[10]||(a[10]=(e=null)=>c(n).iconSize=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),h(r,{label:"图标颜色"},{default:d((()=>[h(b,{modelValue:c(n).iconColor,"onUpdate:modelValue":a[11]||(a[11]=(e=null)=>c(n).iconColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1})])),_:1}),h(w,{modelValue:c(n).model,"onUpdate:modelValue":a[13]||(a[13]=(e=null)=>c(n).model=e),init:c(n).init,disabled:c(n).disabled,aniTime:"".concat(c(n).aniTime,"ms"),absorb:c(n).absorb,position:i[null!==(o=c(n).position)&&void 0!==o?o:4].id,bgColor:c(n).bgColor,size:c(n).size,icon:c(n).icon,iconSize:c(n).iconSize,iconColor:c(n).iconColor,boxShadow:c(n).boxShadow,borderRadius:c(n).borderRadius},null,8,["modelValue","init","disabled","aniTime","absorb","position","bgColor","size","icon","iconSize","iconColor","boxShadow","borderRadius"])],64)}}});export{I as default};
