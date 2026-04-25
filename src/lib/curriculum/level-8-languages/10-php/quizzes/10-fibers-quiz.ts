import type { Quiz } from '../../../../types';

export const quiz: Quiz = {
  id: "php-mq10",
  title: "Quiz: Fibers e Concorrência Cooperativa",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "O que é uma Fiber no PHP 8.1?",
      options: [
        "Uma nova thread do sistema operativo",
        "Um bloco de código que pode ser pausado e retomado (Coroutine)",
        "Uma extensão para compressão de imagens",
        "Um tipo de loop infinito seguro"
      ],
      correctAnswer: 1
    },
    {
      id: "q2",
      question: "Diferente de Threads, as Fibers são escalonadas por quem?",
      options: [
        "Pelo Kernel do Linux",
        "Pelo próprio programador através do código (Cooperativo)",
        "Pela placa de vídeo",
        "Pelo Apache"
      ],
      correctAnswer: 1
    },
    {
      id: "q3",
      question: "Qual método da classe Fiber suspende a execução?",
      options: ["Fiber::stop()", "Fiber::suspend()", "Fiber::pause()", "Fiber::wait()"],
      correctAnswer: 1
    },
    {
      id: "q4",
      question: "As Fibers resolvem nativamente o problema de I/O não-bloqueante no PHP?",
      options: [
        "Sim, tornam tudo assíncrono sozinho",
        "Não, elas fornecem apenas a infraestrutura para suspensão; a lógica de I/O exige um loop de eventos",
        "Apenas no Windows",
        "Sim, mas apenas para MySQL"
      ],
      correctAnswer: 1
    },
    {
      id: "q5",
      question: "O que acontece ao estado da stack quando uma Fiber é suspensa?",
      options: [
        "É apagado",
        "É preservado pela VM para ser retomado no mesmo ponto",
        "É movido para a base de dados",
        "É duplicado"
      ],
      correctAnswer: 1
    },
    {
      id: "q6",
      question: "Qual o benefício de Fibers em relação a Generators para concorrência?",
      options: [
        "São mais lentas",
        "Permitem suspensão em qualquer ponto da stack de chamadas, não apenas no yield",
        "Não usam memória",
        "Substituem o uso de classes"
      ],
      correctAnswer: 1
    }
  ]
};
