import{_ as t}from"./sn-topbar.DxKzInQK.js";import{d as e,$ as a,r as l,aj as n,a as d,o,b as s,e as u,f as i,u as b,i as m}from"./index-DoInGK9X.js";import{r}from"./uni-app.es.K1mZmM8s.js";import{_ as x}from"./sn-tabs.CUyj_3m-.js";import{_ as p}from"./com-card.D8_7_rS9.js";import{_ as w}from"./sn-page.Nlp4LDKz.js";import"./sn-button.B1LvAG78.js";import"./sn-badge.DtCZwnqZ.js";import"./useResize.Dia-r-oM.js";const f=e({__name:"sn-tabs",setup(e){const f=a.colors,V=l(0),_=l(0),g=l(0),j=l(0),c=[new n({id:"tab1",text:"选项1"}),new n({id:"tab2",text:"选项2"}),new n({id:"tab3",text:"选项3"})],v=[new n({id:"tab1",text:"选项1"}),new n({id:"tab2",text:"选项2"}),new n({id:"tab3",text:"选项3"}),new n({id:"tab4",text:"选项4"}),new n({id:"tab5",text:"选项5"}),new n({id:"tab6",text:"选项6"}),new n({id:"tab7",text:"选项7"}),new n({id:"tab8",text:"选项8"})],C=[new n({id:"tab1",text:"选项1"}),new n({id:"tab2",text:"选项2",disabled:!0}),new n({id:"tab3",text:"选项3"}),new n({id:"tab4",text:"选项4"})],U=[new n({id:"tab1",text:"选项1"}),new n({id:"tab2",text:"选项2",badgeConfig:{mode:"text",text:"热"}}),new n({id:"tab3",text:"选项3",badgeConfig:{value:66}}),new n({id:"tab4",text:"选项4",badgeConfig:{mode:"dot",size:"7px",bgColor:f.value.primary}})];return(e=null,a=null)=>{const l=r(d("sn-topbar"),t),n=r(d("sn-tabs"),x),f=r(d("com-card"),p),z=r(d("sn-page"),w);return o(),s(z,null,{default:u((()=>[i(l,{title:"Tabs 标签页"}),i(f,{title:"基础用法",note:"跟 Tabbar 很像，一般用于顶部的分页导航"},{default:u((()=>[i(n,{modelValue:b(V),"onUpdate:modelValue":a[0]||(a[0]=(t=null)=>m(V)?V.value=t:null),data:c},null,8,["modelValue"])])),_:1}),i(f,{title:"滚动",note:"支持滚动，子项自动计算宽度，且将选中项居中"},{default:u((()=>[i(n,{modelValue:b(_),"onUpdate:modelValue":a[1]||(a[1]=(t=null)=>m(_)?_.value=t:null),scrollable:"",data:v},null,8,["modelValue"])])),_:1}),i(f,{title:"禁用",note:"可为子项单独设置禁用"},{default:u((()=>[i(n,{modelValue:b(g),"onUpdate:modelValue":a[2]||(a[2]=(t=null)=>m(g)?g.value=t:null),data:C},null,8,["modelValue"])])),_:1}),i(f,{title:"徽标",note:"可为子项单独添加徽标，支持自定义徽标属性"},{default:u((()=>[i(n,{modelValue:b(j),"onUpdate:modelValue":a[3]||(a[3]=(t=null)=>m(j)?j.value=t:null),data:U},null,8,["modelValue"])])),_:1})])),_:1})}}});export{f as default};