import{d as e,$ as a,r as t,l,m as n,c as o,a as u,b as s,e as r,q as i,v as c,ae as f,z as d,j as p,o as v,T as m,U as y,u as g,f as h}from"./index-BDGnenFq.js";import{a as S,c as b}from"./sn-button.DCeBN0oM.js";import{r as x}from"./uni-app.es.BfR9KIrQ.js";const z=b(e(Object.assign({name:"sn-rate"},{__name:"sn-rate",props:{modelValue:{type:Number,default:0},count:{type:Number,default:5},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},allowHalf:{type:Boolean,default:!1},spacing:{type:String,default:"5px"},inactiveColor:{type:String,default:""},activeColor:{type:String,default:""},icon:{type:String,default:"star-fill"},iconSize:{type:String,default:""},activeIcon:{type:String,default:""},halfIcon:{type:String,default:"star-half-fill"},customStyle:{type:Object,default:new UTSJSONObject({})}},emits:["change","update:modelValue"],setup(e,b){var z=b.emit;const C=a.colors,I=a.utils,j=z,w=e,M=I.randomComId(),_=I.randomComId(),B=t(null),H=t(null);l((()=>{n((()=>{B.value=f(M),H.value=f(_)}))}));const O=o({get:()=>w.modelValue,set:e=>{j("update:modelValue",e)}}),T=o((()=>{let e=w.activeIcon;return I.isEmpty(e)?w.icon:e})),V=o((()=>Math.min(w.count,Math.max(O.value,0)))),N=o((()=>{if(w.allowHalf){let e=Math.trunc(V.value);return(T.value+",").repeat(e)+(V.value-e==.5?w.halfIcon:"")}return(T.value+",").repeat(V.value)})),k=o((()=>Math.max(w.count-V.value,0))),R=o((()=>((w.allowHalf&&"star-fill"==w.icon?"star-line":w.icon)+",").repeat(Math.trunc(k.value)))),U=o((()=>{if(V.value>0&&null!=B.value&&null!=H.value){let e=B.value.getBoundingClientRect();return[e.x,e.y]}if(0==V.value&&null!=H){let e=H.value.getBoundingClientRect();return[e.x,e.y]}return[0,0]})),W=o((()=>null!=B.value&&null!=H.value?B.value.offsetWidth+H.value.offsetWidth:0)),q=o((()=>d("color",w.inactiveColor,C.value.infoDark))),D=o((()=>d("color",w.activeColor,C.value.warning))),E=o((()=>d("font",w.iconSize,a.configs.font.size(4)))),J=o((()=>{let e=new Map;return e.set("letterSpacing",w.spacing),e}));function X(e){let a=w.count;if(!w.readonly){let t=e.touches[0].clientX-U.value[0],l=W.value/a,n=parseInt((t/l).toString()),o=n+(w.allowHalf?t/l-n>.5?1:.5:1);o>a?o=a:o<0&&(o=0),w.clearable&&o==O.value&&(o=0),O.value=o,j("change",o)}}return(a=null,t=null)=>{const l=x(u("sn-icon"),S),n=p;return e.count>0?(v(),s(n,{key:0,class:"sn-rate",style:i([e.customStyle])},{default:r((()=>[m(h(l,{class:"sn-rate-prefix",id:g(M),name:g(N),color:g(D),size:g(E),onTouchstart:X,style:i(g(J))},null,8,["id","name","color","size","style"]),[[y,g(V)>0]]),m(h(l,{class:"sn-rate-suffix",id:g(_),name:g(R),color:g(q),size:g(E),onTouchstart:X,style:i(g(J))},null,8,["id","name","color","size","style"]),[[y,g(k)>0]])])),_:1},8,["style"])):c("",!0)}}})),[["__scopeId","data-v-1feccd71"]]);export{z as _};