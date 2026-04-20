import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "ds-q1",
  title: "Quiz: Arrays Dinâmicos",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que acontece num Array Dinâmico quando o espaço alocado termina?",
      options: [
        "O programa para com erro",
        "Ele cria um novo array maior (geralmente o dobro) e copia os dados",
        "Ele apaga os dados antigos",
        "Ele usa o disco rígido como memória"
      ],
      correctAnswer: 1
    }
  ]
};
