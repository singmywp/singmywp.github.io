# Rate  评分

> [查看 sn-rate 的 2.0 版本差异](/differences/components/sn-rate)

## 基础用法

- 通过点击图标（默认星星）评分，`v-model` 双向绑定当前评分值。
- 支持半星评分（`allow-half`）、再次点击当前值清零（`clearable`）、自定义数量（`count`）、自定义图标与颜色。
- `readonly` 只读模式采用单文本双层渲染（底层灰色 + 上层按比例裁剪的彩色层），仅两个节点即可展示，高性能，适合长列表展示场景，且支持小数值（如 4.5 按比例显示）与超限数值。

```vue
<template>
	<sn-rate v-model="value"></sn-rate>
</template>

<script lang="uts" setup>
const value = ref<number>(3)
</script>
```

**更多演示请下载 demo 查看**

## 半星与清除

开启 `allow-half` 后，点击图标左半部分计半星、右半部分计整星；开启 `clearable` 后，再次点击当前评分值可清零：

```vue
<template>
	<sn-rate v-model="value" allow-half clearable></sn-rate>
</template>
```

## 自定义图标与颜色

图标名称使用 remixicon 图标名；`active-icon` 不传时选中图标与 `icon` 相同：

```vue
<template>
	<sn-rate v-model="value" icon="heart-3-fill" active-color="$error"></sn-rate>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 当前选中的评分值 | Number | `0` | - |
| count | 总评分（图标）数量 | Number | `5` | - |
| readonly | 是否为只读状态，只读时不可点击 | Boolean | `false` | `true` \| `false` |
| clearable | 是否允许再次点击当前评分值清零 | Boolean | `false` | `true` \| `false` |
| allowHalf | 是否允许半星评分 | Boolean | `false` | `true` \| `false` |
| spacing | 图标之间的间距 | String \| Number | `5px` | - |
| inactiveColor | 未选中图标的颜色 | String | `$infoDark` | 任意色值或 `$` 主题色简写 |
| activeColor | 选中图标的颜色 | String | `$warning` | 任意色值或 `$` 主题色简写 |
| icon | 默认（未选中）图标名称 | String | `star-fill` | `remixicon 图标名` |
| iconSize | 图标大小，留空时为 `20` 乘字体乘数 | String \| Number | `''` | - |
| activeIcon | 选中图标的名称，留空时与 `icon` 相同 | String | `''` | `remixicon 图标名` |
| halfIcon | 半星图标的名称（`allow-half` 时使用） | String | `star-half-fill` | `remixicon 图标名` |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: Number) => Void | 当前评分值变化时触发，携带新值 |

<DemoPhone name="sn-rate" />
