# Modal 模态框
## 基础用法
- 用于创建弹出层，显示信息或进行交互。
- 提供多种样式和交互方式。
- 如果需要对话框，那么官方的 uni.showModal 应该足以满足你的需求。当你需要更自由地控制动画、插槽时，不妨试试本组件。
```vue
<template>
  <sn-modal title="标题" content="内容"></sn-modal>
</template>
```
**更多演示请下载 demo 查看**

## 属性
| 参数             | 说明             | 类型          | 默认值              | 可选值                                             |
| ---------------- | ---------------- | ------------- | ------------------- | -------------------------------------------------- |
| title            | 模态框标题       | String        | -                   | -                                                  |
| titleAlign       | 标题对齐方式     | String        | `center`            | `left` \| `center` \| `right`                      |
| titleSize        | 标题字体大小     | String        | `$3+1`              | -                                                  |
| titleFont        | 标题字体样式     | String        | `misans-semibold`   | -                                                  |
| titleColor       | 标题颜色         | String        | `$title`            | -                                                  |
| bgColor          | 背景颜色         | String        | `$front`            | -                                                  |
| content          | 模态框内容       | String        | -                   | -                                                  |
| contentAlign     | 内容对齐方式     | String        | `center`            | `left` \| `center` \| `right`                      |
| contentSize      | 内容字体大小     | String        | `$2+1`              | -                                                  |
| contentColor     | 内容颜色         | String        | `$text`             | -                                                  |
| contentFont      | 内容字体样式     | String        | `misans-normal`     | -                                                  |
| buttonType       | 按钮类型         | String        | `embed`             | `embed` \| `float`                                 |
| buttonBorder     | 按钮边框样式     | String        | `0.5px solid $line` | -                                                  |
| confirmText      | 确定按钮文本     | String        | `确定`              | -                                                  |
| confirmTextColor | 确定按钮文本颜色 | String        | `$primaryDark`      | -                                                  |
| confirmTextSize  | 确定按钮文本大小 | String        | `$3`                | -                                                  |
| showCancel       | 是否显示取消按钮 | Boolean       | `true`              | `true` \|`false`                                   |
| showConfirm      | 是否显示确定按钮 | Boolean       | `true`              | `true` \|`false`                                   |
| cancelText       | 取消按钮文本     | String        | `取消`              | -                                                  |
| cancelTextColor  | 取消按钮文本颜色 | String        | `$text`             | -                                                  |
| cancelTextSize   | 取消按钮文本大小 | String        | `$3`                | -                                                  |
| position         | 弹出位置         | String        | `center`            | `center` \| `top` \| `bottom` \| `left` \| `right` |
| aniTime           | 动画持续时间     | String        | `350ms`               | -                                                  |
| maskClose        | 点击蒙层是否关闭 | Boolean       | `false`             | `true` \| `false`                                  |
| disabled         | 是否禁用         | Boolean       | `false`             | `true` \| `false`                                  |
| preventBack      | 是否阻止返回事件 | Boolean       | `false`             | `true` \| `false`                                  |
| maskOpacity      | 遮罩层透明度     | Number        | `0.4`               | -                                                  |
| customStyle      | 自定义模态框样式 | UTSJSONObject | `{}`                  | -                                                  |

## 插槽

| 名称    | 说明             |
| :------ | :--------------- |
| header  | 替换标题内容     |
| content | 替换内容区域     |
| actions | 替换操作按钮区域 |

## 方法

| 名称  | 参数 | 返回值 | 描述       |
| :---- | :--- | :----- | :--------- |
| open  | -    | -      | 打开模态框 |
| close | -    | -      | 关闭模态框 |

<DemoPhone name="sn-modal" />