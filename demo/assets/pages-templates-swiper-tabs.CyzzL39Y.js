import{_ as t}from"./sn-topbar.wm0GzhH3.js";import{a as e,b as a,e as n,f as s,g as l,d as o,r as i,aq as u,u as r,i as d,$ as c,B as p,G as m,H as f}from"./index-DYMgrqHp.js";import{r as x,d as b}from"./uni-app.es.DgDfNdgy.js";import{_ as g}from"./sn-tabs.CVj_c_x9.js";import{_}from"./sn-gap.2Twkbobz.js";import{_ as h}from"./sn-page.Cf6LEMVT.js";import{b as y,a as v}from"./sn-text.euomPoe8.js";import{_ as j}from"./com-card.BtLNzB63.js";import"./sn-button.BjZePiC5.js";import"./sn-loading.t5otRKvs.js";import"./sn-menu-item.DkjoXkWj.js";import"./sn-overlay.CiZFgEyq.js";import"./sn-badge.CniK0gFP.js";import"./useResize.Cfi37DcV.js";const w=y({},[["render",function(t,o){const i=x(e("sn-text"),v),u=x(e("com-card"),j);return a(),n(u,{padding:"20px",style:{margin:"100px auto",width:"auto"}},{default:s((()=>[l(i,{text:"Tab1",size:"$5",align:"center",bold:""})])),_:1})}]]);const T=y({},[["render",function(t,o){const i=x(e("sn-text"),v),u=x(e("com-card"),j);return a(),n(u,{padding:"20px",style:{margin:"100px auto",width:"auto"}},{default:s((()=>[l(i,{text:"Tab2",size:"$5",align:"center",bold:""})])),_:1})}]]);const $=y({},[["render",function(t,o){const i=x(e("sn-text"),v),u=x(e("com-card"),j);return a(),n(u,{padding:"20px",style:{margin:"100px auto",width:"auto"}},{default:s((()=>[l(i,{text:"Tab3",size:"$5",align:"center",bold:""})])),_:1})}]]);const z=y({},[["render",function(t,o){const i=x(e("sn-text"),v),u=x(e("com-card"),j);return a(),n(u,{padding:"20px",style:{margin:"100px auto",width:"auto"}},{default:s((()=>[l(i,{text:"Tab4",size:"$5",align:"center",bold:""})])),_:1})}]]);const k=y({},[["render",function(t,o){const i=x(e("sn-text"),v),u=x(e("com-card"),j);return a(),n(u,{padding:"20px",style:{margin:"100px auto",width:"auto"}},{default:s((()=>[l(i,{text:"Tab5",size:"$5",align:"center",bold:""})])),_:1})}]]),S=y(o({__name:"swiper-tabs",setup(o){const y=i(0),v=i([0]),j=i(!1);function S(t){y.value=t.detail.current}const V=[new u({id:"tab1",text:"Tab1 Alpha"}),new u({id:"tab2",text:"Tab2 Beta"}),new u({id:"tab3",text:"Tab3 Gamma"}),new u({id:"tab4",text:"Tab4 Delta"}),new u({id:"tab5",text:"Tab5 Epsilon"})];function C(t){if(v.value.length!=V.length){const e=Math.max(0,t-1),a=Math.min(V.length-1,t+1);v.value.includes(t)?(j.value=!0,setTimeout((()=>{v.value.includes(e)||v.value.push(e),v.value.includes(a)||v.value.push(a),j.value=!1}),400)):v.value.push(t)}}return b((()=>{C(y.value)})),(o=null,i=null)=>{const u=x(e("sn-topbar"),t),b=x(e("sn-tabs"),g),B=x(e("sn-gap"),_),G=m,H=f,I=x(e("sn-page"),h);return a(),n(I,{padding:"0"},{default:s((()=>[l(u,{title:"Swiper Tabs"}),l(b,{modelValue:r(y),"onUpdate:modelValue":i[0]||(i[0]=(t=null)=>d(y)?y.value=t:null),scrollable:"",bgColor:"$page",aniTime:"200ms",data:V,onChange:C,customStyle:{position:"fixed",zIndex:1,top:r(c).configs.page.topbarHeight}},null,8,["modelValue","customStyle"]),l(B,{height:"40px"}),l(H,{current:r(y),"disable-touch":r(j),onChange:S,style:{flex:"1"}},{default:s((()=>[l(G,{style:{flex:"1",overflow:"visible"}},{default:s((()=>[r(v).includes(0)?(a(),n(r(w),{key:0})):p("",!0)])),_:1}),l(G,{style:{flex:"1"}},{default:s((()=>[r(v).includes(1)?(a(),n(r(T),{key:0})):p("",!0)])),_:1}),l(G,{style:{flex:"1"}},{default:s((()=>[r(v).includes(2)?(a(),n(r($),{key:0})):p("",!0)])),_:1}),l(G,{style:{flex:"1"}},{default:s((()=>[r(v).includes(3)?(a(),n(r(z),{key:0})):p("",!0)])),_:1}),l(G,{style:{flex:"1"}},{default:s((()=>[r(v).includes(4)?(a(),n(r(k),{key:0})):p("",!0)])),_:1})])),_:1},8,["current","disable-touch"])])),_:1})}}}),[["__scopeId","data-v-796c48db"]]);export{S as default};
