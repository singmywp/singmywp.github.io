import{d as t,r as e,k as l,l as o,c as n,e as a,f as s,p as u,u as i,q as r,o as c,t as d,b as y,m as g,v as f,G as m,g as p,I as b,J as v,h as S,F as C,j as x,B as h,Q as B}from"./index-C41ek1zM.js";import{c as k,a as z,b as _,_ as T}from"./sn-button.CpSyIQkh.js";import{$ as w,r as I,S as j}from"./uni-app.es.DMEFtuWf.js";const M=k(t(Object.assign({name:"sn-button-group"},{__name:"sn-button-group",props:{vertical:{type:Boolean,default:!1},merge:{type:Boolean,default:!1},justify:{type:String,default:"flex-start"},align:{type:String,default:"flex-start"}},setup(t){const y=t,g=e(null);l((()=>{o((()=>{let t=g.value.children,e=y.merge;for(let l=0;l<t.length;l++){let o=t[l];"COMMENT"!=o.tagName&&(o.style.setProperty("transition-duration",w.configs.aniTime.normal),o.style.setProperty("margin-right",e?"0":""),o.style.setProperty("margin-bottom",e?"0":""))}}))}));const f=n((()=>{let t=new Map;return t.set("flexDirection",y.vertical?"column":"row"),t.set("justifyContent",y.justify),t.set("alignItems",y.align),t.set("transition-duration",w.configs.aniTime.normal),t}));return(t=null,e=null)=>{const l=r;return c(),a(l,{ref_key:"buttonGroupEle",ref:g,class:"sn-button-group",style:u(i(f))},{default:s((()=>[d(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-a38799f2"]]),O=k(t(Object.assign({name:"sn-menu-item"},{__name:"sn-menu-item",props:{listMode:{type:Boolean,default:!1},icon:{type:String,default:""},text:{type:String,default:""},iconColor:{type:String,default:""},iconSize:{type:String,default:""},textColor:{type:String,default:""},textSize:{type:String,default:""},textAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},bgColor:{type:String,default:""},activeBgColor:{type:String,default:""},customIconStyle:{type:Object,default:{}},customTextStyle:{type:Object,default:{}},customStyle:{type:Object,default:{}}},setup(t){const l=w.colors,o=w.utils,d=t,b=e(!1),v=n((()=>""==d.iconColor?l.value.text:d.iconColor)),S=n((()=>""==d.textColor?l.value.text:d.textColor)),C=n((()=>""==d.activeBgColor?l.value.info:d.activeBgColor)),x=n((()=>""==d.iconSize?w.configs.font.size(4):d.iconSize)),h=n((()=>""==d.textSize?w.configs.font.size(2):d.textSize)),B=n((()=>{let t=new Map,e=d.disabled?l.value.disabled:b.value?C.value:""==d.bgColor?l.value.front:d.bgColor;return t.set("background",e),t.set("transition-duration",w.configs.aniTime.normal),t})),k=n((()=>{let t=new Map;return t.set("marginRight","".concat(o.getPx(x.value)/2,"px")),t.set("transition-duration",w.configs.aniTime.normal),t})),T=n((()=>!o.isEmpty(d.icon)));return(e=null,o=null)=>{const n=I(y("sn-icon"),z),d=I(y("sn-text"),_),C=r,w=m;return t.listMode?t.listMode?(c(),a(w,{key:1,class:"sn-menu-item",onTouchstart:o[5]||(o[5]=(t=null)=>b.value=!0),onTouchend:o[6]||(o[6]=(t=null)=>b.value=!1),onTouchcancel:o[7]||(o[7]=(t=null)=>b.value=!1),style:u([i(B),t.customStyle])},{default:s((()=>[i(T)?(c(),a(n,{key:0,name:t.icon,size:i(x),color:t.disabled?i(l).disabled:i(v),customStyle:t.customIconStyle,style:u(i(k))},null,8,["name","size","color","customStyle","style"])):f("",!0),p(d,{class:"sn-menu-item-text",text:t.text,align:t.textAlign,size:i(h),color:t.disabled?i(l).disabled:i(S),customStyle:t.customTextStyle},null,8,["text","align","size","color","customStyle"])])),_:1},8,["style"])):f("",!0):(c(),a(C,{key:0,class:g(["sn-menu-item",new UTSJSONObject({disabled:t.disabled})]),onTouchstart:o[0]||(o[0]=(t=null)=>b.value=!0),onTouchend:o[1]||(o[1]=(t=null)=>b.value=!1),onTouchcancel:o[2]||(o[2]=(t=null)=>b.value=!1),onMousedown:o[3]||(o[3]=(t=null)=>b.value=!0),onMouseup:o[4]||(o[4]=(t=null)=>b.value=!1),style:u([i(B),t.customStyle])},{default:s((()=>[i(T)?(c(),a(n,{key:0,name:t.icon,size:i(x),color:t.disabled?i(l).disabled:i(v),style:u(i(k)),customStyle:t.customIconStyle},null,8,["name","size","color","style","customStyle"])):f("",!0),p(d,{class:"sn-menu-item-text",text:t.text,align:t.textAlign,size:i(h),color:t.disabled?i(l).disabled:i(S),customStyle:t.customTextStyle},null,8,["text","align","size","color","customStyle"])])),_:1},8,["class","style"]))}}})),[["__scopeId","data-v-d97d5eba"]]),A=k(t(Object.assign({name:"sn-overlay"},{__name:"sn-overlay",props:{maskClose:{type:Boolean,default:!0},renderMode:{type:String,default:"v-if"},opacity:{type:Number,default:.3},aniTime:{type:Number,default:parseInt(w.configs.aniTime.long)},bgColor:{type:String,default:"#000"},customStyle:{type:Object,default:{}}},emits:["clickMask"],setup(t,l){var y=l.expose;const g=l.emit,m=w.utils,p=t,S=e(!1),C=e(null),x=e(m.randomComId()),h=e(m.randomComId()),B=n((()=>{let t=p.bgColor,e=w.libs.color.tinyColor(t),l=e.isValid?e.toRgb():w.libs.color.tinyColor("#000").toRgb();return[l.r,l.g,l.b]})),k=n((()=>p.aniTime==parseInt(w.configs.aniTime.long)?parseInt(w.configs.aniTime.long):p.aniTime)),z=n((()=>"v-show"==p.renderMode?"v-show":"v-if")),_=n((()=>{let t=new Map;return t.set("zIndex",w.configs.zIndex.overlay),t.set("transition-duration","".concat(k.value,"ms")),t}));function T(t){o((()=>{if(null==C.value)return null;let e=C.value.style;m.throttle((()=>{null==e||e.setProperty("background-color","rgba(".concat(B.value[0],", ").concat(B.value[1],", ").concat(B.value[2],", ").concat(p.opacity,")")),null==e||e.setProperty("opacity","".concat(t?1:0))}),20,h.value)}))}function I(){T(!1),m.throttle((()=>{S.value=!1}),k.value,x.value)}function j(){p.maskClose&&(I(),g("clickMask"))}return y({open:function(){S.value=!0,o((()=>{T(!0)}))},close:I}),(e=null,l=null)=>{const o=r;return"v-if"!=i(z)||i(S)?b((c(),a(o,{key:0,class:"sn-overlay",ref_key:"overlayEle",ref:C,style:u([i(_),t.customStyle]),onClick:j},{default:s((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])),[[v,"v-show"!=i(z)||i(S)]]):f("",!0)}}})),[["__scopeId","data-v-ddc8e303"]]),E=k(t(Object.assign({name:"sn-topbar"},{__name:"sn-topbar",props:{height:{type:String,default:""},title:{type:String,default:""},titleColor:{type:String,default:""},titleFont:{type:String,default:"alipuhuiheavy"},titleSize:{type:String,default:""},bgColor:{type:String,default:""},menuBgColor:{type:String,default:""},activeMenuBgColor:{type:String,default:""},fixed:{type:Boolean,default:!0},boxShadow:{type:String,default:""},border:{type:String,default:""},borderRadius:{type:String,default:""},backButton:{type:Boolean,default:!0},menuButton:{type:Boolean,default:!1},buttonSize:{type:String,default:"35px"},buttonBgColor:{type:String,default:""},buttonSpacing:{type:String,default:"0px"},titleAlign:{type:String,default:"left"},features:{type:Array,default:[],validator:t=>{for(let e=0;e<t.length;e++){let l=t[e];if("menu"==l.id||null==l.icon)throw new Error("sn-topbar: feature 属性子项 id 不能为“menu”")}return!0}},menuData:{type:Array,default:[]},customTitleStyle:{type:Object,default:{}},customButtonStyle:{type:Object,default:{}},customButtonIconStyle:{type:Object,default:{}},customMenuStyle:{type:Object,default:{}},customStyle:{type:Object,default:{}}},emits:["button-click","menu-click"],setup(t,l){var o=l.emit;const m=w.colors,b=w.utils,v=o,k=t,E=e(null),$=e(!1),N=e(b.randomComId()),P=new j({id:"menu",text:"",icon:"more-fill"}),R=n((()=>w.configs.app.theme)),D=n((()=>!b.isEmpty(k.title))),F=n((()=>"light"==w.configs.app.theme?.15:.5)),J=n((()=>""==k.titleColor?m.value.title:k.titleColor)),G=n((()=>""==k.height?w.configs.page.topbarHeight:k.height)),U=n((()=>""==k.titleSize?w.configs.font.size(4):k.titleSize)),q=n((()=>""==k.bgColor?m.value.page:k.bgColor)),H=n((()=>""==k.menuBgColor?m.value["".concat("light"==R.value?"front":"info")]:k.menuBgColor)),L=n((()=>""==k.menuBgColor?m.value["".concat("light"==R.value?"info":"infoLight")]:k.menuBgColor)),Q=n((()=>{let t="light"==w.configs.app.theme?255:0;return""==k.buttonBgColor?"rgba(".concat(t,",").concat(t,",").concat(t,",0)"):k.buttonBgColor})),V=n((()=>{let t=new Map;return t.set("height",G.value),t.set("box-shadow",k.boxShadow),t.set("border-radius",k.borderRadius),t.set("border",k.border),t.set("backgroundColor",q.value),t.set("zIndex",w.configs.zIndex.navTabBar),t.set("transition-duration",w.configs.aniTime.normal),t})),K=n((()=>{let t=new Map;return t.set("top",G.value),t.set("background",H.value),t.set("zIndex",w.configs.zIndex.popup),t.set("transition-duration",w.configs.aniTime.normal),t}));function W(t){var e,l,o,n;t?(null===(l=null===(e=E.value)||void 0===e?void 0:e.open)||void 0===l||l.call(e),b.throttle((()=>{$.value=!0}),20,N.value)):($.value=!1,null===(n=null===(o=E.value)||void 0===o?void 0:o.close)||void 0===n||n.call(o))}function X(){$.value&&W(!1)}function Y(t){"menu"==t.id&&W(!0),v("button-click",t)}function Z(){B()}return(e=null,l=null)=>{const o=I(y("sn-icon"),z),n=I(y("sn-button"),T),m=I(y("sn-text"),_),b=I(y("sn-button-group"),M),B=r,k=I(y("sn-menu-item"),O),w=I(y("sn-overlay"),A);return c(),S(C,null,[p(B,{class:g(["sn-topbar",1==t.fixed?"sn-topbar-fixed":""]),style:u([i(V),t.customStyle])},{default:s((()=>[d(e.$slots,"header",{},(()=>[t.backButton?(c(),a(n,{key:0,round:"",roundSize:t.buttonSize,bgColor:i(Q),activeBgColor:i(Q),onClick:Z,style:u([t.customButtonStyle])},{default:s((()=>[p(o,{name:"arrow-left-s-line",style:u([t.customButtonIconStyle])},null,8,["style"])])),_:1},8,["roundSize","bgColor","activeBgColor","style"])):f("",!0)]),!0),d(e.$slots,"default",{},(()=>[i(D)?(c(),a(m,{key:0,overflow:"ellipsis",lines:1,text:t.title,color:i(J),align:t.titleAlign,font:t.titleFont,size:i(U),style:u(["flex: 1;margin: 0px 10px",t.customTitleStyle])},null,8,["text","color","align","font","size","style"])):f("",!0)]),!0),d(e.$slots,"footer",{},(()=>[p(b,{align:"center",spacing:t.buttonSpacing},{default:s((()=>[(c(!0),S(C,null,x(t.features,((e,l)=>(c(),a(n,{round:"",key:l,roundSize:t.buttonSize,bgColor:i(Q),activeBgColor:i(Q),onClick:(t=null)=>Y(e),style:u([t.customButtonStyle])},{default:s((()=>{var t;return[p(o,{name:null!==(t=e.icon)&&void 0!==t?t:""},null,8,["name"])]})),_:2},1032,["roundSize","bgColor","activeBgColor","onClick","style"])))),128)),t.menuButton?(c(),a(n,{key:0,round:"",roundSize:t.buttonSize,activeBgColor:i(Q),bgColor:i(Q),onClick:l[0]||(l[0]=(t=null)=>Y(P)),style:u([t.customButtonStyle])},{default:s((()=>[p(o,{name:"more-fill"})])),_:1},8,["roundSize","activeBgColor","bgColor","style"])):f("",!0)])),_:1},8,["spacing"])]),!0)])),_:3},8,["class","style"]),p(w,{ref_key:"overlayEle",ref:E,opacity:i(F),maskClose:!1,onTouchstart:l[3]||(l[3]=(t=null)=>X()),onMousedown:l[4]||(l[4]=(t=null)=>X())},{default:s((()=>[d(e.$slots,"menu",{},(()=>[p(B,{class:g(["sn-topbar-menu",new UTSJSONObject({"sn-topbar-menu-show":i($)})]),onTouchstart:l[1]||(l[1]=h((()=>{}),["stop"])),onMousedown:l[2]||(l[2]=h((()=>{}),["stop"])),style:u([i(K),t.customMenuStyle])},{default:s((()=>[(c(!0),S(C,null,x(t.menuData,((t,e)=>{var l,o;return c(),a(k,{key:e,bgColor:i(H),activeBgColor:i(L),icon:null!==(l=t.icon)&&void 0!==l?l:"",text:null!==(o=t.text)&&void 0!==o?o:"",onClick:(e=null)=>(v("menu-click",t),void W(!1))},null,8,["bgColor","activeBgColor","icon","text","onClick"])})),128))])),_:1},8,["class","style"])]),!0)])),_:3},8,["opacity"]),t.fixed?(c(),a(B,{key:0,class:"fixed-placeholder",style:u({height:i(G)})},null,8,["style"])):f("",!0)],64)}}})),[["__scopeId","data-v-6cee5d81"]]);export{E as _,M as a,A as b,O as c};