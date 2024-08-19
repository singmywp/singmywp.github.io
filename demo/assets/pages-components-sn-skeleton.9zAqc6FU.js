import{_ as t}from"./sn-topbar.DGNmRcUY.js";import{d as e,r as s,c as a,A as i,k as n,l,e as r,m as o,u as p,p as u,o as d,b as m,f as h,g as c,h as f,j as g,F as x,i as y}from"./index-D82xabMX.js";import{$ as _,f as b,r as w}from"./uni-app.es.Cv0ss-rw.js";import{_ as j}from"./com-card.2Ru7Wd6o.js";import{u as k}from"./useResize.C5gdmbvL.js";import{c as v,b as R}from"./sn-button.CJ0ZsVkl.js";import{_ as S}from"./sn-row.DBw4p-E_.js";import{_ as z}from"./sn-col.DzpmRKxo.js";import{_ as V}from"./sn-switch.B79Tps6Q.js";import{_ as I}from"./sn-form-item.D3fgF-ip.js";import{_ as P}from"./sn-avatar.BKyOPiHa.js";import{_ as T}from"./sn-page.CIc3m52K.js";import"./sn-alert.IFfoCHl2.js";import"./sn-line.C1IVPNnk.js";const A=v(e(Object.assign({name:"sn-skeleton"},{__name:"sn-skeleton",props:{width:{type:String,default:""},height:{type:String,default:""},borderRadius:{type:String,default:""},margin:{type:String,default:""},aniTime:{type:Number,default:1e3},customStyle:{type:Object,default:{}}},setup(t){const e=_.utils,m=_.colors,h=t,c=s(null),f=s(e.randomComId()),g=a((()=>""==h.borderRadius?_.configs.radius.xsmall:h.borderRadius)),x=a((()=>{let t=new Map;return t.set("width",h.width),t.set("height",h.height),t.set("margin",h.margin),t.set("borderRadius",g.value),t.set("background",m.value.infoActive),t.set("transition-duration","".concat(h.aniTime,"ms")),t}));function y(){let t=c.value,e="".concat(t.style.getPropertyValue("opacity")).trim();""==e||"1"==e?t.style.setProperty("opacity","0.2"):t.style.setProperty("opacity","1")}function w(){l((()=>{e.debounce((()=>{y()}),50,f.value)}))}return i((()=>{w()})),b((()=>{w()})),n((()=>{w(),l((()=>{k(c.value,(()=>{w()}))}))})),(e=null,s=null)=>{const a=u;return d(),r(a,{class:"sn-skeleton",ref_key:"skeletonEle",ref:c,onTransitionend:y,style:o([p(x),t.customStyle])},null,8,["style"])}}})),[["__scopeId","data-v-c1757389"]]),O=e({__name:"sn-skeleton",setup(e){const a=s(!1);return(e=null,s=null)=>{const i=w(m("sn-topbar"),t),n=w(m("com-card"),j),l=w(m("sn-skeleton"),A),o=w(m("sn-row"),S),_=w(m("sn-col"),z),b=w(m("sn-switch"),V),k=w(m("sn-form-item"),I),v=w(m("sn-avatar"),P),O=u,U=w(m("sn-text"),R),C=w(m("sn-page"),T);return d(),r(C,null,{default:h((()=>[c(i,{title:"Skeleton 骨架屏"}),c(n,{title:"基础用法",note:"加载较慢时，在页面真实数据加载之前，给用户展示出页面的大致结构。\\n你可以把它当做一个带闪烁动画的 view 来用，本身不带UI，样式完全由你控制。"}),c(n,null,{default:h((()=>[c(l,{height:"20px"})])),_:1}),c(n,{title:"组合示例"}),c(n,null,{default:h((()=>[c(l,{width:"50%",height:"15px"}),c(l,{height:"15px",margin:"10px 0 0 0"}),c(l,{width:"80%",height:"15px",margin:"10px 0 0 0"})])),_:1}),c(n,null,{default:h((()=>[c(o,null,{default:h((()=>[(d(),f(x,null,g([0,1],(t=>c(_,{gutter:"20px",span:6},{default:h((()=>[c(l,{width:"100%",height:"50px"}),c(o,null,{default:h((()=>[c(l,{height:"30px",width:"30px",borderRadius:"10000px",margin:"5px 10px 0 0"}),c(l,{height:"20px",width:"50px",margin:"5px 0 0 0"})])),_:1}),c(l,{width:"80%",height:"10px",margin:"5px 0 0 0"}),c(l,{width:"100%",height:"10px",margin:"5px 0 0 0"})])),_:1}))),64))])),_:1})])),_:1}),c(n,null,{default:h((()=>[c(k,{label:"显示内容"},{default:h((()=>[c(b,{modelValue:p(a),"onUpdate:modelValue":s[0]||(s[0]=(t=null)=>y(a)?a.value=t:null)},null,8,["modelValue"])])),_:1}),c(o,{align:"flex-start"},{default:h((()=>[c(O,{class:"m-r-20"},{default:h((()=>[p(a)?(d(),r(v,{key:1,shape:"circle",size:"45px",src:"https://i03piccdn.sogoucdn.com/70e95b16d3488d9b"})):(d(),r(l,{key:0,height:"45px",width:"45px",borderRadius:"10000px"}))])),_:1}),c(O,{class:"flex-1"},{default:h((()=>[p(a)?(d(),r(U,{key:1,text:"寅晨: 诸神黄昏",size:"20px",font:"alipuhuiheavy"})):(d(),r(l,{key:0,height:"20px",width:"50%"})),p(a)?(d(),r(U,{key:3,class:"m-t-8 h-72",text:"《寅晨: 诸神黄昏》最早由独立开发者开发，是单机游戏市场上为数不多的仍在流行的回合战略游戏。",size:"15px","line-height":"1.5"})):(d(),f(x,{key:2},[c(l,{height:"20px",margin:"8px 0 0 0"}),c(l,{height:"20px",margin:"8px 0 0 0"}),c(l,{height:"20px",width:"80%",margin:"8px 0 0 0"})],64))])),_:1})])),_:1})])),_:1})])),_:1})}}});export{O as default};
