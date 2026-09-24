# Countto  数字滚动

> [查看 sn-countto 的 2.0 版本差异](/differences/components/sn-countto)

## 基础用法

- 数字从 `startVal` 滚动到 `endVal`，常用于数据大屏、经营数据展示等场景。
- 动画时长由 `duration`（单位 ms）控制，`easing` 可开启结束前减速的缓动效果。
- `decimals` 控制小数位数，`separate` 可按位数插入千分位式分隔符。

```vue
<template>
	<sn-countto :end-val="6666"></sn-countto>
</template>
```

**更多演示请下载 demo 查看**

## 分割数字

`separate` 设为非 0 值后，整数部分每隔几位会用 `,` 分隔（小数部分不受影响），常用于金融场景：

```vue
<template>
	<sn-countto :end-val="1000000" :separate="3"></sn-countto>
</template>
```

## 自定义样式

通过 `text-size` / `text-color` / `bold` 与 `custom-style` 定制数字文本表现：

```vue
<template>
	<sn-countto :end-val="7777" text-size="$30" text-color="$successDark" bold></sn-countto>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| startVal | 开始值，变化时自动重新播放 | Number | `0` | - |
| endVal | 结束值，变化时自动重新播放 | Number | `0` | - |
| duration | 动画时长（单位 ms） | Number | `2000` | - |
| decimals | 小数位数（大于 0 时滚动过程数字带随机跳动效果） | Number | `0` | - |
| separate | 分割位数（整数部分每隔几位插入一次 `,`，`0` 为不分割） | Number | `0` | - |
| autoplay | 初始化后自动播放 | Boolean | `true` | `true` \| `false` |
| easing | 以 easeOutSine 缓动动画代替默认的 linear 动画，使动画在结束前减速 | Boolean | `false` | `true` \| `false` |
| textSize | 数字文本字体大小，支持 `$` 动态尺寸 | String \| Number | `$14` | - |
| textColor | 数字文本颜色，支持 `$` 主题色简写 | String | `$text` | - |
| selectable | 文本是否可选中复制 | Boolean | `false` | `true` \| `false` |
| bold | 文本是否加粗 | Boolean | `false` | `true` \| `false` |
| textClass | 文本节点外部样式类 | String | `''` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| finish | () => Void | 动画播放完成时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| play | - | - | 播放动画（从当前进度继续） |
| pause | - | - | 暂停动画 |
| stop | - | - | 停止动画并直接显示 `endVal`，触发 `finish` 事件 |
| reset | - | - | 重置到 `startVal`，`autoplay` 为 `true` 时自动重新播放 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 自定义数字内容，接管内部文本渲染 |

<DemoPhone name="sn-countto" />
