import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m14",
  title: "Architectures: BEM, Utility-first e Manutenibilidade",
  content: `
    <div class="space-y-8">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10 shadow-2xl">
        <h2 class="text-2xl font-bold mb-4 font-headline text-primary">🏗️ Engenharia de Manutenibilidade</h2>
        <p class="text-lg">Num projeto Master, o problema não é escrever CSS, é manter 50.000 linhas de CSS sem medo de quebrar o site inteiro ao mudar uma cor.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-3">BEM (Metodologia)</h4>
          <p class="text-xs leading-relaxed">Block__Element--Modifier. Foco no encapsulamento lógico e especificidade baixa (apenas 1 classe por seletor).</p>
          <code class="text-[10px] block mt-2 opacity-50">.header__btn--active</code>
        </div>
        <div class="p-6 bg-card border rounded-2xl border-white/5 shadow-xl">
          <h4 class="font-bold text-accent mb-3">Utility-First (Tailwind)</h4>
          <p class="text-xs leading-relaxed">Foco na velocidade de desenvolvimento e consistência visual através de tokens pré-definidos. Elimina o "CSS Append-only".</p>
          <code class="text-[10px] block mt-2 opacity-50">class="p-4 bg-blue-500 rounded"</code>
        </div>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold font-headline">O Problema do CSS Append-only</h3>
        <p>Muitas empresas têm medo de apagar CSS antigo. A arquitetura master resolve isto usando <strong>Módulos</strong> ou <strong>CSS-in-JS</strong>, onde o estilo morre com o componente.</p>
      </div>
    </div>
  `,
  quizId: "css-mq14"
};
