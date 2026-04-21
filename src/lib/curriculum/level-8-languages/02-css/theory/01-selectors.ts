
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m1",
  title: "Seletores de Elite e Especificidade",
  content: `
    <div class="space-y-6">
      <div class="bg-primary/5 p-6 rounded-2xl border border-primary/10">
        <h2 class="text-2xl font-bold mb-4 flex items-center gap-2">🎯 O Domínio da Cascata</h2>
        <p class="text-lg leading-relaxed">
          Um Engenheiro CSS não luta contra a especificidade; ele desenha-a. Entenda como o browser resolve conflitos usando seletores modernos como <code>:is()</code>, <code>:where()</code> e <code>:has()</code>.
        </p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>1. :has() - O Seletor de Parentesco</h3>
        <p>Finalmente, podemos selecionar um elemento pai baseado no seu filho. Ex: <code>div:has(img)</code> seleciona apenas as divs que contêm imagens.</p>
        
        <h3>2. :where() vs :is()</h3>
        <ul>
          <li><strong>:is():</strong> Aumenta a especificidade para a do seletor mais forte dentro dele.</li>
          <li><strong>:where():</strong> Tem sempre especificidade ZERO, independentemente do que estiver lá dentro. Perfeito para resets e frameworks.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "css-mq1"
};
