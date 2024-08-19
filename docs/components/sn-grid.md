# Grid 宫格布局

## 基本使用

- 一般用于同时展示多个同类项目

```vue
<template>
	<sn-grid-group>
    	<sn-grid-item>
      		<sn-text text="项目1"></sn-text>
  		</sn-grid-item>
   		<sn-grid-item>
      		<sn-text text="项目2"></sn-text>
  		</sn-grid-item>
   		<sn-grid-item>
      		<sn-text text="项目3"></sn-text>
  		</sn-grid-item>
   		<sn-grid-item>
      		<sn-text text="项目4"></sn-text>
  		</sn-grid-item>
	</sn-grid-group>
</template>
```

**更多演示请下载 demo 查看**

## 属性

**sn-grid-group**

| 参数        | 说明                           | 类型          | 默认值 | 可选值                        |
| :---------- | :----------------------------- | :------------ | :----- | :---------------------------- |
| col         | 宫格布局列数                   | Number        | `4`    | -                             |
| align       | 宫格布局子项不完全时的对齐方式 | String        | `left` | `left` \| `center` \| `right` |
| customStyle | 自定义宫格布局样式             | UTSJSONObject | `{}`   | -                             |

**sn-grid-item**

| 参数        | 说明                   | 类型          | 默认值 | 可选值 |
| :---------- | :--------------------- | :------------ | :----- | :----- |
| bgColor     | 宫格布局背景颜色       | String        | -      | -      |
| customStyle | 自定义宫格布局子项样式 | UTSJSONObject | `{}`   | -      |

## 插槽

**sn-grid-group**

| 名称    | 说明                            |
| :------ | :------------------------------ |
| default | 在这里放置子组件 `sn-grid-item` |

**sn-grid-item**

| 名称    | 说明                       |
| :------ | :------------------------- |
| default | 宫格布局子项内部放置内容。 |


<DemoPhone name="sn-grid" />