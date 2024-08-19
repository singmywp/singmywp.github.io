# 扩展组件

SinleUI 框架的组件可以分为两类：**基础组件**和**扩展组件**。

基础组件已包含在 [SinleUI](https://ext.dcloud.net.cn/plugin?name=sinle-ui) 插件内部。而扩展组件属于 `UTS 组件插件`，是原生 UI 组件，调用系统能力，需要独立打包，因此需要在插件市场额外下载。

部分扩展组件是某些基础组件的依赖，安装 [SinleUI](https://ext.dcloud.net.cn/plugin?name=sinle-ui) 插件时 HBuilderX 会自动安装：

* SVG 组件 `sn-e-svg`
* 扫码核心组件 `sn-e-scan-provider`

其余扩展组件与核心框架不存在依赖关系，可根据需求自由下载。