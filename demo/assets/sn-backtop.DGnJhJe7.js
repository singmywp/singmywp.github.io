import{_ as e,b as t}from"./sn-text.euomPoe8.js";import{d as a,$ as s,r as l,c as n,o as i,n as o,a as r,e as u,f as c,m as d,p as f,u as p,x as g,a8 as m,_ as v,b,g as y,q as x}from"./index-DYMgrqHp.js";import{r as h}from"./uni-app.es.DgDfNdgy.js";const S=t(a(Object.assign({name:"sn-backtop"},{__name:"sn-backtop",props:{icon:{type:String,default:"skip-up-line"},shape:{type:String,default:"circle"},bgColor:{type:String,default:""},zIndex:{type:Number,default:s.configs.zIndex.float},aniTime:{type:String,default:s.configs.aniTime.normal},size:{type:String,default:"50px"},top:{type:Number,default:400},right:{type:Number,default:30},bottom:{type:Number,default:100},iconSize:{type:String,default:""},iconColor:{type:String,default:""},type:{type:String,default:"primary"},level:{type:String,default:"first"},disabled:{type:Boolean,default:!1},customStyle:{type:Object,default:new UTSJSONObject({})}},emits:["click"],setup(t,a){var S=a.emit;const z=s.utils,k=s.colors,T=x(),_=S,I=t,w=l(!1),C=l(null),j=l(null),N=n((()=>I.zIndex==s.configs.zIndex.float?s.configs.zIndex.float:I.zIndex)),B=n((()=>g("font",s.configs.font.size(5),I.iconSize))),O=n((()=>g("aniTime",s.configs.aniTime.normal,I.aniTime))),E=n((()=>["first","second","third","least"].includes(I.level)?I.level:"first")),M=n((()=>["info","warning","error","success","primary"].includes(I.type)?I.type:"info")),P=n((()=>{if(I.disabled)return k.value.disabled;if(!z.isEmpty(I.bgColor))return I.bgColor;if("info"==M.value&&"least"!=E.value)return k.value.info;switch(E.value){case"first":default:return k.value["".concat(M.value)];case"second":return k.value["".concat(M.value,"Light")];case"third":return k.value.info}})),U=n((()=>I.disabled?k.value.disabledText:z.isEmpty(I.iconColor)?"info"==M.value?k.value.infoText:"first"==E.value?k.value["".concat(M.value,"Text")]:k.value["".concat(M.value,"LightText")]:I.iconColor)),$=n((()=>{const e=new Map;return e.set("border-radius","square"==I.shape?s.configs.radius.small:s.configs.radius.circle),e.set("background",P.value),e.set("width",z.addUnit(I.size)),e.set("height",z.addUnit(I.size)),e.set("right",z.addPx(I.right)),e.set("bottom",z.addPx(I.bottom)),e.set("zIndex",N.value.toString()),e.set("transform","scale(".concat(w.value?1:.001,")")),e.set("transition-duration",O.value),e}));function q(e){I.disabled||(w.value=!1,j.value.$callMethod("scrollTo",0,0),_("click",e))}function J(e){w.value=e>=I.top}return i((()=>{o((()=>{if(j.value=z.findBrother(T.proxy,["sn-longlist","sn-scroll","sn-page"]),null==j.value&&(j.value=z.findParent(T.proxy,["sn-longlist","sn-scroll","sn-page"])),null==j.value)throw new m("components","snBacktop",9010011);j.value.$callMethod("registerBacktop",J)}))})),(a=null,s=null)=>{const l=h(r("sn-icon"),e),n=v;return b(),u(n,{class:d(["sn-backtop",t.disabled?"disabled":""]),ref_key:"backtopEle",ref:C,onClick:q,style:f([p($),t.customStyle])},{default:c((()=>[y(l,{name:t.icon,size:p(B),color:p(U)},null,8,["name","size","color"])])),_:1},8,["class","style"])}}})),[["__scopeId","data-v-1d0ecc30"]]);export{S as _};
