
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m10",
  title: "Gestão de Foco e Acessibilidade em SPAs",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          ⌨️ Navegação Master
        </h2>
        <p class="text-lg leading-relaxed">
          Em aplicações de página única (SPA), o browser não gere o foco automaticamente após uma transição de rota. O engenheiro deve fazer isso manualmente para garantir a acessibilidade.
        </p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Atributo Inert</h3>
        <p>O atributo <code>inert</code> desativa a interação e o foco de toda uma árvore DOM, sendo ideal para modais abertos que devem "bloquear" o conteúdo de fundo.</p>
        
        <h3>Focus Trapping</h3>
        <p>Garantir que o utilizador de teclado não "escape" de um diálogo para o fundo da página é um requisito de conformidade legal de acessibilidade de nível mundial.</p>
      </div>
    </div>
  `,
  quizId: "html-mq10"
};
