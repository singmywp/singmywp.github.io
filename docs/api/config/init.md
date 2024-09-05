# 初始化配置

SinleUI 支持在框架载入时进行初始化配置，您可利用此功能快速设置应用配置。

如下，在自己项目下 `main.uts` 文件写入：

``` typescript
import App from './App.uvue'
import { createSSRApp } from 'vue'
import { $snui } from './uni_modules/sinle-ui'

export function createApp() {
	const app = createSSRApp(App)
	
	// 在这里配置 SinleUI 初始化配置，在应用的任意位置都可以通过相同的方法设置或获取配置
 	// 更多配置方法见文档：API - 配置 - 全局配置
  
 	// 设置全局字体
	$snui.configs.font.mainFamily = 'alipuhuiheavy'
 	// 设置全局基础字体大小
	$snui.configs.font.baseSize = '25px'
 	// 设置全局基础圆角大小
	$snui.configs.radius.baseSize = '26px'
 	// ...
	
	return {
		app
	}
}
```

更多配置项见 [全局配置](./index)