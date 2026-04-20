
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "rs-mq1",
  title: "Quiz: Ownership Master",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que acontece ao passar um String para uma função sem usar referências?",
      options: [
        "O valor é copiado",
        "O ownership é movido e a variável original torna-se inválida",
        "O programa crasha",
        "Cria-se um ponteiro inteligente automaticamente"
      ],
      correctAnswer: 1
    }
  ]
};
