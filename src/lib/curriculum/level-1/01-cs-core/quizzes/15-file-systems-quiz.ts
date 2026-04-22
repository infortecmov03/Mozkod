import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t15-quiz",
  title: "Quiz: Sistemas de Ficheiros e Inodes",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual o papel principal do Sistema de Ficheiros?",
      options: [
        "Aumentar a velocidade da CPU",
        "Fornecer uma estrutura lógica e hierárquica para organizar bits no disco",
        "Substituir a memória RAM",
        "Limpar o cache do navegador automaticamente"
      ],
      correctAnswer: 1,
      explanation: "O sistema de ficheiros é o 'mapa' que traduz blocos físicos de armazenamento em ficheiros e pastas que podemos usar."
    },
    {
      id: "q2",
      question: "Em sistemas Linux, o que é um Inode?",
      options: [
        "O nome do utilizador logado",
        "Uma estrutura que guarda metadados sobre um ficheiro, exceto o seu nome",
        "Um comando para apagar pastas",
        "Um tipo de memória volátil"
      ],
      correctAnswer: 1,
      explanation: "Inodes guardam permissões, tamanho, datas e localização física, mas o nome do ficheiro é guardado no ficheiro de diretório."
    },
    {
      id: "q3",
      question: "Tecnicamente, o que é uma 'Pasta' (Diretório) para o Sistema Operativo?",
      options: [
        "Um espaço físico vazio no disco",
        "Um ficheiro especial que mapeia nomes de ficheiros a números de Inode",
        "Um atalho para a internet",
        "Uma zona de proteção contra vírus"
      ],
      correctAnswer: 1,
      explanation: "Diretórios são apenas ficheiros de índice. Eles ligam os nomes que humanos usam aos números técnicos que o sistema entende."
    },
    {
      id: "q4",
      question: "Para que serve a funcionalidade de 'Journaling'?",
      options: [
        "Para escrever logs de utilizador",
        "Para garantir a integridade dos dados e recuperação rápida após falhas de energia",
        "Para acelerar o download de vídeos",
        "Para criptografar o disco rígido"
      ],
      correctAnswer: 1,
      explanation: "O Journaling regista a intenção da escrita antes de a realizar. Se houver um crash, o sistema sabe exatamente o que estava a fazer e evita corromper o disco."
    },
    {
      id: "q5",
      question: "O que acontece durante a 'Fragmentação' de um ficheiro?",
      options: [
        "O ficheiro é dividido em partes menores para caber em blocos não contíguos",
        "O ficheiro é apagado por falta de espaço",
        "O ficheiro é comprimido automaticamente",
        "O ficheiro muda de extensão"
      ],
      correctAnswer: 0,
      explanation: "Fragmentação ocorre quando o ficheiro é espalhado pelo disco porque não existe um espaço contíguo grande o suficiente para ele."
    },
    {
      id: "q6",
      question: "Qual destas informações NÃO é guardada dentro de um Inode típico?",
      options: [
        "O tamanho do ficheiro",
        "O nome do ficheiro",
        "As permissões de acesso",
        "Os ponteiros para os blocos de dados"
      ],
      correctAnswer: 1,
      explanation: "O nome do ficheiro vive na estrutura do diretório, não no Inode. O Inode é focado nas propriedades técnicas e localização física."
    }
  ]
};
