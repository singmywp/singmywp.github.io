# sn-swipe-action
> 旧版组件：sn-swipe-action.md
**旧版状态**：旧版提供基础的左右滑动操作，具备 disabled / threshold / beforeClose 属性、open/close 事件与方法、default/left/right 插槽。
**差异明细**：
- 新增属性：`openThreshold`（String | Number，默认 `''`）：自定义松手吸附打开阈值，支持百分比（`20%`）、像素（`60px`）或数字（按 px 处理），为空时按旧的 `threshold` 比例计算
- 新增属性：`customStyle`（UTSJSONObject | String，默认 `''`）、`customClass`（String，默认 `''`）：根节点样式扩展（旧版未提供）
- 类型变化：`beforeClose` 由 `(direction: 'left' | 'right') => Promise<boolean>` 调整为 `((direction: string) => Promise<boolean>) | null`，并补充默认值 `null`；direction 取值仍为 `left` / `right`
- 行为变化：新增同页面多实例联动——打开一个滑动操作自动收起其他实例，点击任意内容区收起全部；旧版无此联动
- 行为变化：打开阈值由固定比例扩展为支持比例/像素/数字（配合 openThreshold）
- 行为变化：Web 端支持鼠标按住拖动（旧版仅触摸）
- 事件 `open` / `close`、方法 `open` / `close`、插槽 `default` / `left` / `right` 保持不变
