# Toast  轻提示

> [查看 sn-toast 的 2.0 版本差异](/differences/components/sn-toast)

## 基础用法

- 轻提示（吐司），默认居中显示、2 秒后自动消失，可配置图标、加载状态、显示位置等
- 弹出层类组件，必须放在 `sn-page` 中使用（作为 `sn-page` 的子节点或页面根节点），组件依赖 `sn-page` 注入的 CSS 变量
- 通过 ref 绑定组件后调用方法使用：`show` 按组件 props 配置显示；`configShow` 传入参数临时覆盖 props 配置（缺省字段回退 props）；`close` 手动关闭
- 默认不拦截手势，提示期间仍可操作页面；开启 `overlay` 后显示透明遮罩防穿透
- `loading` 为 true 时显示加载图标且不自动关闭，需手动调用 `close`
- 与 API `snu.showToast` 的区别：组件需先放置到页面并用 ref 调用，但默认不拦截手势；API 只需 import 即可在任意页面使用

```vue
<template>
	<sn-page>
		<sn-button text="显示轻提示" type="primary" @click="show"></sn-button>
		<sn-toast ref="toastEle" text="这是一个提示信息"></sn-toast>
	</sn-page>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| text | 提示文本内容 | String | `''` | - |
| bgColor | 轻提示背景颜色，支持 `$` 简写主题色，空值时使用主题轻提示色 `$toast` | String | `''` | - |
| overlay | 是否显示透明遮罩（防穿透），开启后提示期间拦截底部页面点击 | Boolean | `false` | `true` \| `false` |
| position | 轻提示位置 | String | `center` | `top` \| `center` \| `bottom` |
| duration | 轻提示显示时长（ms），`loading` 为 true 时不自动关闭 | Number | `2000` | - |
| textSize | 提示文本字体大小，空值时为 `$14` | String \| Number | `''` | - |
| textColor | 提示文本颜色，支持 `$` 简写主题色，空值时为 `#fff` | String | `''` | - |
| borderRadius | 轻提示圆角大小，空值时为 `$12` | String \| Number | `''` | - |
| padding | 轻提示内边距，支持 `$` 前缀按间距乘数缩放 | String | `12px 15px` | - |
| icon | 提示图标名称（sn-icon 图标名） | String | `''` | - |
| iconSize | 图标大小，空值时为 `$20` | String \| Number | `''` | - |
| iconColor | 图标颜色，支持 `$` 简写主题色，空值时为 `#fff` | String | `''` | - |
| textAlign | 文本对齐方式 | String | `center` | `left` \| `center` \| `right` |
| loading | 是否显示加载中图标（旋转 loading 圈） | Boolean | `false` | `true` \| `false` |
| textLines | 文本最大行数，超长自动换行，`0` 不限制 | Number | `0` | - |
| customStyle | 自定义轻提示内容块样式 | UTSJSONObject \| String | `''` | - |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| show | - | - | 按组件 props 配置显示轻提示 |
| configShow | param: [[SnToastParams@api]] \| null | - | 按传入参数显示轻提示，参数缺省字段回退组件 props 配置，无需改动属性 |
| close | - | - | 关闭轻提示（`loading` 状态下必须通过此方法关闭） |

:::type-fields SnToastParams

`sn-toast` 组件参数型轻提示的配置，见[组件类型](/api/types/component#sntoastparams)。

:::

<DemoPhone name="sn-toast" />
