import{_ as t,a as e}from"./sn-topbar.D5ol6wWa.js";import{d as a,$ as n,r as l,a as r,o as c,b as o,e as s,f as y,u}from"./index-BDGnenFq.js";import{r as p}from"./uni-app.es.BfR9KIrQ.js";import{_ as i}from"./sn-alert.YjlOp3ma.js";import{b as m,_ as x,c as d}from"./sn-button.DCeBN0oM.js";import{_ as f}from"./com-card.CltZjJtY.js";import{_ as Y}from"./sn-line.CxWqAnnd.js";import{_ as D}from"./sn-page.BIWIogO0.js";const _=d(a({__name:"sn-date",setup(a){n.colors;const d=n.libs.date,_=d.dayuts(),M=l(d.dayuts()),H=d.dayuts("2019-01-25 03:01:52"),g=d.dayuts("2018-06-05 13:51:20"),b=d.dayuts("1999-01-01 03:01:08",null,"zh-cn"),h=d.dayuts("2015-12-06 15:11:20",null,"zh-cn"),S=d.dayuts("2024-12-05 14:02:45",null,"zh-cn");return(a=null,n=null)=>{const l=p(r("sn-topbar"),t),j=p(r("sn-alert"),i),v=p(r("sn-text"),m),U=p(r("com-card"),f),w=p(r("sn-button"),x),C=p(r("sn-row"),e),N=p(r("sn-line"),Y),O=p(r("sn-page"),D);return c(),o(O,null,{default:s((()=>[y(l,{title:"Date 日期库"}),y(j,{type:"primary",text:"此库基于陌上年华的开源 UTS 插件 lime-dayuts 开发，几乎和 Day.js 保持一样的API。"}),y(U,{title:"当前时间",note:"直接调用 dayuts() 将返回一个包含当前日期和时间的 Dayuts 对象。"},{default:s((()=>[y(v,{type:"primary",text:"".concat(u(_))},null,8,["text"])])),_:1}),y(U,{title:"解析字符串",note:"解析传入的符合 UTS Date 格式的字符串并返回一个 Dayuts 对象实例。"},{default:s((()=>[y(v,{type:"primary",text:"字符串：2023/08/13 12:35:54\n解析结果：".concat(u(d).dayuts("2023/08/13 12:35:54"))},null,8,["text"])])),_:1}),y(U,{title:"解析 Unix 时间戳 (毫秒)",note:"解析传入的一个 Unix 时间戳 (13 位数字，从1970年1月1日 UTC 午夜开始所经过的毫秒数) 创建一个 Dayuts 对象。"},{default:s((()=>[y(v,{type:"primary",text:"时间戳：1318781796406\n解析结果：".concat(u(d).dayuts(1318781796406))},null,8,["text"])])),_:1}),y(U,{title:"解析 Date 对象",note:"使用 UTS Date 内置对象创建一个 Dayuts 对象。"},{default:s((()=>[y(v,{type:"primary",text:"对象：new Date(2010,1,5)\n解析结果：".concat(u(d).dayuts(new Date(2010,1,5)))},null,8,["text"])])),_:1}),y(U,{title:"解析数组",note:"您可以传入一个数组来创建一个 Dayuts 对象，数组和结构和 new Date() 十分类似。"},{default:s((()=>[y(v,{type:"primary",text:"数组：[2018,8,6,12,54]\n解析结果：".concat(u(d).dayuts([2018,8,6,12,54]))},null,8,["text"])])),_:1}),y(U,{title:"格式化",note:"根据传入的占位符返回格式化后的日期。\\n将字符放在方括号中，即可原样返回而不被格式化替换 (例如， [MM])"},{default:s((()=>[y(v,{type:"primary",text:"".concat(u(d).dayuts("2019-01-25").format("DD/MM/YYYY"))},null,8,["text"]),y(v,{type:"primary",text:"".concat(u(d).dayuts("2019-01-25").format("YYYY-MM-DD HH:mm:ss"))},null,8,["text"])])),_:1}),y(U,{title:"取值/赋值",note:"在设计上 Dayuts 的 getter 和 setter 使用了相同的 API，也就是说，不传参数调用方法即为 getter，调用并传入参数为 setter。"},{default:s((()=>[y(v,{type:"primary",text:"".concat(u(_))},null,8,["text"]),y(v,{type:"primary",text:"年:".concat(u(_).year())},null,8,["text"]),y(v,{type:"primary",text:"月:".concat(u(_).month())},null,8,["text"]),y(v,{type:"primary",text:"日:".concat(u(_).date())},null,8,["text"]),y(v,{type:"primary",text:"周:".concat(u(_).day())},null,8,["text"]),y(v,{type:"primary",text:"时:".concat(u(_).hour())},null,8,["text"]),y(v,{type:"primary",text:"分:".concat(u(_).minute())},null,8,["text"]),y(v,{type:"primary",text:"秒:".concat(u(_).second())},null,8,["text"]),y(v,{type:"primary",text:"毫秒:".concat(u(_).millisecond())},null,8,["text"])])),_:1}),y(U,{title:"操作",note:"提供一系列日期操作方法。支持链式调用。"},{default:s((()=>[y(v,{type:"primary",text:"".concat(u(M).format("YYYY-MM-DD HH:mm:ss"))},null,8,["text"]),y(C,null,{default:s((()=>[y(w,{class:"spacing",text:"+1时",onClick:n[0]||(n[0]=(t=null)=>M.value=u(M).add(1,"hour"))}),y(w,{class:"spacing",text:"+1天",onClick:n[1]||(n[1]=(t=null)=>M.value=u(M).add(1,"day"))}),y(w,{class:"spacing",text:"+1月",onClick:n[2]||(n[2]=(t=null)=>M.value=u(M).add(1,"month"))}),y(w,{class:"spacing",text:"+1年",onClick:n[3]||(n[3]=(t=null)=>M.value=u(M).add(1,"year"))})])),_:1}),y(C,null,{default:s((()=>[y(w,{class:"spacing",text:"-2时",onClick:n[4]||(n[4]=(t=null)=>M.value=u(M).subtract(2,"hour"))}),y(w,{class:"spacing",text:"-2天",onClick:n[5]||(n[5]=(t=null)=>M.value=u(M).subtract(2,"day"))}),y(w,{class:"spacing",text:"-2月",onClick:n[6]||(n[6]=(t=null)=>M.value=u(M).subtract(2,"month"))}),y(w,{class:"spacing",text:"-2年",onClick:n[7]||(n[7]=(t=null)=>M.value=u(M).subtract(2,"year"))})])),_:1}),y(N),y(v,{type:"primary",text:"转Date：\n".concat(u(M).toDate(),"\n")},null,8,["text"]),y(v,{type:"primary",text:"转Array：\n".concat(u(M).toArray(),"\n")},null,8,["text"]),y(v,{type:"primary",text:"转JSON：\n".concat(u(M).toJSON(),"\n")},null,8,["text"]),y(v,{type:"primary",text:"转Object：\n".concat(UTS.JSON.stringify(u(M).toObject()),"\n")},null,8,["text"]),y(v,{type:"primary",text:"转String：\n".concat(u(M).toString())},null,8,["text"]),y(N),y(v,{type:"primary",text:"本月开始日期：".concat(u(M).startOf("month").format("YYYY-MM-DD HH:mm:ss"))},null,8,["text"]),y(v,{type:"primary",text:"本年终止日期：".concat(u(M).startOf("year").format("YYYY-MM-DD HH:mm:ss"))},null,8,["text"]),y(N),y(v,{type:"primary",text:"是否今日：".concat(u(M).isToday())},null,8,["text"]),y(v,{type:"primary",text:"本月天数：".concat(u(M).daysInMonth())},null,8,["text"]),y(v,{type:"primary",text:"今年是否闰年：".concat(u(M).isLeapYear())},null,8,["text"])])),_:1}),y(U,{title:"相对时间",note:"返回日期与现在日期或其他日期的相对时间差异。"},{default:s((()=>[y(v,{type:"primary",text:"实例1：".concat(u(b).format("YYYY-MM-DD HH:mm:ss"))},null,8,["text"]),y(v,{type:"primary",text:"实例2：".concat(u(h).format("YYYY-MM-DD HH:mm:ss"))},null,8,["text"]),y(v,{type:"primary",text:"实例1相对于现在：".concat(u(b).fromNow())},null,8,["text"]),y(v,{type:"primary",text:"实例1相对于实例2：".concat(u(b).from(u(h)))},null,8,["text"]),y(v,{type:"primary",text:"现在相对于实例1：".concat(u(b).toNow())},null,8,["text"]),y(v,{type:"primary",text:"实例2相对于实例1：".concat(u(b).to(u(h)))},null,8,["text"])])),_:1}),y(U,{title:"差异",note:"返回指定单位下两个日期时间之间的差异。"},{default:s((()=>[y(v,{type:"primary",text:"日期1：".concat(u(H).format("YYYY-MM-DD HH:mm:ss"))},null,8,["text"]),y(v,{type:"primary",text:"日期2：".concat(u(g).format("YYYY-MM-DD HH:mm:ss"))},null,8,["text"]),y(v,{type:"primary",text:"毫秒为单位：".concat(u(H).diff(u(g)))},null,8,["text"]),y(v,{type:"primary",text:"天为单位：".concat(u(H).diff(u(g),"days"))},null,8,["text"]),y(v,{type:"primary",text:"月为单位：".concat(u(H).diff(u(g),"months"))},null,8,["text"])])),_:1}),y(U,{title:"Unix 时间戳 (毫秒)",note:"返回当前实例的 UNIX 时间戳，13位数字，毫秒。"},{default:s((()=>[y(v,{type:"primary",text:"".concat(u(_),"\n").concat(u(_).valueOf())},null,8,["text"])])),_:1}),y(U,{title:"查询",note:"返回当前实例的 UNIX 时间戳，13位数字，毫秒。"},{default:s((()=>[y(v,{type:"primary",text:"实例1：".concat(u(b).format("YYYY-MM-DD HH:mm:ss"))},null,8,["text"]),y(v,{type:"primary",text:"实例2：".concat(u(S).format("YYYY-MM-DD HH:mm:ss"))},null,8,["text"]),y(v,{type:"primary",text:"实例1是否在现在之前：".concat(u(b).isBefore(u(_)))},null,8,["text"]),y(v,{type:"primary",text:"实例2是否在现在之后：".concat(u(S).isAfter(u(_)))},null,8,["text"]),y(v,{type:"primary",text:"实例2是否在本月：".concat(u(S).isSame(u(_),"month"))},null,8,["text"]),y(v,{type:"primary",text:"实例2是否在今年：".concat(u(S).isSame(u(_),"year"))},null,8,["text"]),y(v,{type:"primary",text:"实例2是否与现在相同或在现在之后：".concat(u(S).isSameOrAfter(u(_)))},null,8,["text"]),y(v,{type:"primary",text:"现在是否在实例1和实例2之间：".concat(u(_).isBetween(u(b),u(S)))},null,8,["text"])])),_:1}),y(U,{title:"国际化",note:"目前内置了中英两种语言"},{default:s((()=>[y(v,{type:"primary",text:"中文\n".concat(u(_),"\n").concat(u(_).locale("zh-cn").toNow(),"\n\n")},null,8,["text"]),y(v,{type:"primary",text:"英文\n".concat(u(_),"\n").concat(u(_).locale("en").toNow())},null,8,["text"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-89d8edb9"]]);export{_ as default};
