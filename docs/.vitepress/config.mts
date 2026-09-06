import { defineConfig } from "vitepress";
import { typeFieldsPlugin } from "./markdown/type-fields";
import { provide } from "vue";

const sortItems = <T extends { text: string; link?: string }>(items: T[]): T[] =>
	items.sort((a, b) => {
		const keyA = (a.link ?? a.text).replace(/^.*\//, "")
		const keyB = (b.link ?? b.text).replace(/^.*\//, "")
		return keyA.localeCompare(keyB, "en")
	})

export default defineConfig({
  base: "/",
  title: "SinleUI",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  description: "一个简洁、轻巧的现代移动应用UI框架。",
  cleanUrls: true,
  markdown: {
    math: true,
    config: (md) => {
      typeFieldsPlugin(md)
    },
  },
  locales: {
    root: {
      label: "中文(简体)",
      lang: "zh",
    },
  },
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "Demo", link: "/other/demo" },
      { text: "开始", link: "/get-started/introduction" },
      { text: "组件", link: "/components/index" },
      { text: "API", link: "/api/index" },
      { text: "核心库", link: "/libs/utils/index" },
      { text: "版本差异", link: "/differences/changelog" },
      { text: "关于&特别鸣谢", link: "/other/about" },
      { text: "更新日志", link: "/other/changelog" },
    ],
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
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
    sidebar: {
      "/get-started/": [
        {
          "text": "开始",
          "items": [
            {
              "text": "介绍",
              "link": "/get-started/introduction"
            },
            {
              "text": "安装",
              "link": "/get-started/setup"
            },
            {
              "text": "开始",
              "link": "/get-started/get-started"
            },
            {
              "text": "注意事项",
              "link": "/get-started/notes"
            }
          ]
        }
      ],
      "/differences/": [
        {
          "text": "2.0 迁移指南",
          "link": "/differences/changelog",
          "items": [
            {
              "text": "2.0 更新日志",
              "link": "/differences/changelog"
            },
            {
              "text": "API 差异总览",
              "link": "/differences/api/index"
            },
            {
              "text": "配置体系差异",
              "link": "/differences/api/config"
            },
            {
              "text": "类型体系差异",
              "link": "/differences/api/types"
            },
            {
              "text": "错误与日志差异",
              "link": "/differences/api/error"
            },
            {
              "text": "组件差异索引",
              "link": "/differences/components/index"
            },
            {
              "text": "Utils 工具库差异",
              "link": "/differences/libs/utils"
            },
            {
              "text": "Color 颜色库差异",
              "link": "/differences/libs/color"
            },
            {
              "text": "Date 日期库差异",
              "link": "/differences/libs/date"
            },
            {
              "text": "Store 状态管理差异",
              "link": "/differences/libs/store"
            }
          ]
        }
      ],
      "/api/": [
        {
          "text": "API",
          "link": "/api/index"
        },
        {
          "text": "框架设计",
          "link": "/api/framework"
        },

        {
          "text": "钩子",
          "link": "/api/hooks/index",
          "items": [
            { "text": "useTheme", "link": "/api/hooks/use-theme" },
            { "text": "useStyle", "link": "/api/hooks/use-style" },
            { "text": "useFactors", "link": "/api/hooks/use-factors" },
            { "text": "useGrayMode", "link": "/api/hooks/use-gray-mode" },
            { "text": "useHover", "link": "/api/hooks/use-hover" },
            { "text": "useResolve", "link": "/api/hooks/use-resolve" },
            { "text": "useExternalStyle", "link": "/api/hooks/use-external-style" },
            { "text": "useBacktop", "link": "/api/hooks/use-backtop" }
          ]
        },
        {
          "text": "类型",
          "link": "/api/types/index",
          "items": [
            {
              "text": "API 类型",
              "link": "/api/types/api"
            },
            {
              "text": "组件类型",
              "link": "/api/types/component"
            }
          ]
        },
        {
          "text": "错误和日志",
          "link": "/api/error/error",
          "items": [
            {
              "text": "错误处理机制",
              "link": "/api/error/error"
            },
            {
              "text": "日志管理机制",
              "link": "/api/error/logger"
            },
            {
              "text": "错误码对照表",
              "link": "/api/error/standard"
            }
          ]
        }
      ],
      "/components/": [
        {
          "text": "组件",
          "link": "/components/index"
        },
        {
          "text": "基础组件",
          items: sortItems([
            {
              "text": "Button 按钮",
              "link": "/components/sn-button"
            },
            {
              "text": "Icon 图标",
              "link": "/components/sn-icon"
            },
            {
              "text": "Image 图片",
              "link": "/components/sn-image"
            },
            {
              "text": "Line 分割线",
              "link": "/components/sn-line"
            },
            {
              "text": "Link 链接",
              "link": "/components/sn-link"
            },
            {
              "text": "Text 文本",
              "link": "/components/sn-text"
            },
            {
              "text": "View 视图容器",
              "link": "/components/sn-view"
            },
            {
              "text": "Cell 单元格",
              "link": "/components/sn-cell"
            },
            {
              "text": "HighlightText 高亮文本",
              "link": "/components/sn-highlight-text"
            },
            {
              "text": "Ellipsis 文本省略",
              "link": "/components/sn-ellipsis"
            }
          ])
        },
        {
          "text": "表单组件",
          items: sortItems([
            {
              "text": "Checkbox 复选",
              "link": "/components/sn-checkbox"
            },
            {
              "text": "Radio 单选",
              "link": "/components/sn-radio"
            },
            {
              "text": "Label Checkbox 标签多选",
              "link": "/components/sn-label-checkbox"
            },
            {
              "text": "Label Radio 标签单选",
              "link": "/components/sn-label-radio"
            },
            {
              "text": "Input 输入框",
              "link": "/components/sn-input"
            },
            {
              "text": "InputField 标签输入框",
              "link": "/components/sn-input-field"
            },
            {
              "text": "Textarea 文本域",
              "link": "/components/sn-textarea"
            },
            {
              "text": "TextareaField 标签文本域",
              "link": "/components/sn-textarea-field"
            },
            {
              "text": "Mention 提及输入框",
              "link": "/components/sn-mention"
            },
            {
              "text": "CodeInput 验证码输入框",
              "link": "/components/sn-code-input"
            },
            {
              "text": "Stepper 步进器",
              "link": "/components/sn-stepper"
            },
            {
              "text": "Switch 开关",
              "link": "/components/sn-switch"
            },
            {
              "text": "Slider 滑动选择",
              "link": "/components/sn-slider"
            },
            {
              "text": "SliderDouble 双向滑动选择",
              "link": "/components/sn-slider-double"
            },
            {
              "text": "ArcSlider 环形滑块",
              "link": "/components/sn-arc-slider"
            },
            {
              "text": "Rate 评分",
              "link": "/components/sn-rate"
            },
            {
              "text": "Select 选择框",
              "link": "/components/sn-select"
            },
            {
              "text": "Picker 选择器",
              "link": "/components/sn-picker"
            },
            {
              "text": "Cascader 级联选择器",
              "link": "/components/sn-cascader"
            },
            {
              "text": "RegionPicker 地区选择器",
              "link": "/components/sn-region-picker"
            },
            {
              "text": "ColorPicker 颜色选择器",
              "link": "/components/sn-color-picker"
            },
            {
              "text": "Tree 树形选择",
              "link": "/components/sn-tree"
            },
            {
              "text": "DatetimePicker 日期时间选择器",
              "link": "/components/sn-datetime-picker"
            },
            {
              "text": "Form 表单",
              "link": "/components/sn-form"
            },
            {
              "text": "FormField 表单项",
              "link": "/components/sn-form-field"
            },
            {
              "text": "Agreement 协议",
              "link": "/components/sn-agreement"
            },
            {
              "text": "SlideCaptcha 滑块验证",
              "link": "/components/sn-slide-captcha"
            },
            {
              "text": "Keyboard 自定义键盘",
              "link": "/components/sn-keyboard"
            },
            {
              "text": "UploadMedia 媒体上传",
              "link": "/components/sn-upload-media"
            }
          ])
        },
        {
          "text": "展示组件",
          items: sortItems([
            {
              "text": "Alert 警告信息",
              "link": "/components/sn-alert"
            },
            {
              "text": "Badge 徽标",
              "link": "/components/sn-badge"
            },
            {
              "text": "Tag 标签",
              "link": "/components/sn-tag"
            },
            {
              "text": "Card 卡片",
              "link": "/components/sn-card"
            },
            {
              "text": "Avatar 头像",
              "link": "/components/sn-avatar"
            },
            {
              "text": "Avatar Group 头像组",
              "link": "/components/sn-avatar-group"
            },
            {
              "text": "Album 相册",
              "link": "/components/sn-album"
            },
            {
              "text": "Amount 金额",
              "link": "/components/sn-amount"
            },
            {
              "text": "Countdown 倒计时",
              "link": "/components/sn-countdown"
            },
            {
              "text": "Countto 数字滚动",
              "link": "/components/sn-countto"
            },
            {
              "text": "Dateformat 日期格式化",
              "link": "/components/sn-dateformat"
            },
            {
              "text": "Timer 计时器",
              "link": "/components/sn-timer"
            },
            {
              "text": "Loading 加载",
              "link": "/components/sn-loading"
            },
            {
              "text": "LoadingPage 加载页",
              "link": "/components/sn-loading-page"
            },
            {
              "text": "Skeleton 骨架屏",
              "link": "/components/sn-skeleton"
            },
            {
              "text": "NoticeBar 通知栏",
              "link": "/components/sn-notice-bar"
            },
            {
              "text": "PostCard 动态卡片",
              "link": "/components/sn-post-card"
            },
            {
              "text": "Watermark 水印",
              "link": "/components/sn-watermark"
            },
            {
              "text": "Progress 进度条",
              "link": "/components/sn-progress"
            },
            {
              "text": "ArcProgress 环形进度",
              "link": "/components/sn-arc-progress"
            },
            {
              "text": "Barcode 一维码",
              "link": "/components/sn-barcode"
            },
            {
              "text": "Qrcode 二维码",
              "link": "/components/sn-qrcode"
            },
            {
              "text": "More 查看更多",
              "link": "/components/sn-more"
            },
            {
              "text": "Table 表格",
              "link": "/components/sn-table"
            }
          ])
        },
        {
          "text": "反馈组件",
          items: sortItems([
            {
              "text": "Actionsheet 操作菜单",
              "link": "/components/sn-actionsheet"
            },
            {
              "text": "Modal 模态框",
              "link": "/components/sn-modal"
            },
            {
              "text": "Toast 轻提示",
              "link": "/components/sn-toast"
            },
            {
              "text": "Drawer 抽屉",
              "link": "/components/sn-drawer"
            },
            {
              "text": "DrawerList 抽屉长列表",
              "link": "/components/sn-drawer-list"
            },
            {
              "text": "Message 消息条",
              "link": "/components/sn-message"
            },
            {
              "text": "Notification 通知",
              "link": "/components/sn-notification"
            },
            {
              "text": "Popup 弹出层",
              "link": "/components/sn-popup"
            },
            {
              "text": "Popover 定位弹出层",
              "link": "/components/sn-popover"
            },
            {
              "text": "Overlay 遮罩层",
              "link": "/components/sn-overlay"
            },
            {
              "text": "Tooltip 提示框",
              "link": "/components/sn-tooltip"
            },
            {
              "text": "Empty 缺省页",
              "link": "/components/sn-empty"
            },
            {
              "text": "Result 结果页",
              "link": "/components/sn-result"
            },
            {
              "text": "Loadmore 加载更多",
              "link": "/components/sn-loadmore"
            },
            {
              "text": "Refresher 下拉刷新",
              "link": "/components/sn-refresher"
            }
          ])
        },
        {
          "text": "布局组件",
          items: sortItems([
            {
              "text": "Page 页面",
              "link": "/components/sn-page"
            },
            {
              "text": "Backtop 回到顶部",
              "link": "/components/sn-backtop"
            },
            {
              "text": "Topbar 导航栏",
              "link": "/components/sn-topbar"
            },
            {
              "text": "Tabbar 底部导航栏",
              "link": "/components/sn-tabbar"
            },
            {
              "text": "Tabs 标签页",
              "link": "/components/sn-tabs"
            },
            {
              "text": "Sidebar 侧边栏",
              "link": "/components/sn-sidebar"
            },
            {
              "text": "Menu 菜单",
              "link": "/components/sn-menu"
            },
            {
              "text": "Grid 宫格",
              "link": "/components/sn-grid"
            },
            {
              "text": "Gap 占位间隔",
              "link": "/components/sn-gap"
            },
            {
              "text": "Collapse 折叠面板",
              "link": "/components/sn-collapse"
            },
            {
              "text": "Steps 步骤条",
              "link": "/components/sn-steps"
            },
            {
              "text": "Subsection 分段器",
              "link": "/components/sn-subsection"
            },
            {
              "text": "Search 搜索框",
              "link": "/components/sn-search"
            },
            {
              "text": "Swipe Action 滑动操作",
              "link": "/components/sn-swipe-action"
            },
            {
              "text": "Float Board 浮动面板",
              "link": "/components/sn-float-board"
            },
            {
              "text": "Float Button 浮动按钮",
              "link": "/components/sn-float-button"
            },
            {
              "text": "Footer 页脚",
              "link": "/components/sn-footer"
            },
            {
              "text": "Drag 拖拽排序",
              "link": "/components/sn-drag"
            },
            {
              "text": "Sorter 排序",
              "link": "/components/sn-sorter"
            },
            {
              "text": "ListView 长列表",
              "link": "/components/sn-list-view"
            },
            {
              "text": "ScrollView 滚动视图",
              "link": "/components/sn-scroll-view"
            },
            {
              "text": "Waterflow 瀑布流",
              "link": "/components/sn-waterflow"
            },
            {
              "text": "Pagination 分页器",
              "link": "/components/sn-pagination"
            }
          ])
        },
        {
          "text": "功能组件",
          items: sortItems([
            {
              "text": "Calendar 日历选择器",
              "link": "/components/sn-calendar"
            },
            {
              "text": "CalendarView 月历视图",
              "link": "/components/sn-calendar-view"
            },
            {
              "text": "CalendarWeek 周日历",
              "link": "/components/sn-calendar-week"
            },
            {
              "text": "CalendarPunch 签到日历",
              "link": "/components/sn-calendar-punch"
            },
            {
              "text": "Scan 扫码",
              "link": "/components/sn-scan"
            },
            {
              "text": "Signature 签名",
              "link": "/components/sn-signature"
            },
            {
              "text": "Clipper 图片裁剪",
              "link": "/components/sn-clipper"
            },
            {
              "text": "Fullscreen 原位展开全屏",
              "link": "/components/sn-fullscreen"
            },
            {
              "text": "Gesture 手势",
              "link": "/components/sn-gesture"
            },
            {
              "text": "Perm Listener 权限申请监听",
              "link": "/components/sn-perm-listener"
            }
          ])
        },
        {
          "text": "扩展插件（部分须额外下载）",
          "link": "/components/ext-com",
          items: sortItems([
            {
              "text": "Blurview 高斯模糊",
              "link": "/components/sn-e-blurview"
            },
            {
              "text": "Markdown 富文本",
              "link": "/components/sn-e-markdown"
            },
            {
              "text": "Scan Provider 扫码核心",
              "link": "/components/sn-e-scan-provider"
            },
            {
              "text": "Scankit 华为扫码",
              "link": "/components/sn-e-scankit"
            },
          ])
        }
      ],
      "/libs/": [
        {
          "text": "Utils 工具库",
          "link": "/libs/utils/index",
          "items": [
            {
              "text": "Random 随机类",
              "collapsed": true,
              "items": [
                {
                  "text": "生成随机整数",
                  "link": "/libs/utils/random#snu-randint"
                },
                {
                  "text": "生成指定位数的随机整数",
                  "link": "/libs/utils/random#snu-randomnumber"
                },
                {
                  "text": "生成UUID",
                  "link": "/libs/utils/random#snu-uuid"
                },
                {
                  "text": "生成随机组件ID",
                  "link": "/libs/utils/random#snu-randomcomid"
                }
              ]
            },
            {
              "text": "Basic 基础类",
              "collapsed": true,
              "items": [
                {
                  "text": "节流",
                  "link": "/libs/utils/basic#snu-throttle"
                },
                {
                  "text": "防抖",
                  "link": "/libs/utils/basic#snu-debounce"
                },
                {
                  "text": "夹具",
                  "link": "/libs/utils/basic#snu-clamp"
                }
              ]
            },
            {
              "text": "Easing 缓动类",
              "collapsed": true,
              "items": [
                {
                  "text": "正弦曲线（入/出/入出）",
                  "link": "/libs/utils/easing#snu-easeinsine-easeoutsine-easeinoutsine"
                },
                {
                  "text": "二次曲线（入/出/入出）",
                  "link": "/libs/utils/easing#snu-easeinquad-easeoutquad-easeinoutquad"
                },
                {
                  "text": "三次曲线（入/出/入出）",
                  "link": "/libs/utils/easing#snu-easeincubic-easeoutcubic-easeinoutcubic"
                },
                {
                  "text": "四次曲线（入/出/入出）",
                  "link": "/libs/utils/easing#snu-easeinquart-easeoutquart-easeinoutquart"
                },
                {
                  "text": "五次曲线（入/出/入出）",
                  "link": "/libs/utils/easing#snu-easeinquint-easeoutquint-easeinoutquint"
                },
                {
                  "text": "指数曲线（入/出/入出）",
                  "link": "/libs/utils/easing#snu-easeinexpo-easeoutexpo-easeinoutexpo"
                },
                {
                  "text": "椭圆曲线（入/出/入出）",
                  "link": "/libs/utils/easing#snu-easeincirc-easeoutcirc-easeinoutcirc"
                },
                {
                  "text": "回退曲线（入/出/入出）",
                  "link": "/libs/utils/easing#snu-easeinback-easeoutback-easeinoutback"
                },
                {
                  "text": "弹性曲线（入/出/入出）",
                  "link": "/libs/utils/easing#snu-easeinelastic-easeoutelastic-easeinoutelastic"
                },
                {
                  "text": "弹跳曲线（入/出/入出）",
                  "link": "/libs/utils/easing#snu-easeinbounce-easeoutbounce-easeinoutbounce"
                },
                {
                  "text": "线性",
                  "link": "/libs/utils/easing#snu-linear"
                }
              ]
            },
            {
              "text": "Object 对象类",
              "collapsed": true,
              "items": [
                {
                  "text": "格式化数字",
                  "link": "/libs/utils/object#snu-formatnumber"
                },
                {
                  "text": "深拷贝",
                  "link": "/libs/utils/object#snu-deepclone"
                },
                {
                  "text": "数组重装（数组浅拷贝）",
                  "link": "/libs/utils/object#snu-rearray"
                },
                {
                  "text": "数组洗牌",
                  "link": "/libs/utils/object#snu-shuffle"
                },
                {
                  "text": "是否为Number类型",
                  "link": "/libs/utils/object#snu-isnumber"
                },
                {
                  "text": "设置元素Dataset",
                  "link": "/libs/utils/object#snu-setdataset"
                },
                {
                  "text": "获取元素Dataset",
                  "link": "/libs/utils/object#snu-getdataset"
                }
              ]
            },

            {
              "text": "Sort 排序类",
              "collapsed": true,
              "items": [
                {
                  "text": "冒泡排序",
                  "link": "/libs/utils/sort#snu-bubblesort"
                },
                {
                  "text": "选择排序",
                  "link": "/libs/utils/sort#snu-selectionsort"
                },
                {
                  "text": "插入排序",
                  "link": "/libs/utils/sort#snu-insertionsort"
                },
                {
                  "text": "快速排序",
                  "link": "/libs/utils/sort#snu-quicksort"
                },
                {
                  "text": "归并排序",
                  "link": "/libs/utils/sort#snu-mergesort"
                },
                {
                  "text": "堆排序",
                  "link": "/libs/utils/sort#snu-heapsort"
                },
                {
                  "text": "希尔排序",
                  "link": "/libs/utils/sort#snu-shellsort"
                },
                {
                  "text": "桶排序",
                  "link": "/libs/utils/sort#snu-bucketsort"
                }
              ]
            },
            {
              "text": "Text 文本类",
              "collapsed": true,
              "items": [
                {
                  "text": "是否为空文本",
                  "link": "/libs/utils/text#snu-isempty"
                },
                {
                  "text": "计算文本字数",
                  "link": "/libs/utils/text#snu-len"
                },
                {
                  "text": "Kebab命名法转小驼峰命名法",
                  "link": "/libs/utils/text#snu-kebabcasetocamelcase"
                },
                {
                  "text": "小驼峰命名法转Kebab命名法",
                  "link": "/libs/utils/text#snu-camelcasetokebabcase"
                },
                {
                  "text": "金额舍入",
                  "link": "/libs/utils/text#snu-roundamount"
                },
                {
                  "text": "数字转大写金额",
                  "link": "/libs/utils/text#snu-numtoupper"
                },
                {
                  "text": "金额转中文大写",
                  "link": "/libs/utils/text#snu-numtoupperamount"
                },
                {
                  "text": "姓名脱敏",
                  "link": "/libs/utils/text#snu-encryptname"
                },
                {
                  "text": "电话号码脱敏",
                  "link": "/libs/utils/text#snu-encryptphone"
                },
                {
                  "text": "身份证号脱敏",
                  "link": "/libs/utils/text#snu-encryptidcard"
                },
                {
                  "text": "邮箱脱敏",
                  "link": "/libs/utils/text#snu-encryptemail"
                },
                {
                  "text": "银行卡号脱敏",
                  "link": "/libs/utils/text#snu-encryptbankcard"
                },
                {
                  "text": "分割数字",
                  "link": "/libs/utils/text#snu-separatenumber"
                }
              ]
            },
            {
              "text": "Permission 权限提示类",
              "collapsed": true,
              "items": [
                {
                  "text": "设置权限用途提示",
                  "link": "/libs/utils/permission#snu-setpermtips"
                },
                {
                  "text": "设置权限提示样式",
                  "link": "/libs/utils/permission#snu-setpermtipsstyle"
                },
                {
                  "text": "注册权限监听",
                  "link": "/libs/utils/permission#snu-registerpermlistener"
                },
                {
                  "text": "注销权限监听",
                  "link": "/libs/utils/permission#snu-unregisterpermlistener"
                },
                {
                  "text": "隐藏权限提示",
                  "link": "/libs/utils/permission#snu-hidepermtips"
                }
              ]
            },
            {
              "text": "Platform 平台类",
              "collapsed": true,
              "items": [
                {
                  "text": "打开链接",
                  "link": "/libs/utils/platform#snu-openlink"
                },
                {
                  "text": "显示原生提示框",
                  "link": "/libs/utils/platform#snu-showsystoast"
                },
                {
                  "text": "使用内置全屏Webview打开网址",
                  "link": "/libs/utils/platform#snu-viewurlbywebview"
                },
                {
                  "text": "获取平台主题",
                  "link": "/libs/utils/platform#snu-getostheme"
                },
                {
                  "text": "写入剪切板",
                  "link": "/libs/utils/platform#snu-setclipboarddata"
                },
                {
                  "text": "从剪切板读取",
                  "link": "/libs/utils/platform#snu-getclipboarddata"
                },
                {
                  "text": "是否具备指定权限",
                  "link": "/libs/utils/platform#snu-checksystempermissiongranted"
                },
                {
                  "text": "获取未授权的系统权限",
                  "link": "/libs/utils/platform#snu-getsystempermissiondenied"
                },
                {
                  "text": "请求系统权限",
                  "link": "/libs/utils/platform#snu-requestsystempermission"
                },
                {
                  "text": "跳转到系统权限设置页面",
                  "link": "/libs/utils/platform#snu-gotosystempermissionactivity"
                },
                {
                  "text": "请求媒体权限",
                  "link": "/libs/utils/platform#snu-requestmediapermission"
                },
                {
                  "text": "检查媒体权限",
                  "link": "/libs/utils/platform#snu-checkmediapermission"
                }
              ]
            },
            {
              "text": "UI 界面类",
              "collapsed": true,
              "items": [
                {
                  "text": "获取像素值",
                  "link": "/libs/utils/ui#snu-getpx"
                },
                {
                  "text": "添加单位",
                  "link": "/libs/utils/ui#snu-addunit"
                },
                {
                  "text": "获取内圆角半径",
                  "link": "/libs/utils/ui#snu-getinnerradius"
                },
                {
                  "text": "计算两点距离",
                  "link": "/libs/utils/ui#snu-getdistance"
                },
                {
                  "text": "计算旋转角度",
                  "link": "/libs/utils/ui#snu-getrotateangle"
                },
                {
                  "text": "查找父系组件",
                  "link": "/libs/utils/ui#snu-findparent"
                },
                {
                  "text": "查找兄弟组件",
                  "link": "/libs/utils/ui#snu-findbrother"
                },
                {
                  "text": "显示轻提示",
                  "link": "/libs/utils/ui#snu-showtoast"
                },
                {
                  "text": "隐藏轻提示",
                  "link": "/libs/utils/ui#snu-hidetoast"
                },
                {
                  "text": "显示模态框",
                  "link": "/libs/utils/ui#snu-showmodal"
                },
                {
                  "text": "打开操作菜单",
                  "link": "/libs/utils/ui#snu-showactionsheet"
                },
                {
                  "text": "显示加载弹层",
                  "link": "/libs/utils/ui#snu-showloading"
                },
                {
                  "text": "隐藏加载弹层",
                  "link": "/libs/utils/ui#snu-hideloading"
                }
              ]
            },
            {
              "text": "Verify 校验类",
              "collapsed": true,
              "items": [
                {
                  "text": "是否为日期",
                  "link": "/libs/utils/verify#snu-isdate"
                },
                {
                  "text": "是否为URL",
                  "link": "/libs/utils/verify#snu-isurl"
                },
                {
                  "text": "是否为数字",
                  "link": "/libs/utils/verify#snu-isnumberstring"
                },
                {
                  "text": "是否为字母",
                  "link": "/libs/utils/verify#snu-isabc"
                },
                {
                  "text": "是否为中文",
                  "link": "/libs/utils/verify#snu-ischinese"
                },
                {
                  "text": "是否为邮箱",
                  "link": "/libs/utils/verify#snu-isemail"
                },
                {
                  "text": "是否为手机号",
                  "link": "/libs/utils/verify#snu-isphone"
                },
                {
                  "text": "是否为座机号",
                  "link": "/libs/utils/verify#snu-islandline"
                },
                {
                  "text": "是否为QQ号",
                  "link": "/libs/utils/verify#snu-isqqnumber"
                },
                {
                  "text": "是否为IPv4地址",
                  "link": "/libs/utils/verify#snu-isipv4"
                },
                {
                  "text": "是否为IPv6地址",
                  "link": "/libs/utils/verify#snu-isipv6"
                },
                {
                  "text": "是否为第二代公民身份号码",
                  "link": "/libs/utils/verify#snu-isidcard"
                },
                {
                  "text": "是否为图片文件",
                  "link": "/libs/utils/verify#snu-isimage"
                },
                {
                  "text": "是否为视频文件",
                  "link": "/libs/utils/verify#snu-isvideo"
                },
                {
                  "text": "是否为车牌号码",
                  "link": "/libs/utils/verify#snu-iscarnumber"
                },
                {
                  "text": "是否为整数",
                  "link": "/libs/utils/verify#snu-isinteger"
                },
                {
                  "text": "是否为小数",
                  "link": "/libs/utils/verify#snu-isfloat"
                }
              ]
            }
          ]
        },
        {
          "text": "Color 颜色库",
          "link": "/libs/color/index",
          "items": [
            {
              "text": "方法",
              "collapsed": true,
              "items": [
                {
                  "text": "创建TinyColor实例",
                  "link": "/libs/color/methods#colorlib-tinycolor"
                },
                {
                  "text": "计算APCA",
                  "link": "/libs/color/methods#colorlib-calcapca"
                },
                {
                  "text": "生成色板",
                  "link": "/libs/color/methods#colorlib-generate"
                },
                {
                  "text": "计算平均颜色",
                  "link": "/libs/color/methods#colorlib-mean"
                },
                {
                  "text": "生成随机颜色",
                  "link": "/libs/color/methods#colorlib-random"
                }
              ]
            },
            {
              "text": "TinyColor 对象",
              "link": "/libs/color/TinyColor"
            },
            {
              "text": "类型",
              "link": "/libs/color/types"
            }
          ]
        },
        {
          "text": "Date 日期库",
          "link": "/libs/date/index",
          "items": [
            {
              "text": "方法",
              "collapsed": true,
              "items": [
                {
                  "text": "获取当前时间",
                  "link": "/libs/date/methods#datelib-now"
                },
                {
                  "text": "获取今日实例",
                  "link": "/libs/date/methods#datelib-today"
                },
                {
                  "text": "解析为Date",
                  "link": "/libs/date/methods#datelib-todate"
                },
                {
                  "text": "小写token格式化",
                  "link": "/libs/date/methods#datelib-fmtdate"
                },
                {
                  "text": "周相关工具",
                  "link": "/libs/date/methods#datelib-weeks"
                },
                {
                  "text": "获取周名称",
                  "link": "/libs/date/methods#datelib-weekname"
                },
                {
                  "text": "创建Dayuts实例 / 创建原生Date",
                  "link": "/libs/date/methods#datelib-dayuts-newdate"
                }
              ]
            },
            {
              "text": "Dayuts 对象",
              "link": "/libs/date/Dayuts"
            },
            {
              "text": "解析占位符",
              "link": "/libs/date/format"
            },
            {
              "text": "国际化",
              "link": "/libs/date/intl"
            },
            {
              "text": "类型",
              "link": "/libs/date/types"
            }
          ]
        }
      ]
    },
  },
});
