import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq2",
  title: "Quiz: PHP 8 Type System",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Como se declara uma função que aceita tanto um objeto User como nulo no PHP 8?",
      options: ["User $u = null", "?User $u", "User|null $u", "Ambas as opções B e C estão correctas"],
      correctAnswer: 3
    }
  ]
};