import{c as e,_ as t}from"./sn-topbar.DxKzInQK.js";import{d as l,$ as o,c as a,a as i,b as n,e as d,q as s,y as r,j as u,o as c,g as p,h as m,F as g,u as f,r as b,S as C,f as x,i as y}from"./index-DoInGK9X.js";import{r as S}from"./uni-app.es.K1mZmM8s.js";import{_ as v}from"./com-card.D8_7_rS9.js";import{_ as V}from"./sn-gap.BM3gA-Sq.js";import{_ as B}from"./sn-page.Nlp4LDKz.js";import"./sn-button.B1LvAG78.js";const j=l(Object.assign({name:"sn-label-radio"},{__name:"sn-label-radio",props:{modelValue:{type:Number,default:0},data:{type:Array,default:[]},disabled:{type:Boolean,default:!1},itemBgColor:{type:String,default:""},disabledItemBgColor:{type:String,default:""},disabledTextColor:{type:String,default:""},disabledIconColor:{type:String,default:""},itemPadding:{type:String,default:"12px 20px"},activeItemBgColor:{type:String,default:""},icon:{type:String,default:"check-line"},iconPosition:{type:String,default:"left"},iconColor:{type:String,default:""},iconSize:{type:String,default:""},textColor:{type:String,default:""},activeTextColor:{type:String,default:""},textSize:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})},customItemStyle:{type:Object,default:new UTSJSONObject({})}},emits:["update:modelValue","change"],setup(t,l){var b=l.emit;o.utils;const C=o.colors,x=b,y=t,v=a({get:()=>y.modelValue,set:e=>{x("update:modelValue",e),x("change",e)}}),V=a((()=>r("color",y.iconColor,C.value.primary))),B=a((()=>r("font",y.iconSize,o.configs.font.size(4)))),j=a((()=>r("font",y.textSize,o.configs.font.size(2)))),I=a((()=>r("color",y.itemBgColor,C.value.front))),_=a((()=>r("color",y.activeItemBgColor,C.value.info))),z=a((()=>r("color",y.textColor,C.value.text))),O=a((()=>r("color",y.activeTextColor,C.value.primary)));return(l=null,o=null)=>{const a=S(i("sn-menu-item"),e),r=u;return c(),n(r,{class:"sn-label-radio",style:s([t.customStyle])},{default:d((()=>[(c(!0),p(g,null,m(t.data,((e,l)=>{var o;return c(),n(a,{icon:t.icon,padding:t.itemPadding,key:l,iconPosition:t.iconPosition,text:e.text,textColor:f(v)==l?f(O):f(z),textSize:f(j),iconColor:f(v)==l?f(V):f(C).transparent,disabledIconColor:f(v)==l?t.disabledIconColor:f(C).transparent,disabledTextColor:t.disabledTextColor,disabledBgColor:t.disabledItemBgColor,iconSize:f(B),bgColor:f(I),disabled:t.disabled||null!==(o=e.disabled)&&void 0!==o&&o,activeBgColor:f(_),onClick:(e=null)=>function(e){var t;if(y.disabled||null!==(t=y.data[e].disabled)&&void 0!==t&&t)return null;v.value=e}(l),style:s([t.customItemStyle])},null,8,["icon","padding","iconPosition","text","textColor","textSize","iconColor","disabledIconColor","disabledTextColor","disabledBgColor","iconSize","bgColor","disabled","activeBgColor","onClick","style"])})),128))])),_:1},8,["style"])}}})),I=l({__name:"sn-label-radio",setup(e){o.colors,o.utils;const l=b(0),a=[new C({text:"华为",id:"huawei"}),new C({text:"小米",id:"xiaomi"}),new C({text:"苹果",id:"apple"}),new C({text:"三星",id:"samsung",disabled:!0}),new C({text:"OPPO",id:"oppo"}),new C({text:"VIVO",id:"vivo"}),new C({text:"魅族",id:"meizu"})];return(e=null,o=null)=>{const s=S(i("sn-topbar"),t),r=S(i("com-card"),v),u=S(i("sn-label-radio"),j),p=S(i("sn-gap"),V),m=S(i("sn-page"),B);return c(),n(m,null,{default:d((()=>[x(s,{title:"Label Radio 标签单选"}),x(r,{title:"基础用法",note:"与 Radio 不同的是， 该组件只需提供数据，使用更简单"}),x(r,{padding:"0"},{default:d((()=>[x(u,{modelValue:f(l),"onUpdate:modelValue":o[0]||(o[0]=(e=null)=>y(l)?l.value=e:null),data:a},null,8,["modelValue"])])),_:1}),x(r,{title:"图标位置",note:"支持左侧和右侧图标"}),x(r,{padding:"0"},{default:d((()=>[x(u,{modelValue:f(l),"onUpdate:modelValue":o[1]||(o[1]=(e=null)=>y(l)?l.value=e:null),iconPosition:"right",data:a},null,8,["modelValue"])])),_:1}),x(r,{title:"自定义样式"}),x(r,{padding:"0"},{default:d((()=>[x(u,{modelValue:f(l),"onUpdate:modelValue":o[2]||(o[2]=(e=null)=>y(l)?l.value=e:null),icon:"user-smile-fill",iconPosition:"right",iconColor:"$successDark",activeTextColor:"$successDark",textSize:"$3",itemPadding:"10px 15px",activeItemBgColor:"$front",disabledItemBgColor:"$transparent",data:a},null,8,["modelValue"])])),_:1}),x(p)])),_:1})}}});export{I as default};
