
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq8",
  title: "Quiz Master: Swoole e Concorrência Real",
  passingScore: 85,
  questions: [
    {
      id: "q8_1",
      question: "O Swoole transforma o PHP num sistema de que tipo?",
      options: ["Apenas síncrono", "Event-driven, assíncrono e de alta performance", "Apenas para bases de dados", "Scripting local"],
      correctAnswer: 1
    },
    {
      id: "q8_2",
      question: "Diferente do PHP-FPM, o Swoole mantém a aplicação na memória. Qual a vantagem disto?",
      options: ["Nenhuma", "Elimina o custo de carregar a framework e ficheiros em cada request", "Ocupa menos RAM", "Impede o acesso à internet"],
      correctAnswer: 1
    },
    {
      id: "q8_3",
      question: "O que permite que o Swoole execute tarefas em paralelo?",
      options: ["Apenas threads", "Corrotinas de baixo nível (Scheduler cooperativo)", "O servidor Apache", "O uso de JavaScript"],
      correctAnswer: 1
    },
    {
      id: "q8_4",
      question: "Qual o porto padrão para um servidor WebSocket no Swoole?",
      options: ["80", "443", "Qualquer um definido pelo programador (ex: 9501)", "Apenas 8080"],
      correctAnswer: 2
    },
    {
      id: "q8_5",
      question: "No Swoole, o que acontece com uma conexão MySQL se usares Coroutines?",
      options: ["O PHP trava", "O Swoole suspende a coroutine atual e atende outro request enquanto o banco responde", "A conexão cai", "O banco fica lento"],
      correctAnswer: 1
    },
    {
      id: "q8_6",
      question: "Swoole é uma biblioteca PHP ou uma extensão em C?",
      options: ["Biblioteca Composer", "Extensão nativa compilada em C/C++", "Um plugin do Laravel", "Uma alteração no binário do Linux"],
      correctAnswer: 1
    }
  ]
};
