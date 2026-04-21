import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq1",
  title: "Quiz: Seletores e Especificidade",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual a principal diferença de especificidade entre :is() e :where()?",
      options: [
        ":is() tem especificidade zero, :where() herda a maior",
        ":where() tem especificidade zero, :is() herda a maior do seu conteúdo",
        "Ambos têm especificidade zero",
        "Ambos aumentam a especificidade em 10 pontos"
      ],
      correctAnswer: 1,
      explanation: "O seletor :where() foi criado especificamente para permitir agrupamentos com especificidade zero, facilitando sobreposições posteriores."
    }
  ]
};
