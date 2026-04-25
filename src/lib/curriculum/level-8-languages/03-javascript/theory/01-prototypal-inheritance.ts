import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "js-m1",
  title: "Fase 1: Prototypal Inheritance Internals",
  enableInteractive: true,
  quizId: "js-mq1",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🧬 A Anatomia Molecular do JavaScript
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Diferente de Java ou C++, o JavaScript não possui classes "reais" no nível do motor. Ele utiliza um modelo de <strong>Herança Prototípica</strong>. No nível Master, entendemos que objetos são ligados uns aos outros através de uma cadeia de referências. Quando pedes uma propriedade, o motor <button>V8</button> percorre esta trilha até encontrar o valor ou chegar ao <button>null</button>.
        </p>
      </div>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. prototype vs. [[Prototype]]</h3>
        <p class="text-sm leading-relaxed">
          Esta é a confusão número 1 de desenvolvedores juniores. Para ser Master, deves distinguir:
        </p>
        <ul class="space-y-4">
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">A propriedade 'prototype':</strong> Presente apenas em funções. É o "mapa" que será dado aos objetos criados com <button>new</button>.
          </li>
          <li class="p-4 bg-muted/20 rounded-xl border border-white/5">
            <strong class="text-primary block mb-1">O slot interno [[Prototype]]:</strong> (Acedido via <code>__proto__</code> ou <code>Object.getPrototypeOf</code>). É a ligação real que o objeto possui com o seu antecessor.
          </li>
        </ul>
      </section>

      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. A Cadeia de Busca e Property Shadowing</h3>
        <p class="text-sm">Ao aceder a <code>obj.prop</code>, o motor segue esta lógica:</p>
        <div class="bg-black/40 p-6 rounded-xl border border-white/10 shadow-inner">
           <pre><code class="language-javascript">
const base = { power: 10 };
const hero = Object.create(base);
hero.name = "Edson";

// 🔍 Busca:
console.log(hero.name);  // 1. Encontra em 'hero' -> "Edson"
console.log(hero.power); // 2. Não encontra em 'hero', sobe para 'base' -> 10
console.log(hero.speed); // 3. Sobe até Object.prototype, não encontra -> undefined

// 🌑 Shadowing:
hero.power = 50; // Cria 'power' em 'hero'. O do 'base' continua lá, mas está escondido (shadowed).
           </code></pre>
        </div>
      </section>

      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Object.create(null): O Objeto Puro</h3>
        <p class="text-sm leading-relaxed">
          Normalmente, todo o objeto herda de <code>Object.prototype</code> (tendo métodos como <code>toString</code>). Em sistemas de alta fidelidade, às vezes precisamos de um mapa limpo, sem herança.
        </p>
        <pre><code class="language-javascript">
const cleanMap = Object.create(null);
// cleanMap não tem nada. Nem __proto__, nem toString. 
// É a estrutura mais eficiente para dicionários de alta performance.
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Engenheiro de Performance</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Nunca altere o protótipo de um objeto em tempo de execução usando <code>Object.setPrototypeOf</code>. Isto quebra as otimizações do motor <button>V8</button> (Hidden Classes), degradando a performance de O(1) para uma pesquisa de dicionário lenta."
        </p>
      </section>
    </div>
  `,
};
