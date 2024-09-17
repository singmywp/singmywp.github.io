import{_ as l,a as e}from"./sn-topbar.D5ol6wWa.js";import{d as o,$ as a,r as u,a as n,o as r,b as d,e as t,f as s,u as i,i as p}from"./index-BDGnenFq.js";import{r as c}from"./uni-app.es.BfR9KIrQ.js";import{b as m,c as V}from"./sn-button.DCeBN0oM.js";import{_ as f}from"./sn-textarea.o1oEMCtp.js";import{_ as b}from"./com-card.CltZjJtY.js";import{_ as v}from"./sn-switch.C9OcCgtN.js";import{_ as x}from"./sn-card.Rssccg-A.js";import{_ as g}from"./sn-page.BIWIogO0.js";import"./sn-avatar.BXOU_hdn.js";const _=V(o({__name:"sn-textarea",setup(o){a.colors;const V=u(!1),_=u(""),$=u(""),h=u(""),C=u(""),U=u(""),j=u(""),B=u(""),R=u(""),w=u("");u("");const z=u("");return(o=null,u=null)=>{const y=c(n("sn-topbar"),l),P=c(n("sn-text"),m),k=c(n("sn-textarea"),f),A=c(n("com-card"),b),D=c(n("sn-switch"),v),F=c(n("sn-row"),e),G=c(n("sn-card"),x),H=c(n("sn-page"),g);return r(),d(H,null,{default:t((()=>[s(y,{title:"Textarea 文本域"}),s(A,{title:"基础用法",note:"普普通通的文本域"},{default:t((()=>[s(P,{class:"introduction",text:"　　"}),s(k,{modelValue:i(_),"onUpdate:modelValue":u[0]||(u[0]=(l=null)=>p(_)?_.value=l:null)},null,8,["modelValue"])])),_:1}),s(A,{title:"提示文字",note:"为文本域添加提示文字，让用户更懂你的意图"},{default:t((()=>[s(k,{modelValue:i($),"onUpdate:modelValue":u[1]||(u[1]=(l=null)=>p($)?$.value=l:null),class:"spacing",placeholder:"带有placeholder的文本域"},null,8,["modelValue"]),s(k,{modelValue:i($),"onUpdate:modelValue":u[2]||(u[2]=(l=null)=>p($)?$.value=l:null),placeholder:"自定义placeholder的样式",placeholderStyle:"color: black"},null,8,["modelValue"])])),_:1}),s(A,{title:"自动增高",note:"自动增高的文本域，自由根据用户需求变化"},{default:t((()=>[s(k,{modelValue:i(h),"onUpdate:modelValue":u[3]||(u[3]=(l=null)=>p(h)?h.value=l:null),placeholder:"自动增高",autoHeight:""},null,8,["modelValue"])])),_:1}),s(A,{title:"圆角",note:"自定义文本域的圆角，更具特色"},{default:t((()=>[s(k,{modelValue:i(C),"onUpdate:modelValue":u[4]||(u[4]=(l=null)=>p(C)?C.value=l:null),class:"spacing",placeholder:"方形","border-radius":"0px"},null,8,["modelValue"]),s(k,{modelValue:i(C),"onUpdate:modelValue":u[5]||(u[5]=(l=null)=>p(C)?C.value=l:null),placeholder:"异形","border-radius":"15px 0 15px 0"},null,8,["modelValue"])])),_:1}),s(A,{title:"颜色",note:"文本域的各种颜色，由你决定"},{default:t((()=>[s(k,{modelValue:i(U),"onUpdate:modelValue":u[6]||(u[6]=(l=null)=>p(U)?U.value=l:null),placeholder:"自定义颜色",borderRadius:"15px",bgColor:"$info",borderColor:"$info",textColor:"$success",activeBorderColor:"$success",cursorColor:"$success"},null,8,["modelValue"])])),_:1}),s(A,{title:"边框",note:"当默认的边框太过突兀时，可以取消边框的显示"},{default:t((()=>[s(k,{modelValue:i(j),"onUpdate:modelValue":u[7]||(u[7]=(l=null)=>p(j)?j.value=l:null),class:"spacing",placeholder:"无边框",borderRadius:"15px",bgColor:"$info",activeBgColor:"$info","border-color":"transparent"},null,8,["modelValue"]),s(k,{modelValue:i(j),"onUpdate:modelValue":u[8]||(u[8]=(l=null)=>p(j)?j.value=l:null),class:"spacing",placeholder:"无焦点边框","border-radius":"15px",bgColor:"$info",activeBgColor:"$info",activeBorder:!1},null,8,["modelValue"]),s(k,{modelValue:i(j),"onUpdate:modelValue":u[9]||(u[9]=(l=null)=>p(j)?j.value=l:null),class:"spacing",placeholder:"完全无边框",borderRadius:"15px",bgColor:"$info",activeBgColor:"$info",borderColor:"$transparent",activeBorder:!1},null,8,["modelValue"])])),_:1}),s(A,{title:"上推界面",note:"用于确定键盘弹起时是否自动上推页面，默认开启"},{default:t((()=>[s(k,{modelValue:i(B),"onUpdate:modelValue":u[10]||(u[10]=(l=null)=>p(B)?B.value=l:null),adjustPosition:!1,placeholder:"禁用自动上推界面",borderRadius:"15px",bgColor:"$info",borderColor:"$info"},null,8,["modelValue"])])),_:1}),s(A,{title:"焦点",note:"文本域也可以自由控制焦点"},{default:t((()=>[s(G,null,{default:t((()=>[s(F,{justify:"space-between"},{default:t((()=>[s(P,{text:"获得焦点",size:"".concat(i(a).utils.getPx(i(a).configs.font.size(3))+1,"px")},null,8,["size"]),s(D,{modelValue:i(V),"onUpdate:modelValue":u[11]||(u[11]=(l=null)=>p(V)?V.value=l:null)},null,8,["modelValue"])])),_:1})])),_:1}),s(k,{modelValue:i(R),"onUpdate:modelValue":u[12]||(u[12]=(l=null)=>p(R)?R.value=l:null),placeholder:"自由控制焦点",borderRadius:"15px",bgColor:"$info",borderColor:"$info",focus:i(V),onFocus:u[13]||(u[13]=(l=null)=>V.value=!0),onBlur:u[14]||(u[14]=(l=null)=>V.value=!1)},null,8,["modelValue","focus"])])),_:1}),s(A,{title:"禁用",note:"禁用文本域，也许能让有些人闭嘴"},{default:t((()=>[s(k,{modelValue:i(w),"onUpdate:modelValue":u[15]||(u[15]=(l=null)=>p(w)?w.value=l:null),placeholder:"禁用","border-radius":"15px",bgColor:"$info","border-color":"transparent",disabled:""},null,8,["modelValue"])])),_:1}),s(A,{title:"最大输入长度",note:"限制字数的工具，默认设为-1（不限制）"},{default:t((()=>[s(k,{modelValue:i(z),"onUpdate:modelValue":u[16]||(u[16]=(l=null)=>p(z)?z.value=l:null),class:"spacing",placeholder:"限制100字",borderRadius:"15px",maxlength:100},null,8,["modelValue"]),s(k,{modelValue:i(z),"onUpdate:modelValue":u[17]||(u[17]=(l=null)=>p(z)?z.value=l:null),placeholder:"限制100字 (自定义计字器样式) ",borderRadius:"15px",bgColor:"$info",borderColor:"$info",activeBgColor:"$info",counterBgColor:"$front",counterColor:"$text",maxlength:100},null,8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-a3aec097"]]);export{_ as default};
