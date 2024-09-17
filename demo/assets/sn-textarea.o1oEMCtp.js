import{d as e,$ as t,c as o,a,b as l,e as r,q as n,u,z as s,j as d,o as i,f as c,t as p,v as f,ak as g}from"./index-BDGnenFq.js";import{b as y,c as m}from"./sn-button.DCeBN0oM.js";import{r as S}from"./uni-app.es.BfR9KIrQ.js";const h=m(e(Object.assign({name:"sn-textarea"},{__name:"sn-textarea",props:{modelValue:{type:String,default:""},name:{type:String,default:""},height:{type:String,default:"100px"},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:""},activeBorderColor:{type:String,default:""},bgColor:{type:String,default:""},activeBgColor:{type:String,default:""},cursor:{type:Number,default:0},cursorColor:{type:String,default:""},cursorSpacing:{type:Number,default:0},selectionStart:{type:Number,default:-1},selectionEnd:{type:Number,default:-1},placeholder:{type:String,default:""},placeholderStyle:{type:String,default:""},placeholderClass:{type:String,default:""},autoHeight:{type:Boolean,default:!1},confirmHold:{type:Boolean,default:!1},holdKeyboard:{type:Boolean,default:!1},adjustPosition:{type:Boolean,default:!0},activeBorder:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},disabledTextColor:{type:String,default:""},disabledBgColor:{type:String,default:""},readonly:{type:Boolean,default:!1},autoFocus:{type:Boolean,default:!1},borderRadius:{type:String,default:""},borderWidth:{type:String,default:"2px"},inputmode:{type:String,default:"text"},padding:{type:String,default:"8px 13px"},maxlength:{type:Number,default:-1},textSize:{type:String,default:""},textColor:{type:String,default:""},textFont:{type:String,default:""},align:{type:String,default:"left"},counterSize:{type:String,default:""},counterColor:{type:String,default:""},counterBgColor:{type:String,default:""},customCounterStyle:{type:Object,default:new UTSJSONObject({})},customContainStyle:{type:Object,default:new UTSJSONObject({})},customStyle:{type:Object,default:new UTSJSONObject({})}},emits:["update:modelValue","input","confirm","blur","focus","keyboardheightchange","linechange"],setup(e,m){var h=m.emit;const b=t.colors,x=t.utils,v=h,C=e,B=x.randomComId(),j=o({get:()=>C.modelValue,set:e=>{v("update:modelValue",e)}}),F=o((()=>t.store.get("sn-input:FocusId")==B)),_=o((()=>x.len(j.value))),w=o((()=>s("color",C.borderColor,b.value.line))),z=o((()=>s("color",C.activeBorderColor,b.value.primary))),H=o((()=>s("color",C.bgColor,b.value.front))),O=o((()=>s("color",C.activeBgColor,b.value.front))),T=o((()=>s("color",C.counterColor,b.value.text))),N=o((()=>s("color",C.counterBgColor,b.value.info))),P=o((()=>s("color",C.textColor,b.value.text))),I=o((()=>s("color",C.disabledBgColor,b.value.disabled))),k=o((()=>s("color",C.disabledTextColor,b.value.disabledText))),K=o((()=>s("radius",C.borderRadius,t.configs.radius.small))),E=o((()=>s("font",C.textSize,t.configs.font.baseSize))),M=o((()=>s("font",C.counterSize,t.configs.font.baseSize))),V=o((()=>{let e=new Map;return e.set("border-radius",K.value),e.set("transition-duration",t.configs.aniTime.normal),e})),J=o((()=>{let e=new Map;return e.set("border-radius",K.value),e.set("padding",C.padding),e.set("background-color",C.disabled?I.value:F.value?O.value:H.value),C.showBorder&&(e.set("border-style","solid"),e.set("border-width",C.borderWidth),e.set("border-color",C.activeBorder&&F.value?z.value:w.value)),C.autoHeight||e.set("height",x.addPx(x.getPx(C.height)+16)),e.set("transition-duration",t.configs.aniTime.normal),e})),U=o((()=>{let e=new Map;return e.set("fontSize",E.value),e.set("textAlign",C.align),e.set("fontFamily",C.textFont),e.set("color",C.disabled?k.value:P.value),C.autoHeight||e.set("height",x.addPx(x.getPx(C.height))),e})),R=o((()=>{let e=new Map;return e.set("fontSize",M.value),e.set("background",N.value),e.set("border-radius",t.configs.radius.circle),e.set("color",T.value),e.set("transition-duration",t.configs.aniTime.normal),e}));function W(e){j.value=e.detail.value,v("input",e)}function $(e){t.store.set("sn-input:FocusId",B),v("focus",e)}function q(e){t.store.set("sn-input:FocusId",""),v("blur",e)}function A(e){t.store.set("sn-input:FocusId",""),v("confirm",e)}function L(e){v("keyboardheightchange",e)}function D(e){v("linechange",e)}return(t=null,o=null)=>{const s=g,m=S(a("sn-text"),y),h=d;return i(),l(h,{class:"sn-textarea-contain",style:n([u(V),e.customContainStyle])},{default:r((()=>[c(h,{class:"sn-textarea",ref:"sn-textarea",style:n(u(J))},{default:r((()=>[c(s,{class:"sn-textarea__textarea",name:e.name,value:u(j),disabled:e.disabled||e.readonly,autoFocus:e.autoFocus,autoHeight:e.autoHeight,cursorColor:e.cursorColor,focus:e.focus,inputmode:e.inputmode,adjustPosition:e.adjustPosition,cursor:e.cursor,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,holdKeyboard:e.holdKeyboard,cursorSpacing:e.cursorSpacing,confirmHold:e.confirmHold,maxlength:e.maxlength,placeholder:e.placeholder,placeholderStyle:e.placeholderStyle,placeholderClass:e.placeholderClass,onInput:W,onKeyboardheightchange:L,onFocus:$,onBlur:q,onConfirm:A,onLinechange:D,style:n([u(U),e.customStyle])},null,8,["name","value","disabled","autoFocus","autoHeight","cursorColor","focus","inputmode","adjustPosition","cursor","selectionStart","selectionEnd","holdKeyboard","cursorSpacing","confirmHold","maxlength","placeholder","placeholderStyle","placeholderClass","style"]),p(t.$slots,"counter",{},(()=>[-1!=e.maxlength?(i(),l(m,{key:0,class:"sn-textarea__counter",text:"".concat(u(_),"/").concat(e.maxlength),style:n([u(R),e.customCounterStyle])},null,8,["text","style"])):f("",!0)]),!0)])),_:3},8,["style"])])),_:3},8,["style"])}}})),[["__scopeId","data-v-72497e33"]]);export{h as _};