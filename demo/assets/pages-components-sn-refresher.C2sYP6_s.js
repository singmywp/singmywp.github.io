import{_ as e}from"./sn-topbar.CX0rMkKy.js";import{d as s,c as t,b as r,e as n,f as o,k as a,o as i,N as l,O as c,u as f,g as u}from"./index-DNTc1GxZ.js";import{$ as p,r as h}from"./uni-app.es.D9ZkitmT.js";import{d as g,a as d,b as x,c as m}from"./sn-button.BaZjRh9m.js";import{_ as S}from"./com-card.22LSjaaf.js";import{_}from"./sn-page.CEVOSUw5.js";const z=m(s(Object.assign({name:"sn-refresher"},{__name:"sn-refresher",props:{status:{type:String,default:"refresh"},icon:{type:String,default:"refresh-line"},refreshText:{type:String,default:""},refreshingText:{type:String,default:""},textSize:{type:String,default:""},iconSize:{type:String,default:""},iconColor:{type:String,default:""},textColor:{type:String,default:""},customStyle:{type:Object,default:{}}},emits:["refresh"],setup(e,s){var m=s.emit;const S=p.colors,_=m,z=e,C=t((()=>""==z.textSize?"".concat(p.utils.getPx(p.configs.font.size(2))+1):z.textSize)),y=t((()=>""==z.iconSize?C.value:z.iconSize)),T=t((()=>""==z.iconColor?S.value.lineText:z.iconColor)),b=t((()=>""==z.textColor?S.value.lineText:z.textColor)),j=t((()=>["refresh","refreshing"].includes(z.status)?z.status:"refresh")),v=t((()=>""==z.refreshText?"松开刷新":z.refreshText)),w=t((()=>""==z.refreshingText?"刷新中":z.refreshingText));function O(){"refresh"==z.status&&_("refresh")}return(s=null,t=null)=>{const p=h(r("sn-loading"),g),m=h(r("sn-icon"),d),S=h(r("sn-text"),x),_=a;return i(),n(_,{class:"sn-refresher",onClick:O},{default:o((()=>[l(u(p,{iconColor:f(T),iconSize:f(y)},null,8,["iconColor","iconSize"]),[[c,"refreshing"==f(j)]]),l(u(m,{name:e.icon,color:f(T),size:f(y)},null,8,["name","color","size"]),[[c,"refresh"==f(j)]]),u(S,{text:"refresh"==f(j)?f(v):f(w),size:f(C),color:f(b),style:{"margin-left":"5px"}},null,8,["text","size","color"])])),_:1})}}})),[["__scopeId","data-v-2463d86e"]]),C=m(s({__name:"sn-refresher",setup(s){const t=p.colors;return(s=null,a=null)=>{const l=h(r("sn-topbar"),e),c=h(r("sn-refresher"),z),p=h(r("com-card"),S),g=h(r("sn-page"),_);return i(),n(g,null,{default:o((()=>[u(l,{title:"Refresher 下拉刷新"}),u(p,{title:"基础用法",note:"自定义 scroll-view 和 list-view 下拉刷新样式"},{default:o((()=>[u(c,{class:"spacing",status:"refresh"}),u(c,{class:"spacing",status:"refreshing"})])),_:1}),u(p,{title:"自定义提示语"},{default:o((()=>[u(c,{class:"spacing",status:"refresh",refreshText:"下滑重开 :D"}),u(c,{class:"spacing",status:"refreshing",refreshingText:"努力刷新吖..."})])),_:1}),u(p,{title:"自定义样式"},{default:o((()=>[u(c,{status:"refresh",icon:"arrow-down-circle-line",refreshText:"我就是我，不一样的烟火~",textColor:f(t).success,iconColor:f(t).success},null,8,["textColor","iconColor"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-cbbe5746"]]);export{C as default};