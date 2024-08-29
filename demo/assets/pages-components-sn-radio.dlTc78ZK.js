import{_ as e,a as l}from"./sn-topbar.CX0rMkKy.js";import{d as t,r as a,c as o,l as u,m as d,b as n,e as r,p as i,u as s,q as p,o as m,x as v,f as c,g,i as x}from"./index-DNTc1GxZ.js";import{$ as f,r as T}from"./uni-app.es.D9ZkitmT.js";import{_ as V,a as S}from"./sn-radio-group.BHaBb1Ua.js";import{_}from"./com-card.22LSjaaf.js";import{_ as C}from"./sn-tag.DvvI2107.js";import{c as U,_ as y}from"./sn-button.BaZjRh9m.js";import{_ as b}from"./sn-view.JTcvHBKf.js";import{_ as B}from"./sn-page.CEVOSUw5.js";const A=U(t(Object.assign({name:"sn-radio-tag"},{__name:"sn-radio-tag",props:{text:{type:String,default:""},type:{type:String,default:""},level:{type:String,default:""},disabled:{type:Boolean,default:!1},customStyle:{type:Object,default:{}}},setup(e,l){var t=l.expose;const c=f.colors,g=f.utils,x=v(),V=e,S=a("primary"),_=a("second"),U=a(""),y=a(""),b=a(""),B=a(""),A=a(""),k=a("10px"),G=a("5px 8px"),j=a(""),E=a(""),h=a(""),w=a(""),J=a({}),L=a({}),O=a(!1),P=a(null),z=o((()=>V.disabled)),D=o((()=>{let e=V.type;return e=g.isEmpty(e)?S.value:e,["info","warning","error","success","primary"].includes(e)?e:"info"})),R=o((()=>{let e=V.level;return e=g.isEmpty(e)?_.value:e,["first","second"].includes(e)?e:"second"})),I=o((()=>z.value?O.value?g.isEmpty(w.value)?c.value.disabledDark:w.value:g.isEmpty(E.value)?c.value.disabled:E.value:O.value?g.isEmpty(h.value)?"info"==D.value?c.value.dark:c.value["".concat(D.value).concat("second"==R.value?"Light":"")]:h.value:g.isEmpty(j.value)?c.value.info:j.value)),M=o((()=>z.value?O.value?g.isEmpty(B.value)?c.value.disabledDarkText:B.value:g.isEmpty(y.value)?c.value.disabledText:y.value:O.value?g.isEmpty(b.value)?"info"==D.value?c.value.front:c.value["".concat(D.value).concat("second"==R.value?"":"Dark")]:b.value:g.isEmpty(U.value)?c.value.text:U.value)),$=o((()=>{let e=new Map;return e.set("border-radius",k.value),e.set("padding",G.value),e}));function q(){var e;if(!V.disabled){let l=x.proxy;null===(e=g.findParent(l,["sn-radio-group"]))||void 0===e||e.$callMethod("syncData",l)}}return t({setProps:function(e){S.value=UTS.mapGet(e,"tagType"),_.value=UTS.mapGet(e,"tagLevel"),U.value=UTS.mapGet(e,"tagTextColor"),y.value=UTS.mapGet(e,"disabledTagTextColor"),b.value=UTS.mapGet(e,"tagActiveTextColor"),B.value=UTS.mapGet(e,"disabledTagActiveTextColor"),A.value=UTS.mapGet(e,"tagTextSize"),k.value=UTS.mapGet(e,"tagBorderRadius"),G.value=UTS.mapGet(e,"tagPadding"),j.value=UTS.mapGet(e,"tagBgColor"),E.value=UTS.mapGet(e,"disabledTagBgColor"),h.value=UTS.mapGet(e,"tagActiveBgColor"),w.value=UTS.mapGet(e,"disabledTagActiveBgColor"),J.value=new UTSJSONObject(UTS.mapGet(e,"customTagStyle")),L.value=new UTSJSONObject(UTS.mapGet(e,"customTextStyle"))},updateValue:function(e){O.value=e}}),u((()=>{d((()=>{var e;let l=x.proxy;null===(e=g.findParent(l,["sn-radio-group"]))||void 0===e||e.$callMethod("register",l)}))})),(l=null,t=null)=>{const a=T(n("sn-tag"),C);return m(),r(a,{class:i(["sn-radio-tag",e.disabled?"disabled":""]),ref_key:"tagEle",ref:P,text:e.text,bgColor:s(I),textColor:s(M),textSize:s(A),customTextStyle:s(L),customStyle:e.customStyle,onClick:q,style:p([s($),s(J)])},null,8,["class","text","bgColor","textColor","textSize","customTextStyle","customStyle","style"])}}})),[["__scopeId","data-v-36ac0c5b"]]),k=U(t({__name:"sn-radio",setup(t){const i=f.colors,p=a(0),v=a(0),C=a(0),U=a(0),k=a(1),G=a(0),j=a(0),E=a(0),h=a(0),w=a(0),J=a(!0),L=o((()=>f.configs.app.theme));return u((()=>{d((()=>{setTimeout((()=>{J.value=!1}),500)}))})),(t=null,a=null)=>{const o=T(n("sn-topbar"),e),u=T(n("sn-radio"),V),d=T(n("sn-radio-group"),S),f=T(n("com-card"),_),O=T(n("sn-radio-tag"),A),P=T(n("sn-button"),y),z=T(n("sn-row"),l),D=T(n("sn-view"),b),R=T(n("sn-page"),B);return m(),r(R,null,{default:c((()=>[g(o,{title:"Radio 单选"}),g(D,{loading:s(J)},{default:c((()=>[g(f,{title:"基础用法",note:"普普通通的单选组件，用于数据选择\\n（注意：一组sn-radio、sn-radio-tag必须放在sn-radio-group里）"},{default:c((()=>[g(d,{modelValue:s(p),"onUpdate:modelValue":a[0]||(a[0]=(e=null)=>x(p)?p.value=e:null)},{default:c((()=>[g(u,{text:"确定"}),g(u,{text:"取消"})])),_:1},8,["modelValue"])])),_:1}),g(f,{title:"类型",note:"自定义单选组显示的样式（支持两种组件：sn-radio 和 sn-radio-tag）"},{default:c((()=>[g(d,{class:"spacing",modelValue:s(v),"onUpdate:modelValue":a[1]||(a[1]=(e=null)=>x(v)?v.value=e:null)},{default:c((()=>[g(u,{text:"东方"}),g(u,{text:"西方"})])),_:1},8,["modelValue"]),g(d,{class:"spacing",modelValue:s(v),"onUpdate:modelValue":a[2]||(a[2]=(e=null)=>x(v)?v.value=e:null)},{default:c((()=>[g(O,{text:"东方"}),g(O,{text:"西方"})])),_:1},8,["modelValue"])])),_:1}),g(f,{title:"圆角 【Tag 特色】",note:"tag 单选组件可设置统一的圆角。"},{default:c((()=>[g(d,{modelValue:s(C),"onUpdate:modelValue":a[3]||(a[3]=(e=null)=>x(C)?C.value=e:null),tagBorderRadius:"100px"},{default:c((()=>[g(O,{text:"男"}),g(O,{text:"女"}),g(O,{text:"未知"})])),_:1},8,["modelValue"])])),_:1}),g(f,{title:"方向",note:"单选组可以设置排列的方向（竖向和横向），适用于多种场景"},{default:c((()=>[g(d,{modelValue:s(U),"onUpdate:modelValue":a[4]||(a[4]=(e=null)=>x(U)?U.value=e:null),vertical:"",spacing:"20px"},{default:c((()=>[g(u,{text:"中文"}),g(u,{text:"英文"}),g(u,{text:"法文"})])),_:1},8,["modelValue"]),g(d,{modelValue:s(U),"onUpdate:modelValue":a[5]||(a[5]=(e=null)=>x(U)?U.value=e:null),vertical:"",spacing:"10px",tagPadding:"8px 0"},{default:c((()=>[g(O,{text:"中文"}),g(O,{text:"英文"}),g(O,{text:"法文"})])),_:1},8,["modelValue"])])),_:1}),g(f,{title:"默认值",note:"单选组可以设置默认的选项，更懂用户的选择"},{default:c((()=>[g(d,{modelValue:s(k),"onUpdate:modelValue":a[6]||(a[6]=(e=null)=>x(k)?k.value=e:null),spacing:"30px"},{default:c((()=>[g(u,{text:"篮球"}),g(u,{text:"足球"}),g(u,{text:"网球"})])),_:1},8,["modelValue"]),g(d,{modelValue:s(k),"onUpdate:modelValue":a[7]||(a[7]=(e=null)=>x(k)?k.value=e:null),type:"tag",spacing:"30px"},{default:c((()=>[g(O,{text:"篮球"}),g(O,{text:"足球"}),g(O,{text:"网球"})])),_:1},8,["modelValue"])])),_:1}),g(f,{title:"颜色",note:"单选可以设置一个统一的颜色"},{default:c((()=>[g(d,{modelValue:s(G),"onUpdate:modelValue":a[8]||(a[8]=(e=null)=>x(G)?G.value=e:null),spacing:"30px",radioBorderColor:s(i).dark,radioActiveColor:s(i).dark,radioActiveBorderColor:s(i).dark},{default:c((()=>[g(u,{text:"篮球"}),g(u,{text:"足球"}),g(u,{text:"网球"})])),_:1},8,["modelValue","radioBorderColor","radioActiveColor","radioActiveBorderColor"]),g(d,{modelValue:s(G),"onUpdate:modelValue":a[9]||(a[9]=(e=null)=>x(G)?G.value=e:null),spacing:"30px",tagActiveBorderColor:s(i).dark,tagActiveTextColor:s(i).front,tagTextColor:s(i).infoDark,tagActiveBgColor:s(i).dark},{default:c((()=>[g(O,{text:"篮球"}),g(O,{text:"足球"}),g(O,{text:"网球"})])),_:1},8,["modelValue","tagActiveBorderColor","tagActiveTextColor","tagTextColor","tagActiveBgColor"])])),_:1}),g(f,{title:"禁用",note:"为单个单选设置禁用状态\\n注意：只是禁用手动点击，不会屏蔽数据的修改"},{default:c((()=>[g(d,{modelValue:s(j),"onUpdate:modelValue":a[10]||(a[10]=(e=null)=>x(j)?j.value=e:null),spacing:"30px",radioActiveColor:"#b8ccc0"},{default:c((()=>[g(u,{text:"UTS"}),g(u,{text:"TS"}),g(u,{text:"JS",disabled:""})])),_:1},8,["modelValue"]),g(d,{modelValue:s(E),"onUpdate:modelValue":a[11]||(a[11]=(e=null)=>x(E)?E.value=e:null),spacing:"30px",radioActiveColor:"#b8ccc0"},{default:c((()=>[g(u,{disabled:"",text:"百年难遇"}),g(u,{text:"普通"}),g(u,{text:"珍贵"})])),_:1},8,["modelValue"]),g(d,{modelValue:s(j),"onUpdate:modelValue":a[12]||(a[12]=(e=null)=>x(j)?j.value=e:null)},{default:c((()=>[g(O,{text:"UTS"}),g(O,{text:"TS"}),g(O,{text:"JS",disabled:""})])),_:1},8,["modelValue"]),g(d,{modelValue:s(E),"onUpdate:modelValue":a[13]||(a[13]=(e=null)=>x(E)?E.value=e:null)},{default:c((()=>[g(O,{disabled:"",text:"百年难遇"}),g(O,{text:"普通"}),g(O,{text:"珍贵"})])),_:1},8,["modelValue"])])),_:1}),g(f,{title:"手动修改",note:"手动修改radio的值，适用于自动化等场景"},{default:c((()=>[g(z,{class:"m-b-10"},{default:c((()=>[g(P,{text:"选中UTS",onClick:a[14]||(a[14]=(e=null)=>h.value=0)}),g(P,{class:"m-l-5",text:"选中TS",onClick:a[15]||(a[15]=(e=null)=>h.value=1)}),g(P,{class:"m-l-5",text:"选中JS",onClick:a[16]||(a[16]=(e=null)=>h.value=2)})])),_:1}),g(d,{modelValue:s(h),"onUpdate:modelValue":a[17]||(a[17]=(e=null)=>x(h)?h.value=e:null),spacing:"30px"},{default:c((()=>[g(u,{text:"UTS"}),g(u,{text:"TS"}),g(u,{text:"JS",disabled:""})])),_:1},8,["modelValue"]),g(d,{modelValue:s(h),"onUpdate:modelValue":a[18]||(a[18]=(e=null)=>x(h)?h.value=e:null),type:"tag"},{default:c((()=>[g(O,{text:"UTS"}),g(O,{text:"TS"}),g(O,{text:"JS",disabled:""})])),_:1},8,["modelValue"])])),_:1}),g(f,{title:"自定义样式",note:"通过丰富的组件属性，你可以自由地控制组件每个部分的样式，实现一些很酷的东西，比如下面这个高仿某大厂软件界面"},{default:c((()=>[g(d,{modelValue:s(w),"onUpdate:modelValue":a[19]||(a[19]=(e=null)=>x(w)?w.value=e:null),spacing:"10px",tagActiveTextColor:"#f55009",tagBorderColor:s(i).infoLight,tagBgColor:s(i).infoLight,tagActiveBorderColor:s(i).infoLight,tagActiveBgColor:s(i).infoLight,tagBorderRadius:"100px",tagPadding:"4px 8px",tagTextSize:"12px",tagTextColor:"light"==s(L)?"#d6d6db":"#8e8f91",customContainStyle:{marginBottom:"10px"}},{default:c((()=>[g(O,{text:"近朱者赤，近你者甜"}),g(O,{text:"风止于秋水，我止于你"}),g(O,{text:"眼里都是你，亿万星辰犹不及"})])),_:1},8,["modelValue","tagBorderColor","tagBgColor","tagActiveBorderColor","tagActiveBgColor","tagTextColor"])])),_:1})])),_:1},8,["loading"])])),_:1})}}}),[["__scopeId","data-v-6cd792ed"]]);export{k as default};
