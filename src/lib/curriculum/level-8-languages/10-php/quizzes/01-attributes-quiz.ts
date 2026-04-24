
import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq1",
  title: "Quiz Master: PHP 8 Attributes",
  passingScore: 85,
  questions: [
    {
      id: "q1_1",
      question: "Qual a sintaxe nativa dos Atributos no PHP 8?",
      options: ["@Attribute", "#[Attribute]", "[[Attribute]]", "/* @Attr */"],
      correctAnswer: 1
    },
    {
      id: "q1_2",
      question: "Atributos podem ser aplicados a quais elementos?",
      options: [
        "Apenas classes",
        "Apenas funções",
        "Classes, métodos, funções, propriedades e constantes",
        "Somente variáveis locais"
      ],
      correctAnswer: 2
    },
    {
      id: "q1_3",
      question: "Como se obtêm os metadados de um atributo em tempo de execução?",
      options: [
        "Usando var_dump()",
        "Através da Reflection API (getAttributes)",
        "Lendo o ficheiro de logs",
        "Através da variável global $_SERVER"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_4",
      question: "O que significa a flag 'Attribute::TARGET_CLASS'?",
      options: [
        "O atributo é obrigatório",
        "O atributo só pode ser aplicado em classes",
        "O atributo é invisível para o motor",
        "O atributo aumenta a performance"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "Atributos aceitam argumentos?",
      options: [
        "Não, são apenas etiquetas estáticas",
        "Sim, podem receber valores escalares e expressões constantes",
        "Apenas strings",
        "Apenas se o servidor for PHP 8.3"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "Qual a principal vantagem dos Atributos sobre Docblocks?",
      options: [
        "São mais bonitos",
        "São cidadãos de primeira classe, validados pelo parser e sem custo de parsing manual de strings",
        "Ocupam menos espaço em disco",
        "Permitem o uso de emojis"
      ],
      correctAnswer: 1
    }
  ]
};
