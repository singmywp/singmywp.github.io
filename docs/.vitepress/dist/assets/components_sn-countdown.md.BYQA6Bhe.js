import{_ as e,D as l,c as a,I as s,a5 as i,o as d}from"./chunks/framework.BhjPWYS5.js";const k=JSON.parse('{"title":"Countdown 倒计时","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-countdown.md","filePath":"components/sn-countdown.md"}'),n={name:"components/sn-countdown.md"},o=i(`<h1 id="countdown-倒计时" tabindex="-1">Countdown 倒计时 <a class="header-anchor" href="#countdown-倒计时" aria-label="Permalink to &quot;Countdown 倒计时&quot;">​</a></h1><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><ul><li>用于显示某个活动的截止时间</li><li>推荐使用插槽布局为主，样式更好调。</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-countdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-countdown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>更多演示请下载 demo 查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">format</td><td style="text-align:left;">时间格式（参考 <a href="https://dayjs.fenxianglu.cn/category/parse.html#%E5%AD%97%E7%AC%A6%E4%B8%B2-%E6%A0%BC%E5%BC%8F" target="_blank" rel="noreferrer"><code>Day.js</code></a>）</td><td style="text-align:left;">String</td><td style="text-align:left;"><code>HH:mm:ss</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">time</td><td style="text-align:left;">总时长（单位 <code>ms</code>）</td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">autoplay</td><td style="text-align:left;">自动开始计时</td><td style="text-align:left;">Boolean</td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;"><code>true</code> |<code>false</code></td></tr><tr><td style="text-align:left;">millisecond</td><td style="text-align:left;">毫秒级精度（如果要显示毫秒请务必开启）</td><td style="text-align:left;">Boolean</td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;"><code>true</code> |<code>false</code></td></tr><tr><td style="text-align:left;">textSize</td><td style="text-align:left;">倒计时文本字体大小</td><td style="text-align:left;">String</td><td style="text-align:left;"><code>$2</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">textColor</td><td style="text-align:left;">倒计时文本颜色</td><td style="text-align:left;">String</td><td style="text-align:left;"><code>$text</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">customStyle</td><td style="text-align:left;">自定义倒计时样式</td><td style="text-align:left;">UTSJSONObject</td><td style="text-align:left;"><code>{}</code></td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">在这里放置布局组件，通过绑定 <code>ref</code> 对象实现倒计时</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">finish</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">倒计时完成时触发</td></tr><tr><td style="text-align:left;">change</td><td style="text-align:left;">(value: <a href="/api/types/components#sncountdowntime"><code>SnCountdownTime</code></a> ) =&gt; void</td><td style="text-align:left;">倒计时时间变化时触发</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">返回值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">start</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">开始计时</td></tr><tr><td style="text-align:left;">pause</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">暂停计时</td></tr><tr><td style="text-align:left;">stop</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">停止计时（归零）</td></tr><tr><td style="text-align:left;">reset</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">进度清空，自动重新开始计时</td></tr></tbody></table>`,13);function h(r,g,y,f,c,x){const t=l("DemoPhone");return d(),a("div",null,[o,s(t,{name:"sn-countdown"})])}const u=e(n,[["render",h]]);export{k as __pageData,u as default};
