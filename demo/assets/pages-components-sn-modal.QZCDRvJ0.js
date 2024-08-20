import{b as e,_ as l}from"./sn-topbar.DGNmRcUY.js";import{d as t,r as o,c as n,b as a,e as i,f as s,u,m as r,l as c,o as d,g as m,t as p,v as f,q as x,p as b,S as y,h as g,i as C,F as v}from"./index-D82xabMX.js";import{$ as h,e as V,r as T,S}from"./uni-app.es.Cv0ss-rw.js";import{_}from"./sn-gap.BFzalOT1.js";import{_ as k}from"./sn-switch.B79Tps6Q.js";import{_ as w}from"./sn-form-item.D3fgF-ip.js";import{_ as z}from"./sn-stepper.Q3yYL--b.js";import{_ as U}from"./sn-select.B1heSqvw.js";import{_ as j}from"./sn-input.OLyd3D9e.js";import{b as B,_ as F,c as M}from"./sn-button.CJ0ZsVkl.js";import{_ as O}from"./sn-form.uvue_vue_type_script_setup_true_lang.CZfQ0e94.js";import{_ as D}from"./com-card.2Ru7Wd6o.js";import{_ as A}from"./sn-page.CIc3m52K.js";import{c as $}from"./longtext.Dg_mbSxN.js";import"./sn-alert.IFfoCHl2.js";import"./sn-line.C1IVPNnk.js";const E=M(t(Object.assign({name:"sn-modal"},{__name:"sn-modal",props:{title:{type:String,default:""},titleAlign:{type:String,default:"center"},titleSize:{type:String,default:""},titleFont:{type:String,default:"misans-semibold"},titleColor:{type:String,default:""},bgColor:{type:String,default:""},content:{type:String,default:""},contentAlign:{type:String,default:"center"},contentSize:{type:String,default:""},contentColor:{type:String,default:""},contentFont:{type:String,default:"misans-normal"},buttonType:{type:String,default:"embed"},buttonBorder:{type:String,default:""},confirmText:{type:String,default:"确定"},confirmTextColor:{type:String,default:""},confirmTextSize:{type:String,default:""},showCancel:{type:Boolean,default:!0},showConfirm:{type:Boolean,default:!0},cancelText:{type:String,default:"取消"},cancelTextColor:{type:String,default:""},cancelTextSize:{type:String,default:""},position:{type:String,default:"center"},aniTime:{type:Number,default:350},maskClose:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},preventBack:{type:Boolean,default:!1},maskOpacity:{type:Number,default:.4},customStyle:{type:Object,default:{}}},emits:["open","close","clickMask","confirm","cancel"],setup(l,t){var g=t.expose,C=t.emit;const v=h.colors,S=h.utils,_=C,k=l,w=o(!1),z=o(0),U=o(0),j=o(50),M=o(0),O=o(null),D=o(null),A=n((()=>["embed","float"].includes(k.buttonType)?k.buttonType:"embed")),$=n((()=>k.showCancel||k.showConfirm)),E=n((()=>{let e=k.aniTime;return e>100?e-100:e})),N=n((()=>h.configs.app.theme)),P=n((()=>""==k.titleSize?"".concat(h.utils.getPx(h.configs.font.size(3))+1,"px"):k.titleSize)),q=n((()=>""==k.titleColor?v.value.title:k.titleColor)),H=n((()=>""==k.bgColor?v.value["".concat("light"==N.value?"front":"info")]:k.bgColor)),I=n((()=>""==k.contentColor?v.value.text:k.contentColor)),R=n((()=>""==k.buttonBorder?"0.5px solid ".concat(v.value.line):k.buttonBorder)),W=n((()=>""==k.confirmTextColor?v.value.primaryDark:k.confirmTextColor)),G=n((()=>""==k.confirmTextSize?h.configs.font.size(3):k.confirmTextSize)),J=n((()=>""==k.cancelTextColor?v.value.text:k.cancelTextColor)),K=n((()=>""==k.cancelTextSize?h.configs.font.size(3):k.cancelTextSize)),L=n((()=>""==k.contentSize?"".concat(h.utils.getPx(h.configs.font.baseSize)+1,"px"):k.contentSize)),Q=n((()=>["center","top","bottom","left","right"].includes(k.position)?k.position:"center")),X=n((()=>{let e=new Map;return e.set("max-height","".concat(U.value,"px")),e.set("background",H.value),e.set("border-radius",h.configs.radius.normal),e.set("padding-top","32px"),e.set("transition-duration","".concat(k.aniTime,"ms")),"float"==A.value&&e.set("padding-bottom","5px"),e})),Y=n((()=>{let e=new Map;return e.set("justifyContent",["center","left","right"].includes(Q.value)?"center":"top"==Q.value?"flex-start":"flex-end"),e})),Z=n((()=>{let e=new Map;return e.set("animation",k.aniTime>0),e.set("hover",w.value),e.set(Q.value,!0),e})),ee=n((()=>{let e=new Map;return e.set("margin","0px 24px 8px"),e.set("transition-duration","0ms"),e})),le=n((()=>{let e=new Map;return e.set("margin","8px 24px 0px"),e.set("transition-duration","0ms"),e})),te=n((()=>{let e=new Map;return e.set("height","".concat(j.value,"px")),e.set("background",H.value),e.set("border-top",R.value),e.set("border-right",R.value),e.set("margin-top","10px"),e.set("transition-duration",h.configs.aniTime.normal),e})),oe=n((()=>{let e=new Map;return e.set("height","".concat(j.value,"px")),e.set("background",H.value),e.set("border-top",R.value),e.set("margin-top","10px"),e.set("transition-duration",h.configs.aniTime.normal),e})),ne=n((()=>{let e=new Map;return e.set("height","".concat(j.value,"px")),e.set("padding","0px 15px 7px"),e.set("flex-direction","row"),e.set("align-items","center"),e.set("background",H.value),e})),ae=n((()=>{let e=new Map;return e.set("padding-bottom","10px"),e.set("height","auto"),e.set("max-height","".concat(U.value-j.value-M.value-50,"px")),e}));function ie(){var e,l;null===(l=null===(e=D.value)||void 0===e?void 0:e.close)||void 0===l||l.call(e),w.value=!1,_("close")}function se(){w.value=!1,_("clickMask")}function ue(){k.disabled||(_("cancel"),ie())}function re(){k.disabled||(_("confirm"),ie())}return g({open:function(){var e,l;z.value=0,null===(l=null===(e=D.value)||void 0===e?void 0:e.open)||void 0===l||l.call(e),_("open"),c((()=>{w.value=!0,U.value=.8*S.getWindowHeight(),c((()=>{var e,l,t;M.value=null!==(t=null===(l=null===(e=O.value)||void 0===e?void 0:e.getBoundingClientRect())||void 0===l?void 0:l.height)&&void 0!==t?t:0}))}))},close:ie,confirm:re,cancel:ue}),V((e=>!!w.value&&(k.preventBack||ie(),!0))),(t=null,o=null)=>{const n=T(a("sn-text"),B),c=b,g=y,C=T(a("sn-button"),F),h=T(a("sn-overlay"),e);return d(),i(h,{class:"sn-modal-overlay",ref_key:"overlayEle",ref:D,aniTime:u(E),maskClose:l.maskClose,opacity:l.maskOpacity,onClickMask:se,style:r(u(Y))},{default:s((()=>[m(c,{class:x(["sn-modal",u(Z)]),style:r(u(X))},{default:s((()=>[m(c,{class:"sn-modal-header",ref_key:"headerEle",ref:O,style:r(u(ee))},{default:s((()=>[p(t.$slots,"header",{},(()=>[m(n,{class:"sn-modal-title",text:l.title,font:l.titleFont,align:l.titleAlign,color:u(q),size:u(P)},null,8,["text","font","align","color","size"])]),!0)])),_:3},8,["style"]),m(g,{class:"sn-modal-body","show-scrollbar":!1,bounces:!1,"scroll-top":u(z),style:r(u(ae))},{default:s((()=>[p(t.$slots,"content",{},(()=>[m(n,{text:l.content,font:l.contentFont,align:l.contentAlign,color:u(I),size:u(L),style:r(u(le))},null,8,["text","font","align","color","size","style"])]),!0)])),_:3},8,["scroll-top","style"]),u($)?p(t.$slots,"actions",{key:0},(()=>["embed"==u(A)?(d(),i(c,{key:0,class:"sn-modal-action-group"},{default:s((()=>[l.showCancel?(d(),i(c,{key:0,class:"sn-modal-action",onClick:ue,style:r(u(te))},{default:s((()=>[m(n,{font:"misans-normal",align:"center",text:l.cancelText,size:u(K),color:l.disabled?u(v).disabledText:u(J)},null,8,["text","size","color"])])),_:1},8,["style"])):f("",!0),l.showConfirm?(d(),i(c,{key:1,class:"sn-modal-action",onClick:re,style:r(u(oe))},{default:s((()=>[m(n,{font:"misans-semibold",align:"center",text:l.confirmText,size:u(G),color:l.disabled?u(v).disabledText:u(W)},null,8,["text","size","color"])])),_:1},8,["style"])):f("",!0)])),_:1})):"float"==u(A)?(d(),i(c,{key:1,style:r([u(ne)])},{default:s((()=>[l.showCancel?(d(),i(C,{key:0,type:"info",level:"second",long:"",disabled:l.disabled,text:l.cancelText,textSize:u(K),onClick:ue,style:r(l.showConfirm?"margin-right: 10px":"")},null,8,["disabled","text","textSize","style"])):f("",!0),l.showConfirm?(d(),i(C,{key:1,type:"primary",long:"",disabled:l.disabled,text:l.confirmText,textSize:u(G),onClick:re},null,8,["disabled","text","textSize"])):f("",!0)])),_:1},8,["style"])):f("",!0)]),!0):f("",!0)])),_:3},8,["class","style"])])),_:3},8,["aniTime","maskClose","opacity","style"])}}})),[["__scopeId","data-v-9c80667b"]]),N=t({__name:"sn-modal",setup(e){const t=h.utils,i=o(null),r=o({showCancel:!0,showConfirm:!0,disabled:!1,maskClose:!1,preventBack:!1,content:0,title:"标题",contentColor:"",contentSize:"",contentFont:"misans-normal",titleFont:"misans-semibold",titleColor:"",titleSize:"",confirmText:"确定",confirmTextColor:"",confirmTextSize:"",cancelText:"取消",cancelTextColor:"",cancelTextSize:"",buttonType:0,position:1,maskOpacity:.4}),c=[new S({id:"top",text:"顶部"}),new S({id:"center",text:"居中"}),new S({id:"bottom",text:"底部"}),new S({id:"left",text:"左侧"}),new S({id:"right",text:"右侧"})],p=[new S({id:"short",text:"短文本"}),new S({id:"long",text:"长文本（可滚动）"})],f=[new S({id:"embed",text:"嵌入式"}),new S({id:"float",text:"浮动式"})],x=n((()=>{var e;switch(null!==(e=r.value.content)&&void 0!==e?e:0){case 0:default:return"如果需要对话框，那么官方的 uni.showModal 足以满足你的需求。当你需要更自由地控制动画、插槽时，不妨试试本组件。";case 1:return $}}));function b(){t.throttle((()=>{i.value.open()}),50)}function y(e){"run"==e.id&&b()}return(e=null,t=null)=>{const o=T(a("sn-topbar"),l),n=T(a("sn-gap"),_),h=T(a("sn-switch"),k),V=T(a("sn-form-item"),w),B=T(a("sn-stepper"),z),M=T(a("sn-select"),U),$=T(a("sn-input"),j),N=T(a("sn-button"),F),P=T(a("sn-form"),O),q=T(a("com-card"),D),H=T(a("sn-page"),A),I=T(a("sn-modal"),E);return d(),g(v,null,[m(H,null,{default:s((()=>[m(o,{title:"Modal 模态框",features:[new S({id:"run",icon:"play-circle-fill"})],onButtonClick:y}),m(n),m(q,{title:"组件演示",note:"如果需要对话框，那么官方的 uni.showModal 应该足以满足你的需求。\\n当你需要更自由地控制动画、插槽时，不妨试试本组件。"},{default:s((()=>[m(P,{modelValue:u(r),"onUpdate:modelValue":t[23]||(t[23]=(e=null)=>C(r)?r.value=e:null),showBorder:!1},{default:s((()=>[m(V,{label:"显示确认按钮"},{default:s((()=>[m(h,{modelValue:u(r).showConfirm,"onUpdate:modelValue":t[0]||(t[0]=(e=null)=>u(r).showConfirm=e)},null,8,["modelValue"])])),_:1}),m(V,{label:"显示取消按钮"},{default:s((()=>[m(h,{modelValue:u(r).showCancel,"onUpdate:modelValue":t[1]||(t[1]=(e=null)=>u(r).showCancel=e)},null,8,["modelValue"])])),_:1}),m(V,{label:"禁用"},{default:s((()=>[m(h,{modelValue:u(r).disabled,"onUpdate:modelValue":t[2]||(t[2]=(e=null)=>u(r).disabled=e)},null,8,["modelValue"])])),_:1}),m(V,{label:"遮罩关闭"},{default:s((()=>[m(h,{modelValue:u(r).maskClose,"onUpdate:modelValue":t[3]||(t[3]=(e=null)=>u(r).maskClose=e)},null,8,["modelValue"])])),_:1}),m(V,{label:"阻止返回事件"},{default:s((()=>[m(h,{modelValue:u(r).preventBack,"onUpdate:modelValue":t[4]||(t[4]=(e=null)=>u(r).preventBack=e)},null,8,["modelValue"])])),_:1}),m(V,{label:"遮罩透明度"},{default:s((()=>[m(B,{modelValue:u(r).maskOpacity,"onUpdate:modelValue":t[5]||(t[5]=(e=null)=>u(r).maskOpacity=e),step:.1,min:0,max:1},null,8,["modelValue"])])),_:1}),m(V,{label:"位置"},{default:s((()=>[m(M,{modelValue:u(r).position,"onUpdate:modelValue":t[6]||(t[6]=(e=null)=>u(r).position=e),width:"200px",data:c},null,8,["modelValue"])])),_:1}),m(V,{label:"按钮风格"},{default:s((()=>[m(M,{modelValue:u(r).buttonType,"onUpdate:modelValue":t[7]||(t[7]=(e=null)=>u(r).buttonType=e),width:"200px",data:f},null,8,["modelValue"])])),_:1}),m(V,{label:"内容"},{default:s((()=>[m(M,{modelValue:u(r).content,"onUpdate:modelValue":t[8]||(t[8]=(e=null)=>u(r).content=e),width:"200px",data:p},null,8,["modelValue"])])),_:1}),m(V,{label:"标题"},{default:s((()=>[m($,{class:"input",modelValue:u(r).title,"onUpdate:modelValue":t[9]||(t[9]=(e=null)=>u(r).title=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"内容字体"},{default:s((()=>[m($,{class:"input",modelValue:u(r).contentFont,"onUpdate:modelValue":t[10]||(t[10]=(e=null)=>u(r).contentFont=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"内容颜色"},{default:s((()=>[m($,{class:"input",modelValue:u(r).contentColor,"onUpdate:modelValue":t[11]||(t[11]=(e=null)=>u(r).contentColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"内容字体大小"},{default:s((()=>[m($,{class:"input",modelValue:u(r).contentSize,"onUpdate:modelValue":t[12]||(t[12]=(e=null)=>u(r).contentSize=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"标题字体"},{default:s((()=>[m($,{class:"input",modelValue:u(r).titleFont,"onUpdate:modelValue":t[13]||(t[13]=(e=null)=>u(r).titleFont=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"标题颜色"},{default:s((()=>[m($,{class:"input",modelValue:u(r).titleColor,"onUpdate:modelValue":t[14]||(t[14]=(e=null)=>u(r).titleColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"标题字体大小"},{default:s((()=>[m($,{class:"input",modelValue:u(r).titleSize,"onUpdate:modelValue":t[15]||(t[15]=(e=null)=>u(r).titleSize=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"确定按钮文字"},{default:s((()=>[m($,{class:"input",modelValue:u(r).confirmText,"onUpdate:modelValue":t[16]||(t[16]=(e=null)=>u(r).confirmText=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"取消按钮文字"},{default:s((()=>[m($,{class:"input",modelValue:u(r).cancelText,"onUpdate:modelValue":t[17]||(t[17]=(e=null)=>u(r).cancelText=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"确定按钮字体大小"},{default:s((()=>[m($,{class:"input",modelValue:u(r).confirmTextSize,"onUpdate:modelValue":t[18]||(t[18]=(e=null)=>u(r).confirmTextSize=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"确定按钮字体颜色"},{default:s((()=>[m($,{class:"input",modelValue:u(r).confirmTextColor,"onUpdate:modelValue":t[19]||(t[19]=(e=null)=>u(r).confirmTextColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"取消按钮字体大小"},{default:s((()=>[m($,{class:"input",modelValue:u(r).cancelTextSize,"onUpdate:modelValue":t[20]||(t[20]=(e=null)=>u(r).cancelTextSize=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(V,{label:"取消按钮字体颜色"},{default:s((()=>[m($,{class:"input",modelValue:u(r).cancelTextColor,"onUpdate:modelValue":t[21]||(t[21]=(e=null)=>u(r).cancelTextColor=e),placeholder:"默认值"},null,8,["modelValue"])])),_:1}),m(N,{text:"打开",level:"second",type:"primary",onClick:t[22]||(t[22]=(e=null)=>b()),style:{"margin-top":"10px"}})])),_:1},8,["modelValue"])])),_:1}),m(n)])),_:1}),m(I,{ref_key:"modalEle",ref:i,title:u(r).title,content:u(x),buttonType:f[u(r).buttonType].id,position:c[u(r).position].id,showConfirm:u(r).showConfirm,showCancel:u(r).showCancel,maskOpacity:u(r).maskOpacity,disabled:u(r).disabled,maskClose:u(r).maskClose,preventBack:u(r).preventBack,titleSize:u(r).titleSize,titleColor:u(r).titleColor,titleFont:u(r).titleFont,contentSize:u(r).contentSize,contentColor:u(r).contentColor,contentFont:u(r).contentFont,confirmText:u(r).confirmText,cancelText:u(r).cancelText,confirmTextSize:u(r).confirmTextSize,cancelTextSize:u(r).cancelTextSize,confirmTextColor:u(r).confirmTextColor,cancelTextColor:u(r).cancelTextColor},null,8,["title","content","buttonType","position","showConfirm","showCancel","maskOpacity","disabled","maskClose","preventBack","titleSize","titleColor","titleFont","contentSize","contentColor","contentFont","confirmText","cancelText","confirmTextSize","cancelTextSize","confirmTextColor","cancelTextColor"])],64)}}});export{N as default};
