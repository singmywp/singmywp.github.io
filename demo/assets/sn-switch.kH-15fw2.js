import{b as e,d as t,a,c as l}from"./sn-button.68-4Ol7n.js";import{d as i,r as o,c as s,b as n,e as d,f as r,m as u,u as c,p as g,o as f,v as p,g as v}from"./index-BV7wVSs2.js";import{$ as b,r as y}from"./uni-app.es.BzKMvEv9.js";const x=l(i(Object.assign({name:"sn-switch"},{__name:"sn-switch",props:{modelValue:{type:Boolean,default:!1},width:{type:String,default:"50px"},height:{type:String,default:"25px"},text:{type:String,default:""},icon:{type:String,default:""},iconSize:{type:String,default:""},padding:{type:String,default:"5px"},borderRadius:{type:String,default:""},bgColor:{type:String,default:""},activeBgColor:{type:String,default:""},disabledBgColor:{type:String,default:""},disabledActiveBgColor:{type:String,default:""},blockColor:{type:String,default:"#fff"},activeBlockColor:{type:String,default:"#fff"},disabledBlockColor:{type:String,default:"#fff"},disabledActiveBlockColor:{type:String,default:"#fff"},blockBorderRadius:{type:String,default:""},textColor:{type:String,default:"#fff"},textSize:{type:String,default:""},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customStyle:{type:Object,default:{}}},emits:["change","update:modelValue"],setup(l,i){var x=i.emit;const S=b.colors,h=b.utils,m=x,C=l,k=o(null),B=s({get:()=>C.modelValue,set:e=>{m("update:modelValue",e)}}),w=s((()=>Math.min(h.getPx(C.width),h.getPx(C.height))-2*h.getPx(C.padding))),z=s((()=>B.value?h.getPx(C.width)-w.value-2*h.getPx(C.padding):0)),_=s((()=>w.value+2*h.getPx(C.padding))),P=s((()=>!h.isEmpty(C.text))),R=s((()=>!h.isEmpty(C.icon))),j=s((()=>""==C.iconSize?b.configs.font.size(1):C.iconSize)),A=s((()=>""==C.borderRadius?b.configs.radius.circle:C.borderRadius)),M=s((()=>""==C.bgColor?S.value.line:C.bgColor)),V=s((()=>""==C.activeBgColor?S.value.primary:C.activeBgColor)),E=s((()=>""==C.disabledBgColor?S.value.disabled:C.disabledBgColor)),O=s((()=>""==C.disabledActiveBgColor?S.value.disabledDark:C.disabledActiveBgColor)),T=s((()=>""==C.blockBorderRadius?b.configs.radius.circle:C.blockBorderRadius)),D=s((()=>""==C.textSize?b.configs.font.size(2):C.textSize)),I=s((()=>{let e=new Map;return e.set("border-radius",A.value),e.set("padding",C.padding),e.set("height",C.height),e.set("width",C.width),e.set("background",C.disabled?B.value?O.value:E.value:B.value?V.value:M.value),e.set("transition-duration",b.configs.aniTime.normal),e})),X=s((()=>{let e=new Map;return e.set("color",C.textColor),e.set("fontSize",D.value),e.set("left",B.value?"":"".concat(_.value,"px")),e.set("right",B.value?"".concat(_.value,"px"):""),e})),$=s((()=>{let e=new Map;return e.set("width","".concat(w.value,"px")),e.set("height","".concat(w.value,"px")),e.set("border-radius",T.value),e.set("background",C.disabled?B.value?C.disabledActiveBlockColor:C.disabledBlockColor:B.value?C.activeBlockColor:C.blockColor),e.set("transform","translateX(".concat(z.value,"px)")),e.set("transition-duration",b.configs.aniTime.normal),e}));function q(){C.disabled||C.loading||(B.value=!B.value,m("change",{value:B.value}))}return(i=null,o=null)=>{const s=y(n("sn-text"),e),b=y(n("sn-loading"),t),x=y(n("sn-icon"),a),h=g;return f(),d(h,{class:"sn-switch",onClick:q,style:u(c(I))},{default:r((()=>[c(P)?(f(),d(s,{key:0,class:"sn-switch-text",text:l.text,style:u(c(X))},null,8,["text","style"])):p("",!0),v(h,{class:"sn-switch-block",ref_key:"blockEle",ref:k,style:u(c($))},{default:r((()=>[l.loading?(f(),d(b,{key:0,class:"sn-switch-icon",iconSize:"".concat(.6*c(w),"px"),iconColor:l.disabled?c(S).info:c(B)?c(V):c(M)},null,8,["iconSize","iconColor"])):p("",!0),c(R)&&!l.loading?(f(),d(x,{key:1,class:"sn-switch-icon",name:l.icon,color:l.disabled?c(S).info:c(B)?c(V):c(M),size:c(j)},null,8,["name","color","size"])):p("",!0)])),_:1},8,["style"])])),_:1},8,["style"])}}})),[["__scopeId","data-v-eb082f69"]]);export{x as _};