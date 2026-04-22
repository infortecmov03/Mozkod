import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t13-quiz",
  title: "Quiz: Barramentos de Sistema",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual barramento indica ONDE na memória o dado deve ser buscado?",
      options: ["Dados", "Controlo", "Endereço", "USB"],
      correctAnswer: 2,
      explanation: "O barramento de endereço transporta o 'ponteiro' para a célula de RAM."
    },
    {
      id: "q2",
      question: "O que determina a largura de um barramento (ex: 64 bits)?",
      options: ["A cor dos fios", "O número de bits transmitidos em paralelo", "A velocidade da luz", "A marca da CPU"],
      correctAnswer: 1,
      explanation: "Largura é a capacidade de bits simultâneos. 64 bits transmitem 8 bytes de uma vez."
    }
  ]
};