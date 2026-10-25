# 错误码对照表

SinleUI 相关插件统一错误码与错误信息对照。各 API 失败时返回的 `UniError.errCode` 对应下表，`errMsg` 由各模块按表提供；也可通过 `sinle-logger` 的 `getErrMsg(errCode)` 查询。

| errCode | errMsg                                                       | 含义                                                         |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0       | ok                                                           | 成功                                                         |
| 1       | cancel                                                       | 撤销                                                         |
| 3       | system permission denied                                     | 系统权限未授予                                               |
| 1001    | title is empty                                               | 轻提示文本为空（`snu.showToast` 未传入 `text` / `title`，`sn-e-toast` 插件返回） |
| 1002    | show toast failed                                            | 显示轻提示失败（HarmonyOS 原生 Toast 调用失败）              |
| 1300002 | No such file or directory                                    | 找不到文件或目录                                             |
| 9010002 | not support on this platform                                 | 此平台不支持该功能                                           |
| 9010005 | no returned data                                             | 无返回数据                                                   |
| 9010006 | cannot find object "uniCloud", please bind uniCloud first    | 找不到 uniCloud 对象，请先绑定服务空间                       |
| 9010007 | please bind URL first                                        | 请先绑定 URL 地址                                            |
| 9010008 | fail to read file                                            | 读取文件失败                                                 |
| 9010009 | fail to upload file                                          | 文件上传失败                                                 |
| 9010010 | fail to choose file                                          | 选择文件失败                                                 |
| 9010011 | brothers or parent of sn-backtop must be sn-scroll, sn-longlist or sn-page | Backtop 组件同级或父级必须为 sn-scroll/sn-longlist/sn-page；**历史保留**：2.0 起 sn-backtop 不再产出该码   |
| 9010012 | v-model must be a length-2 number[]                          | Slider Double 组件的 `v-model` 属性必须为长度为 2 的 `number[]`；**已废弃**：2.0 的 sn-slider-double 改为静默兜底 |
| 9010013 | id of param feature's item cannot be "menu"                  | Topbar 组件 feature 属性子项 id 不能为“menu”；**已废弃**：sn-topbar 的 feature 属性已改为 menuData                 |
| 9010014 | param "digit" must be a positive integer                     | digits 参数必须为正整数                                      |
| 9010015 | this storeKey already exists, please try another one         | StoreLib 实例的 `storeKey` 不得重复；**已废弃**：Store 状态管理库 2.0 已移除                          |
| 9010016 | upload timeout                                               | `sn-upload-media` 组件上传超时（超时后已中止上传任务）       |
| 9010051 | param "content" not provided                                 | 未提供 `content` 参数；**已废弃**：2.0 起无模块产出                                        |
| 9010052 | param "path" not provided                                    | 未提供 `path` 参数；**已废弃**：2.0 起无模块产出                                           |
| 9010053 | invalid param "path"                                         | `path` 参数提供的路径不合法；**已废弃**：2.0 起无模块产出                                  |
| 9010054 | failed to open dialogPage                                    | 打开弹窗页失败；**已废弃**：已细分为 9010055 / 9010056 / 9010057                                               |
| 9010055 | failed to open modal dialogPage                              | 打开模态框弹窗页失败                                         |
| 9010056 | failed to open actionsheet dialogPage                        | 打开操作菜单弹窗页失败                                       |
| 9010057 | failed to open loading dialogPage                            | 打开加载弹窗页失败                                           |
| 9012001 | Worker 创建失败                                              | `runSort`（sn-sort 插件）的 Worker 子线程创建失败            |
| 9012002 | Worker 运行错误                                              | `runSort`（sn-sort 插件）的 Worker 子线程运行错误，错误详情以 `：` 追加在后 |
| 1602001 | camera permission denied                                     | 相机权限未授予                                               |
| 1602002 | camera initialization failed                                 | 相机初始化失败                                               |
| 1602003 | image scan failed                                            | 图片识别失败                                                 |
| 1602004 | invalid image uri                                            | 图片路径不合法                                               |
| 1602005 | internal error                                               | 内部错误                                                     |

> 说明：标注**历史保留**的错误码在 2.0 源码中已无模块产出、仅为兼容 1.x 保留；标注**已废弃**的错误码对应的能力已在 2.0 移除。二者仍保留在 `sinle-logger` 的错误信息表中，`getErrMsg(errCode)` 可正常查询。

