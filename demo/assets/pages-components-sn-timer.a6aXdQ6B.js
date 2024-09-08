import{_ as t,a as e}from"./sn-topbar.CX0rMkKy.js";import{d as a,r as l,c as s,l as n,y as o,b as r,t as c,g as u,u as i,o as m,e as f,f as p,k as d}from"./index-DNTc1GxZ.js";import{$ as y,r as x,s as v}from"./uni-app.es.D9ZkitmT.js";import{b as S,a as _,_ as g,c as h}from"./sn-button.BaZjRh9m.js";import{_ as b}from"./com-card.22LSjaaf.js";import{_ as j}from"./sn-tag.DvvI2107.js";import{_ as z}from"./sn-page.CEVOSUw5.js";const C=a(Object.assign({name:"sn-timer"},{__name:"sn-timer",props:{format:{type:String,default:"HH:mm:ss"},autoplay:{type:Boolean,default:!0},millisecond:{type:Boolean,default:!1},textSize:{type:String,default:""},textColor:{type:String,default:""},customStyle:{type:Object,default:{}}},emits:["change"],setup(t,e){var a=e.expose,m=e.emit;const f=y.colors,p=m,d=t,_=l(0),g=l(0),h=l(!1);function b(){clearInterval(g.value),g.value=0}function j(t){const e=1e3,a=60*e,l=60*a,s=24*l,n=Math.floor(t/s),o=Math.floor(t%s/l),r=Math.floor(t%l/a),c=Math.floor(t%a/e),u=Math.floor(t%e);return new v({d:n,h:o,m:r,s:c,ms:u})}function z(){h.value=!1,b()}function C(){if(h.value)return null;var t;h.value=!0,t=d.millisecond?10:1e3,b(),g.value=setInterval((()=>{h.value&&(_.value+=t,p("change",j(_.value)))}),t)}function D(){z(),_.value=0,d.autoplay&&C()}a({start:C,pause:z,reset:D});const H=s((()=>""==d.textSize?y.configs.font.baseSize:d.textSize)),M=s((()=>""==d.textColor?f.value.text:d.textColor)),O=s((()=>function(t,e){let a=e.d,l=e.h,s=e.m,n=e.s,o=e.ms;return-1==t.indexOf("DD")?l+=24*a:t=t.replace("DD","".concat(a).padStart(2,"0")),-1==t.indexOf("HH")?s+=60*l:t=t.replace("HH","".concat(l).padStart(2,"0")),-1==t.indexOf("mm")?n+=60*s:t=t.replace("mm","".concat(s).padStart(2,"0")),-1==t.indexOf("ss")?o+=1e3*n:t=t.replace("ss","".concat(n).padStart(2,"0")),t.replace("SSS","".concat(o).padStart(3,"0")).replace("SS","".concat(Math.trunc(o/10)).padStart(2,"0")).replace("S","".concat(Math.trunc(o/100)))}(d.format,j(_.value))));return n((()=>{D()})),o((()=>{b()})),(e=null,a=null)=>{const l=x(r("sn-text"),S);return c(e.$slots,"default",{},(()=>[u(l,{text:i(O),color:i(M),size:i(H),customStyle:t.customStyle},null,8,["text","color","size","customStyle"])]))}}})),D=h(a({__name:"sn-timer",setup(a){const s=y.colors,n=l(!1),o=l(new v({d:0,h:0,m:0,s:0,ms:0})),c=l(null);function h(t){o.value=t}function D(){n.value=!n.value,n.value?c.value.start():c.value.pause()}function H(){n.value=!1,c.value.reset()}return(a=null,l=null)=>{const v=x(r("sn-topbar"),t),M=x(r("sn-timer"),C),O=x(r("com-card"),b),k=x(r("sn-tag"),j),I=x(r("sn-text"),S),w=x(r("sn-row"),e),B=x(r("sn-icon"),_),$=x(r("sn-button"),g),q=d,A=x(r("sn-page"),z);return m(),f(A,null,{default:p((()=>[u(v,{title:"Timer 计时器"}),u(O,{title:"基础用法",note:"顾名思义，就是一个计时器。\\n推荐使用插槽布局为主，样式更好调。"},{default:p((()=>[u(M)])),_:1}),u(O,{title:"自定义样式",note:"可以自由设置文本的颜色和大小等样式"},{default:p((()=>[u(M,{textColor:i(s).successDark,textSize:i(y).configs.font.size(3),customStyle:{fontFamily:"alipuhuiheavy"}},null,8,["textColor","textSize"])])),_:1}),u(O,{title:"格式化",note:"计时器内置文字支持时间格式化（参照Day.js）。"},{default:p((()=>[u(M,{format:"DD 天 HH 小时 mm 分钟 ss 秒"})])),_:1}),u(O,{title:"毫秒精度",note:"虽然使用一般模式也支持获取毫秒，但误差极大，不如此模式精确。"},{default:p((()=>[u(M,{format:"mm:ss.SS",millisecond:""})])),_:1}),u(O,{title:"插槽",note:"推荐使用插槽模式，自由度更高。"},{default:p((()=>[u(M,{millisecond:"",onChange:h},{default:p((()=>[u(w,null,{default:p((()=>[u(k,{class:"spacing",type:"primary",text:"".concat(i(o).h)},null,8,["text"]),u(I,{class:"spacing",text:"时",font:"alipuhuiheavy"}),u(k,{class:"spacing",type:"primary",text:"".concat(i(o).m)},null,8,["text"]),u(I,{class:"spacing",text:"分",font:"alipuhuiheavy"}),u(k,{class:"spacing",type:"primary",text:"".concat(i(o).s)},null,8,["text"]),u(I,{class:"spacing",text:"秒",font:"alipuhuiheavy"})])),_:1})])),_:1})])),_:1}),u(O,{title:"自由控制",note:"提供 API 以自由控制计时器的状态。"},{default:p((()=>[u(q,{class:"align-items-center"},{default:p((()=>[u(M,{ref_key:"timerEle",ref:c,format:"mm:ss.SS",millisecond:"",autoplay:!1},null,512),u(w,{class:"m-t-10",align:"center"},{default:p((()=>[u($,{onClick:H},{default:p((()=>[u(B,{name:"refresh-line"})])),_:1}),u($,{class:"m-l-10",type:"primary",level:"second",onClick:D},{default:p((()=>[u(B,{name:"".concat(i(n)?"pause":"play","-fill"),color:i(s).primary},null,8,["name","color"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-f7bd1721"]]);export{D as default};