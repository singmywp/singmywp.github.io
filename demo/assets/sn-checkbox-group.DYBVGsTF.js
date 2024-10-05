import{a as e,b as o,c as t}from"./sn-button.B1LvAG78.js";import{d as l,$ as a,r,k as s,c as d,w as i,l as c,m as n,a as u,b as x,e as b,p as g,q as p,u as y,j as f,o as v,f as B,B as S,C,t as T,D as m,y as h}from"./index-DoInGK9X.js";import{r as A}from"./uni-app.es.K1mZmM8s.js";const O=t(l(Object.assign({name:"sn-checkbox"},{__name:"sn-checkbox",props:{text:{type:String,default:""},icon:{type:String,default:""},disabled:{type:Boolean,default:!1},customContainStyle:{type:Object,default:new UTSJSONObject({})},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(t,l){var m=l.expose;const h=a.utils,O=a.colors,z=T(),I=t,j=r(!1),k=r(null),_=s("boxSize",d((()=>"".concat(a.utils.getPx(a.configs.font.size(3))+6,"px")))),w=s("boxBorderRadius",r("5px")),J=s("boxBorderWidth",r("2px")),N=s("boxTextSize",d((()=>a.configs.font.size(3)))),U=s("boxTextColor",d((()=>O.value.text))),M=s("disabledBoxTextColor",d((()=>O.value.disabledText))),R=s("boxIcon",r("check-fill")),V=s("boxIconSize",d((()=>a.configs.font.size(3)))),$=s("boxIconColor",r("#fff")),E=s("disabledBoxIconColor",r("#fff")),P=s("boxBorderColor",d((()=>O.value.line))),W=s("disabledBoxBorderColor",d((()=>O.value.disabled))),D=s("boxActiveBorderColor",d((()=>O.value.primary))),L=s("disabledBoxActiveBorderColor",d((()=>O.value.disabledText))),q=s("boxBgColor",r("transparent")),G=s("disabledBoxBgColor",d((()=>O.value.disabled))),F=s("boxActiveBgColor",d((()=>O.value.primary))),H=s("disabledBoxActiveBgColor",d((()=>O.value.disabledText))),K=s("customBoxContainStyle",r({})),Q=s("customBoxStyle",r({})),X=s("customBoxIconStyle",r({})),Y=s("customTextStyle",r({})),Z=d((()=>z.proxy.$parent)),ee=d((()=>{let e=new Map;return e.set("width",_.value),e.set("height",_.value),e.set("border-radius",w.value),e.set("border","".concat(parseInt(J.value),"px solid ").concat(I.disabled?j.value?L.value:W.value:j.value?D.value:P.value)),e.set("background",I.disabled?j.value?H.value:G.value:j.value?F.value:q.value),e.set("transition-duration",a.configs.aniTime.normal),e})),oe=r(!1),te=r("");function le(){I.disabled||Z.value.$callMethod("syncData",z.proxy,!j.value)}i(oe,(e=>{null==k.value||I.disabled||(h.isEmpty(te.value)&&(te.value="scale(1)"),k.value.style.setProperty("transform",e?"".concat(te.value.replace(/scale\((\d+(\.\d+)?)\)/g,"scale(0.9)")):te.value))})),m({updateValue:function(e){j.value=e}}),c((()=>{n((()=>{Z.value.$callMethod("register",z.proxy)}))}));const ae=d((()=>!h.isEmpty(I.text))),re=d((()=>h.isEmpty(I.icon)?R.value:I.icon));return(l=null,a=null)=>{const r=A(u("sn-icon"),e),s=f,d=A(u("sn-text"),o);return v(),x(s,{class:g(["sn-checkbox-contain",t.disabled?"disabled":""]),onTouchstart:a[0]||(a[0]=(e=null)=>oe.value=!0),onTouchend:a[1]||(a[1]=(e=null)=>oe.value=!1),onTouchcancel:a[2]||(a[2]=(e=null)=>oe.value=!1),onMousedown:a[3]||(a[3]=(e=null)=>oe.value=!0),onMouseup:a[4]||(a[4]=(e=null)=>oe.value=!1),onClick:le,style:p([y(K),t.customContainStyle])},{default:b((()=>[B(s,{class:"sn-checkbox",ref_key:"checkboxEle",ref:k,style:p([y(ee),y(Q),t.customStyle])},{default:b((()=>[B(r,{class:g(["sn-checkbox-icon",y(j)?"sn-checkbox-icon__active":""]),name:y(re),color:t.disabled?y(E):y($),size:y(V),style:p([y(X)])},null,8,["class","name","color","size","style"])])),_:1},8,["style"]),S(l.$slots,"default",{},(()=>[y(ae)?(v(),x(d,{key:0,class:"sn-checkbox-text",text:t.text,color:t.disabled?y(M):y(U),size:y(N),style:p([y(Y)])},null,8,["text","color","size","style"])):C("",!0)]),!0)])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-7e4a5937"]]),z=t(l(Object.assign({name:"sn-checkbox-group"},{__name:"sn-checkbox-group",props:{modelValue:{type:Array,default:[]},vertical:{type:Boolean,default:!1},boxSize:{type:String,default:""},boxBorderRadius:{type:String,default:""},boxBorderWidth:{type:String,default:"2px"},boxTextSize:{type:String,default:""},boxTextColor:{type:String,default:""},disabledBoxTextColor:{type:String,default:""},boxIcon:{type:String,default:"check-fill"},boxIconSize:{type:String,default:""},boxIconColor:{type:String,default:"#fff"},disabledBoxIconColor:{type:String,default:"#fff"},boxBorderColor:{type:String,default:""},disabledBoxBorderColor:{type:String,default:""},boxActiveBorderColor:{type:String,default:""},disabledBoxActiveBorderColor:{type:String,default:""},boxBgColor:{type:String,default:""},disabledBoxBgColor:{type:String,default:""},boxActiveBgColor:{type:String,default:""},disabledBoxActiveBgColor:{type:String,default:""},tagType:{type:String,default:"primary"},tagLevel:{type:String,default:"second"},tagTextColor:{type:String,default:""},disabledTagTextColor:{type:String,default:""},tagActiveTextColor:{type:String,default:""},disabledTagActiveTextColor:{type:String,default:""},tagTextSize:{type:String,default:""},tagBorderRadius:{type:String,default:"10px"},tagPadding:{type:String,default:"6px 10px"},tagBgColor:{type:String,default:""},disabledTagBgColor:{type:String,default:""},tagActiveBgColor:{type:String,default:""},disabledTagActiveBgColor:{type:String,default:""},customBoxContainStyle:{type:Object,default:new UTSJSONObject({})},customBoxStyle:{type:Object,default:new UTSJSONObject({})},customBoxIconStyle:{type:Object,default:new UTSJSONObject({})},customTagStyle:{type:Object,default:new UTSJSONObject({})},customTextStyle:{type:Object,default:new UTSJSONObject({})},customStyle:{type:Object,default:new UTSJSONObject({})}},emits:["change","update:modelValue"],setup(e,o){var t=o.expose,l=o.emit;const s=a.colors,u=a.utils,B=l,C=e,T=r(null),A=r([]),O=d((()=>h("color",C.boxTextColor,s.value.text))),z=d((()=>h("color",C.disabledBoxTextColor,s.value.disabledText))),I=d((()=>h("color",C.boxBorderColor,s.value.line))),j=d((()=>h("color",C.disabledBoxBorderColor,s.value.disabled))),k=d((()=>h("color",C.boxActiveBorderColor,s.value.primary))),_=d((()=>h("color",C.disabledBoxActiveBorderColor,s.value.disabledText))),w=d((()=>h("color",C.boxBgColor,s.value.transparent))),J=d((()=>h("color",C.disabledBoxBgColor,s.value.disabled))),N=d((()=>h("color",C.boxActiveBgColor,s.value.primary))),U=d((()=>h("color",C.disabledBoxActiveBgColor,s.value.disabledText))),M=d((()=>h("radius",C.boxBorderRadius,a.configs.radius.xsmall))),R=d((()=>h("font",C.boxSize,"".concat(u.getPx(a.configs.font.size(3))+6,"px")))),V=d((()=>h("font",C.boxTextSize,a.configs.font.size(3)))),$=d((()=>h("font",C.boxIconSize,a.configs.font.size(3)))),E=d((()=>h("font",C.tagTextSize,a.configs.font.size(2)))),P=d((()=>{let e=new Map;return e.set("sn-checkbox-group-vertical",C.vertical),e.set("sn-checkbox-group-horizontal",!C.vertical),e})),W=d((()=>C.boxBorderWidth)),D=d((()=>C.boxIcon)),L=d((()=>C.boxIconColor)),q=d((()=>C.disabledBoxIconColor)),G=d((()=>C.tagType)),F=d((()=>C.tagLevel)),H=d((()=>C.tagTextColor)),K=d((()=>C.disabledTagTextColor)),Q=d((()=>C.tagActiveTextColor)),X=d((()=>C.disabledTagActiveTextColor)),Y=d((()=>C.tagBorderRadius)),Z=d((()=>C.tagPadding)),ee=d((()=>C.tagBgColor)),oe=d((()=>C.disabledTagBgColor)),te=d((()=>C.tagActiveBgColor)),le=d((()=>C.disabledTagActiveBgColor)),ae=d((()=>C.customBoxContainStyle)),re=d((()=>C.customBoxStyle)),se=d((()=>C.customTagStyle)),de=d((()=>C.customTextStyle)),ie=d((()=>C.customBoxIconStyle));m("boxSize",R),m("boxBorderRadius",M),m("boxBorderWidth",W),m("boxTextSize",V),m("boxTextColor",O),m("disabledBoxTextColor",z),m("boxIcon",D),m("boxIconSize",$),m("boxIconColor",L),m("disabledBoxIconColor",q),m("boxBorderColor",I),m("disabledBoxBorderColor",j),m("boxActiveBorderColor",k),m("disabledBoxActiveBorderColor",_),m("boxBgColor",w),m("disabledBoxBgColor",J),m("boxActiveBgColor",N),m("disabledBoxActiveBgColor",U),m("tagType",G),m("tagLevel",F),m("tagTextColor",H),m("disabledTagTextColor",K),m("tagActiveTextColor",Q),m("disabledTagActiveTextColor",X),m("tagTextSize",E),m("tagBorderRadius",Y),m("tagPadding",Z),m("tagBgColor",ee),m("disabledTagBgColor",oe),m("tagActiveBgColor",te),m("disabledTagActiveBgColor",le),m("customBoxContainStyle",ae),m("customTextStyle",de),m("customBoxStyle",re),m("customTagStyle",se),m("customBoxIconStyle",ie);const ce=d({get:()=>C.modelValue,set:e=>{B("update:modelValue",e),B("change",e)}});function ne(){A.value.forEach(((e,o)=>{e.$callMethod("updateValue",ce.value.includes(o))}))}return t({register:function(e){A.value.push(e)},syncData:function(e,o){let t=A.value.indexOf(e),l=ce.value;l.includes(t)&&!o?l.splice(l.indexOf(t),1):!l.includes(t)&&o&&(l.push(t),l=u.quickSort(l)),ce.value=l}}),i(C.modelValue,(()=>{ne()})),c((()=>{n((()=>{ne()}))})),(o=null,t=null)=>{const l=f;return v(),x(l,{class:g(["sn-checkbox-group",y(P)]),ref_key:"groupEle",ref:T,style:p([e.customStyle])},{default:b((()=>[S(o.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-a5498997"]]);export{O as _,z as a};