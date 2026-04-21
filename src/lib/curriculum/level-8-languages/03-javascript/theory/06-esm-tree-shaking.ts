
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m6",
  title: "JavaScript Modules (ESM) & Tree Shaking",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">📦 Modularização Estática</h2>
        <p class="text-lg leading-relaxed">
          Os <strong>ES Modules (ESM)</strong> são o padrão oficial do JavaScript para organizar código. Ao contrário do CommonJS (require), o ESM é estático, o que permite ao compilador analisar o código sem o executar.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">O Poder do Tree Shaking</h3>
        <p>Tree Shaking é o processo de eliminar "código morto" do teu bundle final. Se importares apenas uma função de uma biblioteca gigante, o bundler remove todo o resto, reduzindo drasticamente o peso do ficheiro enviado ao utilizador.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm shadow-xl space-y-4">
          <div>
            <p class="text-muted-foreground">// math_utils.js</p>
            <p class="text-primary">export const <span class="text-accent">add</span> = (a, b) => a + b;</p>
            <p class="text-primary">export const <span class="text-accent">unusedFunc</span> = () => { ... };</p>
          </div>
          <div>
            <p class="text-muted-foreground">// main.js</p>
            <p class="text-primary">import { <span class="text-accent">add</span> } from './math_utils.js';</p>
            <p class="text-muted-foreground">// O 'unusedFunc' nunca chegará ao browser do utilizador!</p>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline text-accent">Importação Dinâmica (Code Splitting)</h3>
        <p>Para otimizar o carregamento inicial, podes carregar módulos apenas quando forem necessários usando <code>import()</code>.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          <p>button.addEventListener('click', <span class="text-primary">async</span> () => {</p>
          <p>&nbsp;&nbsp;const module = <span class="text-primary">await import</span>('./heavy_logic.js');</p>
          <p>&nbsp;&nbsp;module.run();</p>
          <p>});</p>
        </div>
      </div>
    </div>
  `,
  quizId: "js-mq6"
};
