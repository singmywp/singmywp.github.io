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
