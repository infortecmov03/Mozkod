import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t18-quiz",
  title: "Quiz: Deteção e Correção de Erros",
  passingScore: 75,
  questions: [
    {
      id: "q1",
      question: "O que é um 'Bit Flip' no contexto de hardware?",
      options: [
        "Uma técnica para acelerar a CPU",
        "A inversão acidental de um bit (0 para 1 ou vice-versa) causada por interferência",
        "Um comando para apagar ficheiros",
        "Uma funcionalidade de ecrãs tácteis"
      ],
      correctAnswer: 1,
      explanation: "Bit flips são erros físicos causados por fatores externos que alteram o estado elétrico ou magnético de um bit na memória ou no processador."
    },
    {
      id: "q2",
      question: "Qual a limitação do Bit de Paridade simples?",
      options: [
        "Não consegue detetar nenhum erro",
        "Consegue detetar que houve um erro, mas não consegue identificar qual bit falhou para o corrigir",
        "É demasiado lento para computadores modernos",
        "Só funciona com números pares"
      ],
      correctAnswer: 1,
      explanation: "A paridade é um método de deteção. Ela avisa que a contagem de '1s' está errada, mas não fornece informação suficiente para saber onde o erro ocorreu."
    },
    {
      id: "q3",
      question: "Como o Código de Hamming consegue corrigir um erro?",
      options: [
        "Pedindo ao utilizador para digitar novamente",
        "Reiniciando o computador",
        "Utilizando múltiplos bits de verificação que agem como coordenadas para localizar e inverter o bit errado",
        "Apagando o bloco de dados corrompido"
      ],
      correctAnswer: 2,
      explanation: "O Código de Hamming usa redundância inteligente para criar uma 'impressão digital' da posição dos bits, permitindo a auto-correção."
    },
    {
      id: "q4",
      question: "Onde é que a memória RAM ECC é estritamente necessária?",
      options: [
        "Em computadores de jogos (Gaming)",
        "Apenas em computadores portáteis antigos",
        "Em servidores, sistemas financeiros e infraestruturas críticas",
        "Em qualquer computador que use Windows"
      ],
      correctAnswer: 2,
      explanation: "Sistemas que não podem tolerar paragens ou corrupção de dados invisível (silent data corruption) exigem hardware ECC."
    },
    {
      id: "q5",
      question: "O que acontece se o Checksum de um ficheiro descarregado da internet for diferente do original?",
      options: [
        "O ficheiro abre normalmente",
        "O browser repara o ficheiro sozinho",
        "O sistema indica que o ficheiro está corrompido e deve ser descarregado novamente",
        "A velocidade da internet aumenta"
      ],
      correctAnswer: 2,
      explanation: "Uma falha no checksum prova que o conteúdo binário mudou durante o transporte, tornando o ficheiro pouco fiável ou perigoso."
    },
    {
      id: "q6",
      question: "Qual destes é um método de correção e não apenas deteção?",
      options: [
        "Bit de Paridade",
        "Código de Hamming",
        "Checksum Simples",
        "Echo Request"
      ],
      correctAnswer: 1,
      explanation: "Enquanto paridade e checksum apenas detetam a falha, o Código de Hamming tem a capacidade matemática de reparar o dado."
    }
  ]
};
