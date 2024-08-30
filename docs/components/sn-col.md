# Col 垂直布局

## 基础用法

- 用于快速设置栅格布局。
- 搭配 `sn-row` 组件使用更佳哦。

```vue
<template>
	<sn-row>
    	<sn-col :span="4">
        	<sn-text text="第一个"></sn-text>
  		</sn-col>
    	<sn-col :span="4">
        	<sn-text text="第二个"></sn-text>
  		</sn-col>
    	<sn-col :span="4">
        	<sn-text text="第三个"></sn-text>
  		</sn-col>
  </sn-row>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数        | 说明                                              | 类型          | 默认值       | 可选值            |
| :---------- | :------------------------------------------------ | :------------ | :----------- | :---------------- |
| gutter      | 多个 `sn-col` 之间的间距                          | String        | `0px`        | -                 |
| span        | 占用栅格数（共 12 栅格，随意分配）                | Number        | `12`         | -                 |
| align       | 侧轴子元素排列方式（flex布局中的align-items）     | String        | `flex-start` | -                 |
| justify     | 主轴子元素排列方式（flex布局中的justify-content） | String        | `center`     | -                 |
| wrap        | 是否换行（flex布局中的 flex-wrap）                | Boolean       | `false`      | `true` \| `false` |
| customStyle | 自定义垂直布局样式                                | UTSJSONObject | `{}`         | -                 |

## 插槽

| 名称    | 说明                       |
| :------ | :------------------------- |
| default | 垂直布局内部包裹主体组件。 |

<DemoPhone name="sn-col" />