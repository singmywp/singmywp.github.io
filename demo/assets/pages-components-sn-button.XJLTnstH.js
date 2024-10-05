import{_ as e,a as t}from"./sn-topbar.DxKzInQK.js";import{d as l,$ as s,r as a,a as n,o,b as r,e as u,f as c,u as d,i,j as p}from"./index-DoInGK9X.js";import{r as b}from"./uni-app.es.K1mZmM8s.js";import{_ as f,a as x,b as m,c as y}from"./sn-button.B1LvAG78.js";import{_ as g}from"./com-card.D8_7_rS9.js";import{_}from"./sn-switch.EAkaUVVB.js";import{_ as v}from"./sn-card.XXADZLUS.js";import{_ as h}from"./sn-line.DzqrU5y1.js";import{_ as w}from"./sn-gap.BM3gA-Sq.js";import{_ as C}from"./sn-page.Nlp4LDKz.js";import"./sn-avatar.NkbIXN8R.js";const j=y(l({__name:"sn-button",setup(l){s.colors;const y=a(!1),j=a(!1),z=a(!1),k=a(!1);function S(){j.value=!0,setTimeout((()=>{j.value=!1}),2e3)}return(l=null,a=null)=>{const I=b(n("sn-topbar"),e),P=b(n("sn-button"),f),E=b(n("sn-row"),t),W=b(n("com-card"),g),B=b(n("sn-icon"),x),V=p,L=b(n("sn-text"),m),R=b(n("sn-switch"),_),T=b(n("sn-card"),v),A=b(n("sn-line"),h),D=b(n("sn-gap"),w),G=b(n("sn-page"),C);return o(),r(G,null,{default:u((()=>[c(I,{title:"Button 按钮"}),c(W,{title:"基础用法",note:"普普通通的按钮，内置了一套样式，自由可调。"},{default:u((()=>[c(E,{wrap:""},{default:u((()=>[c(P,{class:"button",text:"Info"}),c(P,{class:"button",text:"Primary",type:"primary"}),c(P,{class:"button",text:"Warning",type:"warning"}),c(P,{class:"button",text:"Success",type:"success"}),c(P,{class:"button",text:"Error",type:"error"})])),_:1})])),_:1}),c(W,{title:"二级按钮",note:"第二级的按钮，用于次要操作"},{default:u((()=>[c(E,{wrap:""},{default:u((()=>[c(P,{class:"button",level:"second",text:"Info"}),c(P,{class:"button",level:"second",text:"Primary",type:"primary"}),c(P,{class:"button",level:"second",text:"Warning",type:"warning"}),c(P,{class:"button",level:"second",text:"Success",type:"success"}),c(P,{class:"button",level:"second",text:"Error",type:"error"})])),_:1})])),_:1}),c(W,{title:"三级按钮",note:"第三级的按钮，用于不是太重要的操作"},{default:u((()=>[c(E,{wrap:""},{default:u((()=>[c(P,{class:"button",level:"third",text:"Info"}),c(P,{class:"button",level:"third",text:"Primary",type:"primary"}),c(P,{class:"button",level:"third",text:"Warning",type:"warning"}),c(P,{class:"button",level:"third",text:"Success",type:"success"}),c(P,{class:"button",level:"third",text:"Error",type:"error"})])),_:1})])),_:1}),c(W,{title:"最低级按钮",note:"最低级的按钮，或许也能用来美化界面"},{default:u((()=>[c(E,{wrap:""},{default:u((()=>[c(P,{class:"button",level:"least",text:"Info"}),c(P,{class:"button",level:"least",text:"Primary",type:"primary"}),c(P,{class:"button",level:"least",text:"Warning",type:"warning"}),c(P,{class:"button",level:"least",text:"Success",type:"success"}),c(P,{class:"button",level:"least",text:"Error",type:"error"}),c(P,{class:"button",level:"least",round:"",roundSize:"35px"},{default:u((()=>[c(B,{name:"home-5-line"})])),_:1}),c(P,{class:"button",level:"least",round:"",roundSize:"35px"},{default:u((()=>[c(B,{name:"bookmark-2-line"})])),_:1})])),_:1})])),_:1}),c(W,{title:"虚线按钮",note:"看腻了传统的按钮边框？试试虚线边框"},{default:u((()=>[c(E,{wrap:""},{default:u((()=>[c(P,{class:"button",dashed:"",text:"Info"}),c(P,{class:"button",dashed:"",text:"Primary",type:"primary"}),c(P,{class:"button",dashed:"",text:"Warning",type:"warning"}),c(P,{class:"button",dashed:"",text:"Success",type:"success"}),c(P,{class:"button",dashed:"",text:"Error",type:"error"}),c(P,{class:"button",dashed:"",round:"",type:"success"},{default:u((()=>[c(B,{name:"headphone-line",color:"#35b571"})])),_:1})])),_:1})])),_:1}),c(W,{title:"加载动效",note:"加载中的按钮，使用户更有耐心去等待"},{default:u((()=>[c(V,{style:{"align-items":"flex-start"}},{default:u((()=>[c(P,{class:"button",level:"second",text:"Info",loading:d(j),onClick:a[0]||(a[0]=(e=null)=>S())},null,8,["loading"]),c(P,{class:"button",level:"second",text:"Primary",type:"primary",loading:d(j),onClick:a[1]||(a[1]=(e=null)=>S())},null,8,["loading"]),c(P,{class:"button",level:"second",text:"Warning",type:"warning",loading:d(j),onClick:a[2]||(a[2]=(e=null)=>S())},null,8,["loading"]),c(P,{class:"button",level:"second",text:"Success",type:"success",loading:d(j),onClick:a[3]||(a[3]=(e=null)=>S())},null,8,["loading"]),c(P,{class:"button",level:"second",text:"Error",type:"error",loading:d(j),onClick:a[4]||(a[4]=(e=null)=>S())},null,8,["loading"]),c(P,{class:"button","round-size":"45px",round:"",type:"info",loading:d(j),onClick:a[5]||(a[5]=(e=null)=>S())},{default:u((()=>[c(B,{name:"heart-2-fill"})])),_:1},8,["loading"])])),_:1})])),_:1}),c(W,{title:"禁用按钮",note:"无关人员止步，前方机密要地"},{default:u((()=>[c(T,null,{default:u((()=>[c(E,{align:"center",justify:"space-between"},{default:u((()=>[c(L,{text:"是否禁用",size:"".concat(d(s).utils.getPx(d(s).configs.font.size(3))+1,"px")},null,8,["size"]),c(R,{modelValue:d(k),"onUpdate:modelValue":a[6]||(a[6]=(e=null)=>i(k)?k.value=e:null)},null,8,["modelValue"])])),_:1})])),_:1}),c(E,{wrap:""},{default:u((()=>[c(P,{class:"button",level:"second",text:"获取机密数据",loading:d(z),disabled:d(k),onClick:a[7]||(a[7]=(e=null)=>{k.value||(z.value=!0,setTimeout((()=>{z.value=!1}),2e3))})},null,8,["loading","disabled"])])),_:1})])),_:1}),c(W,{title:"自定义样式",note:"多姿多彩，追求独特"},{default:u((()=>[c(A),c(E,null,{default:u((()=>[c(P,{class:"button",round:""},{default:u((()=>[c(B,{name:"headphone-fill",size:"20px"})])),_:1}),c(P,{class:"button",type:"primary",round:""},{default:u((()=>[c(B,{name:"home-smile-fill",color:"#fff",size:"20px"})])),_:1}),c(P,{class:"button",level:"second",type:"error",round:""},{default:u((()=>[c(B,{name:"heart-fill",color:"#fc5454",size:"20px"})])),_:1}),c(P,{class:"button",level:"third",type:"warning",round:""},{default:u((()=>[c(B,{name:"star-fill",color:"#f6b142",size:"20px"})])),_:1})])),_:1}),c(A),c(E,null,{default:u((()=>[c(P,{class:"button","round-size":"50px",round:""},{default:u((()=>[c(B,{name:"skip-left-fill"})])),_:1}),c(P,{class:"button","round-size":"60px",round:"",onClick:a[8]||(a[8]=(e=null)=>y.value=!d(y))},{default:u((()=>[c(B,{name:d(y)?"pause-fill":"play-fill"},null,8,["name"])])),_:1}),c(P,{class:"button","round-size":"50px",round:""},{default:u((()=>[c(B,{name:"skip-right-fill"})])),_:1})])),_:1}),c(A),c(E,{align:"center",merge:""},{default:u((()=>[c(P,{text:"Left","border-radius":"100px 0 0 100px",bounces:!1}),c(P,{text:"Center","border-radius":"0",bounces:!1,style:{"border-left":"1px solid #ededed","border-right":"1px solid #ededed"}}),c(P,{bounces:!1,"border-radius":"0 100px 100px 0",text:"Right"})])),_:1}),c(A),c(E,{justify:"space-around"},{default:u((()=>[c(V,{style:{"align-items":"flex-start"}},{default:u((()=>[c(P,{class:"w-100",type:"primary",level:"second",text:"运动","border-radius":"20px 20px 0 0",bounces:!1}),c(P,{class:"w-100",type:"success",level:"second","border-radius":"0",text:"睡眠",bounces:!1}),c(P,{class:"w-100",type:"warning",level:"second","border-radius":"0",text:"学习",bounces:!1}),c(P,{class:"w-100",type:"error",level:"second","border-radius":"0 0 20px 20px",text:"工作",bounces:!1})])),_:1}),c(V,{style:{"align-items":"flex-start"}},{default:u((()=>[c(P,{bgColor:"#ceddf0",activeBgColor:"#becddd",text:"莫兰迪蓝",textColor:"#2b2b2b"}),c(P,{class:"m-t-5",bgColor:"#bfd2bd",activeBgColor:"#aebfac",text:"莫兰迪绿",textColor:"#2b2b2b"}),c(P,{class:"m-t-5",bgColor:"#e6dec0",activeBgColor:"#c8c1a7",text:"莫兰迪棕",textColor:"#2b2b2b"}),c(P,{class:"m-t-5",bgColor:"#e3e4df",activeBgColor:"#cfd0cc",text:"莫兰迪灰",textColor:"#2b2b2b"})])),_:1})])),_:1})])),_:1}),c(W,{title:"竖向排列&长按钮",note:"像列表一样的长按钮组，你喜欢吗"},{default:u((()=>[c(P,{long:"",text:"Info"}),c(P,{class:"m-t-5",long:"",text:"Primary",type:"primary",level:"second"}),c(P,{class:"m-t-5",long:"",text:"Success",type:"success",level:"second"}),c(P,{class:"m-t-5",long:"",text:"Warning",type:"warning",level:"second"}),c(P,{class:"m-t-5",long:"",text:"Error",type:"error",level:"second"})])),_:1}),c(D)])),_:1})}}}),[["__scopeId","data-v-d40c85b6"]]);export{j as default};
