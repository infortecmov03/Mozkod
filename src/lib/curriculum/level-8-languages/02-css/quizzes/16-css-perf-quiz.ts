import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq16",
  title: "Quiz: Performance de Estilos",
  passingScore: 80,
  questions: [
    {
      id: "q16_1",
      question: "O que é 'Critical CSS'?",
      options: [
        "CSS que contém erros graves",
        "O conjunto mínimo de estilos necessários para renderizar o topo da página (above the fold)",
        "CSS usado apenas em modo escuro",
        "A última versão do SASS"
      ],
      correctAnswer: 1
    }
  ]
};