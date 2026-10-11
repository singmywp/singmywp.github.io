# ColorPicker  颜色选择器

## 基础用法

弹出式颜色选择器，用于在底部抽屉中完成颜色选取与确认。

- 支持面板二维取色、色相 / 透明度滑块，以及 HEX / RGBA / HSB / HSL 四种格式输入
- 内置预设颜色区，预设区与扩展区均可用插槽整体替换
- 打开状态下，外部修改绑定值会实时同步到取色面板

::: info 确定后写入
仅点击“确定”才将颜色值写入 `v-model`，点击“取消”或关闭时丢弃本次修改
:::

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

## 实现原理

弹出式部分基于 `sn-drawer` 底部抽屉封装，内部嵌入 `sn-color-picker-view`。

遮罩与面板在首次打开时挂载，与其他 Picker 保持一致，关闭后保留节点；不再预挂载固定定位面板，以规避首次显示时的层级异常。此挂载策略不影响独立使用的 `sn-color-picker-view`。

格式下拉菜单属于嵌套弹层：打开时使用高于颜色选择器的动态层级，遮罩拦截底层触摸滚动；点击格式选项切换输入格式，点击菜单外区域仅关闭格式菜单，不关闭颜色选择器。

拖动取色时面板仅更新饱和度与亮度；拖动到边界时保持当前色相，亮度降为 0 时色相滑块不会跳回红色端点；手指越过面板进入色相条仍保持原色相，色相条右端保持在 360° 位置。

## 注意事项

标题默认居中显示；取消 / 确定按钮在未传入文案时自动使用当前语言的默认文案。

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
| presetColors | 自定义预设颜色，二维数组（每行一组）；使用内置色板 | `Array<Array<String>>` | - | - |
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

## 插槽

| 名称 | 说明 | 作用域 |
| --- | --- | --- |
| preset | 替换「内置颜色」预设区域内容；未传入时渲染预设颜色网格（预设标题与色块），`showPresets` 为 `false` 时不显示该区域 | color：当前颜色值 |
| extra | 预设颜色区域下方的扩展区域，可放置自定义内容（如自定义色板）；未传入时不渲染 | color：当前颜色值 |

`extra` 插槽可作为“自定义色板”使用：点击色点直接修改 `v-model`（打开状态下会同步到取色面板）：

```vue
<template>
	<sn-color-picker ref="picker" v-model="color" title="选择颜色">
		<template #extra="slotProps">
			<view class="my-palette">
				<view v-for="(c, i) in palette" :key="i" class="my-palette-dot" :style="dotStyle(c, slotProps.color)"
					@click="onPick(c)"></view>
			</view>
		</template>
	</sn-color-picker>
</template>

<script lang="uts" setup>
	const picker = ref<SnColorPickerComponentPublicInstance | null>(null)
	const color = ref<string>('#F5222D')
	const palette = ref<string[]>(['#1F1F1F', '#EF4444', '#3B82F6'])

	function onPick(c: string) {
		color.value = c
	}

	function dotStyle(c: string, current: any): string {
		const ring = current == c ? 'var(--sn-primary)' : 'var(--sn-line)'
		return `width:28px;height:28px;border-radius:14px;margin-right:8px;background-color:${c};border:2px solid ${ring};`
	}
</script>
```

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
| presetColors | 自定义预设颜色，二维数组（每行一组）；使用内置色板 | `Array<Array<String>>` | - | - |
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

## sn-color-picker-view 插槽

| 名称 | 说明 | 作用域 |
| --- | --- | --- |
| preset | 替换「内置颜色」预设区域内容；未传入时渲染预设颜色网格（预设标题与色块），`showPresets` 为 `false` 时不显示该区域 | color：当前颜色值 |
| extra | 预设颜色区域下方的扩展区域，可放置自定义内容（如自定义色板）；未传入时不渲染 | color：当前颜色值 |

<DemoPhone name="sn-color-picker" />
