import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t10-quiz",
  title: "Quiz: Memória Cache",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual nível de cache é o mais rápido e está mais próximo do núcleo da CPU?",
      options: ["L1", "L2", "L3", "RAM"],
      correctAnswer: 0,
      explanation: "L1 é a cache primária, integrada diretamente no pipeline de execução."
    },
    {
      id: "q2",
      question: "O que acontece num 'Cache Miss'?",
      options: [
        "O computador reinicia",
        "A CPU encontra o dado instantaneamente",
        "A CPU tem de ir buscar o dado à memória RAM, que é muito mais lenta",
        "O dado é apagado para sempre"
      ],
      correctAnswer: 2,
      explanation: "O 'Miss' significa perda de tempo, pois a RAM tem latência muito maior que o silício da cache."
    }
  ]
};