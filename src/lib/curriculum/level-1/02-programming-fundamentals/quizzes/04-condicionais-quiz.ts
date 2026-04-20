import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t4-quiz",
  title: "Quiz: Estruturas Condicionais",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual palavra-chave é usada para o caminho alternativo se o IF falhar?",
      options: ["Then", "Next", "Else", "Case"],
      correctAnswer: 2
    },
    {
      id: "q2",
      question: "O que acontece se a condição de um IF for False e não houver ELSE?",
      options: [
        "O programa dá erro",
        "O programa salta o bloco e continua",
        "O programa entra em loop",
        "O programa fecha"
      ],
      correctAnswer: 1
    }
  ]
};
