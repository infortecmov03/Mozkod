import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "py-mq13",
  title: "Quiz: Decoradores Avançados e Contexto",
  passingScore: 80,
  questions: [
    {
      id: "q13_1",
      question: "Qual a diferença fundamental entre um decorador de função e um decorador de classe?",
      options: [
        "Decoradores de classe são mais rápidos",
        "Decoradores de classe recebem o construtor como argumento e podem modificar a estrutura da classe",
        "Decoradores de função não podem ser usados com argumentos",
        "Decoradores de classe são obrigatórios no Python 3.12"
      ],
      correctAnswer: 1
    },
    {
      id: "q13_2",
      question: "Por que se recomenda o uso de @contextmanager do contextlib em vez de implementar __enter__ e __exit__ manualmente?",
      options: [
        "Porque consome menos CPU",
        "Porque permite usar geradores para uma sintaxe mais legível e concisa",
        "Porque o Python vai descontinuar as classes de contexto",
        "Porque evita o uso de variáveis globais"
      ],
      correctAnswer: 1
    }
  ]
};