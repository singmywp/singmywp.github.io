import{d as t,$ as e,r as n,c as o,x as i,aq as s,a,b as l,e as r,f as c,g as p,u,au as d,av as m,aw as f}from"./index-DYMgrqHp.js";import{_ as g}from"./sn-topbar.wm0GzhH3.js";import{r as _}from"./uni-app.es.DgDfNdgy.js";import{_ as S}from"./sn-alert.B2UqFsTR.js";import{_ as b}from"./sn-button.BjZePiC5.js";import{_ as x}from"./com-card.BtLNzB63.js";import{b as w}from"./sn-text.euomPoe8.js";import{_ as y}from"./sn-page.Cf6LEMVT.js";import{a as h,b as j}from"./index.CWSfmgkL.js";import"./sn-menu-item.DkjoXkWj.js";import"./sn-overlay.CiZFgEyq.js";import"./sn-loading.t5otRKvs.js";class T extends UTS.UTSType{static get$UTSMetadata$(){return{kind:2,get fields(){return{name:{type:String,optional:!1},title:{type:String,optional:!1},content:{type:String,optional:!1},icon:{type:String,optional:!1}}}}}constructor(t,e=T.get$UTSMetadata$(),n=!1){super(),this.__props__=UTS.UTSType.initProps(t,e,n),this.name=this.__props__.name,this.title=this.__props__.title,this.content=this.__props__.content,this.icon=this.__props__.icon,delete this.__props__}}const C=w(t(Object.assign({name:"sn-perm-listener"},{__name:"sn-perm-listener",props:{data:{type:Object,default:new Map},padding:{type:String,default:"20px"},position:{type:String,default:"top"},maskOpacity:{type:Number,default:.5},bgColor:{type:String,default:""},iconSize:{type:String,default:""},iconColor:{type:String,default:""},contentSize:{type:String,default:""},contentColor:{type:String,default:""},titleSize:{type:String,default:""},titleColor:{type:String,default:""},customStyle:{type:Object,default:new UTSJSONObject({})}},setup(t){e.utils;const s=e.colors,a=t;n(0);const l=n(0);n(null),n([]),n([]);const r=o((()=>i("other",a.padding,"10px")));o((()=>{const t=new Map;return a.data.forEach(((e=null,n=null)=>{var o;if("string"==typeof n&&UTS.isInstanceOf(e,UTSJSONObject)){let i=e.toMap();if(i.has("title")&&i.has("content")){let e=new T({name:"".concat(n),title:"".concat(UTS.mapGet(i,"title")),content:"".concat(UTS.mapGet(i,"content")),icon:"".concat(null!==(o=UTS.mapGet(i,"icon"))&&void 0!==o?o:"")});t.set(n,e)}}})),t}));const c=o((()=>i("color",a.bgColor,s.value.front)));return o((()=>i("color",a.titleColor,s.value.title))),o((()=>i("color",a.iconColor,s.value.title))),o((()=>i("font",a.iconSize,e.configs.font.size(5)))),o((()=>i("color",a.contentColor,s.value.text))),o((()=>i("font",a.contentSize,e.configs.font.size(2)))),o((()=>i("font",a.titleSize,e.configs.font.size(3)))),o((()=>["left","bottom","top","center","right"].includes(a.position)?a.position:"top")),o((()=>{const t=new Map;return t.set("background",c.value),t.set("padding",r.value),t.set("margin-top","".concat(l.value,"px")),t.set("transition-duration",e.configs.aniTime.normal),t})),(t=null,e=null)=>null}})),[["__scopeId","data-v-d52ac55a"]]),M=t({__name:"temp",setup(t){e.colors;const o=e.utils;n(0);const i=new Map;function w(){o.requestSystemPermission(new h({permissions:["android.permission.CAMERA"],success:(t,e)=>{console.log("请求相机权限成功",t,e)},fail:(t,e)=>{console.log("请求相机权限失败",t,e)}}))}function T(){o.requestMediaPermission(new j({types:["image","audio"],success:(t,e)=>{console.log("请求相册权限成功",t,e)},fail:(t,e)=>{console.log("请求相册权限失败",t,e)}}))}function M(){o.previewImage(new d({urls:["https://q0.itc.cn/q_70/images03/20240309/a2b719342f7b478c8633c0ade4792e46.jpeg"]}))}function O(){o.showActionsheet(new m({actions:[new f({text:"选项1"}),new f({text:"选项2"}),new f({text:"选项3"}),new f({text:"选项4"})]}))}function U(){o.showToast(new UTSJSONObject({text:"轻提示",loading:!0}))}function A(){o.showModal(new UTSJSONObject({title:"Modal",content:"Hello World",buttonType:"float"}))}return i.set("android.permission.CAMERA",{title:"正在请求相机权限",content:"仅用于扫描二维码，不会将您的任何隐私数据上传云端"}),i.set("android.permission.READ_MEDIA_IMAGES",{title:"正在请求相册权限",content:"仅用于选择图片，不会将您的任何隐私数据上传云端",icon:"image-circle-fill"}),i.set("android.permission.READ_MEDIA_VIDEO",{title:"正在请求视频权限",content:"仅用于选择视频，不会将您的任何隐私数据上传云端"}),i.set("android.permission.READ_MEDIA_AUDIO",{title:"正在请求音频权限",content:"仅用于选择音频，不会将您的任何隐私数据上传云端",icon:"disc-line"}),new s({id:"tab1",text:"选项1"}),new s({id:"tab2",text:"选项2er1485rh148e5r"}),new s({id:"tab3",text:"选围观项3"}),new s({id:"tab4",text:"选项4"}),new s({id:"tab5",text:"选项5erge58g而我国"}),new s({id:"tab6",text:"选项额我给6"}),new s({id:"tab7",text:"选人个人各项7"}),new s({id:"tab8",text:"选项8"}),(t=null,e=null)=>{const n=_(a("sn-topbar"),g),o=_(a("sn-alert"),S),s=_(a("sn-button"),b),d=_(a("com-card"),x),m=_(a("sn-perm-listener"),C),f=_(a("sn-page"),y);return l(),r(f,null,{default:c((()=>[p(n,{title:"测试页",bgColor:"$front"}),p(o,{text:"本页面是开发时页面,仅作为开发用途，正式包不会打包此页面",icon:"notification-fill",type:"warning",style:{"margin-top":"10px"}}),p(d,null,{default:c((()=>[p(s,{text:"请求相机权限",onClick:w}),p(s,{text:"请求相册权限",onClick:T})])),_:1}),p(d,{title:"🎉 全局 API"},{default:c((()=>[p(s,{text:"全局操作菜单",onClick:O}),p(s,{class:"mt-10",text:"全局图片预览",onClick:M}),p(s,{class:"mt-10",text:"全局模态框",onClick:A}),p(s,{class:"mt-10",text:"全局轻提示",onClick:U})])),_:1}),p(m,{data:u(i)},null,8,["data"])])),_:1})}}});export{M as default};
