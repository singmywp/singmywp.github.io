import{_ as e}from"./sn-topbar.CX0rMkKy.js";import{d as t,z as l,r as a,c as o,l as s,A as n,b as i,e as r,f as u,p as c,u as d,q as p,x as m,m as f,k as y,o as g,g as v,B as b,t as x,C as _}from"./index-DNTc1GxZ.js";import{$ as S,r as C}from"./uni-app.es.D9ZkitmT.js";import{_ as h}from"./sn-alert.BVqfDC3L.js";import{_ as T}from"./com-card.22LSjaaf.js";import{a as j,b as z,c as w}from"./sn-button.BaZjRh9m.js";import{_ as M}from"./sn-page.CEVOSUw5.js";const k=w(t(Object.assign({name:"sn-collapse-item"},{__name:"sn-collapse-item",props:{title:{type:String,default:""},icon:{type:String,default:""},open:{type:Boolean,default:!1},border:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},customStyle:{type:Object,default:{}}},setup(e,t){var _=t.expose;const h=S.colors,T=S.utils,w=m(),M=e,k=l("aniTime",parseFloat(S.configs.aniTime.normal)),O=l("bgColor",h.value.front),$=l("titleSize",S.configs.font.size(3)),B=l("titleColor",h.value.title),A=l("activeTitleColor",h.value.primary),F=l("customTitleStyle",{}),H=l("customHolderStyle",{}),I=T.randomComId(),E=a(!1),q=a(!1),D=a(null),N=a(0),P=o((()=>w.proxy.$parent)),R=o((()=>{let e=new Map;return e.set("transitionProperty","background-color, border"),q.value&&e.set("border-bottom","0.5px solid ".concat(h.value.line)),e.set("background",M.disabled?h.value.disabled:O),e.set("transition-duration","".concat(k,"ms")),e})),U=o((()=>{let e=new Map;return e.set("padding","10px 0"),e.set("flex","1"),e.set("transition-duration","".concat(k,"ms")),e})),J=o((()=>{let e=new Map;return e.set("padding","15px 0"),e.set("transition-duration","".concat(k,"ms")),e})),G=o((()=>{let e=new Map;return e.set("padding","15px 0"),e.set("transform","rotate(".concat(E.value?90:0,"deg)")),e.set("transition-duration","".concat(k,"ms")),e})),K=o((()=>{let e=new Map;return e.set("height",E.value?"".concat(N.value,"px"):"0px"),e.set("transition-duration","".concat(k,"ms")),e}));function L(){var e;let t=E.value;M.disabled||(null===(e=P.value)||void 0===e||e.$callMethod("closeAll"),E.value=!t)}function Q(){f((()=>{!function(){if(M.border){let e=P.value.$callMethod("getChildren");e.map(((t,l)=>{T.getDataset(t,"sn-id")==I&&l!=e.length-1&&(q.value=!0)}))}}(),N.value=D.value.getBoundingClientRect().height}))}return _({close:function(){E.value=!1}}),s((()=>{var e;E.value=M.open,null===(e=P.value)||void 0===e||e.$callMethod("register",w.proxy),Q()})),n((()=>{Q()})),(t=null,l=null)=>{const a=C(i("sn-icon"),j),o=C(i("sn-text"),z),s=y;return g(),r(s,{class:c(["sn-collapse-item",new UTSJSONObject({disabled:e.disabled})]),"data-sn-type":"sn-collapse-item","data-sn-id":d(I),onClick:L,style:p([d(R),e.customStyle])},{default:u((()=>[v(s,{class:"sn-collapse-item-header"},{default:u((()=>[v(a,{class:"sn-collapse-item-prefix",name:e.icon,size:d($),color:e.disabled?d(h).disabledText:d(E)?d(A):d(B),customStyle:d(F),style:p([d(J)])},null,8,["name","size","color","customStyle","style"]),v(o,{text:e.title,lines:1,size:d($),color:e.disabled?d(h).disabledText:d(E)?d(A):d(B),customStyle:d(F),style:p([d(U)])},null,8,["text","size","color","customStyle","style"]),v(a,{class:"sn-collapse-item-icon-suffix",name:"arrow-right-s-line",size:d($),color:e.disabled?d(h).disabledText:d(E)?d(A):d(B),customStyle:d(F),style:p([d(G)])},null,8,["size","color","customStyle","style"])])),_:1}),v(s,{class:"sn-collapse-item-wrap",onClick:l[1]||(l[1]=b((()=>{}),["stop"])),style:p([d(K),d(H)])},{default:u((()=>[v(s,{class:"sn-collapse-item-holder",ref_key:"holderEle",ref:D,onClick:l[0]||(l[0]=b((()=>{}),["stop"])),style:p([d(H)])},{default:u((()=>[x(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["style"])])),_:3},8,["data-sn-id","class","style"])}}})),[["__scopeId","data-v-55a50a58"]]),O=w(t(Object.assign({name:"sn-collapse-group"},{__name:"sn-collapse-group",props:{accordion:{type:Boolean,default:!1},aniTime:{type:Number,default:parseFloat(S.configs.aniTime.normal)},bgColor:{type:String,default:""},titleSize:{type:String,default:""},titleColor:{type:String,default:""},activeTitleColor:{type:String,default:""},customTitleStyle:{type:Object,default:{}},customHolderStyle:{type:Object,default:{}},customStyle:{type:Object,default:{}}},setup(e,t){var l=t.expose;const s=S.colors,n=S.utils,i=e,c=a([]),m=a(null),f=o((()=>i.aniTime==parseFloat(S.configs.aniTime.normal)?parseFloat(S.configs.aniTime.normal):i.aniTime)),v=o((()=>""==i.bgColor?s.value.front:i.bgColor)),b=o((()=>""==i.titleSize?S.configs.font.size(3):i.titleSize)),C=o((()=>""==i.titleColor?s.value.title:i.titleColor)),h=o((()=>""==i.titleColor?s.value.primary:i.titleColor)),T=o((()=>{let e=new Map;return e.set("border-radius",S.configs.radius.normal),e.set("background",v.value),e.set("transition-duration",S.configs.aniTime.normal),e}));return _("aniTime",f.value),_("bgColor",v.value),_("titleSize",b.value),_("titleColor",C.value),_("activeTitleColor",h.value),_("customTitleStyle",i.customTitleStyle),_("customHolderStyle",i.customHolderStyle),l({register:function(e){c.value.push(e)},closeAll:function(){i.accordion&&c.value.length>0&&c.value.forEach((e=>{e.$callMethod("close")}))},getChildren:function(){let e=[];return n.reArray(m.value.children).map((t=>{"sn-collapse-item"==n.getDataset(t,"sn-type")&&e.push(t)})),e}}),(t=null,l=null)=>{const a=y;return g(),r(a,{class:"sn-collapse-group",ref_key:"groupEle",ref:m,style:p([d(T),e.customStyle])},{default:u((()=>[x(t.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}})),[["__scopeId","data-v-7363e71a"]]);const $=w({},[["render",function(t,l){const a=C(i("sn-topbar"),e),o=C(i("sn-alert"),h),s=C(i("com-card"),T),n=C(i("sn-text"),z),c=C(i("sn-collapse-item"),k),d=C(i("sn-collapse-group"),O),p=C(i("sn-page"),M);return g(),r(p,null,{default:u((()=>[v(a,{title:"Collapse 折叠面板"}),v(o,{type:"warning",icon:"error-warning-fill",text:"sn-collapse-item 必须为 sn-collapse-group 的直接子节点。"}),v(s,{title:"基础用法",note:"通过折叠面板收纳内容区域。"}),v(d,null,{default:u((()=>[v(c,{title:"地形多种多样"},{default:u((()=>[v(n,{text:"　　在中国辽阔的大地上，有雄伟的高原、起伏的山岭、广阔的平原、低缓的丘陵，还有四周群山环抱、中间低平的大小盆地。陆地上的5种基本地形类型，中国均有分布，这为中国工农业的发展提供了多种多样的条件。"})])),_:1}),v(c,{title:"山区面积广大"},{default:u((()=>[v(n,{text:"　　通常人们把山地、丘陵和比较崎岖的高原称为山区。中国山区面积占全国总面积的2/3，这是中国地形的又一显著特征。山区面积广大，给交通运输和农业发展带来一定困难，但山区可提供林产、矿产、水能和旅游资源，为改变山区面貌、发展山区经济提供了资源保证。"})])),_:1}),v(c,{title:"地势西高东低"},{default:u((()=>[v(n,{text:"　　呈阶梯状分布地势是地表高低起伏的总趋势。中国地势西高东低，大致呈阶梯状分布。"})])),_:1})])),_:1}),v(s,{title:"手风琴模式",note:"只允许打开一个子项。"}),v(d,{accordion:""},{default:u((()=>[v(c,{title:"量子计算机核心部件在安徽实现突破"},{default:u((()=>[v(n,{text:"　　记者从安徽省量子计算工程研究中心获悉：中国第三代自主超导量子计算机“本源悟空”核心部件——高密度微波互连模组在皖完成重大突破，并实现国产化。\n\n　　据介绍，量子芯片可以被比作“量子计算大脑”，需要在极低温环境中运行，高密度微波互连模组则如同“神经网络”，该模组中有一根至关重要的“线”——极低温特种高频同轴线缆。有了这根线，高密度微波互连模组既能准确传输信号，又能隔绝热量，为“量子计算大脑”与外部设备之间的量子信息传输建立起高速、稳定的通道。\n\n　　为了解决这根“线”的关键技术难题，本源量子计算科技（合肥）股份有限公司联合中国电子科技集团第40研究所申报安徽省揭榜挂帅项目，日前顺利完成适用于极低温环境的高密度微波互连模组技术攻关。这款国产高密度微波互连模组可为超100位量子芯片提供微波信号传输通道，能够在极低热泄漏环境下实现微波信号的跨温区稳定传输。"})])),_:1}),v(c,{title:"构建高水平社会主义市场经济体制"},{default:u((()=>[v(n,{text:"　　市场经济是人类文明发展的共同成果。作为市场经济的原始形态，商品生产和商品交换在各国早已有之。资本主义产生后，简单商品经济逐步发展成为近代市场经济，极大促进了生产力发展。历史和现实表明，市场经济是资源配置最有效率的体制，也是发展生产力最有效的手段。\n\n　　社会主义和市场经济不是对立的。改革开放以来，我国实现了从高度集中的计划经济体制到充满活力的社会主义市场经济体制的历史性转变。"})])),_:1}),v(c,{title:"壮大数字经济 拓展就业空间"},{default:u((()=>[v(n,{text:"　　在深圳市职业技能培训指导中心，围绕深圳市“20+8”战略性产业集群而组织开展的新职业、新工种、新技术示范性培训班已有400余个。该中心培训部部长俞益飞介绍，为更好地满足产业所需，培训课程开发由行业协会、龙头企业主导，实时更新。\n\n　　广东先行先试推动数字经济领域“一试两证”，并逐步建立职业技能等级与企业数字技能认证证书互认机制。企业组织一次考试，就可以同时核发人社部门认可的技能等级证书和企业认证证书，让职业技能标准评价体系更加适应产业发展需求。"})])),_:1})])),_:1}),v(s,{title:"动画时长",note:"可以自定义动画时长，比如当你对性能有要求时，可以设置其为 0。"}),v(d,{aniTime:0},{default:u((()=>[v(c,{title:"中国"},{default:u((()=>[v(n,{text:"　　中华人民共和国（the People's Republic of China），简称“中国”，成立于1949年10月1日，位于亚洲东部，太平洋西岸，是工人阶级领导的、以工农联盟为基础的人民民主专政的社会主义国家，以五星红旗为国旗、《义勇军进行曲》为国歌，国徽中间是五星照耀下的天安门，周围是谷穗和齿轮，通用语言文字是普通话和规范汉字，首都北京，是一个以汉族为主体、56个民族共同组成的统一的多民族国家。"})])),_:1}),v(c,{title:"美国"},{default:u((()=>[v(n,{text:"　　美利坚合众国（The United States of America），简称美国，首都华盛顿。位于北美洲中部，北与加拿大接壤，南靠墨西哥湾，西临太平洋，东濒大西洋。大部分地区属大陆性气候，南部属亚热带气候，地形总体西高东低，自然资源丰富，矿产资源总探明储量居世界首位。总面积937万平方千米，海岸线长22680千米，美国共分为50个州和1个特区（哥伦比亚特区），有3143个县。截至2023年2月，美国总人口约3.33亿，非拉美裔白人占57.8%，居民大多信奉基督教及天主教，通用英语。"})])),_:1}),v(c,{title:"俄罗斯"},{default:u((()=>[v(n,{text:"　　俄罗斯联邦（俄语：Российская Федерация），由85个平等的联邦主体组成。亦称俄罗斯，首都莫斯科。国土横跨欧亚大陆，总面积1709.82万平方千米，与14个国家接壤。国界线长60933千米，其中海岸线长达38807千米、陆界长达14509千米。截至2023年4月，俄罗斯总人口约为1.46亿人。共有194个民族，以俄罗斯族为主。大多信奉东正教，官方语言为俄语。"})])),_:1})])),_:1}),v(s,{title:"下划线 & 禁用",note:"允许自由控制各项的下划线及禁用状态。"}),v(d,null,{default:u((()=>[v(c,{title:"字节跳动",border:!1},{default:u((()=>[v(n,{text:"　　北京抖音信息服务有限公司，成立于2012年3月9日，2021年全年的营业收入约为580亿美元，地址位于北京市海淀区北三环西路甲23号院1号楼2层222。公司以建设“全球创作与交流平台”为愿景。字节跳动的全球化布局始于2015年，“技术出海”是字节跳动全球化发展的核心战略，其旗下产品有今日头条、西瓜视频、抖音、头条百科、皮皮虾、懂车帝、悟空问答等。"})])),_:1}),v(c,{title:"百度"},{default:u((()=>[v(n,{text:"　　百度（Baidu）是拥有强大互联网基础的领先AI公司。百度愿景是：成为最懂用户，并能帮助人们成长的全球顶级高科技公司。"})])),_:1}),v(c,{title:"阿里巴巴",disabled:""},{default:u((()=>[v(n,{text:"　　阿里巴巴集团控股有限公司（简称：阿里巴巴集团），2024财年收入9411.68亿元，同比增长8%。是以曾担任英语教师的马云为首的18人于1999年在浙江省杭州市创立的公司。"})])),_:1}),v(c,{title:"腾讯"},{default:u((()=>[v(n,{text:"　　腾讯，全称深圳市腾讯计算机系统有限公司，1998年11月由马化腾、张志东、许晨晔、陈一丹、曾李青五位创始人共同创立，2023年总收入6090.15亿元。"})])),_:1})])),_:1})])),_:1})}]]);export{$ as default};
