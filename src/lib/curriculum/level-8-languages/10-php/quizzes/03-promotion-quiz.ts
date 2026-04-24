import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq3",
  title: "Quiz Master: Constructor Property Promotion",
  passingScore: 85,
  questions: [
    {
      id: "q3_1",
      question: "Onde as propriedades são declaradas na técnica de Property Promotion?",
      options: [
        "No corpo da classe como membros estáticos",
        "Diretamente na lista de argumentos do construtor, precedidas por um modificador de visibilidade",
        "Num ficheiro .env separado",
        "No final do ficheiro após o fecho da classe"
      ],
      correctAnswer: 1
    },
    {
      id: "q3_2",
      question: "Podes misturar propriedades promovidas com argumentos normais no mesmo construtor?",
      options: ["Sim", "Não, deve ser um ou outro", "Apenas em classes abstratas", "Apenas se o argumento normal for o último"],
      correctAnswer: 0
    },
    {
      id: "q3_3",
      question: "Qual a visibilidade permitida para propriedades promovidas?",
      options: ["Apenas public", "Apenas private", "Public, private ou protected", "Somente internal"],
      correctAnswer: 2
    },
    {
      id: "q3_4",
      question: "Podes atribuir um valor padrão a uma propriedade promovida?",
      options: [
        "Não, é proibido por sintaxe",
        "Sim, da mesma forma que um argumento de função padrão",
        "Apenas para tipos inteiros",
        "Sim, mas apenas se a classe for readonly"
      ],
      correctAnswer: 1
    },
    {
      id: "q3_5",
      question: "As anotações e atributos aplicados a um parâmetro promovido são aplicados a quê?",
      options: [
        "Apenas ao argumento do construtor",
        "Tanto ao argumento quanto à propriedade da classe gerada",
        "Apenas à propriedade da classe",
        "A nada, são ignorados"
      ],
      correctAnswer: 1
    },
    {
      id: "q3_6",
      question: "Qual o principal benefício arquitetural desta funcionalidade?",
      options: [
        "Aumentar a velocidade de execução na CPU",
        "Reduzir o boilerplate e o risco de erros ao sincronizar declarações, argumentos e atribuições",
        "Permitir herança múltipla",
        "Substituir o uso de namespaces"
      ],
      correctAnswer: 1
    }
  ]
};
