import{d as a,b as s,o as t,e,f as r,g as c,u as i,s as o}from"./index-C41ek1zM.js";import{_ as l}from"./sn-topbar.DEOjSarq.js";import{$ as p,r as n}from"./uni-app.es.DMEFtuWf.js";import{_ as d}from"./sn-avatar.BeuRHWEP.js";import{_ as u}from"./sn-row.4ZQqf_Dz.js";import{_ as g}from"./com-card.DTC2fNbY.js";import{_ as m}from"./sn-page.Djy77f-h.js";import{c as f}from"./sn-button.CpSyIQkh.js";const x=f(a({__name:"sn-avatar",setup(a){const f=p.colors;function x(a=null){o({title:"事件监听：点击事件",content:UTS.JSON.stringify(a),showCancel:!1})}function b(a=null){o({title:"事件监听：长按事件",content:UTS.JSON.stringify(a),showCancel:!1})}function h(a=null){o({title:"事件监听：双击事件",content:UTS.JSON.stringify(a),showCancel:!1})}return(a=null,o=null)=>{const p=n(s("sn-topbar"),l),v=n(s("sn-avatar"),d),j=n(s("sn-row"),u),_=n(s("com-card"),g),z=n(s("sn-page"),m);return t(),e(z,null,{default:r((()=>[c(p,{title:"Avatar 头像"}),c(_,{title:"基础用法",note:"头像展示"},{default:r((()=>[c(j,null,{default:r((()=>[c(v,{class:"avatar",src:"https://i03piccdn.sogoucdn.com/25c6ee8e954336a8"}),c(v,{class:"avatar",src:"https://img01.sogoucdn.com/app/a/100520093/8379901cc65ba509-45c21ceb904429fc-fffc7639a9a4d453515b56b6c1a3fc58.jpg"}),c(v,{class:"avatar",src:"http://img.wxcha.com/m00/bb/18/bc2167461f0ba311a992f3f00a45c58d.jpg"}),c(v,{class:"avatar",src:"http://5b0988e595225.cdn.sohucs.com/images/20191101/5f5afff53cff4ddfb6a98e4c09a67ea9.jpeg"})])),_:1})])),_:1}),c(_,{title:"文字头像",note:"无图片时使用文字代替（只会显示文字的首个字符）"},{default:r((()=>[c(j,null,{default:r((()=>[c(v,{class:"avatar",mode:"text",text:"张三"}),c(v,{class:"avatar",mode:"text",text:"李四"}),c(v,{class:"avatar",mode:"text",text:"王五"})])),_:1})])),_:1}),c(_,{title:"图标头像",note:"可以使用图标来实现部分情形的需求（如内置的加载失败样式）"},{default:r((()=>[c(j,null,{default:r((()=>[c(v,{class:"avatar",mode:"icon",icon:"star-fill"}),c(v,{class:"avatar",mode:"icon",icon:"heart-fill"})])),_:1})])),_:1}),c(_,{title:"颜色 【Text&Icon特色】",note:"类型为text或icon的头像组件可以设置颜色。\\n（type=“image”时此属性无效）"},{default:r((()=>[c(j,null,{default:r((()=>[c(v,{class:"avatar",mode:"text",text:"李四",textColor:i(f).primary,bgColor:i(f).primaryLight},null,8,["textColor","bgColor"]),c(v,{class:"avatar",mode:"icon",icon:"heart-fill",iconColor:"#fff",bgColor:i(f).warning},null,8,["bgColor"])])),_:1})])),_:1}),c(_,{title:"形状",note:"不同的形状适用于不同的场景"},{default:r((()=>[c(j,null,{default:r((()=>[c(v,{class:"avatar",shape:"square",src:"https://i03piccdn.sogoucdn.com/70e95b16d3488d9b"}),c(v,{class:"avatar",shape:"circle",src:"https://ww3.sinaimg.cn/mw690/007QvzfIly1ho2zt8iyznj30sg0sgneb.jpg"})])),_:1})])),_:1}),c(_,{title:"圆角 【Square特色】",note:"形状为square的头像组件可设置圆角边框样式。\\n（type=“circle”时此属性无效）"},{default:r((()=>[c(j,null,{default:r((()=>[c(v,{class:"avatar",shape:"square",borderRadius:"16px",src:"http://inews.gtimg.com/newsapp_bt/0/14745715096/1000"}),c(v,{class:"avatar",shape:"square",borderRadius:"16px 0 16px 0",src:"http://inews.gtimg.com/newsapp_bt/0/14373264708/1000"})])),_:1})])),_:1}),c(_,{title:"尺寸",note:"有时头像很大，比如个人主页；有时却很小，比如聊天列表"},{default:r((()=>[c(j,null,{default:r((()=>[c(v,{class:"avatar",shape:"square",size:"50px",src:"https://i04piccdn.sogoucdn.com/67dfe1e38c115dab",margin:"5px 20px 5px 5px"}),c(v,{class:"avatar",shape:"circle",size:"80px",src:"https://p3.itc.cn/q_70/images03/20210128/fcfa1c924d7946eba1363c00a097f370.jpeg"})])),_:1})])),_:1}),c(_,{title:"裁剪方式",note:"可选值及效果与官方的image相同"},{default:r((()=>[c(j,{wrap:""},{default:r((()=>[c(v,{class:"avatar",imageMode:"scaleToFill",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"aspectFit",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"aspectFill",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"widthFix",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"heightFix",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"widthFix",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"heightFix",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"top",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"bottom",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"center",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"left",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"right",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"top left",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"top right",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"bottom left",size:"60px","border-radius":"16px",src:"/static/scene.jpg"}),c(v,{class:"avatar",imageMode:"bottom right",size:"60px","border-radius":"16px",src:"/static/scene.jpg"})])),_:1})])),_:1}),c(_,{title:"查看大图",note:"单击头像查看大图"},{default:r((()=>[c(v,{enablePreview:"",shape:"circle",size:"60px",src:"https://mms2.baidu.com/it/u=79562893,3296674552&fm=253&app=120&f=JPEGw=800&h=800"})])),_:1}),c(_,{title:"加载失败",note:"图片加载失败"},{default:r((()=>[c(v,{shape:"circle",size:"40px",src:"https://it.does.not.exsit/the-picture.png"})])),_:1}),c(_,{title:"事件",note:"监听头像的点击、双击和长按事件"},{default:r((()=>[c(v,{shape:"circle",size:"40px",src:"https://nimg.ws.126.net/?url=http%3A%2F%2Fdingyue.ws.126.net%2F2022%2F1225%2F92e5a263j00rng4qi001bd000hs00h8p.jpg&thumbnail=660x2147483647&quality=80&type=jpg",onClick:x,onLongpress:b,onDbclick:h})])),_:1})])),_:1})}}}),[["__scopeId","data-v-8fd2924a"]]);export{x as default};