import type { KnowledgeArea } from '../../types';
import { lessons } from './theory';
import { quizzes } from './quizzes';
import { exercise as p1 } from './laboratory/01-distributed-worker-init';

export const goMaster: KnowledgeArea = {
  id: 'lang-go-master',
  title: '07. Go Master',
  description: 'Simplicidade, concorrência nativa e sistemas de cloud de alta performance.',
  load: '40h',
  iconName: 'Cloud',
  theory: lessons,
  practice: {
    go: [
      p1,
      ...Array.from({ length: 20 }, (_, i) => ({
        id: `go-p${i + 2}`,
        language: "go",
        title: `Lab Go Master #${i + 2}`,
        description: "Evolução do motor de tarefas distribuídas.",
        statement: "Implemente a lógica de concorrência solicitada.",
        isProjectPart: true,
        template: `package main\n`,
        detailedExplanation: `<p>Expanda o seu sistema distribuído.</p>`,
        objectives: [{ id: `obj_p${i + 2}`, description: "Implemente a funcionalidade.", test: "(" }]
      }))
    ]
  },
  quizzes: quizzes
};
