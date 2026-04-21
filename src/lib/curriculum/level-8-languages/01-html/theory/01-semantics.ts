import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m2",
  title: "Semântica Avançada e Acessibilidade Digital",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-headline">
          ♿ Além do Layout Visual
        </h2>
        <p class="text-lg leading-relaxed">
          Semântica é sobre dar <strong>significado programático</strong> ao conteúdo. Isto permite que o Google entenda a hierarquia e que leitores de ecrã guiem utilizadores cegos com precisão.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">Hierarquia de Marcos (Landmarks)</h3>
        <p>Um documento Master deve ter marcos claros. Nunca uses <code>&lt;div&gt;</code> para o que pode ser um marco semântico.</p>
        <div class="bg-black/40 p-5 rounded-xl border font-code text-sm">
          <span class="text-primary">&lt;header&gt;</span> <span class="text-muted-foreground">&lt;!-- Navegação e Logo --&gt;</span><br/>
          &nbsp;&nbsp;<span class="text-primary">&lt;nav&gt;</span>...<span class="text-primary">&lt;/nav&gt;</span><br/>
          <span class="text-primary">&lt;/header&gt;</span><br/><br/>
          <span class="text-primary">&lt;main role="main"&gt;</span> <span class="text-muted-foreground">&lt;!-- Conteúdo Único --&gt;</span><br/>
          &nbsp;&nbsp;<span class="text-primary">&lt;article&gt;</span>...<span class="text-primary">&lt;/article&gt;</span><br/>
          <span class="text-primary">&lt;/main&gt;</span><br/><br/>
          <span class="text-primary">&lt;footer&gt;</span>...<span class="text-primary">&lt;/footer&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline">O Papel do WAI-ARIA</h3>
        <p>Quando o HTML nativo não é suficiente para descrever componentes complexos (como menus dropdown), usamos atributos <code>aria-*</code>.</p>
        <div class="bg-card p-4 rounded-xl border border-white/10 space-y-2">
          <p class="text-sm"><span class="text-accent font-bold">aria-label:</span> Descreve o elemento se ele não tiver texto visível.</p>
          <p class="text-sm"><span class="text-accent font-bold">aria-hidden:</span> Esconde elementos decorativos de leitores de ecrã.</p>
          <p class="text-sm"><span class="text-accent font-bold">role="status":</span> Avisa o leitor de ecrã sobre atualizações dinâmicas (Live Regions).</p>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq2"
};
