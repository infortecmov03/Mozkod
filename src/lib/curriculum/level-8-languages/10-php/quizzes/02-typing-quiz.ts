import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq2",
  title: "Quiz Master: Tipagem Forte e Union Types",
  passingScore: 85,
  questions: [
    {
      id: "q2_1",
      question: "Como se declara uma função que aceita tanto um objeto User quanto nulo?",
      options: ["User $u = null", "?User $u", "User|null $u", "Ambas as opções B e C"],
      correctAnswer: 3
    },
    {
      id: "q2_2",
      question: "O tipo 'mixed' introduzido no PHP 8 equivale a qual união de tipos?",
      options: [
        "string|int|float",
        "A união de todos os tipos possíveis, incluindo null",
        "Apenas objetos e arrays",
        "Qualquer valor exceto recursos"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_3",
      question: "O que caracteriza um 'Intersection Type' (PHP 8.1+)?",
      options: [
        "Aceita um tipo ou outro",
        "O objeto deve satisfazer todos os tipos declarados simultaneamente (A & B)",
        "Ocorre quando dois tipos colidem na memória",
        "É uma forma de herança múltipla"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_4",
      question: "Qual a diferença entre 'iterable' e 'array' na tipagem de argumentos?",
      options: [
        "Nenhuma",
        "'iterable' aceita arrays E objetos que implementam a interface Traversable",
        "'array' é mais rápido que 'iterable'",
        "'iterable' só existe no Laravel"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_5",
      question: "O tipo de retorno 'never' indica que a função:",
      options: [
        "Nunca deve ser chamada",
        "Sempre lança uma exceção ou termina o script (exit/die)",
        "Retorna um valor nulo",
        "Demora muito tempo a executar"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_6",
      question: "Qual o benefício da tipagem estrita (declare(strict_types=1))?",
      options: [
        "Impede a execução em servidores lentos",
        "Desativa a coerção automática de tipos, garantindo que o dado passado é exatamente o tipo esperado",
        "Aumenta o tamanho do ficheiro PHP",
        "Encripta o código fonte"
      ],
      correctAnswer: 1
    }
  ]
};
