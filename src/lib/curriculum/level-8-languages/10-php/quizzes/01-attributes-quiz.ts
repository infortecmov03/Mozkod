import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq1",
  title: "Quiz Master: PHP 8 Attributes",
  passingScore: 85,
  questions: [
    {
      id: "q1_1",
      question: "Qual a sintaxe nativa dos Atributos introduzida no PHP 8?",
      options: ["@Attribute", "#[Attribute]", "[[Attribute]]", "/* @Attr */"],
      correctAnswer: 1
    },
    {
      id: "q1_2",
      question: "Diferente das anotações em Docblocks, os Atributos são:",
      options: [
        "Apenas comentários ignorados pelo motor",
        "Cidadãos de primeira classe integrados na árvore de sintaxe (AST)",
        "Exclusivos para classes e não para métodos",
        "Executados apenas no modo de debug"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_3",
      question: "Como se obtêm os metadados de um atributo em tempo de execução?",
      options: [
        "Usando a variável superglobal $_GET",
        "Através da Reflection API usando o método getAttributes()",
        "Lendo o ficheiro de configuração php.ini",
        "Não é possível ler atributos em runtime"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_4",
      question: "O que o parâmetro 'Attribute::TARGET_METHOD' define?",
      options: [
        "Que o atributo é opcional",
        "Que o atributo só pode ser aplicado a métodos de classe",
        "Que o atributo aumenta a velocidade do método",
        "Que o método deve ser privado"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "Atributos aceitam argumentos dinâmicos no PHP 8?",
      options: [
        "Sim, qualquer expressão de código",
        "Apenas valores constantes e expressões escalares simples",
        "Apenas strings literais",
        "Não aceitam qualquer tipo de argumento"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_6",
      question: "Qual o impacto dos Atributos na performance em relação ao parsing manual de Docblocks?",
      options: [
        "São mais lentos por serem objetos",
        "São muito mais rápidos, pois o parser da Zend já os processa nativamente",
        "Têm o mesmo desempenho",
        "Consomem o dobro da RAM"
      ],
      correctAnswer: 1
    }
  ]
};
