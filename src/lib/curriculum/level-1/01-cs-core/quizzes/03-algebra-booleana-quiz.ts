import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t3-quiz",
  title: "Quiz: Domínio da Lógica Booleana",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Segundo a Lei da Identidade, qual o resultado de 'A AND 1'?",
      options: ["0", "1", "A", "NOT A"],
      correctAnswer: 2,
      explanation: "Como 1 é o elemento neutro do AND, o resultado depende apenas de A. Se A for 1, dá 1. Se A for 0, dá 0. Logo, A AND 1 = A."
    },
    {
      id: "q2",
      question: "Qual o resultado de 'A OR 1'?",
      options: ["A", "0", "1", "Depende de A"],
      correctAnswer: 2,
      explanation: "No OU (OR), se pelo menos um dos lados for verdadeiro (1), o resultado é sempre verdadeiro, não importando o valor de A."
    },
    {
      id: "q3",
      question: "Se simplificarmos 'A AND (NOT A)', o que obtemos?",
      options: ["A", "1", "0", "A²"],
      correctAnswer: 2,
      explanation: "É a Lei da Contradição. Algo não pode ser Verdadeiro E Falso ao mesmo tempo. Portanto, o resultado é sempre Falso (0)."
    },
    {
      id: "q4",
      question: "Aplicando a Lei de De Morgan, 'NOT (A OR B)' é o mesmo que:",
      options: [
        "(NOT A) OR (NOT B)",
        "(NOT A) AND (NOT B)",
        "A AND B",
        "NOT A"
      ],
      correctAnswer: 1,
      explanation: "De Morgan diz que a negação de um OU transforma-se num AND das negações individuais."
    },
    {
      id: "q5",
      question: "Qual o resultado de 'A OR 0'?",
      options: ["0", "1", "A", "NOT A"],
      correctAnswer: 2,
      explanation: "O 0 é o elemento neutro do OR. O resultado será exatamente o valor que estiver em A."
    }
  ]
};