# Tree  树形选择

## 基础用法

- 树形结构数据的选择与浏览组件，v-model 绑定选中节点 id 数组（String[]）。
- 两种选择模式：`checkable` 为 false 时点击行选中（选中行高亮背景 + 主色文字 + 左侧竖线），展开/收起靠点击展开箭头；`checkable` 为 true 时每行显示复选框，点击复选框选择、点击行展开/收起。
- `multiple` 控制单选/多选（多选默认开启）；`cascade` 级联模式下只保存叶子节点 id，父级复选框显示全选/半选状态，点击父级会选中/取消其下全部可选叶子。
- 支持 `lazy` 异步节点：配合 `loadData` 逐层加载子级，展开时在展开箭头位置显示 loading。
- 支持 `prefix` / `suffix` 插槽与节点级图标、旋转角度覆盖，样式可通过 externalStyle / externalClass 完全定制。

```vue
<template>
	<sn-tree v-model="value" :data="data" checkable cascade :default-expanded-ids="['docs']"></sn-tree>
</template>
```

**更多演示请下载 demo 查看**

## 进阶用法

### 异步加载

```vue
<template>
	<sn-tree v-model="value" :data="data" checkable cascade :load-data="loadData" @load-error="onLoadError"></sn-tree>
</template>
<script lang="uts" setup>
	function loadData(item: SnTreeItem, resolve: SnTreeLoadResolve, reject: SnTreeLoadReject): void {
		requestChildren(item.id).then((children: SnTreeData) => {
			resolve(children)
		}).catch(() => {
			reject()
		})
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 选中节点 id 数组（cascade 模式下仅包含叶子节点 id） | String[] | `[]` | - |
| data | 树形数据源 | SnTreeData | `[]` | - |
| checkable | 是否显示复选框（false 时为行高亮选中） | Boolean | `false` | `true \| false` |
| multiple | 是否多选（false 时始终最多保留一个 id） | Boolean | `true` | `true \| false` |
| cascade | 是否级联选择（多选下父级显示全选/半选，值只存叶子 id） | Boolean | `false` | `true \| false` |
| selectable | 行是否可选中（false 且 checkable 为 false 时点击整行仅展开/收起） | Boolean | `true` | `true \| false` |
| disableParentSelection | 是否禁止选中父节点（开启后父节点不显示复选框） | Boolean | `false` | `true \| false` |
| defaultExpandedIds | 默认展开的节点 id 数组 | String[] | `[]` | - |
| loadData | 异步加载子级数据的函数（item 为 lazy 节点，通过 resolve/reject 返回子级） | SnTreeLoadData | `null` | - |
| icon | 展开开关图标名（收起态） | String | `arrow-right-s-line` | - |
| activeIcon | 展开开关图标名（展开态） | String | `arrow-right-s-line` | - |
| rotate | 展开时开关图标旋转角度（deg） | Number | `90` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| customClass | 自定义根节点外部样式类 | String | - | - |
| itemStyle | 自定义节点行样式 | UTSJSONObject \| String | - | - |
| itemClass | 外部样式类 | String | - | - |
| lineStyle | 自定义选中指示竖线样式 | UTSJSONObject \| String | - | - |
| lineClass | 外部样式类 | String | - | - |
| arrowStyle | 自定义展开开关容器样式 | UTSJSONObject \| String | - | - |
| arrowClass | 外部样式类 | String | - | - |
| checkboxStyle | 自定义复选框样式 | UTSJSONObject \| String | - | - |
| checkboxClass | 外部样式类 | String | - | - |
| textStyle | 自定义节点文字样式 | UTSJSONObject \| String | - | - |
| textClass | 外部样式类 | String | - | - |
| selectedTextStyle | 自定义选中节点文字样式 | UTSJSONObject \| String | - | - |
| selectedTextClass | 外部样式类 | String | - | - |

:::type-fields SnTreeData

树形数据集合，即 `sn-tree` 的 `data` 属性类型。

| 类型 | 说明 |
| :--- | :--- |
| [[SnTreeItem]][] | 树节点列表 |

:::
:::type-fields SnTreeLoadData

懒加载回调类型：

| 类型 | 签名 |
| :--- | :--- |
| SnTreeLoadResolve | (children: [[SnTreeData]]) => void |
| SnTreeLoadReject | () => void |
| SnTreeLoadData | (item: [[SnTreeItem]], resolve: SnTreeLoadResolve, reject: SnTreeLoadReject) => void |

`sn-tree` 的 `load-data` 属性接收 `SnTreeLoadData` 函数：懒加载节点展开时调用，加载成功经 `resolve(children)` 返回子节点，失败调用 `reject()`。

---

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: String[], item: [[SnTreeItem]]) => Void | 选中值变化时触发，`value` 为最新 id 数组，`item` 为本次操作的节点 |
| expand | (item: [[SnTreeItem]], expanded: Boolean) => Void | 节点展开/收起时触发 |
| load-error | (item: [[SnTreeItem]]) => Void | 异步加载子级失败时触发 |

:::type-fields SnTreeItem

树节点数据。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 是 | 节点唯一 id |
| text | String | 是 | 节点显示文本 |
| icon | String | 否 | 节点图标名 |
| activeIcon | String | 否 | 选中态图标名 |
| rotate | Number | 否 | 图标展开旋转角度（deg） |
| disabled | Boolean | 否 | 是否禁用节点 |
| lazy | Boolean | 否 | 是否懒加载子节点（配合 `load-data`） |
| children | [[SnTreeItem]][] | 否 | 子节点列表 |

:::type-fields SnTreeItem

树节点数据。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| id | String | 是 | 节点唯一 id |
| text | String | 是 | 节点显示文本 |
| icon | String | 否 | 节点图标名 |
| activeIcon | String | 否 | 选中态图标名 |
| rotate | Number | 否 | 图标展开旋转角度（deg） |
| disabled | Boolean | 否 | 是否禁用节点 |
| lazy | Boolean | 否 | 是否懒加载子节点（配合 `load-data`） |
| children | [SnTreeItem](/api/types/component#sntreeitem)[] | 否 | 子节点列表 |

:::

:::

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| expand | id: String | - | 展开指定节点 |
| collapse | id: String | - | 收起指定节点 |

## 插槽

| 名称 | 说明 | 作用域参数 |
| --- | --- | --- |
| prefix | 节点文字前插入自定义内容 | item: [[SnTreeItem]] |
| suffix | 节点文字后插入自定义内容 | item: [[SnTreeItem]] |

## 类型

### SnTreeData

`SnTreeItem[]`：树形数据源。

### SnTreeLoadData

`(item: SnTreeItem, resolve: SnTreeLoadResolve, reject: SnTreeLoadReject) => Void`：异步加载函数，`resolve(children)` 返回子级数据，`reject()` 表示加载失败。
