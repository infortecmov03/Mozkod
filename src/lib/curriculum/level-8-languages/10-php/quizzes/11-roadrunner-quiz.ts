import type { Quiz } from '../../../../types';

export const quiz: Quiz = {
  id: "php-mq11",
  title: "Quiz: RoadRunner e Servidores de Alta Escala",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que é o RoadRunner?",
      options: [
        "Um banco de dados rápido",
        "Um servidor de aplicação PHP de alta performance escrito em Go",
        "Um driver de rede",
        "Uma framework frontend"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Como o RoadRunner elimina o overhead do PHP?",
      options: [
        "Compilando PHP para C",
        "Mantendo os workers PHP vivos entre os pedidos (Residency)",
        "Removendo o uso de variáveis",
        "Limpando o cache do browser"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual protocolo o RoadRunner usa para falar com os workers PHP?",
      options: ["HTTP", "FastCGI", "Goridge (Protocolo Binário)", "SSH"],
      correctAnswer: 2
    },
    {
      id: "q4",
      question: "O que é um 'Worker' no contexto do RoadRunner?",
      options: [
        "O programador",
        "Um processo PHP que processa múltiplos requests em loop",
        "Uma thread do SO",
        "Um cabo de rede"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "RoadRunner permite processar gRPC e WebSockets com PHP?",
      options: ["Sim", "Não, apenas HTTP", "Apenas em servidores Linux", "Apenas no PHP 7"],
      correctAnswer: 0
    },
    {
      id: "q6",
      question: "Qual o perigo de manter o worker vivo (Stateful) no RoadRunner?",
      options: [
        "Aumento da velocidade",
        "Fugas de memória (Memory Leaks) que se acumulam ao longo dos pedidos",
        "O site mudar de cor",
        "Não há perigos"
      ],
      correctAnswer: 1
    }
  ]
};
