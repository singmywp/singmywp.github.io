# Cascader  级联选择器

> [查看 sn-cascader 的 2.0 版本差异](/differences/components/sn-cascader)

## 基础用法

- 从底部弹出的多级联动选择器，基于 `sn-drawer` 封装，`children` 支持任意层级。
- 顶部导航条展示已选路径与占位项，支持点击导航回退层级，也支持左右滑动切换层级；导航条下划线随层级切换动画移动。
- 每次点选选项都会实时写入 v-model 并触发 `change` 事件（无确定按钮）；选中叶子节点后自动关闭。叶子判定规则：`leaf` 为 true、`children` 为空数组、或 `children` 为空且未配置 `loadData`。
- 支持两种数据源：静态传入 `data`，或配置 `loadData` 异步逐层加载（通过 `resolve` / `reject` 返回结果，加载中显示 loading 态，失败触发 `load-error`）。
- 打开时若 v-model 已有值，会自动按值回溯加载并定位到对应层级。
- 使用时需放在 `sn-page` 根节点下。

```vue
<template>
	<sn-cascader ref="cascaderEle" v-model="value" :data="data" title="请选择商品分类" @change="onChange"></sn-cascader>
</template>
```

**更多演示请下载 demo 查看**

## 进阶用法

### 异步加载

```vue
<template>
	<sn-cascader ref="cascaderEle" v-model="value" :load-data="loadData" @load-error="onLoadError"></sn-cascader>
</template>
<script lang="uts" setup>
	function loadData(parent: SnCascaderOption | null, level: number, resolve: SnCascaderResolve, reject: SnCascaderReject): void {
		if (parent == null) {
			resolve(rootOptions)
			return
		}
		requestChildren(parent.value, level).then((options: SnCascaderOption[]) => {
			resolve(options)
		}).catch(() => {
			reject()
		})
	}
</script>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 当前选中的值路径（各级 option 的 value 数组） | SnCascaderValue | `[]` | - |
| data | 级联数据源（静态数据，children 任意嵌套） | SnCascaderOption[] | `[]` | - |
| loadData | 异步加载子级数据的函数，通过 resolve/reject 返回该层结果 | SnCascaderLoadData | `null` | - |
| disabled | 是否禁用（禁用后无法打开，所有选项视为禁用） | Boolean | `false` | `true \| false` |
| height | 弹出层整体高度 | String \| Number | `470px` | - |
| title | 标题 | String | `请选择` | - |
| titleSize | 标题字号 | String \| Number | `$17` | - |
| placeholder | 未选层级在导航条上的占位文字 | String | `请选择` | - |
| loadingText | 加载中提示文字 | String | `加载中` | - |
| emptyText | 无数据提示文字 | String | `暂无数据` | - |
| navTextSize | 导航条文字字号 | String \| Number | `$15` | - |
| stateTextSize | 加载中/空状态提示文字字号 | String \| Number | `$13` | - |
| loadingIconSize | 加载图标大小 | String \| Number | `$22` | - |
| closeIconSize | 关闭图标大小 | String \| Number | `$22` | - |
| showClose | 是否显示右上角关闭按钮 | Boolean | `true` | `true \| false` |
| showScrollbar | 选项列表是否显示滚动条 | Boolean | `true` | `true \| false` |
| itemBorder | 选项之间是否显示分隔线 | Boolean | `false` | `true \| false` |
| navMode | 导航条下划线切换动画方式：swipe 平移滑动，push 挤压伸展 | String | `swipe` | `swipe \| push` |
| maskClose | 是否可以通过点击蒙层关闭 | Boolean | `true` | `true \| false` |
| maskOpacity | 蒙层透明度 | Number | `0.4` | `0~1` |
| preventBack | 是否阻止返回键/返回手势关闭 | Boolean | `false` | `true \| false` |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | - | - |
| customClass | 自定义根节点外部样式类 | String | - | - |
| headerStyle | 自定义标题栏样式 | UTSJSONObject \| String | - | - |
| headerClass | 外部样式类 | String | - | - |
| titleStyle | 自定义标题样式 | UTSJSONObject \| String | - | - |
| titleClass | 外部样式类 | String | - | - |
| closeStyle | 自定义关闭按钮样式 | UTSJSONObject \| String | - | - |
| closeClass | 外部样式类 | String | - | - |
| navStyle | 自定义导航条容器样式 | UTSJSONObject \| String | - | - |
| navClass | 外部样式类 | String | - | - |
| navItemStyle | 自定义导航项样式 | UTSJSONObject \| String | - | - |
| navItemClass | 外部样式类 | String | - | - |
| navTextStyle | 自定义导航项文字样式 | UTSJSONObject \| String | - | - |
| navTextClass | 外部样式类 | String | - | - |
| activeNavTextStyle | 自定义当前层级导航项文字样式 | UTSJSONObject \| String | - | - |
| activeNavTextClass | 外部样式类 | String | - | - |
| listStyle | 自定义选项列表样式 | UTSJSONObject \| String | - | - |
| listClass | 外部样式类 | String | - | - |
| optionStyle | 自定义选项样式 | UTSJSONObject \| String | - | - |
| optionClass | 外部样式类 | String | - | - |
| optionTextStyle | 自定义选项文字样式 | UTSJSONObject \| String | - | - |
| optionTextClass | 外部样式类 | String | - | - |
| activeOptionTextStyle | 自定义选中选项文字样式 | UTSJSONObject \| String | - | - |
| activeOptionTextClass | 外部样式类 | String | - | - |
| optionIconStyle | 自定义选项图标样式 | UTSJSONObject \| String | - | - |
| optionIconClass | 外部样式类 | String | - | - |
| activeOptionIconStyle | 自定义选中选项对钩图标样式 | UTSJSONObject \| String | - | - |
| activeOptionIconClass | 外部样式类 | String | - | - |

:::type-fields SnCascaderValue

```typescript
type SnCascaderValue = string[]
```

级联选中值：各级选项 `value` 组成的数组（`v-model`）。

:::
:::type-fields SnCascaderOption

级联选项。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| value | String | 是 | 选项值 |
| label | String | 是 | 选项显示文本 |
| disabled | Boolean | 否 | 是否禁用 |
| leaf | Boolean | 否 | 是否叶子节点（懒加载模式下标记不再展开） |
| children | [[SnCascaderOption]][] | 否 | 子级选项列表 |



:::
:::type-fields SnCascaderLoadData

懒加载回调类型：

```typescript
type SnCascaderResolve = (options: SnCascaderOption[]) => void
type SnCascaderReject = () => void
type SnCascaderLoadData = (parent: SnCascaderOption | null, level: number, resolve: SnCascaderResolve, reject: SnCascaderReject) => void
```

`sn-cascader` 的 `load-data` 属性接收 `SnCascaderLoadData` 函数：`parent` 为 `null` 表示加载第一级，`level` 为当前层级；成功经 `resolve(options)` 返回选项列表，失败调用 `reject()`。

---

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: [[SnCascaderValue]], detail: [[SnCascaderDetail]]) => Void | 点选选项后触发，v-model 同步更新 |
| select | (value: [[SnCascaderValue]], detail: [[SnCascaderDetail]]) => Void | 点选选项后触发（与 change 同时触发） |
| cancel | () => Void | 点击关闭按钮时触发 |
| load | (parent: [[SnCascaderOption]] \| null, level: Number, options: [[SnCascaderOption]][]) => Void | 异步加载成功后触发 |
| load-error | (parent: [[SnCascaderOption]] \| null, level: Number) => Void | 异步加载失败时触发 |
| open | () => Void | 弹出层打开后触发 |
| close | () => Void | 弹出层关闭后触发 |
| clickoverlay | () => Void | 点击蒙层时触发 |
| beforeenter | () => Void | 进入动画开始前触发 |
| enter | () => Void | 进入动画开始时触发 |
| afterenter | () => Void | 进入动画结束后触发 |
| beforeleave | () => Void | 离开动画开始前触发 |
| leave | () => Void | 离开动画开始时触发 |
| afterleave | () => Void | 离开动画结束后触发 |

:::type-fields SnCascaderDetail

`change` 事件返回的详情。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| values | String[] | 是 | 各级选中值 |
| labels | String[] | 是 | 各级选中文本 |
| options | [[SnCascaderOption]][] | 是 | 各级选中的选项对象 |

:::

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开级联选择器（重置路径并按 v-model 回溯定位） |
| close | - | - | 关闭级联选择器 |

## 类型

### SnCascaderOption

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| value | String | 选项唯一值（必填） |
| label | String | 选项显示文字（必填） |
| icon | String | 选项前置图标名 |
| disabled | Boolean | 是否禁用该选项 |
| leaf | Boolean | 是否为叶子节点（为 true 时选中后直接关闭） |
| children | [[SnCascaderOption]][] | 子级选项 |

### SnCascaderValue

`String[]`：选中路径上各级选项的 `value` 数组。

### SnCascaderDetail

| 字段 | 类型 | 描述 |
| --- | --- | --- |
| values | String[] | 选中路径各级 value |
| labels | String[] | 选中路径各级 label |
| options | [[SnCascaderOption]][] | 选中路径各级选项对象 |

### SnCascaderLoadData

`(parent: SnCascaderOption | null, level: Number, resolve: SnCascaderResolve, reject: SnCascaderReject) => Void`：异步加载函数。`parent` 为 null 表示加载根级，`resolve(options)` 返回该层选项，`reject()` 表示加载失败。

<DemoPhone name="sn-cascader" />
