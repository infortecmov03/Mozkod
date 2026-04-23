import { quiz as q1 } from './quizzes/01-vscode-quiz';
import { quiz as q2 } from './quizzes/02-terminal-mastery-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `dt-q${i + 3}`,
    title: `Dev Tools Quiz ${i + 3}`,
    questions: [
      {
        id: "q_auto",
        question: "Validação técnica para o tópico de ferramentas " + (i + 3),
        options: ["Opção Correta", "Incorreta", "Erro"],
        correctAnswer: 0
      }
    ],
    passingScore: 70
  }))
];
