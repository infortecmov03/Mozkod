
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq18",
  title: "Quiz Master: JIT (Just-In-Time) e Performance de Silício",
  passingScore: 85,
  questions: [
    {
      id: "q18_1",
      question: "Qual o objetivo principal do JIT no PHP 8?",
      options: [
        "Reduzir o tamanho do ficheiro .php",
        "Compilar Opcodes 'quentes' diretamente em código de máquina (CPU) em runtime",
        "Substituir o MySQL",
        "Mudar a sintaxe da linguagem"
      ],
      correctAnswer: 1
    },
    {
      id: "q18_2",
      question: "O JIT melhora significativamente a performance de quais tipos de aplicações?",
      options: [
        "Aplicações I/O-bound (Web clássica, SQL)",
        "Aplicações CPU-bound (Cálculos matemáticos, Big Data, IA)",
        "Apenas blogs simples",
        "Qualquer site em WordPress"
      ],
      correctAnswer: 1
    },
    {
      id: "q18_3",
      question: "Quais são os dois modos principais do JIT no PHP?",
      options: ["Fast e Slow", "Function e Tracing", "Local e Remote", "Direct e Indirect"],
      correctAnswer: 1,
      explanation: "Tracing JIT é geralmente mais eficiente pois analisa o fluxo real de execução."
    },
    {
      id: "q18_4",
      question: "Para ativar o JIT, onde deves configurar o parâmetro opcache.jit_buffer_size?",
      options: ["No ficheiro .html", "No php.ini", "No banco de dados", "Via composer.json"],
      correctAnswer: 1
    },
    {
      id: "q18_5",
      question: "O JIT substitui o OpCache?",
      options: [
        "Sim, apaga o OpCache",
        "Não, o JIT corre como uma camada adicional em cima do OpCache",
        "Apenas no Windows",
        "São tecnologias concorrentes"
      ],
      correctAnswer: 1
    },
    {
      id: "q18_6",
      question: "Um valor de buffer zero (0) no JIT significa:",
      options: ["Performance máxima", "Que o JIT está desativado", "Que o cache é infinito", "Erro de sistema"],
      correctAnswer: 1
    }
  ]
};
