import type { Quiz } from '../../types';

export const quiz: Quiz = {
  id: "cs-t3-quiz",
  title: "Quiz: Álgebra Booleana de Elite",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Segundo a Lei da Identidade, qual o resultado de 'A OR 0'?",
      options: ["0", "1", "A", "NOT A"],
      correctAnswer: 2,
      explanation: "Na porta OR, se um dos lados é 0, o resultado depende inteiramente do valor de A. Se A for 1, o resultado é 1. Se A for 0, o resultado é 0. Logo, A OR 0 = A."
    },
    {
      id: "q2",
      question: "Qual o resultado simplificado da expressão 'A AND (NOT A)'?",
      options: ["A", "1", "0", "Indeterminado"],
      correctAnswer: 2,
      explanation: "É impossível algo ser Verdadeiro E Falso ao mesmo tempo. Portanto, esta expressão resulta sempre em 0 (Falso)."
    },
    {
      id: "q3",
      question: "Aplicando a 1ª Lei de De Morgan, 'NOT (A AND B)' é equivalente a:",
      options: [
        "(NOT A) AND (NOT B)",
        "(NOT A) OR (NOT B)",
        "NOT A",
        "A OR B"
      ],
      correctAnswer: 1,
      explanation: "De Morgan diz que ao negar uma conjunção (AND), negamos as variáveis individualmente e trocamos o operador para disjunção (OR)."
    },
    {
      id: "q4",
      question: "Qual o valor de 'A OR 1'?",
      options: ["A", "0", "1", "Depende de A"],
      correctAnswer: 2,
      explanation: "Na porta OR, se pelo menos um dos lados for 1 (Verdadeiro), o resultado é sempre 1, independentemente do valor da outra variável."
    },
    {
      id: "q5",
      question: "Simplifique: (A AND B) OR (A AND C)",
      options: [
        "A AND (B OR C)",
        "B OR C",
        "A OR (B AND C)",
        "A AND B AND C"
      ],
      correctAnswer: 0,
      explanation: "Esta é a aplicação inversa da Lei da Distributividade. Extraímos o termo comum 'A AND'."
    }
  ]
};