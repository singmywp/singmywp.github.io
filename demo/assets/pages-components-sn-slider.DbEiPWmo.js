import{_ as e,a as l}from"./sn-topbar.CX0rMkKy.js";import{d as t,r as a,c as u,l as n,m as o,A as d,b as s,e as i,f as r,q as m,u as c,k as v,o as p,g as h,p as f,v as x,i as b}from"./index-DNTc1GxZ.js";import{$ as V,r as g}from"./uni-app.es.D9ZkitmT.js";import{_ as y}from"./sn-slider.DKMANrMT.js";import{b as w,c as S}from"./sn-button.BaZjRh9m.js";import{u as T}from"./useResize.BiiI_cO4.js";import{_}from"./com-card.22LSjaaf.js";import{_ as U}from"./sn-gap.B2D2kaQK.js";import{_ as j}from"./sn-page.CEVOSUw5.js";const M=S(t(Object.assign({name:"sn-slider"},{__name:"sn-slider-double",props:{modelValue:{type:Array,default:[0,0],validator:e=>{if(2!=e.length)throw new Error("sn-slider: v-model 必须是长度为 2 的 number[]");return!0}},vertical:{type:Boolean,default:!1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},thickness:{type:String,default:"20px"},borderRadius:{type:String,default:""},thumbBorderRadius:{type:String,default:""},thumbBorder:{type:String,default:""},thumbSize:{type:String,default:"10px"},showValueText:{type:Boolean,default:!1},valueTextWidth:{type:String,default:"30px"},customStyle:{type:Object,default:new UTSJSONObject({})},customContainStyle:{type:Object,default:new UTSJSONObject({})},customThumbStyle:{type:Object,default:new UTSJSONObject({})},customValueTextStyle:{type:Object,default:new UTSJSONObject({})},customActiveStyle:{type:Object,default:new UTSJSONObject({})}},emits:["update:modelValue","change","touchend","touchstart","touchmove","touchcancel"],setup(e,l){var t=l.emit;const b=V.utils,y=V.colors,S=t,_=e,U=a(null),j=a(null),M=a(0),O=a(0),P=a(0),k=a(0),B=a(-1);function C(e){return e=Math.min(Math.max(_.min,e),_.max),e=Math.round((e-_.min)/_.step)*_.step+_.min}function D(e){return[C(e[0]),C(e[1])]}const R=u({get:()=>_.modelValue,set:e=>{let l=D(e);S("update:modelValue",l),S("change",l[0]<l[1]?[l[0],l[1]]:[l[1],l[0]])}}),N=u((()=>Math.max((b.getPx(_.thickness)-b.getPx(_.thumbSize))/2,0))),W=u((()=>b.getPx(_.thumbSize))),z=u((()=>2*N.value+W.value)),A=u((()=>_.vertical?O.value:M.value)),E=u((()=>A.value-z.value)),J=u((()=>""==_.borderRadius?V.configs.radius.circle:_.borderRadius)),X=u((()=>""==_.thumbBorderRadius?V.configs.radius.circle:_.thumbBorderRadius)),Y=u((()=>""==_.activeColor?y.value.primary:_.activeColor)),q=u((()=>""==_.inactiveColor?y.value.infoActive:_.inactiveColor)),L=u((()=>(R.value[0]-_.min)/(_.max-_.min))),I=u((()=>(R.value[1]-_.min)/(_.max-_.min))),$=u((()=>L.value*E.value)),F=u((()=>I.value*E.value)),G=u((()=>Math.min($.value,F.value))),H=u((()=>Math.abs(F.value-$.value)+z.value)),K=u((()=>{let e=new Map;return _.vertical?(e.set("width",_.thickness),e.set("flex-direction","column")):(e.set("height",_.thickness),e.set("flex-direction","row")),e.set("border-radius",J.value),e.set("background",_.disabled?y.value.disabled:q.value),e.set("transition-duration",V.configs.aniTime.normal),e})),Q=u((()=>{let e=new Map;return _.vertical?(e.set("top",b.addPx(G.value)),e.set("width","100%"),e.set("height",b.addPx(H.value)),e.set("min-height",b.addPx(z.value)),e.set("max-height",b.addPx(O.value)),e.set("flex-direction","column")):(e.set("left",b.addPx(G.value)),e.set("height","100%"),e.set("width",b.addPx(H.value)),e.set("min-width",b.addPx(z.value)),e.set("max-width",b.addPx(M.value)),e.set("flex-direction","row")),e.set("border-radius",X.value),e.set("background",_.disabled?y.value.disabledText:Y.value),e.set("transition-duration",V.configs.aniTime.normal),e})),Z=u((()=>{let e=new Map;return e.set("width",b.addPx(W.value)),e.set("height",b.addPx(W.value)),e.set("border-radius",X.value),e.set("background","white"),e.set("border",_.thumbBorder),e.set("transition-duration",V.configs.aniTime.normal),e})),ee=u((()=>{let e=new Map;return e.set("transform","translate".concat(_.vertical?"Y":"X","(").concat($.value+N.value,"px)")),e})),le=u((()=>{let e=new Map;return e.set("transform","translate".concat(_.vertical?"Y":"X","(").concat(F.value+N.value,"px)")),e})),te=u((()=>{let e=new Map;return e.set("width",_.valueTextWidth),_.vertical?e.set("margin-top","5px"):e.set("margin-left","5px"),e})),ae=u((()=>{let e=new Map,l=Math.max(W.value,b.getPx(_.thickness));return _.vertical?(e.set("flex-direction","column"),e.set("height","100%"),e.set("width",b.addPx(Math.max(l,b.getPx(_.valueTextWidth))))):(e.set("flex-direction","row"),e.set("width","100%"),e.set("height",b.addPx(l))),e}));function ue(){var e,l,t,a,u,n;let o=null===(e=U.value)||void 0===e?void 0:e.getBoundingClientRect(),d=null===(l=j.value)||void 0===l?void 0:l.getBoundingClientRect();M.value=null!==(t=null==o?void 0:o.width)&&void 0!==t?t:0,O.value=null!==(a=null==o?void 0:o.height)&&void 0!==a?a:0,P.value=null!==(u=null==d?void 0:d.left)&&void 0!==u?u:0,k.value=null!==(n=null==d?void 0:d.top)&&void 0!==n?n:0}function ne(e,l,t){return e>=l&&e<=t}function oe(e,l){let t=_.vertical?k.value:P.value,a=((_.vertical?l:e)-t-z.value/2)/E.value;a=Math.min(Math.max(0,a),1),a=a*(_.max-_.min)+_.min,R.value[B.value]=a,R.value=R.value}function de(e){if(e.preventDefault(),_.disabled||-1==B.value)return null;let l=e.touches[0];oe(l.clientX,l.clientY),S("touchmove",e)}function se(e){if(e.preventDefault(),_.disabled||-1!=B.value)return null;let l=e.touches[0],t=function(e){for(let l=0;l<2;l++){let t=0,a=0;_.vertical?(t=k.value,a=e.clientY):(t=P.value,a=e.clientX);let u=0==l?L.value:I.value,n=t+E.value*u;if(ne(a,n,n+z.value))return l}return-1}(l);-1!=t&&(B.value=t,oe(l.clientX,l.clientY)),S("touchstart",e)}function ie(e){e.preventDefault(),B.value=-1;let l=R.value;R.value=l[0]>l[1]?[l[1],l[0]]:l,S("touchend",e.target)}function re(e){e.preventDefault(),S("touchcancel",e.target)}function me(e){if(e.preventDefault(),_.disabled)return null;S("touchstart",e)}function ce(e){if(e.preventDefault(),_.disabled||-1==B.value)return null;S("touchmove",e)}function ve(e){e.preventDefault(),S("touchend",e)}return n((()=>{R.value=D(R.value),window.addEventListener("mouseup",ve),window.addEventListener("mousemove",ce),o((()=>{ue()})),T(U.value,(()=>{ue()}))})),d((()=>{o((()=>{ue()}))})),(l=null,t=null)=>{const a=v,u=g(s("sn-text"),w);return p(),i(a,{class:"sn-slider-contain",ref_key:"containEle",ref:j,onTouchmove:de,onTouchstart:se,onTouchend:ie,onTouchcancel:re,onMousedown:me,style:m([c(ae),e.customContainStyle])},{default:r((()=>[h(a,{class:f(["sn-slider",e.disabled?"disabled":""]),ref_key:"sliderEle",ref:U,style:m([c(K),e.customStyle])},{default:r((()=>[h(a,{class:"sn-slider-active",style:m([c(Q),e.customActiveStyle])},null,8,["style"])])),_:1},8,["class","style"]),h(a,{class:"sn-slider-thumb-pre",style:m([c(Z),c(ee),e.customThumbStyle])},null,8,["style"]),h(a,{class:"sn-slider-thumb-suf",style:m([c(Z),c(le),e.customThumbStyle])},null,8,["style"]),e.showValueText?(p(),i(u,{key:0,align:"center",text:"".concat(c(R)),lines:1,style:m([c(te),e.customValueTextStyle])},null,8,["text","style"])):x("",!0)])),_:1},8,["style"])}}})),[["__scopeId","data-v-07d5dbb2"]]),O=t({__name:"sn-slider",setup(t){const u=a(70),n=a(50),o=a(20),d=a(20),m=a(20),v=a(20),f=a([20,40]),x=a([20,40]),V=a([20,40]),S=a([20,40]),T=a([20,40]),O=a([20,40]);return(t=null,a=null)=>{const P=g(s("sn-topbar"),e),k=g(s("sn-slider"),y),B=g(s("sn-slider-double"),M),C=g(s("com-card"),_),D=g(s("sn-text"),w),R=g(s("sn-row"),l),N=g(s("sn-gap"),U),W=g(s("sn-page"),j);return p(),i(W,null,{default:r((()=>[h(P,{title:"Slider 滑动选择"}),h(C,{title:"基础用法",note:"和内置 Slider 组件不同的是，本组件并非使用 Draw Api 绘制。大部分场景下，不会出现大量 Slider 联动的高性能需求，使用多 DOM 布局以更好满足用户个性化需求。支持双向 Slider。"},{default:r((()=>[h(k,{modelValue:c(u),"onUpdate:modelValue":a[0]||(a[0]=(e=null)=>b(u)?u.value=e:null)},null,8,["modelValue"]),h(B,{class:"m-t-10",modelValue:c(f),"onUpdate:modelValue":a[1]||(a[1]=(e=null)=>b(f)?f.value=e:null)},null,8,["modelValue"])])),_:1}),h(C,{title:"滑块大小",note:"可以自由设置滑块大小"},{default:r((()=>[h(k,{modelValue:c(n),"onUpdate:modelValue":a[2]||(a[2]=(e=null)=>b(n)?n.value=e:null),thumbSize:"16px"},null,8,["modelValue"]),h(B,{modelValue:c(x),"onUpdate:modelValue":a[3]||(a[3]=(e=null)=>b(x)?x.value=e:null),class:"m-t-10",thumbSize:"20px",thickness:"2px",valueTextWidth:"50px",thumbBorder:"1px solid #ededed"},null,8,["modelValue"])])),_:1}),h(C,{title:"厚度",note:"调节 Slider 的显示厚度，可以更小，也可更大"},{default:r((()=>[h(k,{modelValue:c(o),"onUpdate:modelValue":a[4]||(a[4]=(e=null)=>b(o)?o.value=e:null),thickness:"15px",padding:"3px"},null,8,["modelValue"]),h(B,{modelValue:c(V),"onUpdate:modelValue":a[5]||(a[5]=(e=null)=>b(V)?V.value=e:null),class:"m-t-10",thickness:"15px",padding:"3px",valueTextWidth:"50px"},null,8,["modelValue"])])),_:1}),h(C,{title:"显示值",note:"可以显示当前数值文本"},{default:r((()=>[h(k,{modelValue:c(d),"onUpdate:modelValue":a[6]||(a[6]=(e=null)=>b(d)?d.value=e:null),showValueText:""},null,8,["modelValue"]),h(B,{modelValue:c(S),"onUpdate:modelValue":a[7]||(a[7]=(e=null)=>b(S)?S.value=e:null),class:"m-t-10",showValueText:"",valueTextWidth:"50px"},null,8,["modelValue"])])),_:1}),h(C,{title:"极值和步长",note:"可以自由设置最大值、最小值、步长。支持自动检查初始数据并纠错。"},{default:r((()=>[h(D,{class:"m-b-10",text:"最小值：10\n最大值：60\n步长：5\n当前值：".concat(c(m))},null,8,["text"]),h(k,{modelValue:c(m),"onUpdate:modelValue":a[8]||(a[8]=(e=null)=>b(m)?m.value=e:null),min:10,max:60,step:5},null,8,["modelValue"]),h(B,{class:"m-t-10",modelValue:c(O),"onUpdate:modelValue":a[9]||(a[9]=(e=null)=>b(O)?O.value=e:null),min:10,max:60,step:5},null,8,["modelValue"])])),_:1}),h(C,{title:"竖向",note:"支持设置竖向显示"},{default:r((()=>[h(R,{class:"h-250"},{default:r((()=>[h(k,{modelValue:c(v),"onUpdate:modelValue":a[10]||(a[10]=(e=null)=>b(v)?v.value=e:null),vertical:""},null,8,["modelValue"]),h(k,{class:"m-r-50",modelValue:c(v),"onUpdate:modelValue":a[11]||(a[11]=(e=null)=>b(v)?v.value=e:null),vertical:"",showValueText:""},null,8,["modelValue"]),h(B,{modelValue:c(T),"onUpdate:modelValue":a[12]||(a[12]=(e=null)=>b(T)?T.value=e:null),vertical:""},null,8,["modelValue"]),h(B,{modelValue:c(T),"onUpdate:modelValue":a[13]||(a[13]=(e=null)=>b(T)?T.value=e:null),vertical:"",showValueText:"",valueTextWidth:"60px"},null,8,["modelValue"])])),_:1})])),_:1}),h(C,{title:"禁用",note:"支持设置禁用"},{default:r((()=>[h(k,{modelValue:c(o),"onUpdate:modelValue":a[14]||(a[14]=(e=null)=>b(o)?o.value=e:null),disabled:""},null,8,["modelValue"]),h(B,{modelValue:c(V),"onUpdate:modelValue":a[15]||(a[15]=(e=null)=>b(V)?V.value=e:null),class:"m-t-10",disabled:"",valueTextWidth:"50px"},null,8,["modelValue"])])),_:1}),h(N,{height:"50px"})])),_:1})}}});export{O as default};
