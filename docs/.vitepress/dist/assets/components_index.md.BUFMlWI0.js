import{_ as e,c as s,o,a5 as a}from"./chunks/framework.BhjPWYS5.js";const i="/assets/images/levels.png",u=JSON.parse('{"title":"组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/index.md","filePath":"components/index.md"}'),c={name:"components/index.md"},d=a('<h1 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h1><p>SinleUI 所有组件均可在文档和 Demo 中查看用法说明及示例。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>本文档部分由 AI 辅助生成，如有谬误之处，还请指出 😁</p></div><h2 id="阅读须知" tabindex="-1">阅读须知 <a class="header-anchor" href="#阅读须知" aria-label="Permalink to &quot;阅读须知&quot;">​</a></h2><h3 id="颜色属性" tabindex="-1">颜色属性 <a class="header-anchor" href="#颜色属性" aria-label="Permalink to &quot;颜色属性&quot;">​</a></h3><p>SinleUI 主题内置有 <code>primary</code>、<code>info</code>、<code>warning</code>、<code>success</code>、<code>error</code> 五个主题，并且每个主题在亮色模式和暗黑模式下都各有三种程度：原色、更浅、更深。</p><p>一些组件内置了一系列与 SinleUI 配套的颜色主题，如 <code>sn-button</code>、<code>sn-tag</code> 、<code>sn-alert</code> 等。这些组件提供两个属性：<code>type</code> 和 <code>level</code>。<code>type</code> 的可选值即为五个主题；而 <code>level</code> 的可选值为 <code>first</code>、<code>second</code>、<code>third</code>、<code>least</code>（并非绝对，以具体组件文档为准），四种等级对应不同的颜色程度，如图所示：</p><p><img src="'+i+'" alt="等级"></p><hr><h3 id="特殊值" tabindex="-1">特殊值 <a class="header-anchor" href="#特殊值" aria-label="Permalink to &quot;特殊值&quot;">​</a></h3><p>在本文档内，组件的属性介绍中， “默认值” 一栏可能会出现以 <code>$</code> 符号开头的特殊变量/表达式。</p><p>这些变量/表达式所指代的内容各有不同，具体需根据相应的属性查看原值。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>使用这些以 <code>$</code> 开头的简写表达式仅是为了简化文档，开发时不可使用</p><p>例如：文档中出现 <code>$primary</code>，代码中只支持 <code>$snui.colors.primary</code></p></div><h4 id="对于-颜色相关-的属性" tabindex="-1">对于 <strong>颜色相关</strong> 的属性： <a class="header-anchor" href="#对于-颜色相关-的属性" aria-label="Permalink to &quot;对于 **颜色相关** 的属性：&quot;">​</a></h4><p><code>$xxxx</code> 意为 <code>$snui.colors.xxxx</code>。如 <code>$primary</code> ，指 <code>$snui.colors.primary</code></p><h4 id="对于-字体大小相关-的属性" tabindex="-1">对于 <strong>字体大小相关</strong> 的属性： <a class="header-anchor" href="#对于-字体大小相关-的属性" aria-label="Permalink to &quot;对于 **字体大小相关** 的属性：&quot;">​</a></h4><p><code>$xxxx</code> 意为 <code>$snui.configs.font.size(xxxx)</code>。如 <code>$3</code>，指 <code>$snui.configs.font.size(3)</code>。</p><h4 id="对于-圆角大小相关-的属性" tabindex="-1">对于 <strong>圆角大小相关</strong> 的属性： <a class="header-anchor" href="#对于-圆角大小相关-的属性" aria-label="Permalink to &quot;对于 **圆角大小相关** 的属性：&quot;">​</a></h4><p><code>$xxxx</code> 意为 <code>$snui.configs.radius.xxxx</code>。如 <code>$small</code>，指 <code>$snui.configs.radius.small</code>。</p><h4 id="对于-动画时长相关-的属性" tabindex="-1">对于 <strong>动画时长相关</strong> 的属性： <a class="header-anchor" href="#对于-动画时长相关-的属性" aria-label="Permalink to &quot;对于 **动画时长相关** 的属性：&quot;">​</a></h4><p><code>$xxxx</code> 意为 <code>$snui.configs.aniTime.xxxx</code>。如 <code>$normal</code>，指 <code>$snui.configs.aniTime.normal</code>。</p><h4 id="对于-其他部分-属性" tabindex="-1">对于 <strong>其他部分</strong> 属性： <a class="header-anchor" href="#对于-其他部分-属性" aria-label="Permalink to &quot;对于 **其他部分** 属性：&quot;">​</a></h4><p><code>$topbarHeight</code> 意为 <code>$snui.configs.page.topbarHeight</code>。</p><div class="tip custom-block"><p class="custom-block-title">注意</p><p><code>$snui.configs</code> 下的 <code>aniTime</code>、<code>radius</code>、<code>font.size()</code> 各配置项返回的都是带单位的字符串。</p><p>如果组件的属性是 <code>Number</code> 类型，这时默认值 <code>$xxxx</code> 实际指 <code>parseFloat($snui.configs.xxx.xxxx)</code></p><p>有时默认值内还会出现计算表达式，同样也是自动将配置项转为 Number。例如 <code>$3+1</code>，实际指</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`${</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parseFloat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$snui</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">configs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">font</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">size</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}px`</span></span></code></pre></div></div>',24),t=[d];function n(r,l,p,h,k,x){return o(),s("div",null,t)}const m=e(c,[["render",n]]);export{u as __pageData,m as default};
