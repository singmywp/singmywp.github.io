import{d as e,b as t,a as l,_ as a,c as o}from"./sn-button.BaZjRh9m.js";import{d as s,r as n,c as i,w as r,b as u,u as d,e as c,f as g,q as f,v as p,k as y,o as b,t as v,g as x}from"./index-DNTc1GxZ.js";import{$ as m,r as S}from"./uni-app.es.D9ZkitmT.js";const C=o(s(Object.assign({name:"sn-tag"},{__name:"sn-tag",props:{text:{type:String,default:""},align:{type:String,default:"center"},type:{type:String,default:"info"},level:{type:String,default:"first"},bgColor:{type:String,default:""},disabledBgColor:{type:String,default:""},textColor:{type:String,default:""},disabledTextColor:{type:String,default:""},textSize:{type:String,default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},iconSize:{type:String,default:""},iconColor:{type:String,default:""},disabledIconColor:{type:String,default:""},customTextStyle:{type:Object,default:{}},customStyle:{type:Object,default:{}}},setup(o){const s=m.colors,C=m.utils,z=o,h=n(null),B=n(!0),T=i((()=>["first","second","third","least"].includes(z.level)?z.level:"first")),_=i((()=>["info","warning","error","success","primary"].includes(z.type)?z.type:"info")),j=i((()=>"least"==T.value?"1px solid ".concat(s.value.line):"")),k=i((()=>""==z.textSize?m.configs.font.size(2):z.textSize)),w=i((()=>""==z.iconSize?m.configs.font.size(3):z.iconSize)),E=i((()=>{if(z.disabled)return C.isEmpty(z.disabledBgColor)?s.value.disabled:z.disabledBgColor;if(!C.isEmpty(z.bgColor))return z.bgColor;switch(T.value){case"first":default:return s.value["".concat(_.value)];case"second":return s.value["".concat(_.value,"Light")];case"third":return s.value.info;case"least":return"transparent"}})),I=i((()=>{let e="light"==m.configs.app.theme||"info"!=_.value?0:255;return"rgba(".concat(e,",").concat(e,",").concat(e,",").concat(0==e?.05:.2,")")})),O=i((()=>z.disabled?C.isEmpty(z.disabledTextColor)?s.value["disabled-text"]:z.disabledTextColor:C.isEmpty(z.textColor)?"first"==T.value||"info"==_.value?s.value["".concat(_.value,"Text")]:s.value["".concat(_.value)]:z.textColor)),P=i((()=>z.disabled?C.isEmpty(z.disabledIconColor)?O.value:z.disabledIconColor:C.isEmpty(z.iconColor)?O.value:z.iconColor)),$=i((()=>(C.getPx(w.value)+4).toString()+"px")),q=i((()=>{let e=new Map;return e.set("background",E.value),e.set("border-radius",m.configs.radius.small),e.set("border",j.value),e.set("justifyContent","center"==z.align?"center":"right"==z.align?"flex-end":"flex-start"),e.set("padding","5px 8px"),e.set("transition-duration",m.configs.aniTime.normal),e})),D=i((()=>z.loading));return r(D,(e=>{if(null!=h.value){let t=h.value,l=t.getBoundingClientRect().width,a=parseInt(k.value);t.style.setProperty("width",l+(e?a:-a))}})),(n=null,i=null)=>{const r=S(u("sn-loading"),e),C=S(u("sn-text"),t),z=S(u("sn-icon"),l),T=S(u("sn-button"),a),_=y;return d(B)?(b(),c(_,{key:0,class:"sn-tag",ref_key:"tagEle",ref:h,style:f([d(q),o.customStyle])},{default:g((()=>[d(D)?(b(),c(r,{key:0,class:"sn-tag-loading-noround",color:d(P)},null,8,["color"])):p("",!0),v(n.$slots,"default",{},(()=>[x(C,{class:"sn-tag-text",text:o.text,color:d(O),size:d(k),style:f([new UTSJSONObject({transitionDuration:d(m).configs.aniTime.normal}),o.customTextStyle])},null,8,["text","color","size","style"])]),!0),o.closable?(b(),c(T,{key:1,class:"sn-tag-close",level:"least",bgColor:d(s).transparent,activeBgColor:d(I),round:"",roundSize:d($),onClick:i[0]||(i[0]=(e=null)=>B.value=!1)},{default:g((()=>[x(z,{name:"close-fill",color:d(P),size:d(w)},null,8,["color","size"])])),_:1},8,["bgColor","activeBgColor","roundSize"])):p("",!0)])),_:3},8,["style"])):p("",!0)}}})),[["__scopeId","data-v-50b33f0f"]]);export{C as _};
