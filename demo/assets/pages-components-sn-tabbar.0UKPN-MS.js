import{d as e,$ as l,r as o,an as a,c as t,at as i,K as n,a as d,b as r,e as u,f as m,g as s,u as c,i as p,k as g}from"./index-DYMgrqHp.js";import{_ as b}from"./sn-topbar.wm0GzhH3.js";import{r as V}from"./uni-app.es.DgDfNdgy.js";import{_ as f}from"./sn-button.BjZePiC5.js";import{_ as C}from"./com-card.BtLNzB63.js";import{_}from"./sn-switch.CRzEpFQb.js";import{_ as v}from"./sn-form-item.H9V81OhK.js";import{_ as S}from"./sn-input.Cq5jBGx5.js";import{_ as h}from"./sn-form.uvue_vue_type_script_setup_true_lang.i8bEa9At.js";import{_ as x}from"./sn-gap.2Twkbobz.js";import{_ as j}from"./sn-tabbar.DAdQcwId.js";import{_ as U}from"./sn-toast.CbZM1jPi.js";import{_ as z}from"./sn-page.Cf6LEMVT.js";import"./sn-text.euomPoe8.js";import"./sn-menu-item.DkjoXkWj.js";import"./sn-overlay.CiZFgEyq.js";import"./sn-loading.t5otRKvs.js";import"./sn-alert.B2UqFsTR.js";import"./sn-line.BnKikEoE.js";import"./sn-avatar.agEpuNt-.js";import"./sn-badge.CniK0gFP.js";import"./sn-view.BSUxthDa.js";import"./useResize.Cfi37DcV.js";const w=e({__name:"sn-tabbar",setup(e){l.colors,l.utils;const w=o(null),T=a(new UTSJSONObject({bgColor:"",itemBgColor:"",margin:"0px",padding:"5px",border:"none",itemPadding:"0px",itemSpacing:"0px",itemActiveBgColor:"",borderRadius:"0px",textColor:"",activeTextColor:"",textSize:"",iconColor:"",activeIconColor:"",iconSize:"",imageSize:"35px",disabled:!1})),B=o("0px"),O=t((()=>l.configs.app.theme)),I=t((()=>[new UTSJSONObject({icon:"home-5-line",text:"首页",activeIcon:"home-5-fill"}),new UTSJSONObject({icon:"community-line",text:"社区",activeIcon:"community-fill",interceptor:()=>{var e,l;return null===(l=null===(e=w.value)||void 0===e?void 0:e.configShow)||void 0===l||l.call(e,new i({text:"拦截器：社区功能暂未开放"})),!1}}),new UTSJSONObject({image:"/static/images/logo-inactive.png",activeImage:"light"==O.value?"/static/images/logo-active-light.png":"/static/images/logo-active-dark.png"}),new UTSJSONObject({icon:"message-3-line",text:"信息",activeIcon:"message-3-fill",badge:new n({value:6})}),new UTSJSONObject({icon:"user-3-line",text:"我的",activeIcon:"user-3-fill"})]));function R(e){g({url:e})}return(e=null,l=null)=>{const o=V(d("sn-topbar"),b),a=V(d("sn-button"),f),t=V(d("com-card"),C),i=V(d("sn-switch"),_),n=V(d("sn-form-item"),v),g=V(d("sn-input"),S),O=V(d("sn-form"),h),J=V(d("sn-gap"),x),N=V(d("sn-tabbar"),j),P=V(d("sn-toast"),U),k=V(d("sn-page"),z);return r(),u(k,null,{default:m((()=>[s(o,{title:"Tabbar 底部导航栏"}),s(t,{title:"组件演示"},{default:m((()=>[s(a,{text:"演示1",onClick:l[0]||(l[0]=(e=null)=>R("/pages/components/tabbar/demo1"))}),s(a,{class:"m-t-5",text:"演示2",onClick:l[1]||(l[1]=(e=null)=>R("/pages/components/tabbar/demo2"))}),s(a,{class:"m-t-5",text:"演示3",onClick:l[2]||(l[2]=(e=null)=>R("/pages/components/tabbar/demo3"))})])),_:1}),s(t,{title:"自由配置",note:"自定义 Tabbar，支持字体图标、图片，样式自由可调，支持拦截鉴权，可以设置角标，最大支持5个子项"},{default:m((()=>[s(O,{modelValue:c(T),"onUpdate:modelValue":l[20]||(l[20]=(e=null)=>p(T)?T.value=e:null),showBorder:!1},{default:m((()=>[s(n,{label:"是否禁用"},{default:m((()=>[s(i,{modelValue:c(T).disabled,"onUpdate:modelValue":l[3]||(l[3]=(e=null)=>c(T).disabled=e)},null,8,["modelValue"])])),_:1}),s(n,{label:"背景颜色"},{default:m((()=>[s(g,{modelValue:c(T).bgColor,"onUpdate:modelValue":l[4]||(l[4]=(e=null)=>c(T).bgColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"圆角大小"},{default:m((()=>[s(g,{modelValue:c(T).borderRadius,"onUpdate:modelValue":l[5]||(l[5]=(e=null)=>c(T).borderRadius=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"外边距"},{default:m((()=>[s(g,{modelValue:c(T).margin,"onUpdate:modelValue":l[6]||(l[6]=(e=null)=>c(T).margin=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"内边距"},{default:m((()=>[s(g,{modelValue:c(T).padding,"onUpdate:modelValue":l[7]||(l[7]=(e=null)=>c(T).padding=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"边框"},{default:m((()=>[s(g,{modelValue:c(T).border,"onUpdate:modelValue":l[8]||(l[8]=(e=null)=>c(T).border=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"子项内边距"},{default:m((()=>[s(g,{modelValue:c(T).itemPadding,"onUpdate:modelValue":l[9]||(l[9]=(e=null)=>c(T).itemPadding=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"子项间距"},{default:m((()=>[s(g,{modelValue:c(T).itemSpacing,"onUpdate:modelValue":l[10]||(l[10]=(e=null)=>c(T).itemSpacing=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"子项背景颜色"},{default:m((()=>[s(g,{modelValue:c(T).itemBgColor,"onUpdate:modelValue":l[11]||(l[11]=(e=null)=>c(T).itemBgColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"子项选中时背景颜色"},{default:m((()=>[s(g,{modelValue:c(T).itemActiveBgColor,"onUpdate:modelValue":l[12]||(l[12]=(e=null)=>c(T).itemActiveBgColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"文本颜色"},{default:m((()=>[s(g,{modelValue:c(T).textColor,"onUpdate:modelValue":l[13]||(l[13]=(e=null)=>c(T).textColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"选中时文本颜色"},{default:m((()=>[s(g,{modelValue:c(T).activeTextColor,"onUpdate:modelValue":l[14]||(l[14]=(e=null)=>c(T).activeTextColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"文本字体大小"},{default:m((()=>[s(g,{modelValue:c(T).textSize,"onUpdate:modelValue":l[15]||(l[15]=(e=null)=>c(T).textSize=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"图标颜色"},{default:m((()=>[s(g,{modelValue:c(T).iconColor,"onUpdate:modelValue":l[16]||(l[16]=(e=null)=>c(T).iconColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"选中时图标颜色"},{default:m((()=>[s(g,{modelValue:c(T).activeIconColor,"onUpdate:modelValue":l[17]||(l[17]=(e=null)=>c(T).activeIconColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"图标大小"},{default:m((()=>[s(g,{modelValue:c(T).iconSize,"onUpdate:modelValue":l[18]||(l[18]=(e=null)=>c(T).iconSize=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),s(n,{label:"图片大小"},{default:m((()=>[s(g,{modelValue:c(T).imageSize,"onUpdate:modelValue":l[19]||(l[19]=(e=null)=>c(T).imageSize=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(J,{height:c(B)},null,8,["height"]),s(N,{height:c(B),"onUpdate:height":l[21]||(l[21]=(e=null)=>p(B)?B.value=e:null),data:c(I),showPages:!1,bgColor:c(T).bgColor,margin:c(T).margin,padding:c(T).padding,border:c(T).border,borderRadius:c(T).borderRadius,itemSpacing:c(T).itemSpacing,itemPadding:c(T).itemPadding,itemBgColor:c(T).itemBgColor,itemActiveBgColor:c(T).itemActiveBgColor,textColor:c(T).textColor,activeTextColor:c(T).activeTextColor,textSize:c(T).textSize,iconColor:c(T).iconColor,activeIconColor:c(T).activeIconColor,iconSize:c(T).iconSize,imageSize:c(T).imageSize,disabled:c(T).disabled},null,8,["height","data","bgColor","margin","padding","border","borderRadius","itemSpacing","itemPadding","itemBgColor","itemActiveBgColor","textColor","activeTextColor","textSize","iconColor","activeIconColor","iconSize","imageSize","disabled"]),s(P,{ref_key:"toastEle",ref:w},null,512)])),_:1})}}});export{w as default};
