# Collapse  折叠面板

> [查看 sn-collapse 的 2.0 版本差异](/differences/components/sn-collapse)

## 基础用法

- 通过 `sn-collapse-group` + `sn-collapse-item` 组合收纳内容区域，点击子项头部展开/收起。
- 多个子项默认独立展开/收起；开启 `accordion` 后同一时间只展开一个面板。
- 子项支持标题、右侧说明文本、左侧图标，内容区高度自适应并带展开动画。

```vue
<template>
	<sn-collapse-group>
		<sn-collapse-item title="如何联系客服？" note="FAQ">
			<sn-text text="点击右下角在线客服图标，或在「我的-帮助中心」提交工单。"></sn-text>
		</sn-collapse-item>
		<sn-collapse-item title="支持哪些支付方式？" note="FAQ">
			<sn-text text="支持微信支付、支付宝、银行卡以及余额支付。"></sn-text>
		</sn-collapse-item>
		<sn-collapse-item title="退换货政策说明" note="FAQ">
			<sn-text text="签收后 7 天内支持无理由退换货（不影响二次销售）。"></sn-text>
		</sn-collapse-item>
	</sn-collapse-group>
</template>
```

**更多演示请下载 demo 查看**

## 手风琴模式

开启 `accordion` 后，同一时间只展开一个子项，展开新子项时其余子项自动收起。

```vue
<template>
	<sn-collapse-group accordion>
		<sn-collapse-item title="账户安全" icon="shield-check-line">
			<sn-text text="建议开启双重验证，绑定手机与邮箱，定期更换密码。"></sn-text>
		</sn-collapse-item>
		<sn-collapse-item title="隐私设置" icon="lock-line">
			<sn-text text="可管理个人资料可见范围、消息通知偏好。"></sn-text>
		</sn-collapse-item>
	</sn-collapse-group>
</template>
```

## 自定义头部

通过 `header` 插槽可整体替换子项头部区域（替换标题、说明文本与展开箭头）。

```vue
<template>
	<sn-collapse-group>
		<sn-collapse-item>
			<template #header>
				<sn-icon name="vip-2-fill" :size="22" color="$warning"></sn-icon>
				<sn-text bold :font-size="15" text="SVIP 超级会员"></sn-text>
			</template>
			<sn-text text="开通 SVIP 年卡立享全年免运费、专属客服等权益。"></sn-text>
		</sn-collapse-item>
	</sn-collapse-group>
</template>
```

## 属性

**sn-collapse-group**

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| accordion | 是否开启手风琴模式（同一时间仅展开一个子项，展开新项时其余自动收起） | Boolean | `false` | `true` \| `false` |
| aniTime | 展开/收起动画时长，支持 `$` 简写 | String \| Number | `$snui.aniTimeNormal` | - |
| bgColor | 面板背景颜色 | String | `$front` | - |
| titleSize | 子项标题字体大小，支持 `$` 简写 | String \| Number | `15px × fontsizeFactor` | - |
| titleColor | 子项标题颜色 | String | `$title` | - |
| activeTitleColor | 展开状态子项标题颜色 | String | `$primary` | - |
| noteSize | 子项说明文本字体大小，支持 `$` 简写 | String \| Number | `13px × fontsizeFactor` | - |
| noteColor | 子项说明文本颜色（同时是展开箭头颜色） | String | `$lineText` | - |
| borderRadius | 面板圆角大小，支持 `$` 简写 | String \| Number | `8px × radiusFactor` | - |
| showBorder | 是否显示子项之间的分割线（末尾子项不显示） | Boolean | `true` | `true` \| `false` |
| titleStyle | 子项标题样式，作用于所有子项 | UTSJSONObject \| String | `''` | - |
| noteStyle | 子项说明文本样式，作用于所有子项 | UTSJSONObject \| String | `''` | - |
| holderStyle | 子项内容区容器样式，作用于所有子项 | UTSJSONObject \| String | `''` | - |
| titleClass | 子项标题外部样式类，透传至所有子项 | String | `''` | - |
| noteClass | 子项说明文本外部样式类，透传至所有子项 | String | `''` | - |
| holderClass | 子项内容区外部样式类，透传至所有子项 | String | `''` | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |

**sn-collapse-item**

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| :--- | :--- | :--- | :--- | :--- |
| title | 子项标题 | String | `''` | - |
| note | 子项说明文本，显示在标题右侧 | String | `''` | - |
| icon | 子项标题左侧图标名称 | String | `''` | - |
| open | 初始状态是否展开 | Boolean | `false` | `true` \| `false` |
| disabled | 是否禁用（禁用后不可点击展开，标题与箭头显示禁用色） | Boolean | `false` | `true` \| `false` |
| titleClass | 当前子项标题外部样式类，与 group 级 `titleClass` 合并 | String | `''` | - |
| noteClass | 当前子项说明文本外部样式类，与 group 级 `noteClass` 合并 | String | `''` | - |
| holderClass | 当前子项内容区外部样式类（external-class：`holder-class`），与 group 级 `holderClass` 合并 | String | `''` | - |
| customStyle | 自定义子项根节点样式 | UTSJSONObject \| String | `''` | - |

子项未单独传入的标题/说明颜色与字号，继承 group 上设置的对应值。

## 方法

以下方法可通过模板 ref 调用，其中 `register`、`setOrder` 主要供组件内部协调使用，一般无需手动调用。

**sn-collapse-group**

| 名称 | 参数 | 返回值 | 描述 |
| :--- | :--- | :--- | :--- |
| closeAll | - | - | 收起所有子项（仅手风琴模式下生效） |
| register | node: ComponentPublicInstance | Void | 注册子项（供 sn-collapse-item 挂载时内部调用） |

**sn-collapse-item**

| 名称 | 参数 | 返回值 | 描述 |
| :--- | :--- | :--- | :--- |
| close | - | - | 收起当前子项 |
| setOrder | index: Number, border: Boolean | Void | 设置子项序号与是否显示底部分割线（供 sn-collapse-group 内部调用） |

## 插槽

**sn-collapse-group**

| 名称 | 说明 |
| :--- | :--- |
| default | 在这里放置子组件 `sn-collapse-item` |

**sn-collapse-item**

| 名称 | 说明 |
| :--- | :--- |
| default | 子项内部放置收纳的内容 |
| header | 自定义子项头部区域（替换标题、说明文本与展开箭头） |

<DemoPhone name="sn-collapse" />
