# Form 表单

## 基础用法

- 用于数据收集及验证。
- 内置的数据验证器提供了丰富的场景支持，使得数据校验变得异常容易。同时支持自定义数据校验，满足您的各种需求。
- 分为两个组件：`sn-form` 和  `sn-form-item` 。
- `sn-form-item` 可以独立使用，但独立使用时无法校验数据。

::: code-group

```vue [template]
<template>
	<sn-form ref="formEle"
	v-model="formData">
		<sn-form-item label="姓名" 
		field="name" 
		required
		:rule="nameRule">
			<sn-input v-model="(formData['name'] as string)">
  			</sn-input>
		</sn-form-item>
		<sn-form-item label="性别"
		field="gender" 
		required
		:rule="genderRule">
			<sn-radio-group v-model="(formData['gender'] as number)">
				<sn-radio text="男"></sn-radio>
				<sn-radio text="女"></sn-radio>
  			</sn-radio-group>
		</sn-form-item>
  	</sn-form>
	<sn-button type="primary"
	text="提交"
	@click="submit"></sn-button>
</template>
```

``` vue [script]
<script setup>
	import { $snui, SnFormValidResult, SnFormItemRule } from '@/uni_modules/sinle-ui'

	const formEle = ref(null as SnFormComponentPublicInstance | null)
	const formData = ref({
		name: '',
		age: 0
	})
	const nameRule = ref({
		type: 'chinese',
		required: true,
		message: '请填写正确的中文姓名',
		valid: (value: any):string=>{
			if ((value as string).length > 5){
				return '姓名过长'
			}
			return ''
		}
	} as SnFormItemRule)
	
	const ageRule = ref({
		type: 'integer',
		required: true,
		message: '请填写正确的年龄',
		valid: (value: any):string=>{
			if ((value as number)<18 && formData.value['inParty'] as boolean) {
				return '党员必须年满18周岁'
			}
			return ''
		}
	} as SnFormItemRule)
	
	function submit(){
		formEle.value!.$callMethod('submit', {
			success: ()=>{
				uni.showModal({
					title: '提示',
					content: '提交成功'
				})
			}
		} as SnFormValidResult)
	}
</script>
```

:::

**更多演示请下载 demo 查看**

## 属性

**sn-form**

| 参数          | 说明                                                                                | 类型          | 默认值       | 可选值             |
| ------------- | ----------------------------------------------------------------------------------- | ------------- | ------------ | ------------------ |
| vModel        | 表单数据（每一个健对应 `sn-form-item` 的 `field` 属性，值即为表单组件的 `v-model`） | UTSJSONObject | `{}`         | -                  |
| type          | 表单项样式类型。分为 `embed`（嵌入式）和`float`（浮动式）                           | String        | `embed`      | `embed` \| `float` |
| labelColor    | 表单项标题颜色                                                                      | String        | `$textLight` | -                  |
| labelSize     | 表单项标题字体大小                                                                  | String        | `$3`         | -                  |
| labelWidth    | 表单项标题宽度                                                                      | String        | `auto`       | -                  |
| showError     | 是否显示校验错误提示                                                                | Boolean       | `true`       | `true` \| `false`  |
| showBorder    | 是否显示表单项分割线（仅 `embed` 模式生效）                                         | Boolean       | `true`       | `true` \| `false`  |
| triggerChange | 是否启用数据变化自动校验                                                            | Boolean       | `false`      | `true` \| `false`  |
| customStyle   | 自定义表单样式                                                                      | UTSJSONObject | `{}`         | -                  |

**sn-form-item**

| 参数        | 说明                                                         | 类型                                                   | 默认值 | 可选值 |
| ----------- | ------------------------------------------------------------ | ------------------------------------------------------ | ------ | ------ |
| type        | 表单项样式类型。分为 `embed`（嵌入式）和`float`（浮动式）（不为空则覆盖 `sn-form` 配置） | String                                                 | -      | -      |
| label       | 表单项标题                                                   | String                                                 | -      | -      |
| labelColor  | 表单项标题颜色（不为空则覆盖 `sn-form` 配置）                | String                                                 | -      | -      |
| labelSize   | 表单项标题字体大小（不为空则覆盖 `sn-form` 配置）            | String                                                 | -      | -      |
| labelWidth  | 表单项标题宽度（不为空则覆盖 `sn-form` 配置）                | String                                                 | -      | -      |
| field       | 表单项名称                                                   | String                                                 | -      | -      |
| rule        | 表单项校验规则                                               | [SnFormItemRule](/api/types/components#snformitemrule) | -      | -      |
| customStyle | 自定义表单项样式                                             | UTSJSONObject                                          | `{}`   | -      |

## 事件

**sn-form**

| 名称     | 类型                             | 说明           |
| :------- | :------------------------------- | :------------- |
| submited | `() => void`                     | 提交成功时触发 |
| change   | `(value: UTSJSONObject) => void` | 数据变化时触发 |

## 插槽

**sn-form**

| 名称    | 说明                               |
| :------ | ---------------------------------- |
| default | 必选。放置 `sn-form-item` 子组件。 |

**sn-form-item**

| 名称    | 说明                                               |
| ------- | -------------------------------------------------- |
| default | 在这里放置内部表单组件，如 `sn-input`，`sn-switch` |

## 方法

| 名称   | 参数                                                                       | 返回值 | 描述       |
| :----- | :------------------------------------------------------------------------- | :----- | :--------- |
| submit | (callback: [`SnFormValidResult`](/api/types/components#snformvalidresult)) | -      | 提交回调。 |



<DemoPhone name="sn-form" />
