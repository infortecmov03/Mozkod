import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "js-mq1",
    title: "Quiz: Motores e Event Loop",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Quem tem prioridade na execução assíncrona do JS?",
        options: ["Macrotasks (setTimeout)", "Microtasks (Promises)", "Eventos de Mouse", "Rendering"],
        correctAnswer: 1,
        explanation: "O motor JS processa toda a Microtask Queue antes de passar para a próxima Macrotask."
      }
    ]
  },
  {
    id: "js-mq2",
    title: "Quiz: Metaprogramação e Proxies",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qual o termo para as funções que intercetam operações num Proxy?",
        options: ["Triggers", "Interceptors", "Traps", "Hooks"],
        correctAnswer: 2,
        explanation: "As funções dentro do handler de um Proxy são chamadas de 'Traps' (armadilhas)."
      }
    ]
  }
];
