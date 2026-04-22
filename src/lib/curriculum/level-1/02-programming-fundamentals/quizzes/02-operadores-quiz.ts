import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "pf-t2-quiz",
  title: "Quiz: Operadores e Precedência",
  passingScore: 70,
  questions: [
    {
      id: "q1",
      question: "Qual operador é usado para verificar a igualdade de valor e tipo (estrita) em linguagens como JavaScript?",
      options: ["==", "===", "=", "!="],
      correctAnswer: 1,
      explanation: "O operador === verifica tanto o valor quanto o tipo do dado, evitando erros de coerção automática."
    },
    {
      id: "q2",
      question: "Qual o resultado da operação de módulo (resto) 10 % 3?",
      options: ["3", "1", "0", "3.33"],
      correctAnswer: 1,
      explanation: "10 dividido por 3 é 3, com resto 1. O operador % retorna esse resto."
    },
    {
      id: "q3",
      question: "Segundo a precedência matemática em programação, qual operação é executada primeiro em: 10 + 5 * 2?",
      options: ["Soma (10 + 5)", "Multiplicação (5 * 2)", "Ocorre da esquerda para a direita", "Depende da linguagem"],
      correctAnswer: 1,
      explanation: "Tal como na aritmética, a multiplicação (*) tem precedência sobre a soma (+)."
    },
    {
      id: "q4",
      question: "O que faz o operador de incremento 'i++'?",
      options: ["Soma 2 à variável", "Subtrai 1", "Soma 1 ao valor atual da variável", "Multiplica por 1"],
      correctAnswer: 2
    },
    {
      id: "q5",
      question: "Qual operador lógico resulta em 'True' apenas se AMBAS as condições forem verdadeiras?",
      options: ["|| (OR)", "! (NOT)", "&& (AND)", "^ (XOR)"],
      correctAnswer: 2
    },
    {
      id: "q6",
      question: "Em linguagens como C++ e Java, qual o resultado de uma divisão inteira de 5 / 2?",
      options: ["2.5", "2", "3", "Erro de sintaxe"],
      correctAnswer: 1,
      explanation: "Em operações entre inteiros nestas linguagens, a parte decimal é descartada (truncada), resultando em 2."
    }
  ]
};
