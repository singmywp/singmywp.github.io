# 初始化配置

SinleUI 支持在框架载入时进行初始化配置，您可利用此功能快速设置应用配置。

如下，在自己项目下 `main.uts` 文件写入：

``` typescript
import App from './App.uvue'
import { createSSRApp } from 'vue'
import { $snui, SnColorBase } from './uni_modules/sinle-ui'

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
	// 设置全局配色方案，可直接复制 /uni_modules/sinle-ui/libs/theme/theme.uts 的两个对象，然后修改
	let colorslight = {
		transparent: "rgba(255,255,255,0)",
		page: "#f9f9f9",
		front: "#fff",
		dark: "#000",
		disabled: "#eeeef1",
		disabledText: "#cccccc",
		disabledDark: "#e3e3e8",
		disabledDarkText: "#bdbdbd",
		line: "#f1f1f2",
		lineText: "#cacacb",
		title: "#191919",
		text: "#ff0000",
		textLight: "#999999",
		info: "#f7f7f8",
		infoActive: "#efeff1",
		infoText: "#000",
		infoLight: "#fafafa",
		infoLightActive: "#f0f0f1",
		infoLightText: "#f7f7f8",
		infoDark: "#d6d6db",
		infoDarkActive: "#e9e9ec",
		infoDarkText: "#000",
		primary: "#b300ff",
		primaryActive: "#b9d2ff",
		primaryText: "#fff",
		primaryLight: "#e4effd",
		primaryLightActive: "#dde8f5",
		primaryLightText: "#4d82ff",
		primaryDark: "#3662d9",
		primaryDarkActive: "#4d82ff",
		primaryDarkText: "#fff",
		success: "#39c478",
		successActive: "#5cd18d",
		successText: "#fff",
		successLight: "#c6f1d5",
		successLightActive: "#c0eacf",
		successLightText: "#39c478",
		successDark: "#269e60",
		successDarkActive: "#39c478",
		successDarkText: "#fff",
		error: "#fc5454",
		errorActive: "#ff7f7a",
		errorText: "#fff",
		errorLight: "#ffdcd8",
		errorLightActive: "#f7d5d2",
		errorLightText: "#fc5454",
		errorDark: "#d63c41",
		errorDarkActive: "#fc5454",
		errorDarkText: "#fff",
		warning: "#f6b142",
		warningActive: "#ffcb6b",
		warningText: "#000",
		warningLight: "#fff1cd",
		warningLightActive: "#f7eac7",
		warningLightText: "#f6b142",
		warningDark: "#cf8b2d",
		warningDarkActive: "#f6b142",
		warningDarkText: "#000",
		toast: "#4c4c4c"
	} as SnColorBase
	
 	let colorsdark = {
		transparent: "rgba(0,0,0,0)",
		page: "#000",
		front: "#181a1b",
		dark: "#fff",
		disabled: "#161617",
		disabledText: "#313135",
		disabledDark: "#1f1f23",
		disabledDarkText: "#333338",
		line: "#333333",
		lineText: "#5c5d61",
		title: "#fff",
		text: "#0077ff",
		textLight: "#d9d9d9",
		info: "#28292a",
		infoActive: "#323334",
		infoText: "#fff",
		infoLight: "#393b3c",
		infoLightActive: "#464749",
		infoLightText: "#fff",
		infoDark: "#141415",
		infoDarkActive: "#1e1f1f",
		infoDarkText: "#fff",
		primary: "#00ff00",
		primaryActive: "#73a2ff",
		primaryText: "#fff",
		primaryLight: "#09293f",
		primaryLightActive: "#0e4162",
		primaryLightText: "#4d82ff",
		primaryDark: "#3662d9",
		primaryDarkActive: "#4d82ff",
		primaryDarkText: "#fff",
		success: "#39c478",
		successActive: "#5cd18d",
		successText: "#fff",
		successLight: "#174828",
		successLightActive: "#21693a",
		successLightText: "#39c478",
		successDark: "#269e60",
		successDarkActive: "#39c478",
		successDarkText: "#fff",
		error: "#fc5454",
		errorActive: "#ff7f7a",
		errorText: "#fff",
		errorLight: "#4e2723",
		errorLightActive: "#6a352f",
		errorLightText: "#fc5454",
		errorDark: "#d63c41",
		errorDarkActive: "#fc5454",
		errorDarkText: "#fff",
		warning: "#f6b142",
		warningActive: "#ffcb6b",
		warningText: "#000",
		warningLight: "#776126",
		warningLightActive: "#977c30",
		warningLightText: "#f6b142",
		warningDark: "#cf8b2d",
		warningDarkActive: "#f6b142",
		warningDarkText: "#000",
		toast: "#4c4c4c"
	} as SnColorBase
  
	$snui.setColorSet('light', colorslight)
	$snui.setColorSet('dark', colorsdark)
  
 	// 修改某一颜色值
	$snui.setColor('light', 'primary', '#ff0000')
	$snui.setColor('dark', 'primary', '#00ff00')
	
	return {
		app
	}
}
```

更多配置项见 [全局配置](./index)