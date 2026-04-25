import type { Quiz } from '../../../../types';

export const quiz: Quiz = {
  id: "php-mq12",
  title: "Quiz: Sockets e Comunicação de Baixo Nível",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Qual função inicia um servidor socket em PHP?",
      options: ["socket_create()", "fsockopen()", "curl_init()", "net_open()"],
      correctAnswer: 0
    },
    {
      id: "q2",
      question: "O parâmetro AF_INET refere-se a quê?",
      options: ["África Internet", "Protocolo IPv4", "Ficheiros Locais", "Segurança"],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Para receber múltiplas conexões sem bloquear, o engenheiro usa:",
      options: ["socket_select() ou I/O não-bloqueante", "Um loop for simples", "Muitas variáveis", "O comando die()"],
      correctAnswer: 0
    },
    {
      id: "q4",
      question: "Qual a diferença entre socket_write() e socket_send()?",
      options: [
        "Nenhuma",
        "socket_send() permite flags adicionais de protocolo",
        "socket_write() é apenas para ficheiros",
        "socket_send() é mais lento"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "Um 'Unix Domain Socket' é mais rápido que um 'TCP Socket' para comunicação local?",
      options: ["Sim, pois pula o stack de rede (TCP/IP)", "Não, a internet é sempre mais rápida", "Apenas em servidores Windows", "Depende da RAM"],
      correctAnswer: 0
    },
    {
      id: "q6",
      question: "O que o Status Code de erro 'EAGAIN' indica no socket?",
      options: [
        "Erro fatal",
        "O recurso está temporariamente indisponível (tente novamente mais tarde)",
        "O socket fechou",
        "Dados corrompidos"
      ],
      correctAnswer: 1
    }
  ]
};
