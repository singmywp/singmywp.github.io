import{a as e,d as l,b as o,c as t}from"./sn-button.BaZjRh9m.js";import{d as n,r as a,c as i,b as u,h as r,g as s,f as d,p as v,u as c,q as p,F as g,k as x,o as f,e as y,v as b}from"./index-DNTc1GxZ.js";import{$ as S,t as m,r as z}from"./uni-app.es.D9ZkitmT.js";import{b as C}from"./sn-topbar.CX0rMkKy.js";const w=t(n(Object.assign({name:"sn-toast"},{__name:"sn-toast",props:{text:{type:String,default:""},bgColor:{type:String,default:""},overlay:{type:Boolean,default:!1},position:{type:String,default:"center"},duration:{type:Number,default:2e3},textSize:{type:String,default:""},textColor:{type:String,default:""},borderRadius:{type:String,default:""},padding:{type:String,default:"12px 15px"},icon:{type:String,default:""},iconSize:{type:String,default:""},iconColor:{type:String,default:""},textAlign:{type:String,default:"center"},loading:{type:Boolean,default:!1},textLines:{type:Number,default:0},customStyle:{type:Object,default:{}}},setup(t,n){var w=n.expose;const k=S.utils,_=S.colors,A=t,L=a(!1),R=a(null),j=a(new m({})),h=i((()=>{let e=j.value.icon;return null!=e&&""!=e.trim()})),M=i((()=>""==A.textColor?"#fff":A.textColor)),B=i((()=>""==A.textSize?S.configs.font.size(2):A.textSize)),I=i((()=>""==A.textColor?"#fff":A.textColor)),N=i((()=>""==A.textSize?S.configs.font.size(5):A.textSize)),O=i((()=>""==A.bgColor?_.value.toast:A.bgColor)),T=i((()=>""==A.borderRadius?S.configs.radius.normal:A.borderRadius)),q=i((()=>["center","top","bottom"].includes(A.position)?A.position:"center")),E=i((()=>{let e=new Map;return e.set("z-index",S.configs.zIndex.toast),e.set("transition-duration",S.configs.aniTime.normal),e})),F=i((()=>{let e=new Map;return e.set("margin-right","6px"),e})),$=i((()=>{let e=new Map;return e.set("word-break","break-all"),e.set("flex","1"),e})),D=i((()=>{var e,l,o;let t=new Map;return t.set("border-radius",null!==(e=j.value.borderRadius)&&void 0!==e?e:T.value),t.set("padding",null!==(l=j.value.padding)&&void 0!==l?l:A.padding),t.set("background",null!==(o=j.value.bgColor)&&void 0!==o?o:O.value),t.set("transition-duration",S.configs.aniTime.normal),t})),G=i((()=>{let e=new Map;return e.set("top","top"==j.value.position),e.set("center","center"==j.value.position),e.set("bottom","bottom"==j.value.position),e.set("hover",L.value),e}));function H(){var e,l;L.value=!1,null===(l=null===(e=R.value)||void 0===e?void 0:e.close)||void 0===l||l.call(e)}return w({show:function(){var e,l;j.value.bgColor=O.value,j.value.borderRadius=T.value,j.value.text=A.text,j.value.overlay=A.overlay,j.value.loading=A.loading,j.value.position=q.value,j.value.duration=A.duration,j.value.textSize=B.value,j.value.textColor=M.value,j.value.iconSize=N.value,j.value.iconColor=I.value,j.value.padding=A.padding,j.value.icon=A.icon,j.value.textLines=A.textLines,j.value.textAlign=A.textAlign,j.value.overlay&&(null===(l=null===(e=R.value)||void 0===e?void 0:e.open)||void 0===l||l.call(e)),L.value=!0,j.value.loading||k.debounce((()=>{H()}),j.value.duration)},configShow:function(e=null){var l,o,t,n,a,i,u,r,s,d,v,c,p,g,x,f,y;e=null!=e?e:new m({}),j.value.bgColor=null!==(l=e.bgColor)&&void 0!==l?l:O.value,j.value.borderRadius=null!==(o=e.borderRadius)&&void 0!==o?o:T.value,j.value.text=null!==(t=e.text)&&void 0!==t?t:A.text,j.value.overlay=null!==(n=e.overlay)&&void 0!==n?n:A.overlay,j.value.loading=null!==(a=e.loading)&&void 0!==a?a:A.loading,j.value.position=null!==(i=e.position)&&void 0!==i?i:q.value,j.value.duration=null!==(u=e.duration)&&void 0!==u?u:A.duration,j.value.textSize=null!==(r=e.textSize)&&void 0!==r?r:B.value,j.value.textColor=null!==(s=e.textColor)&&void 0!==s?s:M.value,j.value.iconSize=null!==(d=e.iconSize)&&void 0!==d?d:N.value,j.value.iconColor=null!==(v=e.iconColor)&&void 0!==v?v:I.value,j.value.padding=null!==(c=e.padding)&&void 0!==c?c:A.padding,j.value.icon=null!==(p=e.icon)&&void 0!==p?p:A.icon,j.value.textLines=null!==(g=e.textLines)&&void 0!==g?g:A.textLines,j.value.textAlign=null!==(x=e.textAlign)&&void 0!==x?x:A.textAlign,j.value.overlay&&(null===(y=null===(f=R.value)||void 0===f?void 0:f.open)||void 0===y||y.call(f)),L.value=!0,j.value.loading||k.debounce((()=>{H()}),j.value.duration)},close:H}),(t=null,n=null)=>{const a=z(u("sn-icon"),e),i=z(u("sn-loading"),l),S=z(u("sn-text"),o),m=x,w=z(u("sn-overlay"),C);return f(),r(g,null,[s(m,{class:v(["sn-toast-contain",c(G)]),style:p(c(E))},{default:d((()=>[s(m,{class:"sn-toast",style:p(c(D))},{default:d((()=>{var e,l,o,t,n,u,r,d,v,g,x,m;return[!c(h)||null!==(e=c(j).loading)&&void 0!==e&&e?b("",!0):(f(),y(a,{key:0,name:null!==(l=c(j).icon)&&void 0!==l?l:"",color:null!==(o=c(j).iconColor)&&void 0!==o?o:c(I),size:null!==(t=c(j).iconSize)&&void 0!==t?t:c(N),style:p(c(F))},null,8,["name","color","size","style"])),null!==(n=c(j).loading)&&void 0!==n&&n?(f(),y(i,{key:1,iconColor:null!==(u=c(j).iconColor)&&void 0!==u?u:c(I),iconSize:null!==(r=c(j).iconSize)&&void 0!==r?r:c(N),style:p(c(F))},null,8,["iconColor","iconSize","style"])):b("",!0),s(S,{text:null!==(d=c(j).text)&&void 0!==d?d:"",align:null!==(v=c(j).textAlign)&&void 0!==v?v:"center",color:null!==(g=c(j).textColor)&&void 0!==g?g:c(M),size:null!==(x=c(j).textSize)&&void 0!==x?x:c(B),lines:null!==(m=c(j).textLines)&&void 0!==m?m:0,style:p(c($))},null,8,["text","align","color","size","lines","style"])]})),_:1},8,["style"])])),_:1},8,["class","style"]),s(w,{ref_key:"overlayEle",ref:R,maskClose:!1,opacity:0},null,512)],64)}}})),[["__scopeId","data-v-66dff4af"]]);export{w as _};
