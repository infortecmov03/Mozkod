import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t14-quiz",
  title: "Quiz: Memória Virtual e Paginação",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual é o principal objetivo de segurança da Memória Virtual?",
      options: [
        "Aumentar a velocidade da CPU",
        "Isolar a memória entre processos, impedindo que um programa aceda aos dados de outro",
        "Eliminar a necessidade de memória RAM física",
        "Criptografar todos os ficheiros do disco"
      ],
      correctAnswer: 1,
      explanation: "O isolamento garante que cada processo rode na sua própria 'bolha' de endereços virtuais, protegendo a estabilidade e privacidade do sistema."
    },
    {
      id: "q2",
      question: "Qual componente de hardware é responsável por traduzir endereços virtuais em endereços físicos?",
      options: ["ALU (Unidade Lógica e Aritmética)", "MMU (Memory Management Unit)", "Registrador de Instrução", "BIOS"],
      correctAnswer: 1,
      explanation: "A MMU faz a tradução instantânea em hardware. Se fosse feita por software, o sistema seria extremamente lento."
    },
    {
      id: "q3",
      question: "O que acontece tecnicamente durante um 'Page Fault'?",
      options: [
        "O computador desliga por erro de hardware",
        "A CPU tenta aceder a uma página que não está atualmente na RAM física",
        "A memória RAM queima por excesso de voltagem",
        "O utilizador cancela um download"
      ],
      correctAnswer: 1,
      explanation: "O Page Fault é um sinal para o Sistema Operativo de que os dados solicitados estão no disco (Swap) e precisam de ser trazidos para a RAM."
    },
    {
      id: "q4",
      question: "Como se chama o fenómeno onde o sistema gasta mais tempo a trocar páginas com o disco do que a executar programas?",
      options: ["Paging", "Caching", "Thrashing", "Bootstrapping"],
      correctAnswer: 2,
      explanation: "O Thrashing ocorre quando a RAM está tão saturada que o SO entra num loop infinito de substituição de páginas, paralisando a máquina."
    },
    {
      id: "q5",
      question: "Qual a diferença entre uma Página (Page) e um Frame?",
      options: [
        "A página é física e o frame é lógico",
        "Não há diferença, são sinónimos",
        "A Página é a unidade na memória virtual (lógica) e o Frame é a unidade na RAM física",
        "O Frame é maior que a Página"
      ],
      correctAnswer: 2,
      explanation: "Pense na Página como a folha de um livro e no Frame como o local na estante onde essa folha (página) é guardada."
    },
    {
      id: "q6",
      question: "Por que a Memória Virtual permite correr programas maiores do que a RAM instalada?",
      options: [
        "Porque ela comprime o código para metade do tamanho",
        "Porque apenas as partes do programa que estão a ser usadas AGORA precisam de estar na RAM",
        "Porque ela aumenta a voltagem da memória para guardar mais bits",
        "Porque ela apaga os outros programas automaticamente"
      ],
      correctAnswer: 1,
      explanation: "Este é o princípio da localidade: um programa de 10GB pode correr em 4GB de RAM se apenas as funções ativas forem mantidas na memória física."
    }
  ]
};