import{d as e,r as a,k as t,l,c as n,b as o,e as u,f as s,m as r,v as i,a7 as c,p as f,o as d,I as p,J as v,u as m,g as y}from"./index-D82xabMX.js";import{a as g,c as h}from"./sn-button.CJ0ZsVkl.js";import{$ as S,r as C}from"./uni-app.es.Cv0ss-rw.js";const x=h(e(Object.assign({name:"sn-rate"},{__name:"sn-rate",props:{modelValue:{type:Number,default:0},count:{type:Number,default:5},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},allowHalf:{type:Boolean,default:!1},spacing:{type:String,default:"5px"},inactiveColor:{type:String,default:""},activeColor:{type:String,default:""},icon:{type:String,default:"star-fill"},iconSize:{type:String,default:""},activeIcon:{type:String,default:""},halfIcon:{type:String,default:"star-half-fill"},customStyle:{type:Object,default:{}}},emits:["change","update:modelValue"],setup(e,h){var x=h.emit;const I=S.colors,b=S.utils,z=x,w=e,M=b.randomComId(),_=b.randomComId(),j=a(null),B=a(null);t((()=>{l((()=>{j.value=c(M),B.value=c(_)}))}));const H=n({get:()=>w.modelValue,set:e=>{z("update:modelValue",e)}}),V=n((()=>{let e=w.activeIcon;return b.isEmpty(e)?w.icon:e})),k=n((()=>Math.min(w.count,Math.max(H.value,0)))),N=n((()=>{if(w.allowHalf){let e=Math.trunc(k.value);return(V.value+",").repeat(e)+(k.value-e==.5?w.halfIcon:"")}return(V.value+",").repeat(k.value)})),O=n((()=>Math.max(w.count-k.value,0))),R=n((()=>((w.allowHalf&&"star-fill"==w.icon?"star-line":w.icon)+",").repeat(Math.trunc(O.value)))),T=n((()=>{if(k.value>0&&null!=j.value&&null!=B.value){let e=j.value.getBoundingClientRect();return[e.x,e.y]}if(0==k.value&&null!=B){let e=B.value.getBoundingClientRect();return[e.x,e.y]}return[0,0]})),W=n((()=>null!=j.value&&null!=B.value?j.value.offsetWidth+B.value.offsetWidth:0)),D=n((()=>""==w.inactiveColor?I.value.infoDark:w.inactiveColor)),E=n((()=>""==w.activeColor?I.value.warning:w.activeColor)),J=n((()=>""==w.iconSize?S.configs.font.size(4):w.iconSize)),X=n((()=>{let e=new Map;return e.set("letterSpacing",w.spacing),e}));function $(e){let a=w.count;if(!w.readonly){let t=e.touches[0].clientX-T.value[0],l=W.value/a,n=parseInt((t/l).toString()),o=n+(w.allowHalf?t/l-n>.5?1:.5:1);o>a?o=a:o<0&&(o=0),w.clearable&&o==H.value&&(o=0),H.value=o,z("change",o)}}return(a=null,t=null)=>{const l=C(o("sn-icon"),g),n=f;return e.count>0?(d(),u(n,{key:0,class:"sn-rate",style:r([e.customStyle])},{default:s((()=>[p(y(l,{class:"sn-rate-prefix",id:m(M),name:m(N),color:m(E),size:m(J),onTouchstart:$,style:r(m(X))},null,8,["id","name","color","size","style"]),[[v,m(k)>0]]),p(y(l,{class:"sn-rate-suffix",id:m(_),name:m(R),color:m(D),size:m(J),onTouchstart:$,style:r(m(X))},null,8,["id","name","color","size","style"]),[[v,m(O)>0]])])),_:1},8,["style"])):i("",!0)}}})),[["__scopeId","data-v-8fc5420a"]]);export{x as _};
