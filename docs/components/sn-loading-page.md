# LoadingPage 加载页
## 基本使用
- 在页面信息尚未完全加载时使用，避免出现视觉空白
```vue
<template>
	<sn-loading-page :show="true" text="加载中"></sn-loading-page>
</template>
```
**更多演示请下载 demo 查看**

## 属性
| 参数            | 说明                           | 类型          | 默认值                                       | 可选值            |
| :-------------- | :----------------------------- | :------------ | :------------------------------------------- | :---------------- |
| show            | 是否显示加载页                 | Boolean       | `false`                                      | `true` \| `false` |
| text            | 加载页显示的文本内容           | String        | `加载中`                                     | -                 |
| imgSrc          | 加载页显示的图片路径           | String        | -                                            | -                 |
| bgColor         | 加载页背景颜色                 | String        | `$info`                                      | -                 |
| textColor       | 加载页文本颜色                 | String        | `$infoDark` （亮色模式） `$dark`（暗黑模式） | -                 |
| textSize        | 加载页文本大小                 | String        | `$4`                                         | -                 |
| iconColor       | 加载页图标颜色（如果显示图标） | String        | `$infoDark` （亮色模式） `$dark`（暗黑模式） | -                 |
| iconSize        | 加载页图标大小（如果显示图标） | String        | `$7`                                         | -                 |
| aniTime          | 加载页动画持续时间             | Number        | `$normal`                                    | -                 |
| customImgStyle  | 加载页图片自定义样式           | UTSJSONObject | `{width: '70px', height: '70px'}`            | -                 |
| customTextStyle | 加载页文本自定义样式           | UTSJSONObject | `{marginTop: '15px'}`                        | -                 |
<DemoPhone name="sn-loading-page" />