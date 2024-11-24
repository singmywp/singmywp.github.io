import{_ as t,a as e}from"./sn-topbar.wm0GzhH3.js";import{d as a,$ as n,r as l,D as o,c as s,w as u,o as c,v as i,a as r,z as m,x as f,g as p,u as d,b as v,e as x,f as y,_ as S}from"./index-DYMgrqHp.js";import{r as h}from"./uni-app.es.DgDfNdgy.js";import{a as _,_ as g,b as j}from"./sn-text.euomPoe8.js";import{_ as w}from"./com-card.BtLNzB63.js";import{_ as b}from"./sn-tag.Bvg8GfrB.js";import{_ as D}from"./sn-button.BjZePiC5.js";import{_ as z}from"./sn-page.Cf6LEMVT.js";import"./sn-menu-item.DkjoXkWj.js";import"./sn-overlay.CiZFgEyq.js";import"./sn-loading.t5otRKvs.js";const M=a(Object.assign({name:"sn-countdown"},{__name:"sn-countdown",props:{format:{type:String,default:"HH:mm:ss"},time:{type:Number,default:0},autoplay:{type:Boolean,default:!0},millisecond:{type:Boolean,default:!1},textSize:{type:String,default:""},textColor:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})}},emits:["change","finish"],setup(t,e){var a=e.expose,v=e.emit;const x=n.colors,y=v,S=t,g=l(""),j=l(0),w=l(0),b=l(0),D=l(!1),z=l(new o({d:0,h:0,m:0,s:0,ms:0})),M=s((()=>f("font",S.textSize,n.configs.font.baseSize))),C=s((()=>f("color",S.textColor,x.value.text)));function H(){clearTimeout(j.value),j.value=0}function O(t){const e=1e3,a=60*e,n=60*a,l=24*n,s=Math.floor(t/l),u=Math.floor(t%l/n),c=Math.floor(t%n/a),i=Math.floor(t%a/e),r=Math.floor(t%e);return new o({d:s,h:u,m:c,s:i,ms:r})}function k(t,e){let a=e.d,n=e.h,l=e.m,o=e.s,s=e.ms;return-1==t.indexOf("DD")?n+=24*a:t=t.replace("DD","".concat(a).padStart(2,"0")),-1==t.indexOf("HH")?l+=60*n:t=t.replace("HH","".concat(n).padStart(2,"0")),-1==t.indexOf("mm")?o+=60*l:t=t.replace("mm","".concat(l).padStart(2,"0")),-1==t.indexOf("ss")?s+=1e3*o:t=t.replace("ss","".concat(o).padStart(2,"0")),t.replace("SSS","".concat(s).padStart(3,"0")).replace("SS","".concat(Math.trunc(s/10)).padStart(2,"0")).replace("S","".concat(Math.trunc(s/100)))}function $(){D.value=!1,H()}function T(){return Math.max(w.value-Date.now(),0)}function B(){$(),b.value=0,z.value=O(0),y("change",z.value),g.value=k(S.format,z.value),y("finish")}function I(t){b.value=t,z.value=O(t),y("change",z.value),g.value=k(S.format,z.value),t<=0&&B()}function J(){H(),j.value=setTimeout((()=>{let t=T();var e,a;e=t,a=b.value,(Math.floor(e/1e3)!=Math.floor(a/1e3)||0==t)&&I(t),0!=b.value&&J()}),30)}function N(){H(),j.value=setTimeout((()=>{I(T()),0!=b.value&&N()}),10)}function A(){S.millisecond?N():J()}function E(){if(D.value)return null;D.value=!0,w.value=Date.now()+b.value,A()}function F(){$(),b.value=S.time,I(b.value),S.autoplay&&E()}function K(){F()}a({start:E,pause:$,reset:F,stop:B});const L=s((()=>S.time));return u(L,(()=>{K()})),c((()=>{K()})),i((()=>{H()})),(e=null,a=null)=>{const n=h(r("sn-text"),_);return m(e.$slots,"default",{},(()=>[p(n,{text:d(g),color:d(C),size:d(M),customStyle:t.customStyle},null,8,["text","color","size","customStyle"])]))}}})),C=j(a({__name:"sn-countdown",setup(a){n.colors;const s=l(!0),u=l(new o({d:0,h:0,m:0,s:0,ms:0})),c=l(null);function i(t){u.value=t}function m(){s.value=!s.value,s.value?c.value.start():c.value.pause()}function f(){s.value=!1,c.value.stop()}function j(){s.value=!0,c.value.reset()}return(a=null,n=null)=>{const l=h(r("sn-topbar"),t),o=h(r("sn-countdown"),M),C=h(r("com-card"),w),H=h(r("sn-tag"),b),O=h(r("sn-text"),_),k=h(r("sn-row"),e),$=h(r("sn-icon"),g),T=h(r("sn-button"),D),B=S,I=h(r("sn-page"),z);return v(),x(I,null,{default:y((()=>[p(l,{title:"Countdown 倒计时"}),p(C,{title:"基础用法",note:"顾名思义，就是一个倒计时。\\n推荐使用插槽布局为主，样式更好调。"},{default:y((()=>[p(o,{time:3e5})])),_:1}),p(C,{title:"自定义样式",note:"可以自由设置文本的颜色和大小等样式"},{default:y((()=>[p(o,{textSize:"$3",textColor:"$successDark",time:3e5,customStyle:{fontFamily:"alipuhuiheavy"}})])),_:1}),p(C,{title:"格式化",note:"倒计时内置文字支持时间格式化（参照Day.js）。"},{default:y((()=>[p(o,{format:"DD 天 HH 小时 mm 分钟 ss 秒",time:3e5})])),_:1}),p(C,{title:"毫秒精度",note:"虽然使用一般模式也支持获取毫秒，但误差极大，不如此模式精确。"},{default:y((()=>[p(o,{format:"mm:ss.SSS",millisecond:"",time:3e5})])),_:1}),p(C,{title:"插槽",note:"推荐使用插槽模式，自由度更高。"},{default:y((()=>[p(o,{millisecond:"",time:3e5,onChange:i},{default:y((()=>[p(k,null,{default:y((()=>[p(H,{class:"spacing",type:"primary",text:"".concat(d(u).h)},null,8,["text"]),p(O,{class:"spacing",text:"时",font:"alipuhuiheavy"}),p(H,{class:"spacing",type:"primary",text:"".concat(d(u).m)},null,8,["text"]),p(O,{class:"spacing",text:"分",font:"alipuhuiheavy"}),p(H,{class:"spacing",type:"primary",text:"".concat(d(u).s)},null,8,["text"]),p(O,{class:"spacing",text:"秒",font:"alipuhuiheavy"})])),_:1})])),_:1})])),_:1}),p(C,{title:"自由控制",note:"提供 API 以自由控制倒计时的状态。"},{default:y((()=>[p(B,{class:"align-items-center"},{default:y((()=>[p(o,{ref_key:"countdownEle",ref:c,format:"mm:ss.SS",millisecond:"",time:3e5},null,512),p(k,{align:"center"},{default:y((()=>[p(T,{"round-size":"50px",round:"",onClick:j},{default:y((()=>[p($,{name:"refresh-line"})])),_:1}),p(T,{class:"m-l-10",type:"primary",level:"second","round-size":"60px",round:"",onClick:m},{default:y((()=>[p($,{color:"$primary",name:"".concat(d(s)?"pause":"play","-fill")},null,8,["name"])])),_:1}),p(T,{class:"m-l-10","round-size":"50px",round:"",onClick:f},{default:y((()=>[p($,{name:"stop-circle-fill"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-6c46fded"]]);export{C as default};
