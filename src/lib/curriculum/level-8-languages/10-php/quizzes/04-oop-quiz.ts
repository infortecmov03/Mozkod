import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq4",
  title: "Quiz Master: OOP Avançada e Enums",
  passingScore: 85,
  questions: [
    {
      id: "q4_1",
      question: "Qual a diferença fundamental entre um Enum puro e um Backed Enum?",
      options: [
        "Puros são mais rápidos",
        "Backed Enums possuem um valor escalar (string ou int) associado a cada caso",
        "Puros só podem ter 10 casos",
        "Backed Enums não podem ter métodos"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_2",
      question: "Pode um Enum em PHP implementar uma Interface?",
      options: [
        "Não, Enums não são classes",
        "Sim, Enums podem implementar interfaces e ter métodos próprios",
        "Apenas se for um Backed Enum",
        "Apenas em PHP 8.3"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_3",
      question: "O que o modificador 'readonly' numa classe (PHP 8.2+) garante?",
      options: [
        "Que a classe não pode ser instanciada",
        "Que todas as propriedades da classe são 'readonly' e não podem ser alteradas após o construtor",
        "Que a classe é privada",
        "Que o ficheiro da classe é de apenas leitura no disco"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_4",
      question: "Qual a função do método estático from() num Backed Enum?",
      options: [
        "Criar um novo caso de enum em runtime",
        "Instanciar o caso do enum a partir do seu valor escalar (lança ValueError se não existir)",
        "Mudar o nome do enum",
        "Validar a conexão com o banco"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_5",
      question: "Uma classe readonly pode ter propriedades sem tipo definido (untyped)?",
      options: [
        "Sim",
        "Não, todas as propriedades de uma classe readonly devem ser tipadas",
        "Apenas se forem estáticas",
        "Apenas se o valor inicial for null"
      ],
      correctAnswer: 1
    },
    {
      id: "q4_6",
      question: "Traits em PHP suportam constantes desde qual versão?",
      options: ["PHP 7.4", "PHP 8.0", "PHP 8.2", "Sempre suportaram"],
      correctAnswer: 2
    }
  ]
};
