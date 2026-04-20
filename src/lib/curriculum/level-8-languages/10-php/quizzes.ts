
import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "php-mq4",
    title: "Quiz: PHP 8 OOP",
    passingScore: 80,
    questions: [
      {
        id: "q1",
        question: "Qual funcionalidade do PHP 8 permite declarar e inicializar propriedades no construtor?",
        options: ["Property promotion", "Auto-init", "Lazy Loading", "Dynamic Props"],
        correctAnswer: 0
      }
    ]
  }
];
