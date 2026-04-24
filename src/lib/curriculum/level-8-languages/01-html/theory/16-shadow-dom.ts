import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m16",
  title: "Fase 3: Shadow DOM: Encapsulamento e Isolamento",
  enableInteractive: true,
  quizId: "html-mq16",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🌑 O Escudo do Componente
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          O <strong>Shadow DOM</strong> é o mecanismo que permite ao browser anexar uma árvore de elementos isolada a um elemento comum (Shadow Host). Esta árvore "escondida" possui o seu próprio escopo de IDs e estilos, garantindo que o seu componente seja resiliente e imune a conflitos com o resto do site.
        </p>
      </div>

      <!-- 1. LIGHT DOM VS SHADOW DOM -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Light DOM vs. Shadow DOM</h3>
        <p class="text-sm">Todo o elemento que vês no HTML normal pertence ao <strong>Light DOM</strong>. O Shadow DOM vive num universo paralelo anexado a um elemento, mas invisível para seletores globais como <code>document.querySelector('*')</code>.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">Light DOM</h4>
            <ul class="text-[10px] space-y-1 opacity-70">
              <li>Acessível por qualquer script.</li>
              <li>Estilizado pelo CSS global do site.</li>
              <li>Estrutura visível no Inspetor normal.</li>
            </ul>
          </div>
          <div class="p-4 bg-card border rounded-xl border-white/5 shadow-lg">
            <h4 class="font-bold text-primary mb-2 text-xs">Shadow DOM</h4>
            <ul class="text-[10px] space-y-1">
              <li>Encapsulado e privado.</li>
              <li>Estilos internos não "vazam" para fora.</li>
              <li>CSS externo não entra (exceto variáveis).</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- 2. ATTACH SHADOW -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Criando o Shadow Root: Open vs. Closed</h3>
        <p class="text-sm leading-relaxed">Para criar uma sombra, usamos o método <code>attachShadow()</code>. A decisão do modo (mode) dita o nível de segurança do seu componente.</p>

        <div class="space-y-4">
           <pre><code class="language-javascript">
const host = document.querySelector('#host-element');

// ✅ Modo 'open': O código externo pode aceder via host.shadowRoot
const shadow = host.attachShadow({ mode: 'open' });

// ❌ Modo 'closed': O root é inacessível para scripts externos
// const shadow = host.attachShadow({ mode: 'closed' });

shadow.innerHTML = \`
  <style> p { color: red; } </style>
  <p>Eu sou um parágrafo isolado!</p>
\`;
           </code></pre>
        </div>
      </section>

      <!-- 3. CSS SCOPING -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. CSS Scoping: O Fim das Colisões</h3>
        <p class="text-sm">Dentro do Shadow DOM, os seletores são simplificados. Como o estilo é isolado, podes usar classes genéricas como <code>.btn</code> ou <code>.title</code> sem medo de afetar o resto da aplicação.</p>
        
        <div class="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/20 shadow-inner">
          <h4 class="font-bold text-indigo-400 mb-2">Seletor :host</h4>
          <p class="text-xs mb-4">O pseudo-seletor <code>:host</code> permite que o CSS dentro da sombra estilize o próprio elemento "pai" que contém a sombra.</p>
          <pre><code class="language-css">
/* Dentro do Shadow DOM */
:host {
  display: block;
  border: 1px solid #ccc;
}

:host(.active) {
  border-color: blue;
}
          </code></pre>
        </div>
      </section>

      <!-- 4. EVENT RETARGETING -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Event Retargeting e Bolhas</h3>
        <p class="text-sm leading-relaxed">Para preservar o encapsulamento, eventos que ocorrem dentro do Shadow DOM são "renomeados" (retargeted). Para o mundo exterior, parece que o evento veio do componente inteiro, ocultando a estrutura interna.</p>
        
        <pre><code class="language-javascript">
// Se clicares num botão DENTRO do Shadow DOM
window.addEventListener('click', (e) => {
  // e.target será o Componente Pai, não o botão interno!
  console.log('Clique vindo de:', e.target.tagName);
});
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 Regra do Arquiteto de Componentes</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O Shadow DOM é a ferramenta definitiva para a interoperabilidade. Ele permite que construas um componente hoje que funcionará perfeitamente daqui a 10 anos, independentemente de quão bagunçado o CSS global do site se torne."
        </p>
      </section>
    </div>
  `,
};
