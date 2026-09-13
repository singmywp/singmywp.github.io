# Footer  页脚

## 基础用法

- 页脚组件，常用于页面底部展示品牌 Logo、导航链接与版权信息，三部分均可选、按需组合
- Logo 图标支持图标名或图片路径（`http` 开头、以 `/` `./` `../` 开头或包含 `.` 的地址按图片处理）
- 链接间自动添加竖向分隔线，点击链接/Logo 后按 `openType` 自动调用对应的路由跳转方法

```vue
<template>
	<sn-footer text="Copyright © 2026 SinleUI. All Rights Reserved."></sn-footer>
</template>
```

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| links | 导航链接列表，字段见下方 [[SnFooterLink]] | Array<[[SnFooterLink]]> | `[]` | - |
| logo | 品牌 Logo 配置，字段见下方 [[SnFooterLogo]] | [[SnFooterLogo]] | `null` | - |
| text | 页脚文字（一般为版权信息） | String | `''` | - |
| color | Logo 标题颜色 | String | `''`（空值时为 `$title`） | - |
| linkColor | 链接文字颜色 | String | `''`（空值时为 `$primary`） | - |
| lineColor | 链接分隔线颜色 | String | `''`（空值时为 `$line`） | - |
| textColor | 页脚文字颜色 | String | `''`（空值时为 `$textLight`） | - |
| customStyle | 自定义根节点样式 | UTSJSONObject \| String | `''` | - |
| customClass | 自定义根节点样式类 | String | `''` | - |
| linkClass | 链接文字样式类 | String | `''` | - |
| textClass | 页脚文字样式类 | String | `''` | - |

:::type-fields SnFooterLink

`sn-footer` 链接项。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| name | String | 否 | 链接文字 |
| url | String | 否 | 跳转地址，空值时不跳转 |
| openType | String | 否 | 跳转方式：`navigate`（默认）\| `navigateBack` \| `switchTab` \| `redirectTo` \| `reLaunch` \| `none`（不跳转） |

:::

:::type-fields SnFooterLogo

`sn-footer` Logo 配置。

| 名称 | 类型 | 必填 | 描述 |
| :--- | :--- | :--- | :--- |
| icon | String | 否 | Logo 图标名或图片路径 |
| title | String | 否 | Logo 标题文字 |
| url | String | 否 | 点击 Logo 时的跳转地址 |
| openType | String | 否 | 点击 Logo 时的跳转方式，可选值同 [[SnFooterLink]] |

:::

## 事件

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| linkclick | (link: [[SnFooterLink]], index: number) => Void | 点击链接时触发，携带链接数据与索引（跳转仍会执行，可用 `openType: 'none'` 阻止默认跳转自行处理） |
| logoclick | () => Void | 点击 Logo 时触发（Logo 配置了 `url` 时跳转仍会执行） |

<DemoPhone name="sn-footer" />
