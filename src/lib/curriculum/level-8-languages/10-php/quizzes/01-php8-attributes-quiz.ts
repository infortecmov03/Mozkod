import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq1",
  title: "Quiz: Atributos PHP 8",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual a sintaxe correta para um atributo no PHP 8?",
      options: ["@Attribute", "#[Attribute]", "[[Attribute]]", "/* @Attribute */"],
      correctAnswer: 1
    }
  ]
};