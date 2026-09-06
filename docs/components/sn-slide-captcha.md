# SlideCaptcha  滑块验证

> [查看 sn-slide-captcha 的 2.0 版本差异](/differences/components/sn-slide-captcha)

## 基础用法

- 滑块验证码组件，支持两种模式：`slide` 滑块模式（拖动滑块到轨道上的目标区域）与 `puzzle` 拼图模式（拖动滑块使拼图块对准图片缺口）
- 验证通过触发 `success` 事件，失败触发 `fail` 事件；失败后提示片刻自动复位并重新生成目标位置
- 滑块模式的目标区域宽度为滑块尺寸加两倍容差，滑块中心落入目标区域即通过
- Web 端支持鼠标按住拖动验证

```vue
<template>
	<sn-slide-captcha @success="onSuccess" @fail="onFail"></sn-slide-captcha>
</template>
```

**更多演示请下载 demo 查看**

## 拼图模式

拼图模式通过 `src` 传入图片地址，组件在图片上随机生成缺口与拼图块，拖动滑块使拼图块对准缺口（允许误差为 `tolerance` 像素）即通过验证。图片右上角提供刷新按钮，可重新生成缺口位置。

```vue
<template>
	<sn-slide-captcha mode="puzzle" src="/static/captcha.png" @success="onSuccess" @fail="onFail"></sn-slide-captcha>
</template>
```

## 指定目标位置

`target` 取 `0 - 100` 时指定目标在轨道可滑动范围内的百分比位置，取 `-1` 时随机生成目标位置；默认 `100`（轨道最右端）。

```vue
<template>
	<sn-slide-captcha :target="60"></sn-slide-captcha>
</template>
```

## 事件与重置

验证失败后组件会自动复位；也可通过 `ref` 调用 `reset` 方法随时重新开始验证。

```vue
<template>
	<sn-slide-captcha ref="captcha" hint-text="拖动滑块完成安全验证" @success="onSuccess" @fail="onFail"></sn-slide-captcha>
	<sn-button text="重新验证" @click="onResetClick"></sn-button>
</template>
```

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| mode | 验证模式 | String | `'slide'` | `slide` \| `puzzle` |
| src | 拼图模式图片路径，仅 puzzle 模式有效 | String | `''` | - |
| width | 组件宽度，支持 `$` 前缀按间距乘数缩放 | String \| Number | `'100%'` | - |
| height | 拼图图片区域高度，仅 puzzle 模式有效，支持 `$` 前缀按间距乘数缩放 | String \| Number | `'180px'` | - |
| thumbSize | 滑块尺寸（正方形边长），支持 `$` 前缀按间距乘数缩放 | String \| Number | `'40px'` | - |
| thumbRadius | 滑块圆角，支持 `$` 前缀按圆角乘数缩放；默认为滑块尺寸的一半（圆形） | String \| Number | `''` | - |
| tolerance | 判定容差（px）。slide 模式下目标区域宽度为滑块尺寸加两倍容差；puzzle 模式下为拼图块对准缺口的允许误差 | Number | `6` | - |
| target | 目标位置百分比（0-100，相对轨道可滑动范围），-1 表示随机；仅 slide 模式有效 | Number | `100` | `-1` - `100` |
| activeColor | 滑动填充条颜色；滑块颜色取其对应原色（传入 Light 变体色时自动去除 Light 后缀） | String | `'$primaryLight'` | - |
| trackColor | 轨道背景颜色 | String | `'$infoActive'` | - |
| successColor | 验证通过后的填充条与滑块颜色 | String | `'$success'` | - |
| failColor | 验证失败后的填充条与滑块颜色 | String | `'$error'` | - |
| targetColor | 目标区域颜色 | String | `'$primary'` | - |
| hintText | 待验证时轨道中的提示文本 | String | `'拖动滑块完成验证'` | - |
| successText | 验证通过后的提示文本 | String | `'验证通过'` | - |
| failText | 验证失败后的提示文本 | String | `'验证失败，请重试'` | - |
| disabled | 禁用组件，无法拖动，整体降低透明度 | Boolean | `false` | `true` \| `false` |
| customStyle | 组件根节点自定义样式 | UTSJSONObject \| String | `''` | - |
| customClass | 组件根节点自定义样式类名 | String | `''` | - |
| imageStyle | 拼图图片区域自定义样式 | UTSJSONObject \| String | `''` | - |
| imageClass | 拼图图片区域自定义样式类名 | String | `''` | - |
| trackStyle | 轨道自定义样式 | UTSJSONObject \| String | `''` | - |
| trackClass | 轨道自定义样式类名 | String | `''` | - |
| thumbStyle | 滑块自定义样式 | UTSJSONObject \| String | `''` | - |
| thumbClass | 滑块自定义样式类名 | String | `''` | - |
| fillStyle | 填充条自定义样式 | UTSJSONObject \| String | `''` | - |
| fillClass | 填充条自定义样式类名 | String | `''` | - |
| targetStyle | 目标区域自定义样式 | UTSJSONObject \| String | `''` | - |
| targetClass | 目标区域自定义样式类名 | String | `''` | - |
| textStyle | 提示文本自定义样式 | UTSJSONObject \| String | `''` | - |
| textClass | 提示文本自定义样式类名 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| success | () => Void | 验证通过时触发 |
| fail | () => Void | 验证失败时触发，随后组件自动复位并重新生成目标位置 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| reset | - | - | 复位组件并重新生成目标位置，开始新一轮验证 |

<DemoPhone name="sn-slide-captcha" />
