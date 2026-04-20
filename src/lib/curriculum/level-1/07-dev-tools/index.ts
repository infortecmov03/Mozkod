
import type { KnowledgeArea } from '../../types';

export const devTools: KnowledgeArea = {
  id: 'ka-dev-tools',
  title: '07. Dev Tools',
  description: 'Domine as ferramentas que aceleram o desenvolvimento.',
  load: '15h',
  iconName: 'Wrench',
  theory: [
    {
      id: "dt-t1",
      title: "VS Code: O Editor Moderno",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">Visual Studio Code</h2>
          <p>O editor de eleição dos programadores. Leve, extensível e poderoso.</p>
        </div>
      `,
      quizId: "dt-t1-quiz"
    }
  ],
  quizzes: [
    {
      id: "dt-t1-quiz",
      title: "Quiz: Ferramentas de Dev",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "O VS Code é um exemplo de?",
          options: ["Linguagem", "IDE/Editor de Código", "Sistema Operativo", "Browser"],
          correctAnswer: 1
        }
      ]
    }
  ],
  practice: {}
};
