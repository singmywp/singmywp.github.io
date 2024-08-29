import{_ as t,a}from"./sn-topbar.CX0rMkKy.js";import{d as e,r as l,c as o,b as r,o as n,e as s,f as i,g as d,u as f}from"./index-DNTc1GxZ.js";import{$ as u,r as p,a as c}from"./uni-app.es.D9ZkitmT.js";import{b as _,a as m,_ as x,c as g}from"./sn-button.BaZjRh9m.js";import{_ as b}from"./sn-card.CoN-VMsc.js";import{_ as C}from"./com-card.22LSjaaf.js";import{_ as h}from"./sn-avatar.D5ncvlvA.js";import{_ as v}from"./sn-page.CEVOSUw5.js";const j=g(e({__name:"sn-card",setup(e){const g=u.colors,j=l(!1),y=l(!1),I=o((()=>u.configs.app.theme));return(e=null,l=null)=>{const o=p(r("sn-topbar"),t),u=p(r("sn-text"),_),k=p(r("sn-card"),b),w=p(r("com-card"),C),U=p(r("sn-avatar"),h),z=p(r("sn-icon"),m),A=p(r("sn-button"),x),B=p(r("sn-row"),a),D=p(r("sn-page"),v);return n(),s(D,null,{default:i((()=>[d(o,{title:"Card 卡片"}),d(w,{title:"基础用法",note:"卡片的基础用法"},{default:i((()=>[d(k,{title:"卡片"},{default:i((()=>[d(u,{text:"卡片内容"})])),_:1})])),_:1}),d(w,{title:"边距",note:"随意调整外边距和内边距"},{default:i((()=>[d(k,{title:"卡片",margin:"20px",padding:"20px"},{default:i((()=>[d(u,{text:"卡片内容"})])),_:1})])),_:1}),d(w,{title:"边框",note:"也可以没有边界感的 (bush"},{default:i((()=>[d(k,{title:"卡片",border:"none"},{default:i((()=>[d(u,{text:"卡片内容"})])),_:1})])),_:1}),d(w,{title:"头像",note:"来人，上图！"},{default:i((()=>[d(k,{title:"李白",avatarConfig:new c({src:"https://t12.baidu.com/it/u=533746497,229309018&fm=30&app=106&f=JPEG?w=640&h=960&s=9A34C305C453C7C41818E1C9030060B3",imageMode:"aspectFill"})},{default:i((()=>[d(u,{text:"　　李白，字太白，号青莲居士。唐朝伟大的浪漫主义诗人。\n　　为人爽朗大方，乐于交友，爱好饮酒作诗，名列“酒中八仙” 。后世誉为“诗仙”，与诗圣杜甫并称“李杜”。"})])),_:1},8,["avatarConfig"])])),_:1}),d(w,{title:"圆角",note:"自定义圆角边框，显示更出彩"},{default:i((()=>[d(k,{title:"卡片",borderRadius:"100px",padding:"10px 30px"},{default:i((()=>[d(u,{text:"卡片内容"})])),_:1})])),_:1}),d(w,{title:"无标题",note:"没有标题，适用于不会总结的懒人，比如我"},{default:i((()=>[d(k,null,{default:i((()=>[d(u,{text:"卡片内容"})])),_:1})])),_:1}),d(w,{title:"章节标符",note:"也许是锦上添花吧"},{default:i((()=>[d(k,{title:"SinleUI",sectionColor:"#5777ff",section:""},{default:i((()=>[d(u,{text:"　　一个简洁、轻巧的现代移动应用UI框架。"})])),_:1})])),_:1}),d(w,{title:"自定义样式",note:"当你想要插入一段信息而担忧影响总体观感时，不妨试试自定义样式"},{default:i((()=>[d(k,{title:"艾伦·图灵",bgColor:"light"==f(I)?"#f9f9fa":"#2b2b2b",border:"none",borderRadius:"10px",padding:"20px 20px 10px 20px"},{default:i((()=>[d(u,{class:"paragraph",selectable:"",text:"　　艾伦·图灵于1912年6月23日出生于英国伦敦，是英国著名的数学家、逻辑学家，被称为计算机科学之父、人工智能之父。\n　　图灵的贡献举世瞩目。他是一位极富创造力的科学家，对计算机事业的发展做出了重要的贡献。然而，他因同性恋倾向而被审判并定以严重猥亵的罪名，遭到的迫害使得他的职业生涯尽毁。1954年，他吃下含有氰化物的苹果中毒身亡，年仅42岁。\n　　随着时间的推移，人们开始重新认图灵和他所经历的不公平对待。\n　　2009年，时任首相戈登·布朗代表英国政府作出正式道歉。2013年，英国女王伊丽莎白二世向图灵追加了“皇家赦免令”"})])),_:1},8,["bgColor"])])),_:1}),d(w,{title:"插槽",note:"插槽分为 avatar, header-extra, default, footer, action"},{default:i((()=>[d(k,{title:"SinleUI",titleFont:"alipuhuiheavy",bgColor:f(g).front},{avatar:i((()=>[d(U,{src:"/static/logo-trans.png"})])),"header-extra":i((()=>[d(B,null,{default:i((()=>[d(A,{round:"",onClick:l[0]||(l[0]=(t=null)=>j.value=!f(j))},{default:i((()=>[d(z,{name:"star-fill",size:"20px",color:f(j)?f(g).warning:f(g).infoDark},null,8,["color"])])),_:1}),d(A,{class:"m-l-5",round:"",onClick:l[1]||(l[1]=(t=null)=>y.value=!f(y))},{default:i((()=>[d(z,{name:"heart-3-fill",size:"20px",color:f(y)?f(g).error:f(g).infoDark},null,8,["color"])])),_:1})])),_:1})])),footer:i((()=>[d(u,{type:"primary",text:"By: Aaron Lan",align:"right"})])),action:i((()=>[d(B,{justify:"right"},{default:i((()=>[d(A,{text:"分享",type:"primary",level:"second"}),d(A,{class:"m-l-5",text:"支持",type:"primary",level:"second"})])),_:1})])),default:i((()=>[d(u,{text:"　　一个简洁、轻巧的现代移动应用UI框架。"})])),_:1},8,["bgColor"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-bb1336ec"]]);export{j as default};
