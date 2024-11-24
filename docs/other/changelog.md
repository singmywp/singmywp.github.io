## 1.1.5（2024-11-24）
- **重要** 插件最低运行版本为 HBuilder X **4.33**，如未适配暂勿升级
- **重要** 移除 框架内置字体 **MiSans** ，插件体积减少 **60%**，如需继续使用此字体可自行下载并导入到项目中
- 新增 `sn-native` 插件作为原生能力扩展库，原 `sn-e-toast` 及 `sinle-ui` 部分 API 迁移至 `sn-native`
- 移除 `sn-e-toast` 插件，其所有 API 已迁移至 `sn-native`
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
* 【重要】新增 所有组件的颜色、圆角、字体大小、动画时长等支持使用 $ 变量，和文档[简写表达式](http://sinleui.pages.dev/components/#%E7%89%B9%E6%AE%8A%E5%80%BC)一样的体验。如输入`$primary` 直接映射到 `$snui.colors.primary`
* 【重要】调整 所有组件 `aniTime` 属性类型改为 String ，支持 $ 变量，如需自行输入请带单位（`ms`）
* 【重要】优化 所有组件属性处理底层逻辑
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
