import{b as e,_ as l}from"./sn-topbar.DGNmRcUY.js";import{d as t,r as a,c as o,b as n,e as s,f as i,u,m as r,l as d,o as p,g as m,v as c,t as f,q as v,B as h,p as g,h as b,i as w,F as _}from"./index-D82xabMX.js";import{$ as y,e as k,r as x,S as C}from"./uni-app.es.Cv0ss-rw.js";import{_ as V}from"./sn-switch.B79Tps6Q.js";import{_ as j}from"./sn-form-item.D3fgF-ip.js";import{_ as B}from"./sn-select.B1heSqvw.js";import{_ as D}from"./sn-stepper.Q3yYL--b.js";import{_ as U}from"./sn-input.OLyd3D9e.js";import{c as M,_ as S}from"./sn-button.CJ0ZsVkl.js";import{_ as I}from"./sn-form.uvue_vue_type_script_setup_true_lang.CZfQ0e94.js";import{_ as O}from"./com-card.2Ru7Wd6o.js";import{_ as H}from"./sn-gap.BFzalOT1.js";import{_ as L}from"./sn-page.CIc3m52K.js";import{_ as T}from"./sn-view.uvue_vue_type_script_setup_true_lang.NnYLQipQ.js";import"./sn-alert.IFfoCHl2.js";import"./sn-line.C1IVPNnk.js";const W=M(t(Object.assign({name:"sn-drawer"},{__name:"sn-drawer",props:{renderMode:{type:String,default:"v-if"},position:{type:String,default:"bottom"},showLine:{type:Boolean,default:!0},slideClose:{type:Boolean,default:!0},width:{type:String,default:"300px"},slideWidth:{type:String,default:"100px"},height:{type:String,default:"300px"},slideHeight:{type:String,default:"100px"},bgColor:{type:String,default:""},lineColor:{type:String,default:""},padding:{type:String,default:"25px 15px 10px 15px"},borderRadius:{type:String,default:""},aniTime:{type:Number,default:parseInt(y.configs.aniTime.long)},preventBack:{type:Boolean,default:!1},maskClose:{type:Boolean,default:!0},maskOpacity:{type:Number,default:.3},customStyle:{type:Object,default:{}}},emits:["open","close","clickMask"],setup(l,t){var b=t.expose,w=t.emit;const _=y.utils,C=y.colors,V=w,j=l,B=a(!1),D=a(0),U=a(!0),M=a(_.randomComId()),S=a(null),I=o((()=>["top","bottom","left","right"].includes(j.position)?j.position:"bottom")),O=o((()=>"top"==I.value||"bottom"==I.value)),H=o((()=>""==j.borderRadius?y.configs.radius.xlarge:j.borderRadius)),L=o((()=>""==j.bgColor?C.value.front:j.bgColor)),W=o((()=>""==j.lineColor?C.value.lineText:j.lineColor)),P=o((()=>j.aniTime==parseInt(y.configs.aniTime.long)?parseInt(y.configs.aniTime.long):j.aniTime)),F=o((()=>P.value>100?P.value-100:P.value)),X=o((()=>{let e=new Map;return e.set("background",W.value),e.set("border-radius",y.configs.radius.circle),O.value?(e.set("height","5px"),e.set("left","50%"),e.set("width","60px"),e.set("transform","translateX(-50%)"),e.set("bottom"==I.value?"top":"bottom","10px")):(e.set("width","5px"),e.set("top","50%"),e.set("height","60px"),e.set("transform","translateY(-50%)"),e.set("left"==I.value?"right":"left","10px")),e})),Y=o((()=>{let e=new Map;return e.set("justify-content",O.value?"top"==I.value?"flex-start":"flex-end":"center"),e.set("align-items",O.value?"":"left"==I.value?"flex-start":"flex-end"),e})),R=o((()=>{let e=new Map,l=H.value;switch(O.value?(e.set("width","100%"),e.set("height",j.height)):(e.set("height","100%"),e.set("width",j.width)),I.value){case"top":e.set("border-radius","0 0 ".concat(l," ").concat(l));break;case"bottom":e.set("border-radius","".concat(l," ").concat(l," 0 0"));break;case"left":e.set("border-radius","0 ".concat(l," ").concat(l," 0"));break;case"right":e.set("border-radius","".concat(l," 0 0 ").concat(l))}return 0!=D.value&&e.set("transform","translate".concat(O.value?"Y":"X","(").concat(D.value,"px)")),e.set("background",L.value),e.set("transition-duration","".concat(U.value?P.value:0,"ms")),e.set("zIndex",y.configs.zIndex.popup),e})),z=o((()=>{let e=new Map;return e.set("animation",P.value>0),e.set("hover",B.value),e.set(I.value,!0),e}));function E(){U.value=!0,_.throttle((()=>{B.value=!1,d((()=>{var e,l;null===(l=null===(e=S.value)||void 0===e?void 0:e.close)||void 0===l||l.call(e)}))}),20,M.value+"closepop"),V("close")}function N(){U.value=!0,d((()=>{B.value=!1})),V("clickMask")}function $(e){if(j.slideClose){let l=e.touches[0];O.value?"bottom"==I.value?D.value="down"==l.direction?l.diffY:0:D.value="up"==l.direction?-l.diffY:0:"right"==I.value?D.value="right"==l.direction?l.diffX:0:D.value="left"==l.direction?-l.diffX:0}}function q(){j.slideClose&&(O.value&&Math.abs(D.value)>=_.getPx(j.slideHeight)||!O.value&&Math.abs(D.value)>=_.getPx(j.slideWidth)?(D.value=0,U.value=!0,E()):(U.value=!0,D.value=0,_.debounce((()=>{U.value=!1}),P.value)))}return b({open:function(){var e,l;U.value=!0,null===(l=null===(e=S.value)||void 0===e?void 0:e.open)||void 0===l||l.call(e),_.throttle((()=>{B.value=!0}),20,M.value+"showpop"),_.throttle((()=>{U.value=!1}),P.value,M.value+"animating"),V("open")},close:E}),k((e=>!!B.value&&(j.preventBack||E(),!0))),(t=null,a=null)=>{const o=g,d=x(n("sn-view"),T),b=x(n("sn-overlay"),e);return p(),s(b,{ref_key:"overlayEle",ref:S,renderMode:l.renderMode,aniTime:u(F),opacity:l.maskOpacity,maskClose:l.maskClose,onClickMask:N,style:r(u(Y))},{default:i((()=>[m(o,{class:v(["sn-drawer",u(z)]),onClick:a[0]||(a[0]=h((()=>{}),["stop"])),style:r([u(R),l.customStyle])},{default:i((()=>[m(d,{padding:l.padding,onTouchmove:$,onTouchend:q,onTouchcancel:q,style:{flex:"1"}},{default:i((()=>[l.showLine?(p(),s(o,{key:0,class:"sn-drawer-line",style:r(u(X))},null,8,["style"])):c("",!0),f(t.$slots,"default",{},void 0,!0)])),_:3},8,["padding"])])),_:3},8,["class","style"])])),_:3},8,["renderMode","aniTime","opacity","maskClose","style"])}}})),[["__scopeId","data-v-69f5a8c1"]]),P=t({__name:"sn-drawer",setup(e){const t=y.utils,o=a(null),s=a({maskClose:!0,preventBack:!1,showLine:!0,slideClose:!0,bgColor:"",lineColor:"",position:0,height:300,width:300,slideHeight:100,slideWidth:100,aniTime:parseInt(y.configs.aniTime.long),maskOpacity:.3}),r=[new C({id:"bottom",text:"底部"}),new C({id:"top",text:"顶部"}),new C({id:"left",text:"左侧"}),new C({id:"right",text:"右侧"})];function d(){t.throttle((()=>{var e,l;null===(l=null===(e=o.value)||void 0===e?void 0:e.open)||void 0===l||l.call(e)}),50)}function c(e){"run"==e.id&&d()}return(e=null,t=null)=>{var a,f;const v=x(n("sn-topbar"),l),h=x(n("sn-switch"),V),g=x(n("sn-form-item"),j),y=x(n("sn-select"),B),k=x(n("sn-stepper"),D),M=x(n("sn-input"),U),T=x(n("sn-button"),S),P=x(n("sn-form"),I),F=x(n("com-card"),O),X=x(n("sn-gap"),H),Y=x(n("sn-page"),L),R=x(n("sn-drawer"),W);return p(),b(_,null,[m(Y,null,{default:i((()=>[m(v,{title:"Drawer 抽屉",features:[new C({id:"run",icon:"play-circle-fill"})],onButtonClick:c}),m(F,{title:"组件演示",note:"通常用于半屏窗口的场景。\\n请注意区分 Popup 和 Drawer。Popup 只控制动画和显隐逻辑，UI 需要自己写。而 Drawer 则是在 Popup 的基础上加了一层 UI 模板。\\n请注意区分 Drawer 和 Float Board。Drawer 是弹出层，需要调用方法才能显示；而 Float Board 则始终显示，且可以通过用户手势操作完全显露。（可以把 Drawer 理解为关闭的抽屉，FloatBoard 则是半开的抽屉）"},{default:i((()=>[m(P,{modelValue:u(s),"onUpdate:modelValue":t[14]||(t[14]=(e=null)=>w(s)?s.value=e:null),showBorder:!1},{default:i((()=>[m(g,{label:"遮罩关闭"},{default:i((()=>[m(h,{modelValue:u(s).maskClose,"onUpdate:modelValue":t[0]||(t[0]=(e=null)=>u(s).maskClose=e)},null,8,["modelValue"])])),_:1}),m(g,{label:"滑动手势关闭"},{default:i((()=>[m(h,{modelValue:u(s).slideClose,"onUpdate:modelValue":t[1]||(t[1]=(e=null)=>u(s).slideClose=e)},null,8,["modelValue"])])),_:1}),m(g,{label:"阻止返回事件"},{default:i((()=>[m(h,{modelValue:u(s).preventBack,"onUpdate:modelValue":t[2]||(t[2]=(e=null)=>u(s).preventBack=e)},null,8,["modelValue"])])),_:1}),m(g,{label:"显示指示条"},{default:i((()=>[m(h,{modelValue:u(s).showLine,"onUpdate:modelValue":t[3]||(t[3]=(e=null)=>u(s).showLine=e)},null,8,["modelValue"])])),_:1}),m(g,{label:"位置"},{default:i((()=>[m(y,{modelValue:u(s).position,"onUpdate:modelValue":t[4]||(t[4]=(e=null)=>u(s).position=e),width:"200px",data:r},null,8,["modelValue"])])),_:1}),m(g,{label:"动画时长"},{default:i((()=>[m(k,{modelValue:u(s).aniTime,"onUpdate:modelValue":t[5]||(t[5]=(e=null)=>u(s).aniTime=e),step:100,min:100},null,8,["modelValue"])])),_:1}),m(g,{label:"遮罩透明度"},{default:i((()=>[m(k,{modelValue:u(s).maskOpacity,"onUpdate:modelValue":t[6]||(t[6]=(e=null)=>u(s).maskOpacity=e),step:.1,min:0,max:1},null,8,["modelValue"])])),_:1}),m(g,{label:"宽度(仅left/right)"},{default:i((()=>[m(k,{modelValue:u(s).width,"onUpdate:modelValue":t[7]||(t[7]=(e=null)=>u(s).width=e),step:20,min:0},null,8,["modelValue"])])),_:1}),m(g,{label:"高度(仅top/bottom)"},{default:i((()=>[m(k,{modelValue:u(s).height,"onUpdate:modelValue":t[8]||(t[8]=(e=null)=>u(s).height=e),step:20,min:0},null,8,["modelValue"])])),_:1}),m(g,{label:"滑动关闭阈值（宽度）"},{default:i((()=>[m(k,{modelValue:u(s).slideWidth,"onUpdate:modelValue":t[9]||(t[9]=(e=null)=>u(s).slideWidth=e),step:20,min:0},null,8,["modelValue"])])),_:1}),m(g,{label:"滑动关闭阈值（高度）"},{default:i((()=>[m(k,{modelValue:u(s).slideHeight,"onUpdate:modelValue":t[10]||(t[10]=(e=null)=>u(s).slideHeight=e),step:20,min:0},null,8,["modelValue"])])),_:1}),m(g,{label:"背景颜色"},{default:i((()=>[m(M,{modelValue:u(s).bgColor,"onUpdate:modelValue":t[11]||(t[11]=(e=null)=>u(s).bgColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(g,{label:"指示条颜色"},{default:i((()=>[m(M,{modelValue:u(s).lineColor,"onUpdate:modelValue":t[12]||(t[12]=(e=null)=>u(s).lineColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(T,{text:"打开",level:"second",type:"primary",onClick:t[13]||(t[13]=(e=null)=>d()),style:{"margin-top":"10px"}})])),_:1},8,["modelValue"])])),_:1}),m(X)])),_:1}),m(R,{ref_key:"drawerEle",ref:o,position:null!==(f=r[null!==(a=u(s).position)&&void 0!==a?a:0].id)&&void 0!==f?f:"",bgColor:"".concat(u(s).bgColor),lineColor:"".concat(u(s).lineColor),height:"".concat(u(s).height,"px"),width:"".concat(u(s).width,"px"),slideHeight:"".concat(u(s).slideHeight,"px"),slideWidth:"".concat(u(s).slideWidth,"px"),aniTime:u(s).aniTime,maskOpacity:u(s).maskOpacity,maskClose:u(s).maskClose,slideClose:u(s).slideClose,showLine:u(s).showLine,preventBack:u(s).preventBack},null,8,["position","bgColor","lineColor","height","width","slideHeight","slideWidth","aniTime","maskOpacity","maskClose","slideClose","showLine","preventBack"])],64)}}});export{P as default};
