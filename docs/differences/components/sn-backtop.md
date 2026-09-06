# sn-backtop
> 旧版组件：sn-backtop.md
**旧版状态**：v1.1.6 已有回到顶部按钮，支持图标/形状/主题/等级/尺寸/位置/禁用等属性，自动绑定同级或父级 `sn-scroll`/`sn-longlist`/`sn-page`（不可用作 `sn-longlist` 子节点）。
**差异明细**：

- 新增属性：
  - `target`（显式绑定目标：滚动容器组件 ref 名或元素 id/选择器，旧版仅支持自动绑定）
  - `customClass` / `externalClass`（按钮外部样式类）
  - `externalStyle`（额外内联样式）
- 更名：无
- 类型或默认值变化：
  - `zIndex` 默认值：`$floatButton` → `991`
  - `aniTime` 默认值：`$normal` → 空串（内部回退框架标准动画时长，行为不变）；类型 String → String | Number
  - `size` 类型：String → String | Number
  - `iconSize` 默认值：未设置 → 空串（内部回退 20px × 字体乘数）；类型 String → String | Number
  - `iconColor` 默认值：未设置 → 空串（内部按 `type` / `level` 配色矩阵推导，禁用时使用禁用色）
  - `bgColor` / `iconColor` 类型：String → String
  - `customStyle` 类型：UTSJSONObject → UTSJSONObject | String
- 行为变化：
  - 自动绑定容器范围扩大：`sn-scroll`/`sn-longlist`/`sn-page` → `sn-scroll-view`/`sn-list-view`/`sn-waterflow`/`sn-page`，且优先经容器内部 provide/inject 机制同步滚动位置（绑定目标为 ref 名时经 `registerBacktop` 注册回调）
  - 定位方式自适应：绑定 `sn-page`（页面级滚动）时 `fixed` 定位，绑定容器内滚动时 `absolute` 定位
  - 按钮显隐增加透明度 + 缩放过渡动画，并带按压点击态与主题阴影
  - 禁用时按钮背景/图标使用主题禁用色（Web 端 `cursor: not-allowed`）
- 新增事件：`click`（点击按钮时触发，禁用时不触发）
- 新增方法、插槽：无
