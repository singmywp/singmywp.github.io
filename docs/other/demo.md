# Demo

目前 SinleUI 已在 Android、Web 平台上线。

两个平台的 Demo 如下：

<div style="display: flex;flex-wrap: wrap;justify-content: center;align-items: center;">

<div style="padding: 5px">


::: info Android
<div style="display:flex;flex-direction:row;">
<div class="primaryButton" style="margin: 10px 0px 0px 20px;"><a href="https://github.com/singmywp/SinleUI-Demo/releases">Github😎</a></div>
<div class="primaryButton" style="margin: 10px 20px 0px 20px;"><a href="https://gitee.com/singmywp/SinleUI-Demo/releases">Gitee☺️</a></div>
</div>
<img src="/assets/images/android_demo.svg" 
width="250px"
style="background: white;margin: 20px;" />
:::
</div>

<div style="padding: 5px">

::: info Web
<div class="primaryButton" style="margin: 10px 20px;"><a href="javascript:window.open('/demo/#/')">即刻体验🤣</a></div>

<img src="/assets/images/web_demo.svg" 
width="250px"
style="background: white;margin: 20px;" />
:::
</div>
</div>

### 其他地址
请前往 [SinleUI插件](https://ext.dcloud.net.cn/plugin?id=19887) Demo 展示处下载

## 弹出式登录模板

- Demo「模板」列表新增「弹出式登录页面」，对应 `pages/template/popup-login.uvue`。进入页面后点击「打开登录页面」显示底部 `sn-drawer`。
- 布局采用浅灰背景、顶部圆形返回/关闭按钮、蓝色账号图标、白色圆角输入框和底部登录按钮，标题为「登录账号」。抽屉高度随窗口调整，短屏可滚动，底部保留安全区。
- 复用 `sn-button`、`sn-icon`、`sn-text`、`sn-input`、`sn-link`、`sn-agreement`、`sn-notification`。顶部返回/关闭按钮采用 `type="info" level="first"` 的内置按压态；输入框内区号和验证码链接显式垂直居中。
- 密码登录、其他登录方式与协议链接使用 `sn-link`；登录方式切换链接下方通过 `sn-agreement` 勾选同意，未勾选时使用白底灰色描边，勾选后为蓝底白勾。用户协议和隐私政策链接打开已有协议详情页，底部保留账号隐私声明。
- 默认展示示例手机号，可切换验证码/密码登录。点击获取验证码后生成随机六位验证码并启动 60 秒倒计时，约 2 秒后通过 `sn-notification` 模拟短信通知，支持复制验证码与关闭通知，不发送真实短信。手机号、验证码或密码格式符合要求且勾选协议后才可提交；验证码模式校验当前手机号对应的最新模拟验证码，页面卸载时清理发送与倒计时定时器。
- 登录仅展示前端校验结果，不创建账号、不执行认证。接入业务时须替换短信发送、验证码校验和密码认证逻辑；当前区号固定为 `+86`。「其他方式登录」打开已有登录模板。
