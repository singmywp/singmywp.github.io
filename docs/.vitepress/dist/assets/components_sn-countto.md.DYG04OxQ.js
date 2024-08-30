import{_ as e,D as l,c as a,I as d,a5 as s,o as i}from"./chunks/framework.BhjPWYS5.js";const k=JSON.parse('{"title":"Countto 数字滚动","description":"","frontmatter":{},"headers":[],"relativePath":"components/sn-countto.md","filePath":"components/sn-countto.md"}'),n={name:"components/sn-countto.md"},o=s(`<h1 id="countto-数字滚动" tabindex="-1">Countto 数字滚动 <a class="header-anchor" href="#countto-数字滚动" aria-label="Permalink to &quot;Countto 数字滚动&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><ul><li>滚动的数字，常用在 PPT 的大屏上</li></ul><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-countto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">endVal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6666</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sn-countto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><strong>更多演示请下载 demo 查看</strong></p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">可选值</th></tr></thead><tbody><tr><td style="text-align:left;">aniTime</td><td style="text-align:left;">动画时长（单位 <code>ms</code>）</td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>2000</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">startVal</td><td style="text-align:left;">开始值</td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">endVal</td><td style="text-align:left;">结束值</td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">decimals</td><td style="text-align:left;">小数位数（值为 <code>0</code> 则不显示小数部分）</td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">separate</td><td style="text-align:left;">分割数字位数（值为 <code>0</code> 则不分割）</td><td style="text-align:left;">Number</td><td style="text-align:left;"><code>0</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">easing</td><td style="text-align:left;">以 easeOutSine 缓动动画代替默认的 linear 动画，使得动画在结束前减速</td><td style="text-align:left;">Boolean</td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;"><code>true</code> |<code>false</code></td></tr><tr><td style="text-align:left;">autoplay</td><td style="text-align:left;">自动开始计时</td><td style="text-align:left;">Boolean</td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;"><code>true</code> | <code>false</code></td></tr><tr><td style="text-align:left;">textSize</td><td style="text-align:left;">数字滚动文本字体大小</td><td style="text-align:left;">String</td><td style="text-align:left;"><code>$2</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">textColor</td><td style="text-align:left;">数字滚动文本颜色</td><td style="text-align:left;">String</td><td style="text-align:left;"><code>$text</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">customStyle</td><td style="text-align:left;">自定义数字滚动样式</td><td style="text-align:left;">UTSJSONObject</td><td style="text-align:left;"><code>{}</code></td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">finish</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">动画播放完成时触发</td></tr></tbody></table><h2 id="方法" tabindex="-1">方法 <a class="header-anchor" href="#方法" aria-label="Permalink to &quot;方法&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">名称</th><th style="text-align:left;">参数</th><th style="text-align:left;">返回值</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">play</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">播放动画</td></tr><tr><td style="text-align:left;">pause</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">暂停动画</td></tr><tr><td style="text-align:left;">stop</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">停止动画（达到 <code>endVal</code>）</td></tr><tr><td style="text-align:left;">reset</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td><td style="text-align:left;">进度清空，自动重新播放动画</td></tr></tbody></table>`,11);function h(r,g,y,f,x,c){const t=l("DemoPhone");return i(),a("div",null,[o,d(t,{name:"sn-countto"})])}const u=e(n,[["render",h]]);export{k as __pageData,u as default};
