# Upload Media 媒体上传
## 基础用法
- 用于快速上传图片/视频媒体文件，分为基础版（`sn-upload-media`）和 uniCloud 版（`sn-upload-media-unicloud`）
- 支持选择媒体文件、上传、预览等功能。
```vue
<template>
	<sn-upload-media url="xxxx"></sn-upload-media>
</template>
```
**更多演示请下载 demo 查看**
## 属性

**sn-upload-media**

| 参数             | 说明                                                         | 类型            | 默认值                | 可选值              |
| ---------------- | ------------------------------------------------------------ | --------------- | --------------------- | ------------------- |
| url              | 上传地址                                                     | String          | -                     | -                   |
| autoUpload | 是否自动上传。如设置为 `false`，则可以通过 `upload` 方法上传所有媒体文件 | Boolean | `true` | `true` \| `false` |
| mode | 媒体模式。支持图片和视频以及混合模式。 | String | `image` | `image` \| `video` \| `all` |
| chooseCount      | 一次可以选择的文件数量。视频文件每次只支持选择1张。                       | Number          | `20`                   | -                   |
| maxCount         | 最多可以上传的文件数量，小于等于 0 则不限制                  | Number          | `-1`                  | -                   |
| timeout          | 上传超时时间（单位：ms）                                     | Number          | `10000`               | -                   |
| formData         | 附加到上传请求的表单数据                                     | UTSJSONObject   | `{}`                  | -                   |
| sourceType       | 可选择媒体文件的来源，提供 album（相册）、camera（相机）两个选项 | Array\<String\> | `["album", "camera"]` | `album` \| `camera` |
| width            | 媒体文件子项宽度                                             | String          | `70px`                | -                   |
| height           | 媒体文件子项高度                                             | String          | `70px`                | -                   |
| itemBgColor      | 媒体文件占位项背景颜色                                       | String          | `$line`              | -                   |
| itemBorderRadius | 媒体文件子项圆角大小                                         | String          | `$small`              | -                   |
| iconSize         | 媒体文件占位项中央图标大小                                   | String          | `40px`                | -                   |
| disabled         | 是否禁用                                                     | Boolean         | `false`               | `true` \| `false`   |
| chooseErrorTip   | 选择媒体文件失败时的提示信息                                 | String          | `选择媒体文件失败`    | -                   |
| enablePreview    | 是否启用点击图片预览功能。仅图片模式生效。                          | Boolean         | `true`                | `true` \|`false`    |
| uploadingText    | 上传中的文本                                                 | String          | `上传中`              | -                   |
| uploadedText     | 上传成功的文本                                               | String          | `上传成功`            | -                   |
| unuploadedText   | 未上传的文本                                                 | String          | `未上传`              | -                   |
| errorText        | 上传失败的文本                                               | String          | `上传失败`            | -                   |
| clearable        | 是否显示删除按钮                                             | Boolean         | `true`                | `true` \|`false`    |
| compressed | 是否压缩视频文件。仅视频模式生效。 | Boolean | `true` | `true` \|`false` |
| maxDuration | 录像最大时长，单位为s。仅视频模式生效。 | Boolean | `true` | `true` \|`false` |
| customStyle      | 自定义上传区域样式                                           | UTSJSONObject   | `{}`                  | -                   |
| customItemStyle  | 自定义媒体文件子项样式                                       | UTSJSONObject   | `{}`                  | -                   |

**sn-upload-media-unicloud**

与上表相比，此组件无 `url`、`timeout`、`formData` 属性，新增属性 `directory`

| 参数      | 说明                                                         | 类型   | 默认值          | 可选值 |
| --------- | ------------------------------------------------------------ | ------ | --------------- | ------ |
| directory | 上传至云存储的目录，注意，不要写文件名，该目录将和随机生成的文件名拼合为文件在云存储的绝对地址 | String | `uploadImages/` | -      |

## 事件

| 名称         | 类型                                    | 说明                   |
| ----------- | -------------------------------------- | --------------------- |
| uploaded     | (response: UploadFileSuccess) => Void | 每个文件上传成功时触发 |
| upload-error | (error: Error) => Void       | 每个文件上传失败时触发 |
| choose-error | (error: Error) => Void          | 选择文件失败时触发     |
| image-chose | (res: ChooseImageSuccess)=>Void | 选择图片成功时触发     |
| video-chose | (res: ChooseVideoSuccess)=>Void | 选择视频成功时触发     |
| file-chose | (files: SnFile[])=>Void | 选择文件（图片和视频）成功时触发 |
## 插槽

| 名称    | 说明                     |
| ------- | ------------------------ |
| default | 替换默认的媒体文件占位图 |

## 方法

| 名称   | 参数 | 返回值 | 描述                     |
| :----- | :--- | :----- | :----------------------- |
| upload | -    | -      | 开始上传所有未上传的文件 |

<DemoPhone name="sn-upload-media" />