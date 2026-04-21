import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "rs-mq2",
  title: "Quiz: Borrow Checker & Safety",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Podes ter uma referência mutável e uma imutável ao mesmo tempo para o mesmo objeto?",
      options: ["Sim", "Não, o compilador bloqueia para evitar data races", "Apenas se usar o modo unsafe", "Apenas em threads separadas"],
      correctAnswer: 1
    }
  ]
};