import{a as t,_ as e}from"./sn-topbar.CX0rMkKy.js";import{d as n,b as l,o as a,h as c,g as o,f as i,u,F as s,e as r,r as x,c as d,l as m,i as p,q as b,v as f,k as y}from"./index-DNTc1GxZ.js";import{$ as v,r as _,S as g,t as h,q as C}from"./uni-app.es.D9ZkitmT.js";import{_ as k}from"./sn-tabs.CVuI15vd.js";import{_ as w}from"./sn-gap.B2D2kaQK.js";import{_ as S}from"./sn-page.CEVOSUw5.js";import{b as N,_ as U,c as I}from"./sn-button.BaZjRh9m.js";import{_ as j}from"./com-card.22LSjaaf.js";import{_ as D}from"./sn-select.CSb66Fnx.js";import{_ as P}from"./sn-form-item.iui4qf57.js";import{_ as T}from"./sn-stepper.D3yVS7uF.js";import{_ as L}from"./sn-toast.I0rPCv6N.js";import"./sn-badge.jE1Gx1zd.js";import"./useResize.BiiI_cO4.js";import"./sn-alert.BVqfDC3L.js";import"./sn-line.BJRaATTn.js";import"./sn-input.ojC213jP.js";const O="文本一😁abcd",A="　　　　　　   　",V="😄😃🤣😂😁Abcd文字",q="sinle-ui-text",E="sinleUiText",F="124569655868.16",J="13700001234",Q="066-66668888",R="131124198508122256",H="sinleui@sinleui.com",K="6217006666666666111",W="1234567890",B="-1234567890",z="2123456765568.5556",G=n({__name:"page-text",setup(t){const e=v.utils;return(t=null,n=null)=>{const r=_(l("sn-text"),N),x=_(l("com-card"),j);return a(),c(s,null,[o(x,{title:"是否为空文本",note:"判断字符串是否为空（自动去除空格）"},{default:i((()=>[o(r,{text:"文本【".concat(O,"】  是否为空：").concat(u(e).isEmpty(O))},null,8,["text"]),o(r,{text:"文本【".concat(A,"】  是否为空：").concat(u(e).isEmpty(A))},null,8,["text"])])),_:1}),o(x,{title:"计算文本字数",note:"计算文本字数。使用 emoji-regex 库，能够正确计算表情符号的数量。"},{default:i((()=>[o(r,{text:"文本【".concat(V,"】  字数：").concat(u(e).len(V))},null,8,["text"])])),_:1}),o(x,{title:"Kebab命名法转小驼峰命名法",note:"将Kebab命名法的文本转为小驼峰命名法"},{default:i((()=>[o(r,{text:"文本【".concat(q,"】\n转换结果：").concat(u(e).kebabCaseToCamelCase(q))},null,8,["text"])])),_:1}),o(x,{title:"小驼峰命名法转Kebab命名法",note:"将小驼峰命名法的文本转为Kebab命名法"},{default:i((()=>[o(r,{text:"文本【".concat(E,"】\n转换结果：").concat(u(e).camelCaseToKebabCase(E))},null,8,["text"])])),_:1}),o(x,{title:"数字转大写金额",note:"将阿拉伯数字转换为中文大写金额。"},{default:i((()=>[o(r,{text:"文本【".concat(F,"】\n转换结果：").concat(u(e).numToUpper(F))},null,8,["text"])])),_:1}),o(x,{title:"姓名脱敏",note:"为姓名脱敏。"},{default:i((()=>[o(r,{text:"文本【".concat("张三","】\t转换结果：").concat(u(e).encryptName("张三"))},null,8,["text"]),o(r,{text:"文本【".concat("李二狗","】\t转换结果：").concat(u(e).encryptName("李二狗"))},null,8,["text"]),o(r,{text:"文本【".concat("慕容京诸葛","】\t转换结果：").concat(u(e).encryptName("慕容京诸葛"))},null,8,["text"])])),_:1}),o(x,{title:"电话号码脱敏",note:"为电话号码脱敏。支持 11 位手机号码和座机号码。"},{default:i((()=>[o(r,{text:"文本【".concat(J,"】\t转换结果：").concat(u(e).encryptPhone(J))},null,8,["text"]),o(r,{text:"文本【".concat("10086","】\t转换结果：").concat(u(e).encryptPhone("10086"))},null,8,["text"]),o(r,{text:"文本【".concat(Q,"】\t转换结果：").concat(u(e).encryptPhone(Q))},null,8,["text"])])),_:1}),o(x,{title:"身份证号脱敏",note:"为身份证号脱敏。隐藏中间的11位数字，只保留前3位和后4位。\\n（身份证号来源： 公安部网站）"},{default:i((()=>[o(r,{text:"文本【".concat(R,"】\n转换结果：").concat(u(e).encryptIDCard(R))},null,8,["text"])])),_:1}),o(x,{title:"邮箱脱敏",note:"为邮箱邮箱。隐藏用户名的一部分。"},{default:i((()=>[o(r,{text:"文本【".concat(H,"】\n转换结果：").concat(u(e).encryptEmail(H))},null,8,["text"])])),_:1}),o(x,{title:"银行卡号脱敏",note:"为银行卡号脱敏，隐藏中间的部分数字，只保留前3位和后4位。"},{default:i((()=>[o(r,{text:"文本【".concat(K,"】\n转换结果：").concat(u(e).encryptBankCard(K))},null,8,["text"])])),_:1}),o(x,{title:"分割数字",note:"将数字字符串格式化为带有指定分隔符的格式，例如每三位数字后加一个逗号。"},{default:i((()=>[o(r,{text:"文本【".concat(W,"】\n转换结果：").concat(u(e).separateNumber(W))},null,8,["text"]),o(r,{text:"文本【".concat(B,"】\n转换结果：").concat(u(e).separateNumber(B,4))},null,8,["text"]),o(r,{text:"文本【".concat(z,"】\n转换结果：").concat(u(e).separateNumber(z,3,"|"))},null,8,["text"])])),_:1})],64)}}}),X="2023-01-01",M="http://www.example.com",Y="https://www.baidu.com/s?ie=utf-8&wd=SinleUI",$="ftp://example:example",Z="not a URL",tt="1515.14",et="土地平旷AND屋舍俨然",nt="12345abc@test.com",lt="0000test.com",at="13523456789",ct="10000000000",ot="027-62039999",it="123456789000",ut="1445645789",st="2400:da00::6666",rt="2001:da8:208:10::6",xt="101.470.215.442",dt="180.76.76.76",mt="41048219911004595X",pt="350783199003058516",bt="41272219801215771X",ft="/static/sub/com.jpeg",yt="not a valid car number",vt=n({__name:"page-verify",setup(t){const e=v.utils,n=new Date,r=NaN,x=1/0;return(t=null,d=null)=>{const m=_(l("sn-text"),N),p=_(l("com-card"),j);return a(),c(s,null,[o(p,{title:"是否为日期",note:"验证输入的值是否为有效的日期。\\n如果传入Date构造器的参数字符串不合法，在web平台会抛出 Invalid Date 异常；在Android/IOS平台，会转换为程序执行时的时间"},{default:i((()=>[o(m,{text:"数据【".concat(X,"】  校验结果：").concat(u(e).isDate(X))},null,8,["text"]),o(m,{text:"数据【".concat("非日期文本","】  校验结果：").concat(u(e).isDate("非日期文本"))},null,8,["text"]),o(m,{text:"数据【".concat(u(n),"】  校验结果：").concat(u(e).isDate(u(n)))},null,8,["text"])])),_:1}),o(p,{title:"是否为URL",note:"验证输入的字符串是否为有效的URL。"},{default:i((()=>[o(m,{text:"数据【".concat(M,"】\n校验结果：").concat(u(e).isURL(M))},null,8,["text"]),o(m,{text:"数据【".concat(Y,"】\n校验结果：").concat(u(e).isURL(Y))},null,8,["text"]),o(m,{text:"数据【".concat($,"】\n校验结果：").concat(u(e).isURL($))},null,8,["text"]),o(m,{text:"数据【".concat(Z,"】\n校验结果：").concat(u(e).isURL(Z))},null,8,["text"])])),_:1}),o(p,{title:"是否为数字",note:"验证输入的字符串是否为有效的数字。"},{default:i((()=>[o(m,{text:"数据【".concat("12345","】校验结果：").concat(u(e).isNumberString("12345"))},null,8,["text"]),o(m,{text:"数据【".concat(tt,"】校验结果：").concat(u(e).isNumberString(tt))},null,8,["text"]),o(m,{text:"数据【".concat("-145.7452","】校验结果：").concat(u(e).isNumberString("-145.7452"))},null,8,["text"]),o(m,{text:"数据【".concat("x+y=10","】校验结果：").concat(u(e).isNumberString("x+y=10"))},null,8,["text"])])),_:1}),o(p,{title:"是否为字母",note:"验证输入的字符串是否为有效的字母。"},{default:i((()=>[o(m,{text:"数据【".concat("abcdEFG","】校验结果：").concat(u(e).isAbc("abcdEFG"))},null,8,["text"])])),_:1}),o(p,{title:"是否为中文",note:"验证输入的字符串是否为有效的中文。"},{default:i((()=>[o(m,{text:"数据【".concat("天地玄黄","】校验结果：").concat(u(e).isChinese("天地玄黄"))},null,8,["text"]),o(m,{text:"数据【".concat(et,"】校验结果：").concat(u(e).isChinese(et))},null,8,["text"])])),_:1}),o(p,{title:"是否为邮箱",note:"验证输入的字符串是否为有效的邮箱地址。"},{default:i((()=>[o(m,{text:"数据【".concat(nt,"】校验结果：").concat(u(e).isEmail(nt))},null,8,["text"]),o(m,{text:"数据【".concat(lt,"】校验结果：").concat(u(e).isEmail(lt))},null,8,["text"])])),_:1}),o(p,{title:"是否为手机号",note:"验证输入的字符串是否为有效的手机号。"},{default:i((()=>[o(m,{text:"数据【".concat(at,"】校验结果：").concat(u(e).isPhone(at))},null,8,["text"]),o(m,{text:"数据【".concat(ct,"】校验结果：").concat(u(e).isPhone(ct))},null,8,["text"])])),_:1}),o(p,{title:"是否为座机号",note:"验证输入的字符串是否为有效的座机号。"},{default:i((()=>[o(m,{text:"数据【".concat(ot,"】校验结果：").concat(u(e).isLandline(ot))},null,8,["text"]),o(m,{text:"数据【".concat(it,"】校验结果：").concat(u(e).isLandline(it))},null,8,["text"])])),_:1}),o(p,{title:"是否为QQ号",note:"验证输入的字符串是否为有效的QQ号。"},{default:i((()=>[o(m,{text:"数据【".concat("10000","】校验结果：").concat(u(e).isQQNumber("10000"))},null,8,["text"]),o(m,{text:"数据【".concat(ut,"】校验结果：").concat(u(e).isQQNumber(ut))},null,8,["text"])])),_:1}),o(p,{title:"是否为IPv6",note:"验证输入的字符串是否为有效的IPv6地址。"},{default:i((()=>[o(m,{text:"数据【".concat(st,"】校验结果：").concat(u(e).isIPv6(st))},null,8,["text"]),o(m,{text:"数据【".concat(rt,"】校验结果：").concat(u(e).isIPv6(rt))},null,8,["text"]),o(m,{text:"数据【".concat(xt,"】校验结果：").concat(u(e).isIPv6(xt))},null,8,["text"])])),_:1}),o(p,{title:"是否为IPv4",note:"验证输入的字符串是否为有效的IPv4地址。"},{default:i((()=>[o(m,{text:"数据【".concat(xt,"】校验结果：").concat(u(e).isIPv4(xt))},null,8,["text"]),o(m,{text:"数据【".concat(dt,"】校验结果：").concat(u(e).isIPv4(dt))},null,8,["text"]),o(m,{text:"数据【".concat(st,"】校验结果：").concat(u(e).isIPv4(st))},null,8,["text"])])),_:1}),o(p,{title:"是否为第二代公民身份号码",note:"验证输入的字符串是否为有效的中华人民共和国居民身份证（第二代）号码。自动计算身份证校验码是否正确。\\n（身份证号来源：公安部网站）"},{default:i((()=>[o(m,{text:"数据【".concat(mt,"】校验结果：").concat(u(e).isIDCard(mt))},null,8,["text"]),o(m,{text:"数据【".concat(pt,"】校验结果：").concat(u(e).isIDCard(pt))},null,8,["text"]),o(m,{text:"数据【".concat(bt,"】校验结果：").concat(u(e).isIDCard(bt))},null,8,["text"])])),_:1}),o(p,{title:"是否为图片文件",note:"验证输入的字符串是否为有效的图片文件名。"},{default:i((()=>[o(m,{text:"数据【".concat(ft,"】校验结果：").concat(u(e).isImage(ft))},null,8,["text"])])),_:1}),o(p,{title:"是否为视频文件",note:"验证输入的字符串是否为有效的视频文件名。"},{default:i((()=>[o(m,{text:"数据【".concat("视频1.m3u8","】校验结果：").concat(u(e).isVideo("视频1.m3u8"))},null,8,["text"])])),_:1}),o(p,{title:"是否为车牌号码",note:"验证输入的字符串是否为有效的中华人民共和国车辆牌照号码。"},{default:i((()=>[o(m,{text:"数据【".concat("京A12345","】校验结果：").concat(u(e).isCarNumber("京A12345"))},null,8,["text"]),o(m,{text:"数据【".concat("渝A000124","】校验结果：").concat(u(e).isCarNumber("渝A000124"))},null,8,["text"]),o(m,{text:"数据【".concat(yt,"】校验结果：").concat(u(e).isCarNumber(yt))},null,8,["text"])])),_:1}),o(p,{title:"是否为整数",note:"验证输入的数字是否为整数。"},{default:i((()=>[o(m,{text:"数据【".concat(3,"】校验结果：").concat(u(e).isInteger(3))},null,8,["text"]),o(m,{text:"数据【".concat(66.41,"】校验结果：").concat(u(e).isInteger(66.41))},null,8,["text"]),o(m,{text:"数据【".concat(u(r),"】校验结果：").concat(u(e).isInteger(u(r)))},null,8,["text"]),o(m,{text:"数据【".concat(u(x),"】校验结果：").concat(u(e).isInteger(u(x)))},null,8,["text"])])),_:1}),o(p,{title:"是否为小数",note:"验证输入的数字是否为小数。"},{default:i((()=>[o(m,{text:"数据【".concat(3,"】校验结果：").concat(u(e).isFloat(3))},null,8,["text"]),o(m,{text:"数据【".concat(66.41,"】校验结果：").concat(u(e).isFloat(66.41))},null,8,["text"]),o(m,{text:"数据【".concat(u(r),"】校验结果：").concat(u(e).isFloat(u(r)))},null,8,["text"]),o(m,{text:"数据【".concat(u(x),"】校验结果：").concat(u(e).isFloat(u(x)))},null,8,["text"])])),_:1})],64)}}}),_t=n({__name:"page-os",setup(t){const e=v.utils;return(t=null,n=null)=>{const c=_(l("sn-button"),U),s=_(l("com-card"),j);return a(),r(s,{title:"振动",note:"使振动器产生振动"},{default:i((()=>[o(c,{type:"primary",text:"振动",onClick:n[0]||(n[0]=(t=null)=>u(e).vibrate())})])),_:1})}}}),gt=n({__name:"page-platform",setup(t){const e=v.utils,n=x(""),r=x(""),d=x(0);return(t=null,x=null)=>{const m=_(l("sn-button"),U),p=_(l("com-card"),j),b=_(l("sn-text"),N);return a(),c(s,null,[o(p,{title:"打开链接",note:"使用默认应用打开链接（Url、Schemes等）。Android 必须加上协议，否则会报错。"},{default:i((()=>[o(m,{type:"primary",text:"tel:10086",onClick:x[0]||(x[0]=(t=null)=>u(e).openLink("tel:10086"))}),o(m,{type:"primary",text:"https://www.dcloud.net.cn",onClick:x[1]||(x[1]=(t=null)=>u(e).openLink("https://www.dcloud.net.cn")),style:{"margin-top":"10px"}}),o(m,{type:"primary",text:"mqq://",onClick:x[2]||(x[2]=(t=null)=>u(e).openLink("mqq://")),style:{"margin-top":"10px"}})])),_:1}),o(p,{title:"拨打电话",note:"直接拨打指定的电话号码。"},{default:i((()=>[o(m,{type:"primary",text:"拨打 10086",onClick:x[3]||(x[3]=(t=null)=>u(e).makePhoneCall("10086"))})])),_:1}),o(p,{title:"写入剪切板",note:"将文本写入剪切板。"},{default:i((()=>[o(m,{type:"primary",text:"写入文本: Hello, SinleUI!",onClick:x[4]||(x[4]=(t=null)=>u(e).setClipboardData("Hello, SinleUI!"))})])),_:1}),o(p,{title:"从剪切板读取",note:"从剪切板读取文本数据。"},{default:i((()=>[o(b,{text:"剪切板数据：".concat(u(n))},null,8,["text"]),o(m,{class:"spacing",type:"primary",text:"读取文本",onClick:x[5]||(x[5]=(t=null)=>{e.getClipboardData().then((t=>{n.value=t}))})})])),_:1}),o(p,{title:"显示提示框",note:"在不同平台上显示原生提示框。Android 平台可设置提示框的显示时长和位置。"},{default:i((()=>[o(m,{type:"primary",text:"Toast",onClick:x[6]||(x[6]=(t=null)=>{e.showToast(new UTSJSONObject({title:"Hello, SinleUI!",position:"center"}))})})])),_:1}),o(p,{title:"使用内置全屏Webview打开网址",note:"使用内置全屏 Webview 打开网址。"},{default:i((()=>[o(m,{type:"primary",text:"https://cn.bing.com/",onClick:x[7]||(x[7]=(t=null)=>u(e).viewUrlByWebview("https://cn.bing.com/"))})])),_:1}),o(p,{title:"获取平台主题",note:"获取当前平台的主题设置，包括暗黑模式和浅色模式。"},{default:i((()=>[o(b,{text:"当前平台主题：".concat(u(r))},null,8,["text"]),o(m,{class:"spacing",type:"primary",text:"获取主题",onClick:x[8]||(x[8]=(t=null)=>r.value=u(e).getOsTheme())})])),_:1}),o(p,{title:"获取窗口高度",note:"获取当前窗口的高度，以像素为单位。支持分屏模式。"},{default:i((()=>[o(b,{text:"窗口高度：".concat(u(d))},null,8,["text"]),o(m,{class:"spacing",type:"primary",text:"获取高度",onClick:x[9]||(x[9]=(t=null)=>d.value=u(e).getWindowHeight())})])),_:1})],64)}}}),ht=n({__name:"page-random",setup(t){const e=v.utils,n=v.colors,r=x(e.randint(0,100).toString()),d=x(e.formatNumber(e.randomNumber(5)).toString()),m=x(e.uuid());return(t=null,x=null)=>{const p=_(l("sn-button"),U),b=_(l("com-card"),j);return a(),c(s,null,[o(b,{title:"生成随机整数",note:"生成一个介于最小值和最大值之间的随机整数。"},{default:i((()=>[o(p,{type:"primary",text:"生成 0 ~ 100 之间的随机整数",onClick:x[0]||(x[0]=(t=null)=>r.value=u(e).randint(0,100).toString())}),o(b,{title:u(r),bgColor:u(n).info},null,8,["title","bgColor"])])),_:1}),o(b,{title:"生成指定位数的随机整数",note:"生成一个指定位数的随机整数。"},{default:i((()=>[o(p,{type:"primary",text:"生成 5 位的随机整数",onClick:x[1]||(x[1]=(t=null)=>d.value=u(e).formatNumber(u(e).randomNumber(5)).toString())}),o(b,{title:u(d),bgColor:u(n).info},null,8,["title","bgColor"])])),_:1}),o(b,{title:"生成UUID",note:"生成一个UUID格式的字符串。"},{default:i((()=>[o(p,{type:"primary",text:"生成 UUID",onClick:x[2]||(x[2]=(t=null)=>m.value=u(e).uuid())}),o(b,{title:u(m),bgColor:u(n).info},null,8,["title","bgColor"])])),_:1})],64)}}}),Ct=n({__name:"page-other",setup(t){const e=v.utils,n=x(10),r=x(1201.51),d=x({a:"原始数据",b:2}),m=x(d.value),p=x(e.deepClone(d.value)),b=x([0,1,2,3,4,5,6,7,8,9,10]),f=x(e.shuffle(e.deepClone(b.value))),y=x(0),g=x(0),h=x(0),C=x(156.1),k=x("120"),w=x([0,1,2]),S=x(0);function I(){S.value++,d.value.a="改动数据".concat(S.value)}return(t=null,x=null)=>{const v=_(l("sn-text"),N),S=_(l("com-card"),j),D=_(l("sn-button"),U);return a(),c(s,null,[o(S,{title:"格式化数字",note:"返回给定数字的格式化结果，如果数字为整数，则返回整数部分（例如 12.0 转换为 12）；如果数字为小数，则返回原数字。"},{default:i((()=>[o(v,{text:"数字【".concat(u(n),"】\n转换结果：").concat(u(e).formatNumber(u(n)))},null,8,["text"]),o(v,{text:"\n数字【".concat(u(r),"】\n转换结果：").concat(u(e).formatNumber(u(r)))},null,8,["text"])])),_:1}),o(S,{title:"深拷贝（基础类型）",note:"使用 TypeScript 实现的深拷贝方法。（注意：通过JSON序列化实现，内部不能含有复杂对象和函数）"},{default:i((()=>[o(v,{text:"原始对象：".concat(UTS.JSON.stringify(u(d)),"\n浅拷贝对象：").concat(UTS.JSON.stringify(u(m)),"\n深拷贝对象：").concat(UTS.JSON.stringify(u(p)),"\n\n")},null,8,["text"]),o(D,{type:"primary",text:"修改原始数据的属性 a",onClick:I})])),_:1}),o(S,{title:"数组洗牌",note:"使用 Fisher–Yates 算法对数组进行洗牌，打乱数组的顺序。"},{default:i((()=>[o(v,{text:"原始数据：".concat(UTS.JSON.stringify(u(b)),"\n打乱后数据：").concat(UTS.JSON.stringify(u(f)),"\n\n")},null,8,["text"]),o(D,{type:"primary",text:"打乱顺序",onClick:x[0]||(x[0]=(t=null)=>f.value=u(e).shuffle(u(e).deepClone(u(b))))})])),_:1}),o(S,{title:"节流函数",note:"创建一个节流函数，指定的时间内多次执行，只执行第一次调用"},{default:i((()=>[o(v,{text:"cnt: ".concat(u(y),"\n\n")},null,8,["text"]),o(D,{type:"primary",text:"cnt ++ (每 1s 只允许执行一次)",onClick:x[1]||(x[1]=(t=null)=>u(e).throttle((()=>{y.value++}),1e3))})])),_:1}),o(S,{title:"防抖函数",note:"创建一个防抖函数，指定的时间运行多次，将重新计时，并只执行最后一次调用"},{default:i((()=>[o(v,{text:"cnt: ".concat(u(g))},null,8,["text"]),o(v,{text:"result: ".concat(u(h),"\n\n")},null,8,["text"]),o(D,{type:"primary",text:"result = cnt\n(延时 1s 执行最后一次调用)",onClick:x[2]||(x[2]=(t=null)=>(g.value++,void e.debounce((()=>{h.value=g.value}),1e3)))},null,8,["text"])])),_:1}),o(S,{title:"是否为 Number 类型",note:"检查输入的值是否为 Number 类型。"},{default:i((()=>[o(v,{text:"数据【".concat(u(C),"】\n校验结果：").concat(u(e).isNumber(u(C)))},null,8,["text"]),o(v,{text:"\n数据【'".concat(u(k),"'】\n校验结果：").concat(u(e).isNumber(u(k)))},null,8,["text"]),o(v,{text:"\n数据【".concat(u(w),"】\n校验结果：").concat(u(e).isNumber(u(w)))},null,8,["text"])])),_:1})],64)}}}),kt=n({__name:"page-sort",setup(e){const n=v.utils,r=x([0]),b=x(0),f=x(100),y=x([new g({id:"bubble",text:"冒泡排序"}),new g({id:"insert",text:"插入排序"}),new g({id:"select",text:"选择排序"}),new g({id:"quick",text:"快速排序"}),new g({id:"shell",text:"希尔排序"}),new g({id:"heap",text:"堆排序"}),new g({id:"merge",text:"归并排序"}),new g({id:"bucket",text:"桶排序"})]),C=x(null),k=d((()=>UTS.JSON.stringify(r.value)));function w(){r.value=[];for(let t=0;t<f.value;t++)r.value.push(n.randint(0,1e3))}return m((()=>{w()})),(e=null,x=null)=>{const d=_(l("sn-text"),N),m=_(l("sn-select"),D),g=_(l("sn-form-item"),P),S=_(l("sn-stepper"),T),I=_(l("sn-button"),U),O=_(l("sn-row"),t),A=_(l("com-card"),j),V=_(l("sn-toast"),L);return a(),c(s,null,[o(A,{title:"排序",note:"SinleUI 支持多种排序算法，具体请见文档"},{default:i((()=>[o(d,{class:"word-break-break-all m-b-10",text:u(k),lines:3},null,8,["text"]),o(g,{label:"算法"},{default:i((()=>[o(m,{modelValue:u(b),"onUpdate:modelValue":x[0]||(x[0]=(t=null)=>p(b)?b.value=t:null),width:"200px",data:u(y),onChange:x[1]||(x[1]=(t=null)=>w())},null,8,["modelValue","data"])])),_:1}),o(g,{label:"数据量"},{default:i((()=>[o(S,{modelValue:u(f),"onUpdate:modelValue":x[2]||(x[2]=(t=null)=>p(f)?f.value=t:null),min:10,max:1e4,step:100,onChange:x[3]||(x[3]=(t=null)=>w())},null,8,["modelValue"])])),_:1}),o(O,null,{default:i((()=>[o(I,{type:"primary",level:"second",text:"排序",long:"",onClick:x[4]||(x[4]=(t=null)=>(C.value.configShow(new h({text:"算法运行中",loading:!0})),void n.debounce((()=>{let t=Date.now();switch(b.value){case 0:r.value=n.bubbleSort(r.value);break;case 1:r.value=n.insertionSort(r.value);break;case 2:r.value=n.selectionSort(r.value);break;case 3:r.value=n.quickSort(r.value);break;case 4:r.value=n.shellSort(r.value);break;case 5:r.value=n.heapSort(r.value);break;case 6:r.value=n.mergeSort(r.value);break;case 7:r.value=n.bucketSort(r.value)}C.value.configShow(new h({text:"".concat(y.value[b.value].text," ").concat(f.value," 个数据\n耗时：").concat(Date.now()-t,"ms")}))}),parseInt(v.configs.aniTime.normal))))}),o(I,{class:"m-l-10",type:"error",level:"second",text:"打乱",long:"",onClick:w})])),_:1})])),_:1}),o(V,{ref_key:"toastEle",ref:C},null,512)],64)}}}),wt=I(n({__name:"sn-utils",setup(t){const n=v.colors,c=x(0),s=x([0]),d=[new C({id:"text",text:"文本类"}),new C({id:"verify",text:"校验类"}),new C({id:"os",text:"系统类"}),new C({id:"platform",text:"平台类"}),new C({id:"random",text:"随机类"}),new C({id:"other",text:"其他类"}),new C({id:"sort",text:"排序类"})];function m(t){s.value.includes(t)||s.value.push(t)}return(t=null,x=null)=>{const g=_(l("sn-topbar"),e),h=_(l("sn-tabs"),k),C=_(l("sn-gap"),w),N=y,U=_(l("sn-page"),S);return a(),r(U,null,{default:i((()=>[o(g,{title:"Utils 工具库"}),o(h,{modelValue:u(c),"onUpdate:modelValue":x[0]||(x[0]=(t=null)=>p(c)?c.value=t:null),scrollable:"",data:d,bgColor:u(n).page,onChange:m,customStyle:{position:"fixed",zIndex:1,top:u(v).configs.page.topbarHeight}},null,8,["modelValue","bgColor","customStyle"]),o(C,{height:"40px"}),u(s).includes(0)?(a(),r(N,{key:0,style:b({visibility:0==u(c)?"visible":"hidden",height:0==u(c)?"":"0"})},{default:i((()=>[o(u(G))])),_:1},8,["style"])):f("",!0),u(s).includes(1)?(a(),r(N,{key:1,style:b({visibility:1==u(c)?"visible":"hidden",height:1==u(c)?"":"0"})},{default:i((()=>[o(u(vt))])),_:1},8,["style"])):f("",!0),u(s).includes(2)?(a(),r(N,{key:2,style:b({visibility:2==u(c)?"visible":"hidden",height:2==u(c)?"":"0"})},{default:i((()=>[o(u(_t))])),_:1},8,["style"])):f("",!0),u(s).includes(3)?(a(),r(N,{key:3,style:b({visibility:3==u(c)?"visible":"hidden",height:3==u(c)?"":"0"})},{default:i((()=>[o(u(gt))])),_:1},8,["style"])):f("",!0),u(s).includes(4)?(a(),r(N,{key:4,style:b({visibility:4==u(c)?"visible":"hidden",height:4==u(c)?"":"0"})},{default:i((()=>[o(u(ht))])),_:1},8,["style"])):f("",!0),u(s).includes(5)?(a(),r(N,{key:5,style:b({visibility:5==u(c)?"visible":"hidden",height:5==u(c)?"":"0"})},{default:i((()=>[o(u(Ct))])),_:1},8,["style"])):f("",!0),u(s).includes(6)?(a(),r(N,{key:6,style:b({visibility:6==u(c)?"visible":"hidden",height:6==u(c)?"":"0"})},{default:i((()=>[o(u(kt))])),_:1},8,["style"])):f("",!0)])),_:1})}}}),[["__scopeId","data-v-9882995c"]]);export{wt as default};