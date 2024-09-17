import{_ as e}from"./sn-topbar.D5ol6wWa.js";import{d as l,$ as t,r as a,am as o,a as s,o as n,b as r,e as c,f as u,u as i,g as p,h as f,F as m,v as d,j as y,q as g,P as b,Q as k,O as _}from"./index-BDGnenFq.js";import{o as h,r as x}from"./uni-app.es.BfR9KIrQ.js";import{_ as S}from"./sn-alert.YjlOp3ma.js";import{_ as j}from"./com-card.CltZjJtY.js";import{b as v,c as w}from"./sn-button.DCeBN0oM.js";import{_ as C}from"./sn-page.BIWIogO0.js";const O=w(l({__name:"sn-color",setup(l){const w=t.colors,O=t.libs.color,A=a({palette:[],lighten:[],darken:[],mean:[],complement:[],apca:[]});function H(e=null){return O.tinyColor(e)}return h((e=>{let l=["#4f78ff","#f6b142","#39c478","#fc5454"],t=[];for(let c=0;c<l.length;c++)t.push(O.generate(l[c],new o({backgroundColor:w.value.page,theme:"light"})));A.value.palette=t;let a=[],s=[],n=[];for(let o=1;o<=10;o++)a.push(H(l[0]).lighten(10*o).toHexString());A.value.lighten=a;for(let o=1;o<=10;o++)s.push(H(l[2]).darken(10*o).toHexString());A.value.darken=s,A.value.mean=[l[1],O.mean([H(l[1]),H(l[3])]).toHexString(),l[3]];let r=H(l[0]).complement().toHexString();A.value.complement=[new UTSJSONObject({v:l[0],k:Math.trunc(H(l[0]).toHsl().h)}),new UTSJSONObject({v:r,k:Math.trunc(H(r).toHsl().h)})];for(let o=0;o<l.length;o++){let e=H(l[o]).darken(20),t=H(l[Math.abs(l.length-1-o)]).lighten(50);n.push(new UTSJSONObject({textColor:e,bgColor:t,apca:O.calcAPCA(e,t)}))}A.value.apca=n})),(l=null,t=null)=>{const a=x(s("sn-topbar"),e),o=x(s("sn-alert"),S),h=y,w=x(s("com-card"),j),O=x(s("sn-text"),v),U=_,J=x(s("sn-page"),C);return n(),r(J,null,{default:c((()=>[u(a,{title:"Color 颜色库"}),u(o,{type:"primary",text:"SinleUI 颜色处理插件，基于 lime-color 插件",icon:"notification-fill"}),null!=new UTSJSONObject(i(A)).palette?(n(),r(w,{key:0,title:"色板生成演示"},{default:c((()=>[(n(!0),p(m,null,f(i(A).palette,((e,l)=>(n(),r(h,{class:"color-row",key:l},{default:c((()=>[(n(!0),p(m,null,f(e,((e,l)=>(n(),r(h,{class:"color",key:l,style:g({background:e})},null,8,["style"])))),128))])),_:2},1024)))),128))])),_:1})):d("",!0),u(w,{title:"颜色操作演示"},{default:c((()=>[u(O,{type:"info",text:"lighten 淡化"}),null!=i(A).lighten?(n(),r(h,{key:0,class:"color-row"},{default:c((()=>[(n(!0),p(m,null,f(i(A).lighten,((e,l)=>(n(),r(h,{class:"color",key:l,style:g({background:e})},null,8,["style"])))),128))])),_:1})):d("",!0),u(O,{type:"info",text:"darken 深化"}),null!=i(A).darken?(n(),r(h,{key:1,class:"color-row"},{default:c((()=>[(n(!0),p(m,null,f(i(A).darken,((e,l)=>(n(),r(h,{class:"color",key:l,style:g({background:e})},null,8,["style"])))),128))])),_:1})):d("",!0),u(O,{type:"info",text:"mean 平均颜色 - 中间项是两边的平均颜色"}),null!=i(A).mean?(n(),r(h,{key:2,class:"color-row"},{default:c((()=>[(n(!0),p(m,null,f(i(A).mean,((e,l)=>(n(),r(h,{class:"color",key:l,style:g({background:e})},{default:c((()=>[u(U,{class:"color-text",style:g({color:H(e).contrasting().toHexString(),fontSize:"14px"})},{default:c((()=>[b(k(H(e).toRgb().r)+","+k(H(e).toRgb().g)+","+k(H(e).toRgb().b),1)])),_:2},1032,["style"])])),_:2},1032,["style"])))),128))])),_:1})):d("",!0),u(O,{type:"info",text:"互补色 - 色相旋转180°得到的颜色"}),null!=i(A).complement?(n(),r(h,{key:3,class:"color-row"},{default:c((()=>[(n(!0),p(m,null,f(i(A).complement,((e,l)=>(n(),r(h,{class:"color",key:l,style:g({background:new UTSJSONObject(e).v})},{default:c((()=>[u(U,{class:"color-text",style:g({color:i(A).complement[Math.abs(l-1)].v})},{default:c((()=>[b("色相 "+k(e.k),1)])),_:2},1032,["style"])])),_:2},1032,["style"])))),128))])),_:1})):d("",!0)])),_:1}),u(w,{title:"APCA 对比度",note:"可访问的感知对比度算法（APCA），基于字形属性、文本与背景的感知亮度差异、环境与上下文等特征进行对比度计算，目标是更接近人眼的实际感受。\\nWCAG 3.0 无障碍标准候选方法之一。\\n由于 WCAG 2.0 对暗黑背景的支持较差，故选用了APCA 作为计算文字-背景颜色对比度的方法。\\n因该项目处于实验阶段，未来可能会进行一定调整。"},{default:c((()=>[u(h,{class:"color-row"},{default:c((()=>[(n(!0),p(m,null,f(i(A).apca,((e,l)=>(n(),r(h,{class:"color",key:l,style:g({background:new UTSJSONObject(e).bgColor})},{default:c((()=>[u(U,{class:"color-text",style:g({color:e.textColor})},{default:c((()=>[b(k(e.apca),1)])),_:2},1032,["style"])])),_:2},1032,["style"])))),128))])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-aeb085c5"]]);export{O as default};