import{d as t,c as e,e as o,f as l,p as n,u as a,$ as r,_ as s,b as u,z as i,a8 as c,r as d,S as f,a as y,h as p,m as g,g as m,B as b,F as S,x as v,j as C,A as B,a9 as x}from"./index-DYMgrqHp.js";import{b as w,_ as k,a as h}from"./sn-text.euomPoe8.js";import{r as z}from"./uni-app.es.DgDfNdgy.js";import{_}from"./sn-button.BjZePiC5.js";import{_ as j}from"./sn-menu-item.DkjoXkWj.js";import{_ as O}from"./sn-overlay.CiZFgEyq.js";const T=w(t(Object.assign({name:"sn-row"},{__name:"sn-row",props:{justify:{type:String,default:"start"},align:{type:String,default:"center"},wrap:{type:Boolean,default:!1},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(t){const c=t,d=e((()=>{let t=c.justify;return"left"==t||"start"==t?"flex-start":"right"==t||"end"==t?"flex-end":"around"==t||"between"==t?"space-".concat(t):t})),f=e((()=>{let t=c.align;return"top"==t||"start"==t?"flex-start":"bottom"==t||"end"==t?"flex-end":"around"==t||"between"==t?"space-".concat(t):t})),y=e((()=>{const t=new Map;return t.set("justify-content",d.value),t.set("align-items",f.value),t.set("flex-wrap",c.wrap?"wrap":"nowrap"),t.set("transition-duration",r.configs.aniTime.normal),t}));return(e=null,r=null)=>{const c=s;return u(),o(c,{class:"sn-row",style:n([a(y),t.customStyle])},{default:l((()=>[i(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-8ae0dd15"]]),I=t(Object.assign({name:"sn-e-blurview"},{__name:"index",props:{radius:{type:Number,default:15}},setup(t){const r=t,c=e((()=>{const t=new Map;return t.set("backdrop-filter","blur(".concat(r.radius,"px)")),t.set("-webkit-backdrop-filter","blur(".concat(r.radius,"px)")),t}));return(t=null,e=null)=>{const r=s;return u(),o(r,{style:n([a(c)])},{default:l((()=>[i(t.$slots,"default")])),_:3},8,["style"])}}})),M=w(t(Object.assign({name:"sn-topbar"},{__name:"sn-topbar",props:{height:{type:String,default:""},title:{type:String,default:""},titleColor:{type:String,default:""},titleFont:{type:String,default:"alipuhuiheavy"},titleSize:{type:String,default:""},blur:{type:Boolean,default:!1},bgColor:{type:String,default:""},menuBgColor:{type:String,default:""},activeMenuBgColor:{type:String,default:""},fixed:{type:Boolean,default:!0},boxShadow:{type:String,default:""},border:{type:String,default:""},borderRadius:{type:String,default:""},backButton:{type:Boolean,default:!0},backButtonIcon:{type:String,default:"arrow-left-s-line"},menuButton:{type:Boolean,default:!1},menuBorderRadius:{type:String,default:""},buttonSize:{type:String,default:"35px"},buttonBgColor:{type:String,default:""},titleAlign:{type:String,default:"left"},features:{type:Array,default:[],validator:t=>{for(let e=0;e<t.length;e++){let o=t[e];if("menu"==o.id||null==o.icon)throw new c("components","snTopbar",9010013)}return!0}},menuData:{type:Array,default:[]},customTitleStyle:{type:Object,default:new UTSJSONObject({})},customButtonStyle:{type:Object,default:new UTSJSONObject({})},customButtonIconStyle:{type:Object,default:new UTSJSONObject({})},customMenuStyle:{type:Object,default:new UTSJSONObject({})},customStyle:{type:Object,default:new UTSJSONObject({})}},emits:["button-click","menu-click"],setup(t,c){var w=c.emit;const M=r.colors,$=r.utils,J=w,N=t,U=d(null),A=d(!1),R=d($.randomComId()),F=new f({id:"menu",text:"",icon:"more-fill"}),D=e((()=>r.configs.app.theme)),E=e((()=>!$.isEmpty(N.title))),H=e((()=>"light"==r.configs.app.theme?.15:.5)),L=e((()=>v("color",N.titleColor,M.value.title))),Q=e((()=>v("other",N.height,r.configs.page.topbarHeight))),q=e((()=>v("font",N.titleSize,r.configs.font.size(4)))),G=e((()=>{let t=v("color",N.bgColor,M.value.page);if(N.blur){return r.libs.color.tinyColor(t).setAlpha(.8).toRgbString()}return t})),K=e((()=>v("color",N.menuBgColor,M.value["".concat("light"==D.value?"front":"info")]))),P=e((()=>v("radius",N.menuBorderRadius,r.configs.radius.normal))),V=e((()=>v("color",N.activeMenuBgColor,M.value["".concat("light"==D.value?"info":"infoLight")]))),W=e((()=>{let t="light"==r.configs.app.theme?255:0;return v("color",N.buttonBgColor,"rgba(".concat(t,",").concat(t,",").concat(t,",0)"))})),X=e((()=>{const t=new Map;return t.set("height",Q.value),t.set("box-shadow",N.boxShadow),t.set("border-radius",N.borderRadius),t.set("border",N.border),t.set("backgroundColor",G.value),t.set("zIndex",r.configs.zIndex.navTabBar),t.set("transition-duration",r.configs.aniTime.normal),t.set("flex-direction","row"),t.set("align-items","center"),t})),Y=e((()=>{const t=new Map;return t.set("top",Q.value),t.set("border-radius",P.value),t.set("background",K.value),t.set("zIndex",r.configs.zIndex.popup),t.set("transition-duration",r.configs.aniTime.normal),t}));function Z(t){var e,o,l,n;t?(null===(o=null===(e=U.value)||void 0===e?void 0:e.open)||void 0===o||o.call(e),$.throttle((()=>{A.value=!0}),20,R.value)):(A.value=!1,null===(n=null===(l=U.value)||void 0===l?void 0:l.close)||void 0===n||n.call(l))}function tt(){A.value&&Z(!1)}function et(t){"menu"==t.id&&Z(!0),J("button-click",t)}function ot(){x()}return(e=null,r=null)=>{const c=z(y("sn-icon"),k),d=z(y("sn-button"),_),f=z(y("sn-text"),h),v=z(y("sn-row"),T),x=s,w=z(y("sn-e-blurview"),I),M=z(y("sn-menu-item"),j),$=z(y("sn-overlay"),O);return u(),p(S,null,[t.blur?(u(),o(w,{key:1,class:g(["sn-topbar",1==t.fixed?"sn-topbar-fixed":""]),style:n([a(X),t.customStyle])},{default:l((()=>[i(e.$slots,"header",{},(()=>[t.backButton?(u(),o(d,{key:0,round:"",roundSize:t.buttonSize,bgColor:a(W),activeBgColor:a(W),onClick:ot,style:n([t.customButtonStyle])},{default:l((()=>[m(c,{name:"arrow-left-s-line",style:n([t.customButtonIconStyle])},null,8,["style"])])),_:1},8,["roundSize","bgColor","activeBgColor","style"])):b("",!0)]),!0),i(e.$slots,"default",{},(()=>[a(E)?(u(),o(f,{key:0,overflow:"ellipsis",lines:1,text:t.title,color:a(L),align:t.titleAlign,font:t.titleFont,size:a(q),style:n(["flex: 1;margin: 0px 10px",t.customTitleStyle])},null,8,["text","color","align","font","size","style"])):b("",!0)]),!0),i(e.$slots,"footer",{},(()=>[m(v,{align:"center"},{default:l((()=>[(u(!0),p(S,null,C(t.features,((e,r)=>(u(),o(d,{round:"",key:r,roundSize:t.buttonSize,bgColor:a(W),activeBgColor:a(W),onClick:(t=null)=>et(e),style:n([t.customButtonStyle])},{default:l((()=>{var t;return[m(c,{name:null!==(t=e.icon)&&void 0!==t?t:""},null,8,["name"])]})),_:2},1032,["roundSize","bgColor","activeBgColor","onClick","style"])))),128)),t.menuButton?(u(),o(d,{key:0,round:"",roundSize:t.buttonSize,activeBgColor:a(W),bgColor:a(W),onClick:r[1]||(r[1]=(t=null)=>et(F)),style:n([t.customButtonStyle])},{default:l((()=>[m(c,{name:"more-fill"})])),_:1},8,["roundSize","activeBgColor","bgColor","style"])):b("",!0)])),_:1})]),!0)])),_:3},8,["class","style"])):(u(),o(x,{key:0,class:g(["sn-topbar",1==t.fixed?"sn-topbar-fixed":""]),style:n([a(X),t.customStyle])},{default:l((()=>[i(e.$slots,"header",{},(()=>[t.backButton?(u(),o(d,{key:0,round:"",roundSize:t.buttonSize,bgColor:a(W),activeBgColor:a(W),onClick:ot,style:n([t.customButtonStyle])},{default:l((()=>[m(c,{name:t.backButtonIcon,style:n([t.customButtonIconStyle])},null,8,["name","style"])])),_:1},8,["roundSize","bgColor","activeBgColor","style"])):b("",!0)]),!0),i(e.$slots,"default",{},(()=>[a(E)?(u(),o(f,{key:0,overflow:"ellipsis",lines:1,text:t.title,color:a(L),align:t.titleAlign,font:t.titleFont,size:a(q),style:n(["flex: 1;margin: 0px 10px",t.customTitleStyle])},null,8,["text","color","align","font","size","style"])):b("",!0)]),!0),i(e.$slots,"footer",{},(()=>[m(v,{align:"center"},{default:l((()=>[(u(!0),p(S,null,C(t.features,((e,r)=>(u(),o(d,{round:"",key:r,roundSize:t.buttonSize,bgColor:a(W),activeBgColor:a(W),onClick:(t=null)=>et(e),style:n([t.customButtonStyle])},{default:l((()=>{var t;return[m(c,{name:null!==(t=e.icon)&&void 0!==t?t:""},null,8,["name"])]})),_:2},1032,["roundSize","bgColor","activeBgColor","onClick","style"])))),128)),t.menuButton?(u(),o(d,{key:0,round:"",roundSize:t.buttonSize,activeBgColor:a(W),bgColor:a(W),onClick:r[0]||(r[0]=(t=null)=>et(F)),style:n([t.customButtonStyle])},{default:l((()=>[m(c,{name:"more-fill"})])),_:1},8,["roundSize","activeBgColor","bgColor","style"])):b("",!0)])),_:1})]),!0)])),_:3},8,["class","style"])),m($,{ref_key:"overlayEle",ref:U,opacity:a(H),maskClose:!1,onTouchstart:r[4]||(r[4]=(t=null)=>tt()),onMousedown:r[5]||(r[5]=(t=null)=>tt())},{default:l((()=>[i(e.$slots,"menu",{},(()=>[m(x,{class:g(["sn-topbar-menu",new UTSJSONObject({"sn-topbar-menu-show":a(A)})]),onTouchstart:r[2]||(r[2]=B((()=>{}),["stop"])),onMousedown:r[3]||(r[3]=B((()=>{}),["stop"])),style:n([a(Y),t.customMenuStyle])},{default:l((()=>[(u(!0),p(S,null,C(t.menuData,((t,e)=>{var l,n;return u(),o(M,{key:e,bgColor:a(K),activeBgColor:a(V),icon:null!==(l=t.icon)&&void 0!==l?l:"",text:null!==(n=t.text)&&void 0!==n?n:"",onClick:(e=null)=>(J("menu-click",t),void Z(!1))},null,8,["bgColor","activeBgColor","icon","text","onClick"])})),128))])),_:1},8,["class","style"])]),!0)])),_:3},8,["opacity"]),t.fixed?(u(),o(x,{key:2,class:"fixed-placeholder",style:n(new UTSJSONObject({height:a(Q)}))},null,8,["style"])):b("",!0)],64)}}})),[["__scopeId","data-v-a8787a20"]]);export{M as _,T as a,I as b};
