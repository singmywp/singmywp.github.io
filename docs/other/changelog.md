## 2.0.0（2026-09-06）
- 【提示】本次变更较大，可利用 AI 完成版本迁移（差异详情：https://sinleui.pages.dev/differences）
- 【重要】插件推荐运行版本为 HBuilder X Alpha 5.25 及以上（蒸汽模式在此版本之前存在比较严重的问题）
- 【重要】新增 框架全面重构为 uni-app x 蒸汽模式（vapor），VDOM 模式由于性能原因不再支持。
- 新增 多风格（Style）系统：内置 default / ink / chinese / new-year / morandi-green / orange 六套风格，支持自由修改增删内置风格，或者为应用添加自定义风格，并支持一键切换。
- 新增 五乘数体系（`fontsizeFactor` / `radiusFactor` / `marginFactor` / `paddingFactor` / `aniTimeFactor`）与三基础动画时长 `baseAniTimeShort` / `Normal` / `Long`，修改自动持久化并实时驱动页面
- 新增 国际化支持。插件默认支持简体中文 `zh-Hans`、英语 `en`、法语 `fr`、俄语 `ru`、日语 `ja`、繁体中文 `zh-Hant`、韩语 `ko`、西班牙语 `es`、德语 `de`、意大利语 `it`、葡萄牙语 `pt` 共计 11 种语言。
- 新增 `SnColorBase.shadow` 阴影色字段，随主题自动切换
- 新增 全局弹窗 `showLoading` / `hideLoading`；`showToast` 新增 `title` 兼容写法与 `passThrough` 点击穿透，`showModal` / `showActionsheet` 新增 `openAnimation` / `closeAnimation` 自定义开合动画
- 新增 `snu` 金额工具 `roundAmount` / `numToUpperAmount`（字符串级舍入，规避浮点陷阱）与全新 Resolve、Perm 方法分组
- 新增 `$snui.logging` 日志开关与 `log` / `info` / `debug` / `warn` / `error` 统一日志接口，组件内部不再直接 `console` 来报日志。
- 新增 Utils 工具库 `hideToast` 隐藏轻提示
- 新增 Utils 工具库 `clamp` 夹具函数，对所给值限制范围
- 新增 `$snui.colors` 颜色 `light`，与 `dark` 相对应。亮色模式下，`light` 即 `#fff`，`dark` 即 `#000`；暗黑模式下，两者颜色互换，`light` 即 `#000`，`dark` 即 `#fff`
- 新增 `syncStatusBarColor` / `createCalendarDayPaint` / `createCalendarDayContent` 全局函数与 `SN_DEFAULT_STYLE_ID` 常量
- 新增 `sn-agreement` 协议勾选：支持链接文本与勾选状态双向绑定
- 新增 `sn-album` 相册：网格宫格展示图片组并支持点击预览
- 新增 `sn-amount` 金额展示：字符串级精确舍入、千分位分隔与中文大写金额
- 新增 `sn-arc-progress` 环形进度：基于 canvas 绘制，支持自定义起止角度
- 新增 `sn-arc-slider` 圆弧滑块：圆弧形态滑动选择器，含 hue 颜色模式
- 新增 `sn-calendar` 日历选择器：底部弹出，支持单选 / 区间 / 多选三种模式
- 新增 `sn-calendar-view` 月历视图：可滑动的月历面板，供日历系列组件复用
- 新增 `sn-calendar-punch` 打卡日历：签到打卡记录日历
- 新增 `sn-calendar-week` 周日历：一次展示一周并支持滑动切周
- 新增 `sn-cascader` 级联选择：支持静态 data 与异步 loadData 双数据源
- 新增 `sn-cell` 列表项：通用单元格组件，框架内部列表布局统一复用
- 新增 `sn-clipper` 图片裁剪：可视裁剪框拖拽缩放，导出区域与预览一致
- 新增 `sn-code-input` 验证码输入：支持掩码、光标与粘贴识别
- 新增 `sn-color-picker` 颜色选择器：支持 alpha 透明度与预设色
- 新增 `sn-color-picker-view` 颜色视图：颜色选择的滑动面板视图
- 新增 `sn-drag` 拖拽排序：长按拖拽交换排序
- 新增 `sn-drag-item` 拖拽项：配合 `sn-drag` 使用的可拖拽子项
- 新增 `sn-drawer-list` 抽屉长列表：底部抽屉形态的长列表容器
- 新增 `sn-ellipsis` 文本省略：超长文本省略并支持展开 / 收起
- 新增 `sn-footer` 页脚：Logo + 导航链接 + 版权三段式布局
- 新增 `sn-fullscreen` 全屏：原位展开全屏容器
- 新增 `sn-form-field` 表单项容器：标签、内容、必填标与校验注册的基座
- 新增 `sn-input-field` 标签输入框：表单项 + 输入框组合，内置错误提示
- 新增 `sn-textarea-field` 标签文本域：表单项 + 文本域组合，含字数统计
- 新增 `sn-highlight-text` 高亮文本：关键词高亮显示
- 新增 `sn-keyboard` 安全键盘：数字 / 整数 / 密码 / 身份证 / 车牌五种类型
- 新增 `sn-mention` 提及输入：@ 提及选择输入框
- 新增 `sn-message` 消息条：全局消息队列，六方向弹出与分组计数
- 新增 `sn-notification` 通知：带标题内容与类型图标，支持进度条与拖动关闭
- 新增 `sn-pagination` 分页器：简洁 / 完整两种模式，支持快速跳转
- 新增 `sn-popover` 气泡卡片：锚点定位的轻量气泡弹层
- 新增 `sn-post-card` 帖子卡片：动态 / 帖子信息展示卡片
- 新增 `sn-region-picker` 省市区选择：内置中国区划数据，省 / 市 / 县模式
- 新增 `sn-scroll-view` 滚动容器：与长列表共用刷新 / 加载更多 / 回到顶部机制
- 新增 `sn-slide-captcha` 滑块验证：拖拽滑块完成验证
- 新增 `sn-slider-double` 双向滑块：区间范围选择
- 新增 `sn-sorter` 排序：字段排序选择器
- 新增 `sn-steps` 步骤条：横 / 竖排布，圆点 / 点状两种形态
- 新增 `sn-step` 步骤项：配合 `sn-steps` 的步骤节点
- 新增 `sn-table` 表格：支持固定表头与固定列
- 新增 `sn-tr` 表格行：配合 `sn-table` 的行节点
- 新增 `sn-td` 表格单元格：配合 `sn-table` 的单元格节点
- 新增 `sn-tree` 树：多模式选择与懒加载
- 新增 `sn-watermark` 水印：页面或局部水印覆盖，不影响其他组件，无副作用。
- 新增 `sn-keyboard-top` 键盘上方区域：未弹出键盘时按默认方式定位（与普通 view 一致），弹出键盘时切换为 fixed 定位并跟随键盘高度贴在键盘上方（Android / Web）
- 新增 `Demo` 手势库实例，结合可视化元素演示手势库应用
- 新增 `sn-e-toast` 插件：替换 `snu.showToast` 基于 `dialogPage ` 实现的不可透穿手势的 Toast 轻提示，原生弹层实现同官方 `uni.showToast` 基本一致的体验。同时相对于官方的 UI 新增了动画和丰富的样式支持。
- 优化 `$` 动态变量解析，在原有的仅支持基础上支持解析任意尺寸，自动计算符合当前框架尺寸乘数的结果。新增 `Resolve` 相关解析 API （详见文档）暴露给开发者使用以适配框架样式。
- 优化 动画统一由 UniElement DOM animate / transition + `--ani-time-*` 变量实现，支持 `$` 简写并随 `aniTimeFactor` 全局调速
- 优化 点击态统一为 `useHover` + `hover-style` 机制，替代旧 `hover-class`，配套 `hover-start-time` / `hover-stay-time` / `hover-trans-time`
- 优化 内部列表项 / 子项布局统一复用 `sn-cell`，子元素样式经 `itemStyle` / `itemHoverStyle` / `itemTextStyle` / `itemIconStyle` / `itemClass` / `itemBorder` 传递链透传
- 优化 长列表组件（`sn-list-view` / `sn-waterflow`）改为数据驱动 + 作用域插槽渲染，条目按数据项 type 分组复用回收，避免了直接传入 `list-item` / `flow-item` 组件被渲染为普通view 而引发的内存泄露问题
- 优化 重新设计了 `sn-input` 和 `sn-textarea` 的默认样式。如需原来的样式可以通过丰富的属性来实现。
- 优化 跟手组件触摸交互改为 DOM 直操作，APP 端拖动更顺滑
- 优化 `sn-select`、`sn-menu` 支持触底上移，即如果触发点位于页面底部，将自动将弹出层上移，避免触底。
- 优化 各组件尺寸类统一支持联合类型 `String | Number`
- 优化 `sn-datetime-picker` 的性能问题。
- 优化 禁用态统一使用主题禁用色，Web 端条件编译设置 `cursor: not-allowed`
- 优化 `sn-select` 滚动模式下打开将自动定位到当前选中项。
- 优化 sn-waterflow Web 端启用虚拟滚动，长列表滚动更流畅
- 优化 sn-picker-view 在 APP端使用拍平，极大提升了载入大量数据时的性能，卡顿大幅减轻
- 优化 sn-upload-media 及 sn-upload-media-unicloud 在非 Web 端平台改用系统提供的选择器，无需再向系统申请媒体权限
- 优化 sn-scan 从相册中选择图片时改用系统提供的选择器，无需再向系统申请媒体权限，且不会产生大量缓存文件而导致占用空间膨胀
- 优化 Demo 新特性速览跳转到工具库 Demo 时出现的卡顿问题
- 优化 `sn-e-markdown`  Android 改为原生渲染，消除 WebView 卡顿
- 优化 按钮 / 输入框 / 开关加载态指示器延迟 100ms 显示，避免闪烁
- 优化 `sn-rate` 只读态改为双层裁剪渲染，提升性能
- 【重要】更改【破坏性变更】重构原有 API 架构，具体见文档。
- 更改【破坏性变更】 全部组件样式扩展统一为 `customStyle` + `{语义}Style` / `Class` 透传体系，适配蒸汽模式样式隔离 2.0
- 更改 【破坏性变更】 `SnError` ：字段变更为 `scope` / `funName` / `errCode` / `err`，旧 `moduleName` / `apiname` / `errSubject` / `errMsg` 全部失效
- 更改 【破坏性变更】`$snui.setColorSet` 更名 `setColorBase`，颜色键校验更严格
- 更改 组件 v-model 规范化：旧 `vModel` / `modelValue` 统一为 `v-model`（`sn-checkbox` / `sn-radio` / `sn-switch` / `sn-rate` / `sn-slider` / `sn-progress` 等）
- 更改 【破坏性变更】弹出层组件 `open` / `close` 事件改为六段动画生命周期事件 `beforeenter` / `enter` / `afterenter` / `beforeleave` / `leave` / `afterleave`，`clickMask` 统一更名 `clickoverlay`
- 更改 【破坏性变更】扩展插件收编为内置组件：`sn-e-gesture` → `sn-gesture`、`sn-e-qrcode` → `sn-qrcode`、`sn-e-barcode` → `sn-barcode`
- 更改 【破坏性变更】 `sn-waterfall` 更名重写为 `sn-waterflow`，并进行了重构。在APP 端封装官方内置组件 `waterflow`，在 `Web` 端采用自实现的虚拟列表。
- 更改 【破坏性变更】`sn-markdown` 迁移为独立插件 `sn-e-markdown`
- 更改 【破坏性变更】 `sn-longlist` 重构为 `sn-list-view`，`refresher-triggered` 改为 v-model 双向绑定
- 更改 【破坏性变更】 `sn-form-item` 拆分为 `sn-form-field` / `sn-input-field` / `sn-textarea-field`，`submited` 事件更名 `submit`
- 更改 【破坏性变更】`sn-menu` 菜单类组件的子组件从 `sn-menu-item` 改为 `sn-cell`  ，移除插槽并新增 `select` 事件。
- 更改 重新设计 `sn-signature` 组件布局，适配横屏模式。
- 更改 尺寸 / 时间类 props 统一放宽为 `String | Number` 并接入 `$` 乘数语法，颜色类 props 使用 `String(色值)` 支持 `$` 主题色
- 更改 【破坏性变更】字号板（`font.baseSize` + size 等级）、圆角等级板、动画等级板，改为乘数体系
- 更改 【破坏性变更】各组件 `customXxxStyle`（UTSJSONObject）更名去 `custom` 前缀为 `{语义}Style` 并成对新增 `{语义}Class`，`customStyle` 类型放宽为 `UTSJSONObject | String`
- 更改 【破坏性变更】`$snui.configs` 六大子配置体系，改为 `$snui` 扁平属性直接读写
- 修复 Android 端跟手组件拖动卡顿问题，触摸交互改 DOM 直写保证帧率
- 修复 `sn-notice` 组件在横屏或宽屏场景下文字完全隐藏后需要等待较长时间才会再次显示的问题
- 修复 `sn-notice` 组件过长文本会被截断的问题
- 修复 弹出层类组件未置于 `sn-page` 根节点时 `--sn-*` 颜色与 `--ani-time-*` 动画时长变量失效的问题
- 修复 非法 type / level 导致异常的问题，当前自动回退默认主题
- 修复 sn-timer / sn-countdown 等组件类型过度收窄导致的传参报错
- 修复 Date 日期库部分情况下报空指针异常的问题
- 修复 Utils 工具库 isDate 在高版本 uni-app x 上报空指针异常的问题
- 修复 sn-scan 图片扫描成功后预览图与识别点错位的问题
- 修复 sn-scan 手指在扫描线上无法触发缩放事件的问题（即缩放具有明显的卡顿感的问题）
- 移除 【破坏性变更】Store 状态管理库（`$snui.store` 及 `StoreLib` 全部废弃），蒸汽模式可直接使用 `pinia` 。
- 移除 【破坏性变更】`configs.font.mainFamily` 内置字体配置与 `configs.app.grayMode` 哀悼置灰模式
- 移除 【破坏性变更】`snu` 方法：`makePhoneCall`、`vibrate`、`addPx`、`share`、`chooseMedia`、`previewImage`、`showToasty`。上述方法官方基本已有实现或已不实用。
- 移除 废弃类型：`SnShareConfig`、`SnChooseMediaOptions`、`SnPreviewImageConfig`、`SnPreviewImageLongPressActions`、`SnToastyConfig`
- 移除  【破坏性变更】 栅格布局组件 `sn-col` / `sn-row` 与过渡组件 `sn-transition`。上述组件已不实用。
- 移除 【破坏性变更】SVG 组件 `sn-e-svg`。官方内置 `image` 已支持 `svg` 格式。
- 移除 `sn-list-item`、`sn-list-chat` 、 `sn-menu-item` 静态列表子组件，改由 `sn-cell` 实现
- 移除 【破坏性变更】 `sn-perm-listener` 组件标签形态，权限提示能力迁移为 `snu.setPermTips` / `registerPermListener` 等全局 API。
## 1.1.6（2024-11-24）
- 修复 导入插件时插件内部页面未完全注册的问题
- 修复 导出插件时错误地导入 `sn-e-toast` 插件的问题
## 1.1.5（2024-11-24）
- **重要** 插件最低运行版本为 HBuilder X **4.33**，如未适配暂勿升级
- **重要** 移除 框架内置字体 **MiSans** ，插件体积减少 **60%**，如需继续使用此字体可自行下载并导入到项目中
- **重要** 移除 `sn-e-toast` 插件，其所有 API 已迁移至 `sn-native`，如果原来已下载此插件，请手动删除
- 新增 `sn-native` 插件作为原生能力扩展库，原 `sn-e-toast` 及 `sinle-ui` 部分 API 迁移至 `sn-native`
- 新增 `SnError` 错误规范，SinleUI 框架的 API 及组件报错将逐渐规范化，返回 `SnError` 类型的错误信息。错误码与错误信息对应表[详见](https://sinleui.pages.dev/api/error/standard)。
- 调整 Utils 工具库 原 `showToast` 更名为 `showToasty`，其参数 `config` 类型更名为 `SnToastyConfig`
- 移除 Utils 工具库 `share` 分享及其参数相应类型，请使用官方 `uni.shareWithSystem` 代替
- 新增 Utils 工具库 `showToast` 全局轻提示。与 `sn-toast` 不同的是，它可以在任意位置调用，无需放置组件；强制防穿透。与 `showToasty` 不同的是，它的样式配置更加丰富。
- 新增 Utils 工具库 `showActionsheet` 全局操作菜单，与 `sn-actionsheet` 不同的是，它可以在任意位置调用，无需放置组件
- 新增 Utils 工具库 `showModal` 全局模态窗，与 `sn-modal` 不同的是，它可以在任意位置调用，无需放置组件
- 新增 Utils 工具库 `previewImage` 全局图片预览，目前仅支持单张图片预览，支持手势缩放、平移，支持长按唤出自定义菜单
- 新增 Utils 工具库 `chooseMedia` 选择媒体文件方法，支持图片、视频和混选、多选
- 新增 `sn-perm-listener` 权限申请监听组件，当前页面申请权限时自动弹出权限用途说明框
- 新增 `sn-upload-media` 属性 `mode` 增加 `all`  选项，支持视频图片混传，使用系统相册选择
- 新增 `sn-upload-media` 事件 `file-chose` 当媒体文件选择成功时都会触发，与 `image-chose` 和 `video-chose` 可以同时触发
- 新增 `sn-upload-media-unicloud` 属性 `mode` 增加 `all`  选项，支持视频图片混传，使用系统相册选择
- 新增 `sn-upload-media-unicloud` 事件 `file-chose` 当媒体文件选择成功时都会触发，与 `image-chose` 和 `video-chose` 可以同时触发
- 新增 `sn-card` 属性 `titleLines` 卡片标题最大显示行数
- 新增 `sn-tabbar` 属性 `v-model:height` 支持外部绑定 `tabbar` 占位高度
- 新增 `sn-search` 属性 `focus` 是否获得焦点
- 新增 `sn-topbar` 属性 `backButtonIcon` 返回按钮图标
- 新增 `sn-grid-group` 属性 `gutter` 子项间距
- 新增 `sn-collapse-group` 属性 `note` 、`noteColor` 、`noteSize` 支持自定义样式的说明文本
- 新增 `sn-collapse-item` 插槽 `header` ，支持自定义配置头部区域
- 新增 `sn-menu-item` 插槽 `header` 、`body`、`footer`，支持自定义配置各部分区域
- 修复 `sn-menu-item` 默认插槽不生效的问题
- 新增 `sn-tabs` 属性 `aniTime` 动画时长、`mode` 模式，新增推压动画
- 优化 `sn-tabs` 动画显示更流畅
- 新增 `sn-view` 事件 `scale` 和 `roate` ，主要为 Web 端提供缩放和旋转事件，与 App 端的 `sn-e-gesture` 对齐
- 新增 Demo 右上角 *关于本应用* 入口
- 重写 `sn-notice-bar`，解决了一些性能和显示问题
- 优化 `sn-actionsheet` 在宽屏设备上的显示效果
- 优化 `sn-tabbar` 最大插槽数增加至 `10`
- 修复 `sn-e-scankit` 多页面调用 `scan` 方法回调函数混淆的问题
- 优化 Demo 布局改为 Tabbar 式
## 1.1.4（2024-10-05）
- 优化 文档 Utils 库所有方法新增示例代码
- 优化 文档阅读体验
- 新增 Utils 工具库 `share` 方法，调用系统分享功能，支持分享任何文件至其他应用
- 新增 `$snui.configs.app.grayMode` 哀悼模式配置，支持为应用全局置灰，适用于全国性哀悼活动、重大人物逝世时设置
- 新增 `sn-actionsheet` 操作菜单组件
- 新增 `sn-e-blurview` 高斯模糊组件
- 新增 `sn-avatar-group` 头像组组件
- 新增 `sn-e-scankit-code` 华为码图组件，此组件属于 `sn-e-scankit` 插件的一部分
- 新增 `sn-overlay` 事件 `open`、`close`
- 新增 Demo 支持应用设置状态持久化
- 新增 `sn-avatar` 插槽 `default`
- 新增 `sn-collapse-group` 属性 `showBorder` ，便于统一样式
- 新增 `sn-topbar` 属性 `blur` 支持毛玻璃背景
- 调整 Utils 工具库 `showToast` 方法更名为 `showSysToast`，调用的是对应平台的 Toast，形态各异
- 新增 Utils 工具库 `showToast` 方法，在各端提供基本一致的体验
- 移除 `sn-collapse-item` 属性 `border` ，便于统一样式
- 优化 `sn-collapse-group` 、`sn-collapse-item` 分割线显示效果
- 优化 `sn-list-item` 、`sn-list` 、`sn-collapse-group` 、`sn-collapse-item` 渲染大量数据时的性能
- 修复 `sn-modal` 当 `:maskClose="true"` 时点击模态框导致其意外关闭的问题
- 修复 `sn-toast` 快速多次调用时只会执行第一次请求的定时关闭的问题
## 1.1.3（2024-09-22）
- 新增 `sn-e-scankit` 华为扫码 ScanKit 扩展插件
- 新增 `sn-dateformat` 日期格式化组件，基本与 `uni-dateformat` 对齐
- 调整 `$snui.configs.radius.circle` 为变量，当 `baseSize` 为 0 时，`$circle` 也为 0
- 修复 Web 端 `sn-drawer` 和 `sn-float-board` 组件 手势操作穿透的问题
- 修复 `sn-drawer` 组件 当 `position` 为 `top` | `left` 时进行手势操作 移动方向不正确的问题
- 修复 `sn-avatar`、`sn-collapse-group` 组件 `borderRadius` 属性无法使用 $ 变量的问题
- 修复 `sn-form-item` 组件 文档及代码提示缺失 `label` 属性的问题
## 1.1.2（2024-09-17）
* **【重要】**新增 所有组件的颜色、圆角、字体大小、动画时长等支持使用 $ 变量，和文档[简写表达式](http://sinleui.pages.dev/components/#%E7%89%B9%E6%AE%8A%E5%80%BC)一样的体验。如输入`$primary` 直接映射到 `$snui.colors.primary`
* **【重要】**调整 所有组件 `aniTime` 属性类型改为 String ，支持 $ 变量，如需自行输入请带单位（`ms`）
* **【重要】**优化 所有组件属性处理底层逻辑
* 新增 `sn-picker-view` 选择器容器组件
* 新增 `sn-picker` 选择器组件
* 新增 `sn-label-radio` 标签单选组件
* 新增 `sn-label-checkbox` 标签多选组件
* 新增 `$snui.setColor` 动态配置框架各颜色值
* 新增 `$snui.setColorSet` 动态配置框架各主题颜色变量集合，一键修改项目配色。[详见](https://sinleui.pages.dev/api/#方法)。使用[示例](https://sinleui.pages.dev/api/config/init)。
* 新增 `sn-menu-item` 组件属性 `iconPosition` 图标位置，支持左侧或右侧
* 新增 `sn-collapse-group` 组件属性 `borderRadius` 圆角大小
* 新增 `sn-gap` 组件属性 `borderRadius` 圆角大小
* 新增 `sn-tag` 组件属性 `borderRadius` 圆角大小
* 新增 `sn-modal` 组件属性 `borderRadius` 圆角大小
* 新增 `sn-upload-media`、`sn-upload-media-unicloud` 组件 `image-chose`、`video-chose` 媒体文件选择成功回调事件
* 调整 `sn-overlay` 组件外层增加一个 `view`，如需为 `overlay` 设置样式请用 `customStyle` 而非 `style`
* 调整 `sn-upload-media` 组件 `url` 为空 调用 `upload` 方法时 组件提示词更换为“未上传”，并触发 `upload-error` 事件，在控制台输出错误信息
* 调整 `sn-countto` 组件属性 `aniTime` 更名为 `duration` （Number 类型）
* 调整 Android 端 Demo Page 页面 允许访问
* 调整 Android 端 Demo Color 颜色库 允许访问
* 修复 `sn-checkbox` 、`sn-checkbox-tag` 组件 载入页面时组件样式闪动、卡顿的问题
* 修复 `sn-radio` 、`sn-radio-tag` 组件 载入页面时组件样式闪动、卡顿的问题
* 修复 Demo Toast 轻提示页面 文本对齐配置无法修改选项的问题
* 修复 `sn-color` 颜色库因官方底层函数 Bug 致使的颜色处理不正确的问题
## 1.1.1（2024-09-08）
* 新增 `sn-menu-item` 菜单项组件，主要作为菜单型组件的子项，Select、Topbar 等多个组件依赖于此组件
* 新增 `sn-waterfall` 瀑布流组件
* 新增 `sn-tabbar` 底部导航栏组件。详见[文档](https://singmywp.github.io/components/sn-tabbar)
* 新增 `sn-upload-media`、`sn-upload-media-unicloud` 组件支持视频上传
* 新增 `sn-upload-media`、`sn-upload-media-unicloud`  组件属性 `mode`、`compressed`、`maxDuration` 、`autoUpload`属性。详见[文档](https://singmywp.github.io/components/sn-upload-media)
* 新增 `sn-page` 组件 `upperThreshold`、`lowerThreshold` 属性
* 优化 Utils 工具库 `deepClone` 深拷贝，改变了底层实现方法，现支持复制复杂对象，复制数据时性能提升 1~3 倍
* 优化 Demo 工具库优化演示操作
* 修复 `sn-more` 组件 文本高度低于 `minHeight` 时仍显示为 `minHeight` 高度的问题
* 修复 `sn-signature` 组件 笔画数大于 `maxHistory` 时，撤销后连同前几笔一起擦除的问题
* 修复 `sn-longlist` 组件代码提示不显示事件的问题
* 修复 `sn-page` 组件代码提示不显示事件的问题
## 1.1.0（2024-09-05）
* 新增 支持全局响应式配置全局字体
* 新增 文档 配置 * 初始化配置，演示了设置框架默认配置的方法
* 优化 文档 全局配置解释更加详细、全面
* 修复 `sn-float-board`组件 因 `SnTouch` 属性变更导致的滑动方向不正确的问题
* 修复 `sn-drawer` 组件 因 `SnTouch` 属性变更导致的滑动方向不正确的问题
* 修复 `sn-form` 组件 报警告：``` [Vue warn] Invalid watch source ```
* 修复 `sn-upload-media` 组件取消选择图片显示“选择失败”弹窗的问题
* 修复 `sn-upload-media-unicloud` 组件取消选择图片显示“选择失败”弹窗的问题
* 修复 `sn-signature` 组件 当应用主题变化时数据丢失、已有字迹颜色不变化的问题
* 修复 Demo Select 选择框 页面中 部分自定义样式的组件在暗黑模式下显示不正常的问题
## 1.0.9（2024-09-02）
* 修复 无法导入插件的问题
## 1.0.8（2024-08-30）
* **重要优化** 所有组件适配 vue-doc，在 HBuilderX 中提供良好的代码提示
* 新增 `sn-topbar` 组件属性 `menuBorderRadius` 菜单圆角大小
* 新增 `sn-textarea` 组件插槽 `counter` 替换内置计字器
* 新增 `sn-textarea` 组件属性 `inputmode` 属性，与内置 `textarea` 对齐
* 新增 `sn-list-item` 组件属性 `avatarConfig`
* 新增 `sn-list-chat` 组件属性 `avatarConfig`
* 移除 `sn-list-item` 组件属性 `avatar`、`avatarSize`、`avatarBorderRadius`
* 移除 `sn-list-chat` 组件属性 `avatar`、`avatarShape`、`avatarSize`、`avatarBorderRadius`
* 移除 `Utils` 工具库 `getWindowHeight` 方法，请使用 `uni.getWindowInfo().windowHeight` 代替
* 修复 Demo 文档未录入 `sn-textarea` 组件的问题
* 修复 Demo 文档 `sn-e-scan-provider` 遗漏属性文档的问题
## 1.0.7（2024-08-29）
* 新增 `sn-search` 搜索框组件
* 新增 `sn-signature` 签名组件
* 新增 `sn-upload-media` 媒体上传组件
* 新增 `sn-upload-media-unicloud` 媒体上传（uniCloud 版）组件（使用前请先为项目绑定 uniCloud 服务空间）
* 新增 `sn-e-code` 条形码扩展组件（Zxing/bwip-js 原生生成）
* 新增 `sn-e-qrcode` 二维码扩展组件 （Zxing/bwip-js原生生成）
* 新增 `sn-alert` 组件属性 `borderRadius` 圆角大小
* 新增 `sn-scan` 组件属性 `albumPermTip` 相册权限请求提示
* 新增 Demo 右上角菜单 * UI 框架推荐页
* 新增 Demo Svg 示例
* 新增 Demo 主页全局圆角配置
* 移除 `sn-button-group` 组件，建议使用`sn-row` 或 内置 `view` 组件代替
* 移除 `sn-topbar` 组件属性 `buttonSpacing`，此属性依赖于 `sn-button-group`，因其已被移除，故此删除此属性
* 优化 `sn-scan` 组件弃用 MediaStore 改用 uni.chooseImage 选择图片扫码，支持自定义相册权限请求提示
* 修复 组件文档部分组件页不显示 Demo 的问题
* 修复 `sn-more` 组件内部文本低于 `minHeight` 时仍显示 展开更多文本和遮罩 的问题
* 修复 `sn-view` 组件动画时长属性不生效的问题
* 修复 `sn-slider` 存在动画导致不跟手的问题
* 修复 `sn-scan` 组件第二次及以后进入页面时选择图片扫码无反应的问题
* 修复 组件 `nextTick` 异步调用 `useResize` 致使 Vue 警告：[Vue warn]: onUnmounted is called when there is no active component instance to be associated with.
## 1.0.6（2024-08-22）
* 新增 `sn-more` 查看更多组件
* 优化 `sn-view` 组件新增 `disabled`、 `aniTime` 属性
* 优化 Demo View 视图容器页面增加区域禁用、加载示例
* 修复 `sn-checkbox` 组件禁用状态下仍然显示回弹效果的问题
* 修复 `sn-float-button` 组件禁用状态下仍可被拖动的问题
* 修复 `sn-slider`、`sn-slider-double`、`sn-checkbox` 组件禁用状态下样式不变的问题
* 修复 `sn-scan` 组件识别多码时点击识别点无反应的问题
* 修复 Web 端 `sn-steppep` 组件默认状态占满屏的问题
* 修复 Web PC 端 端点击页面其他区域仍触发 `sn-view` 组件 `touchend` 事件的问题
* 优化 Web PC 端 部分组件 可点击状态显示 `pointer` 光标；禁用时显示 `not-allowed` 光标；加载时显示 `wait` 光标
## 1.0.5（2024-08-21）
* 新增 `sn-progress` 进度条组件
* 优化 将部分组件的 `aniDur` 属性统一改名为 `aniTime`，避免混淆
* 修复 `sn-notice-bar` 滚动模式下滚动一次后不再滚动的问题
* 修复 Demo 部分页面文本错误的问题
## 1.0.4（2024-08-19）
* 修复 Web 端 `sn-collapse-group` 及 `sn-collapse-item` 报错、无法正常使用的问题
* 修复 Web 端 `sn-tooltip` 位置不正常的问题
* 修复 Demo Page 页面 中切换页面背景色致使的死循环问题
## 1.0.3（2024-08-19）
* 修复了已知问题
## 1.0.2（2024-08-18）
* 特别提醒：目前 HBX 4.25 有点问题，暂且不要升级版本
* 优化 完善了所有基础组件的文档
* 优化 修改部分组件的分类，更加合理
* 移除 `sn-date-picker` 组件（此组件暂不完善，故此移除，需要用可参考 [官方实现案例](https://hellouniappx.dcloud.net.cn/web#/pages/component/picker-view/picker-view) 自行封装）

* 修复 Demo 首页调整字体大小有时不生效的问题
* 修复 `sn-date-picker` 组件引用已移除的 `sn-picker ` 及 `sn-picker-view` 组件致使云打包失败的问题
* 修复 `sn-slider-double` 组件值变化时输出大量调试信息致使卡顿的问题
* 修复 `sn-scan` 组件不显示扫描线资源的问题
## 1.0.1（2024-08-18）
* 修复 插件页面二维码无法访问的问题
## 1.0.0（2024-08-18）
* 初次发布，暂不稳定，存在一些已知 bug，仅供体验
