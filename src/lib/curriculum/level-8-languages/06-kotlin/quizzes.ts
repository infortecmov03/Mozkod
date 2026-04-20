
import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "kt-mq1",
    title: "Quiz: Kotlin Fundamentals",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Como o Kotlin lida com valores nulos por padrão?",
        options: ["Permite null em qualquer variável", "Tipos são não-nulos por padrão", "Usa a palavra-chave null", "Não suporta null"],
        correctAnswer: 1
      }
    ]
  }
];
