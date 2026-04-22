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
      explanation: "O 1 é o elemento neutro do AND. Se A for 1, dá 1. Se A for 0, dá 0. Logo, o resultado é sempre o valor de A."
    },
    {
      id: "q2",
      question: "Qual o resultado da expressão 'A OR 1'?",
      options: ["A", "0", "1", "Depende de A"],
      correctAnswer: 2,
      explanation: "No OR, se pelo menos um dos valores for verdadeiro (1), o resultado final é sempre verdadeiro (1)."
    },
    {
      id: "q3",
      question: "Se simplificarmos 'A AND (NOT A)', o que obtemos?",
      options: ["A", "1", "0", "Nenhuma das anteriores"],
      correctAnswer: 2,
      explanation: "Algo não pode ser verdadeiro e falso ao mesmo tempo. Isto é a Lei da Contradição, e o resultado é sempre 0."
    },
    {
      id: "q4",
      question: "Aplicando a Lei de De Morgan, 'NOT (A AND B)' é equivalente a:",
      options: [
        "(NOT A) AND (NOT B)",
        "(NOT A) OR (NOT B)",
        "A OR B",
        "NOT A"
      ],
      correctAnswer: 1,
      explanation: "A negação de um AND transforma-se num OR das partes negadas individualmente."
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