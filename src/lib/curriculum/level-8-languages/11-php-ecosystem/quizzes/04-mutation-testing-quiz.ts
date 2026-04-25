import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-eco-mq4",
  title: "Quiz Master: Mutation Testing e Infection",
  passingScore: 85,
  questions: [
    {
      id: "q4_1",
      question: "O que é um 'Mutante Sobrevivente'?",
      options: [
        "Um vírus de computador real.",
        "Uma alteração no código feita pela ferramenta que não foi detetada pelos teus testes (estes continuaram a passar).",
        "Um programador que trabalha à noite.",
        "Um teste que demora mais de 1 minuto."
      ],
      correctAnswer: 1,
      explanation: "Um mutante que sobrevive indica que os teus testes não estão a validar aquela lógica específica de forma rigorosa."
    },
    {
      id: "q4_2",
      question: "O MSI (Mutation Score Indicator) mede o quê?",
      options: [
        "O número de linhas de código.",
        "A percentagem de mutantes que os teus testes conseguiram 'matar'.",
        "A velocidade do servidor.",
        "O número de bugs em produção."
      ],
      correctAnswer: 1
    }
  ]
};
