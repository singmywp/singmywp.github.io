import{_ as e}from"./sn-topbar.wm0GzhH3.js";import{d as t,R as l,$ as o,T as a,w as i,c as n,a as s,e as d,f as r,p as u,x as c,_ as m,b as p,h as g,j as f,F as b,u as x,r as C,S,g as y,i as v}from"./index-DYMgrqHp.js";import{r as j}from"./uni-app.es.DgDfNdgy.js";import{_}from"./com-card.BtLNzB63.js";import{_ as V}from"./sn-menu-item.DkjoXkWj.js";import{_ as O}from"./sn-gap.2Twkbobz.js";import{_ as w}from"./sn-page.Cf6LEMVT.js";import"./sn-text.euomPoe8.js";import"./sn-button.BjZePiC5.js";import"./sn-loading.t5otRKvs.js";import"./sn-overlay.CiZFgEyq.js";const B=t(Object.assign({name:"sn-label-radio"},{__name:"sn-label-radio",props:l(new UTSJSONObject({data:{type:Array,default:[]},disabled:{type:Boolean,default:!1},itemBgColor:{type:String,default:""},disabledItemBgColor:{type:String,default:""},disabledTextColor:{type:String,default:""},disabledIconColor:{type:String,default:""},itemPadding:{type:String,default:"12px 20px"},activeItemBgColor:{type:String,default:""},icon:{type:String,default:"check-line"},iconPosition:{type:String,default:"left"},iconColor:{type:String,default:""},iconSize:{type:String,default:""},textColor:{type:String,default:""},activeTextColor:{type:String,default:""},textSize:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})},customItemStyle:{type:Object,default:new UTSJSONObject({})}}),new UTSJSONObject({modelValue:{type:Number,default:0},modelModifiers:{}})),emits:l(["change"],["update:modelValue"]),setup(e,t){var l=t.emit;o.utils;const C=o.colors,S=l,y=a(e,"modelValue");i(y,(e=>{S("change",e)}));const v=e,_=n((()=>c("color",v.iconColor,C.value.primary))),O=n((()=>c("font",v.iconSize,o.configs.font.size(4)))),w=n((()=>c("font",v.textSize,o.configs.font.size(2)))),B=n((()=>c("color",v.itemBgColor,C.value.front))),I=n((()=>c("color",v.activeItemBgColor,C.value.info))),z=n((()=>c("color",v.textColor,C.value.text))),T=n((()=>c("color",v.activeTextColor,C.value.primary)));return(t=null,l=null)=>{const o=j(s("sn-menu-item"),V),a=m;return p(),d(a,{class:"sn-label-radio",style:u([e.customStyle])},{default:r((()=>[(p(!0),g(b,null,f(e.data,((t=null,l)=>{var a;return p(),d(o,{icon:e.icon,padding:e.itemPadding,key:l,iconPosition:e.iconPosition,text:t.text,textColor:y.value==l?x(T):x(z),textSize:x(w),iconColor:y.value==l?x(_):x(C).transparent,disabledIconColor:y.value==l?e.disabledIconColor:x(C).transparent,disabledTextColor:e.disabledTextColor,disabledBgColor:e.disabledItemBgColor,iconSize:x(O),bgColor:x(B),disabled:e.disabled||null!==(a=t.disabled)&&void 0!==a&&a,activeBgColor:x(I),onClick:(e=null)=>function(e){var t;if(v.disabled||null!==(t=v.data[e].disabled)&&void 0!==t&&t)return null;y.value=e}(l),style:u([e.customItemStyle])},null,8,["icon","padding","iconPosition","text","textColor","textSize","iconColor","disabledIconColor","disabledTextColor","disabledBgColor","iconSize","bgColor","disabled","activeBgColor","onClick","style"])})),128))])),_:1},8,["style"])}}})),I=t({__name:"sn-label-radio",setup(t){o.colors,o.utils;const l=C(0),a=[new S({text:"华为",id:"huawei"}),new S({text:"小米",id:"xiaomi"}),new S({text:"苹果",id:"apple"}),new S({text:"三星",id:"samsung",disabled:!0}),new S({text:"OPPO",id:"oppo"}),new S({text:"VIVO",id:"vivo"}),new S({text:"魅族",id:"meizu"})];return(t=null,o=null)=>{const i=j(s("sn-topbar"),e),n=j(s("com-card"),_),u=j(s("sn-label-radio"),B),c=j(s("sn-gap"),O),m=j(s("sn-page"),w);return p(),d(m,null,{default:r((()=>[y(i,{title:"Label Radio 标签单选"}),y(n,{title:"基础用法",note:"与 Radio 不同的是， 该组件只需提供数据，使用更简单"}),y(n,{padding:"0"},{default:r((()=>[y(u,{modelValue:x(l),"onUpdate:modelValue":o[0]||(o[0]=(e=null)=>v(l)?l.value=e:null),data:a},null,8,["modelValue"])])),_:1}),y(n,{title:"图标位置",note:"支持左侧和右侧图标"}),y(n,{padding:"0"},{default:r((()=>[y(u,{modelValue:x(l),"onUpdate:modelValue":o[1]||(o[1]=(e=null)=>v(l)?l.value=e:null),iconPosition:"right",data:a},null,8,["modelValue"])])),_:1}),y(n,{title:"自定义样式"}),y(n,{padding:"0"},{default:r((()=>[y(u,{modelValue:x(l),"onUpdate:modelValue":o[2]||(o[2]=(e=null)=>v(l)?l.value=e:null),icon:"user-smile-fill",iconPosition:"right",iconColor:"$successDark",activeTextColor:"$successDark",textSize:"$3",itemPadding:"10px 15px",activeItemBgColor:"$front",disabledItemBgColor:"$transparent",data:a},null,8,["modelValue"])])),_:1}),y(c)])),_:1})}}});export{I as default};