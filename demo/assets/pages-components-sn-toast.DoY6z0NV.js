import{_ as l,a as e}from"./sn-topbar.D5ol6wWa.js";import{d as o,$ as a,r as t,S as n,a as u,o as d,b as i,e as s,f as r,u as m,i as p,an as f}from"./index-BDGnenFq.js";import{r as c}from"./uni-app.es.BfR9KIrQ.js";import{_ as V}from"./com-card.CltZjJtY.js";import{_ as x}from"./sn-input.CQs-BOzL.js";import{_}from"./sn-form-item.5AoZzHl5.js";import{_ as v}from"./sn-select.DZA2RrE9.js";import{_ as g}from"./sn-stepper.DswC5NdZ.js";import{_ as b}from"./sn-switch.C9OcCgtN.js";import{_ as j}from"./sn-button.DCeBN0oM.js";import{_ as w}from"./sn-form.uvue_vue_type_script_setup_true_lang.D7WErNjU.js";import{_ as U}from"./sn-gap.DaFvbZ58.js";import{_ as C}from"./sn-toast.D358P9he.js";import{_ as z}from"./sn-page.BIWIogO0.js";import"./sn-alert.YjlOp3ma.js";import"./sn-line.CxWqAnnd.js";const S=o({__name:"sn-toast",setup(o){const S=a.colors,y=t(null),h=t([new n({id:"top",text:"顶部"}),new n({id:"center",text:"居中"}),new n({id:"bottom",text:"底部"})]),A=t([new n({id:"left",text:"居左"}),new n({id:"center",text:"居中"}),new n({id:"right",text:"居右"})]),L=t({text:"这是一条轻提示",position:1,duration:2e3,borderRadius:a.configs.radius.normal,padding:"12px 15px",icon:"",loading:!1,overlay:!1,bgColor:S.value.toast,textSize:a.configs.font.size(2),textColor:"#fff",iconSize:a.configs.font.size(5),iconColor:"#fff",textLines:0,textAlign:1});function R(){y.value.configShow(new f({text:L.value.text,position:h.value[L.value.position].id,duration:L.value.duration,borderRadius:L.value.borderRadius,padding:L.value.padding,icon:L.value.icon,loading:L.value.loading,overlay:L.value.overlay,textSize:L.value.textSize,textColor:L.value.textColor,iconSize:L.value.iconSize,iconColor:L.value.iconColor,textLines:L.value.textLines,textAlign:A.value[L.value.textAlign].id}))}function k(){y.value.close()}function B(l){"run"==l.id&&R(),"close"==l.id&&k()}return(o=null,a=null)=>{const t=c(u("sn-topbar"),l),f=c(u("com-card"),V),S=c(u("sn-input"),x),E=c(u("sn-form-item"),_),$=c(u("sn-select"),v),D=c(u("sn-stepper"),g),H=c(u("sn-switch"),b),J=c(u("sn-button"),j),O=c(u("sn-row"),e),P=c(u("sn-form"),w),T=c(u("sn-gap"),U),W=c(u("sn-toast"),C),q=c(u("sn-page"),z);return d(),i(q,null,{default:s((()=>[r(t,{title:"Toast 轻提示",features:[new n({id:"run",icon:"play-circle-fill"}),new n({id:"close",icon:"close-circle-fill"})],onButtonClick:B}),r(f,{title:"基础用法",note:"很常见的吐司，但可玩性较高。通过 ref 方法使用。\\n提供 15+ 配置属性，支持 props 和方法参数两种配置方法，能够面对绝大部分使用场景。"}),r(f,{title:"使用配置"},{default:s((()=>[r(P,{modelValue:m(L),"onUpdate:modelValue":a[16]||(a[16]=(l=null)=>p(L)?L.value=l:null),showBorder:!1},{default:s((()=>[r(E,{label:"提示文本"},{default:s((()=>[r(S,{modelValue:m(L).text,"onUpdate:modelValue":a[0]||(a[0]=(l=null)=>m(L).text=l)},null,8,["modelValue"])])),_:1}),r(E,{label:"显示位置"},{default:s((()=>[r($,{modelValue:m(L).position,"onUpdate:modelValue":a[1]||(a[1]=(l=null)=>m(L).position=l),data:m(h)},null,8,["modelValue","data"])])),_:1}),r(E,{label:"显示时长"},{default:s((()=>[r(D,{modelValue:m(L).duration,"onUpdate:modelValue":a[2]||(a[2]=(l=null)=>m(L).duration=l),min:500,step:500},null,8,["modelValue"])])),_:1}),r(E,{label:"加载中（强制覆盖图标）"},{default:s((()=>[r(H,{modelValue:m(L).loading,"onUpdate:modelValue":a[3]||(a[3]=(l=null)=>m(L).loading=l)},null,8,["modelValue"])])),_:1}),r(E,{label:"遮罩层（防穿透）"},{default:s((()=>[r(H,{modelValue:m(L).overlay,"onUpdate:modelValue":a[4]||(a[4]=(l=null)=>m(L).overlay=l)},null,8,["modelValue"])])),_:1}),r(E,{label:"内边距"},{default:s((()=>[r(S,{modelValue:m(L).padding,"onUpdate:modelValue":a[5]||(a[5]=(l=null)=>m(L).padding=l)},null,8,["modelValue"])])),_:1}),r(E,{label:"圆角"},{default:s((()=>[r(S,{modelValue:m(L).borderRadius,"onUpdate:modelValue":a[6]||(a[6]=(l=null)=>m(L).borderRadius=l)},null,8,["modelValue"])])),_:1}),r(E,{label:"图标"},{default:s((()=>[r(S,{modelValue:m(L).icon,"onUpdate:modelValue":a[7]||(a[7]=(l=null)=>m(L).icon=l)},null,8,["modelValue"])])),_:1}),r(E,{label:"文本大小"},{default:s((()=>[r(S,{modelValue:m(L).textSize,"onUpdate:modelValue":a[8]||(a[8]=(l=null)=>m(L).textSize=l)},null,8,["modelValue"])])),_:1}),r(E,{label:"文本颜色"},{default:s((()=>[r(S,{modelValue:m(L).textColor,"onUpdate:modelValue":a[9]||(a[9]=(l=null)=>m(L).textColor=l)},null,8,["modelValue"])])),_:1}),r(E,{label:"图标大小"},{default:s((()=>[r(S,{modelValue:m(L).iconSize,"onUpdate:modelValue":a[10]||(a[10]=(l=null)=>m(L).iconSize=l)},null,8,["modelValue"])])),_:1}),r(E,{label:"图标颜色"},{default:s((()=>[r(S,{modelValue:m(L).iconColor,"onUpdate:modelValue":a[11]||(a[11]=(l=null)=>m(L).iconColor=l)},null,8,["modelValue"])])),_:1}),r(E,{label:"文本行数"},{default:s((()=>[r(D,{modelValue:m(L).textLines,"onUpdate:modelValue":a[12]||(a[12]=(l=null)=>m(L).textLines=l),min:0,step:1},null,8,["modelValue"])])),_:1}),r(E,{label:"文本对齐"},{default:s((()=>[r($,{modelValue:m(L).textAlign,"onUpdate:modelValue":a[13]||(a[13]=(l=null)=>m(L).textAlign=l),data:m(A)},null,8,["modelValue","data"])])),_:1}),r(O,null,{default:s((()=>[r(J,{text:"展示",type:"primary",level:"second",long:"",onClick:a[14]||(a[14]=(l=null)=>R())}),r(J,{class:"m-l-10",text:"关闭",type:"error",level:"second",long:"",onClick:a[15]||(a[15]=(l=null)=>k())})])),_:1})])),_:1},8,["modelValue"])])),_:1}),r(T,{height:"100px"}),r(W,{ref_key:"toastEle",ref:y},null,512)])),_:1})}}});export{S as default};