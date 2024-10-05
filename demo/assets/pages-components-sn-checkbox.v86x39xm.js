import{_ as e}from"./sn-topbar.DxKzInQK.js";import{d as t,$ as l,r as a,k as o,c as u,l as d,m as n,a as s,b as i,p as x,u as r,q as c,o as m,t as p,e as v,f as g,i as f}from"./index-DoInGK9X.js";import{r as b}from"./uni-app.es.K1mZmM8s.js";import{_ as V,a as y}from"./sn-checkbox-group.DYBVGsTF.js";import{_}from"./com-card.D8_7_rS9.js";import{_ as T}from"./sn-tag.BJVGy74E.js";import{c as S,b as k}from"./sn-button.B1LvAG78.js";import{_ as C}from"./sn-line.DzqrU5y1.js";import{_ as B}from"./sn-view.BKJ7GZxj.js";import{_ as h}from"./sn-page.Nlp4LDKz.js";const U=S(t(Object.assign({name:"sn-checkbox-tag"},{__name:"sn-checkbox-tag",props:{text:{type:String,default:""},type:{type:String,default:""},level:{type:String,default:""},disabled:{type:Boolean,default:!1},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(e,t){var v=t.expose;const g=l.utils,f=l.colors,V=p(),y=e,_=a(!1),S=a(null),k=o("tagType",a("primary")),C=o("tagLevel",a("second")),B=o("tagTextColor",a("")),h=o("disabledTagTextColor",a("")),U=o("tagActiveTextColor",a("")),j=o("disabledTagActiveTextColor",a("")),E=o("tagTextSize",a("")),A=o("tagBorderRadius",a("10px")),$=o("tagPadding",a("5px 8px")),z=o("tagBgColor",a("")),R=o("disabledTagBgColor",a("")),w=o("tagActiveBgColor",a("")),D=o("disabledTagActiveBgColor",a("")),O=o("customTagStyle",a({})),I=o("customTextStyle",a({})),L=u((()=>V.proxy.$parent)),M=u((()=>{let e=y.type;return e=g.isEmpty(e)?k.value:e,["info","warning","error","success","primary"].includes(e)?e:"info"})),P=u((()=>{let e=y.level;return e=g.isEmpty(e)?C.value:e,["first","second"].includes(e)?e:"second"})),q=u((()=>y.disabled?_.value?g.isEmpty(D.value)?f.value.disabledDark:D.value:g.isEmpty(R.value)?f.value.disabled:R.value:_.value?g.isEmpty(w.value)?"info"==M.value?f.value.dark:f.value["".concat(M.value).concat("second"==P.value?"Light":"")]:w.value:g.isEmpty(z.value)?f.value.info:z.value)),G=u((()=>y.disabled?_.value?g.isEmpty(j.value)?f.value.disabledDarkText:j.value:g.isEmpty(h.value)?f.value.disabledText:h.value:_.value?g.isEmpty(U.value)?"info"==M.value?f.value.front:f.value["".concat(M.value).concat("second"==P.value?"":"Dark")]:U.value:g.isEmpty(B.value)?f.value.text:B.value)),H=u((()=>{let e=new Map;return e.set("border-radius",A.value),e.set("padding",$.value),e}));function J(){y.disabled||L.value.$callMethod("syncData",V.proxy,!_.value)}return v({updateValue:function(e){_.value=e}}),d((()=>{n((()=>{L.value.$callMethod("register",V.proxy)}))})),(t=null,l=null)=>{const a=b(s("sn-tag"),T);return m(),i(a,{class:x(["sn-checkbox-tag",e.disabled?"disabled":""]),ref_key:"tagEle",ref:S,text:e.text,bgColor:r(q),textColor:r(G),textSize:r(E),customTextStyle:r(I),customStyle:e.customStyle,onClick:J,style:c([r(H),r(O)])},null,8,["class","text","bgColor","textColor","textSize","customTextStyle","customStyle","style"])}}})),[["__scopeId","data-v-af0de2ea"]]),j=t({__name:"sn-checkbox",setup(t){l.colors;const o=a([0,1]),u=a([1]);a([]);const x=a([2]),c=a([1,2]),p=a([0,1]),T=a([0,2]),S=a([0,1,3]),j=a([]),E=a(!0);return d((()=>{n((()=>{setTimeout((()=>{E.value=!1}),500)}))})),(t=null,l=null)=>{const a=b(s("sn-topbar"),e),d=b(s("sn-checkbox"),V),n=b(s("sn-checkbox-group"),y),A=b(s("com-card"),_),$=b(s("sn-checkbox-tag"),U),z=b(s("sn-line"),C),R=b(s("sn-text"),k),w=b(s("sn-view"),B),D=b(s("sn-page"),h);return m(),i(D,null,{default:v((()=>[g(a,{title:"Checkbox 复选"}),g(w,{loading:r(E)},{default:v((()=>[g(A,{title:"基础用法",note:"跟radio的用法很像，但可以多选 \\n（注意：一组sn-checkbox、sn-checkbox-tag必须放在sn-checkbox-group里）"},{default:v((()=>[g(n,{modelValue:r(o),"onUpdate:modelValue":l[0]||(l[0]=(e=null)=>f(o)?o.value=e:null)},{default:v((()=>[g(d,{text:"苹果"}),g(d,{text:"香蕉"}),g(d,{text:"菠萝"})])),_:1},8,["modelValue"])])),_:1}),g(A,{title:"类型",note:"自定义复选组显示的样式（支持两种组件：sn-checkbox和sn-checkbox-tag）"},{default:v((()=>[g(n,{modelValue:r(u),"onUpdate:modelValue":l[1]||(l[1]=(e=null)=>f(u)?u.value=e:null)},{default:v((()=>[g(d,{text:"及格"}),g(d,{text:"良好"}),g(d,{text:"优秀"})])),_:1},8,["modelValue"]),g(n,{modelValue:r(u),"onUpdate:modelValue":l[2]||(l[2]=(e=null)=>f(u)?u.value=e:null)},{default:v((()=>[g($,{text:"及格"}),g($,{text:"良好"}),g($,{text:"优秀"})])),_:1},8,["modelValue"])])),_:1}),g(A,{title:"圆角",note:"复选组件可设置统一的圆角"},{default:v((()=>[g(n,{modelValue:r(x),"onUpdate:modelValue":l[3]||(l[3]=(e=null)=>f(x)?x.value=e:null),boxBorderRadius:"100px",boxIconSize:"13px",customBoxContainStyle:{marginBottom:"15px"}},{default:v((()=>[g(d,{text:"小桥流水"}),g(d,{text:"烟火"}),g(d,{text:"夕阳"})])),_:1},8,["modelValue"]),g(z),g(n,{modelValue:r(x),"onUpdate:modelValue":l[4]||(l[4]=(e=null)=>f(x)?x.value=e:null),tagBorderRadius:"100px"},{default:v((()=>[g($,{text:"小桥流水"}),g($,{text:"烟火"}),g($,{text:"夕阳"})])),_:1},8,["modelValue"])])),_:1}),g(A,{title:"图标 【Box特色】",note:"box 复选组件可设置选中图标。既可以给整个复选组设置统一图标，也可以为某一个子组件单独设置"},{default:v((()=>[g(n,{modelValue:r(c),"onUpdate:modelValue":l[5]||(l[5]=(e=null)=>f(c)?c.value=e:null),boxSize:"26px",boxBorderRadius:"8px",boxIcon:"heart-3-fill"},{default:v((()=>[g(d,{text:"A1"}),g(d,{text:"B2",icon:"user-smile-fill"}),g(d,{text:"C3"}),g(d,{text:"D4"})])),_:1},8,["modelValue"])])),_:1}),g(A,{title:"方向",note:"复选组可以设置排列的方向（竖向和横向），适用于多种场景"},{default:v((()=>[g(n,{modelValue:r(p),"onUpdate:modelValue":l[6]||(l[6]=(e=null)=>f(p)?p.value=e:null),vertical:"",customBoxContainStyle:{marginBottom:"15px"}},{default:v((()=>[g(d,{text:"一曲新词酒一杯"}),g(d,{text:"去年天气旧亭台"}),g(d,{text:"夕阳西下几时回"})])),_:1},8,["modelValue"]),g(z),g(n,{modelValue:r(p),"onUpdate:modelValue":l[7]||(l[7]=(e=null)=>f(p)?p.value=e:null),vertical:"",spacing:"5px",tagBorderRadius:"15px",tagPadding:"10px 15px"},{default:v((()=>[g($,{text:"无可奈何花落去"}),g($,{text:"似曾相识燕归来"}),g($,{text:"小园香径独徘徊"})])),_:1},8,["modelValue"])])),_:1}),g(A,{title:"默认值",note:"复选组可以设置默认的选项，更懂用户的选择"},{default:v((()=>[g(n,{modelValue:r(T),"onUpdate:modelValue":l[8]||(l[8]=(e=null)=>f(T)?T.value=e:null)},{default:v((()=>[g(d,{text:"李白"}),g(d,{text:"杜甫"}),g(d,{text:"王勃"}),g(d,{text:"苏轼"}),g(d,{text:"李清照"})])),_:1},8,["modelValue"]),g(z),g(n,{modelValue:r(T),"onUpdate:modelValue":l[9]||(l[9]=(e=null)=>f(T)?T.value=e:null),spacing:"5px"},{default:v((()=>[g($,{text:"李白"}),g($,{text:"杜甫"}),g($,{text:"王勃"}),g($,{text:"苏轼"}),g($,{text:"李清照"})])),_:1},8,["modelValue"])])),_:1}),g(A,{title:"禁用",note:"为单个单选设置禁用状态\\n 注意：只是禁用手动点击，不会屏蔽数据的修改"},{default:v((()=>[g(R,{class:"introduction",text:"　　"}),g(n,{modelValue:r(S),"onUpdate:modelValue":l[10]||(l[10]=(e=null)=>f(S)?S.value=e:null)},{default:v((()=>[g(d,{text:"秦朝",disabled:""}),g(d,{text:"汉朝"}),g(d,{text:"晋朝",disabled:""}),g(d,{text:"唐朝"}),g(d,{text:"清朝",disabled:""})])),_:1},8,["modelValue"]),g(z),g(n,{modelValue:r(S),"onUpdate:modelValue":l[11]||(l[11]=(e=null)=>f(S)?S.value=e:null),spacing:"5px"},{default:v((()=>[g($,{text:"秦朝",disabled:""}),g($,{text:"汉朝"}),g($,{text:"晋朝",disabled:""}),g($,{text:"唐朝"}),g($,{text:"清朝",disabled:""})])),_:1},8,["modelValue"])])),_:1}),g(A,{title:"自定义样式",note:"通过丰富的组件属性，你可以自由地控制组件每个部分的样式，实现一些很酷的东西"},{default:v((()=>[g(n,{modelValue:r(j),"onUpdate:modelValue":l[12]||(l[12]=(e=null)=>f(j)?j.value=e:null),spacing:"7px",tagActiveTextColor:"#e54e09",tagTextColor:"$infoText",tagActiveBgColor:"$info",tagBgColor:"$info",tagBorderRadius:"100px",tagPadding:"5px 13px",tagTextSize:"14px"},{default:v((()=>[g($,{text:"梦入江南烟水路"}),g($,{text:"丹枫万叶碧云边"}),g($,{text:"小院闲庭，轻寒翠袖生"})])),_:1},8,["modelValue"])])),_:1})])),_:1},8,["loading"])])),_:1})}}});export{j as default};
