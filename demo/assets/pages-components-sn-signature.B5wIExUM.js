import{_ as e}from"./sn-topbar.CX0rMkKy.js";import{d as t,r as l,c as a,l as n,m as u,A as o,b as s,h as i,g as r,f as d,q as v,u as c,t as f,v as p,F as g,s as y,k as h,o as m,e as b,ad as x,ae as S,af as _}from"./index-DNTc1GxZ.js";import{$ as w,r as T}from"./uni-app.es.D9ZkitmT.js";import{_ as C}from"./com-card.22LSjaaf.js";import{b as j,_ as k,c as R}from"./sn-button.BaZjRh9m.js";import{_ as U}from"./sn-view.JTcvHBKf.js";import{_ as B}from"./sn-image.C3_bpxpq.js";import{_ as O}from"./sn-gap.B2D2kaQK.js";import{_ as A}from"./sn-page.CEVOSUw5.js";import"./useResize.BiiI_cO4.js";class M extends UTS.UTSType{static get$UTSMetadata$(){return{kind:2,get fields(){return{x:{type:Number,optional:!1},y:{type:Number,optional:!1}}}}}constructor(e,t=M.get$UTSMetadata$(),l=!1){super(),this.__props__=UTS.UTSType.initProps(e,t,l),this.x=this.__props__.x,this.y=this.__props__.y,delete this.__props__}}const N=R(t(Object.assign({name:"sn-signature"},{__name:"sn-signature",props:{text:{type:String,default:"请签名"},textFont:{type:String,default:""},textColor:{type:String,default:""},penSize:{type:Number,default:3},penColor:{type:String,default:""},height:{type:String,default:"150px"},bgColor:{type:String,default:""},disabled:{type:Boolean,default:!1},borderRadius:{type:String,default:""},buttonSpacing:{type:String,default:"5px"},maxHistory:{type:Number,default:20},clearTip:{type:String,default:"清空后数据无法找回，您确定要清空吗？"},showClearTip:{type:Boolean,default:!0},showAction:{type:Boolean,default:!0},showUndo:{type:Boolean,default:!0},showRedo:{type:Boolean,default:!0},showConfirm:{type:Boolean,default:!0},showClear:{type:Boolean,default:!0},undoText:{type:String,default:"撤销"},redoText:{type:String,default:"重做"},clearText:{type:String,default:"清空"},confirmText:{type:String,default:"确定"},customStyle:{type:Object,default:new UTSJSONObject({})},customCanvasStyle:{type:Object,default:new UTSJSONObject({})},customActionAreaStyle:{type:Object,default:new UTSJSONObject({})}},emits:["confirm","undo","redo","clear"],setup(e,t){var C=t.expose,R=t.emit;const B=w.utils,O=w.colors,A=R,N=e,z=B.randomComId(),D=l(0),E=l(null),P=l(null),$=l(null),H=l(null),J=l(0),X=l(0),Y=l(0),F=l([]),L=l(-1),q=l(!1),I=l([]),W=a((()=>""==N.bgColor?O.value.front:N.bgColor)),G=a((()=>""==N.textColor?O.value.line:N.textColor)),K=a((()=>""==N.penColor?O.value.text:N.penColor)),Q=a((()=>B.addPx(J.value/N.text.length*.8))),V=a((()=>""==N.borderRadius?w.configs.radius.normal:N.borderRadius)),Z=a((()=>{let e=new Map;return e.set("height",N.height),e.set("border-radius",V.value),e.set("background",W.value),e.set("transition-duration",w.configs.aniTime.normal),e})),ee=a((()=>{let e=new Map;return e.set("transition-duration",w.configs.aniTime.normal),e})),te=a((()=>{let e=new Map;return e.set("flex-direction","row"),e.set("align-items","center"),e.set("justify-content","flex-end"),e.set("margin-top","5px"),e.set("padding","10px"),e})),le=a((()=>{let e=new Map;return e.set("margin-left",N.buttonSpacing),e}));function ae(e){if(null!=$.value&&I.value.length>1){let t=I.value[I.value.length-2];$.value.beginPath(),$.value.moveTo(t.x,t.y),$.value.lineTo(e.x,e.y),$.value.stroke(),$.value.closePath(),$.value.save()}}function ne(e){if(null!=$.value){for(let t=0;t<e.length;t++)I.value.push(e[t]),ae(e[t]);I.value=[]}}function ue(){if(null!=$.value){$.value.clearRect(0,0,H.value.width,H.value.height);for(let e=0;e<=L.value;e++)ne(F.value[e])}}function oe(){if(L.value<0||0==F.value.length)return null;null!=$.value&&F.value.length>0&&L.value>=0&&(L.value--,ue(),A("undo"))}function se(){if(0==F.value.length||L.value>=F.value.length-1)return null;null!=$.value&&L.value<=F.value.length-1&&(L.value++,ue(),A("redo"))}function ie(){null!=$.value&&$.value.clearRect(0,0,H.value.width,H.value.height),F.value=[],I.value=[],L.value=-1,A("clear")}function re(){N.showClearTip?y({title:"提示",content:N.clearTip,success:function(e){e.confirm&&ie()}}):ie()}function de(){A("confirm")}function ve(e,t){return new M({x:e-X.value,y:t-Y.value})}function ce(){var e,t,l,a;let n=null===(e=E.value)||void 0===e?void 0:e.getBoundingClientRect();J.value=null!==(t=null==n?void 0:n.width)&&void 0!==t?t:0,Y.value=null!==(l=null==n?void 0:n.top)&&void 0!==l?l:0,X.value=null!==(a=null==n?void 0:n.left)&&void 0!==a?a:0}function fe(e,t){ce(),q.value=!0;let l=ve(e,t);I.value.push(l)}function pe(e){e.preventDefault();let t=e.touches[0];fe(t.clientX,t.clientY)}function ge(e,t){if(!q.value)return null;let l=ve(e,t);I.value.push(l),ae(l)}function ye(e){e.preventDefault();let t=e.touches[0];ge(t.clientX,t.clientY)}function he(e){if(0==I.value.length)return null;if(L.value+1<F.value.length)F.value=F.value.slice(0,L.value+1),F.value.push(I.value),L.value++;else if(F.value.length>=N.maxHistory){let e=F.value.length-N.maxHistory+1;F.value.splice(0,e),F.value.push(I.value)}else L.value++,F.value.push(I.value);I.value=[],e.preventDefault(),q.value=!1}function me(e){e.preventDefault(),fe(e.clientX,e.clientY)}function be(e){he(e)}function xe(e){ge(e.clientX,e.clientY),e.preventDefault()}function Se(){F.value=[],I.value=[],L.value=-1,x({id:z,success:e=>{var t;P.value=e,$.value=e.getContext("2d"),H.value=$.value.canvas,D.value=null!==(t=_().devicePixelRatio)&&void 0!==t?t:1,H.value.width=H.value.offsetWidth*D.value,H.value.height=H.value.offsetHeight*D.value,$.value.scale(D.value,D.value),$.value.restore(),null!=$.value&&($.value.lineCap="round",$.value.lineJoin="round",$.value.lineWidth=N.penSize,$.value.strokeStyle=K.value,$.value.fillStyle=K.value),ce()}})}return C({undo:oe,redo:se,clear:re,getBase64:function(){return null!=P.value?P.value.toDataURL():""}}),n((()=>{window.addEventListener("mouseup",be),window.addEventListener("mousemove",xe),u((()=>{Se()}))})),o((()=>{u((()=>{Se()}))})),(t=null,l=null)=>{const a=T(s("sn-text"),j),n=S,u=h,o=T(s("sn-button"),k),y=T(s("sn-view"),U);return m(),i(g,null,[r(u,{class:"sn-signature-contain",style:v([c(Z),e.customStyle])},{default:d((()=>[r(a,{align:"center",text:e.text,font:e.textFont,color:c(G),size:c(Q)},null,8,["text","font","color","size"]),r(u,{class:"sn-signature-board",ref_key:"boardEle",ref:E,onTouchstart:pe,onTouchend:he,onTouchcancel:he,onTouchmove:ye,onMousedown:me,style:v([c(ee),e.customStyle])},{default:d((()=>[r(n,{class:"sn-signature-canvas",id:c(z),style:v([e.customCanvasStyle])},null,8,["id","style"])])),_:1},8,["style"])])),_:1},8,["style"]),e.showAction?f(t.$slots,"action",{key:0},(()=>[r(y,{class:"sn-signature-action-area",disabled:e.disabled,bgColor:c(W),borderRadius:c(V),style:v([c(te),e.customActionAreaStyle])},{default:d((()=>[e.showClear?(m(),b(o,{key:0,type:"error",level:"second",text:e.clearText,disabled:e.disabled||0==c(F).length,onClick:re,style:v([c(le)])},null,8,["text","disabled","style"])):p("",!0),e.showUndo?(m(),b(o,{key:1,text:e.undoText,disabled:e.disabled||0==c(F).length||c(L)<0,onClick:oe,style:v([c(le)])},null,8,["text","disabled","style"])):p("",!0),e.showRedo?(m(),b(o,{key:2,text:e.redoText,disabled:e.disabled||0==c(F).length||c(L)>=c(F).length-1,onClick:se,style:v([c(le)])},null,8,["text","disabled","style"])):p("",!0),e.showConfirm?(m(),b(o,{key:3,type:"primary",text:e.confirmText,disabled:e.disabled,onClick:de,style:v([c(le)])},null,8,["text","disabled","style"])):p("",!0)])),_:1},8,["disabled","bgColor","borderRadius","style"])]),!0):p("",!0)],64)}}})),[["__scopeId","data-v-a35d1f66"]]),z=t({__name:"sn-signature",setup(t){w.colors,w.utils;const a=l(""),n=l(null),u=l(null);function o(){var e,t,l;a.value=null!==(l=null===(t=null===(e=u.value)||void 0===e?void 0:e.getBase64)||void 0===t?void 0:t.call(e))&&void 0!==l?l:""}return(t=null,l=null)=>{const i=T(s("sn-topbar"),e),v=T(s("com-card"),C),f=T(s("sn-signature"),N),p=T(s("sn-button"),k),g=T(s("sn-image"),B),y=T(s("sn-gap"),O),h=T(s("sn-page"),A);return m(),b(h,null,{default:d((()=>[r(i,{title:"Signature 签名"}),r(v,{title:"基础用法",note:"基于 canvas 的签名板，适配各端，内置一套精美模版，提供 20+ 属性，支持插槽定制操作栏，任意搭配"}),r(f,{ref_key:"signEle",ref:u},null,512),r(v,{title:"导出图片",note:"支持导出为 base64 图片，App 端还可利用 view 进行组件截图生成 png 图片"},{default:d((()=>[r(p,{text:"导出为 base64",onClick:o})])),_:1}),r(v,null,{default:d((()=>[r(g,{ref_key:"imageEle",ref:n,class:"m-t-10",enablePreview:"",src:c(a)},null,8,["src"])])),_:1}),r(y)])),_:1})}}});export{z as default};