import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m5",
  title: "Web Components e Shadow DOM: Arquitetura de UI Nativa",
  content: `
    <div class="space-y-6">
      <div class="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/20">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-purple-400">
          📦 Componentização sem Frameworks
        </h2>
        <p class="text-lg leading-relaxed">
          Os Web Components são um conjunto de APIs nativas do browser que permitem criar novas tags HTML personalizadas, reutilizáveis e encapsuladas. O grande trunfo é a <strong>interoperabilidade</strong>: um componente feito assim funciona no React, Vue, Angular ou HTML puro.
        </p>
      </div>

      <div class="grid gap-8">
        <section class="space-y-4">
          <h3 class="text-xl font-bold border-b border-white/10 pb-2">1. Custom Elements (V1)</h3>
          <p>Permite registar uma nova tag no browser. Regra de ouro: o nome deve obrigatoriamente conter um hífen (ex: <code>&lt;cwm-button&gt;</code>) para evitar conflitos com futuras tags nativas do HTML.</p>
          <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
            customElements.define('cwm-card', class extends HTMLElement { ... });
          </div>
        </section>

        <section class="space-y-4">
          <h3 class="text-xl font-bold border-b border-white/10 pb-2">2. Shadow DOM (O Escudo)</h3>
          <p>O Shadow DOM fornece <strong>encapsulamento</strong>. O CSS definido dentro do componente não "vaza" para fora, e o CSS da página principal não afeta o interior do componente (a menos que uses CSS Custom Properties).</p>
          <ul class="list-disc ml-6 space-y-1 text-sm">
            <li><strong>mode: 'open'</strong> - A árvore shadow pode ser acedida via JS externo.</li>
            <li><strong>mode: 'closed'</strong> - A árvore shadow é privada e inacessível por fora.</li>
          </ul>
        </section>

        <section class="space-y-4">
          <h3 class="text-xl font-bold border-b border-white/10 pb-2">3. HTML Templates & Slots</h3>
          <p>O elemento <code>&lt;template&gt;</code> define a marcação que não é renderizada no carregamento, mas clonada via JS. Os <strong>Slots</strong> permitem que o utilizador do componente injete o seu próprio conteúdo em locais específicos.</p>
          <div class="bg-card p-4 rounded-xl border font-code text-xs text-purple-300">
            &lt;template id="card-template"&gt;<br/>
            &nbsp;&nbsp;&lt;h2&gt;&lt;slot name="title"&gt;Título Padrão&lt;/slot&gt;&lt;/h2&gt;<br/>
            &nbsp;&nbsp;&lt;slot name="content"&gt;&lt;/slot&gt;<br/>
            &lt;/template&gt;
          </div>
        </section>
      </div>

      <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/10 mt-6">
        <h4 class="font-bold text-yellow-500 mb-2 italic">⚠️ Insight de Engenharia:</h4>
        <p class="text-sm">Web Components são ideais para <strong>Design Systems</strong> corporativos. Em vez de reconstruir botões e modais para cada equipa que usa um framework diferente, a empresa cria uma biblioteca única de Web Components que todos partilham.</p>
      </div>
    </div>
  `,
  quizId: "html-mq5"
};
