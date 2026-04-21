
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m4",
  title: "Metaprogramação: Proxies e Reflect API",
  content: `
    <div class="space-y-8">
      <div class="bg-yellow-500/10 p-6 rounded-2xl border border-yellow-500/20">
        <h2 class="text-2xl font-bold mb-4 font-headline">🎭 Intercetando a Realidade</h2>
        <p class="text-lg">O objeto <strong>Proxy</strong> permite-te envolver outro objeto e intercetar operações fundamentais como leitura, escrita e definição de propriedades. É o segredo da reatividade mágica de frameworks como Vue 3.</p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Handlers e Traps</h3>
        <p>Cada operação intercetada chama-se uma "trap" (armadilha). As mais comuns são <code>get</code> e <code>set</code>.</p>
        
        <div class="bg-black/40 p-5 rounded-xl border font-code text-xs text-accent space-y-1">
          <p>const <span class="text-primary">validator</span> = {</p>
          <p>&nbsp;&nbsp;set(target, prop, value) {</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;console.log(\`A mudar \${prop} para \${value}\`);</p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;return <span class="text-primary">Reflect</span>.set(...arguments);</p>
          <p>&nbsp;&nbsp;}</p>
          <p>};</p>
          <p>const <span class="text-primary">proxy</span> = new <span class="text-primary">Proxy</span>(obj, validator);</p>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Reflect: O Complemento Perfeito</h3>
        <p>A API <code>Reflect</code> fornece métodos para fazer as operações originais de forma limpa. Usar <code>Reflect.set()</code> em vez de <code>target[prop] = value</code> garante que a semântica interna do motor JS (como protótipos e extensibilidade) seja respeitada.</p>
      </div>
    </div>
  `,
  quizId: "js-mq4"
};
