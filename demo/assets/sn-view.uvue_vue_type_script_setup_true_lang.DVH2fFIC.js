import{d as e}from"./sn-button.68-4Ol7n.js";import{d as t,r as n,c as i,k as o,b as l,e as c,f as u,m as s,u as a,p as d,o as r,t as f}from"./index-BV7wVSs2.js";import{r as h,l as p,m,n as g}from"./uni-app.es.BzKMvEv9.js";const w=t(Object.assign({name:"sn-view"},{__name:"sn-view",props:{loading:{type:Boolean,default:!1},bgColor:{type:String,default:""},borderRadius:{type:String,default:""},margin:{type:String,default:"0"},padding:{type:String,default:"0"},boxShadow:{type:String,default:""},customStyle:{type:Object,default:{}}},emits:["click","longpress","dbclick","touchstart","touchmove","touchend","touchcancel","down"],setup(t,w){const y=w.emit,v=t,b=n(null),X=new Map,Y=n(!1),x=i((()=>{let e=new Map;return e.set("background",v.bgColor),e.set("padding",v.padding),e.set("box-shadow",v.boxShadow),e.set("border-radius",v.borderRadius),e.set("justify-content",v.loading?"center":""),e.set("align-items",v.loading?"center":""),e}));function T(e){let t="click";null==b.value?b.value=setTimeout((()=>{b.value=null}),300):(clearTimeout(b.value),b.value=null,t="dbclick");let n=new p({type:t,event:e,x:e.clientX,y:e.clientY});y("down",n),y("dbclick"==t?"dbclick":"click",n)}function S(e){for(let t=0;t<e.length;t++)X.delete(e[t])}function M(e){let t=[];if(X.has(e.identifier)){let n=UTS.mapGet(X,e.identifier),i=e.clientX-UTS.mapGet(n,"x"),o=e.clientY-UTS.mapGet(n,"y"),l=Math.abs(i)>Math.abs(o)?i<0?"left":"right":o<0?"up":"down";t=[Math.abs(i),Math.abs(o),l]}else{let n=new Map;n.set("x",e.clientX),n.set("y",e.clientY),t=[0,0,""],X.set(e.identifier,n)}return t}function k(e){let t=[];t=e.touches,t=[];for(let i=0;i<e.touches.length;i++)t.push(e.touches[i]);let n=new m({type:"longpress",touches:t.map((e=>{let t=M(e);return new g({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:"",id:e.identifier})})),event:e});y("longpress",n)}function j(e){Y.value=!0;let t=[];t=e.touches,t=[];for(let i=0;i<e.touches.length;i++)t.push(e.touches[i]);let n=new m({type:"touchstart",touches:t.map((e=>{let t=M(e);return new g({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:t[2],id:e.identifier})})),event:e});y("down",n),y("touchstart",n)}function G(e){Y.value=!1;let t=[],n=[];n=e.changedTouches,n=[];for(let o=0;o<e.changedTouches.length;o++)n.push(e.changedTouches[o]);let i=new m({type:"touchend",touches:n.map((e=>{let n=M(e);return t.push(e.identifier),new g({x:e.clientX,y:e.clientY,diffX:n[0],diffY:n[1],direction:n[2],id:e.identifier})})),event:e});S(t),y("touchend",i)}function U(e){Y.value=!1;let t=[],n=[];n=e.changedTouches,n=[];for(let o=0;o<e.changedTouches.length;o++)n.push(e.changedTouches[o]);let i=new m({type:"touchcancel",touches:n.map((e=>{let n=M(e);return t.push(e.identifier),new g({x:e.clientX,y:e.clientY,diffX:n[0],diffY:n[1],direction:n[2],id:e.identifier})})),event:e});S(t),y("touchcancel",i)}function _(e){if(!Y.value)return null;let t=[];t=e.touches,t=[];for(let i=0;i<e.touches.length;i++)t.push(e.touches[i]);let n=new m({type:"touchmove",touches:t.map((e=>{let t=M(e);return new g({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:t[2],id:e.identifier})})),event:e});y("touchmove",n)}function C(e){let t=[];if(X.has(0)){let n=UTS.mapGet(X,0),i=e.clientX-UTS.mapGet(n,"x"),o=e.clientY-UTS.mapGet(n,"y"),l=Math.abs(i)>Math.abs(o)?i<0?"left":"right":o<0?"up":"down";t=[Math.abs(i),Math.abs(o),l]}else{let n=new Map;n.set("x",e.clientX),n.set("y",e.clientY),t=[0,0,""],X.set(0,n)}return t}function L(e){if(!Y.value)return null;let t=C(e),n=new g({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:t[2],id:0}),i=new m({type:"touchmove",touches:[n],event:e});y("touchmove",i)}function E(e){Y.value=!1;let t=C(e),n=new g({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:t[2],id:0}),i=new m({type:"touchend",touches:[n],event:e});S([0]),y("touchend",i)}function O(e){Y.value=!0;let t=C(e),n=new g({x:e.clientX,y:e.clientY,diffX:t[0],diffY:t[1],direction:t[2],id:0}),i=new m({type:"touchstart",touches:[n],event:e});y("down",i),y("touchstart",i)}return o((()=>{window.addEventListener("mouseup",E),window.addEventListener("mousemove",L)})),(n=null,i=null)=>{const o=h(l("sn-loading"),e),p=d;return r(),c(p,{onClick:T,onLongpress:k,onTouchstart:j,onTouchmove:_,onTouchend:G,onTouchcancel:U,onMousedown:O,style:s([a(x),t.customStyle])},{default:u((()=>[t.loading?(r(),c(o,{key:1})):f(n.$slots,"default",{key:0})])),_:3},8,["style"])}}}));export{w as _};