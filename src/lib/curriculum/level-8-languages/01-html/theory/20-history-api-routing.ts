import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m20",
  title: "History API: Roteamento de SPAs do Zero",
  enableInteractive: true,
  quizId: "html-mq20",
  content: `
    <div class="space-y-12">
      <div class="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 shadow-2xl">
        <h2 class="text-3xl font-bold mb-4 font-headline text-primary flex items-center gap-3">
          🛤️ A Ilusão de Múltiplas Páginas
        </h2>
        <p class="text-lg leading-relaxed opacity-90">
          As <strong>SPAs (Single Page Applications)</strong> modernas, como as feitas em React ou Next.js, não recarregam o site ao navegar. Elas utilizam a <strong>History API</strong> para mudar a URL e atualizar o conteúdo dinamicamente, mantendo a fluidez de uma aplicação nativa. No nível Master, construímos o nosso próprio router para entender o que acontece por baixo do capô.
        </p>
      </div>

      <!-- 1. PUSHSTATE VS REPLACESTATE -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">1. Manipulando a URL: pushState()</h3>
        <p class="text-sm">O método <code>history.pushState()</code> adiciona uma nova entrada no histórico do browser. Ele recebe três parâmetros: um objeto de estado, um título (atualmente ignorado pela maioria dos browsers) e a nova URL.</p>
        
        <div class="space-y-4">
           <pre><code class="language-javascript">
const state = { page: "perfil", userId: 123 };
const title = "Perfil do Engenheiro";
const url = "/perfil";

// Altera a URL para '/perfil' sem recarregar a página
history.pushState(state, title, url);
           </code></pre>
           <p class="text-xs text-muted-foreground italic">Dica: Use <code>replaceState()</code> quando quiser mudar a URL mas não quiser que o utilizador consiga "voltar" para a URL anterior (ex: após um login bem-sucedido).</p>
        </div>
      </section>

      <!-- 2. O EVENTO POPSTATE -->
      <section class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">2. O Evento popstate: Reagindo ao Browser</h3>
        <p class="text-sm leading-relaxed">Quando o utilizador clica no botão "Retroceder" ou "Avançar", o browser dispara o evento <code>popstate</code>. Deves ouvir este evento para renderizar o conteúdo correto baseado no estado que guardaste anteriormente.</p>

        <div class="space-y-4">
           <pre><code class="language-javascript">
window.addEventListener('popstate', (event) => {
  if (event.state) {
    console.log("Navegando para a página:", event.state.page);
    updateInterface(event.state.page);
  }
});
           </code></pre>
        </div>
      </section>

      <!-- 3. INTERCEPTANDO LINKS -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">3. Interceptação de Cliques (Link Hijacking)</h3>
        <p class="text-sm">Para que um link <code>&lt;a&gt;</code> não recarregue o site, deves cancelar o seu comportamento padrão e usar a History API manualmente.</p>
        
        <pre><code class="language-javascript">
document.querySelector('nav').addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault(); // Impede o recarregamento
    const url = e.target.getAttribute('href');
    
    history.pushState({ path: url }, '', url);
    renderPage(url);
  }
});
        </code></pre>
      </section>

      <!-- 4. EXEMPLO INTERATIVO -->
      <section class="space-y-6">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-primary/20 pb-2 text-accent">4. Router Master Funcional</h3>
        <p class="text-sm">Experimente a lógica de roteamento abaixo. Clique nos botões e observe como a interface mudaria sem refresh.</p>
        
        <pre><code class="language-html">
&lt;nav&gt;
  &lt;button onclick="goTo('/home')"&gt;Início&lt;/button&gt;
  &lt;button onclick="goTo('/settings')"&gt;Definições&lt;/button&gt;
&lt;/nav&gt;

&lt;div id="app-view" style="padding:20px; border:1px solid #ccc; margin-top:10px;"&gt;
  Página Inicial
&lt;/div&gt;

&lt;script&gt;
  function goTo(path) {
    history.pushState({ page: path }, '', path);
    updateUI(path);
  }

  function updateUI(path) {
    const view = document.getElementById('app-view');
    view.textContent = "A carregar conteúdo de: " + path;
  }

  window.onpopstate = (e) => {
    if(e.state) updateUI(e.state.page);
  };
&lt;/script&gt;
        </code></pre>
      </section>

      <section class="bg-primary/5 p-8 rounded-[2rem] border-2 border-dashed border-primary/20 text-center">
        <h4 class="text-xl font-bold text-primary mb-4">🏆 A Visão do Engenheiro</h4>
        <p class="text-sm italic opacity-80 max-w-2xl mx-auto">
          "O roteamento de cliente é uma questão de sincronização. A sua aplicação deve ser a única fonte da verdade sobre o que a URL representa. Ao dominar a History API, você entende a fundação de performance das maiores plataformas da internet."
        </p>
      </section>
    </div>
  `
};
