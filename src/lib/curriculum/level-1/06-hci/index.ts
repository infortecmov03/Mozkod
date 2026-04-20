
import type { KnowledgeArea } from '../../types';

export const hci: KnowledgeArea = {
  id: 'ka-hci',
  title: '06. HCI (Interação Humano-Computador)',
  description: 'Design centrado no utilizador e princípios de usabilidade.',
  load: '20h',
  iconName: 'Layout',
  theory: [
    {
      id: "hci-t1",
      title: "Introdução ao HCI",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold">O que é HCI?</h2>
          <p>HCI estuda como as pessoas interagem com a tecnologia. O objetivo é criar sistemas <strong>úteis</strong> e <strong>fáceis de usar</strong>.</p>
        </div>
      `,
      quizId: "hci-t1-quiz"
    }
  ],
  quizzes: [
    {
      id: "hci-t1-quiz",
      title: "Quiz: Introdução ao HCI",
      passingScore: 70,
      questions: [
        {
          id: "q1",
          question: "Qual o foco principal do HCI?",
          options: ["Hardware rápido", "Utilizador e Usabilidade", "Código limpo", "Base de dados"],
          correctAnswer: 1
        }
      ]
    }
  ],
  practice: {}
};
