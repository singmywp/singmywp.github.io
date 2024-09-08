import{d as e,c as n,r as t,a,w as i,b as o,o as c,e as l,f as s,g as m,u as r,i as S,h as O,j as u,F as b,n as d}from"./index-DNTc1GxZ.js";import{_ as p}from"./sn-topbar.CX0rMkKy.js";import{$ as x,S as w,o as j,r as U}from"./uni-app.es.D9ZkitmT.js";import{_ as T}from"./sn-alert.BVqfDC3L.js";import{_ as J}from"./sn-switch.C3UtPu7N.js";import{_ as N}from"./sn-form-item.iui4qf57.js";import{_ as f}from"./sn-slider.DKMANrMT.js";import{_ as g}from"./sn-form.uvue_vue_type_script_setup_true_lang.CpEqESxD.js";import{_ as h,a as k,b as _,c as v}from"./sn-button.BaZjRh9m.js";import{_ as y}from"./com-card.22LSjaaf.js";import{_ as V,a as z}from"./sn-grid-group.DH0_EbvX.js";import{_ as C}from"./sn-backtop.BKzLNVUV.js";import{_ as q}from"./sn-page.CEVOSUw5.js";import"./sn-line.BJRaATTn.js";import"./useResize.BiiI_cO4.js";const I=v(e({__name:"index",setup(e){const v=x.utils,I=n((()=>x.configs.app.theme)),B=t(14),L=t(12),D=t(!0),F=a({}),G=[new w({id:"about",icon:"information-line",text:"关于"}),new w({id:"document",icon:"book-2-line",text:"文档"}),new w({id:"uniappx",icon:"user-2-line",text:"uni-app x"}),new w({id:"ui",icon:"quill-pen-line",text:"UI 框架推荐"})],M=n((()=>x.configs.app.autoTheme));function R(e){d({url:e})}function $(e){v.debounce((()=>{x.configs.font.baseSize="".concat(e,"px")}),100,"snui-font-size")}function A(e){v.debounce((()=>{x.configs.radius.baseSize="".concat(e,"px")}),100,"snui-border-radius")}function E(){x.configs.app.theme="light"==I.value?"dark":"light"}function H(e){switch(e.id){case"about":R("/pages/other/about");break;case"document":v.openLink("https://singmywp.github.io/");break;case"uniappx":v.openLink("https://doc.dcloud.net.cn/uni-app-x/");break;case"ui":R("/pages/other/ui")}}i(M,(e=>{D.value=e})),i(D,(e=>{x.configs.app.autoTheme=e})),j((e=>{D.value=x.configs.app.autoTheme}));const K=[new UTSJSONObject({icon:"text",text:"文本",name:"sn-text"}),new UTSJSONObject({icon:"rectangle-line",text:"按钮",name:"sn-button"}),new UTSJSONObject({icon:"instance-line",text:"视图容器",name:"sn-view"}),new UTSJSONObject({icon:"image-line",text:"图片",name:"sn-image"}),new UTSJSONObject({icon:"remixicon-line",text:"图标",name:"sn-icon"}),new UTSJSONObject({icon:"separator",text:"分割线",name:"sn-line"}),new UTSJSONObject({icon:"link",text:"链接",name:"sn-link"}),new UTSJSONObject({icon:"remix-run-line",text:"过渡动画",name:"sn-transition"})],P=[new UTSJSONObject({icon:"article-line",text:"表单",name:"sn-form"}),new UTSJSONObject({icon:"toggle-line",text:"开关",name:"sn-switch"}),new UTSJSONObject({icon:"checkbox-line",text:"复选框",name:"sn-checkbox"}),new UTSJSONObject({icon:"radio-button-line",text:"单选框",name:"sn-radio"}),new UTSJSONObject({icon:"input-field",text:"输入框",name:"sn-input"}),new UTSJSONObject({icon:"text-block",text:"文本域",name:"sn-textarea"}),new UTSJSONObject({icon:"star-line",text:"评分",name:"sn-rate"}),new UTSJSONObject({icon:"skip-down-line",text:"选择框",name:"sn-select"}),new UTSJSONObject({icon:"add-box-line",text:"步进器",name:"sn-stepper"}),new UTSJSONObject({icon:"equalizer-2-line",text:"滑动选择",name:"sn-slider"}),new UTSJSONObject({icon:"gallery-upload-line",text:"媒体上传",name:"sn-upload-media"})],Q=[new UTSJSONObject({icon:"alarm-warning-line",text:"警告信息",name:"sn-alert"}),new UTSJSONObject({icon:"notification-4-line",text:"通知栏",name:"sn-notice-bar"}),new UTSJSONObject({icon:"user-smile-line",text:"头像",name:"sn-avatar"}),new UTSJSONObject({icon:"notification-badge-line",text:"徽标",name:"sn-badge"}),new UTSJSONObject({icon:"price-tag-3-line",text:"标签",name:"sn-tag"}),new UTSJSONObject({icon:"id-card-line",text:"卡片",name:"sn-card"}),new UTSJSONObject({icon:"file-list-2-line",text:"列表",name:"sn-list"}),new UTSJSONObject({icon:"list-view",text:"长列表",name:"sn-longlist"}),new UTSJSONObject({icon:"timer-2-line",text:"倒计时",name:"sn-countdown"}),new UTSJSONObject({icon:"number-6",text:"数字滚动",name:"sn-countto"}),new UTSJSONObject({icon:"timer-line",text:"计时器",name:"sn-timer"}),new UTSJSONObject({icon:"loader-4-line",text:"加载",name:"sn-loading"}),new UTSJSONObject({icon:"loader-3-line",text:"加载页",name:"sn-loading-page"}),new UTSJSONObject({icon:"bar-chart-horizontal-fill",text:"骨架屏",name:"sn-skeleton"}),new UTSJSONObject({icon:"markdown-line",text:"富文本",name:"sn-markdown"}),new UTSJSONObject({icon:"dice-4-line",text:"查看更多",name:"sn-more"}),new UTSJSONObject({icon:"barcode-line",text:"条形码",name:"sn-e-barcode"}),new UTSJSONObject({icon:"qr-code-line",text:"二维码",name:"sn-e-qrcode"}),new UTSJSONObject({icon:"file-image-line",text:"SVG",name:"sn-e-svg"})],W=[new UTSJSONObject({icon:"question-mark",text:"缺省页",name:"sn-empty"}),new UTSJSONObject({icon:"file-check-line",text:"结果页",name:"sn-result"}),new UTSJSONObject({icon:"shadow-line",text:"遮罩层",name:"sn-overlay"}),new UTSJSONObject({icon:"chat-3-line",text:"弹出层",name:"sn-popup"}),new UTSJSONObject({icon:"archive-drawer-line",text:"抽屉",name:"sn-drawer"}),new UTSJSONObject({icon:"chat-smile-2-line",text:"模态框",name:"sn-modal"}),new UTSJSONObject({icon:"message-3-line",text:"轻提示",name:"sn-toast"}),new UTSJSONObject({icon:"sticky-note-line",text:"弹出提示",name:"sn-tooltip"}),new UTSJSONObject({icon:"skip-down-line",text:"加载更多",name:"sn-loadmore"}),new UTSJSONObject({icon:"refresh-line",text:"下拉刷新",name:"sn-refresher"}),new UTSJSONObject({icon:"bar-chart-horizontal-line",text:"进度条",name:"sn-progress"})],X=[new UTSJSONObject({icon:"pages-line",text:"页面",name:"sn-page"}),new UTSJSONObject({icon:"space",text:"占位间隔",name:"sn-gap"}),new UTSJSONObject({icon:"skip-up-line",text:"返回顶部",name:"sn-backtop"}),new UTSJSONObject({icon:"layout-bottom-line",text:"折叠面板",name:"sn-collapse"}),new UTSJSONObject({icon:"layout-row-line",text:"水平布局",name:"sn-row"}),new UTSJSONObject({icon:"layout-column-line",text:"垂直布局",name:"sn-col"}),new UTSJSONObject({icon:"grid-line",text:"宫格布局",name:"sn-grid"}),new UTSJSONObject({icon:"kanban-view-2",text:"分段器",name:"sn-subsection"}),new UTSJSONObject({icon:"folder-3-line",text:"标签页",name:"sn-tabs"}),new UTSJSONObject({icon:"compass-discover-line",text:"导航栏",name:"sn-topbar"}),new UTSJSONObject({icon:"bill-line",text:"浮动面板",name:"sn-float-board"}),new UTSJSONObject({icon:"circle-line",text:"浮动按钮",name:"sn-float-button"}),new UTSJSONObject({icon:"search-2-line",text:"搜索框",name:"sn-search"})],Y=[new UTSJSONObject({icon:"qr-scan-2-line",text:"扫码",name:"sn-scan"}),new UTSJSONObject({icon:"pen-nib-line",text:"签名",name:"sn-signature"})],Z=[new UTSJSONObject({name:"基础组件",data:K}),new UTSJSONObject({name:"表单组件",data:P}),new UTSJSONObject({name:"展示组件",data:Q}),new UTSJSONObject({name:"反馈组件",data:W}),new UTSJSONObject({name:"布局组件",data:X}),new UTSJSONObject({name:"功能组件",data:Y})],ee=[new UTSJSONObject({icon:"tools-line",text:"工具库",name:"sn-utils"}),new UTSJSONObject({icon:"palette-line",text:"颜色库",name:"sn-color"}),new UTSJSONObject({icon:"hand",text:"手势库",name:"sn-gesture"}),new UTSJSONObject({icon:"calendar-2-line",text:"日期库",name:"sn-date"}),new UTSJSONObject({icon:"database-2-line",text:"状态管理",name:"sn-store"})];return(e=null,n=null)=>{const t=U(o("sn-topbar"),p),a=U(o("sn-alert"),T),i=U(o("sn-switch"),J),w=U(o("sn-form-item"),N),j=U(o("sn-slider"),f),v=U(o("sn-form"),g),I=U(o("sn-button"),h),M=U(o("com-card"),y),R=U(o("sn-icon"),k),K=U(o("sn-text"),_),P=U(o("sn-grid-item"),V),Q=U(o("sn-grid-group"),z),W=U(o("sn-backtop"),C),X=U(o("sn-page"),q);return c(),l(X,{id:"page"},{default:s((()=>[m(t,{title:"SinleUI",height:"80px",menuButton:"",backButton:!1,menuData:G,onMenuClick:H}),m(M,null,{default:s((()=>[m(a,{type:"primary",text:"SinleUI 全新发布，欢迎各位大佬体验",icon:"notification-fill"}),m(v,{modelValue:r(F),"onUpdate:modelValue":n[3]||(n[3]=(e=null)=>S(F)?F.value=e:null),showBorder:!1},{default:s((()=>[m(w,{class:"m-t-8",label:"跟随系统主题"},{default:s((()=>[m(i,{modelValue:r(D),"onUpdate:modelValue":n[0]||(n[0]=(e=null)=>S(D)?D.value=e:null)},null,8,["modelValue"])])),_:1}),m(w,{label:"字体"},{default:s((()=>[m(j,{modelValue:r(B),"onUpdate:modelValue":n[1]||(n[1]=(e=null)=>S(B)?B.value=e:null),max:30,min:5,showValueText:"",onChange:$},null,8,["modelValue"])])),_:1}),m(w,{label:"圆角"},{default:s((()=>[m(j,{modelValue:r(L),"onUpdate:modelValue":n[2]||(n[2]=(e=null)=>S(L)?L.value=e:null),max:30,min:0,showValueText:"",onChange:A},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),m(I,{type:"primary",text:"切换主题",onClick:E})])),_:1}),(c(!0),O(b,null,u(Z,((e,n)=>(c(),l(M,{key:n,title:e.name},{default:s((()=>[m(Q,null,{default:s((()=>[(c(!0),O(b,null,u(e.data,((e,n)=>(c(),l(P,{class:"com-item",key:n,onClick:(n=null)=>function(e){d({url:"/pages/components/".concat(e.name)})}(e)},{default:s((()=>{var n,t;return[m(R,{name:null!==(n=e.icon)&&void 0!==n?n:""},null,8,["name"]),m(K,{align:"center",text:null!==(t=e.text)&&void 0!==t?t:"",size:r(x).configs.font.size(1)},null,8,["text","size"])]})),_:2},1032,["onClick"])))),128))])),_:2},1024)])),_:2},1032,["title"])))),128)),m(M,{title:"核心库"},{default:s((()=>[m(Q,null,{default:s((()=>[(c(!0),O(b,null,u(ee,((e,n)=>(c(),l(P,{class:"com-item",key:n,onClick:(n=null)=>function(e){d({url:"/pages/libs/".concat(e.name)})}(e)},{default:s((()=>{var n,t;return[m(R,{name:null!==(n=e.icon)&&void 0!==n?n:""},null,8,["name"]),m(K,{text:null!==(t=e.text)&&void 0!==t?t:"",size:r(x).configs.font.size(1)},null,8,["text","size"])]})),_:2},1032,["onClick"])))),128))])),_:1})])),_:1}),m(W,{type:"primary",level:"second",listenTo:"page"})])),_:1})}}}),[["__scopeId","data-v-8c9a98b2"]]);export{I as default};