import{_ as t}from"./sn-topbar.DGNmRcUY.js";import{d as e,r as a,b as l,o as n,e as d,f as o,g as s,u,i}from"./index-D82xabMX.js";import{$ as b,q as m,r}from"./uni-app.es.Cv0ss-rw.js";import{_ as x}from"./sn-tabs.BhyHjBw8.js";import{_ as p}from"./com-card.2Ru7Wd6o.js";import{_ as w}from"./sn-page.CIc3m52K.js";import"./sn-button.CJ0ZsVkl.js";import"./sn-badge.DHHFmXVC.js";import"./useResize.C5gdmbvL.js";const f=e({__name:"sn-tabs",setup(e){const f=b.colors,V=a(0),g=a(0),_=a(0),j=a(0),c=[new m({id:"tab1",text:"选项1"}),new m({id:"tab2",text:"选项2"}),new m({id:"tab3",text:"选项3"})],v=[new m({id:"tab1",text:"选项1"}),new m({id:"tab2",text:"选项2"}),new m({id:"tab3",text:"选项3"}),new m({id:"tab4",text:"选项4"}),new m({id:"tab5",text:"选项5"}),new m({id:"tab6",text:"选项6"}),new m({id:"tab7",text:"选项7"}),new m({id:"tab8",text:"选项8"})],C=[new m({id:"tab1",text:"选项1"}),new m({id:"tab2",text:"选项2",disabled:!0}),new m({id:"tab3",text:"选项3"}),new m({id:"tab4",text:"选项4"})],U=[new m({id:"tab1",text:"选项1"}),new m({id:"tab2",text:"选项2",badgeConfig:{mode:"text",text:"热"}}),new m({id:"tab3",text:"选项3",badgeConfig:{value:66}}),new m({id:"tab4",text:"选项4",badgeConfig:{mode:"dot",size:"7px",bgColor:f.value.primary}})];return(e=null,a=null)=>{const b=r(l("sn-topbar"),t),m=r(l("sn-tabs"),x),f=r(l("com-card"),p),z=r(l("sn-page"),w);return n(),d(z,null,{default:o((()=>[s(b,{title:"Tabs 标签页"}),s(f,{title:"基础用法",note:"跟 Tabbar 很像，一般用于顶部的分页导航"},{default:o((()=>[s(m,{modelValue:u(V),"onUpdate:modelValue":a[0]||(a[0]=(t=null)=>i(V)?V.value=t:null),data:c},null,8,["modelValue"])])),_:1}),s(f,{title:"滚动",note:"支持滚动，子项自动计算宽度，且将选中项居中"},{default:o((()=>[s(m,{modelValue:u(g),"onUpdate:modelValue":a[1]||(a[1]=(t=null)=>i(g)?g.value=t:null),scrollable:"",data:v},null,8,["modelValue"])])),_:1}),s(f,{title:"禁用",note:"可为子项单独设置禁用"},{default:o((()=>[s(m,{modelValue:u(_),"onUpdate:modelValue":a[2]||(a[2]=(t=null)=>i(_)?_.value=t:null),data:C},null,8,["modelValue"])])),_:1}),s(f,{title:"徽标",note:"可为子项单独添加徽标，支持自定义徽标属性"},{default:o((()=>[s(m,{modelValue:u(j),"onUpdate:modelValue":a[3]||(a[3]=(t=null)=>i(j)?j.value=t:null),data:U},null,8,["modelValue"])])),_:1})])),_:1})}}});export{f as default};