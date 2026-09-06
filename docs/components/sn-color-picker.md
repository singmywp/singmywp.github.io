# ColorPicker  颜色选择器

> [查看 sn-color-picker 的 2.0 版本差异](/differences/components/sn-color-picker)

## 基础用法

- 弹出式颜色选择器，基于 sn-drawer 底部抽屉封装，内部嵌入 sn-color-picker-view。
- 仅点击“确定”后才将颜色值写入 `v-model`，点击“取消”或关闭时丢弃修改。
- 支持面板二维取色、色相 / 透明度滑块、HEX / RGBA / HSB / HSL 四种格式输入与预设颜色。
- 通过 ref 调用 `open()` 方法打开。

```vue
<template>
	<sn-button type="primary" text="打开颜色选择器" @click="openPicker"></sn-button>
	<sn-color-picker ref="picker" v-model="color" title="选择颜色" @confirm="onConfirm"></sn-color-picker>
</template>

<script lang="uts" setup>

	const picker = ref<SnColorPickerComponentPublicInstance | null>(null)
	const color = ref<string>('#F5222D')

	function openPicker() {
		picker.value?.$callMethod('open')
	}

	function onConfirm(value: string) {
		console.log(value)
	}
</script>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定的颜色值 | String | `#F5222D` | - |
| disabled | 是否禁用（取色、输入、按钮均不可用） | Boolean | `false` | `true \| false` |
| height | 弹出抽屉的高度 | String \| Number | `620px` | - |
| maskClose | 点击遮罩是否可关闭 | Boolean | `true` | `true \| false` |
| maskOpacity | 遮罩透明度 | Number | `0.4` | - |
| preventBack | 是否阻止返回键关闭 | Boolean | `false` | `true \| false` |
| title | 标题，为空时不显示 | String | `''` | - |
| showClose | 是否显示右上角关闭按钮 | Boolean | `true` | `true \| false` |
| showAlpha | 是否显示透明度滑块与透明度输入 | Boolean | `true` | `true \| false` |
| showPresets | 是否显示预设颜色区域 | Boolean | `true` | `true \| false` |
| format | 初始输入格式 | String | `hex` | `hex \| rgba \| hsb \| hsl` |
| presetTitle | 预设颜色区域标题 | String | `内置颜色` | - |
| presetColors | 自定义预设颜色，二维数组（每行一组）；为空时使用内置色板 | Array\<Array<String\>> | `[]` | - |
| panelHeight | 取色面板高度 | String \| Number | `260px` | - |
| showCancel | 是否显示取消按钮 | Boolean | `true` | `true \| false` |
| showConfirm | 是否显示确定按钮 | Boolean | `true` | `true \| false` |
| cancelText | 取消按钮文字 | String | `取消` | - |
| confirmText | 确定按钮文字 | String | `确定` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| headerStyle | 标题栏自定义样式 | UTSJSONObject \| String | `''` | - |
| headerClass | 样式类 | String | `''` | - |
| titleStyle | 标题文字自定义样式 | UTSJSONObject \| String | `''` | - |
| titleClass | 样式类 | String | `''` | - |
| closeButtonStyle | 关闭按钮自定义样式 | UTSJSONObject \| String | `''` | - |
| closeButtonClass | 样式类 | String | `''` | - |
| actionsStyle | 底部按钮区域自定义样式 | UTSJSONObject \| String | `''` | - |
| actionsClass | 样式类 | String | `''` | - |
| cancelButtonStyle | 取消按钮自定义样式 | UTSJSONObject \| String | `''` | - |
| cancelButtonClass | 样式类 | String | `''` | - |
| confirmButtonStyle | 确定按钮自定义样式 | UTSJSONObject \| String | `''` | - |
| confirmButtonClass | 样式类 | String | `''` | - |
| viewStyle | 透传至内部 sn-color-picker-view 根节点的自定义样式 | UTSJSONObject \| String | `''` | - |
| viewClass | 样式类 | String | `''` | - |
| panelStyle | 透传至内部 sn-color-picker-view，取色面板自定义样式 | UTSJSONObject \| String | `''` | - |
| panelClass | 样式类 | String | `''` | - |
| thumbClass | 透传至内部 sn-color-picker-view，取色面板指示圆点样式类 | String | `''` | - |
| slidersStyle | 透传至内部 sn-color-picker-view，滑块容器自定义样式 | UTSJSONObject \| String | `''` | - |
| slidersClass | 样式类 | String | `''` | - |
| hueStyle | 透传至内部 sn-color-picker-view，色相滑块自定义样式 | UTSJSONObject \| String | `''` | - |
| hueClass | 样式类 | String | `''` | - |
| alphaStyle | 透传至内部 sn-color-picker-view，透明度滑块自定义样式 | UTSJSONObject \| String | `''` | - |
| alphaClass | 样式类 | String | `''` | - |
| sliderThumbClass | 透传至内部 sn-color-picker-view，滑块指示圆点样式类 | String | `''` | - |
| inputRowStyle | 透传至内部 sn-color-picker-view，格式与数值输入行自定义样式 | UTSJSONObject \| String | `''` | - |
| inputRowClass | 样式类 | String | `''` | - |
| fieldsStyle | 透传至内部 sn-color-picker-view，数值输入区域自定义样式 | UTSJSONObject \| String | `''` | - |
| fieldsClass | 样式类 | String | `''` | - |
| selectStyle | 透传至内部 sn-color-picker-view，格式下拉选择自定义样式 | UTSJSONObject \| String | `''` | - |
| selectClass | 样式类 | String | `''` | - |
| inputStyle | 透传至内部 sn-color-picker-view，数值输入框自定义样式 | UTSJSONObject \| String | `''` | - |
| inputClass | 样式类 | String | `''` | - |
| presetsStyle | 透传至内部 sn-color-picker-view，预设颜色区域自定义样式 | UTSJSONObject \| String | `''` | - |
| presetsClass | 样式类 | String | `''` | - |
| presetTitleStyle | 透传至内部 sn-color-picker-view，预设颜色标题自定义样式 | UTSJSONObject \| String | `''` | - |
| presetTitleClass | 样式类 | String | `''` | - |
| presetGridStyle | 透传至内部 sn-color-picker-view，预设颜色网格自定义样式 | UTSJSONObject \| String | `''` | - |
| presetGridClass | 样式类 | String | `''` | - |
| presetItemStyle | 透传至内部 sn-color-picker-view，预设颜色块自定义样式 | UTSJSONObject \| String | `''` | - |
| presetItemClass | 样式类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: string) => Void | 点击确定写入颜色值时触发，与 v-model 同步 |
| confirm | (value: string) => Void | 点击确定时触发，携带确认后的颜色值 |
| cancel | () => Void | 点击取消时触发 |
| open | () => Void | 选择器打开（动画结束）时触发 |
| close | () => Void | 选择器关闭（动画结束）时触发 |
| clickoverlay | () => Void | 点击遮罩时触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开颜色选择器，以当前 v-model 值作为初始颜色 |
| close | - | - | 关闭颜色选择器，不写入颜色值 |

---

以下属性属于 **sn-color-picker-view**（颜色选择容器），可直接嵌入页面单独使用，不依赖弹出层：

```vue
<template>
	<sn-color-picker-view v-model="color" @change="onChange"></sn-color-picker-view>
</template>

<script lang="uts" setup>
	const color = ref<string>('#F5222D')

	function onChange(value: string) {
		console.log(value)
	}
</script>
```

## sn-color-picker-view 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 绑定的颜色值 | String | `#F5222D` | - |
| active | 是否激活；为 false 时不响应外部颜色值变化与交互 | Boolean | `true` | `true \| false` |
| disabled | 是否禁用（拖动取色与输入均不可用） | Boolean | `false` | `true \| false` |
| showAlpha | 是否显示透明度滑块与透明度输入 | Boolean | `true` | `true \| false` |
| showPresets | 是否显示预设颜色区域 | Boolean | `true` | `true \| false` |
| format | 初始输入格式 | String | `hex` | `hex \| rgba \| hsb \| hsl` |
| presetTitle | 预设颜色区域标题 | String | `内置颜色` | - |
| presetColors | 自定义预设颜色，二维数组（每行一组）；为空时使用内置色板 | Array\<Array<String\>> | `[]` | - |
| panelHeight | 取色面板高度 | String \| Number | `300px` | - |
| sliderHeight | 滑块轨道高度 | String \| Number | `$24` | - |
| sliderSpacing | 滑块、输入行、预设区域之间的间距 | String \| Number | `$12` | - |
| borderRadius | 取色面板与滑块的圆角大小 | String \| Number | `$10` | - |
| thumbSize | 取色面板指示圆点大小 | String \| Number | `$30` | - |
| customStyle | 根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点自定义样式类 | String | `''` | - |
| panelStyle | 取色面板自定义样式 | UTSJSONObject \| String | `''` | - |
| panelClass | 样式类 | String | `''` | - |
| thumbClass | 取色面板指示圆点样式类 | String | `''` | - |
| slidersStyle | 滑块容器自定义样式 | UTSJSONObject \| String | `''` | - |
| slidersClass | 样式类 | String | `''` | - |
| hueStyle | 色相滑块自定义样式 | UTSJSONObject \| String | `''` | - |
| hueClass | 样式类 | String | `''` | - |
| alphaStyle | 透明度滑块自定义样式 | UTSJSONObject \| String | `''` | - |
| alphaClass | 样式类 | String | `''` | - |
| sliderThumbClass | 滑块指示圆点样式类 | String | `''` | - |
| inputRowStyle | 格式与数值输入行自定义样式 | UTSJSONObject \| String | `''` | - |
| inputRowClass | 样式类 | String | `''` | - |
| fieldsStyle | 数值输入区域自定义样式 | UTSJSONObject \| String | `''` | - |
| fieldsClass | 样式类 | String | `''` | - |
| selectStyle | 格式下拉选择自定义样式 | UTSJSONObject \| String | `''` | - |
| selectClass | 样式类 | String | `''` | - |
| inputStyle | 数值输入框自定义样式 | UTSJSONObject \| String | `''` | - |
| inputClass | 样式类 | String | `''` | - |
| presetsStyle | 预设颜色区域自定义样式 | UTSJSONObject \| String | `''` | - |
| presetsClass | 样式类 | String | `''` | - |
| presetTitleStyle | 预设颜色标题自定义样式 | UTSJSONObject \| String | `''` | - |
| presetTitleClass | 样式类 | String | `''` | - |
| presetGridStyle | 预设颜色网格自定义样式 | UTSJSONObject \| String | `''` | - |
| presetGridClass | 样式类 | String | `''` | - |
| presetItemStyle | 预设颜色块自定义样式 | UTSJSONObject \| String | `''` | - |
| presetItemClass | 样式类 | String | `''` | - |

## sn-color-picker-view 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| change | (value: string) => Void | 拖动取色、修改数值输入、点击预设颜色时触发，携带当前颜色值 |

## sn-color-picker-view 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| refresh | - | - | 重新测量取色面板与滑块位置并同步显示（一般无需手动调用） |

<DemoPhone name="sn-color-picker" />
