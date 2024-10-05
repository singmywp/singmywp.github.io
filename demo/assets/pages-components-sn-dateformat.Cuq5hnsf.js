import{_ as t}from"./sn-topbar.DxKzInQK.js";import{d as e,$ as a,c as l,a as o,b as n,u as s,o as r,e as u,f as d}from"./index-DoInGK9X.js";import{r as f}from"./uni-app.es.K1mZmM8s.js";import{b as m}from"./sn-button.B1LvAG78.js";import{_ as c}from"./com-card.D8_7_rS9.js";import{_ as i}from"./sn-page.Nlp4LDKz.js";const p=e(Object.assign({name:"sn-dateformat"},{__name:"sn-dateformat",props:{date:{type:Number,default:Date.now()},format:{type:String,default:"YYYY-MM-DD HH:mm:ss"},threshold:{type:Array,default:[6e4,864e5]},locale:{type:String,default:"zh-cn"},textColor:{type:String,default:""},textSize:{type:String,default:""},textFont:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(t){const e=a.utils;a.colors;const u=t,d=l((()=>{let t=["zh-cn","en"];return t.includes(u.locale)?u.locale:t[0]})),c=l((()=>{let t=new Map;return"zh-cn"==d.value?(t.set("justnow","刚刚"),t.set("soon","马上")):"en"==d.value&&(t.set("justnow","Just now"),t.set("soon","Soon")),t})),i=l((()=>{var t,l;let o=a.libs.date.dayuts(u.date).locale(d.value),n=o.format(u.format),s=u.threshold;s.length>2?s=s.slice(0,2):s.length<0&&(s=[0,0]),s=e.insertionSort(s);let r=o.valueOf()-Date.now(),f=Math.abs(r);return f<s[0]?n=r<0?null!==(t=UTS.mapGet(c.value,"justnow"))&&void 0!==t?t:"刚刚":null!==(l=UTS.mapGet(c.value,"soon"))&&void 0!==l?l:"马上":f>=s[0]&&f<s[1]&&(n=o.fromNow()),n}));return(e=null,a=null)=>{const l=f(o("sn-text"),m);return r(),n(l,{text:s(i),color:t.textColor,size:t.textSize,font:t.textFont},null,8,["text","color","size","font"])}}})),h=e({__name:"sn-dateformat",setup(e){const l=a.libs.date,m=Date.now();return(e=null,a=null)=>{const h=f(o("sn-topbar"),t),x=f(o("sn-dateformat"),p),y=f(o("com-card"),c),b=f(o("sn-page"),i);return r(),n(b,null,{default:u((()=>[d(h,{title:"Dateformat 日期格式化"}),d(y,{title:"基础用法",note:"用于将时间戳格式化为文字，用法与 uni-dateformat 对齐"},{default:u((()=>[d(x,{date:s(m),threshold:[0,0]},null,8,["date"]),d(x,{date:s(m),format:"MM月DD日",threshold:[0,0]},null,8,["date"]),d(x,{date:s(m),format:"HH:mm",threshold:[0,0]},null,8,["date"])])),_:1}),d(y,{title:"设置阈值",note:"阈值用于控制什么时候显示刚刚|马上，什么时候显示xx分钟前|xx分钟后"},{default:u((()=>[d(x,{date:s(m)-3e5,threshold:[0,36e5]},null,8,["date"]),d(x,{date:s(m)-3e5,threshold:[0,0]},null,8,["date"]),d(x,{date:s(l).dayuts().subtract(2,"day").valueOf(),threshold:[0,6048e5]},null,8,["date"])])),_:1}),d(y,{title:"多语言",note:"目前已支持中(zh-cn)、英(en) 两种语言"},{default:u((()=>[d(x,{locale:"en",date:s(m)-3e5,threshold:[0,36e5]},null,8,["date"]),d(x,{locale:"en",date:s(m)},null,8,["date"]),d(x,{locale:"en",date:s(l).dayuts().subtract(2,"day").valueOf(),threshold:[0,6048e5]},null,8,["date"])])),_:1})])),_:1})}}});export{h as default};
