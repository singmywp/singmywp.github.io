import{a as t,_ as e}from"./sn-topbar.DxKzInQK.js";import{d as n,$ as l,a,o as c,g as o,f as i,e as u,u as s,F as r,b as x,r as d,an as m,S as p,c as f,l as b,i as y,ao as _,aj as v,q as g,C as h,j as C}from"./index-DoInGK9X.js";import{r as k,o as w}from"./uni-app.es.K1mZmM8s.js";import{_ as S}from"./sn-tabs.CUyj_3m-.js";import{_ as N}from"./sn-gap.BM3gA-Sq.js";import{_ as U}from"./sn-page.Nlp4LDKz.js";import{b as I,_ as j,c as D}from"./sn-button.B1LvAG78.js";import{_ as P}from"./com-card.D8_7_rS9.js";import{_ as T}from"./sn-select.BifT2hzZ.js";import{_ as L}from"./sn-form-item.DQivdfXx.js";import{_ as A}from"./sn-stepper.8H8ymVUn.js";import{_ as O}from"./sn-toast.B4HV5-Bl.js";import"./sn-badge.DtCZwnqZ.js";import"./useResize.Dia-r-oM.js";import"./sn-alert.CWq7Acu6.js";import"./sn-line.DzqrU5y1.js";import"./sn-input.CG5cj0Ye.js";const E="文本一😁abcd",V="　　　　　　   　",F="😄😃🤣😂😁Abcd文字",J="sinle-ui-text",Q="sinleUiText",R="124569655868.16",q="13700001234",H="066-66668888",K="131124198508122256",W="sinleui@sinleui.com",$="6217006666666666111",B="1234567890",G="-1234567890",z="2123456765568.5556",M=n({__name:"page-text",setup(t){const e=l.utils;return(t=null,n=null)=>{const l=k(a("sn-text"),I),x=k(a("com-card"),P);return c(),o(r,null,[i(x,{title:"是否为空文本",note:"判断字符串是否为空（自动去除空格）"},{default:u((()=>[i(l,{text:"文本【".concat(E,"】  是否为空：").concat(s(e).isEmpty(E))},null,8,["text"]),i(l,{text:"文本【".concat(V,"】  是否为空：").concat(s(e).isEmpty(V))},null,8,["text"])])),_:1}),i(x,{title:"计算文本字数",note:"计算文本字数。使用 emoji-regex 库，能够正确计算表情符号的数量。"},{default:u((()=>[i(l,{text:"文本【".concat(F,"】  字数：").concat(s(e).len(F))},null,8,["text"])])),_:1}),i(x,{title:"Kebab命名法转小驼峰命名法",note:"将Kebab命名法的文本转为小驼峰命名法"},{default:u((()=>[i(l,{text:"文本【".concat(J,"】\n转换结果：").concat(s(e).kebabCaseToCamelCase(J))},null,8,["text"])])),_:1}),i(x,{title:"小驼峰命名法转Kebab命名法",note:"将小驼峰命名法的文本转为Kebab命名法"},{default:u((()=>[i(l,{text:"文本【".concat(Q,"】\n转换结果：").concat(s(e).camelCaseToKebabCase(Q))},null,8,["text"])])),_:1}),i(x,{title:"数字转大写金额",note:"将阿拉伯数字转换为中文大写金额。"},{default:u((()=>[i(l,{text:"文本【".concat(R,"】\n转换结果：").concat(s(e).numToUpper(R))},null,8,["text"])])),_:1}),i(x,{title:"姓名脱敏",note:"为姓名脱敏。"},{default:u((()=>[i(l,{text:"文本【".concat("张三","】\t转换结果：").concat(s(e).encryptName("张三"))},null,8,["text"]),i(l,{text:"文本【".concat("李二狗","】\t转换结果：").concat(s(e).encryptName("李二狗"))},null,8,["text"]),i(l,{text:"文本【".concat("慕容京诸葛","】\t转换结果：").concat(s(e).encryptName("慕容京诸葛"))},null,8,["text"])])),_:1}),i(x,{title:"电话号码脱敏",note:"为电话号码脱敏。支持 11 位手机号码和座机号码。"},{default:u((()=>[i(l,{text:"文本【".concat(q,"】\t转换结果：").concat(s(e).encryptPhone(q))},null,8,["text"]),i(l,{text:"文本【".concat("10086","】\t转换结果：").concat(s(e).encryptPhone("10086"))},null,8,["text"]),i(l,{text:"文本【".concat(H,"】\t转换结果：").concat(s(e).encryptPhone(H))},null,8,["text"])])),_:1}),i(x,{title:"身份证号脱敏",note:"为身份证号脱敏。隐藏中间的11位数字，只保留前3位和后4位。\\n（身份证号来源： 公安部网站）"},{default:u((()=>[i(l,{text:"文本【".concat(K,"】\n转换结果：").concat(s(e).encryptIDCard(K))},null,8,["text"])])),_:1}),i(x,{title:"邮箱脱敏",note:"为邮箱邮箱。隐藏用户名的一部分。"},{default:u((()=>[i(l,{text:"文本【".concat(W,"】\n转换结果：").concat(s(e).encryptEmail(W))},null,8,["text"])])),_:1}),i(x,{title:"银行卡号脱敏",note:"为银行卡号脱敏，隐藏中间的部分数字，只保留前3位和后4位。"},{default:u((()=>[i(l,{text:"文本【".concat($,"】\n转换结果：").concat(s(e).encryptBankCard($))},null,8,["text"])])),_:1}),i(x,{title:"分割数字",note:"将数字字符串格式化为带有指定分隔符的格式，例如每三位数字后加一个逗号。"},{default:u((()=>[i(l,{text:"文本【".concat(B,"】\n转换结果：").concat(s(e).separateNumber(B))},null,8,["text"]),i(l,{text:"文本【".concat(G,"】\n转换结果：").concat(s(e).separateNumber(G,4))},null,8,["text"]),i(l,{text:"文本【".concat(z,"】\n转换结果：").concat(s(e).separateNumber(z,3,"|"))},null,8,["text"])])),_:1})],64)}}}),X="2023-01-01",Y="http://www.example.com",Z="https://www.baidu.com/s?ie=utf-8&wd=SinleUI",tt="ftp://example:example",et="not a URL",nt="1515.14",lt="土地平旷AND屋舍俨然",at="12345abc@test.com",ct="0000test.com",ot="13523456789",it="10000000000",ut="027-62039999",st="123456789000",rt="1445645789",xt="2400:da00::6666",dt="2001:da8:208:10::6",mt="101.470.215.442",pt="180.76.76.76",ft="41048219911004595X",bt="350783199003058516",yt="41272219801215771X",_t="/static/sub/com.jpeg",vt="not a valid car number",gt=n({__name:"page-verify",setup(t){const e=l.utils,n=new Date,x=NaN,d=1/0;return(t=null,l=null)=>{const m=k(a("sn-text"),I),p=k(a("com-card"),P);return c(),o(r,null,[i(p,{title:"是否为日期",note:"验证输入的值是否为有效的日期。\\n如果传入Date构造器的参数字符串不合法，在web平台会抛出 Invalid Date 异常；在Android/IOS平台，会转换为程序执行时的时间"},{default:u((()=>[i(m,{text:"数据【".concat(X,"】  校验结果：").concat(s(e).isDate(X))},null,8,["text"]),i(m,{text:"数据【".concat("非日期文本","】  校验结果：").concat(s(e).isDate("非日期文本"))},null,8,["text"]),i(m,{text:"数据【".concat(s(n),"】  校验结果：").concat(s(e).isDate(s(n)))},null,8,["text"])])),_:1}),i(p,{title:"是否为URL",note:"验证输入的字符串是否为有效的URL。"},{default:u((()=>[i(m,{text:"数据【".concat(Y,"】\n校验结果：").concat(s(e).isURL(Y))},null,8,["text"]),i(m,{text:"数据【".concat(Z,"】\n校验结果：").concat(s(e).isURL(Z))},null,8,["text"]),i(m,{text:"数据【".concat(tt,"】\n校验结果：").concat(s(e).isURL(tt))},null,8,["text"]),i(m,{text:"数据【".concat(et,"】\n校验结果：").concat(s(e).isURL(et))},null,8,["text"])])),_:1}),i(p,{title:"是否为数字",note:"验证输入的字符串是否为有效的数字。"},{default:u((()=>[i(m,{text:"数据【".concat("12345","】校验结果：").concat(s(e).isNumberString("12345"))},null,8,["text"]),i(m,{text:"数据【".concat(nt,"】校验结果：").concat(s(e).isNumberString(nt))},null,8,["text"]),i(m,{text:"数据【".concat("-145.7452","】校验结果：").concat(s(e).isNumberString("-145.7452"))},null,8,["text"]),i(m,{text:"数据【".concat("x+y=10","】校验结果：").concat(s(e).isNumberString("x+y=10"))},null,8,["text"])])),_:1}),i(p,{title:"是否为字母",note:"验证输入的字符串是否为有效的字母。"},{default:u((()=>[i(m,{text:"数据【".concat("abcdEFG","】校验结果：").concat(s(e).isAbc("abcdEFG"))},null,8,["text"])])),_:1}),i(p,{title:"是否为中文",note:"验证输入的字符串是否为有效的中文。"},{default:u((()=>[i(m,{text:"数据【".concat("天地玄黄","】校验结果：").concat(s(e).isChinese("天地玄黄"))},null,8,["text"]),i(m,{text:"数据【".concat(lt,"】校验结果：").concat(s(e).isChinese(lt))},null,8,["text"])])),_:1}),i(p,{title:"是否为邮箱",note:"验证输入的字符串是否为有效的邮箱地址。"},{default:u((()=>[i(m,{text:"数据【".concat(at,"】校验结果：").concat(s(e).isEmail(at))},null,8,["text"]),i(m,{text:"数据【".concat(ct,"】校验结果：").concat(s(e).isEmail(ct))},null,8,["text"])])),_:1}),i(p,{title:"是否为手机号",note:"验证输入的字符串是否为有效的手机号。"},{default:u((()=>[i(m,{text:"数据【".concat(ot,"】校验结果：").concat(s(e).isPhone(ot))},null,8,["text"]),i(m,{text:"数据【".concat(it,"】校验结果：").concat(s(e).isPhone(it))},null,8,["text"])])),_:1}),i(p,{title:"是否为座机号",note:"验证输入的字符串是否为有效的座机号。"},{default:u((()=>[i(m,{text:"数据【".concat(ut,"】校验结果：").concat(s(e).isLandline(ut))},null,8,["text"]),i(m,{text:"数据【".concat(st,"】校验结果：").concat(s(e).isLandline(st))},null,8,["text"])])),_:1}),i(p,{title:"是否为QQ号",note:"验证输入的字符串是否为有效的QQ号。"},{default:u((()=>[i(m,{text:"数据【".concat("10000","】校验结果：").concat(s(e).isQQNumber("10000"))},null,8,["text"]),i(m,{text:"数据【".concat(rt,"】校验结果：").concat(s(e).isQQNumber(rt))},null,8,["text"])])),_:1}),i(p,{title:"是否为IPv6",note:"验证输入的字符串是否为有效的IPv6地址。"},{default:u((()=>[i(m,{text:"数据【".concat(xt,"】校验结果：").concat(s(e).isIPv6(xt))},null,8,["text"]),i(m,{text:"数据【".concat(dt,"】校验结果：").concat(s(e).isIPv6(dt))},null,8,["text"]),i(m,{text:"数据【".concat(mt,"】校验结果：").concat(s(e).isIPv6(mt))},null,8,["text"])])),_:1}),i(p,{title:"是否为IPv4",note:"验证输入的字符串是否为有效的IPv4地址。"},{default:u((()=>[i(m,{text:"数据【".concat(mt,"】校验结果：").concat(s(e).isIPv4(mt))},null,8,["text"]),i(m,{text:"数据【".concat(pt,"】校验结果：").concat(s(e).isIPv4(pt))},null,8,["text"]),i(m,{text:"数据【".concat(xt,"】校验结果：").concat(s(e).isIPv4(xt))},null,8,["text"])])),_:1}),i(p,{title:"是否为第二代公民身份号码",note:"验证输入的字符串是否为有效的中华人民共和国居民身份证（第二代）号码。自动计算身份证校验码是否正确。\\n（身份证号来源：公安部网站）"},{default:u((()=>[i(m,{text:"数据【".concat(ft,"】校验结果：").concat(s(e).isIDCard(ft))},null,8,["text"]),i(m,{text:"数据【".concat(bt,"】校验结果：").concat(s(e).isIDCard(bt))},null,8,["text"]),i(m,{text:"数据【".concat(yt,"】校验结果：").concat(s(e).isIDCard(yt))},null,8,["text"])])),_:1}),i(p,{title:"是否为图片文件",note:"验证输入的字符串是否为有效的图片文件名。"},{default:u((()=>[i(m,{text:"数据【".concat(_t,"】校验结果：").concat(s(e).isImage(_t))},null,8,["text"])])),_:1}),i(p,{title:"是否为视频文件",note:"验证输入的字符串是否为有效的视频文件名。"},{default:u((()=>[i(m,{text:"数据【".concat("视频1.m3u8","】校验结果：").concat(s(e).isVideo("视频1.m3u8"))},null,8,["text"])])),_:1}),i(p,{title:"是否为车牌号码",note:"验证输入的字符串是否为有效的中华人民共和国车辆牌照号码。"},{default:u((()=>[i(m,{text:"数据【".concat("京A12345","】校验结果：").concat(s(e).isCarNumber("京A12345"))},null,8,["text"]),i(m,{text:"数据【".concat("渝A000124","】校验结果：").concat(s(e).isCarNumber("渝A000124"))},null,8,["text"]),i(m,{text:"数据【".concat(vt,"】校验结果：").concat(s(e).isCarNumber(vt))},null,8,["text"])])),_:1}),i(p,{title:"是否为整数",note:"验证输入的数字是否为整数。"},{default:u((()=>[i(m,{text:"数据【".concat(3,"】校验结果：").concat(s(e).isInteger(3))},null,8,["text"]),i(m,{text:"数据【".concat(66.41,"】校验结果：").concat(s(e).isInteger(66.41))},null,8,["text"]),i(m,{text:"数据【".concat(s(x),"】校验结果：").concat(s(e).isInteger(s(x)))},null,8,["text"]),i(m,{text:"数据【".concat(s(d),"】校验结果：").concat(s(e).isInteger(s(d)))},null,8,["text"])])),_:1}),i(p,{title:"是否为小数",note:"验证输入的数字是否为小数。"},{default:u((()=>[i(m,{text:"数据【".concat(3,"】校验结果：").concat(s(e).isFloat(3))},null,8,["text"]),i(m,{text:"数据【".concat(66.41,"】校验结果：").concat(s(e).isFloat(66.41))},null,8,["text"]),i(m,{text:"数据【".concat(s(x),"】校验结果：").concat(s(e).isFloat(s(x)))},null,8,["text"]),i(m,{text:"数据【".concat(s(d),"】校验结果：").concat(s(e).isFloat(s(d)))},null,8,["text"])])),_:1})],64)}}}),ht=n({__name:"page-os",setup:t=>(l.utils,(t=null,e=null)=>{const n=k(a("com-card"),P);return c(),x(n,{title:"请前往 App 端查看"})})}),Ct=n({__name:"page-platform",setup(t){const e=l.utils,n=d(""),x=d("");function p(t,n){e.showToast(new m({type:t,text:"".concat(n,"：Hello, SinleUI!")}))}return d(0),(t=null,l=null)=>{const d=k(a("sn-button"),j),m=k(a("com-card"),P),f=k(a("sn-text"),I);return c(),o(r,null,[i(m,{title:"打开链接",note:"使用默认应用打开链接（Url、Schemes等）。Android 必须加上协议，否则会报错。"},{default:u((()=>[i(d,{type:"primary",text:"tel:10086",onClick:l[0]||(l[0]=(t=null)=>s(e).openLink("tel:10086"))}),i(d,{type:"primary",text:"https://www.dcloud.net.cn",onClick:l[1]||(l[1]=(t=null)=>s(e).openLink("https://www.dcloud.net.cn")),style:{"margin-top":"10px"}}),i(d,{type:"primary",text:"mqq://",onClick:l[2]||(l[2]=(t=null)=>s(e).openLink("mqq://")),style:{"margin-top":"10px"}})])),_:1}),i(m,{title:"拨打电话",note:"直接拨打指定的电话号码。"},{default:u((()=>[i(d,{type:"primary",text:"拨打 10086",onClick:l[3]||(l[3]=(t=null)=>s(e).makePhoneCall("10086"))})])),_:1}),i(m,{title:"写入剪切板",note:"将文本写入剪切板。"},{default:u((()=>[i(d,{type:"primary",text:"写入文本: Hello, SinleUI!",onClick:l[4]||(l[4]=(t=null)=>s(e).setClipboardData("Hello, SinleUI!"))})])),_:1}),i(m,{title:"从剪切板读取",note:"从剪切板读取文本数据。"},{default:u((()=>[i(f,{text:"剪切板数据：".concat(s(n))},null,8,["text"]),i(d,{class:"spacing",type:"primary",text:"读取文本",onClick:l[5]||(l[5]=(t=null)=>{e.getClipboardData().then((t=>{n.value=t}))})})])),_:1}),i(m,{title:"显示原生提示框",note:"在不同平台上显示原生提示框。Android 平台可设置提示框的显示时长和位置。"},{default:u((()=>[i(d,{type:"primary",text:"Toast",onClick:l[6]||(l[6]=(t=null)=>{e.showSysToast(new UTSJSONObject({title:"Hello, SinleUI!",position:"center"}))})})])),_:1}),i(m,{title:"显示提示框",note:"在各端提供基本一致的提示框样式。"},{default:u((()=>[i(d,{type:"info",text:"Default",onClick:l[7]||(l[7]=(t=null)=>p("default","默认"))}),i(d,{type:"primary",text:"Info",class:"m-t-10",onClick:l[8]||(l[8]=(t=null)=>p("info","信息"))}),i(d,{type:"success",text:"Success",class:"m-t-10",onClick:l[9]||(l[9]=(t=null)=>p("success","成功"))}),i(d,{type:"error",text:"Error",class:"m-t-10",onClick:l[10]||(l[10]=(t=null)=>p("error","错误"))}),i(d,{type:"warning",text:"Warning",class:"m-t-10",onClick:l[11]||(l[11]=(t=null)=>p("warning","警告"))})])),_:1}),i(m,{title:"使用内置全屏Webview打开网址",note:"使用内置全屏 Webview 打开网址。"},{default:u((()=>[i(d,{type:"primary",text:"https://cn.bing.com/",onClick:l[12]||(l[12]=(t=null)=>s(e).viewUrlByWebview("https://cn.bing.com/"))})])),_:1}),i(m,{title:"获取平台主题",note:"获取当前平台的主题设置，包括暗黑模式和浅色模式。"},{default:u((()=>[i(f,{text:"当前平台主题：".concat(s(x))},null,8,["text"]),i(d,{class:"spacing",type:"primary",text:"获取主题",onClick:l[13]||(l[13]=(t=null)=>x.value=s(e).getOsTheme())})])),_:1})],64)}}}),kt=n({__name:"page-random",setup(t){const e=l.utils;l.colors;const n=d(e.randint(0,100).toString()),x=d(e.formatNumber(e.randomNumber(5)).toString()),m=d(e.uuid());return(t=null,l=null)=>{const d=k(a("sn-button"),j),p=k(a("com-card"),P);return c(),o(r,null,[i(p,{title:"生成随机整数",note:"生成一个介于最小值和最大值之间的随机整数。"},{default:u((()=>[i(d,{type:"primary",text:"生成 0 ~ 100 之间的随机整数",onClick:l[0]||(l[0]=(t=null)=>n.value=s(e).randint(0,100).toString())}),i(p,{title:s(n),bgColor:"$info"},null,8,["title"])])),_:1}),i(p,{title:"生成指定位数的随机整数",note:"生成一个指定位数的随机整数。"},{default:u((()=>[i(d,{type:"primary",text:"生成 5 位的随机整数",onClick:l[1]||(l[1]=(t=null)=>x.value=s(e).formatNumber(s(e).randomNumber(5)).toString())}),i(p,{title:s(x),bgColor:"$info"},null,8,["title"])])),_:1}),i(p,{title:"生成UUID",note:"生成一个UUID格式的字符串。"},{default:u((()=>[i(d,{type:"primary",text:"生成 UUID",onClick:l[2]||(l[2]=(t=null)=>m.value=s(e).uuid())}),i(p,{title:s(m),bgColor:"$info"},null,8,["title"])])),_:1})],64)}}}),wt=n({__name:"page-other",setup(t){const e=l.utils,n=d(10),x=d(1201.51),m=d({a:"原始数据",b:2}),p=d(m.value),f=d(e.deepClone(m.value)),b=d([0,1,2,3,4,5,6,7,8,9,10]),y=d(e.shuffle(e.deepClone(b.value))),_=d(0),v=d(0),g=d(0),h=d(156.1),C=d("120"),w=d([0,1,2]),S=d(0);function N(){S.value++,m.value.a="改动数据".concat(S.value)}return(t=null,l=null)=>{const d=k(a("sn-text"),I),S=k(a("com-card"),P),U=k(a("sn-button"),j);return c(),o(r,null,[i(S,{title:"格式化数字",note:"返回给定数字的格式化结果，如果数字为整数，则返回整数部分（例如 12.0 转换为 12）；如果数字为小数，则返回原数字。"},{default:u((()=>[i(d,{text:"数字【".concat(s(n),"】\n转换结果：").concat(s(e).formatNumber(s(n)))},null,8,["text"]),i(d,{text:"\n数字【".concat(s(x),"】\n转换结果：").concat(s(e).formatNumber(s(x)))},null,8,["text"])])),_:1}),i(S,{title:"深拷贝",note:"使用 UTS 实现的深拷贝方法，支持 UTS 的标准内置类型（不包括 Element、Math、Promise、Console 等对象）和自定义类型复制，在 Web 端还支持一些 JS 内置对象，如 Blob、File、URL。对于不支持的对象，将返回源数据。复制大量数据时性能高于 JSON 序列化。"},{default:u((()=>[i(d,{text:"原始对象：".concat(UTS.JSON.stringify(s(m)),"\n浅拷贝对象：").concat(UTS.JSON.stringify(s(p)),"\n深拷贝对象：").concat(UTS.JSON.stringify(s(f)),"\n\n")},null,8,["text"]),i(U,{type:"primary",text:"修改原始数据的属性 a",onClick:N})])),_:1}),i(S,{title:"数组洗牌",note:"使用 Fisher–Yates 算法对数组进行洗牌，打乱数组的顺序。"},{default:u((()=>[i(d,{text:"原始数据：".concat(UTS.JSON.stringify(s(b)),"\n打乱后数据：").concat(UTS.JSON.stringify(s(y)),"\n\n")},null,8,["text"]),i(U,{type:"primary",text:"打乱顺序",onClick:l[0]||(l[0]=(t=null)=>y.value=s(e).shuffle(s(e).deepClone(s(b))))})])),_:1}),i(S,{title:"节流函数",note:"创建一个节流函数，指定的时间内多次执行，只执行第一次调用"},{default:u((()=>[i(d,{text:"cnt: ".concat(s(_),"\n\n")},null,8,["text"]),i(U,{type:"primary",text:"每 1s 只执行一次",onClick:l[1]||(l[1]=(t=null)=>s(e).throttle((()=>{_.value++}),1e3))})])),_:1}),i(S,{title:"防抖函数",note:"创建一个防抖函数，指定的时间运行多次，将重新计时，并只执行最后一次调用"},{default:u((()=>[i(d,{text:"cnt: ".concat(s(v))},null,8,["text"]),i(d,{text:"result: ".concat(s(g),"\n\n")},null,8,["text"]),i(U,{type:"primary",text:"延时 1s 执行最后一次调用",onClick:l[2]||(l[2]=(t=null)=>(v.value++,void e.debounce((()=>{g.value=v.value}),1e3)))})])),_:1}),i(S,{title:"是否为 Number 类型",note:"检查输入的值是否为 Number 类型。"},{default:u((()=>[i(d,{text:"数据【".concat(s(h),"】\n校验结果：").concat(s(e).isNumber(s(h)))},null,8,["text"]),i(d,{text:"\n数据【'".concat(s(C),"'】\n校验结果：").concat(s(e).isNumber(s(C)))},null,8,["text"]),i(d,{text:"\n数据【".concat(s(w),"】\n校验结果：").concat(s(e).isNumber(s(w)))},null,8,["text"])])),_:1})],64)}}}),St=n({__name:"page-sort",setup(e){const n=l.utils,x=d([0]),m=d(0),v=d(100),g=d([new p({id:"bubble",text:"冒泡排序"}),new p({id:"insert",text:"插入排序"}),new p({id:"select",text:"选择排序"}),new p({id:"quick",text:"快速排序"}),new p({id:"shell",text:"希尔排序"}),new p({id:"heap",text:"堆排序"}),new p({id:"merge",text:"归并排序"}),new p({id:"bucket",text:"桶排序"})]),h=d(null),C=f((()=>UTS.JSON.stringify(x.value)));function w(){x.value=[];for(let t=0;t<v.value;t++)x.value.push(n.randint(0,1e3))}return b((()=>{w()})),(e=null,d=null)=>{const p=k(a("sn-text"),I),f=k(a("sn-select"),T),b=k(a("sn-form-item"),L),S=k(a("sn-stepper"),A),N=k(a("sn-button"),j),U=k(a("sn-row"),t),D=k(a("com-card"),P),E=k(a("sn-toast"),O);return c(),o(r,null,[i(D,{title:"排序",note:"SinleUI 支持多种排序算法，具体请见文档"},{default:u((()=>[i(p,{class:"word-break-break-all m-b-10",text:s(C),lines:3},null,8,["text"]),i(b,{label:"算法"},{default:u((()=>[i(f,{modelValue:s(m),"onUpdate:modelValue":d[0]||(d[0]=(t=null)=>y(m)?m.value=t:null),width:"200px",data:s(g),onChange:d[1]||(d[1]=(t=null)=>w())},null,8,["modelValue","data"])])),_:1}),i(b,{label:"数据量"},{default:u((()=>[i(S,{modelValue:s(v),"onUpdate:modelValue":d[2]||(d[2]=(t=null)=>y(v)?v.value=t:null),min:10,max:1e4,step:100,onChange:d[3]||(d[3]=(t=null)=>w())},null,8,["modelValue"])])),_:1}),i(U,null,{default:u((()=>[i(N,{type:"primary",level:"second",text:"排序",long:"",onClick:d[4]||(d[4]=(t=null)=>(h.value.configShow(new _({text:"算法运行中",loading:!0})),void n.debounce((()=>{let t=Date.now();switch(m.value){case 0:x.value=n.bubbleSort(x.value);break;case 1:x.value=n.insertionSort(x.value);break;case 2:x.value=n.selectionSort(x.value);break;case 3:x.value=n.quickSort(x.value);break;case 4:x.value=n.shellSort(x.value);break;case 5:x.value=n.heapSort(x.value);break;case 6:x.value=n.mergeSort(x.value);break;case 7:x.value=n.bucketSort(x.value)}h.value.configShow(new _({text:"".concat(g.value[m.value].text," ").concat(v.value," 个数据\n耗时：").concat(Date.now()-t,"ms")}))}),parseInt(l.configs.aniTime.normal))))}),i(N,{class:"m-l-10",type:"error",level:"second",text:"打乱",long:"",onClick:w})])),_:1})])),_:1}),i(E,{ref_key:"toastEle",ref:h},null,512)],64)}}}),Nt=n({__name:"page-permission",setup:t=>(l.utils,d(""),d(""),(t=null,e=null)=>{const n=k(a("com-card"),P);return c(),x(n,{title:"请前往 App 端查看"})})}),Ut=D(n({__name:"sn-utils",setup(t){l.colors;const n=d(0),o=d([0]),r=[new v({id:"text",text:"文本类"}),new v({id:"verify",text:"校验类"}),new v({id:"os",text:"系统类"}),new v({id:"platform",text:"平台类"}),new v({id:"random",text:"随机类"}),new v({id:"other",text:"其他类"}),new v({id:"sort",text:"排序类"}),new v({id:"permission",text:"权限类"})];function m(t){o.value.includes(t)||o.value.push(t)}return w((t=>{let e=t.page;if(null!=e){let t=r.findIndex((t=>t.id=="".concat(e)));t=-1==t?0:t,m(t),n.value=t}})),(t=null,d=null)=>{const p=k(a("sn-topbar"),e),f=k(a("sn-tabs"),S),b=k(a("sn-gap"),N),_=C,v=k(a("sn-page"),U);return c(),x(v,null,{default:u((()=>[i(p,{title:"Utils 工具库"}),i(f,{modelValue:s(n),"onUpdate:modelValue":d[0]||(d[0]=(t=null)=>y(n)?n.value=t:null),scrollable:"",bgColor:"$page",data:r,onChange:m,customStyle:{position:"fixed",zIndex:1,top:s(l).configs.page.topbarHeight}},null,8,["modelValue","customStyle"]),i(b,{height:"40px"}),s(o).includes(0)?(c(),x(_,{key:0,style:g({visibility:0==s(n)?"visible":"hidden",height:0==s(n)?"":"0"})},{default:u((()=>[i(s(M))])),_:1},8,["style"])):h("",!0),s(o).includes(1)?(c(),x(_,{key:1,style:g({visibility:1==s(n)?"visible":"hidden",height:1==s(n)?"":"0"})},{default:u((()=>[i(s(gt))])),_:1},8,["style"])):h("",!0),s(o).includes(2)?(c(),x(_,{key:2,style:g({visibility:2==s(n)?"visible":"hidden",height:2==s(n)?"":"0"})},{default:u((()=>[i(s(ht))])),_:1},8,["style"])):h("",!0),s(o).includes(3)?(c(),x(_,{key:3,style:g({visibility:3==s(n)?"visible":"hidden",height:3==s(n)?"":"0"})},{default:u((()=>[i(s(Ct))])),_:1},8,["style"])):h("",!0),s(o).includes(4)?(c(),x(_,{key:4,style:g({visibility:4==s(n)?"visible":"hidden",height:4==s(n)?"":"0"})},{default:u((()=>[i(s(kt))])),_:1},8,["style"])):h("",!0),s(o).includes(5)?(c(),x(_,{key:5,style:g({visibility:5==s(n)?"visible":"hidden",height:5==s(n)?"":"0"})},{default:u((()=>[i(s(wt))])),_:1},8,["style"])):h("",!0),s(o).includes(6)?(c(),x(_,{key:6,style:g({visibility:6==s(n)?"visible":"hidden",height:6==s(n)?"":"0"})},{default:u((()=>[i(s(St))])),_:1},8,["style"])):h("",!0),s(o).includes(7)?(c(),x(_,{key:7,style:g({visibility:7==s(n)?"visible":"hidden",height:7==s(n)?"":"0"})},{default:u((()=>[i(s(Nt))])),_:1},8,["style"])):h("",!0)])),_:1})}}}),[["__scopeId","data-v-11cbc880"]]);export{Ut as default};
