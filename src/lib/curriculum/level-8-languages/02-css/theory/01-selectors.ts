
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "css-m1",
  title: "Seletores de Elite e Especificidade",
  content: `
    <div class="space-y-6">
      <div class="bg-accent/5 p-6 rounded-2xl border border-accent/10">
        <h2 class="text-2xl font-bold mb-4">🎯 Domínio da Cascata</h2>
        <p class="text-lg leading-relaxed">
          Entender como o navegador resolve conflitos de estilo é o que separa um iniciante de um engenheiro de CSS.
        </p>
      </div>
      <div class="prose prose-invert max-w-none">
        <h3>Seletores Modernos</h3>
        <ul>
          <li><strong>:has():</strong> O seletor "pai" que revolucionou o CSS.</li>
          <li><strong>:is() / :where():</strong> Agrupamento eficiente com controlo de especificidade.</li>
          <li><strong>Container Queries:</strong> Estilos baseados no tamanho do pai, não da viewport.</li>
        </ul>
      </div>
    </div>
  `,
  quizId: "css-mq1"
};
