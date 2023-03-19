import{_ as o,W as p,X as i,a4 as l,Y as s,$ as n,Z as e,a2 as t,a5 as r,D as c}from"./framework-4c9bc095.js";const u={},d=s("p",null,[s("code",null,"listr2"),n(" can have global or per-task options to change the behavior of how a task, or the whole set of tasks in subtask behaves.")],-1),k=s("h2",{id:"per-listr",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#per-listr","aria-hidden":"true"},"#"),n(" Per "),s("a",{href:"/api/classes/Listr.html",target:"_blank"},"Listr")],-1),v=s("a",{href:"/api/classes/Listr.html",target:"_blank"},"Listr",-1),b=s("h2",{id:"per-subtask",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#per-subtask","aria-hidden":"true"},"#"),n(" Per "),s("a",{href:"/task/subtasks.html",target:"_blank"},"Subtask")],-1),h=r(`<p>Naturally, subtasks options are a subset of the general options, since some options are needed to be set only one time, and do not make sense to change per task.</p><h2 id="per-task" tabindex="-1"><a class="header-anchor" href="#per-task" aria-hidden="true">#</a> Per <a href="/api/interfaces/ListrTask.html#properties" target="_blank">Task</a></h2><p>Some properties of the task options even propagate to the per-task setting, these are pretty limited in form of configuration but should be just enough for you to not wrap everything in subtasks to change behavior.</p><h2 id="adding-task-options" tabindex="-1"><a class="header-anchor" href="#adding-task-options" aria-hidden="true">#</a> Adding Task Options</h2><p>Task options can be added globally or per task as follows.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Listr <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;listr2&#39;</span>

<span class="token keyword">interface</span> <span class="token class-name">Ctx</span> <span class="token punctuation">{</span>
  <span class="token comment">/* some variables for internal use */</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> tasks <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Listr<span class="token operator">&lt;</span>Ctx<span class="token operator">&gt;</span></span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      title<span class="token operator">:</span> <span class="token string">&#39;This task will execute.&#39;</span><span class="token punctuation">,</span>
      task<span class="token operator">:</span> <span class="token punctuation">(</span>_<span class="token punctuation">,</span> task<span class="token punctuation">)</span><span class="token operator">:</span> Listr<span class="token operator">&lt;</span>Ctx<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span>
        task<span class="token punctuation">.</span><span class="token function">newListr</span><span class="token punctuation">(</span>
          <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              title<span class="token operator">:</span> <span class="token string">&#39;This task will execute.&#39;</span><span class="token punctuation">,</span>
              task<span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// perform some operations</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>

            <span class="token punctuation">{</span>
              title<span class="token operator">:</span> <span class="token string">&#39;This task will execute.&#39;</span><span class="token punctuation">,</span>
              task<span class="token operator">:</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// perform some operations</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            concurrent<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            collectErrors<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            rendererOptions<span class="token operator">:</span> <span class="token punctuation">{</span> collapse<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    exitOnError<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    concurrent<span class="token operator">:</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> tasks<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(g,f){const a=c("RouterLink");return p(),i("div",null,[d,l(" more "),k,s("p",null,[v,n(" task list can be configured how to behave globally by using the second argument of the prototype with "),e(a,{to:"/api/interfaces/ListrOptions.html#properties"},{default:t(()=>[n("given properties")]),_:1}),n(".")]),b,s("p",null,[n("This behavior can be further expanded, if the subtask requires a different approach, in this case, these options are generated depending on the current renderer with the "),e(a,{to:"/api/interfaces/ListrSubClassOptions.html#properties"},{default:t(()=>[n("given properties")]),_:1}),n(".")]),h])}const w=o(u,[["render",m],["__file","task-options.html.vue"]]);export{w as default};