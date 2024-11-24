# Float Board 浮动面板

## 基础用法

- 通常用于半屏窗口的场景。
- 请注意区分  `sn-drawer`和 `sn-float-board`。 `sn-drawer`是弹出层，需要调用方法才能显示；而  `sn-float-board` 则始终显示，且可以通过用户手势操作完全显露。（可以把  `sn-drawer` 理解为关闭的浮动面板， `sn-float-board` 则是半开的浮动面板）

``` vue
<template>
	<sn-float-board></sn-float-board>
</template>
```



**更多演示请下载 demo 查看**

## 属性

| 参数         | 说明                                                      | 类型            | 默认值                | 可选值                                 |
| ------------ | --------------------------------------------------------- | --------------- | --------------------- | -------------------------------------- |
| position     | 浮动面板显示的位置                                        | String        | `bottom`              | `top` \| `right` \| `bottom` \| `left` |
| showLine     | 是否显示指示条                                            | Boolean       | `true`                | `true` \| `false`                      |
| maxWidth   | 当 `position` 为 `left` \| `right` 且展开时浮动面板的宽度 | String        | `300px`               | -                                      |
| minWidth    | 当 `position` 为 `left` \| `right` 且折叠时浮动面板的宽度 | String        | `50px`                | -                                      |
| maxHeight   | 当 `position` 为 `top` \| `bottom` 且展开时浮动面板的宽度 | String        | `300px`               | -                                      |
| minHeight   | 当 `position` 为 `top` \| `bottom` 且折叠时浮动面板的宽度 | String        | `50px`                | -                                      |
| slideHeight  | 浮动面板纵向滑动阈值（达到阈值则折叠或展开）              | String        | `100px`               | -                                      |
| slideWidth   | 浮动面板横向滑动阈值（达到阈值则折叠或展开）              | String        | `100px`               | -                                      |
| bgColor      | 浮动面板的背景颜色                                        | String        | `$front`              | -                                      |
| lineColor    | 浮动面板指示条颜色                                        | String        | `$lineText`           | -                                      |
| padding      | 浮动面板内边距                                            | String        | `25px 15px 10px 15px` | -                                      |
| borderRadius | 浮动面板圆角大小                                          | String        | `$xlarge`             | -                                      |
| aniTime       | 浮动面板展开/折叠动画时长                    | String        | `$long`               | -                                      |
| disabled     | 是否禁用滑动手势                                          | Boolean       | `false`               | `true` \| `false`                      |
| customStyle  | 自定义浮动面板样式                                        | UTSJSONObject | `{}`                  | -                                      |

## 插槽

| 名称    | 说明                   |
| :------ | :--------------------- |
| default | 在浮动面板内部放置组件 |

## 事件

| 名称   | 类型         | 说明               |
| ------ | ------------ | ------------------ |
| unfold | () => Void | 展开浮动面板时触发 |
| fold   | () => Void | 折叠浮动面板时触发 |

## 方法

| 名称   | 参数 | 返回值 | 描述         |
| :----- | :--- | :----- | :----------- |
| unfold | -    | -      | 展开浮动面板 |
| fold   | -    | -      | 折叠浮动面板 |

<DemoPhone name="sn-float-board" />