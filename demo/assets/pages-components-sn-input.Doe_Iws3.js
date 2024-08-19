import{_ as l}from"./sn-topbar.DGNmRcUY.js";import{d as o,r as e,k as r,b as a,o as n,e as d,f as u,g as t,u as i,i as s}from"./index-D82xabMX.js";import{$ as p,r as c}from"./uni-app.es.Cv0ss-rw.js";import{_ as b}from"./sn-input.OLyd3D9e.js";import{_ as m}from"./com-card.2Ru7Wd6o.js";import{b as g,a as f,_ as C,c as V}from"./sn-button.CJ0ZsVkl.js";import{_ as x}from"./sn-switch.B79Tps6Q.js";import{_ as h}from"./sn-row.DBw4p-E_.js";import{_ as v}from"./sn-card.DVe5sAET.js";import{_}from"./sn-view.uvue_vue_type_script_setup_true_lang.NnYLQipQ.js";import{_ as U}from"./sn-page.CIc3m52K.js";import"./sn-avatar.BKyOPiHa.js";const B=V(o({__name:"sn-input",setup(o){const V=p.colors,B=e(!1),y=e(!1),w=e(""),j=e(!0);return r((()=>{j.value=!1})),(o=null,e=null)=>{const r=c(a("sn-topbar"),l),z=c(a("sn-input"),b),k=c(a("com-card"),m),I=c(a("sn-text"),g),P=c(a("sn-switch"),x),R=c(a("sn-row"),h),A=c(a("sn-card"),v),$=c(a("sn-icon"),f),q=c(a("sn-button"),C),D=c(a("sn-view"),_),E=c(a("sn-page"),U);return n(),d(E,null,{default:u((()=>[t(r,{title:"Input 输入框"}),t(D,{loading:i(j)},{default:u((()=>[t(k,{title:"基础用法",note:"普普通通的输入框"},{default:u((()=>[t(z,{modelValue:i(w),"onUpdate:modelValue":e[0]||(e[0]=(l=null)=>s(w)?w.value=l:null)},null,8,["modelValue"])])),_:1}),t(k,{title:"提示文字",note:"为输入框添加提示文字，让用户更懂你的意图"},{default:u((()=>[t(z,{modelValue:i(w),"onUpdate:modelValue":e[1]||(e[1]=(l=null)=>s(w)?w.value=l:null),class:"spacing",placeholder:"带有placeholder的输入框"},null,8,["modelValue"]),t(z,{modelValue:i(w),"onUpdate:modelValue":e[2]||(e[2]=(l=null)=>s(w)?w.value=l:null),class:"spacing",placeholder:"自定义placeholder的样式","placeholder-style":"color: black"},null,8,["modelValue"])])),_:1}),t(k,{title:"圆角",note:"自定义输入框的圆角，更具特色"},{default:u((()=>[t(z,{modelValue:i(w),"onUpdate:modelValue":e[3]||(e[3]=(l=null)=>s(w)?w.value=l:null),class:"spacing",placeholder:"圆形","border-radius":"100px"},null,8,["modelValue"]),t(z,{modelValue:i(w),"onUpdate:modelValue":e[4]||(e[4]=(l=null)=>s(w)?w.value=l:null),class:"spacing",placeholder:"圆角矩形","border-radius":"15px"},null,8,["modelValue"]),t(z,{modelValue:i(w),"onUpdate:modelValue":e[5]||(e[5]=(l=null)=>s(w)?w.value=l:null),placeholder:"异形","border-radius":"15px 0 15px 0"},null,8,["modelValue"])])),_:1}),t(k,{title:"颜色",note:"输入框的各种颜色，由你决定"},{default:u((()=>[t(z,{modelValue:i(w),"onUpdate:modelValue":e[6]||(e[6]=(l=null)=>s(w)?w.value=l:null),placeholder:"自定义颜色","border-radius":"15px",bgColor:i(V).info,activeBgColor:i(V).info,"text-color":"#35b571","active-border-color":"#35b571","border-width":"2px","cursor-color":"#35b571"},null,8,["modelValue","bgColor","activeBgColor"])])),_:1}),t(k,{title:"边框",note:"当默认的边框太过突兀时，可以取消边框的显示"},{default:u((()=>[t(z,{modelValue:i(w),"onUpdate:modelValue":e[7]||(e[7]=(l=null)=>s(w)?w.value=l:null),class:"spacing",placeholder:"无边框",borderRadius:"15px",bgColor:i(V).info,activeBgColor:i(V).info,"border-color":"transparent"},null,8,["modelValue","bgColor","activeBgColor"]),t(z,{modelValue:i(w),"onUpdate:modelValue":e[8]||(e[8]=(l=null)=>s(w)?w.value=l:null),class:"spacing",placeholder:"无焦点边框","border-radius":"15px",bgColor:i(V).info,activeBgColor:i(V).info,showActiveBorder:!1},null,8,["modelValue","bgColor","activeBgColor"]),t(z,{modelValue:i(w),"onUpdate:modelValue":e[9]||(e[9]=(l=null)=>s(w)?w.value=l:null),class:"spacing",placeholder:"完全无边框",borderRadius:"15px",bgColor:i(V).info,activeBgColor:i(V).info,showBorder:!1},null,8,["modelValue","bgColor","activeBgColor"])])),_:1}),t(k,{title:"类型",note:"不同的场景对输入的数据也是有要求的"},{default:u((()=>[t(z,{type:"text",class:"spacing",placeholder:"文字输入框","border-radius":"15px",bgColor:i(V).info,borderColor:i(V).info},null,8,["bgColor","borderColor"]),t(z,{type:"number",class:"spacing",placeholder:"数字输入框","border-radius":"15px",bgColor:i(V).info,borderColor:i(V).info},null,8,["bgColor","borderColor"]),t(z,{type:"digit",class:"spacing",placeholder:"带小数点数字输入框","border-radius":"15px",bgColor:i(V).info,borderColor:i(V).info},null,8,["bgColor","borderColor"]),t(z,{type:"tel",class:"spacing",placeholder:"电话输入框","border-radius":"15px",bgColor:i(V).info,borderColor:i(V).info},null,8,["bgColor","borderColor"])])),_:1}),t(k,{title:"密码",note:"对于输入密码的场景，要求显然更高"},{default:u((()=>[t(z,{class:"spacing",password:"",placeholder:"密码输入框","border-radius":"15px",bgColor:i(V).info,borderColor:i(V).info},null,8,["bgColor","borderColor"])])),_:1}),t(k,{title:"键盘右下角按钮",note:"自定义键盘右下角显示的文字，也许能帮你省下一个按钮的空间\\n（输入法不同，实际显示会有一定差异）"},{default:u((()=>[t(z,{modelValue:i(w),"onUpdate:modelValue":e[10]||(e[10]=(l=null)=>s(w)?w.value=l:null),class:"spacing","confirm-type":"done",placeholder:"完成","border-radius":"15px",bgColor:i(V).info,borderColor:i(V).info},null,8,["modelValue","bgColor","borderColor"]),t(z,{modelValue:i(w),"onUpdate:modelValue":e[11]||(e[11]=(l=null)=>s(w)?w.value=l:null),class:"spacing","confirm-type":"next",placeholder:"下一步","border-radius":"15px",bgColor:i(V).info,borderColor:i(V).info},null,8,["modelValue","bgColor","borderColor"]),t(z,{modelValue:i(w),"onUpdate:modelValue":e[12]||(e[12]=(l=null)=>s(w)?w.value=l:null),class:"spacing","confirm-type":"send",placeholder:"发送","border-radius":"15px",bgColor:i(V).info,borderColor:i(V).info},null,8,["modelValue","bgColor","borderColor"]),t(z,{modelValue:i(w),"onUpdate:modelValue":e[13]||(e[13]=(l=null)=>s(w)?w.value=l:null),class:"spacing","confirm-type":"search",placeholder:"搜索","border-radius":"15px",bgColor:i(V).info,borderColor:i(V).info},null,8,["modelValue","bgColor","borderColor"]),t(z,{modelValue:i(w),"onUpdate:modelValue":e[14]||(e[14]=(l=null)=>s(w)?w.value=l:null),class:"spacing","confirm-type":"go",placeholder:"前往","border-radius":"15px",bgColor:i(V).info,borderColor:i(V).info},null,8,["modelValue","bgColor","borderColor"])])),_:1}),t(k,{title:"上推界面",note:"用于确定键盘弹起时是否自动上推页面，默认开启"},{default:u((()=>[t(z,{modelValue:i(w),"onUpdate:modelValue":e[15]||(e[15]=(l=null)=>s(w)?w.value=l:null),class:"spacing","adjust-position":!1,placeholder:"禁用自动上推界面","border-radius":"15px",bgColor:i(V).info,borderColor:i(V).info},null,8,["modelValue","bgColor","borderColor"])])),_:1}),t(k,{title:"焦点",note:"输入框也可以自由控制焦点"},{default:u((()=>[t(A,null,{default:u((()=>[t(R,{justify:"space-between"},{default:u((()=>[t(I,{text:"获得焦点",size:i(p).utils.addUnit(i(p).utils.getPx(i(p).configs.font.size(3))+1)},null,8,["size"]),t(P,{modelValue:i(B),"onUpdate:modelValue":e[16]||(e[16]=(l=null)=>s(B)?B.value=l:null)},null,8,["modelValue"])])),_:1})])),_:1}),t(z,{modelValue:i(w),"onUpdate:modelValue":e[17]||(e[17]=(l=null)=>s(w)?w.value=l:null),placeholder:"自由控制焦点","border-radius":"15px",bgColor:i(V).info,focus:i(B),maxlength:10,borderColor:i(V).info},null,8,["modelValue","bgColor","focus","borderColor"])])),_:1}),t(k,{title:"最大输入长度",note:"限制字数的工具，默认设为-1（不限制）"},{default:u((()=>[t(z,{placeholder:"限制10字","border-radius":"15px",bgColor:i(V).info,maxlength:10,borderColor:i(V).info},null,8,["bgColor","borderColor"])])),_:1}),t(k,{title:"加载",note:"给输入框加入加载动效，至少看起来没有在偷懒"},{default:u((()=>[t(A,null,{default:u((()=>[t(R,{justify:"space-between"},{default:u((()=>[t(I,{text:"加载中",size:i(p).utils.addUnit(i(p).utils.getPx(i(p).configs.font.size(3))+1)},null,8,["size"]),t(P,{modelValue:i(y),"onUpdate:modelValue":e[18]||(e[18]=(l=null)=>s(y)?y.value=l:null)},null,8,["modelValue"])])),_:1})])),_:1}),t(z,{modelValue:i(w),"onUpdate:modelValue":e[19]||(e[19]=(l=null)=>s(w)?w.value=l:null),placeholder:"加载中","border-radius":"15px",bgColor:i(V).info,"border-color":"transparent",loading:i(y)},null,8,["modelValue","bgColor","loading"])])),_:1}),t(k,{title:"禁用",note:"禁用输入框，也许能让有些人闭嘴"},{default:u((()=>[t(z,{modelValue:i(w),"onUpdate:modelValue":e[20]||(e[20]=(l=null)=>s(w)?w.value=l:null),placeholder:"禁用","border-radius":"15px",bgColor:i(V).info,"border-color":"transparent",disabled:""},null,8,["modelValue","bgColor"])])),_:1}),t(k,{title:"可清除内容",note:"有时候可能会需要快捷地清除已输入的内容，为了少写点代码，就内置了这个功能"},{default:u((()=>[t(z,{modelValue:i(w),"onUpdate:modelValue":e[21]||(e[21]=(l=null)=>s(w)?w.value=l:null),placeholder:"搜索","border-radius":"15px",clearable:"",showBorder:!1,bgColor:i(V).info,activeBgColor:i(V).info},null,8,["modelValue","bgColor","activeBgColor"])])),_:1}),t(k,{title:"字体大小",note:"适配多种复杂场景"},{default:u((()=>[t(z,{placeholder:"搜索","text-size":"23px",padding:"18px 20px","border-radius":"100px","icon-size":"24px","icon-color":"#676767","prefix-icon":"search-2-line",bgColor:i(V).info,activeBgColor:i(V).info,showBorder:!1},null,8,["bgColor","activeBgColor"])])),_:1}),t(k,{title:"前缀&后缀",note:"在输入框的前后插入一些元素，比如图标"},{default:u((()=>[t(z,{placeholder:"搜索",class:"spacing","border-radius":"15px","prefix-icon":"search-2-line","icon-size":"16px","icon-color":"#676767",showBorder:!1,bgColor:i(V).info,activeBgColor:i(V).info},null,8,["bgColor","activeBgColor"]),t(z,{placeholder:"请输入网址","border-radius":"15px",bgColor:i(V).info,activeBgColor:i(V).info,showBorder:!1},{prefix:u((()=>[t(I,{text:"https://",color:i(V).text,size:"18px",style:{"margin-right":"5px"}},null,8,["color"])])),suffix:u((()=>[t(q,{level:"second",type:"primary","round-size":"35px",round:"",style:{margin:"0px -3px 0px 5px"}},{default:u((()=>[t($,{name:"arrow-right-line",color:i(V).primary,size:"18px"},null,8,["color"])])),_:1})])),_:1},8,["bgColor","activeBgColor"])])),_:1})])),_:1},8,["loading"])])),_:1})}}}),[["__scopeId","data-v-2e692293"]]);export{B as default};
