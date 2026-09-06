# Steps 步骤条

> [查看 sn-steps 的 2.0 版本差异](/differences/components/sn-steps)

## 基础用法
- 步骤条，用于展示流程进度，由 sn-steps（容器）与 sn-step（步骤项）组合使用
- 支持横向 / 竖向（vertical）、圆点（default）/ 点状（dot）两种形态
- 支持点击切换（selectable）与当前步骤状态（status）
- 容器属性（尺寸、颜色、外部样式等）经 provide/inject 统一下发给各 sn-step

```vue
<template>
	<sn-steps v-model="current">
		<sn-step title="买家下单" content="等待商家确认"></sn-step>
		<sn-step title="商家接单" content="正在备货中"></sn-step>
		<sn-step title="交易完成" content="感谢您的购买"></sn-step>
	</sn-steps>
</template>
```

**更多演示请下载 demo 查看**

## 点状步骤条

`type` 设为 `dot` 使用小圆点的简略模式。

```vue
<template>
	<sn-steps v-model="current" type="dot">
		<sn-step title="提交订单"></sn-step>
		<sn-step title="付款成功"></sn-step>
		<sn-step title="确认收货"></sn-step>
	</sn-steps>
</template>
```

## 竖向步骤条

`vertical` 属性改为纵向排列，适合物流详情等场景。

```vue
<template>
	<sn-steps v-model="current" vertical>
		<sn-step title="包裹已下单" content="08月26日 10:24"></sn-step>
		<sn-step title="运输中" content="08月26日 15:47"></sn-step>
		<sn-step title="已签收"></sn-step>
	</sn-steps>
</template>
```

## 自定义样式

`active-color` 定制激活色，`circle-size` / `text-size` / `content-size` 定制尺寸，`title-style` / `title-class` 等外部样式/类定制各部分。

```vue
<template>
	<sn-steps v-model="current" active-color="$success" circle-size="$28px"
		title-style="font-weight:normal;" content-class="my-content">
		<sn-step title="已支付" content="08月25日"></sn-step>
		<sn-step title="已发货" content="08月26日"></sn-step>
	</sn-steps>
</template>
```

## sn-steps 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 当前步骤索引 | Number | `0` | - |
| vertical | 是否竖向排列 | Boolean | `false` | `true` \| `false` |
| type | 展示形态 | String | `'default'` | `default` \| `dot` |
| status | 当前步骤（激活步骤）的状态 | String | `'process'` | `wait` \| `finish` \| `process` \| `error` |
| selectable | 是否允许点击步骤切换 | Boolean | `true` | `true` \| `false` |
| activeColor | 激活色，为空时取主题 `$primary` | String | `''` | - |
| circleSize | 圆形节点大小 | String \| Number | `'$22'` | - |
| textSize | 标题文字大小，为空时 14 × fontsizeFactor | String \| Number | `''` | - |
| contentSize | 内容文字大小，为空时 12 × fontsizeFactor | String \| Number | `''` | - |
| stepStyle | 自定义步骤项样式 | UTSJSONObject \| String | `''` | - |
| stepClass | 步骤项外部样式类 | String | `''` | - |
| titleStyle | 自定义标题样式 | UTSJSONObject \| String | `''` | - |
| titleClass | 标题外部样式类 | String | `''` | - |
| contentStyle | 自定义内容样式 | UTSJSONObject \| String | `''` | - |
| contentClass | 内容外部样式类 | String | `''` | - |
| lineStyle | 自定义连接线样式 | UTSJSONObject \| String | `''` | - |
| lineClass | 连接线外部样式类 | String | `''` | - |
| customStyle | 自定义容器样式 | UTSJSONObject \| String | `''` | - |
| customClass | 容器外部样式类 | String | `''` | - |

## sn-steps 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: number) => Void | 步骤改变时触发 |

## sn-steps 插槽

| 名称 | 说明 |
| --- | --- |
| default | 放置 sn-step 步骤项 |

## sn-step 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 步骤标题 | String | `''` | - |
| content | 步骤内容 | String | `''` | - |
| icon | 自定义图标名，不传时 finish 显示 check-line、error 显示 close-line | String | `''` | - |
| status | 单独覆盖该步骤的状态，为空时由索引与容器 status 自动推导 | String | `''` | `wait` \| `finish` \| `process` \| `error` |
| stepClass | 步骤项外部样式类（与容器的 stepClass 合并） | String | `''` | - |
| titleClass | 标题外部样式类（与容器的 titleClass 合并） | String | `''` | - |
| contentClass | 内容外部样式类（与容器的 contentClass 合并） | String | `''` | - |
| lineClass | 连接线外部样式类（与容器的 lineClass 合并） | String | `''` | - |

## sn-step 插槽

| 名称 | 说明 |
| --- | --- |
| icon | 替换圆形节点内容，作用域插槽可访问当前状态 status |
| title | 替换标题内容 |
| content | 替换内容区文本 |
| extra | 在内容区底部追加额外内容 |

<DemoPhone name="sn-steps" />
