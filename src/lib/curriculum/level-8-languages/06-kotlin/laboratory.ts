import type { PracticeExercise } from '../../types';
import { exercise as p1 } from './laboratory/01-sync-init-lab';
import { exercise as p2 } from './laboratory/02-extensions-delegates-lab';

export const practice = {
  kotlin: [
    p1, p2,
    ...Array.from({ length: 19 }, (_, i) => ({
      id: `kt-p${i + 3}`,
      language: "kotlin",
      title: `Projeto Master Milestone ${i + 3}`,
      description: "Evolução do motor de sincronização de elite.",
      statement: "Implemente o incremento técnico solicitado para esta fase.",
      isProjectPart: true,
      template: "// CWM SYNC ENGINE - CHECKPOINT " + (i + 3) + "\n// Herança síncrona ativa.\n",
      detailedExplanation: "<h3>📱 Kotlin Master Milestone</h3><p>Continue a construção do motor aplicando os conceitos avançados desta lição.</p>",
      objectives: [{ id: "obj", description: "Concluir requisito técnico", test: "fun" }]
    }))
  ]
};
