import{_ as e}from"./sn-loading.t5otRKvs.js";import{d as t,$ as l,r as a,c as n,w as o,a as u,e as s,f as i,m as r,p as d,u as c,x as f,_ as v,b as g,B as p,z as y,g as b}from"./index-DYMgrqHp.js";import{r as x}from"./uni-app.es.DgDfNdgy.js";import{a as S,b as m}from"./sn-text.euomPoe8.js";const h=m(t(Object.assign({name:"sn-button"},{__name:"sn-button",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},text:{type:String,default:""},align:{type:String,default:"center"},type:{type:String,default:"info"},level:{type:String,default:"first"},padding:{type:String,default:"12px"},borderRadius:{type:String,default:""},textColor:{type:String,default:""},disabledTextColor:{type:String,default:""},bgColor:{type:String,default:""},activeBgColor:{type:String,default:""},disabledBgColor:{type:String,default:""},long:{type:Boolean,default:!1},round:{type:Boolean,default:!1},roundSize:{type:String,default:"45px"},textFont:{type:String,default:""},textSize:{type:String,default:""},dashed:{type:Boolean,default:!1},customStyle:{type:Object,default:new UTSJSONObject({})},customTextStyle:{type:Object,default:new UTSJSONObject({})}},emits:["click"],setup(t,m){var h=m.emit;const C=l.utils,T=l.colors,z=h,w=t,j=a(null),B=a(!1),_=n((()=>f("radius",w.borderRadius,l.configs.radius.normal))),k=n((()=>f("other",w.textFont,l.configs.font.mainFamily))),O=n((()=>f("font",w.textSize,l.configs.font.size(3)))),A=n((()=>w.loading)),E=n((()=>["first","second","third","least"].includes(w.level)?w.level:"first")),J=n((()=>["info","warning","error","success","primary"].includes(w.type)?w.type:"info")),$=n((()=>f("color",w.activeBgColor,""))),F=n((()=>f("color",w.bgColor,""))),L=n((()=>f("color",w.disabledBgColor,T.value.disabled))),M=n((()=>f("color",w.textColor,""))),N=n((()=>f("color",w.disabledTextColor,T.value.disabledText))),R=n((()=>{let e=$.value,t=!C.isEmpty(e);if(w.disabled)return L.value;if(!C.isEmpty(w.bgColor))return B.value?t?e:T.value.infoActive:F.value;if(w.dashed)return B.value?t?e:T.value.info:T.value.transparent;switch(E.value){case"first":default:return B.value?t?e:T.value["".concat(J.value,"Active")]:T.value["".concat(J.value)];case"second":return B.value?t?e:T.value["".concat(J.value,"LightActive")]:T.value["".concat(J.value,"Light")];case"third":return B.value?t?e:T.value.infoActive:T.value.info;case"least":return B.value?t?e:T.value.info:T.value.transparent}})),U=n((()=>w.disabled?N.value:C.isEmpty(w.textColor)?"info"==J.value?T.value.infoText:w.dashed?null!=T.value["".concat(J.value)]?T.value["".concat(J.value)]:M.value:"first"==E.value?T.value["".concat(J.value,"Text")]:T.value["".concat(J.value,"LightText")]:M.value)),P=n((()=>{let e=w.align;return"left"==e||"start"==e?"flex-start":"right"==e||"end"==e?"flex-end":"around"==e||"between"==e?"space-".concat(e):e})),I=n((()=>{const e=new Map;let t=w.round?w.roundSize:"";return e.set("height",t),e.set("width",t),e.set("background",R.value),e.set("border",w.dashed?"1px dashed ".concat(U.value):""),e.set("border-radius",w.round?l.configs.radius.circle:_.value),e.set("justifyContent",P.value),e.set("padding",w.round?0:w.padding),e.set("transition-duration",l.configs.aniTime.normal),e}));function q(e){if(w.disabled)return null;z("click",e)}return o(A,(e=>{if(null!=j.value&&!w.round){let t=j.value,l=t.getBoundingClientRect().width,a=C.getPx(w.textSize);t.style.setProperty("width",l+(e?a:-a))}})),(l=null,a=null)=>{const n=x(u("sn-loading"),e),o=x(u("sn-text"),S),f=v;return g(),s(f,{class:r(["sn-button",new UTSJSONObject({"sn-button-long":t.long,disabled:t.disabled,loading:t.loading})]),ref_key:"buttonEle",ref:j,onClick:q,onTouchstart:a[0]||(a[0]=(e=null)=>B.value=!0),onTouchend:a[1]||(a[1]=(e=null)=>B.value=!1),onTouchcancel:a[2]||(a[2]=(e=null)=>B.value=!1),onMousedown:a[3]||(a[3]=(e=null)=>B.value=!0),onMouseup:a[4]||(a[4]=(e=null)=>B.value=!1),style:d([c(I),t.customStyle])},{default:i((()=>[t.loading?(g(),s(n,{key:0,class:r(t.round?"":"sn-button-loading-noround"),iconColor:c(U),iconSize:c(O)},null,8,["class","iconColor","iconSize"])):p("",!0),null!=l.$slots.default?(g(),s(f,{key:1},{default:i((()=>[t.round&&t.loading?p("",!0):y(l.$slots,"default",{key:0},(()=>[b(o,{class:"sn-button-text",text:t.text,color:c(U),size:c(O),font:c(k),style:d([t.customTextStyle])},null,8,["text","color","size","font","style"])]),!0)])),_:3})):t.round&&t.loading?p("",!0):y(l.$slots,"default",{key:2},(()=>[b(o,{class:"sn-button-text",text:t.text,color:c(U),size:c(O),font:c(k),style:d([t.customTextStyle])},null,8,["text","color","size","font","style"])]),!0)])),_:3},8,["class","style"])}}})),[["__scopeId","data-v-3855e23d"]]);export{h as _};