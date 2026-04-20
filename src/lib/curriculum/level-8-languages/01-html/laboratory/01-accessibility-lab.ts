
import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p1",
  language: "html",
  title: "Laboratório Master: Componente Acessível",
  description: "Crie a estrutura de um modal totalmente acessível.",
  statement: "Utilize os atributos ARIA corretos (role e aria-labelledby) para criar um diálogo modal.",
  template: `<!-- Estrutura do Modal -->
<div role="" aria-labelledby="modal-title">
  <h2 id="modal-title">Título do Modal</h2>
  <button>Fechar</button>
</div>`,
  detailedExplanation: `
    <h3>♿ Checklist de Acessibilidade</h3>
    <p>Para um modal ser acessível, ele precisa:</p>
    <ol class="list-decimal ml-6 space-y-2">
      <li>Um <strong>role="dialog"</strong> para informar o leitor de ecrã.</li>
      <li>Uma ligação entre o contentor e o seu título via <strong>aria-labelledby</strong>.</li>
      <li>Foco gerido (que aprenderemos no JS).</li>
    </ol>
  `,
  objectives: [
    {
      id: "obj1",
      description: "Definir o role como 'dialog'",
      test: "role=\"dialog\""
    },
    {
      id: "obj2",
      description: "Garantir o uso de aria-labelledby",
      test: "aria-labelledby=\"modal-title\""
    }
  ]
};
