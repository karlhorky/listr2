import{_ as e,W as t,X as r,a5 as a}from"./framework-4c9bc095.js";const d={},n=a('<h1 id="class-concurrency" tabindex="-1"><a class="header-anchor" href="#class-concurrency" aria-hidden="true">#</a> Class: Concurrency</h1><h2 id="properties" tabindex="-1"><a class="header-anchor" href="#properties" aria-hidden="true">#</a> Properties</h2><h3 id="concurrency" tabindex="-1"><a class="header-anchor" href="#concurrency" aria-hidden="true">#</a> concurrency</h3><p>• <code>Private</code> <strong>concurrency</strong>: <code>number</code></p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4><p>src/utils/concurrency.ts:5</p><hr><h3 id="count" tabindex="-1"><a class="header-anchor" href="#count" aria-hidden="true">#</a> count</h3><p>• <code>Private</code> <strong>count</strong>: <code>number</code></p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4><p>src/utils/concurrency.ts:6</p><hr><h3 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> queue</h3><p>• <code>Private</code> <strong>queue</strong>: <code>Set</code>&lt;() =&gt; <code>void</code>&gt;</p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4><p>src/utils/concurrency.ts:7</p><h2 id="constructors" tabindex="-1"><a class="header-anchor" href="#constructors" aria-hidden="true">#</a> Constructors</h2><h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3><p>• <strong>new Concurrency</strong>(<code>options</code>)</p><h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>options</code></td><td style="text-align:left;"><code>Object</code></td></tr><tr><td style="text-align:left;"><code>options.concurrency</code></td><td style="text-align:left;"><code>number</code></td></tr></tbody></table><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4><p>src/utils/concurrency.ts:9</p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><h3 id="add" tabindex="-1"><a class="header-anchor" href="#add" aria-hidden="true">#</a> add</h3><p>▸ <strong>add</strong>&lt;<code>T</code>&gt;(<code>fn</code>): <code>Promise</code>&lt;<code>T</code>&gt;</p><h4 id="type-parameters" tabindex="-1"><a class="header-anchor" href="#type-parameters" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>T</code>&gt;</p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4><p>src/utils/concurrency.ts:15</p><hr><h3 id="flush" tabindex="-1"><a class="header-anchor" href="#flush" aria-hidden="true">#</a> flush</h3><p>▸ <code>Private</code> <strong>flush</strong>(): <code>void</code></p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>void</code></p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4><p>src/utils/concurrency.ts:27</p><hr><h3 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> run</h3><p>▸ <code>Private</code> <strong>run</strong>&lt;<code>T</code>&gt;(<code>fn</code>): <code>Promise</code>&lt;<code>T</code>&gt;</p><h4 id="type-parameters-1" tabindex="-1"><a class="header-anchor" href="#type-parameters-1" aria-hidden="true">#</a> Type parameters</h4><table><thead><tr><th style="text-align:left;">Name</th></tr></thead><tbody><tr><td style="text-align:left;"><code>T</code></td></tr></tbody></table><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>fn</code></td><td style="text-align:left;">() =&gt; <code>Promise</code>&lt;<code>T</code>&gt;</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>T</code>&gt;</p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4><p>src/utils/concurrency.ts:39</p>',52),c=[n];function i(h,o){return t(),r("div",null,c)}const l=e(d,[["render",i],["__file","Concurrency.html.vue"]]);export{l as default};