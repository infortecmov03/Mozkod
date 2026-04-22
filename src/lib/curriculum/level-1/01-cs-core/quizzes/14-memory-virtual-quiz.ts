import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t14-quiz",
  title: "Quiz: Memória Virtual",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que acontece durante um 'Page Fault'?",
      options: [
        "O computador explode",
        "O SO busca um bloco de memória no disco porque não estava na RAM",
        "O teclado para de funcionar",
        "O browser fecha sozinho"
      ],
      correctAnswer: 1,
      explanation: "O 'erro de página' obriga o SO a resgatar dados do armazenamento secundário."
    },
    {
      id: "q2",
      question: "Qual o componente de hardware responsável por traduzir endereços virtuais em físicos?",
      options: ["ALU", "GPU", "MMU", "SSD"],
      correctAnswer: 2,
      explanation: "Memory Management Unit (MMU) faz este mapeamento a cada nanosegundo."
    }
  ]
};