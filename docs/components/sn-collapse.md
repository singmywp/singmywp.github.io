# Collapse 折叠面板

## 基础用法

- 通过折叠面板收纳内容区域。

```vue
<template>
	<sn-collapse-group>
			<sn-collapse-item title="子项 1">
				<sn-text text="文本1"></sn-text>
			</sn-collapse-item>
			<sn-collapse-item title="子项 2">
				<sn-text text="文本2"></sn-text>
			</sn-collapse-item>
			<sn-collapse-item title="子项 3">
				<sn-text text="文本3"></sn-text>
			</sn-collapse-item>
	</sn-collapse-group>
</template>
```

**更多演示请下载 demo 查看**

## 属性

**sn-collapse-group**

| 参数              | 说明                           | 类型            | 默认值     | 可选值            |
| :---------------- | :----------------------------- | :-------------- | :--------- | :---------------- |
| accordion         | 是否开启手风琴模式             | Boolean       | `false`    | `true` \| `false` |
| aniTime            | 动画时长（单位 `ms`）          | Number        | `$normal`  | -                 |
| bgColor           | 折叠面板背景颜色               | String        | `$front`   | -                 |
| titleSize         | 折叠面板子项标题字体大小       | String        | `$3`       | -                 |
| titleColor        | 折叠面板子项标题颜色           | String        | `$title`   | -                 |
| activeTitleColor  | 折叠面板已打开的子项标题颜色   | String        | `$primary` | -                 |
| customStyle       | 自定义折叠面板样式             | UTSJSONObject | `{}`       | -                 |
| customTitleStyle  | 自定义折叠面板子项标题样式     | UTSJSONObject | `{}`       | -                 |
| customHolderStyle | 自定义折叠面板子项内部容器样式 | UTSJSONObject | `{}`       | -                 |

**sn-collapse-item**

| 参数        | 说明                   | 类型            | 默认值  | 可选值            |
| :---------- | :--------------------- | :-------------- | :------ | :---------------- |
| title       | 折叠面板子项标题       | String        | -       | -                 |
| icon        | 折叠面板子项图标       | String        | -       | -                 |
| open        | 初始状态是否展开       | Boolean       | `false` | `true` \| `false` |
| border      | 是否显示分割线         | Boolean       | `true`  | `true` \| `false` |
| disabled    | 是否禁用               | Boolean       | `false` | `true` \| `false` |
| customStyle | 自定义折叠面板子项样式 | UTSJSONObject | `{}`    | -                 |

## 插槽

**sn-collapse-group**

| 名称    | 说明                                |
| :------ | :---------------------------------- |
| default | 在这里放置子组件 `sn-collapse-item` |

**sn-collapse-item**

| 名称    | 说明                           |
| :------ | :----------------------------- |
| default | 折叠面板子项内部放置收纳内容。 |


<DemoPhone name="sn-collapse" />

