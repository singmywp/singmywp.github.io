import{d as l,$ as e,r as a,a as o,o as u,b as n,e as t,f as s,u as d,i as m,s as r}from"./index-BDGnenFq.js";import{_ as c}from"./sn-topbar.D5ol6wWa.js";import{r as p}from"./uni-app.es.BfR9KIrQ.js";import{_ as i}from"./sn-search.OThd9-gv.js";import{_ as V}from"./com-card.CltZjJtY.js";import{_ as f}from"./sn-gap.DaFvbZ58.js";import{_ as h}from"./sn-page.BIWIogO0.js";import"./sn-button.DCeBN0oM.js";import"./sn-input.CQs-BOzL.js";const _=l({__name:"sn-search",setup(l){e.colors;const _=a(""),C=a(""),v=a(""),U=a(""),j=a("此搜索框已被禁用"),b=a("此搜索框只读"),g=a(""),w=a("支持一键清除"),x=a(""),$=a("");function I(){r({title:"提示",content:"点击了拍照按钮",showCancel:!1})}return(l=null,e=null)=>{const a=p(o("sn-topbar"),c),r=p(o("sn-search"),i),S=p(o("com-card"),V),y=p(o("sn-gap"),f),B=p(o("sn-page"),h);return u(),n(B,null,{default:t((()=>[s(a,{title:"Search 搜索框"}),s(S,{title:"基础使用",note:"Search 是基于 Input 的二次封装，比 Input 更为简洁，更方便实现一个搜索框"},{default:t((()=>[s(r,{modelValue:d(_),"onUpdate:modelValue":e[0]||(e[0]=(l=null)=>m(_)?_.value=l:null)},null,8,["modelValue"])])),_:1}),s(S,{title:"不显示取消按钮",note:"如果你不需要右侧的取消按钮，可以关闭"},{default:t((()=>[s(r,{modelValue:d(C),"onUpdate:modelValue":e[1]||(e[1]=(l=null)=>m(C)?C.value=l:null),showCancel:!1},null,8,["modelValue"])])),_:1}),s(S,{title:"固定取消按钮",note:"如果你需要一直显示右侧的取消按钮，可以固定"},{default:t((()=>[s(r,{modelValue:d($),"onUpdate:modelValue":e[2]||(e[2]=(l=null)=>m($)?$.value=l:null),fixCancel:""},null,8,["modelValue"])])),_:1}),s(S,{title:"提示文本",note:"支持自由设置搜索框的提示文本"},{default:t((()=>[s(r,{modelValue:d(v),"onUpdate:modelValue":e[3]||(e[3]=(l=null)=>m(v)?v.value=l:null),placeholder:"歌曲名/歌手/专辑"},null,8,["modelValue"])])),_:1}),s(S,{title:"图标",note:"支持自由修改前置图标，提供支持点击反馈的后置图标"},{default:t((()=>[s(r,{modelValue:d(U),"onUpdate:modelValue":e[4]||(e[4]=(l=null)=>m(U)?U.value=l:null),prefixIcon:"menu-search-line",suffixIcon:"camera-line",placeholder:"搜索你想要的商品",showCancel:!1,onSuffixClick:I},null,8,["modelValue"])])),_:1}),s(S,{title:"禁用/只读/加载/清除"},{default:t((()=>[s(r,{modelValue:d(j),"onUpdate:modelValue":e[5]||(e[5]=(l=null)=>m(j)?j.value=l:null),disabled:"",showCancel:!1},null,8,["modelValue"]),s(r,{class:"m-t-10",modelValue:d(b),"onUpdate:modelValue":e[6]||(e[6]=(l=null)=>m(b)?b.value=l:null),readonly:"",showCancel:!1},null,8,["modelValue"]),s(r,{class:"m-t-10",modelValue:d(g),"onUpdate:modelValue":e[7]||(e[7]=(l=null)=>m(g)?g.value=l:null),loading:"",showCancel:!1},null,8,["modelValue"]),s(r,{class:"m-t-10",modelValue:d(w),"onUpdate:modelValue":e[8]||(e[8]=(l=null)=>m(w)?w.value=l:null),clearable:"",showCancel:!1},null,8,["modelValue"])])),_:1}),s(S,{title:"自定义样式"},{default:t((()=>[s(r,{modelValue:d(x),"onUpdate:modelValue":e[9]||(e[9]=(l=null)=>m(x)?x.value=l:null),padding:"10px 20px",borderRadius:"$circle",bgColor:"$info",activeBgColor:"$front",activeBorderColor:"$primary",placeholder:"请输入搜索内容",showCancel:!1},null,8,["modelValue"])])),_:1}),s(y)])),_:1})}}});export{_ as default};