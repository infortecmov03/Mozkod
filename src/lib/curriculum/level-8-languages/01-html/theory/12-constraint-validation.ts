
import type { TheoryLesson } from '../../../types';

export const lesson: TheoryLesson = {
  id: "html-m12",
  title: "Constraint Validation API: Lógica Nativa",
  content: `
    <div class="space-y-6">
      <h2 class="text-2xl font-bold">🛡️ Validando na Fonte</h2>
      <p>Antes de usar bibliotecas pesadas de validação, aprenda a usar a API nativa do browser que é muito mais performática e integrada ao motor de renderização.</p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>checkValidity():</strong> Retorna se o input cumpre os requisitos.</li>
        <li><strong>setCustomValidity():</strong> Define mensagens de erro personalizadas nativas.</li>
        <li><strong>ValidityState:</strong> Objeto detalhado com o motivo da falha (badInput, valueMissing).</li>
      </ul>
    </div>
  `,
  quizId: "html-mq12"
};
