# UploadMedia  媒体上传

> [查看 sn-upload-media 的 2.0 版本差异](/differences/components/sn-upload-media)

## 基础用法

- 用于快速选择并上传图片 / 视频媒体文件，分为基础版（`sn-upload-media`）和 uniCloud 版（`sn-upload-media-unicloud`）
- 支持选择、预览、删除、状态角标展示，选择后可自动上传，也可通过 `upload` 方法手动上传
- 添加项（占位符）可经默认插槽自定义，未传插槽时显示加号图标

```vue
<template>
	<sn-upload-media url="https://example.com/upload" :timeout="30000"></sn-upload-media>
</template>
```

> 说明：`timeout` 默认 `30000`（30s）。上传请求在超时时间内未完成（含未配置有效服务器地址导致的连接挂起）会被中止，状态置为「上传失败」并触发 `upload-error` 事件。

**更多演示请下载 demo 查看**

## 属性

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| url | 上传地址 | String | - | - |
| autoUpload | 是否在选择后自动上传；设为 `false` 时可通过 `upload` 方法手动上传 | Boolean | `true` | `true` \| `false` |
| mode | 媒体模式 | String | `image` | `image` \| `video` \| `all` |
| chooseCount | 一次可选择的文件数量（视频每次仅 1 个） | Number | `20` | - |
| maxCount | 最多可上传的文件数量，小于等于 0 不限制 | Number | `-1` | - |
| timeout | 上传超时时间（单位：ms），超时后中止请求并触发 `upload-error`，状态置为上传失败 | Number | `30000` | - |
| formData | 附加到上传请求的表单数据 | UTSJSONObject | `{}` | - |
| sourceType | 可选择媒体的来源 | `Array<String>` | `["album", "camera"]` | `album` \| `camera` |
| width | 媒体文件子项宽度 | String \| Number | `70px` | - |
| height | 媒体文件子项高度 | String \| Number | `70px` | - |
| itemBgColor | 占位项背景颜色，留空回退 `$line` | String | `` | `$primary` 等主题色 |
| itemBorderRadius | 媒体文件子项圆角，留空按 `8 × radiusFactor` 计算 | String \| Number | - | - |
| iconSize | 占位项中央图标大小 | String \| Number | `40px` | - |
| disabled | 是否禁用选择、预览与删除 | Boolean | `false` | `true` \| `false` |
| chooseErrorTip | 选择媒体失败时的提示信息 | String | `选择媒体文件失败` | - |
| enablePreview | 是否启用点击图片预览，仅图片生效 | Boolean | `true` | `true` \| `false` |
| uploadingText | 上传中的状态文本 | String | `上传中` | - |
| uploadedText | 上传成功的状态文本 | String | `上传成功` | - |
| unuploadedText | 未上传的状态文本 | String | `未上传` | - |
| errorText | 上传失败的状态文本 | String | `上传失败` | - |
| clearable | 是否显示删除按钮 | Boolean | `true` | `true` \| `false` |
| compressed | 是否压缩视频，仅视频模式生效 | Boolean | `true` | `true` \| `false` |
| maxDuration | 录像最大时长（单位：s），仅视频模式生效 | Number | `60` | - |
| customStyle | 自定义整个上传区域样式 | UTSJSONObject \| String | - | - |
| customItemStyle | 自定义媒体文件子项样式 | UTSJSONObject \| String | - | - |

## sn-upload-media-unicloud 属性

uniCloud 版上传至云存储，**无 `url`、`timeout`、`formData`** 属性（上传走 `uniCloud.uploadFile`），其余属性与上表一致，额外新增：

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| directory | 上传至云存储的目录，与随机生成的文件名拼合为云路径；开头 `/` 与结尾 `/` 会被自动规整 | String | `uploadImages/` | - |

## 事件

基础版与 uniCloud 版事件名一致，差异仅在 `uploaded` 的回调参数类型（基础版 `UploadFileSuccess`，uniCloud 版 `UniCloudUploadFileResult`）。

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| uploaded | (response: UploadFileSuccess) => Void | 每个文件上传成功时触发（uniCloud 版为 `UniCloudUploadFileResult`） |
| upload-error | (error: [[UniError@error]]) => Void | 每个文件上传失败时触发 |
| choose-error | (error: [[UniError@error]]) => Void | 选择媒体文件失败时触发（用户主动取消不触发） |
| image-chose | (res: ChooseImageSuccess) => Void | 选择图片成功时触发 |
| video-chose | (res: ChooseVideoSuccess) => Void | 选择视频成功时触发 |
| file-chose | (files: [[SnFile]][]) => Void | 混合模式选择文件（图片和视频）成功时触发 |

:::type-fields UniError

`UniError` 为 uni-app x 运行时内置的统一错误类型（uni 错误规范），全局 API 失败时通过 `fail` 回调返回。

| 名称 | 类型 | 描述 |
| :--- | :--- | :--- |
| errSubject | String | 错误主题（模块）名称，多级模块使用 `::` 分割 |
| errCode | Number | 错误码，见[错误码对照表](/api/error/standard) |
| errMsg | String | 错误描述信息 |
| cause | SourceError \| UniAggregateError \| null | 源错误信息 |

详见[错误处理机制](/api/error/error#unierror)。

:::
:::type-fields SnFile

文件信息：`filename`（文件名）、`path`（路径）、`size`（大小）、`ext`（扩展名）。

---

:::

## 方法

| 名称 | 参数 | 返回值 | 描述 |
| --- | --- | --- | --- |
| upload | - | - | 手动上传所有未上传 / 上传失败的文件 |

## 插槽

| 名称 | 说明 |
| --- | --- |
| default | 替换默认的媒体文件占位项 |

<DemoPhone name="sn-upload-media" />
