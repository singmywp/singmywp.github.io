# Keyboard  自定义键盘

## 基础用法

基于底部弹层封装的安全键盘，由组件接管输入，适合替代系统键盘的场景。

- 支持数字、整数、密码全键盘、身份证与车牌五种键盘
- 输入内容与弹层显隐均支持双向绑定，输入变化与完成操作分别派发事件
- 可限制输入长度、开启字符键洗牌；长按退位键一键清空，头部可显示实时输入内容

::: info 配合系统键盘
需要替代系统键盘时，配合 `uni.hideKeyboard()` 使用。
:::

```vue
<template>
	<sn-button text="打开数字键盘" @click="show = true"></sn-button>
	<sn-keyboard type="number" v-model:show="show" v-model="value" :maxlength="10" @confirm="onConfirm"></sn-keyboard>
</template>

<script lang="uts" setup>
const show = ref<boolean>(false)
const value = ref<string>('')

function onConfirm(): void {
	console.log(value.value)
}
</script>
```

**更多演示请下载 demo 查看**

## 密码与车牌键盘

密码键盘支持字母大小写切换与数字/符号模式切换；车牌键盘默认为省份简称汉字模式，可通过键盘上的模式切换键切到字母模式。

```vue
<template>
	<sn-keyboard type="password" v-model:show="pwdShow" v-model="pwd" :maxlength="16"></sn-keyboard>
	<sn-keyboard type="car" v-model:show="carShow" v-model="car" :maxlength="8"></sn-keyboard>
</template>

<script lang="uts" setup>
const pwdShow = ref<boolean>(false)
const pwd = ref<string>('')
const carShow = ref<boolean>(false)
const car = ref<string>('')
</script>
```

## 自定义按键样式

通过 `keyStyle` / `keyTextStyle` / `keyIconStyle` / `keyHoverStyle` 定制按键，`confirmType` / `confirmLevel` / `confirmText` 定制完成键。

```vue
<template>
	<sn-keyboard type="number" v-model:show="show" v-model="value" confirm-type="success" confirm-level="second"
		confirm-text="确定" key-gap="$6"
		key-style="background-color:#DBEAFE;border-radius:8px;border:1px solid #BFDBFE;"
		key-hover-style="background-color:#BFDBFE;"
		key-text-style="color:#1D4ED8;font-size:18px;font-weight:600;"></sn-keyboard>
</template>

<script lang="uts" setup>
const show = ref<boolean>(false)
const value = ref<string>('')
</script>
```

## 注意事项

头部默认显示「安全键盘，放心输入」提示。

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| v-model | 输入内容 | String | `''` | - |
| v-model:show | 弹层显示状态 | Boolean | `false` | `true` \| `false` |
| type | 键盘类型 | String | `number` | `number` \| `int` \| `password` \| `idcard` \| `car` |
| maxlength | 最大输入长度，`0` 表示不限制（车牌键盘不受此限制） | Number | `0` | - |
| show | 是否显示弹层（也可仅用 `v-model:show`） | Boolean | `false` | `true` \| `false` |
| showInput | 是否在头部实时显示已输入内容（内容非空时替换安全提示） | Boolean | `true` | `true` \| `false` |
| longpress | 是否开启长按退位键 1000ms 一键清空 | Boolean | `true` | `true` \| `false` |
| maskClose | 点击遮罩是否关闭 | Boolean | `true` | `true` \| `false` |
| maskOpacity | 遮罩透明度 | Number | `0.3` | - |
| preventBack | 是否阻止返回键关闭 | Boolean | `true` | `true` \| `false` |
| aniTime | 弹层动画时长，支持 `$` 简写 | String \| Number | `$long` | - |
| drawerCustomStyle | 自定义内部抽屉弹层样式 | UTSJSONObject \| String | `''` | - |
| drawerHeight | 弹层高度，按键盘类型自动设置（number/idcard/int 为 44%，password 为 52%，car 汉字模式为 60% 等） | String \| Number | - | - |
| padding | 弹层内边距 | String | `8px 6px 30px 6px` | - |
| confirmType | 完成键的功能色 | String | `primary` | `primary` \| `info` \| `success` \| `error` \| `warning` |
| confirmLevel | 完成键的颜色等级 | String | `first` | `first` \| `second` \| `third` \| `least` |
| confirmText | 完成键文本 | String | `完成` | - |
| shuffle | 是否每次打开时随机打乱字符键顺序（功能键位置固定） | Boolean | `false` | `true` \| `false` |
| keyGap | 按键间距，支持 `$` 简写 | String \| Number | `3` | - |
| keyStyle | 自定义普通按键样式 | UTSJSONObject \| String | `''` | - |
| keyClass | 普通按键外部类 | String | `''` | - |
| keyTextStyle | 自定义按键文字样式 | UTSJSONObject \| String | `''` | - |
| keyTextClass | 按键文字外部类 | String | `''` | - |
| keyIconStyle | 自定义按键图标样式 | UTSJSONObject \| String | `''` | - |
| keyIconClass | 按键图标外部类 | String | `''` | - |
| keyHoverStyle | 自定义按键按下态样式 | UTSJSONObject \| String | `''` | - |
| confirmKeyStyle | 自定义完成键样式 | UTSJSONObject \| String | `''` | - |
| confirmKeyClass | 完成键外部类 | String | `''` | - |
| confirmKeyTextStyle | 自定义完成键文字样式 | UTSJSONObject \| String | `''` | - |
| confirmKeyTextClass | 完成键文字外部类 | String | `''` | - |
| confirmKeyHoverStyle | 自定义完成键按下态样式 | UTSJSONObject \| String | `''` | - |
| headerStyle | 自定义头部样式 | UTSJSONObject \| String | `''` | - |
| headerClass | 头部外部类 | String | `''` | - |
| headerTextStyle | 自定义头部文字样式 | UTSJSONObject \| String | `''` | - |
| headerTextClass | 头部文字外部类 | String | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 根节点外部类 | String | `''` | - |

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| update:show | (value: boolean) => Void | 弹层显示状态变化时触发（配合 `v-model:show`） |
| change | (value: string) => Void | 输入内容变化（输入、删除、清空）时触发 |
| confirm | () => Void | 点击完成键时触发，随后自动收起键盘 |
| close | () => Void | 点击头部关闭按钮时触发 |
| open | () => Void | 弹层打开动画结束后触发 |
| close-anim-end | () => Void | 弹层关闭动画结束后触发 |

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| open | - | - | 打开键盘弹层（开启 `shuffle` 时会先打乱字符键顺序） |
| close | - | - | 收起键盘弹层 |

<DemoPhone name="sn-keyboard" />
