import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m2",
  title: "Semântica Avançada e Acessibilidade Digital",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">
          ♿ Além do Layout Visual
        </h2>
        <p class="text-lg leading-relaxed">
          O HTML5 Master não se foca apenas em colocar elementos no ecrã, mas em dar <strong>significado</strong> aos dados para motores de busca (SEO) e tecnologias assistivas.
        </p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Tags de Estrutura Crítica</h3>
        <ul>
          <li><strong>&lt;main&gt;:</strong> O conteúdo central único da página.</li>
          <li><strong>&lt;section&gt;:</strong> Um agrupamento temático de conteúdo.</li>
          <li><strong>&lt;article&gt;:</strong> Conteúdo independente que faz sentido por si só.</li>
          <li><strong>&lt;aside&gt;:</strong> Conteúdo relacionado mas tangencial (sidebars).</li>
        </ul>
        <h3 class="mt-6">Atributos ARIA</h3>
        <p>ARIA (Accessible Rich Internet Applications) define formas de tornar o conteúdo web mais acessível para pessoas com deficiência.</p>
      </div>
    </div>
  `,
  quizId: "html-mq2"
};
