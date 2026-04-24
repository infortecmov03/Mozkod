import type { TheoryLesson } from '../../types';

export const lesson: TheoryLesson = {
  id: "web-t1",
  title: "Estrutura HTML5: O Esqueleto de Alta Performance",
  youtubeVideoId: "8ME9u065vD4",
  content: `
    <div class="space-y-10">
      <div class="bg-orange-500/10 p-6 rounded-2xl border border-orange-500/20 shadow-xl">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 font-headline text-orange-400">
          🏗️ Mais que uma Linguagem de Marcação
        </h2>
        <p class="text-lg leading-relaxed">
          O HTML (HyperText Markup Language) define a estrutura de dados que o browser transforma em objetos (o DOM). Para um engenheiro, a escolha das tags dita a <strong>acessibilidade</strong>, o <strong>SEO</strong> e a velocidade de carregamento (LCP).
        </p>
      </div>

      <div class="space-y-8">
        <h3 class="text-2xl font-bold font-headline border-b-2 border-orange-500/20 pb-2 text-primary">1. Semântica: A Arquitetura do Significado</h3>
        <p class="text-sm leading-relaxed">
          Semântica é o uso de tags que descrevem o seu próprio conteúdo. Ao usar a tag correta, você informa ao browser, ao Google e aos leitores de ecrã exatamente o que aquela parte do site representa.
        </p>

        <div class="space-y-6">
          <!-- Header & Nav -->
          <div class="bg-card p-6 rounded-3xl border border-white/5 shadow-lg">
            <h4 class="font-bold text-orange-400 mb-4 flex items-center gap-2">
              <span class="p-2 bg-orange-400/10 rounded-lg text-xs">TOP</span> header & nav: Identidade e Fluxo
            </h4>
            <p class="text-xs text-muted-foreground mb-4">
              O <code>&lt;header&gt;</code> é o grupo introdutório. Geralmente contém o logotipo e a navegação principal (<code>&lt;nav&gt;</code>). É o ponto de entrada da autoridade do site.
            </p>
            <div class="bg-black/40 p-4 rounded-xl font-code text-[11px] text-green-400">
              <span class="text-muted-foreground">&lt;!-- Exemplo de Elite --&gt;</span><br/>
              &lt;<span class="text-primary">header</span>&gt;<br/>
              &nbsp;&nbsp;&lt;<span class="text-primary">h1</span>&gt;Codworks Moz&lt;/<span class="text-primary">h1</span>&gt;<br/>
              &nbsp;&nbsp;&lt;<span class="text-primary">nav</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="text-primary">ul</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="text-primary">li</span>&gt;&lt;<span class="text-primary">a</span> <span class="text-accent">href</span>="/learn"&gt;Módulos&lt;/<span class="text-primary">a</span>&gt;&lt;/<span class="text-primary">li</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span class="text-primary">ul</span>&gt;<br/>
              &nbsp;&nbsp;&lt;/<span class="text-primary">nav</span>&gt;<br/>
              &lt;/<span class="text-primary">header</span>&gt;
            </div>
          </div>

          <!-- Main & Article -->
          <div class="bg-card p-6 rounded-3xl border border-white/5 shadow-lg">
            <h4 class="font-bold text-orange-400 mb-4 flex items-center gap-2">
              <span class="p-2 bg-orange-400/10 rounded-lg text-xs">MID</span> main & article: O Coração dos Dados
            </h4>
            <p class="text-xs text-muted-foreground mb-4">
              O <code>&lt;main&gt;</code> contém o conteúdo único daquela página específica (deve haver apenas um). O <code>&lt;article&gt;</code> é usado para conteúdos independentes, como um post ou um card, que faria sentido mesmo se fosse lido sozinho.
            </p>
            <div class="bg-black/40 p-4 rounded-xl font-code text-[11px] text-green-400">
              &lt;<span class="text-primary">main</span> <span class="text-accent">role</span>="main"&gt;<br/>
              &nbsp;&nbsp;&lt;<span class="text-primary">article</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="text-primary">h2</span>&gt;Como dominar o HTML5&lt;/<span class="text-primary">h2</span>&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span class="text-primary">p</span>&gt;O segredo está na semântica...&lt;/<span class="text-primary">p</span>&gt;<br/>
              &nbsp;&nbsp;&lt;/<span class="text-primary">article</span>&gt;<br/>
              &lt;/<span class="text-primary">main</span>&gt;
            </div>
          </div>

          <!-- Footer -->
          <div class="bg-card p-6 rounded-3xl border border-white/5 shadow-lg">
            <h4 class="font-bold text-orange-400 mb-4 flex items-center gap-2">
              <span class="p-2 bg-orange-400/10 rounded-lg text-xs">BOT</span> footer: Autoridade e Legal
            </h4>
            <p class="text-xs text-muted-foreground mb-4">
              O <code>&lt;footer&gt;</code> encerra o documento. É o local ideal para copyright, links de política de privacidade, morada e informações de contacto.
            </p>
            <div class="bg-black/40 p-4 rounded-xl font-code text-[11px] text-green-400">
              &lt;<span class="text-primary">footer</span>&gt;<br/>
              &nbsp;&nbsp;&lt;<span class="text-primary">p</span>&gt;&copy; 2024 Codworks Moçambique&lt;/<span class="text-primary">p</span>&gt;<br/>
              &nbsp;&nbsp;&lt;<span class="text-primary">address</span>&gt;Maputo, MZ&lt;/<span class="text-primary">address</span>&gt;<br/>
              &lt;/<span class="text-primary">footer</span>&gt;
            </div>
          </div>
        </div>

        <h3 class="text-xl font-bold font-headline border-b border-white/10 pb-2">2. Atributos de Identidade: Class vs ID</h3>
        <div class="flex flex-col md:flex-row gap-6">
          <div class="flex-1 p-5 bg-muted/20 rounded-xl border border-white/5">
            <h4 class="font-bold text-accent mb-2">Class (.)</h4>
            <p class="text-xs text-muted-foreground">Reutilizável. Identifica um estilo ou comportamento que se repete em vários elementos. <br/><code>class="btn-primary"</code></p>
          </div>
          <div class="flex-1 p-5 bg-muted/20 rounded-xl border border-white/5">
            <h4 class="font-bold text-primary mb-2">ID (#)</h4>
            <p class="text-xs text-muted-foreground">Único. Identifica um elemento absoluto no documento. Vital para o JavaScript e âncoras. <br/><code>id="main-form"</code></p>
          </div>
        </div>

        <div class="bg-yellow-500/5 p-6 rounded-2xl border border-yellow-500/20 mt-6 shadow-inner">
          <h4 class="font-bold text-yellow-500 mb-2 flex items-center gap-2 text-sm">
            💎 Dica de Senioridade: Evite a "Div-ite"
          </h4>
          <p class="text-xs leading-relaxed opacity-80">
            Sempre que estiver prestes a escrever uma <code>&lt;div&gt;</code>, pare e pergunte: "Este bloco tem um significado?". Se for um cabeçalho, use <code>&lt;header&gt;</code>. Deixe as divs apenas para necessidades puramente estéticas de layout onde nenhuma outra tag descreva o conteúdo.
          </p>
        </div>
      </div>
    </div>
  `,
  quizId: "web-t1-quiz"
};