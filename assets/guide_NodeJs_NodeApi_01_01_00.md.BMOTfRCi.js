import{_ as s,c as i,o as a,a2 as n}from"./chunks/framework.BLHWSx9w.js";const g=JSON.parse('{"title":"Node 模块化与模块化开发","description":"","frontmatter":{},"headers":[],"relativePath":"guide/NodeJs/NodeApi/01/01_00.md","filePath":"guide/NodeJs/NodeApi/01/01_00.md","lastUpdated":1658308269000}'),e={name:"guide/NodeJs/NodeApi/01/01_00.md"},l=n(`<h1 id="node-模块化与模块化开发" tabindex="-1">Node 模块化与模块化开发 <a class="header-anchor" href="#node-模块化与模块化开发" aria-label="Permalink to &quot;Node 模块化与模块化开发&quot;">​</a></h1><h2 id="_1-给-node-传递参数" tabindex="-1">1. 给 Node 传递参数 <a class="header-anchor" href="#_1-给-node-传递参数" aria-label="Permalink to &quot;1. 给 Node 传递参数&quot;">​</a></h2><ol><li>正常情况运行<code>node</code>程序，只需要在<code>node</code>命令后加文件名就行。</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node fileName.js</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>给<code>node</code>传递参数，只需要在文件名后面写入参数，再执行即可，该命令传入的参数为<code>yangzebo</code>和<code>age=18</code>。</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">node fileName.js yangzebo age</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="3"><li>从程序中获得传入的参数，<code>node</code>有一个全局对象<code>process</code>，这个对象里包含很多信息，其中就有传入的参数。<code>process.argv</code>是一个数组，其中<code>argv[0]</code> 是<code>node</code>的路径，<code>argv[1]</code>是程序的路径，剩下的就是你传入的参数。</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> argv</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.argv</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(argv)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* [&#39;C:\\\\Program Files\\\\nodejs\\\\node.exe&#39;, </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   &#39;E:\\\\myFile\\\\ajax\\\\TestCode\\\\index.js&#39;, </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   &#39;yangzebo&#39;, &#39;age=18&#39;] */</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ol start="3"><li>为何叫<code>argv</code>，<code>c/c++</code>程序中的<code>main</code>函数中实际上可以获取到两个参数，<code>argc</code>与<code>argv</code>:</li></ol><ul><li><code>argc</code>，<code>argument counter</code>的缩写，表示传递参数的个数。</li><li><code>argv</code>，<code>argument vector</code>的缩写，表示传入的具体参数。</li><li><code>vector</code>在程序中表示一种数据解构，在<code>c++/Java/js</code>中，都是一种数组解构，里面存储一些参数信息。</li></ul><h2 id="_2-node-程序的输出" tabindex="-1">2. Node 程序的输出 <a class="header-anchor" href="#_2-node-程序的输出" aria-label="Permalink to &quot;2. Node 程序的输出&quot;">​</a></h2><ol><li><code>console.log()</code>，输入传入的参数。</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;打印的内容&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 &#39;打印的内容&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li><code>console.clear()</code>，清除之前输入的内容。</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;前面打印的内容&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">clear</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;后面打印的内容&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 只会显示 &#39;后面打印的内容&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_3-node-常用全局对象" tabindex="-1">3. Node 常用全局对象 <a class="header-anchor" href="#_3-node-常用全局对象" aria-label="Permalink to &quot;3. Node 常用全局对象&quot;">​</a></h2><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><ol><li><code>Node.js</code> 的全局对象是 <code>global</code>，浏览器环境中 <code>js</code> 的全局对象是 <code>window</code>。后来添加了 <code>globalThis</code> 可以指代两个环境中的全局对象。</li><li>后面的<code>process</code>、<code>console</code>、<code>setTimeout</code>等都有被放到<code>globa</code>对象中。</li><li>在浏览器中执行的<code>JavaScript</code>代码，如果我们在顶级范围内通过<code>var</code>定义的一个属性，默认会被添加到<code>window</code> 对象上。但是在<code>node</code>中，我们通过<code>var</code>定义一个变量，它只是在当前模块中有一个变量，不会放到全局中。</li></ol><h3 id="特属与常用" tabindex="-1">特属与常用 <a class="header-anchor" href="#特属与常用" aria-label="Permalink to &quot;特属与常用&quot;">​</a></h3><ol><li>特殊的全局对象，可以直接在所以模块中使用，但是却不能在命令行中使用。</li></ol><ul><li><code>__dirname</code>对象，获得当前文件所在文件夹的绝对路径。（不包括当前文件名）</li><li><code>__filename</code>对象，获取当前文件所在的路径。（包括当前文件名）</li><li><code>module</code>对象，<code>export</code>对象，<code>require</code>对象</li></ul><ol start="2"><li>常用的全局对象</li></ol><ul><li><code>process</code>对象，提供了<code>Node</code>进程中相关的信息。</li><li><code>console</code>对象，提供了简单的调试控制台。</li><li><code>setTimeout</code>，<code>setInterval</code>，<code>clearTimeout</code>，<code>clearInterval</code>。</li></ul><h2 id="_4-nodejs-中的模块化" tabindex="-1">4. NodeJs 中的模块化 <a class="header-anchor" href="#_4-nodejs-中的模块化" aria-label="Permalink to &quot;4. NodeJs 中的模块化&quot;">​</a></h2><ol><li><code>NodeJs</code>遵循<code>CommonJs</code>规范，每个<code>js</code>文件都是一个模块，不能直接引用不同模块的数据，需要通过模块中内置的 <code>expors</code>，<code>module.exports</code>对象导出数据，和<code>require</code>引入对象。</li><li><code>exports</code>是模块中的一个空对象，也是要导出的一个对象。我们在模块中通过<code>exports.xxx</code>挂载属性，而在另一个文件中，我们使用<code>require</code>引入的就是之前导出的<code>exports</code>对象，所以你可以拿到我们之前挂载在对象上的属性。</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//  foo.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;yzb&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 18</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.myName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myName</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//  baz.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./foo.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可也以结构赋值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">myName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">age</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./foo.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { myName: &#39;yzb&#39;, age: 18 }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ol start="3"><li>实际上最后的导出操作是<code>module.exports</code>导出的，因为在<code>NodeJS</code>中源码自动在模块开始给我们做了<code>module.exports = exports</code>的操作，导致了他们都指向了同一个内存空间，最后导出的其实是<code>module.exports</code>这个对象</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// foo.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// NodeJs 现在最开始做了 module.exports = exports 这个操作</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;yzb&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;zql&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// baz.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./foo.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;zql&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // module.exports 和 exports 指向的是同一片内存空间</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// foo.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// NodeJs 现在最开始做了 module.exports = exports 这个操作</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;yzb&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // {name: &#39;yzb&#39;}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 重新赋值一个对象</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// baz.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./foo.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">foo </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { age: 18 } 是 module.exports 这个对象，所以最终导出的是 module.exports</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_5-模块的加载-require" tabindex="-1">5. 模块的加载 require <a class="header-anchor" href="#_5-模块的加载-require" aria-label="Permalink to &quot;5. 模块的加载 require&quot;">​</a></h2><ol><li>使用<code>require(xxx)</code>函数可以在在文件中引入入一个文件（模块）中导入的对象。<code>xxx</code>可以是</li></ol><ul><li>内置核心模块</li><li>文件路径</li><li>下载的包模块（既不是核心模块也不是路径类似于）</li></ul><ol start="2"><li><code>require(核心模块)</code>，会直接返回核心模块，并且停止查找例如<code>require(path)</code></li><li><code>require(路径)</code>，例如<code>require(./xxx)</code>，<code>require(../xxx)</code>。</li></ol><ul><li>如果路径是一个文件有后缀名，按照后缀名的格式查找对应的文件。如果没有后缀名，会按照如下顺序： <ul><li>如果只有一个名为<code>X</code>的文件，那么对查找该文件，如果文件名相同会按下面顺序查找：</li><li>查找<code>X.js</code>文件</li><li>查找<code>X.json</code>文件</li><li>查找<code>X.node</code>文件</li></ul></li><li>如果路径是一个名为<code>x</code>的文件夹，则按下面顺序查找目录下的名为<code>index</code>的文件 <ul><li>查找<code>X/index.js</code>文件</li><li>查找<code>X/index.json</code>文件</li><li>查找<code>X/index.node</code>文件</li></ul></li><li>找不到则报错</li></ul><ol start="4"><li><code>require(第三方包)</code>，引入一个不是路径也不是核心模块的包。则会先在当前文件夹中的<code>node_modules</code>中查找，如果找不到就向外层的<code>node_modules</code>中查找，如此循环直到找到导入的模块，如果找不到则会报错。</li></ol><h2 id="_6-模块加载的过程" tabindex="-1">6. 模块加载的过程 <a class="header-anchor" href="#_6-模块加载的过程" aria-label="Permalink to &quot;6. 模块加载的过程&quot;">​</a></h2><ol><li>模块在被第一次引入时，模块中的<code>js</code>代码会被运行一次</li></ol><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// foo.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// main.js</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;main&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 运行 main.js 后会先打印 foo 再 打印 main，是因为 require 是同步加载的</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="2"><li><p>模块被多次引入时，会缓存，最终只加载（运行）一次，因为每个模块的 <code>module</code> 对象中都有一个属性 <code>loaded</code>，初始值为<code>false</code> 当模块执行完毕便会改成<code>true</code>，如果第二次或多次引入，会根据<code>loaded</code>属性判断此模块已被加载就不会再次加载。</p></li><li><p>如果多个文件相互引用，那么采用的是数据结构--图结构中的深度优先搜索。</p></li></ol><h2 id="_7-模块化规范" tabindex="-1">7. 模块化规范 <a class="header-anchor" href="#_7-模块化规范" aria-label="Permalink to &quot;7. 模块化规范&quot;">​</a></h2><h3 id="commonjs" tabindex="-1">CommonJs <a class="header-anchor" href="#commonjs" aria-label="Permalink to &quot;CommonJs&quot;">​</a></h3><ol><li><code>CommonJs</code>加载模块是同步的，只有等到对应的模块加载完毕，当前模块中的内容才能被运行。</li><li>浏览器加载<code>js</code>文件需要先从服务器将文件下载下来，之后在加载运行。所以在浏览器中，我们通常不使用<code>CommonJS</code>规范。在<code>webpack</code>中使用<code>CommonJS</code>是另外一回事，因为它会将我们的代码转成浏览器可以直接执行的代码。</li><li>在早期为了可以在浏览器中使用模块化，通常会采用<code>AMD</code>或<code>CMD</code>。</li></ol><h3 id="amd-规范" tabindex="-1">AMD 规范 <a class="header-anchor" href="#amd-规范" aria-label="Permalink to &quot;AMD 规范&quot;">​</a></h3><ol><li><code>AMD</code> 是 <code>Asynchronous Module Definition</code>（异步模块定义）的缩写。</li><li>事实上 <code>AMD</code> 的规范还要早于 <code>CommonJS</code>，但是 <code>CommonJS</code> 目前依然在被使用，而 <code>AMD</code> 使用的较少了。</li><li><code>AMD</code> 实现的比较常用的库是 <code>require.js</code> 和 <code>curl.js</code>。</li><li><code>require.js</code>使用，<a href="https://github.com/requirejs/requirejs" target="_blank" rel="noreferrer">下载地址</a>。</li></ol><ul><li>在<code>html</code>页面中使用<code>script</code>标签引入<code>require.js</code>和定义入口文件。</li></ul><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./xxx/require.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data-main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./xxx/index.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>data-main</code>引入的文件就是入口文件，可以引入各个模块。书写规范如下</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  require.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    baseUrl: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    paths: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      foo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./xxx/foo.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      bar: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./xxx/bar.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 引入文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {})</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>模块的导出</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// foo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;yzb&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>模块的导入</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// bar</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo.name)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,52),p=[l];function h(t,d,r,k,o,c){return a(),i("div",null,p)}const u=s(e,[["render",h]]);export{g as __pageData,u as default};