import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq2",
  title: "Quiz: Metaprogramação Master",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Para que serve a função 'functools.wraps' num decorador?",
      options: [
        "Para acelerar a função em 10%",
        "Para preservar o nome, docstring e assinatura da função original",
        "Para converter a função em assíncrona",
        "Para esconder o código do utilizador"
      ],
      correctAnswer: 1
    }
  ]
};