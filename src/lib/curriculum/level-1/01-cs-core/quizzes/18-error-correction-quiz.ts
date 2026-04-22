import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "cs-t18-quiz",
  title: "Quiz: Deteção e Correção de Erros",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Para que serve a memória RAM ECC?",
      options: [
        "Para ser mais barata",
        "Para detetar e corrigir erros de bits causados por interferência",
        "Para aumentar a resolução do ecrã",
        "Para guardar mais fotos"
      ],
      correctAnswer: 1,
      explanation: "ECC (Error Correction Code) é vital para servidores e sistemas de missão crítica."
    },
    {
      id: "q2",
      question: "Qual o método mais simples de deteção (mas que não corrige)?",
      options: ["Código de Hamming", "Bit de Paridade", "RAID 5", "Blockchain"],
      correctAnswer: 1,
      explanation: "O bit de paridade apenas indica se houve uma mudança ímpar de bits."
    }
  ]
};