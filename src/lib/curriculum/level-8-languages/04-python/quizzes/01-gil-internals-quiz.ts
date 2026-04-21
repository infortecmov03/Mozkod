import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq1",
  title: "Quiz: CPython e o GIL",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual o papel fundamental do GIL no CPython?",
      options: [
        "Aumentar a velocidade de execução em 2x",
        "Garantir a thread-safety da contagem de referências dos objetos",
        "Compilar código Python para Java automaticamente",
        "Impedir o uso de variáveis globais"
      ],
      correctAnswer: 1,
      explanation: "O GIL simplifica a implementação do CPython ao garantir que apenas uma thread manipule objetos Python por vez, prevenindo erros de memória."
    },
    {
      id: "q2",
      question: "Qual estratégia é recomendada para paralelismo real em tarefas de processamento intensivo (CPU-bound) em Python?",
      options: [
        "Usar a biblioteca 'threading' padrão",
        "Usar a biblioteca 'multiprocessing' para criar processos independentes",
        "Aumentar a memória RAM do servidor",
        "Usar apenas loops 'while' simples"
      ],
      correctAnswer: 1
    }
  ]
};