import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t11-quiz",
  title: "Quiz: Arquitetura ISA",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual arquitetura foca em instruções simples e alta eficiência energética?",
      options: ["CISC", "RISC", "BISC", "Intel Core"],
      correctAnswer: 1,
      explanation: "RISC (Reduced Instruction Set Computer) é o padrão de eficiência usado em dispositivos móveis."
    },
    {
      id: "q2",
      question: "O que o ISA define?",
      options: [
        "A cor da caixa do computador",
        "O conjunto de instruções que o processador consegue executar",
        "A velocidade da internet",
        "O número de pixels no ecrã"
      ],
      correctAnswer: 1,
      explanation: "O ISA é o vocabulário básico da máquina."
    }
  ]
};