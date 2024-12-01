import{_ as t}from"./sn-topbar.wm0GzhH3.js";import{d as e,$ as a,c as l,a as o,e as n,u as s,b as r,f as u,g as d}from"./index-DYMgrqHp.js";import{r as m}from"./uni-app.es.DgDfNdgy.js";import{a as i}from"./sn-text.euomPoe8.js";import{_ as f}from"./com-card.BtLNzB63.js";import{_ as c}from"./sn-page.Cf6LEMVT.js";import"./sn-button.BjZePiC5.js";import"./sn-loading.t5otRKvs.js";import"./sn-menu-item.DkjoXkWj.js";import"./sn-overlay.CiZFgEyq.js";const p=e(Object.assign({name:"sn-dateformat"},{__name:"sn-dateformat",props:{date:{type:Number,default:Date.now()},format:{type:String,default:"YYYY-MM-DD HH:mm:ss"},threshold:{type:Array,default:[6e4,864e5]},locale:{type:String,default:"zh-cn"},textColor:{type:String,default:""},textSize:{type:String,default:""},textFont:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(t){const e=a.utils;a.colors;const u=t,d=l((()=>{let t=["zh-cn","en"];return t.includes(u.locale)?u.locale:t[0]})),f=l((()=>{let t=new Map;return"zh-cn"==d.value?(t.set("justnow","刚刚"),t.set("soon","马上")):"en"==d.value&&(t.set("justnow","Just now"),t.set("soon","Soon")),t})),c=l((()=>{var t,l;let o=a.libs.date.dayuts(u.date).locale(d.value),n=o.format(u.format),s=u.threshold;s.length>2?s=s.slice(0,2):s.length<0&&(s=[0,0]),s=e.insertionSort(s);let r=o.valueOf()-Date.now(),m=Math.abs(r);return m<s[0]?n=r<0?null!==(t=UTS.mapGet(f.value,"justnow"))&&void 0!==t?t:"刚刚":null!==(l=UTS.mapGet(f.value,"soon"))&&void 0!==l?l:"马上":m>=s[0]&&m<s[1]&&(n=o.fromNow()),n}));return(e=null,a=null)=>{const l=m(o("sn-text"),i);return r(),n(l,{text:s(c),color:t.textColor,size:t.textSize,font:t.textFont},null,8,["text","color","size","font"])}}})),h=e({__name:"sn-dateformat",setup(e){const l=a.libs.date,i=Date.now();return(e=null,a=null)=>{const h=m(o("sn-topbar"),t),j=m(o("sn-dateformat"),p),x=m(o("com-card"),f),y=m(o("sn-page"),c);return r(),n(y,null,{default:u((()=>[d(h,{title:"Dateformat 日期格式化"}),d(x,{title:"基础用法",note:"用于将时间戳格式化为文字，用法与 uni-dateformat 对齐"},{default:u((()=>[d(j,{date:s(i),threshold:[0,0]},null,8,["date"]),d(j,{date:s(i),format:"MM月DD日",threshold:[0,0]},null,8,["date"]),d(j,{date:s(i),format:"HH:mm",threshold:[0,0]},null,8,["date"])])),_:1}),d(x,{title:"设置阈值",note:"阈值用于控制什么时候显示刚刚|马上，什么时候显示xx分钟前|xx分钟后"},{default:u((()=>[d(j,{date:s(i)-3e5,threshold:[0,36e5]},null,8,["date"]),d(j,{date:s(i)-3e5,threshold:[0,0]},null,8,["date"]),d(j,{date:s(l).dayuts().subtract(2,"day").valueOf(),threshold:[0,6048e5]},null,8,["date"])])),_:1}),d(x,{title:"多语言",note:"目前已支持中(zh-cn)、英(en) 两种语言"},{default:u((()=>[d(j,{locale:"en",date:s(i)-3e5,threshold:[0,36e5]},null,8,["date"]),d(j,{locale:"en",date:s(i)},null,8,["date"]),d(j,{locale:"en",date:s(l).dayuts().subtract(2,"day").valueOf(),threshold:[0,6048e5]},null,8,["date"])])),_:1})])),_:1})}}});export{h as default};