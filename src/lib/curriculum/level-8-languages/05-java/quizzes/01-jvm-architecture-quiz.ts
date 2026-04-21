import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "jv-mq1",
  title: "Quiz: Arquitetura JVM Internals",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que é a 'Tiered Compilation' no Java moderno?",
      options: [
        "Um sistema de pastas para organizar o código",
        "O uso coordenado de interpretador, compilador C1 e compilador C2",
        "Uma forma de dividir a memória RAM",
        "Um tipo de herança múltipla"
      ],
      correctAnswer: 1,
      explanation: "A compilação em níveis permite que o Java tenha um startup razoável e uma performance de pico excepcional ao otimizar o código progressivamente."
    }
  ]
};