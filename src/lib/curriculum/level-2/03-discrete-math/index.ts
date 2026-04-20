
import type { KnowledgeArea } from '../../types';

export const discreteMath: KnowledgeArea = {
  id: 'ka-discrete-math',
  title: '03. Discrete Math',
  description: 'A matemática por trás da computação: conjuntos e lógica.',
  load: '30h',
  iconName: 'Calculator',
  theory: [
    {
      id: 'math-t1',
      title: 'Teoria dos Conjuntos',
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Conjuntos na Computação</h2>
          <p>Conjuntos são coleções de objetos distintos. Essencial para entender Bases de Dados e Tipagem.</p>
        </div>
      `,
      quizId: 'math-t1-quiz'
    }
  ],
  practice: {},
  quizzes: [
    {
      id: 'math-t1-quiz',
      title: 'Quiz: Matemática Discreta',
      passingScore: 70,
      questions: [
        {
          id: 'q1',
          question: 'O que é uma intersecção de conjuntos?',
          options: ['Elementos em comum', 'Todos os elementos', 'Nenhum elemento'],
          correctAnswer: 0
        }
      ]
    }
  ]
};
