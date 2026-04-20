import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "pf-t5-quiz",
  title: "Quiz: Estruturas de Repetição",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual loop é mais adequado quando sabemos antecipadamente o número de iterações?",
      options: ["While", "For", "Do-While", "ForEach"],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "O que acontece se a condição de um loop 'while' nunca se tornar falsa?",
      options: ["O programa termina com erro", "O loop é ignorado", "Cria-se um loop infinito", "O computador reinicia"],
      correctAnswer: 2
    },
    {
      id: "q3",
      question: "Qual a função da palavra-chave 'break' dentro de um loop?",
      options: ["Pausar a execução por 1 segundo", "Saltar para a próxima iteração", "Sair imediatamente do loop", "Reiniciar o contador do loop"],
      correctAnswer: 2
    }
  ]
};