import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq8",
  title: "Quiz: Funções Matemáticas",
  passingScore: 80,
  questions: [
    {
      id: "q8_1",
      question: "Qual a função do 'clamp(1rem, 5vw, 3rem)'?",
      options: [
        "Define um valor fixo de 5vw",
        "Garante que o valor flutue em 5vw, mas nunca seja menor que 1rem nem maior que 3rem",
        "Soma 1rem com 5vw e 3rem",
        "Escolhe aleatoriamente um dos três valores"
      ],
      correctAnswer: 1
    }
  ]
};