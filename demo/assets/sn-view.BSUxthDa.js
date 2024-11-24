import{_ as e}from"./sn-loading.t5otRKvs.js";import{d as t,$ as n,r as l,w as i,c as a,o,a as s,e as u,f as c,u as d,m as r,p as f,x as h,ab as v,ac as p,ad as m,ae as g,af as y,_ as w,b,z as X,B as Y,n as T}from"./index-DYMgrqHp.js";import{r as x}from"./uni-app.es.DgDfNdgy.js";import{b as S}from"./sn-text.euomPoe8.js";const k=S(t(Object.assign({name:"sn-view"},{__name:"sn-view",props:{loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},bgColor:{type:String,default:""},borderRadius:{type:String,default:""},margin:{type:String,default:"0"},padding:{type:String,default:"0"},boxShadow:{type:String,default:""},aniTime:{type:String,default:n.configs.aniTime.long},customStyle:{type:Object,default:new UTSJSONObject({})}},emits:["click","longpress","dbclick","touchstart","touchmove","touchend","touchcancel","down","scale","rotate"],setup(t,S){var k=S.emit;const M=n.colors,_=n.utils,j=k,U=t,G=l(null),O=new Map,C=l(!1),B=l(!1),E=l(_.randomComId()),I=l(null);l(1);const J=l(0),L=l(0),R=l(!1),z=l(!0);i((()=>U.disabled),(e=>{var t,n;e?(B.value=!0,T((()=>{_.debounce((()=>{var e,t;null===(t=null===(e=I.value)||void 0===e?void 0:e.style)||void 0===t||t.setProperty("opacity",.3)}),50,E.value)}))):(null===(n=null===(t=I.value)||void 0===t?void 0:t.style)||void 0===n||n.setProperty("opacity",0),_.debounce((()=>{B.value=!1}),parseInt(U.aniTime),E.value))}),{immediate:!0});const D=a((()=>h("color",U.bgColor,""))),F=a((()=>h("radius",U.borderRadius,""))),N=a((()=>h("aniTime",U.aniTime,"0ms"))),P=a((()=>{const e=new Map;return e.set("background",D.value),e.set("padding",U.padding),e.set("box-shadow",U.boxShadow),e.set("border-radius",F.value),e.set("justify-content",U.loading?"center":""),e.set("align-items",U.loading?"center":""),e.set("transition-duration",N.value),e})),$=a((()=>{const e=new Map;return e.set("background",M.value.disabled),e.set("transition-duration",N.value),e}));function A(e){let t="click";null==G.value?G.value=setTimeout((()=>{G.value=null}),300):(clearTimeout(G.value),G.value=null,t="dbclick");let n=new v({type:t,event:e,x:e.clientX,y:e.clientY});j("down",n),j("dbclick"==t?"dbclick":"click",n)}function q(e){for(let t=0;t<e.length;t++)O.delete(e[t])}function H(e){let t=[];if(O.has(e.identifier)){let n=UTS.mapGet(O,e.identifier),l=e.clientX-UTS.mapGet(n,"x"),i=e.clientY-UTS.mapGet(n,"y");t=[l,i,Math.abs(l)>Math.abs(i)?l<0?"left":"right":i<0?"up":"down"]}else{let n=new Map;n.set("x",e.clientX),n.set("y",e.clientY),t=[0,0,""],O.set(e.identifier,n)}return t}function K(e){if(R.value)return null;let t=[];t=e.touches,t=[];for(let l=0;l<e.touches.length;l++)t.push(e.touches[l]);let n=new p({type:"longpress",touches:t.map((e=>{let t=H(e);return new m({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:"",id:e.identifier})})),event:e});j("longpress",n)}function Q(e){R.value=!1,C.value=!0,z.value=!0;let t=[];t=e.touches,t=[];for(let l=0;l<e.touches.length;l++)t.push(e.touches[l]);let n=new p({type:"touchstart",touches:t.map((e=>{let t=H(e);return new m({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:t[2],id:e.identifier})})),event:e});if(2==t.length){let e=t[0],n=t[1];J.value=_.getDistance(e.clientX,e.clientY,n.clientX,n.clientY)}j("down",n),j("touchstart",n)}function V(e){R.value=!1,C.value=!1,z.value=!0;let t=[],n=[];n=e.changedTouches,n=[];for(let i=0;i<e.changedTouches.length;i++)n.push(e.changedTouches[i]);let l=new p({type:"touchend",touches:n.map((e=>{let n=H(e);return t.push(e.identifier),new m({x:e.clientX,y:e.clientY,diffX:n[0],diffY:n[1],direction:n[2],id:e.identifier})})),event:e});J.value=0,L.value=0,q(t),j("touchend",l)}function W(e){R.value=!1,C.value=!1,z.value=!0;let t=[],n=[];n=e.changedTouches,n=[];for(let i=0;i<e.changedTouches.length;i++)n.push(e.changedTouches[i]);let l=new p({type:"touchcancel",touches:n.map((e=>{let n=H(e);return t.push(e.identifier),new m({x:e.clientX,y:e.clientY,diffX:n[0],diffY:n[1],direction:n[2],id:e.identifier})})),event:e});J.value=0,L.value=0,q(t),j("touchcancel",l)}function Z(e){if(!C.value)return null;R.value=!0;let t=[];t=e.touches,t=[];for(let l=0;l<e.touches.length;l++)t.push(e.touches[l]);let n=new p({type:"touchmove",touches:t.map((e=>{let t=H(e);return new m({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:t[2],id:e.identifier})})),event:e});if(j("touchmove",n),2==t.length){const t=e.touches[0],n=e.touches[1],l=_.getDistance(t.clientX,t.clientY,n.clientX,n.clientY),i=l/J.value,a=_.getRotateAngle(t.clientX,t.clientY,n.clientX,n.clientY),o=a-L.value;L.value=a,J.value=l;const s=parseFloat(i.toFixed(7));j("scale",new g({zoom:s})),z.value?z.value=!1:j("rotate",new y({rotate:o}))}}function ee(e){let t=[];if(O.has(0)){let n=UTS.mapGet(O,0),l=e.clientX-UTS.mapGet(n,"x"),i=e.clientY-UTS.mapGet(n,"y");t=[l,i,Math.abs(l)>Math.abs(i)?l<0?"left":"right":i<0?"up":"down"]}else{let n=new Map;n.set("x",e.clientX),n.set("y",e.clientY),t=[0,0,""],O.set(0,n)}return t}function te(e){if(!C.value)return null;R.value=!0;let t=ee(e),n=new m({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:t[2],id:0}),l=new p({type:"touchmove",touches:[n],event:e});j("touchmove",l)}function ne(e){R.value=!1,C.value=!1;let t=ee(e),n=new m({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:t[2],id:0}),l=new p({type:"touchend",touches:[n],event:e});q([0]),j("touchend",l)}function le(e){R.value=!1,C.value=!0;let t=ee(e),n=new m({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:t[2],id:0}),l=new p({type:"touchstart",touches:[n],event:e});j("down",l),j("touchstart",l)}return o((()=>{window.addEventListener("mouseup",ne),window.addEventListener("mousemove",te)})),(n=null,l=null)=>{const i=x(s("sn-loading"),e),a=w;return b(),u(a,{"data-sn-id":d(E),class:r(new UTSJSONObject({disabled:t.disabled,loading:t.loading})),onClick:A,onLongpress:K,onTouchstart:Q,onTouchmove:Z,onTouchend:V,onTouchcancel:W,onMousedown:le,style:f([d(P),t.customStyle])},{default:c((()=>[t.loading?Y("",!0):X(n.$slots,"default",{key:0},void 0,!0),!t.disabled&&t.loading?(b(),u(i,{key:1})):Y("",!0),d(B)?(b(),u(a,{key:2,class:"sn-view-disabled-mask",ref_key:"maskEle",ref:I,style:f([d($)])},null,8,["style"])):Y("",!0)])),_:3},8,["data-sn-id","class","style"])}}})),[["__scopeId","data-v-203913ae"]]);export{k as _};
