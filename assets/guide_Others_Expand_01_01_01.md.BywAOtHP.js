import{_ as s,c as a,o as i,a2 as n}from"./chunks/framework.BLHWSx9w.js";const g=JSON.parse('{"title":"工具网站","description":"","frontmatter":{},"headers":[],"relativePath":"guide/Others/Expand/01/01_01.md","filePath":"guide/Others/Expand/01/01_01.md","lastUpdated":1696650549000}'),e={name:"guide/Others/Expand/01/01_01.md"},l=n(`<h1 id="工具网站" tabindex="-1">工具网站 <a class="header-anchor" href="#工具网站" aria-label="Permalink to &quot;工具网站&quot;">​</a></h1><h2 id="_1-文章学习" tabindex="-1">1. 文章学习 <a class="header-anchor" href="#_1-文章学习" aria-label="Permalink to &quot;1. 文章学习&quot;">​</a></h2><ol><li><a href="http://c.biancheng.net/view/5944.html" target="_blank" rel="noreferrer">JS 鼠标事件</a></li><li><a href="https://www.cnblogs.com/goloving/p/15381013.html" target="_blank" rel="noreferrer">window.postMessage 方法介绍</a>，<code>postMessage</code> 是 <code>html5</code> 引入的 <code>API</code>，<code>postMessage()</code>方法允许来自不同源的脚本采用异步方式进行有效的通信，可以实现跨文本文档、多窗口、跨域消息传递，多用于窗口间数据通信，这也使它成为跨域通信的一种有效的解决方案。</li><li>vue2 的响应式原理，<a href="https://juejin.cn/post/6932659815424458760" target="_blank" rel="noreferrer">文章 1</a>，<a href="https://juejin.cn/post/6973196579918315533" target="_blank" rel="noreferrer">文章 2</a>， <a href="https://blog.csdn.net/weixin_44972008/article/details/115922118" target="_blank" rel="noreferrer">文章 3</a>。</li></ol><h2 id="_2-插件文档" tabindex="-1">2. 插件文档 <a class="header-anchor" href="#_2-插件文档" aria-label="Permalink to &quot;2. 插件文档&quot;">​</a></h2><ol><li><a href="https://kazupon.github.io/vue-i18n/zh/" target="_blank" rel="noreferrer">Vue I18n</a>，多国语言设置。</li><li><a href="https://www.wangeditor.com/" target="_blank" rel="noreferrer">wangEditor 5</a>，富文本编辑器。</li><li><a href="http://bluebirdjs.com/docs/getting-started.html" target="_blank" rel="noreferrer">蓝鸟 Promise</a>，提高<code>Promise</code>效率性能，提高<code>10</code>倍。</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 安装蓝鸟</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">npm install bluebird</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或者</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cnpm install bluebird</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在 main.js 中引入，并配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Promise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;bluebird&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Enable warnings 启用警告</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  warnings: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Enable long stack traces 启用长堆栈跟踪</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  longStackTraces: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Enable cancellation 启用取消</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  cancellation: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Enable monitoring 启用监视</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  monitoring: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // Enable async hooks 启用异步挂钩</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  asyncHooks: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">globalThis.Promise </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><ol start="4"><li><a href="https://www.npmjs.com/package/big-js" target="_blank" rel="noreferrer">big.js</a>，一个用于任意精度十进制算术的小型快速 <code>JavaScript</code> 库。</li><li><a href="https://github.com/MikeMcl/bignumber.js/" target="_blank" rel="noreferrer">bignumber.js</a>，一个用于任意精度十进制和非十进制算术的 <code>JavaScript</code> 库，整数和小数。</li><li><a href="https://www.npmjs.com/package/big-js" target="_blank" rel="noreferrer">decimal.js</a>，一个用于<code>JavaScript</code> 的任意精度 <code>Decimal</code> 类型，整数和浮点数。还处理十六进制、二进制和八进制值。</li><li><a href="https://www.npmjs.com/package/fast-json-stringify" target="_blank" rel="noreferrer">fast-json-stringify</a>，快速的<code>JSON</code>转换，把<code>js</code>对象转化为<code>JSON</code>字符串。可以用于大量的<code>JSON</code>字符串转换。最好使用<code>node 14.18.1</code>版本,不然可能会编译不了。下载的版本选择<code>2.7.13</code></li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Supported types: [&#39;string&#39;, &#39;integer&#39;, &#39;number&#39;, &#39;array&#39;, &#39;object&#39;, &#39;boolean&#39;, &#39;null&#39;]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 基础使用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fastJson</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fast-json-stringify&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> stringify</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fastJson</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;object&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  properties: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name: { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;string&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    age: { type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;number&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;yang-zebo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ol start="8"><li><a href="https://www.npmjs.com/package/typescript-json" target="_blank" rel="noreferrer">TypeScript-JSON</a>，超快的运行时验证器和<code>JSON.stringify()</code>函数，只有一行。</li></ol>`,9),p=[l];function t(r,h,k,c,d,o){return i(),a("div",null,p)}const b=s(e,[["render",t]]);export{g as __pageData,b as default};