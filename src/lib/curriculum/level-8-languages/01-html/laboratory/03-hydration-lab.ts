import type { PracticeExercise } from '../../../types';

export const exercise: PracticeExercise = {
  id: "html-p3",
  language: "html",
  title: "Lab Master: Otimização de Script",
  description: "Aprenda a carregar recursos sem bloquear o render.",
  statement: "Adicione o atributo correto à tag script para garantir que ela não bloqueie o carregamento do HTML e execute após o parse.",
  template: `<!-- Otimize este carregamento -->
<script src="analytics.js" ></script>`,
  detailedExplanation: `<h3>⚡ Defer vs Async</h3><p>O atributo <code>defer</code> é ideal para scripts que dependem do DOM completo, pois descarrega em paralelo mas executa apenas após o parsing, mantendo a ordem dos scripts.</p>`,
  objectives: [
    {
      id: "obj1",
      description: "Usar o atributo defer",
      test: "defer"
    }
  ]
};
