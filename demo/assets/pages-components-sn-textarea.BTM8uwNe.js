import{_ as l,a as e}from"./sn-topbar.CX0rMkKy.js";import{d as o,r as a,b as r,o as u,e as n,f as d,g as t,u as s,i}from"./index-DNTc1GxZ.js";import{$ as p,r as c}from"./uni-app.es.D9ZkitmT.js";import{b as m,c as b}from"./sn-button.BaZjRh9m.js";import{_ as V}from"./sn-textarea.ChcvKGbD.js";import{_ as f}from"./com-card.22LSjaaf.js";import{_ as g}from"./sn-switch.C3UtPu7N.js";import{_ as C}from"./sn-card.CoN-VMsc.js";import{_ as v}from"./sn-page.CEVOSUw5.js";import"./sn-avatar.D5ncvlvA.js";const x=b(o({__name:"sn-textarea",setup(o){const b=p.colors,x=a(!1),_=a(""),h=a(""),U=a(""),B=a(""),j=a(""),R=a(""),w=a(""),z=a(""),y=a("");a("");const P=a("");return(o=null,a=null)=>{const k=c(r("sn-topbar"),l),q=c(r("sn-text"),m),F=c(r("sn-textarea"),V),H=c(r("com-card"),f),I=c(r("sn-switch"),g),L=c(r("sn-row"),e),S=c(r("sn-card"),C),T=c(r("sn-page"),v);return u(),n(T,null,{default:d((()=>[t(k,{title:"Textarea 文本域"}),t(H,{title:"基础用法",note:"普普通通的文本域"},{default:d((()=>[t(q,{class:"introduction",text:"　　"}),t(F,{modelValue:s(_),"onUpdate:modelValue":a[0]||(a[0]=(l=null)=>i(_)?_.value=l:null)},null,8,["modelValue"])])),_:1}),t(H,{title:"提示文字",note:"为文本域添加提示文字，让用户更懂你的意图"},{default:d((()=>[t(F,{modelValue:s(h),"onUpdate:modelValue":a[1]||(a[1]=(l=null)=>i(h)?h.value=l:null),class:"spacing",placeholder:"带有placeholder的文本域"},null,8,["modelValue"]),t(F,{modelValue:s(h),"onUpdate:modelValue":a[2]||(a[2]=(l=null)=>i(h)?h.value=l:null),placeholder:"自定义placeholder的样式",placeholderStyle:"color: black"},null,8,["modelValue"])])),_:1}),t(H,{title:"自动增高",note:"自动增高的文本域，自由根据用户需求变化"},{default:d((()=>[t(F,{modelValue:s(U),"onUpdate:modelValue":a[3]||(a[3]=(l=null)=>i(U)?U.value=l:null),placeholder:"自动增高",autoHeight:""},null,8,["modelValue"])])),_:1}),t(H,{title:"圆角",note:"自定义文本域的圆角，更具特色"},{default:d((()=>[t(F,{modelValue:s(B),"onUpdate:modelValue":a[4]||(a[4]=(l=null)=>i(B)?B.value=l:null),class:"spacing",placeholder:"方形","border-radius":"0px"},null,8,["modelValue"]),t(F,{modelValue:s(B),"onUpdate:modelValue":a[5]||(a[5]=(l=null)=>i(B)?B.value=l:null),placeholder:"异形","border-radius":"15px 0 15px 0"},null,8,["modelValue"])])),_:1}),t(H,{title:"颜色",note:"文本域的各种颜色，由你决定"},{default:d((()=>[t(F,{modelValue:s(j),"onUpdate:modelValue":a[6]||(a[6]=(l=null)=>i(j)?j.value=l:null),placeholder:"自定义颜色",borderRadius:"15px",bgColor:s(b).info,borderColor:s(b).info,textColor:"#35b571",activeBorderColor:"#35b571",cursorColor:"#35b571"},null,8,["modelValue","bgColor","borderColor"])])),_:1}),t(H,{title:"边框",note:"当默认的边框太过突兀时，可以取消边框的显示"},{default:d((()=>[t(F,{modelValue:s(R),"onUpdate:modelValue":a[7]||(a[7]=(l=null)=>i(R)?R.value=l:null),class:"spacing",placeholder:"无边框",borderRadius:"15px",bgColor:s(b).info,activeBgColor:s(b).info,"border-color":"transparent"},null,8,["modelValue","bgColor","activeBgColor"]),t(F,{modelValue:s(R),"onUpdate:modelValue":a[8]||(a[8]=(l=null)=>i(R)?R.value=l:null),class:"spacing",placeholder:"无焦点边框","border-radius":"15px",bgColor:s(b).info,activeBgColor:s(b).info,activeBorder:!1},null,8,["modelValue","bgColor","activeBgColor"]),t(F,{modelValue:s(R),"onUpdate:modelValue":a[9]||(a[9]=(l=null)=>i(R)?R.value=l:null),class:"spacing",placeholder:"完全无边框",borderRadius:"15px",bgColor:s(b).info,activeBgColor:s(b).info,borderColor:"transparent",activeBorder:!1},null,8,["modelValue","bgColor","activeBgColor"])])),_:1}),t(H,{title:"上推界面",note:"用于确定键盘弹起时是否自动上推页面，默认开启"},{default:d((()=>[t(F,{modelValue:s(w),"onUpdate:modelValue":a[10]||(a[10]=(l=null)=>i(w)?w.value=l:null),adjustPosition:!1,placeholder:"禁用自动上推界面",borderRadius:"15px",bgColor:s(b).info,borderColor:s(b).info},null,8,["modelValue","bgColor","borderColor"])])),_:1}),t(H,{title:"焦点",note:"文本域也可以自由控制焦点"},{default:d((()=>[t(S,null,{default:d((()=>[t(L,{justify:"space-between"},{default:d((()=>[t(q,{text:"获得焦点",size:"".concat(s(p).utils.getPx(s(p).configs.font.size(3))+1,"px")},null,8,["size"]),t(I,{modelValue:s(x),"onUpdate:modelValue":a[11]||(a[11]=(l=null)=>i(x)?x.value=l:null)},null,8,["modelValue"])])),_:1})])),_:1}),t(F,{modelValue:s(z),"onUpdate:modelValue":a[12]||(a[12]=(l=null)=>i(z)?z.value=l:null),placeholder:"自由控制焦点",borderRadius:"15px",bgColor:s(b).info,borderColor:s(b).info,focus:s(x),onFocus:a[13]||(a[13]=(l=null)=>x.value=!0),onBlur:a[14]||(a[14]=(l=null)=>x.value=!1)},null,8,["modelValue","bgColor","borderColor","focus"])])),_:1}),t(H,{title:"禁用",note:"禁用文本域，也许能让有些人闭嘴"},{default:d((()=>[t(F,{modelValue:s(y),"onUpdate:modelValue":a[15]||(a[15]=(l=null)=>i(y)?y.value=l:null),placeholder:"禁用","border-radius":"15px",bgColor:s(b).info,"border-color":"transparent",disabled:""},null,8,["modelValue","bgColor"])])),_:1}),t(H,{title:"最大输入长度",note:"限制字数的工具，默认设为-1（不限制）"},{default:d((()=>[t(F,{modelValue:s(P),"onUpdate:modelValue":a[16]||(a[16]=(l=null)=>i(P)?P.value=l:null),class:"spacing",placeholder:"限制100字",borderRadius:"15px",maxlength:100},null,8,["modelValue"]),t(F,{modelValue:s(P),"onUpdate:modelValue":a[17]||(a[17]=(l=null)=>i(P)?P.value=l:null),placeholder:"限制100字 (自定义计字器样式) ",borderRadius:"15px",bgColor:s(b).info,borderColor:s(b).info,activeBgColor:s(b).info,counterBgColor:s(b).front,counterColor:s(b).text,maxlength:100},null,8,["modelValue","bgColor","borderColor","activeBgColor","counterBgColor","counterColor"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-94503d15"]]);export{x as default};