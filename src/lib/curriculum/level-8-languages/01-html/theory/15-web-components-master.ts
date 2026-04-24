import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m15",
  title: "Fase 3: Web Components: Templates e Custom Elements",
  enableInteractive: true,
  quizId: "html-mq15",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          📦 Componentização Agnóstica Nativa
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          Web Components permitem criar tags HTML personalizadas, reutilizáveis e encapsuladas que funcionam em qualquer lugar — seja em HTML puro, React, Vue ou Angular. No nível Master, utilizamos estas APIs para construir <strong>Design Systems</strong> de longo prazo que não dependem da moda dos frameworks.
        </p>
      </div>

      <!-- 1. O ELEMENTO TEMPLATE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. O Elemento &lt;template&gt;: O Blueprint Inerte</h3>
        <p class="text-sm">O <code>&lt;template&gt;</code> é um mecanismo para guardar conteúdo HTML que não é renderizado no carregamento da página. O browser verifica a sintaxe, mas não descarrega imagens nem executa scripts dentro dele até que o clones via JavaScript.</p>
        
        <div class="space-y-4">
           <pre><code class="language-html">
&lt;template id="user-card-template"&gt;
  &lt;div class="card" style="border: 1px solid #ccc; padding: 15px; border-radius: 8px;"&gt;
    &lt;img src="" alt="Avatar" style="width: 50px; height: 50px; border-radius: 50%;"&gt;
    &lt;h2 class="username"&gt;&lt;/h2&gt;
    &lt;slot name="bio"&gt;Biografia padrão...&lt;/slot&gt;
  &lt;/div&gt;
&lt;/template&gt;
           </code></pre>
        </div>
      </section>

      <!-- 2. CUSTOM ELEMENTS -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. Custom Elements: Registando Novas Tags</h3>
        <p class="text-sm leading-relaxed">Para criar uma tag como <code>&lt;cwm-user&gt;</code>, deves estender a classe <code>HTMLElement</code> e registá-la no <code>customElements</code>. <strong>Regra de Ouro:</strong> O nome deve conter obrigatoriamente um hífen para evitar conflitos futuros.</p>

        <div class="space-y-4">
           <h4 class="font-bold text-primary text-xs uppercase tracking-widest">Exemplo: Implementando o Componente</h4>
           <pre><code class="language-javascript">
class CwmUser extends HTMLElement {
  constructor() {
    super(); // Sempre chame o super() primeiro!
  }

  connectedCallback() {
    const template = document.getElementById('user-card-template');
    const content = template.content.cloneNode(true);
    
    // Injetando dados dinâmicos
    content.querySelector('.username').textContent = this.getAttribute('name');
    content.querySelector('img').src = this.getAttribute('avatar');
    
    this.appendChild(content);
  }
}

customElements.define('cwm-user', CwmUser);
           </code></pre>
        </div>
      </section>

      <!-- 3. SLOTS E PROJEÇÃO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Slots: Flexibilidade de Conteúdo</h3>
        <p class="text-sm">O elemento <code>&lt;slot&gt;</code> permite que quem usa o seu componente injete o seu próprio HTML dentro da estrutura pré-definida. É o equivalente aos <i>children</i> ou <i>props</i> de frameworks modernos.</p>
        
        <pre><code class="language-html">
&lt;!-- Utilizando o componente customizado --&gt;
&lt;cwm-user name="Edson da Cruz" avatar="https://picsum.photos/seed/ed/50/50"&gt;
  &lt;p slot="bio"&gt;Engenheiro Master na Codworks Moz.&lt;/p&gt;
&lt;/cwm-user&gt;
        </code></pre>
      </section>

      <!-- 4. CICLO DE VIDA -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Métodos de Ciclo de Vida (Lifecycle)</h3>
        <p class="text-sm leading-relaxed">Um componente Master gere os seus próprios recursos através de ganchos de execução:</p>
        
        <ul class="space-y-4">
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">connectedCallback():</p>
              <p class="text-xs text-muted-foreground">Invocado quando o elemento é inserido no DOM. Ideal para carregar dados ou renderizar o template.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">disconnectedCallback():</p>
              <p class="text-xs text-muted-foreground">Invocado quando o elemento é removido. Local obrigatório para limpar event listeners e evitar memory leaks.</p>
            </div>
          </li>
          <li class="flex gap-4 p-4 bg-muted/20 rounded-xl">
            <div>
              <p class="font-bold text-sm">attributeChangedCallback():</p>
              <p class="text-xs text-muted-foreground">Reage a mudanças nos atributos (ex: mudar o avatar dinamicamente).</p>
            </div>
          </li>
        </ul>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Filosofia do Web Component</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "Frameworks vêm e vão, mas o DOM é eterno. Ao construir com Web Components, você cria ativos digitais que sobrevivem às mudanças de tecnologia, garantindo a soberania técnica do seu projeto."
        </p>
      </section>
    </div>
  `,
};
