# Perm Listener 权限申请监听
## 基本使用
- 应用申请权限时，自动同步弹出权限用途说明弹窗
- 只在单页面生效
- 当权限已授予或永久拒绝后，不再弹出
::: code-group
```vue [template]
<template>
	<sn-page>
    <com-card>
      <sn-button text="申请相机权限" @click="requestCamera"></sn-button>
      <sn-button text="申请相册权限" @click="requestPhoto"></sn-button>
  	</com-card>
    <sn-perm-listener :data="permData"></sn-perm-listener>
  </sn-page>
</template>
```
```ts [script]
const permConfigs = new Map<string, UTSJSONObject>()

permConfigs.set('android.permission.CAMERA', {
	title: '正在请求相机权限',
	content: '仅用于扫描二维码，不会将您的任何隐私数据上传云端'
})

permConfigs.set('android.permission.READ_MEDIA_IMAGES', {
	title: '正在请求图片权限',
	content: '仅用于选择图片，不会将您的任何隐私数据上传云端',
	icon: 'image-circle-fill'
})

function requestPhoto() {
	snu.requestMediaPermission({
		types: ['image', 'audio','video']
	})
}

function requestCamera() {
  snu.requestSystemPermission({
		permissions: ['android.permission.CAMERA']
	})
}
```
:::
**更多演示请下载 demo 查看**
## 属性
| 参数         | 说明                                                                                | 类型                       | 默认值   | 可选值                                     |
| ------------ | ----------------------------------------------------------------------------------- | -------------------------- | -------- | ------------------------------------------ |
| data         | 权限配置数据，每个权限支持配置 `title`、`content`、`icon`，具体用法参考上方示例代码 | Map<String, UTSJSONObject> | -        | -                                          |
| padding      | 内容区域的内边距                                                                    | String                     | `20px`   | -                                          |
| position     | 弹出框的位置                                                                        | String                     | `top`    | `top`\|`bottom`\|`left`\|`right`\|`center` |
| maskOpacity  | 遮罩层的透明度                                                                      | Number                     | `0.5`    | -                                          |
| bgColor      | 弹出框的背景颜色                                                                    | String                     | `$front` | -                                          |
| iconSize     | 图标的大小                                                                          | String                     | `$5`     | -                                          |
| iconColor    | 图标的颜色                                                                          | String                     | `$title` | -                                          |
| contentSize  | 内容的字体大小                                                                      | String                     | `$2`     | -                                          |
| contentColor | 内容的颜色                                                                          | String                     | `$text`  | -                                          |
| titleSize    | 标题的字体大小                                                                      | String                     | `$3`     | -                                          |
| titleColor   | 标题的颜色                                                                          | String                     | `$title` | -                                          |
| customStyle  | 自定义弹窗样式                                                                      | UTSJSONObject              | `{}`     | -                                          |


<DemoPhone name="sn-perm-listener" />