import{_ as l,a as e}from"./sn-topbar.DxKzInQK.js";import{d as o,$ as a,r,l as n,a as d,o as u,b as t,e as s,f as i,u as p,i as c}from"./index-DoInGK9X.js";import{r as m}from"./uni-app.es.K1mZmM8s.js";import{_ as f}from"./sn-input.CG5cj0Ye.js";import{_ as b}from"./com-card.D8_7_rS9.js";import{b as g,a as V,_ as x,c as h}from"./sn-button.B1LvAG78.js";import{_ as $}from"./sn-switch.EAkaUVVB.js";import{_ as C}from"./sn-card.XXADZLUS.js";import{_ as v}from"./sn-view.BKJ7GZxj.js";import{_}from"./sn-page.Nlp4LDKz.js";import"./sn-avatar.NkbIXN8R.js";const U=h(o({__name:"sn-input",setup(o){a.colors;const h=r(!1),U=r(!1),y=r(""),w=r(!0);return n((()=>{w.value=!1})),(o=null,r=null)=>{const n=m(d("sn-topbar"),l),B=m(d("sn-input"),f),j=m(d("com-card"),b),z=m(d("sn-text"),g),R=m(d("sn-switch"),$),A=m(d("sn-row"),e),I=m(d("sn-card"),C),P=m(d("sn-icon"),V),k=m(d("sn-button"),x),D=m(d("sn-view"),v),G=m(d("sn-page"),_);return u(),t(G,null,{default:s((()=>[i(n,{title:"Input 输入框"}),i(D,{loading:p(w)},{default:s((()=>[i(j,{title:"基础用法",note:"普普通通的输入框"},{default:s((()=>[i(B,{modelValue:p(y),"onUpdate:modelValue":r[0]||(r[0]=(l=null)=>c(y)?y.value=l:null)},null,8,["modelValue"])])),_:1}),i(j,{title:"提示文字",note:"为输入框添加提示文字，让用户更懂你的意图"},{default:s((()=>[i(B,{modelValue:p(y),"onUpdate:modelValue":r[1]||(r[1]=(l=null)=>c(y)?y.value=l:null),class:"spacing",placeholder:"带有placeholder的输入框"},null,8,["modelValue"]),i(B,{modelValue:p(y),"onUpdate:modelValue":r[2]||(r[2]=(l=null)=>c(y)?y.value=l:null),class:"spacing",placeholder:"自定义placeholder的样式","placeholder-style":"color: black"},null,8,["modelValue"])])),_:1}),i(j,{title:"圆角",note:"自定义输入框的圆角，更具特色"},{default:s((()=>[i(B,{modelValue:p(y),"onUpdate:modelValue":r[3]||(r[3]=(l=null)=>c(y)?y.value=l:null),class:"spacing",placeholder:"圆形","border-radius":"100px"},null,8,["modelValue"]),i(B,{modelValue:p(y),"onUpdate:modelValue":r[4]||(r[4]=(l=null)=>c(y)?y.value=l:null),class:"spacing",placeholder:"圆角矩形","border-radius":"15px"},null,8,["modelValue"]),i(B,{modelValue:p(y),"onUpdate:modelValue":r[5]||(r[5]=(l=null)=>c(y)?y.value=l:null),placeholder:"异形","border-radius":"15px 0 15px 0"},null,8,["modelValue"])])),_:1}),i(j,{title:"颜色",note:"输入框的各种颜色，由你决定"},{default:s((()=>[i(B,{modelValue:p(y),"onUpdate:modelValue":r[6]||(r[6]=(l=null)=>c(y)?y.value=l:null),placeholder:"自定义颜色","border-radius":"15px",bgColor:"$info",activeBgColor:"$info","text-color":"#35b571","active-border-color":"#35b571","border-width":"2px","cursor-color":"#35b571"},null,8,["modelValue"])])),_:1}),i(j,{title:"边框",note:"当默认的边框太过突兀时，可以取消边框的显示"},{default:s((()=>[i(B,{modelValue:p(y),"onUpdate:modelValue":r[7]||(r[7]=(l=null)=>c(y)?y.value=l:null),class:"spacing",placeholder:"无边框",borderRadius:"15px",bgColor:"$info",activeBgColor:"$info","border-color":"transparent"},null,8,["modelValue"]),i(B,{modelValue:p(y),"onUpdate:modelValue":r[8]||(r[8]=(l=null)=>c(y)?y.value=l:null),class:"spacing",placeholder:"无焦点边框","border-radius":"15px",bgColor:"$info",activeBgColor:"$info",showActiveBorder:!1},null,8,["modelValue"]),i(B,{modelValue:p(y),"onUpdate:modelValue":r[9]||(r[9]=(l=null)=>c(y)?y.value=l:null),class:"spacing",placeholder:"完全无边框",borderRadius:"15px",bgColor:"$info",activeBgColor:"$info",showBorder:!1},null,8,["modelValue"])])),_:1}),i(j,{title:"类型",note:"不同的场景对输入的数据也是有要求的"},{default:s((()=>[i(B,{type:"text",class:"spacing",placeholder:"文字输入框","border-radius":"15px",bgColor:"$info",borderColor:"$info"}),i(B,{type:"number",class:"spacing",placeholder:"数字输入框","border-radius":"15px",bgColor:"$info",borderColor:"$info"}),i(B,{type:"digit",class:"spacing",placeholder:"带小数点数字输入框","border-radius":"15px",bgColor:"$info",borderColor:"$info"}),i(B,{type:"tel",class:"spacing",placeholder:"电话输入框","border-radius":"15px",bgColor:"$info",borderColor:"$info"})])),_:1}),i(j,{title:"密码",note:"对于输入密码的场景，要求显然更高"},{default:s((()=>[i(B,{class:"spacing",password:"",placeholder:"密码输入框","border-radius":"15px",bgColor:"$info",borderColor:"$info"})])),_:1}),i(j,{title:"键盘右下角按钮",note:"自定义键盘右下角显示的文字，也许能帮你省下一个按钮的空间\\n（输入法不同，实际显示会有一定差异）"},{default:s((()=>[i(B,{modelValue:p(y),"onUpdate:modelValue":r[10]||(r[10]=(l=null)=>c(y)?y.value=l:null),class:"spacing","confirm-type":"done",placeholder:"完成","border-radius":"15px",bgColor:"$info",borderColor:"$info"},null,8,["modelValue"]),i(B,{modelValue:p(y),"onUpdate:modelValue":r[11]||(r[11]=(l=null)=>c(y)?y.value=l:null),class:"spacing","confirm-type":"next",placeholder:"下一步","border-radius":"15px",bgColor:"$info",borderColor:"$info"},null,8,["modelValue"]),i(B,{modelValue:p(y),"onUpdate:modelValue":r[12]||(r[12]=(l=null)=>c(y)?y.value=l:null),class:"spacing","confirm-type":"send",placeholder:"发送","border-radius":"15px",bgColor:"$info",borderColor:"$info"},null,8,["modelValue"]),i(B,{modelValue:p(y),"onUpdate:modelValue":r[13]||(r[13]=(l=null)=>c(y)?y.value=l:null),class:"spacing","confirm-type":"search",placeholder:"搜索","border-radius":"15px",bgColor:"$info",borderColor:"$info"},null,8,["modelValue"]),i(B,{modelValue:p(y),"onUpdate:modelValue":r[14]||(r[14]=(l=null)=>c(y)?y.value=l:null),class:"spacing","confirm-type":"go",placeholder:"前往","border-radius":"15px",bgColor:"$info",borderColor:"$info"},null,8,["modelValue"])])),_:1}),i(j,{title:"上推界面",note:"用于确定键盘弹起时是否自动上推页面，默认开启"},{default:s((()=>[i(B,{modelValue:p(y),"onUpdate:modelValue":r[15]||(r[15]=(l=null)=>c(y)?y.value=l:null),class:"spacing","adjust-position":!1,placeholder:"禁用自动上推界面","border-radius":"15px",bgColor:"$info",borderColor:"$info"},null,8,["modelValue"])])),_:1}),i(j,{title:"焦点",note:"输入框也可以自由控制焦点"},{default:s((()=>[i(I,null,{default:s((()=>[i(A,{justify:"space-between"},{default:s((()=>[i(z,{text:"获得焦点",size:p(a).utils.addUnit(p(a).utils.getPx(p(a).configs.font.size(3))+1)},null,8,["size"]),i(R,{modelValue:p(h),"onUpdate:modelValue":r[16]||(r[16]=(l=null)=>c(h)?h.value=l:null)},null,8,["modelValue"])])),_:1})])),_:1}),i(B,{modelValue:p(y),"onUpdate:modelValue":r[17]||(r[17]=(l=null)=>c(y)?y.value=l:null),placeholder:"自由控制焦点","border-radius":"15px",bgColor:"$info",focus:p(h),maxlength:10,borderColor:"$info"},null,8,["modelValue","focus"])])),_:1}),i(j,{title:"最大输入长度",note:"限制字数的工具，默认设为-1（不限制）"},{default:s((()=>[i(B,{placeholder:"限制10字","border-radius":"15px",bgColor:"$info",maxlength:10,borderColor:"$info"})])),_:1}),i(j,{title:"加载",note:"给输入框加入加载动效，至少看起来没有在偷懒"},{default:s((()=>[i(I,null,{default:s((()=>[i(A,{justify:"space-between"},{default:s((()=>[i(z,{text:"加载中",size:p(a).utils.addUnit(p(a).utils.getPx(p(a).configs.font.size(3))+1)},null,8,["size"]),i(R,{modelValue:p(U),"onUpdate:modelValue":r[18]||(r[18]=(l=null)=>c(U)?U.value=l:null)},null,8,["modelValue"])])),_:1})])),_:1}),i(B,{modelValue:p(y),"onUpdate:modelValue":r[19]||(r[19]=(l=null)=>c(y)?y.value=l:null),placeholder:"加载中","border-radius":"15px",bgColor:"$info","border-color":"transparent",loading:p(U)},null,8,["modelValue","loading"])])),_:1}),i(j,{title:"禁用",note:"禁用输入框，也许能让有些人闭嘴"},{default:s((()=>[i(B,{modelValue:p(y),"onUpdate:modelValue":r[20]||(r[20]=(l=null)=>c(y)?y.value=l:null),placeholder:"禁用","border-radius":"15px",bgColor:"$info","border-color":"transparent",disabled:""},null,8,["modelValue"])])),_:1}),i(j,{title:"可清除内容",note:"有时候可能会需要快捷地清除已输入的内容，为了少写点代码，就内置了这个功能"},{default:s((()=>[i(B,{modelValue:p(y),"onUpdate:modelValue":r[21]||(r[21]=(l=null)=>c(y)?y.value=l:null),placeholder:"搜索","border-radius":"15px",clearable:"",showBorder:!1,bgColor:"$info",activeBgColor:"$info"},null,8,["modelValue"])])),_:1}),i(j,{title:"字体大小",note:"适配多种复杂场景"},{default:s((()=>[i(B,{placeholder:"搜索","text-size":"23px",padding:"18px 20px","border-radius":"100px","icon-size":"24px","icon-color":"#676767","prefix-icon":"search-2-line",bgColor:"$info",activeBgColor:"$info",showBorder:!1})])),_:1}),i(j,{title:"前缀&后缀",note:"在输入框的前后插入一些元素，比如图标"},{default:s((()=>[i(B,{placeholder:"搜索",class:"spacing","border-radius":"15px","prefix-icon":"search-2-line","icon-size":"16px","icon-color":"#676767",showBorder:!1,bgColor:"$info",activeBgColor:"$info"}),i(B,{placeholder:"请输入网址","border-radius":"15px",bgColor:"$info",activeBgColor:"$info",showBorder:!1},{prefix:s((()=>[i(z,{text:"https://",color:"$text",size:"18px",style:{"margin-right":"5px"}})])),suffix:s((()=>[i(k,{level:"second",type:"primary","round-size":"35px",round:"",style:{margin:"0px -3px 0px 5px"}},{default:s((()=>[i(P,{name:"arrow-right-line",color:"$primary",size:"18px"})])),_:1})])),_:1})])),_:1})])),_:1},8,["loading"])])),_:1})}}}),[["__scopeId","data-v-ba2eebeb"]]);export{U as default};
