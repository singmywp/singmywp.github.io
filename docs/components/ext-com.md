# 扩展组件

> [查看扩展组件 2.0 版本差异](/differences/components/index)

SinleUI 框架的组件可分为两类：**基础组件**和**扩展组件**。

基础组件已包含在 [SinleUI](https://ext.dcloud.net.cn/plugin?name=sinle-ui) 插件内部。而扩展组件属于独立插件，调用系统能力或包含原生依赖，需要独立打包，因此部分需要在插件市场额外下载。

部分扩展组件是框架或其它组件的依赖，安装相关插件时 HBuilderX 会自动安装，无需您手动下载：

* Scan Provider `sn-e-scan-provider`（扫码相关组件的依赖核心；因包含第三方依赖，导入后需打包自定义基座运行）

其余扩展组件与核心框架不存在依赖关系，可根据需求前往插件市场自由下载：

* Markdown `sn-e-markdown`
* Blurview `sn-e-blurview`
* Scankit `sn-e-scankit`（华为统一扫码，依赖华为 HMS `scanplus` 与华为 maven 仓，需打包自定义基座）
