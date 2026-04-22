import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t15-quiz",
  title: "Quiz: Sistemas de Ficheiros",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "O que é um Inode em sistemas como o Linux?",
      options: [
        "Um vírus de computador",
        "Uma estrutura que guarda metadados sobre um ficheiro",
        "O nome do utilizador",
        "Um tipo de cabo de rede"
      ],
      correctAnswer: 1,
      explanation: "Inodes são índices técnicos com as propriedades de cada ficheiro."
    },
    {
      id: "q2",
      question: "Onde é que o conteúdo real (os bits) do ficheiro é guardado?",
      options: ["No Inode", "Em blocos de dados no disco", "Na BIOS", "No monitor"],
      correctAnswer: 1,
      explanation: "O Inode aponta para os endereços dos blocos de dados reais."
    }
  ]
};