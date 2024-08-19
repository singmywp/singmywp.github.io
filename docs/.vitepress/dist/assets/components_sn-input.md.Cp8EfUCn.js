import{_ as d,D as e,c as o,I as r,a5 as c,o as n}from"./chunks/framework.BhjPWYS5.js";const m=JSON.parse('{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-input.md","filePath":"components/sn-input.md"}'),a={name:"components/sn-input.md"},i=c(`<h1 id="input-输入框" tabindex="-1">Input 输入框 <a class="header-anchor" href="#input-输入框" aria-label="Permalink to &quot;Input 输入框&quot;">​</a></h1><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ul><li>普普通通的输入框</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>更多演示请下载 demo 查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th><th>可选值</th></tr></thead><tbody><tr><td>v-model</td><td>输入框文本内容</td><td>String</td><td>-</td><td>-</td></tr><tr><td>name</td><td>表单的控件名称，作为键值对的一部分与表单(form组件)一同提交。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>String</td><td>-</td><td>-</td></tr><tr><td>showBorder</td><td>是否显示边框</td><td>Boolean</td><td><code>true</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>showActiveBorder</td><td>激活状态下是否显示边框</td><td>Boolean</td><td><code>true</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>borderColor</td><td>输入框边框颜色</td><td>String</td><td><code>$line</code></td><td>-</td></tr><tr><td>bgColor</td><td>输入框背景颜色</td><td>String</td><td><code>$front</code></td><td>-</td></tr><tr><td>textColor</td><td>输入框文本颜色</td><td>String</td><td><code>$text</code></td><td>-</td></tr><tr><td>iconColor</td><td>输入框图标颜色</td><td>String</td><td><code>$text</code></td><td>-</td></tr><tr><td>activeBorderColor</td><td>激活状态下输入框边框颜色</td><td>String</td><td><code>$primary</code></td><td>-</td></tr><tr><td>activeBgColor</td><td>激活状态下输入框背景颜色</td><td>String</td><td><code>$front</code></td><td>-</td></tr><tr><td>disabledBgColor</td><td>禁用状态下输入框背景颜色</td><td>String</td><td><code>$disabled</code></td><td>-</td></tr><tr><td>disabledTextColor</td><td>禁用状态下输入框文本颜色</td><td>String</td><td><code>$disabledText</code></td><td>-</td></tr><tr><td>cursor</td><td>指定focus时的光标位置。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>Number</td><td><code>0</code></td><td>-</td></tr><tr><td>cursorColor</td><td>指定光标颜色</td><td>String</td><td>-</td><td>-</td></tr><tr><td>cursorSpacing</td><td>指定光标与键盘的距离，单位 <code>px</code> 。取 input 距离底部的距离和 <code>cursorSpacing</code> 指定的距离的最小值作为光标与键盘的距离。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>Number</td><td><code>0</code></td><td>-</td></tr><tr><td>selectionStart</td><td>光标起始位置，自动聚集时有效，需与 <code>selectionEnd</code> 搭配使用。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>Number</td><td><code>-1</code></td><td>-</td></tr><tr><td>selectionEnd</td><td>光标结束位置，自动聚集时有效，需与 <code>selectionStart</code> 搭配使用。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>Number</td><td><code>-1</code></td><td>-</td></tr><tr><td>placeholder</td><td>输入框为空时占位符。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>String</td><td>-</td><td>-</td></tr><tr><td>placeholderStyle</td><td>指定 placeholder 的样式。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>String</td><td>-</td><td>-</td></tr><tr><td>placeholderClass</td><td>指定 placeholder 的样式类，目前仅支持color,font-size和font-weight。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>String</td><td>-</td><td>-</td></tr><tr><td>type</td><td>input的类型</td><td>String</td><td><code>text</code></td><td><code>text</code> |<code> number</code> |<code> digit</code> |<code>tel</code></td></tr><tr><td>password</td><td>是否是密码类型</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>confirmHold</td><td>点击键盘右下角按钮时是否保持键盘不收起。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>holdKeyboard</td><td>focus时，点击页面的时候不收起键盘。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>adjustPosition</td><td>键盘弹起时，是否自动上推页面。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>Boolean</td><td><code>true</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>focus</td><td>获取焦点。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>loading</td><td>是否加载中</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>disabled</td><td>是否禁用输入框</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>readonly</td><td>是否只读（只读与禁用的区别是：禁用时除不可点击外，颜色也有所变化）</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>confirmType</td><td>设置键盘右下角按钮的文字，仅在 type为text 时生效。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>String</td><td><code>text</code></td><td><code>send</code> |<code> search</code> |<code> next</code> |<code> go</code> |<code>done</code></td></tr><tr><td>inputmode</td><td>是一个枚举属性，它提供了用户在编辑元素或其内容时可能输入的数据类型的提示。在符合条件的高版本webview里，uni-app的 web 和 app-vue 平台中可使用本属性。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>String</td><td><code>text</code></td><td><code>none</code> |<code> text</code> |<code> decimal</code> |<code> numeric</code> |<code> tel</code> |<code> search</code> |<code> email</code> |<code>url</code></td></tr><tr><td>autoFocus</td><td>自动获取焦点，与<code>focus</code>属性对比，此属性只会首次生效。同 <a href="https://doc.dcloud.net.cn/uni-app-x/component/input.html#%E5%B1%9E%E6%80%A7" target="_blank" rel="noreferrer"><code>input</code></a>。</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td>Boolean</td><td><code>false</code></td><td><code>true</code> | <code>false</code></td></tr><tr><td>borderRadius</td><td>输入框圆角大小</td><td>String</td><td><code>$small</code></td><td>-</td></tr><tr><td>borderWidth</td><td>输入框边框宽度</td><td>String</td><td><code>2px</code></td><td>-</td></tr><tr><td>prefixIcon</td><td>输入框前置图标</td><td>String</td><td>-</td><td>-</td></tr><tr><td>suffixIcon</td><td>输入框后置图标</td><td>String</td><td>-</td><td>-</td></tr><tr><td>iconSize</td><td>输入框图标字体大小</td><td>String</td><td><code>$4</code></td><td>-</td></tr><tr><td>padding</td><td>输入框内边距</td><td>String</td><td><code>8px 13px</code></td><td>-</td></tr><tr><td>maxlength</td><td>最大输入长度，0和正数为合法值，非法值的时候不限制最大长度</td><td>Number</td><td><code>-1</code></td><td>-</td></tr><tr><td>textSize</td><td>输入框文本字体大小</td><td>String</td><td><code>$2</code></td><td>-</td></tr><tr><td>textFont</td><td>输入框文本字体</td><td>String</td><td>-</td><td>-</td></tr><tr><td>align</td><td>输入框文本对齐方式</td><td>String</td><td>-</td><td><code>flex-start</code> | <code>center</code> | <code>flex-end</code></td></tr><tr><td>customStyle</td><td>自定义输入框样式</td><td>UTSJSONObject</td><td><code>{}</code></td><td>-</td></tr><tr><td>customPrefixIconStyle</td><td>自定义输入框前置图标样式</td><td>UTSJSONObject</td><td><code>{}</code></td><td>-</td></tr><tr><td>customSuffixIconStyle</td><td>自定义输入框后置图标样式</td><td>UTSJSONObject</td><td><code>{}</code></td><td>-</td></tr><tr><td>customContainStyle</td><td>自定义输入框容器样式</td><td>UTSJSONObject</td><td><code>{}</code></td><td>-</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table tabindex="0"><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>prefix</td><td>替换输入框内部原有的前置图标</td></tr><tr><td>suffix</td><td>替换输入框内部原有的后置图标</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th>事件名</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>input</td><td><code>(event: UniInputEvent)=&gt;void</code></td><td>当键盘输入时，触发input事件，<code>event.detail = {value, cursor}</code>，处理函数可以直接 return 一个字符串，将替换输入框的内容。</td></tr><tr><td>focus</td><td><code>(event: UniInputFocusEven) =&gt; void</code></td><td>输入框聚焦时触发，<code>event.detail = { value, height }</code>，height 为键盘高度</td></tr><tr><td>blur</td><td><code>(event : UniInputBlurEvent)=&gt;void</code></td><td>输入框失去焦点时触发，<code>event.detail = {value: value}</code></td></tr><tr><td>keyboardheightchange</td><td><code>(event:UniInputKeyboardHeightChangeEvent)=&gt;void</code></td><td>键盘高度发生变化的时候触发此事件，<code>event.detail = {height: height, duration: duration}</code></td></tr><tr><td>confirm</td><td><code>(event : UniInputConfirmEvent)=&gt;void</code></td><td>点击完成按钮时触发，<code>event.detail = {value: value}</code></td></tr><tr><td>suffix-click</td><td><code>()=&gt;void</code></td><td>点击后置图标时触发</td></tr><tr><td>prefix-click</td><td><code>()=&gt;void</code></td><td>点击前置图标时触发</td></tr></tbody></table>`,11);function l(s,p,h,u,g,E){const t=e("DemoPhone");return n(),o("div",null,[i,r(t,{name:"sn-input"})])}const k=d(a,[["render",l]]);export{m as __pageData,k as default};
