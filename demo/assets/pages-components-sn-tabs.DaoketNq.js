import{_ as t}from"./sn-topbar.wm0GzhH3.js";import{d as e,$ as a,r as d,aq as l,a as n,b as o,e as s,f as i,g as u,u as b,i as m}from"./index-DYMgrqHp.js";import{r}from"./uni-app.es.DgDfNdgy.js";import{_ as x}from"./sn-tabs.CVj_c_x9.js";import{_ as p}from"./com-card.BtLNzB63.js";import{_ as w}from"./sn-page.Cf6LEMVT.js";import"./sn-text.euomPoe8.js";import"./sn-button.BjZePiC5.js";import"./sn-loading.t5otRKvs.js";import"./sn-menu-item.DkjoXkWj.js";import"./sn-overlay.CiZFgEyq.js";import"./sn-badge.CniK0gFP.js";import"./useResize.Cfi37DcV.js";const f=e({__name:"sn-tabs",setup(e){const f=a.colors,j=d(0),V=d(0),c=d(0),_=d(0),g=d(0),v=[new l({id:"d1tab1",text:"选项1"}),new l({id:"d1tab2",text:"选项2"}),new l({id:"d1tab3",text:"选项3"})],U=[new l({id:"d2tab1",text:"选项1"}),new l({id:"d2tab2",text:"选项2"}),new l({id:"d2tab3",text:"选项3"}),new l({id:"d2tab4",text:"选项4"}),new l({id:"d2tab5",text:"选项5"}),new l({id:"d2tab6",text:"选项6"}),new l({id:"d2tab7",text:"选项7"}),new l({id:"d2tab8",text:"选项8"})],S=[new l({id:"d5tab1",text:"选项1 Alpha"}),new l({id:"d5tab2",text:"选项2 Beta"}),new l({id:"d5tab3",text:"选项3 Gamma"}),new l({id:"d5tab4",text:"选项4 Delta"}),new l({id:"d5tab5",text:"选项5 Epsilon"}),new l({id:"d5tab6",text:"选项6 Zeta"}),new l({id:"d5tab7",text:"选项7 Eta"}),new l({id:"d5tab8",text:"选项8 Theta"})],O=[new l({id:"d3tab1",text:"选项1"}),new l({id:"d3tab2",text:"选项2",disabled:!0}),new l({id:"d3tab3",text:"选项3"}),new l({id:"d3tab4",text:"选项4"})],T=[new l({id:"d4tab1",text:"选项1"}),new l({id:"d4tab2",text:"选项2",badgeConfig:new UTSJSONObject({mode:"text",text:"热"})}),new l({id:"d4tab3",text:"选项3",badgeConfig:new UTSJSONObject({value:66})}),new l({id:"d4tab4",text:"选项4",badgeConfig:new UTSJSONObject({mode:"dot",size:"7px",bgColor:f.value.primary})})];return(e=null,a=null)=>{const d=r(n("sn-topbar"),t),l=r(n("sn-tabs"),x),f=r(n("com-card"),p),C=r(n("sn-page"),w);return o(),s(C,null,{default:i((()=>[u(d,{title:"Tabs 标签页"}),u(f,{title:"基础用法",note:"跟 Tabbar 很像，一般用于顶部的分页导航"},{default:i((()=>[u(l,{modelValue:b(j),"onUpdate:modelValue":a[0]||(a[0]=(t=null)=>m(j)?j.value=t:null),data:v},null,8,["modelValue"])])),_:1}),u(f,{title:"滚动",note:"支持滚动，子项自动计算宽度，且将选中项居中"},{default:i((()=>[u(l,{modelValue:b(V),"onUpdate:modelValue":a[1]||(a[1]=(t=null)=>m(V)?V.value=t:null),scrollable:"",data:U},null,8,["modelValue"])])),_:1}),u(f,{title:"动画",note:"支持滑动和推压两种动画"},{default:i((()=>[u(l,{modelValue:b(g),"onUpdate:modelValue":a[2]||(a[2]=(t=null)=>m(g)?g.value=t:null),scrollable:"",mode:"push",data:S},null,8,["modelValue"])])),_:1}),u(f,{title:"禁用",note:"可为子项单独设置禁用"},{default:i((()=>[u(l,{modelValue:b(c),"onUpdate:modelValue":a[3]||(a[3]=(t=null)=>m(c)?c.value=t:null),data:O},null,8,["modelValue"])])),_:1}),u(f,{title:"徽标",note:"可为子项单独添加徽标，支持自定义徽标属性"},{default:i((()=>[u(l,{modelValue:b(_),"onUpdate:modelValue":a[4]||(a[4]=(t=null)=>m(_)?_.value=t:null),data:T},null,8,["modelValue"])])),_:1})])),_:1})}}});export{f as default};
