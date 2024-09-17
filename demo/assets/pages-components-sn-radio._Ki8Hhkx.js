import{_ as e,a as l}from"./sn-topbar.D5ol6wWa.js";import{d as t,$ as a,k as o,r as u,c as d,l as n,m as s,a as i,b as r,p,u as m,q as v,o as g,x,e as c,f,i as T}from"./index-BDGnenFq.js";import{r as S}from"./uni-app.es.BfR9KIrQ.js";import{_ as V,a as _}from"./sn-radio-group.DwMKJZ57.js";import{_ as b}from"./com-card.CltZjJtY.js";import{_ as C}from"./sn-tag.CIsfdw9V.js";import{c as y,_ as U}from"./sn-button.DCeBN0oM.js";import{_ as B}from"./sn-view.D-czNReK.js";import{_ as A}from"./sn-page.BIWIogO0.js";const k=y(t(Object.assign({name:"sn-radio-tag"},{__name:"sn-radio-tag",props:{text:{type:String,default:""},type:{type:String,default:""},level:{type:String,default:""},disabled:{type:Boolean,default:!1},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(e,l){var t=l.expose;const c=a.colors,f=a.utils,T=x(),V=e,_=o("tagType",u("primary")),b=o("tagLevel",u("second")),y=o("tagTextColor",u("")),U=o("disabledTagTextColor",u("")),B=o("tagActiveTextColor",u("")),A=o("disabledTagActiveTextColor",u("")),k=o("tagTextSize",u("")),G=o("tagBorderRadius",u("10px")),j=o("tagPadding",u("5px 8px")),$=o("tagBgColor",u("")),E=o("disabledTagBgColor",u("")),h=o("tagActiveBgColor",u("")),w=o("disabledTagActiveBgColor",u("")),J=o("customTagStyle",u({})),L=o("customTextStyle",u({})),O=u(!1),P=u(null),z=d((()=>V.disabled)),D=d((()=>{let e=V.type;return e=f.isEmpty(e)?_.value:e,["info","warning","error","success","primary"].includes(e)?e:"info"})),R=d((()=>{let e=V.level;return e=f.isEmpty(e)?b.value:e,["first","second"].includes(e)?e:"second"})),M=d((()=>z.value?O.value?f.isEmpty(w.value)?c.value.disabledDark:w.value:f.isEmpty(E.value)?c.value.disabled:E.value:O.value?f.isEmpty(h.value)?"info"==D.value?c.value.dark:c.value["".concat(D.value).concat("second"==R.value?"Light":"")]:h.value:f.isEmpty($.value)?c.value.info:$.value)),N=d((()=>z.value?O.value?f.isEmpty(A.value)?c.value.disabledDarkText:A.value:f.isEmpty(U.value)?c.value.disabledText:U.value:O.value?f.isEmpty(B.value)?"info"==D.value?c.value.front:c.value["".concat(D.value).concat("second"==R.value?"":"Dark")]:B.value:f.isEmpty(y.value)?c.value.text:y.value)),I=d((()=>{let e=new Map;return e.set("border-radius",G.value),e.set("padding",j.value),e}));function q(){var e;if(!V.disabled){let l=T.proxy;null===(e=f.findParent(l,["sn-radio-group"]))||void 0===e||e.$callMethod("syncData",l)}}return t({setProps:function(e){_.value=UTS.mapGet(e,"tagType"),b.value=UTS.mapGet(e,"tagLevel"),y.value=UTS.mapGet(e,"tagTextColor"),U.value=UTS.mapGet(e,"disabledTagTextColor"),B.value=UTS.mapGet(e,"tagActiveTextColor"),A.value=UTS.mapGet(e,"disabledTagActiveTextColor"),k.value=UTS.mapGet(e,"tagTextSize"),G.value=UTS.mapGet(e,"tagBorderRadius"),j.value=UTS.mapGet(e,"tagPadding"),$.value=UTS.mapGet(e,"tagBgColor"),E.value=UTS.mapGet(e,"disabledTagBgColor"),h.value=UTS.mapGet(e,"tagActiveBgColor"),w.value=UTS.mapGet(e,"disabledTagActiveBgColor"),J.value=new UTSJSONObject(UTS.mapGet(e,"customTagStyle")),L.value=new UTSJSONObject(UTS.mapGet(e,"customTextStyle"))},updateValue:function(e){O.value=e}}),n((()=>{s((()=>{var e;let l=T.proxy;null===(e=f.findParent(l,["sn-radio-group"]))||void 0===e||e.$callMethod("register",l)}))})),(l=null,t=null)=>{const a=S(i("sn-tag"),C);return g(),r(a,{class:p(["sn-radio-tag",e.disabled?"disabled":""]),ref_key:"tagEle",ref:P,text:e.text,bgColor:m(M),textColor:m(N),textSize:m(k),customTextStyle:m(L),customStyle:e.customStyle,onClick:q,style:v([m(I),m(J)])},null,8,["class","text","bgColor","textColor","textSize","customTextStyle","customStyle","style"])}}})),[["__scopeId","data-v-17ddbef0"]]),G=y(t({__name:"sn-radio",setup(t){a.colors;const o=u(0),p=u(0),v=u(0),x=u(0),C=u(1),y=u(0),G=u(0),j=u(0),$=u(0),E=u(0),h=u(!0),w=d((()=>a.configs.app.theme));return n((()=>{s((()=>{setTimeout((()=>{h.value=!1}),500)}))})),(t=null,a=null)=>{const u=S(i("sn-topbar"),e),d=S(i("sn-radio"),V),n=S(i("sn-radio-group"),_),s=S(i("com-card"),b),J=S(i("sn-radio-tag"),k),L=S(i("sn-button"),U),O=S(i("sn-row"),l),P=S(i("sn-view"),B),z=S(i("sn-page"),A);return g(),r(z,null,{default:c((()=>[f(u,{title:"Radio 单选"}),f(P,{loading:m(h)},{default:c((()=>[f(s,{title:"基础用法",note:"普普通通的单选组件，用于数据选择\\n（注意：一组sn-radio、sn-radio-tag必须放在sn-radio-group里）"},{default:c((()=>[f(n,{modelValue:m(o),"onUpdate:modelValue":a[0]||(a[0]=(e=null)=>T(o)?o.value=e:null)},{default:c((()=>[f(d,{text:"确定"}),f(d,{text:"取消"})])),_:1},8,["modelValue"])])),_:1}),f(s,{title:"类型",note:"自定义单选组显示的样式（支持两种组件：sn-radio 和 sn-radio-tag）"},{default:c((()=>[f(n,{class:"spacing",modelValue:m(p),"onUpdate:modelValue":a[1]||(a[1]=(e=null)=>T(p)?p.value=e:null)},{default:c((()=>[f(d,{text:"东方"}),f(d,{text:"西方"})])),_:1},8,["modelValue"]),f(n,{class:"spacing",modelValue:m(p),"onUpdate:modelValue":a[2]||(a[2]=(e=null)=>T(p)?p.value=e:null)},{default:c((()=>[f(J,{text:"东方"}),f(J,{text:"西方"})])),_:1},8,["modelValue"])])),_:1}),f(s,{title:"圆角 【Tag 特色】",note:"tag 单选组件可设置统一的圆角。"},{default:c((()=>[f(n,{modelValue:m(v),"onUpdate:modelValue":a[3]||(a[3]=(e=null)=>T(v)?v.value=e:null),tagBorderRadius:"100px"},{default:c((()=>[f(J,{text:"男"}),f(J,{text:"女"}),f(J,{text:"未知"})])),_:1},8,["modelValue"])])),_:1}),f(s,{title:"方向",note:"单选组可以设置排列的方向（竖向和横向），适用于多种场景"},{default:c((()=>[f(n,{modelValue:m(x),"onUpdate:modelValue":a[4]||(a[4]=(e=null)=>T(x)?x.value=e:null),vertical:"",spacing:"20px"},{default:c((()=>[f(d,{text:"中文"}),f(d,{text:"英文"}),f(d,{text:"法文"})])),_:1},8,["modelValue"]),f(n,{modelValue:m(x),"onUpdate:modelValue":a[5]||(a[5]=(e=null)=>T(x)?x.value=e:null),vertical:"",spacing:"10px",tagPadding:"8px 0"},{default:c((()=>[f(J,{text:"中文"}),f(J,{text:"英文"}),f(J,{text:"法文"})])),_:1},8,["modelValue"])])),_:1}),f(s,{title:"默认值",note:"单选组可以设置默认的选项，更懂用户的选择"},{default:c((()=>[f(n,{modelValue:m(C),"onUpdate:modelValue":a[6]||(a[6]=(e=null)=>T(C)?C.value=e:null),spacing:"30px"},{default:c((()=>[f(d,{text:"篮球"}),f(d,{text:"足球"}),f(d,{text:"网球"})])),_:1},8,["modelValue"]),f(n,{modelValue:m(C),"onUpdate:modelValue":a[7]||(a[7]=(e=null)=>T(C)?C.value=e:null),type:"tag",spacing:"30px"},{default:c((()=>[f(J,{text:"篮球"}),f(J,{text:"足球"}),f(J,{text:"网球"})])),_:1},8,["modelValue"])])),_:1}),f(s,{title:"颜色",note:"单选可以设置一个统一的颜色"},{default:c((()=>[f(n,{modelValue:m(y),"onUpdate:modelValue":a[8]||(a[8]=(e=null)=>T(y)?y.value=e:null),spacing:"30px",radioBorderColor:"$dark",radioActiveColor:"$dark",radioActiveBorderColor:"$dark"},{default:c((()=>[f(d,{text:"篮球"}),f(d,{text:"足球"}),f(d,{text:"网球"})])),_:1},8,["modelValue"]),f(n,{modelValue:m(y),"onUpdate:modelValue":a[9]||(a[9]=(e=null)=>T(y)?y.value=e:null),spacing:"30px",tagActiveBorderColor:"$dark",tagActiveTextColor:"$front",tagTextColor:"$infoDark",tagActiveBgColor:"$dark"},{default:c((()=>[f(J,{text:"篮球"}),f(J,{text:"足球"}),f(J,{text:"网球"})])),_:1},8,["modelValue"])])),_:1}),f(s,{title:"禁用",note:"为单个单选设置禁用状态\\n注意：只是禁用手动点击，不会屏蔽数据的修改"},{default:c((()=>[f(n,{modelValue:m(G),"onUpdate:modelValue":a[10]||(a[10]=(e=null)=>T(G)?G.value=e:null),spacing:"30px",radioActiveColor:"#b8ccc0"},{default:c((()=>[f(d,{text:"UTS"}),f(d,{text:"TS"}),f(d,{text:"JS",disabled:""})])),_:1},8,["modelValue"]),f(n,{modelValue:m(j),"onUpdate:modelValue":a[11]||(a[11]=(e=null)=>T(j)?j.value=e:null),spacing:"30px",radioActiveColor:"#b8ccc0"},{default:c((()=>[f(d,{disabled:"",text:"百年难遇"}),f(d,{text:"普通"}),f(d,{text:"珍贵"})])),_:1},8,["modelValue"]),f(n,{modelValue:m(G),"onUpdate:modelValue":a[12]||(a[12]=(e=null)=>T(G)?G.value=e:null)},{default:c((()=>[f(J,{text:"UTS"}),f(J,{text:"TS"}),f(J,{text:"JS",disabled:""})])),_:1},8,["modelValue"]),f(n,{modelValue:m(j),"onUpdate:modelValue":a[13]||(a[13]=(e=null)=>T(j)?j.value=e:null)},{default:c((()=>[f(J,{disabled:"",text:"百年难遇"}),f(J,{text:"普通"}),f(J,{text:"珍贵"})])),_:1},8,["modelValue"])])),_:1}),f(s,{title:"手动修改",note:"手动修改radio的值，适用于自动化等场景"},{default:c((()=>[f(O,{class:"m-b-10"},{default:c((()=>[f(L,{text:"选中UTS",onClick:a[14]||(a[14]=(e=null)=>$.value=0)}),f(L,{class:"m-l-5",text:"选中TS",onClick:a[15]||(a[15]=(e=null)=>$.value=1)}),f(L,{class:"m-l-5",text:"选中JS",onClick:a[16]||(a[16]=(e=null)=>$.value=2)})])),_:1}),f(n,{modelValue:m($),"onUpdate:modelValue":a[17]||(a[17]=(e=null)=>T($)?$.value=e:null),spacing:"30px"},{default:c((()=>[f(d,{text:"UTS"}),f(d,{text:"TS"}),f(d,{text:"JS",disabled:""})])),_:1},8,["modelValue"]),f(n,{modelValue:m($),"onUpdate:modelValue":a[18]||(a[18]=(e=null)=>T($)?$.value=e:null),type:"tag"},{default:c((()=>[f(J,{text:"UTS"}),f(J,{text:"TS"}),f(J,{text:"JS",disabled:""})])),_:1},8,["modelValue"])])),_:1}),f(s,{title:"自定义样式",note:"通过丰富的组件属性，你可以自由地控制组件每个部分的样式，实现一些很酷的东西，比如下面这个高仿某大厂软件界面"},{default:c((()=>[f(n,{modelValue:m(E),"onUpdate:modelValue":a[19]||(a[19]=(e=null)=>T(E)?E.value=e:null),spacing:"10px",tagActiveTextColor:"#f55009",tagBorderColor:"$infoLight",tagBgColor:"$infoLight",tagActiveBorderColor:"$infoLight",tagActiveBgColor:"$infoLight",tagBorderRadius:"100px",tagPadding:"4px 8px",tagTextSize:"12px",tagTextColor:"light"==m(w)?"#d6d6db":"#8e8f91",customContainStyle:{marginBottom:"10px"}},{default:c((()=>[f(J,{text:"近朱者赤，近你者甜"}),f(J,{text:"风止于秋水，我止于你"}),f(J,{text:"眼里都是你，亿万星辰犹不及"})])),_:1},8,["modelValue","tagTextColor"])])),_:1})])),_:1},8,["loading"])])),_:1})}}}),[["__scopeId","data-v-728a2e87"]]);export{G as default};
