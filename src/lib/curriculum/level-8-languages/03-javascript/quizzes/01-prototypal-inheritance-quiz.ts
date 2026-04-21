import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "js-mq1",
  title: "Quiz: Prototypal Inheritance",
  passingScore: 80,
  questions: [
    {
      id: "q1",
      question: "Onde é que o motor JavaScript procura uma propriedade que não existe no objeto atual?",
      options: [
        "Na base de dados do browser",
        "Na cadeia de protótipos (__proto__)",
        "No ficheiro HTML principal",
        "Ele cria a propriedade automaticamente"
      ],
      correctAnswer: 1,
      explanation: "O motor percorre a Prototype Chain até encontrar a propriedade ou chegar ao objeto raiz (Object.prototype)."
    },
    {
      id: "q2",
      question: "Qual a vantagem de definir métodos no protótipo em vez de dentro do construtor?",
      options: [
        "O código fica mais colorido",
        "Poupa memória, pois todas as instâncias partilham a mesma função física",
        "Torna a função privada",
        "O motor V8 desativa a otimização de cache"
      ],
      correctAnswer: 1
    }
  ]
};
