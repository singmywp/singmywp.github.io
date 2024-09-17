import{_ as t,a as e}from"./sn-topbar.D5ol6wWa.js";import{d as s,$ as a,r as n,c as i,C as l,l as r,b as o,q as u,u as p,z as d,m,j as h,o as c,a as g,e as f,f as x,g as y,h as _,F as b,i as w}from"./index-BDGnenFq.js";import{b as j,r as k}from"./uni-app.es.BfR9KIrQ.js";import{_ as v}from"./com-card.CltZjJtY.js";import{u as S}from"./useResize.C1IVTLMN.js";import{c as z,b as R}from"./sn-button.DCeBN0oM.js";import{_ as O}from"./sn-col.hd6b_hkF.js";import{_ as T}from"./sn-switch.C9OcCgtN.js";import{_ as V}from"./sn-form-item.5AoZzHl5.js";import{_ as I}from"./sn-avatar.BXOU_hdn.js";import{_ as N}from"./sn-page.BIWIogO0.js";import"./sn-alert.YjlOp3ma.js";import"./sn-line.CxWqAnnd.js";const P=z(s(Object.assign({name:"sn-skeleton"},{__name:"sn-skeleton",props:{width:{type:String,default:""},height:{type:String,default:""},borderRadius:{type:String,default:""},margin:{type:String,default:""},aniTime:{type:Number,default:1e3},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(t){const e=a.utils,s=a.colors,g=t,f=n(null),x=n(e.randomComId()),y=i((()=>d("radius",g.borderRadius,a.configs.radius.xsmall))),_=i((()=>{let t=new Map;return t.set("width",g.width),t.set("height",g.height),t.set("margin",g.margin),t.set("borderRadius",y.value),t.set("background",s.value.infoActive),t.set("transition-duration","".concat(g.aniTime,"ms")),t}));function b(){let t=f.value,e="".concat(t.style.getPropertyValue("opacity")).trim();""==e||"1"==e?t.style.setProperty("opacity","0.2"):t.style.setProperty("opacity","1")}function w(){m((()=>{e.debounce((()=>{b()}),50,x.value)}))}return l((()=>{w()})),j((()=>{w()})),r((()=>{w(),S(f.value,(()=>{w()}))})),(e=null,s=null)=>{const a=h;return c(),o(a,{class:"sn-skeleton",ref_key:"skeletonEle",ref:f,onTransitionend:b,style:u([p(_),t.customStyle])},null,8,["style"])}}})),[["__scopeId","data-v-41c7f88c"]]),U=s({__name:"sn-skeleton",setup(s){const a=n(!1);return(s=null,n=null)=>{const i=k(g("sn-topbar"),t),l=k(g("com-card"),v),r=k(g("sn-skeleton"),P),u=k(g("sn-row"),e),d=k(g("sn-col"),O),m=k(g("sn-switch"),T),j=k(g("sn-form-item"),V),S=k(g("sn-avatar"),I),z=h,U=k(g("sn-text"),R),A=k(g("sn-page"),N);return c(),o(A,null,{default:f((()=>[x(i,{title:"Skeleton 骨架屏"}),x(l,{title:"基础用法",note:"加载较慢时，在页面真实数据加载之前，给用户展示出页面的大致结构。\\n你可以把它当做一个带闪烁动画的 view 来用，本身不带UI，样式完全由你控制。"}),x(l,null,{default:f((()=>[x(r,{height:"20px"})])),_:1}),x(l,{title:"组合示例"}),x(l,null,{default:f((()=>[x(r,{width:"50%",height:"15px"}),x(r,{height:"15px",margin:"10px 0 0 0"}),x(r,{width:"80%",height:"15px",margin:"10px 0 0 0"})])),_:1}),x(l,null,{default:f((()=>[x(u,null,{default:f((()=>[(c(),y(b,null,_([0,1],(t=>x(d,{gutter:"20px",span:6},{default:f((()=>[x(r,{width:"100%",height:"50px"}),x(u,null,{default:f((()=>[x(r,{height:"30px",width:"30px",borderRadius:"10000px",margin:"5px 10px 0 0"}),x(r,{height:"20px",width:"50px",margin:"5px 0 0 0"})])),_:1}),x(r,{width:"80%",height:"10px",margin:"5px 0 0 0"}),x(r,{width:"100%",height:"10px",margin:"5px 0 0 0"})])),_:1}))),64))])),_:1})])),_:1}),x(l,null,{default:f((()=>[x(j,{label:"显示内容"},{default:f((()=>[x(m,{modelValue:p(a),"onUpdate:modelValue":n[0]||(n[0]=(t=null)=>w(a)?a.value=t:null)},null,8,["modelValue"])])),_:1}),x(u,{align:"flex-start"},{default:f((()=>[x(z,{class:"m-r-20"},{default:f((()=>[p(a)?(c(),o(S,{key:1,shape:"circle",size:"45px",src:"https://i03piccdn.sogoucdn.com/70e95b16d3488d9b"})):(c(),o(r,{key:0,height:"45px",width:"45px",borderRadius:"10000px"}))])),_:1}),x(z,{class:"flex-1"},{default:f((()=>[p(a)?(c(),o(U,{key:1,text:"寅晨: 诸神黄昏",size:"20px",font:"alipuhuiheavy"})):(c(),o(r,{key:0,height:"20px",width:"50%"})),p(a)?(c(),o(U,{key:3,class:"m-t-8 h-72",text:"《寅晨: 诸神黄昏》最早由独立开发者开发，是单机游戏市场上为数不多的仍在流行的回合战略游戏。",size:"15px","line-height":"1.5"})):(c(),y(b,{key:2},[x(r,{height:"20px",margin:"8px 0 0 0"}),x(r,{height:"20px",margin:"8px 0 0 0"}),x(r,{height:"20px",width:"80%",margin:"8px 0 0 0"})],64))])),_:1})])),_:1})])),_:1})])),_:1})}}});export{U as default};
