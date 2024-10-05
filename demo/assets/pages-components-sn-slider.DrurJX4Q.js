import{_ as e,a as l}from"./sn-topbar.DxKzInQK.js";import{d as t,$ as a,r as u,c as n,l as o,m as d,z as s,a as i,b as r,e as c,q as m,u as v,y as p,j as h,o as f,f as x,p as b,C as V,i as g}from"./index-DoInGK9X.js";import{r as y}from"./uni-app.es.K1mZmM8s.js";import{_ as S}from"./sn-slider.Bw8duI40.js";import{b as w,c as T}from"./sn-button.B1LvAG78.js";import{u as O}from"./useResize.Dia-r-oM.js";import{_ as j}from"./com-card.D8_7_rS9.js";import{_ as U}from"./sn-gap.BM3gA-Sq.js";import{_}from"./sn-page.Nlp4LDKz.js";const M=T(t(Object.assign({name:"sn-slider"},{__name:"sn-slider-double",props:{modelValue:{type:Array,default:[0,0],validator:e=>{if(2!=e.length)throw new Error("sn-slider: v-model 必须是长度为 2 的 number[]");return!0}},vertical:{type:Boolean,default:!1},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},disabled:{type:Boolean,default:!1},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},thickness:{type:String,default:"20px"},borderRadius:{type:String,default:""},thumbBorderRadius:{type:String,default:""},thumbBorder:{type:String,default:""},thumbSize:{type:String,default:"10px"},showValueText:{type:Boolean,default:!1},valueTextWidth:{type:String,default:"30px"},customStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))},customContainStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))},customThumbStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))},customValueTextStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))},customActiveStyle:{type:Object,default:new UTSJSONObject(new UTSJSONObject({}))}},emits:["update:modelValue","change","touchend","touchstart","touchmove","touchcancel"],setup(e,l){var t=l.emit;const g=a.utils,S=a.colors,T=t,j=e,U=u(null),_=u(null),M=u(0),P=u(0),k=u(0),N=u(0),B=u(-1);function J(e){return e=Math.min(Math.max(j.min,e),j.max),e=Math.round((e-j.min)/j.step)*j.step+j.min}function C(e){return[J(e[0]),J(e[1])]}const D=n({get:()=>j.modelValue,set:e=>{let l=C(e);T("update:modelValue",l),T("change",l[0]<l[1]?[l[0],l[1]]:[l[1],l[0]])}}),W=n((()=>Math.max((g.getPx(j.thickness)-g.getPx(j.thumbSize))/2,0))),z=n((()=>g.getPx(j.thumbSize))),R=n((()=>2*W.value+z.value)),A=n((()=>j.vertical?P.value:M.value)),E=n((()=>A.value-R.value)),X=n((()=>p("radius",j.borderRadius,a.configs.radius.circle))),Y=n((()=>p("radius",j.thumbBorderRadius,a.configs.radius.circle))),L=n((()=>p("color",j.activeColor,S.value.primary))),q=n((()=>p("color",j.inactiveColor,S.value.infoActive))),F=n((()=>(D.value[0]-j.min)/(j.max-j.min))),G=n((()=>(D.value[1]-j.min)/(j.max-j.min))),H=n((()=>F.value*E.value)),I=n((()=>G.value*E.value)),K=n((()=>Math.min(H.value,I.value))),$=n((()=>Math.abs(I.value-H.value)+R.value)),Q=n((()=>{let e=new Map;return j.vertical?(e.set("width",j.thickness),e.set("flex-direction","column")):(e.set("height",j.thickness),e.set("flex-direction","row")),e.set("border-radius",X.value),e.set("background",j.disabled?S.value.disabled:q.value),e.set("transition-duration",a.configs.aniTime.normal),e})),Z=n((()=>{let e=new Map;return j.vertical?(e.set("top",g.addPx(K.value)),e.set("width","100%"),e.set("height",g.addPx($.value)),e.set("min-height",g.addPx(R.value)),e.set("max-height",g.addPx(P.value)),e.set("flex-direction","column")):(e.set("left",g.addPx(K.value)),e.set("height","100%"),e.set("width",g.addPx($.value)),e.set("min-width",g.addPx(R.value)),e.set("max-width",g.addPx(M.value)),e.set("flex-direction","row")),e.set("border-radius",Y.value),e.set("background",j.disabled?S.value.disabledText:L.value),e.set("transition-duration",a.configs.aniTime.normal),e})),ee=n((()=>{let e=new Map;return e.set("width",g.addPx(z.value)),e.set("height",g.addPx(z.value)),e.set("border-radius",Y.value),e.set("background","white"),e.set("border",j.thumbBorder),e.set("transition-duration",a.configs.aniTime.normal),e})),le=n((()=>{let e=new Map;return e.set("transform","translate".concat(j.vertical?"Y":"X","(").concat(H.value+W.value,"px)")),e})),te=n((()=>{let e=new Map;return e.set("transform","translate".concat(j.vertical?"Y":"X","(").concat(I.value+W.value,"px)")),e})),ae=n((()=>{let e=new Map;return e.set("width",j.valueTextWidth),j.vertical?e.set("margin-top","5px"):e.set("margin-left","5px"),e})),ue=n((()=>{let e=new Map,l=Math.max(z.value,g.getPx(j.thickness));return j.vertical?(e.set("flex-direction","column"),e.set("height","100%"),e.set("width",g.addPx(Math.max(l,g.getPx(j.valueTextWidth))))):(e.set("flex-direction","row"),e.set("width","100%"),e.set("height",g.addPx(l))),e}));function ne(){var e,l,t,a,u,n;let o=null===(e=U.value)||void 0===e?void 0:e.getBoundingClientRect(),d=null===(l=_.value)||void 0===l?void 0:l.getBoundingClientRect();M.value=null!==(t=null==o?void 0:o.width)&&void 0!==t?t:0,P.value=null!==(a=null==o?void 0:o.height)&&void 0!==a?a:0,k.value=null!==(u=null==d?void 0:d.left)&&void 0!==u?u:0,N.value=null!==(n=null==d?void 0:d.top)&&void 0!==n?n:0}function oe(e,l,t){return e>=l&&e<=t}function de(e,l){let t=j.vertical?N.value:k.value,a=((j.vertical?l:e)-t-R.value/2)/E.value;a=Math.min(Math.max(0,a),1),a=a*(j.max-j.min)+j.min,D.value[B.value]=a,D.value=D.value}function se(e){if(e.preventDefault(),j.disabled||-1==B.value)return null;let l=e.touches[0];de(l.clientX,l.clientY),T("touchmove",e)}function ie(e){if(e.preventDefault(),j.disabled||-1!=B.value)return null;let l=e.touches[0],t=function(e){for(let l=0;l<2;l++){let t=0,a=0;j.vertical?(t=N.value,a=e.clientY):(t=k.value,a=e.clientX);let u=0==l?F.value:G.value,n=t+E.value*u;if(oe(a,n,n+R.value))return l}return-1}(l);-1!=t&&(B.value=t,de(l.clientX,l.clientY)),T("touchstart",e)}function re(e){e.preventDefault(),B.value=-1;let l=D.value;D.value=l[0]>l[1]?[l[1],l[0]]:l,T("touchend",e.target)}function ce(e){e.preventDefault(),T("touchcancel",e.target)}function me(e){if(e.preventDefault(),j.disabled)return null;T("touchstart",e)}function ve(e){if(e.preventDefault(),j.disabled||-1==B.value)return null;T("touchmove",e)}function pe(e){e.preventDefault(),T("touchend",e)}return o((()=>{D.value=C(D.value),window.addEventListener("mouseup",pe),window.addEventListener("mousemove",ve),d((()=>{ne()})),O(U.value,(()=>{ne()}))})),s((()=>{d((()=>{ne()}))})),(l=null,t=null)=>{const a=h,u=y(i("sn-text"),w);return f(),r(a,{class:"sn-slider-contain",ref_key:"containEle",ref:_,onTouchmove:se,onTouchstart:ie,onTouchend:re,onTouchcancel:ce,onMousedown:me,style:m([v(ue),e.customContainStyle])},{default:c((()=>[x(a,{class:b(["sn-slider",e.disabled?"disabled":""]),ref_key:"sliderEle",ref:U,style:m([v(Q),e.customStyle])},{default:c((()=>[x(a,{class:"sn-slider-active",style:m([v(Z),e.customActiveStyle])},null,8,["style"])])),_:1},8,["class","style"]),x(a,{class:"sn-slider-thumb-pre",style:m([v(ee),v(le),e.customThumbStyle])},null,8,["style"]),x(a,{class:"sn-slider-thumb-suf",style:m([v(ee),v(te),e.customThumbStyle])},null,8,["style"]),e.showValueText?(f(),r(u,{key:0,align:"center",text:"".concat(v(D)),lines:1,style:m([v(ae),e.customValueTextStyle])},null,8,["text","style"])):V("",!0)])),_:1},8,["style"])}}})),[["__scopeId","data-v-328bc450"]]),P=t({__name:"sn-slider",setup(t){const a=u(70),n=u(50),o=u(20),d=u(20),s=u(20),m=u(20),p=u([20,40]),h=u([20,40]),b=u([20,40]),V=u([20,40]),T=u([20,40]),O=u([20,40]);return(t=null,u=null)=>{const P=y(i("sn-topbar"),e),k=y(i("sn-slider"),S),N=y(i("sn-slider-double"),M),B=y(i("com-card"),j),J=y(i("sn-text"),w),C=y(i("sn-row"),l),D=y(i("sn-gap"),U),W=y(i("sn-page"),_);return f(),r(W,null,{default:c((()=>[x(P,{title:"Slider 滑动选择"}),x(B,{title:"基础用法",note:"和内置 Slider 组件不同的是，本组件并非使用 Draw Api 绘制。大部分场景下，不会出现大量 Slider 联动的高性能需求，使用多 DOM 布局以更好满足用户个性化需求。支持双向 Slider。"},{default:c((()=>[x(k,{modelValue:v(a),"onUpdate:modelValue":u[0]||(u[0]=(e=null)=>g(a)?a.value=e:null)},null,8,["modelValue"]),x(N,{class:"m-t-10",modelValue:v(p),"onUpdate:modelValue":u[1]||(u[1]=(e=null)=>g(p)?p.value=e:null)},null,8,["modelValue"])])),_:1}),x(B,{title:"滑块大小",note:"可以自由设置滑块大小"},{default:c((()=>[x(k,{modelValue:v(n),"onUpdate:modelValue":u[2]||(u[2]=(e=null)=>g(n)?n.value=e:null),thumbSize:"16px"},null,8,["modelValue"]),x(N,{modelValue:v(h),"onUpdate:modelValue":u[3]||(u[3]=(e=null)=>g(h)?h.value=e:null),class:"m-t-10",thumbSize:"20px",thickness:"2px",valueTextWidth:"50px",thumbBorder:"1px solid #ededed"},null,8,["modelValue"])])),_:1}),x(B,{title:"厚度",note:"调节 Slider 的显示厚度，可以更小，也可更大"},{default:c((()=>[x(k,{modelValue:v(o),"onUpdate:modelValue":u[4]||(u[4]=(e=null)=>g(o)?o.value=e:null),thickness:"15px",padding:"3px"},null,8,["modelValue"]),x(N,{modelValue:v(b),"onUpdate:modelValue":u[5]||(u[5]=(e=null)=>g(b)?b.value=e:null),class:"m-t-10",thickness:"15px",padding:"3px",valueTextWidth:"50px"},null,8,["modelValue"])])),_:1}),x(B,{title:"显示值",note:"可以显示当前数值文本"},{default:c((()=>[x(k,{modelValue:v(d),"onUpdate:modelValue":u[6]||(u[6]=(e=null)=>g(d)?d.value=e:null),showValueText:""},null,8,["modelValue"]),x(N,{modelValue:v(V),"onUpdate:modelValue":u[7]||(u[7]=(e=null)=>g(V)?V.value=e:null),class:"m-t-10",showValueText:"",valueTextWidth:"50px"},null,8,["modelValue"])])),_:1}),x(B,{title:"极值和步长",note:"可以自由设置最大值、最小值、步长。支持自动检查初始数据并纠错。"},{default:c((()=>[x(J,{class:"m-b-10",text:"最小值：10\n最大值：60\n步长：5\n当前值：".concat(v(s))},null,8,["text"]),x(k,{modelValue:v(s),"onUpdate:modelValue":u[8]||(u[8]=(e=null)=>g(s)?s.value=e:null),min:10,max:60,step:5},null,8,["modelValue"]),x(N,{class:"m-t-10",modelValue:v(O),"onUpdate:modelValue":u[9]||(u[9]=(e=null)=>g(O)?O.value=e:null),min:10,max:60,step:5},null,8,["modelValue"])])),_:1}),x(B,{title:"竖向",note:"支持设置竖向显示"},{default:c((()=>[x(C,{class:"h-250"},{default:c((()=>[x(k,{modelValue:v(m),"onUpdate:modelValue":u[10]||(u[10]=(e=null)=>g(m)?m.value=e:null),vertical:""},null,8,["modelValue"]),x(k,{class:"m-r-50",modelValue:v(m),"onUpdate:modelValue":u[11]||(u[11]=(e=null)=>g(m)?m.value=e:null),vertical:"",showValueText:""},null,8,["modelValue"]),x(N,{modelValue:v(T),"onUpdate:modelValue":u[12]||(u[12]=(e=null)=>g(T)?T.value=e:null),vertical:""},null,8,["modelValue"]),x(N,{modelValue:v(T),"onUpdate:modelValue":u[13]||(u[13]=(e=null)=>g(T)?T.value=e:null),vertical:"",showValueText:"",valueTextWidth:"60px"},null,8,["modelValue"])])),_:1})])),_:1}),x(B,{title:"禁用",note:"支持设置禁用"},{default:c((()=>[x(k,{modelValue:v(o),"onUpdate:modelValue":u[14]||(u[14]=(e=null)=>g(o)?o.value=e:null),disabled:""},null,8,["modelValue"]),x(N,{modelValue:v(b),"onUpdate:modelValue":u[15]||(u[15]=(e=null)=>g(b)?b.value=e:null),class:"m-t-10",disabled:"",valueTextWidth:"50px"},null,8,["modelValue"])])),_:1}),x(D,{height:"50px"})])),_:1})}}});export{P as default};