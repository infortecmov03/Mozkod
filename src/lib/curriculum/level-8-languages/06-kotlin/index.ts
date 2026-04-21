import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as p1 } from './laboratory/01-kotlin-sync-init';

export const kotlinMaster: KnowledgeArea = {
  id: 'lang-kotlin-master',
  title: '06. Kotlin Master',
  description: 'Desenvolvimento moderno para Android e Backend robusto com Coroutines e KMP.',
  load: '45h',
  iconName: 'Smartphone',
  theory: lessons,
  practice: {
    kotlin: [
      p1,
      ...Array.from({ length: 20 }, (_, i) => ({
        id: `kt-p${i + 2}`,
        language: "kotlin",
        title: `Lab Kotlin Master #${i + 2}`,
        description: "Evolução do motor de sincronização.",
        statement: "Implemente a camada técnica correspondente à lição.",
        isProjectPart: true,
        template: `// Continue o projeto\n`,
        detailedExplanation: `<p>Expanda o seu motor multiplataforma.</p>`,
        objectives: [{ id: `obj_p${i + 2}`, description: "Implemente a funcionalidade.", test: "(" }]
      }))
    ]
  },
  quizzes: quizzes
};
