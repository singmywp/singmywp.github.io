import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
  title: "SinleUI",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  description: "一个简洁、轻巧的现代移动应用UI框架。",
  cleanUrls: true,
  markdown: {
    math: true,
  },
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "Demo", link: "/other/demo" },
      { text: "开始", link: "/get-started/introduction" },
      { text: "组件", link: "/components/index" },
      { text: "API", link: "/api/index" },
      { text: "核心库", link: "/libs/utils/index" },
      { text: "关于&特别鸣谢", link: "/other/about" },
    ],
    socialLinks: [
      {
        icon: "dcloud-ext",
        link: "https://ext.dcloud.net.cn/plugin?name=sinle-ui",
      },
      {
        icon: "github",
        link: "https://github.com/singmywp/singmywp.github.io",
      },
    ],
    logo: "/logo.png",
    siteTitle: "SinleUI",
    darkModeSwitchLabel: "暗黑模式",
    lightModeSwitchTitle: "切换到亮色模式",
    darkModeSwitchTitle: "切换到暗黑模式",
    outline: false,
    footer: {
      message: "使用 MIT 协议",
      copyright: "Copyright © 2023-present Singmy",
    },
    search: {
      provider: "local",
    },
    sidebar: {
      "/get-started/": [
        {
          text: "开始",
          items: [
            { text: "介绍", link: "/get-started/introduction" },
            { text: "安装", link: "/get-started/setup" },
            { text: "开始", link: "/get-started/get-started" },
            { text: "注意事项", link: "/get-started/notes" },
          ],
        },
      ],
      "/api/": [
        {
          text: "API",
          link: "/api/index",
        },
        {
          text: "配置",
          items: [
            { text: "全局配置", link: "/api/config/index" },
            { text: "初始化配置", link: "/api/config/init" },
          ],
        },
        {
          text: "类型",
          link: "/api/types/index",
          items: [
            { text: "组件类型", link: "/api/types/components" },
            { text: "API 类型", link: "/api/types/api" },
          ],
        },
      ],
      "/components/": [
        {
          text: "组件",
          link: "/components/index",
        },
        {
          text: "基础组件",
          items: [
            { text: "Button 按钮", link: "/components/sn-button" },
            { text: "Icon 图标", link: "/components/sn-icon" },
            { text: "Image 图片", link: "/components/sn-image" },
            { text: "Line 分割线", link: "/components/sn-line" },
            { text: "Link 链接", link: "/components/sn-link" },
            { text: "Text 文本", link: "/components/sn-text" },
            { text: "View 视图容器", link: "/components/sn-view" },
            { text: "Transition 过渡动画", link: "/components/sn-transition" },
          ],
        },
        {
          text: "表单组件",
          items: [
            { text: "Checkbox 复选框", link: "/components/sn-checkbox" },
            { text: "Form 表单", link: "/components/sn-form" },
            { text: "Input 输入框", link: "/components/sn-input" },
            { text: "Radio 单选框", link: "/components/sn-radio" },
            { text: "Rate 评分", link: "/components/sn-rate" },
            { text: "Select 选择框", link: "/components/sn-select" },
            { text: "Slider 滑动选择", link: "/components/sn-slider" },
            { text: "Stepper 步进器", link: "/components/sn-stepper" },
            { text: "Switch 开关", link: "/components/sn-switch" },
            { text: "Picker 选择器", link: "/components/sn-picker" },
            { text: "Picker View 选择器容器", link: "/components/sn-picker-view" },
            { text: "Textarea 文本域", link: "/components/sn-textarea" },
            {
              text: "Upload Media 媒体上传",
              link: "/components/sn-upload-media",
            },
          ],
        },
        {
          text: "展示组件",
          items: [
            { text: "Alert 警告信息", link: "/components/sn-alert" },
            { text: "Avatar 头像", link: "/components/sn-avatar" },
            { text: "Badge 徽标", link: "/components/sn-badge" },
            { text: "Card 卡片", link: "/components/sn-card" },
            { text: "Countdown 倒计时", link: "/components/sn-countdown" },
            { text: "Countto 数字滚动", link: "/components/sn-countto" },
            { text: "List 列表", link: "/components/sn-list" },
            { text: "Loading 加载", link: "/components/sn-loading" },
            {
              text: "Loading Page 加载页",
              link: "/components/sn-loading-page",
            },
            { text: "Longlist 长列表", link: "/components/sn-longlist" },
            { text: "Markdown 富文本", link: "/components/sn-markdown" },
            { text: "More 查看更多", link: "/components/sn-more" },
            { text: "Notice Bar 通知栏", link: "/components/sn-notice-bar" },
            { text: "Skeleton 骨架屏", link: "/components/sn-skeleton" },
            { text: "Tag 标签", link: "/components/sn-tag" },
            { text: "Timer 计时器", link: "/components/sn-timer" },
          ],
        },
        {
          text: "反馈组件",
          items: [
            { text: "Drawer 抽屉", link: "/components/sn-drawer" },
            { text: "Empty 缺省页", link: "/components/sn-empty" },
            { text: "Loadmore 加载更多", link: "/components/sn-loadmore" },
            { text: "Modal 模态框", link: "/components/sn-modal" },
            { text: "Overlay 遮罩层", link: "/components/sn-overlay" },
            { text: "Popup 弹出层", link: "/components/sn-popup" },
            { text: "Progress 进度条", link: "/components/sn-progress" },
            { text: "Refresher 下拉刷新", link: "/components/sn-refresher" },
            { text: "Result 结果页", link: "/components/sn-result" },
            { text: "Toast 轻提示", link: "/components/sn-toast" },
            { text: "Tooltip 弹出提示", link: "/components/sn-tooltip" },
          ],
        },
        {
          text: "布局组件",
          items: [
            { text: "Backtop 回到顶部", link: "/components/sn-backtop" },
            { text: "Col 垂直布局", link: "/components/sn-col" },
            { text: "Collapse 折叠面板", link: "/components/sn-collapse" },
            {
              text: "Float Board 浮动面板",
              link: "/components/sn-float-board",
            },
            {
              text: "Float Button 浮动按钮",
              link: "/components/sn-float-button",
            },
            { text: "Gap 占位间隔", link: "/components/sn-gap" },
            { text: "Grid 宫格布局", link: "/components/sn-grid" },
            { text: "Menu Item 菜单项", link: "/components/sn-menu-item" },
            { text: "Page 页面", link: "/components/sn-page" },
            { text: "Row 水平布局", link: "/components/sn-row" },
            { text: "Search 搜索框", link: "/components/sn-search" },
            { text: "Sidebar 侧边栏", link: "/components/sn-sidebar" },
            { text: "Subsection 分段器", link: "/components/sn-subsection" },
            { text: "Tabbar 底部导航栏", link: "/components/sn-tabbar" },
            { text: "Tabs 标签页", link: "/components/sn-tabs" },
            { text: "Topbar 导航栏", link: "/components/sn-topbar" },
            { text: "Waterfall 瀑布流", link: "/components/sn-waterfall" },
          ],
        },
        {
          text: "功能组件",
          items: [
            { text: "Scan 扫码", link: "/components/sn-scan" },
            { text: "Signature 签名", link: "/components/sn-signature" },
          ],
        },
        {
          text: "扩展组件（部分须额外下载）",
          link: "/components/ext-com",
          items: [
            { text: "Barcode 条形码", link: "/components/sn-e-barcode" },
            { text: "Gesture 手势", link: "/components/sn-e-gesture" },
            {
              text: "Scan Provider 扫码核心",
              link: "/components/sn-e-scan-provider",
            },
            { text: "Qrcode 二维码", link: "/components/sn-e-qrcode" },
            { text: "Svg 可缩放矢量图形", link: "/components/sn-e-svg" },
          ],
        },
      ],
      "/libs/": [
        {
          text: "Utils 工具库",
          link: "/libs/utils/index",
          items: [
            {
              text: "Basic 基础类",
              collapsed: true,
              items: [
                {
                  text: "生成随机组件ID",
                  link: "/libs/utils/basic#snu-randomcomid",
                },
                {
                  text: "节流",
                  link: "/libs/utils/basic#snu-throttle",
                },
                {
                  text: "防抖",
                  link: "/libs/utils/basic#snu-debounce",
                },
              ],
            },
            {
              text: "OS 系统类",
              collapsed: true,
              items: [{ text: "振动设备", link: "/libs/utils/os#snu-vibrate" }],
            },
            {
              text: "Object 对象类",
              collapsed: true,
              items: [
                {
                  text: "格式化数字",
                  link: "/libs/utils/object#snu-formatnumber",
                },
                {
                  text: "深拷贝（基础类型）",
                  link: "/libs/utils/object#snu-deepclone",
                },
                {
                  text: "数组重装（数组浅拷贝）",
                  link: "/libs/utils/object#snu-rearray",
                },
                {
                  text: "数组洗牌",
                  link: "/libs/utils/object#snu-shuffle",
                },
                {
                  text: "是否为Number类型",
                  link: "/libs/utils/object#snu-isnumber",
                },
                {
                  text: "设置元素Dataset",
                  link: "/libs/utils/object#snu-setdataset",
                },
                {
                  text: "获取元素Dataset",
                  link: "/libs/utils/object#snu-getdataset",
                },
              ],
            },
            {
              text: "Easing 缓动类",
              collapsed: true,
              items: [
                {
                  text: "正弦曲线入",
                  link: "/libs/utils/easing#snu-easeinsine",
                },
                {
                  text: "正弦曲线出",
                  link: "/libs/utils/easing#snu-easeoutsine",
                },
                {
                  text: "正弦曲线入出",
                  link: "/libs/utils/easing#snu-easeinoutsine",
                },
                {
                  text: "二次函数图象入",
                  link: "/libs/utils/easing#snu-easeinquad",
                },
                {
                  text: "二次函数图象出",
                  link: "/libs/utils/easing#snu-easeoutquad",
                },
                {
                  text: "二次函数图象入出",
                  link: "/libs/utils/easing#snu-easeinoutquad",
                },
                {
                  text: "三次函数图象入",
                  link: "/libs/utils/easing#snu-easeincubic",
                },
                {
                  text: "三次函数图象出",
                  link: "/libs/utils/easing#snu-easeoutcubic",
                },
                {
                  text: "三次函数图象入出",
                  link: "/libs/utils/easing#snu-easeinoutcubic",
                },
                {
                  text: "四次函数图象入",
                  link: "/libs/utils/easing#snu-easeinquart",
                },
                {
                  text: "四次函数图象出",
                  link: "/libs/utils/easing#snu-easeoutquart",
                },
                {
                  text: "四次函数图象入出",
                  link: "/libs/utils/easing#snu-easeinoutquart",
                },
                {
                  text: "五次函数图象入",
                  link: "/libs/utils/easing#snu-easeinquint",
                },
                {
                  text: "五次函数图象出",
                  link: "/libs/utils/easing#snu-easeoutquint",
                },
                {
                  text: "五次函数图象入出",
                  link: "/libs/utils/easing#snu-easeinoutquint",
                },
                { text: "椭圆入", link: "/libs/utils/easing#snu-easeincirc" },
                { text: "椭圆出", link: "/libs/utils/easing#snu-easeoutcirc" },
                {
                  text: "椭圆入出",
                  link: "/libs/utils/easing#snu-easeinoutcirc",
                },
                { text: "回退入", link: "/libs/utils/easing#snu-easeinback" },
                { text: "回退出", link: "/libs/utils/easing#snu-easeoutback" },
                {
                  text: "回退入出",
                  link: "/libs/utils/easing#snu-easeinoutback",
                },
                {
                  text: "弹性入",
                  link: "/libs/utils/easing#snu-easeinelastic",
                },
                {
                  text: "弹性出",
                  link: "/libs/utils/easing#snu-easeoutelastic",
                },
                {
                  text: "弹性入出",
                  link: "/libs/utils/easing#snu-easeinoutelastic",
                },
                { text: "弹跳入", link: "/libs/utils/easing#snu-easeinbounce" },
                {
                  text: "弹跳出",
                  link: "/libs/utils/easing#snu-easeoutbounce",
                },
                {
                  text: "弹跳入出",
                  link: "/libs/utils/easing#snu-easeinoutbounce",
                },
                { text: "指数入", link: "/libs/utils/easing#snu-easeinexpo" },
                { text: "指数出", link: "/libs/utils/easing#snu-easeoutexpo" },
                {
                  text: "指数入出",
                  link: "/libs/utils/easing#snu-easeinoutexpo",
                },
                { text: "线性", link: "/libs/utils/easing#snu-linear" },
              ],
            },
            {
              text: "Verify 校验类",
              collapsed: true,
              items: [
                {
                  text: "是否为日期",
                  link: "/libs/utils/verify#snu-isdate",
                },
                {
                  text: "是否为URL",
                  link: "/libs/utils/verify#snu-isurl",
                },
                {
                  text: "是否为数字",
                  link: "/libs/utils/verify#snu-isnumberstring",
                },
                {
                  text: "是否为字母",
                  link: "/libs/utils/verify#snu-isabc",
                },
                {
                  text: "是否为中文",
                  link: "/libs/utils/verify#snu-ischinese",
                },
                {
                  text: "是否为邮箱",
                  link: "/libs/utils/verify#snu-isemail",
                },
                {
                  text: "是否为手机号",
                  link: "/libs/utils/verify#snu-isphone",
                },
                {
                  text: "是否为座机号",
                  link: "/libs/utils/verify#snu-islandline",
                },
                {
                  text: "是否为QQ号",
                  link: "/libs/utils/verify#snu-isqqnumber",
                },
                {
                  text: "是否为IPv6地址",
                  link: "/libs/utils/verify#snu-isipv6",
                },
                {
                  text: "是否为IPv4地址",
                  link: "/libs/utils/verify#snu-isipv4",
                },
                {
                  text: "是否为第二代公民身份号码",
                  link: "/libs/utils/verify#snu-isidcard",
                },
                {
                  text: "是否为图片文件",
                  link: "/libs/utils/verify#snu-isimage",
                },
                {
                  text: "是否为视频文件",
                  link: "/libs/utils/verify#snu-isvideo",
                },
                {
                  text: "是否为车牌号码",
                  link: "/libs/utils/verify#snu-iscarnumber",
                },
                {
                  text: "是否为整数",
                  link: "/libs/utils/verify#snu-isinteger",
                },
                {
                  text: "是否为小数",
                  link: "/libs/utils/verify#snu-isfloat",
                },
              ],
            },
            {
              text: "Text 文本类",
              collapsed: true,
              items: [
                {
                  text: "是否为空文本",
                  link: "/libs/utils/text#snu-isempty",
                },
                {
                  text: "计算文本字数",
                  link: "/libs/utils/text#snu-len",
                },
                {
                  text: "Kebab命名法转小驼峰命名法",
                  link: "/libs/utils/text#snu-kebabcasetocamelcase",
                },
                {
                  text: "小驼峰命名法转Kebab命名法",
                  link: "/libs/utils/text#snu-camelcasetokebabcase",
                },
                {
                  text: "数字转大写金额",
                  link: "/libs/utils/text#snu-numtoupper",
                },
                {
                  text: "姓名脱敏",
                  link: "/libs/utils/text#snu-encryptname",
                },
                {
                  text: "电话号码脱敏",
                  link: "/libs/utils/text#snu-encryptphone",
                },
                {
                  text: "身份证号脱敏",
                  link: "/libs/utils/text#snu-encryptidcard",
                },
                {
                  text: "邮箱脱敏",
                  link: "/libs/utils/text#snu-encryptemail",
                },
                {
                  text: "银行卡号脱敏",
                  link: "/libs/utils/text#snu-encryptbankcard",
                },
                {
                  text: "分割数字",
                  link: "/libs/utils/text#snu-separatenumber",
                },
              ],
            },
            {
              text: "Platform 平台类",
              collapsed: true,
              items: [
                {
                  text: "打开链接",
                  link: "/libs/utils/platform#snu-openlink",
                },
                {
                  text: "拨打电话",
                  link: "/libs/utils/platform#snu-makephonecall",
                },
                {
                  text: "写入剪切板",
                  link: "/libs/utils/platform#snu-setclipboarddata",
                },
                {
                  text: "从剪切板读取",
                  link: "/libs/utils/platform#async-snu-getclipboarddata",
                },
                {
                  text: "显示提示框",
                  link: "/libs/utils/platform#snu-showtoast",
                },
                {
                  text: "使用内置全屏Webview打开网址",
                  link: "/libs/utils/platform#snu-viewurlbywebview",
                },
                {
                  text: "获取平台主题",
                  link: "/libs/utils/platform#snu-getostheme",
                },
              ],
            },
            {
              text: "UI 界面类",
              collapsed: true,
              items: [
                {
                  text: "获取像素值",
                  link: "/libs/utils/ui#snu-getpx",
                },
                {
                  text: "添加像素单位",
                  link: "/libs/utils/ui#snu-addpx",
                },
                {
                  text: "添加单位",
                  link: "/libs/utils/ui#snu-addunit",
                },
                {
                  text: "获取内圆角半径",
                  link: "/libs/utils/ui#snu-getinnerradius",
                },
                {
                  text: "查找父系组件",
                  link: "/libs/utils/ui#snu-findparent",
                },
                {
                  text: "查找兄弟组件",
                  link: "/libs/utils/ui#snu-findbrother",
                },
              ],
            },
            {
              text: "Permission 权限类",
              collapsed: true,
              items: [
                {
                  text: "是否具备指定权限",
                  link: "/libs/utils/permission#snu-checksystempermissiongranted",
                },
                {
                  text: "获取未授权的系统权限",
                  link: "/libs/utils/permission#snu-getsystempermissiondenied",
                },
                {
                  text: "请求系统权限",
                  link: "/libs/utils/permission#snu-requestsystempermission",
                },
                {
                  text: "跳转到系统权限设置页面",
                  link: "/libs/utils/permission#snu-gotosystempermissionactivity",
                },
              ],
            },
            {
              text: "Random 随机类",
              collapsed: true,
              items: [
                {
                  text: "生成随机整数",
                  link: "/libs/utils/random#snu-randint",
                },
                {
                  text: "生成指定位数的随机整数",
                  link: "/libs/utils/random#snu-randomnumber",
                },
                {
                  text: "生成UUID",
                  link: "/libs/utils/random#snu-uuid",
                },
              ],
            },
            {
              text: "Sort 排序类",
              collapsed: true,
              items: [
                {
                  text: "冒泡排序",
                  link: "/libs/utils/sort#snu-bubblesort",
                },
                {
                  text: "选择排序",
                  link: "/libs/utils/sort#snu-selectionsort",
                },
                {
                  text: "插入排序",
                  link: "/libs/utils/sort#snu-insertionsort",
                },
                {
                  text: "快速排序",
                  link: "/libs/utils/sort#snu-quicksort",
                },
                {
                  text: "归并排序",
                  link: "/libs/utils/sort#snu-mergesort",
                },
                {
                  text: "堆排序",
                  link: "/libs/utils/sort#snu-heapsort",
                },
                {
                  text: "希尔排序",
                  link: "/libs/utils/sort#snu-shellsort",
                },
                {
                  text: "桶排序",
                  link: "/libs/utils/sort#snu-bucketsort",
                },
              ],
            },
          ],
        },
        {
          text: "Color 颜色库",
          link: "/libs/color/index",
          items: [
            {
              text: "方法",
              collapsed: true,
              items: [
                {
                  text: "创建TinyColor实例",
                  link: "/libs/color/methods#colorlib-tinycolor",
                },
                {
                  text: "计算APCA",
                  link: "/libs/color/methods#colorlib-calcapca",
                },
                {
                  text: "计算平均颜色",
                  link: "/libs/color/methods#colorlib-mean",
                },
                {
                  text: "生成随机颜色",
                  link: "/libs/color/methods#colorlib-random",
                },
              ],
            },
            {
              text: "TinyColor 对象",
              link: "/libs/color/TinyColor",
            },
            {
              text: "类型",
              link: "/libs/color/types",
            },
          ],
        },
        {
          text: "Date 日期库",
          link: "/libs/date/index",
          items: [
            {
              text: "方法",
              collapsed: true,
              items: [
                {
                  text: "创建Dayuts实例",
                  link: "/libs/date/methods#datelib-dayuts",
                },
              ],
            },
            {
              text: "Dayuts 对象",
              link: "/libs/date/Dayuts",
            },
            {
              text: "类型",
              link: "/libs/date/types",
            },
          ],
        },
        {
          text: "Store 状态管理",
          link: "/libs/store/index",
          items: [
            {
              text: "过期策略",
              link: "/libs/store/expire",
            },
            {
              text: "方法",
              collapsed: true,
              items: [
                { text: "获取数据", link: "/libs/store/methods#store-get" },
                { text: "存储数据", link: "/libs/store/methods#store-set" },
                { text: "删除数据", link: "/libs/store/methods#store-delete" },
              ],
            },
          ],
        },
      ],
    },
  },
});
