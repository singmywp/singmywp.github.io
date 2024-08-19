import{_ as t,a as e}from"./sn-topbar.DGNmRcUY.js";import{d as a,r as n,c as l,w as o,k as s,y as u,b as c,t as r,g as i,u as m,o as f,e as p,f as d,p as v}from"./index-D82xabMX.js";import{$ as x,b as y,r as h}from"./uni-app.es.Cv0ss-rw.js";import{b as S,a as _,_ as g,c as w}from"./sn-button.CJ0ZsVkl.js";import{_ as b}from"./com-card.2Ru7Wd6o.js";import{_ as z}from"./sn-tag.zoD9q8fg.js";import{_ as j}from"./sn-row.DBw4p-E_.js";import{_ as C}from"./sn-page.CIc3m52K.js";const D=a(Object.assign({name:"sn-countdown"},{__name:"sn-countdown",props:{format:{type:String,default:"HH:mm:ss"},time:{type:Number,default:0},autoplay:{type:Boolean,default:!0},millisecond:{type:Boolean,default:!1},textSize:{type:String,default:""},textColor:{type:String,default:""},customStyle:{type:Object,default:{}}},emits:["change","finish"],setup(t,e){var a=e.expose,f=e.emit;const p=x.colors,d=f,v=t,_=n(""),g=n(0),w=n(0),b=n(0),z=n(!1),j=n(new y({d:0,h:0,m:0,s:0,ms:0})),C=l((()=>""==v.textSize?x.configs.font.baseSize:v.textSize)),D=l((()=>""==v.textColor?p.value.text:v.textColor));function M(){clearTimeout(g.value),g.value=0}function H(t){const e=1e3,a=60*e,n=60*a,l=24*n,o=Math.floor(t/l),s=Math.floor(t%l/n),u=Math.floor(t%n/a),c=Math.floor(t%a/e),r=Math.floor(t%e);return new y({d:o,h:s,m:u,s:c,ms:r})}function k(t,e){let a=e.d,n=e.h,l=e.m,o=e.s,s=e.ms;return-1==t.indexOf("DD")?n+=24*a:t=t.replace("DD","".concat(a).padStart(2,"0")),-1==t.indexOf("HH")?l+=60*n:t=t.replace("HH","".concat(n).padStart(2,"0")),-1==t.indexOf("mm")?o+=60*l:t=t.replace("mm","".concat(l).padStart(2,"0")),-1==t.indexOf("ss")?s+=1e3*o:t=t.replace("ss","".concat(o).padStart(2,"0")),t.replace("SSS","".concat(s).padStart(3,"0")).replace("SS","".concat(Math.trunc(s/10)).padStart(2,"0")).replace("S","".concat(Math.trunc(s/100)))}function O(){z.value=!1,M()}function T(){return Math.max(w.value-Date.now(),0)}function B(){O(),b.value=0,j.value=H(0),d("change",j.value),_.value=k(v.format,j.value),d("finish")}function I(t){b.value=t,j.value=H(t),d("change",j.value),_.value=k(v.format,j.value),t<=0&&B()}function $(){M(),g.value=setTimeout((()=>{let t=T();var e,a;e=t,a=b.value,(Math.floor(e/1e3)!=Math.floor(a/1e3)||0==t)&&I(t),0!=b.value&&$()}),30)}function q(){M(),g.value=setTimeout((()=>{I(T()),0!=b.value&&q()}),10)}function A(){v.millisecond?q():$()}function E(){if(z.value)return null;z.value=!0,w.value=Date.now()+b.value,A()}function F(){O(),b.value=v.time,I(b.value),v.autoplay&&E()}function N(){F()}a({start:E,pause:O,reset:F,stop:B});const P=l((()=>v.time));return o(P,(()=>{N()})),s((()=>{N()})),u((()=>{M()})),(e=null,a=null)=>{const n=h(c("sn-text"),S);return r(e.$slots,"default",{},(()=>[i(n,{text:m(_),color:m(D),size:m(C),customStyle:t.customStyle},null,8,["text","color","size","customStyle"])]))}}})),M=w(a({__name:"sn-countdown",setup(a){const l=x.colors,o=n(!0),s=n(new y({d:0,h:0,m:0,s:0,ms:0})),u=n(null);function r(t){s.value=t}function w(){o.value=!o.value,o.value?u.value.start():u.value.pause()}function M(){o.value=!1,u.value.stop()}function H(){o.value=!0,u.value.reset()}return(a=null,n=null)=>{const y=h(c("sn-topbar"),t),k=h(c("sn-countdown"),D),O=h(c("com-card"),b),T=h(c("sn-tag"),z),B=h(c("sn-text"),S),I=h(c("sn-row"),j),$=h(c("sn-icon"),_),q=h(c("sn-button"),g),A=h(c("sn-button-group"),e),E=v,F=h(c("sn-page"),C);return f(),p(F,null,{default:d((()=>[i(y,{title:"Countdown 倒计时"}),i(O,{title:"基础用法",note:"顾名思义，就是一个倒计时。\\n推荐使用插槽布局为主，样式更好调。"},{default:d((()=>[i(k,{time:3e5})])),_:1}),i(O,{title:"自定义样式",note:"可以自由设置文本的颜色和大小等样式"},{default:d((()=>[i(k,{time:3e5,textColor:m(l).successDark,textSize:m(x).configs.font.size(3),customStyle:{fontFamily:"alipuhuiheavy"}},null,8,["textColor","textSize"])])),_:1}),i(O,{title:"格式化",note:"倒计时内置文字支持时间格式化（参照Day.js）。"},{default:d((()=>[i(k,{format:"DD 天 HH 小时 mm 分钟 ss 秒",time:3e5})])),_:1}),i(O,{title:"毫秒精度",note:"虽然使用一般模式也支持获取毫秒，但误差极大，不如此模式精确。"},{default:d((()=>[i(k,{format:"mm:ss.SSS",millisecond:"",time:3e5})])),_:1}),i(O,{title:"插槽",note:"推荐使用插槽模式，自由度更高。"},{default:d((()=>[i(k,{millisecond:"",time:3e5,onChange:r},{default:d((()=>[i(I,null,{default:d((()=>[i(T,{class:"spacing",type:"primary",text:"".concat(m(s).h)},null,8,["text"]),i(B,{class:"spacing",text:"时",font:"alipuhuiheavy"}),i(T,{class:"spacing",type:"primary",text:"".concat(m(s).m)},null,8,["text"]),i(B,{class:"spacing",text:"分",font:"alipuhuiheavy"}),i(T,{class:"spacing",type:"primary",text:"".concat(m(s).s)},null,8,["text"]),i(B,{class:"spacing",text:"秒",font:"alipuhuiheavy"})])),_:1})])),_:1})])),_:1}),i(O,{title:"自由控制",note:"提供 API 以自由控制倒计时的状态。"},{default:d((()=>[i(E,{class:"align-items-center"},{default:d((()=>[i(k,{ref_key:"countdownEle",ref:u,format:"mm:ss.SS",millisecond:"",time:3e5},null,512),i(A,{align:"center"},{default:d((()=>[i(q,{"round-size":"50px",round:"",onClick:H},{default:d((()=>[i($,{name:"refresh-line"})])),_:1}),i(q,{class:"m-l-10",type:"primary",level:"second","round-size":"60px",round:"",onClick:w},{default:d((()=>[i($,{name:"".concat(m(o)?"pause":"play","-fill"),color:m(l).primary},null,8,["name","color"])])),_:1}),i(q,{class:"m-l-10","round-size":"50px",round:"",onClick:M},{default:d((()=>[i($,{name:"stop-circle-fill"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-fd6b20da"]]);export{M as default};
