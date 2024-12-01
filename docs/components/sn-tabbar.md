# Tabbar  底部导航栏

## 基础用法

* 支持字体图标、图片，样式自由可调，可以设置角标
* 支持拦截鉴权，详见 Demo
* 最大支持5个子项

::: code-group
```vue [template]
<template>
	<sn-page padding="0"
	:scroll-on="false">
		<sn-tabbar :data="data">
			<template #1>
				<sub1></sub1>
			</template>
			<template #2>
				<sub2></sub2>
			</template>
			<template #3>
				<sub3></sub3>
			</template>
			<template #4>
				<sub4></sub4>
			</template>
		</sn-tabbar>
	</sn-page>
</template>
```
```typescript [script]
import { $snui, SnTabbarItem } from `@/uni_modules/sinle-ui`
import Sub1 from `./sub1.uvue`
import Sub2 from `./sub2.uvue`
import Sub3 from `./sub3.uvue`
import Sub4 from `./sub4.uvue`
	
const data = [
	{
		icon: `home-5-line`,
		text: `首页`,
		activeIcon: `home-5-fill`
	},
	{
		icon: `community-line`,
		text: `社区`,
    	activeIcon: `community-fill`,
	},
	{
		icon: `message-3-line`,
		text: `消息`,
		activeIcon: `message-3-fill`,
	},
	{
		icon: `user-3-line`,
		text: `我的`,
		activeIcon: `user-3-fill`,
	}
] as SnTabbarItem[]
```

:::

**更多演示请下载 demo 查看**

## 使用方法

::: danger 重要说明

每个子页面必须导入到放置 `sn-tabbar` 的页面，如上示例。

因为导入的子页面是**作为组件**使用，是**绝对不可以**在 `pages.json` 注册的！！！否则会报错。如果创建新的子页面，在 HBuilderX 创建页面时不要勾选下方的“在 pages.json 注册” 。如果页面已经注册，请前往 `pages.json` 文件删除此页面。

:::

## 占位高度

由于种种不便，本组件不内置占位组件，可根据组件的 `v-model:height` 属性绑定占位高度，自行放置 `sn-gap` 组件实现占位。

```vue
<template>
	<sn-page>
		<sn-gap :height="tabbarHeight"></sn-gap>
		<sn-tabbar v-model:height="tabbarHeight"
		:data="data">
		</sn-tabbar>
	</sn-page>
</template>

<script setup>
	// 底部导航栏占位高度，禁止手动修改此对象
	const tabbarHeight = ref('0px')
	// 开发者自行配置的底部导航栏数据
	const data = [...] as SnTabbarItem[]
</script>

```



## 属性

| 参数               | 说明                                                                                 | 类型                                                        | 默认值         | 可选值            |
| ------------------ | ------------------------------------------------------------------------------------ | ----------------------------------------------------------- | -------------- | ----------------- |
| v-model:height     | 对外输出底部导航栏占位高度，禁止手动修改绑定此属性的变量                             | String                                                      | -              | -                 |
| data               | 底部导航栏数据，每一项都需与插槽一 一匹配，最大10项                                   | Array\<[SnTabbarItem](/api/types/components#sntabbaritem)\> | `[]`           | -                 |
| index              | 首次加载时显示的页面索引（注意，索引从1开始一直到10，插槽名称也是一样）               | Number                                                      | `0`            | -                 |
| fixed              | 是否固定底部（一般开发不会用到此属性，除非你有 Demo 中那样的展示需求）               | Boolean                                                     | `true`         | `true` \| `false` |
| showPages          | 是否显示子页面（一般开发不会用到此属性，除非你有 Demo 中那样的展示需求）             | Boolean                                                     | `true`         | `true` \|`false`  |
| imageSize          | 子项图片大小                                                                         | String                                                      | `35px`         | -                 |
| padding            | 内边距                                                                               | String                                                      | `5px`          | -                 |
| margin             | 外边距                                                                               | String                                                      | `0px`          | -                 |
| bgColor            | 背景颜色                                                                             | String                                                      | `$front`       | -                 |
| itemBorderRadius   | 子项边框圆角大小（一般情况不需要设置，组件内部会根据导航栏圆角自动计算最合适的大小） | String                                                      | -              | -                 |
| itemPadding        | 子项内边距                                                                           | String                                                      | `0px`          | -                 |
| itemSpacing        | 各子项之间的间距                                                                     | String                                                      | `0px`          | -                 |
| itemBgColor        | 子项背景颜色                                                                         | String                                                      | `$transparent` | -                 |
| itemActiveBgColor  | 选中时子项的背景颜色                                                                 | String                                                      | `$transparent` | -                 |
| border             | 导航栏边框                                                                           | String                                                      | -              | -                 |
| borderRadius       | 导航栏圆角大小                                                                       | String                                                      | `0`            | -                 |
| textColor          | 子项文本颜色                                                                         | String                                                      | `$text`        | -                 |
| textSize           | 子项文本大小                                                                         | String                                                      | `$0`           | -                 |
| activeTextColor    | 选中时子项文本颜色                                                                   | String                                                      | `$primary`     | -                 |
| iconColor          | 子项图标颜色                                                                         | String                                                      | `$text`        | -                 |
| iconSize           | 子项图标大小                                                                         | String                                                      | `$4`           | -                 |
| activeIconColor    | 选中时子项图标颜色                                                                   | String                                                      | `$primary`     | -                 |
| disabled           | 是否禁用导航栏                                                                       | Boolean                                                     | `false`        | `true` \|`false`  |
| customStyle        | 自定义样式（仅导航栏）                                                               | UTSJSONObject                                               | `{}`           | -                 |
| customContainStyle | 自定义容器样式（包含子页面和底部导航栏）                                             | UTSJSONObject                                               | `{}`           | -                 |

## 插槽

::: tip 注意

页面的索引从1开始一直到10，插槽名称也是一样。

`data` 属性的子项必须和插槽一 一匹配，有多少个子项，就放多少个插槽。

Tabbar 同时最大只支持放置 10 个插槽，如需动态改变第 `n` 个插槽的页面，可通过 `v-if` 动态判断条件显示

:::

| 名称 | 说明         |
| ---- | ------------ |
| 1    | 第1个子页面  |
| 2    | 第2个子页面  |
| 3    | 第3个子页面  |
| 4    | 第4个子页面  |
| 5    | 第5个子页面  |
| 6    | 第6个子页面  |
| 7    | 第7个子页面  |
| 8    | 第8个子页面  |
| 9    | 第9个子页面  |
| 10   | 第10个子页面 |

## 方法

| 名称          | 参数            | 返回值 | 描述                                                         |
| ------------- | --------------- | ------ | ------------------------------------------------------------ |
| changeToIndex | (index: Number) | -      | 切换到指定索引的页面。索引值即为插槽名称（如\<template #1\>\</template\> 的索引值即为 1） |

## 事件

| 事件名       | 类型                     | 描述                     |
| ------------ | ------------------------ | ------------------------ |
| change       | (index: Number) => Void  | 页面切换时触发           |
| heightchange | (height: Number) => Void | 底部导航栏高度变化时触发 |



<DemoPhone name="sn-tabbar" />