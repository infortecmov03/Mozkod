import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m10",
  title: "Gestão de Foco e Acessibilidade em SPAs",
  content: `
    <div class="space-y-8">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2 text-headline">
          ⌨️ Navegação Master
        </h2>
        <p class="text-lg leading-relaxed">
          Em aplicações modernas (SPAs), o browser não gere o foco automaticamente ao mudar de "página". Um Engenheiro Master deve garantir que utilizadores de teclado nunca fiquem perdidos.
        </p>
      </div>

      <div class="space-y-6">
        <h3 class="text-xl font-bold font-headline">O Atributo 'Inert'</h3>
        <p>A funcionalidade mais poderosa de 2024. O atributo <code>inert</code> faz com que o browser ignore completamente uma árvore DOM para fins de clique, foco e leitura.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-sm border border-white/5">
          <span class="text-primary">&lt;div</span> <span class="text-accent">id</span>=<span class="text-green-400">"fundo"</span> <span class="text-accent">inert</span><span class="text-primary">&gt;</span> <span class="text-muted-foreground">&lt;!-- Inacessível enquando o modal está aberto --&gt;</span>
        </div>

        <h3 class="text-xl font-bold font-headline text-primary">Focus Trapping (Armadilha de Foco)</h3>
        <p>Ao abrir um modal, o foco deve ficar "preso" lá dentro. Se o utilizador carregar em Tab no último elemento, deve voltar ao primeiro do modal, e não ir para o fundo da página escondida.</p>
        
        <h3 class="text-xl font-bold font-headline">Skip Links</h3>
        <p>Sempre forneça um link invisível no topo da página que permita saltar a navegação repetitiva e ir direto ao conteúdo principal.</p>
        <div class="bg-black/40 p-4 rounded-xl font-code text-xs">
          <span class="text-primary">&lt;a</span> <span class="text-accent">href</span>=<span class="text-green-400">"#main"</span> <span class="text-accent">class</span>=<span class="text-green-400">"sr-only"</span><span class="text-primary">&gt;</span>Saltar para o conteúdo<span class="text-primary">&lt;/a&gt;</span>
        </div>
      </div>
    </div>
  `,
  quizId: "html-mq10"
};
