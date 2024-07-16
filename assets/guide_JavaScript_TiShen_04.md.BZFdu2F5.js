import{_ as e,c as t,o as a,a2 as o}from"./chunks/framework.BLHWSx9w.js";const i="/assets/bubbling.Ac887lgQ.png",f=JSON.parse('{"title":"事件流与事件委托","description":"","frontmatter":{},"headers":[],"relativePath":"guide/JavaScript/TiShen/04.md","filePath":"guide/JavaScript/TiShen/04.md","lastUpdated":1721114433000}'),l={name:"guide/JavaScript/TiShen/04.md"},c=o('<h1 id="事件流与事件委托" tabindex="-1">事件流与事件委托 <a class="header-anchor" href="#事件流与事件委托" aria-label="Permalink to &quot;事件流与事件委托&quot;">​</a></h1><h2 id="_1-事件捕获与事件冒泡" tabindex="-1">1. 事件捕获与事件冒泡 <a class="header-anchor" href="#_1-事件捕获与事件冒泡" aria-label="Permalink to &quot;1. 事件捕获与事件冒泡&quot;">​</a></h2><ol><li>事件流，一个完整的事件流是从<code>window</code>开始，最后回到<code>window</code>的一个过程。事件流被分为 3 个阶段：捕获阶段，目标阶段，冒泡阶段。先捕获，后冒泡，捕获是先父后子，冒泡是先子后父。</li></ol><p><img src="'+i+'" alt="alt text" title="基本原型链"></p><ol start="2"><li>默认情况下，事件是在冒泡阶段执行，可以用<code>addEventListener</code>改变事件执行的阶段。</li><li>阻止事件流行为，可以用<code>ev.stopPropagation()</code></li></ol><h2 id="_2-事件委托" tabindex="-1">2. 事件委托 <a class="header-anchor" href="#_2-事件委托" aria-label="Permalink to &quot;2. 事件委托&quot;">​</a></h2><ol><li>假设场景：一个<code>ul</code>父元素下，会动态加入<code>li</code>元素，当我们点击<code>li</code>的时候，需要触发一些事件。这时我们可以用事件委托。</li><li>解决的问题：</li></ol><ul><li>要给后来动态添加的元素添加事件</li><li>不需要给所有元素都绑定事件，只需要给一个元素绑定即可</li></ul><ol start="3"><li><code>event</code>对象几个属性</li></ol><ul><li><code>event.target</code>，触发事件的元素，被点击的具体元素</li><li><code>event.currentTarget</code>，绑定事件的元素</li><li><code>this</code>，绑定事件的元素</li></ul>',10),d=[c];function r(n,s,_,h,p,u){return a(),t("div",null,d)}const g=e(l,[["render",r]]);export{f as __pageData,g as default};
