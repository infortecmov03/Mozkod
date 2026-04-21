import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "css-mq1",
    title: "Quiz: Seletores de Elite",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qual a especificidade do seletor :where(.classe)?",
        options: ["10 (classe)", "1 (elemento)", "0 (zero)", "100 (ID)"],
        correctAnswer: 2,
        explanation: "O seletor :where() tem a característica única de ter especificidade zero, independentemente do que estiver lá dentro."
      }
    ]
  },
  {
    id: "css-mq2",
    title: "Quiz: Cascade Layers",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Se definirmos '@layer reset, base', qual layer tem prioridade maior?",
        options: ["reset", "base", "Ambas são iguais", "Nenhuma"],
        correctAnswer: 1,
        explanation: "No CSS, a última layer declarada na lista de precedência tem maior prioridade sobre as anteriores."
      }
    ]
  },
  {
    id: "css-mq3",
    title: "Quiz: Subgrid e Modern Layout",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "O Subgrid herda as trilhas de qual elemento?",
        options: ["Do Body", "Do Pai direto (Grid Container)", "Do elemento raiz", "De qualquer ancestral"],
        correctAnswer: 1,
        explanation: "O subgrid permite que o elemento filho se alinhe diretamente com as divisões do seu container pai."
      }
    ]
  }
];
