import{d as e,af as a,a as t,o as s,b as l,e as o,f as n,u as r,i as u,g as m,h as p,F as i,ag as d,$ as _}from"./index-DoInGK9X.js";import{_ as f}from"./sn-topbar.DxKzInQK.js";import{r as c}from"./uni-app.es.K1mZmM8s.js";import{_ as T,a as j}from"./sn-radio-group.5E8yBbks.js";import{_ as b}from"./sn-form-item.DQivdfXx.js";import{_ as x}from"./sn-textarea.D1YkC7GQ.js";import{_ as A,a as V}from"./sn-checkbox-group.DYBVGsTF.js";import{_ as C}from"./sn-form.uvue_vue_type_script_setup_true_lang.ZcEsNHPg.js";import{_ as g}from"./sn-button.B1LvAG78.js";import{_ as y}from"./com-card.D8_7_rS9.js";import{_ as E}from"./sn-page.Nlp4LDKz.js";import"./sn-alert.CWq7Acu6.js";import"./sn-line.DzqrU5y1.js";const U=e({__name:"scankit",setup(e){const U=["CODE_128","CODE_39","CODE_93","CODABAR","EAN_13","EAN_8","ITF_14","UPC_A","UPC_E","QRCODE","PDF_417","AZTEC","DATAMATRIX","MULTI_FUNCTIONAL"],O=a({scanTypes:[0,1,2,3,4,5,6,7,8,9,10,11,12,13],titleType:0,permTip:"　 本应用正在请求您的相机、相册权限，仅用于条码、二维码识别，且通过系统途径读取数据，不会将任何数据上传至云端。如不提供此权限，则无法正常使用扫码功能。"});function h(){let e=d();if("app"!=e.uniPlatform||"android"!=e.osName)return _.utils.showSysToast(new UTSJSONObject({title:"扫码组件暂时只支持 Android 平台"})),null}return(e=null,a=null)=>{const d=c(t("sn-topbar"),f),_=c(t("sn-radio"),T),k=c(t("sn-radio-group"),j),D=c(t("sn-form-item"),b),N=c(t("sn-textarea"),x),S=c(t("sn-checkbox"),A),F=c(t("sn-checkbox-group"),V),I=c(t("sn-form"),C),P=c(t("sn-button"),g),v=c(t("com-card"),y),w=c(t("sn-page"),E);return s(),l(w,null,{default:o((()=>[n(d,{title:"Scankit 华为扫码"}),n(v,{title:"配置"},{default:o((()=>[n(I,{modelValue:r(O),"onUpdate:modelValue":a[3]||(a[3]=(e=null)=>u(O)?O.value=e:null),showBorder:!1},{default:o((()=>[n(D,{label:"标题文本"},{default:o((()=>[n(k,{modelValue:r(O).titleType,"onUpdate:modelValue":a[0]||(a[0]=(e=null)=>r(O).titleType=e)},{default:o((()=>[n(_,{text:"扫描二维码/条码"}),n(_,{text:"扫描二维码"})])),_:1},8,["modelValue"])])),_:1}),n(D,{label:"权限请求文本"},{default:o((()=>[n(N,{modelValue:r(O).permTip,"onUpdate:modelValue":a[1]||(a[1]=(e=null)=>r(O).permTip=e),autoHeight:""},null,8,["modelValue"])])),_:1}),n(D,{label:"扫码类型"},{default:o((()=>[n(F,{modelValue:r(O).scanTypes,"onUpdate:modelValue":a[2]||(a[2]=(e=null)=>r(O).scanTypes=e)},{default:o((()=>[(s(),m(i,null,p(U,((e,a)=>n(S,{key:a,text:e},null,8,["text"]))),64))])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),n(P,{text:"扫码",onClick:h})])),_:1})])),_:1})}}});export{U as default};
