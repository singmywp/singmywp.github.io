import{d as e,an as a,a as t,b as s,e as o,f as l,g as n,u as r,i as m,h as u,j as p,F as i,ao as d,$ as _}from"./index-DYMgrqHp.js";import{_ as f}from"./sn-topbar.wm0GzhH3.js";import{r as c}from"./uni-app.es.DgDfNdgy.js";import{_ as j,a as T}from"./sn-radio-group.DFHVk0Ey.js";import{_ as b}from"./sn-form-item.H9V81OhK.js";import{_ as x}from"./sn-textarea.Cfr6PvWI.js";import{_ as V,a as A}from"./sn-checkbox-group.CFpGxvyr.js";import{_ as O}from"./sn-form.uvue_vue_type_script_setup_true_lang.i8bEa9At.js";import{_ as g}from"./sn-button.BjZePiC5.js";import{_ as y}from"./com-card.BtLNzB63.js";import{_ as C}from"./sn-page.Cf6LEMVT.js";import"./sn-text.euomPoe8.js";import"./sn-menu-item.DkjoXkWj.js";import"./sn-overlay.CiZFgEyq.js";import"./sn-alert.B2UqFsTR.js";import"./sn-line.BnKikEoE.js";import"./sn-loading.t5otRKvs.js";const U=e({__name:"scankit",setup(e){const U=["CODE_128","CODE_39","CODE_93","CODABAR","EAN_13","EAN_8","ITF_14","UPC_A","UPC_E","QRCODE","PDF_417","AZTEC","DATAMATRIX","MULTI_FUNCTIONAL"],h=a(new UTSJSONObject({scanTypes:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],titleType:0,permTip:"　 本应用正在请求您的相机、相册权限，仅用于条码、二维码识别，且通过系统途径读取数据，不会将任何数据上传至云端。如不提供此权限，则无法正常使用扫码功能。"}));function k(){let e=d();if("app"!=e.uniPlatform||"android"!=e.osName)return _.utils.showSysToast(new UTSJSONObject({title:"扫码组件暂时只支持 Android 平台"})),null}return(e=null,a=null)=>{const d=c(t("sn-topbar"),f),_=c(t("sn-radio"),j),E=c(t("sn-radio-group"),T),D=c(t("sn-form-item"),b),N=c(t("sn-textarea"),x),S=c(t("sn-checkbox"),V),v=c(t("sn-checkbox-group"),A),w=c(t("sn-form"),O),F=c(t("sn-button"),g),I=c(t("com-card"),y),P=c(t("sn-page"),C);return s(),o(P,null,{default:l((()=>[n(d,{title:"Scankit 华为扫码"}),n(I,{title:"配置"},{default:l((()=>[n(w,{modelValue:r(h),"onUpdate:modelValue":a[3]||(a[3]=(e=null)=>m(h)?h.value=e:null),showBorder:!1},{default:l((()=>[n(D,{label:"标题文本"},{default:l((()=>[n(E,{modelValue:r(h).titleType,"onUpdate:modelValue":a[0]||(a[0]=(e=null)=>r(h).titleType=e)},{default:l((()=>[n(_,{text:"扫描二维码/条码"}),n(_,{text:"扫描二维码"})])),_:1},8,["modelValue"])])),_:1}),n(D,{label:"权限请求文本"},{default:l((()=>[n(N,{modelValue:r(h).permTip,"onUpdate:modelValue":a[1]||(a[1]=(e=null)=>r(h).permTip=e),autoHeight:""},null,8,["modelValue"])])),_:1}),n(D,{label:"扫码类型"},{default:l((()=>[n(v,{modelValue:r(h).scanTypes,"onUpdate:modelValue":a[2]||(a[2]=(e=null)=>r(h).scanTypes=e)},{default:l((()=>[(s(),u(i,null,p(U,((e,a)=>n(S,{key:a,text:e},null,8,["text"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),n(F,{text:"扫码",onClick:k})])),_:1})])),_:1})}}});export{U as default};
