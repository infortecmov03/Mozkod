import { quiz as q1 } from './quizzes/01-kernel-quiz';

export const quizzes = [
  q1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `os-q${i + 2}`,
    title: `OS Quiz ${i + 2}`,
    questions: [
      { id: "q_auto", question: "Validação técnica para o tópico " + (i + 2), options: ["Certa", "Errada"], correctAnswer: 0 }
    ],
    passingScore: 70
  }))
];