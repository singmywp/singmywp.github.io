# 错误码对照表

SinleUI 相关插件统一错误码与错误信息对照。各 API 失败时返回的 `UniError.errCode` 对应下表，`errMsg` 由各模块按表提供；也可通过 `sinle-logger` 的 `getErrMsg(errCode)` 查询。

| errCode | errMsg                                                       | 含义                                                         |
| ------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0       | ok                                                           | 成功                                                         |
| 1       | cancel                                                       | 撤销                                                         |
| 3       | system permission denied                                     | 系统权限未授予                                               |
| 1300002 | No such file or directory                                    | 找不到文件或目录                                             |
| 9010002 | not support on this platform                                 | 此平台不支持该功能                                           |
| 9010005 | no returned data                                             | 无返回数据                                                   |
| 9010006 | cannot find object "uniCloud", please bind uniCloud first    | 找不到 uniCloud 对象，请先绑定服务空间                       |
| 9010007 | please bind URL first                                        | 请先绑定 URL 地址                                            |
| 9010008 | fail to read file                                            | 读取文件失败                                                 |
| 9010009 | fail to upload file                                          | 文件上传失败                                                 |
| 9010010 | fail to choose file                                          | 选择文件失败                                                 |
| 9010011 | brothers or parent of sn-backtop must be sn-scroll, sn-longlist or sn-page | Backtop 组件同级或父级必须为 sn-scroll/sn-longlist/sn-page   |
| 9010012 | v-model must be a length-2 number[]                          | Slider Double 组件的 `v-model` 属性必须为长度为 2 的 `number[]` |
| 9010013 | id of param feature's item cannot be "menu"                  | Topbar 组件 feature 属性子项 id 不能为“menu”                 |
| 9010014 | param "digit" must be a positive integer                     | digits 参数必须为正整数                                      |
| 9010015 | this storeKey already exists, please try another one         | StoreLib 实例的 `storeKey` 不得重复                          |
| 9010051 | param "content" not provided                                 | 未提供 `content` 参数                                        |
| 9010052 | param "path" not provided                                    | 未提供 `path` 参数                                           |
| 9010053 | invalid param "path"                                         | `path` 参数提供的路径不合法                                  |
| 9010054 | failed to open dialogPage                                    | 打开弹窗页失败                                               |
| 9010055 | failed to open modal dialogPage                              | 打开模态框弹窗页失败                                         |
| 9010056 | failed to open actionsheet dialogPage                        | 打开操作菜单弹窗页失败                                       |
| 9010057 | failed to open loading dialogPage                            | 打开加载弹窗页失败                                           |
| 1602001 | camera permission denied                                     | 相机权限未授予                                               |
| 1602002 | camera initialization failed                                 | 相机初始化失败                                               |
| 1602003 | image scan failed                                            | 图片识别失败                                                 |
| 1602004 | invalid image uri                                            | 图片路径不合法                                               |
| 1602005 | internal error                                               | 内部错误                                                     |

