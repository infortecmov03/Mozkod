import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "php-mq3",
  title: "Quiz Master: Constructor Property Promotion",
  passingScore: 85,
  questions: [
    {
      id: "q3_1",
      question: "O que torna um parâmetro do construtor elegível para 'Promotion' no PHP 8?",
      options: [
        "Ter um nome que comece com letra maiúscula.",
        "Ser precedido obrigatoriamente por um modificador de visibilidade (public, private ou protected).",
        "Estar dentro de um bloco try/catch.",
        "Ser do tipo 'mixed' obrigatoriamente."
      ],
      correctAnswer: 1,
      explanation: "Sem o modificador de visibilidade, o PHP trata o parâmetro como um argumento comum e não cria a propriedade na classe."
    },
    {
      id: "q3_2",
      question: "Podes misturar parâmetros promovidos com parâmetros normais no mesmo construtor?",
      options: [
        "Não, o PHP exige que ou todos sejam promovidos ou nenhum.",
        "Sim, o PHP permite a mistura sem restrições de ordem.",
        "Sim, mas apenas em classes marcadas como 'readonly'.",
        "Apenas se o parâmetro normal for opcional."
      ],
      correctAnswer: 1,
      explanation: "É perfeitamente válido ter, por exemplo, um logger que é apenas usado no construtor (normal) e um ID que é promovido a propriedade."
    },
    {
      id: "q3_3",
      question: "Onde é que o código escrito dentro do corpo do construtor { ... } é executado em relação à promoção?",
      options: [
        "Antes da promoção das propriedades.",
        "Simultaneamente via threads.",
        "Após a promoção e atribuição automática dos valores às propriedades.",
        "O corpo do construtor é ignorado se houver promoção."
      ],
      correctAnswer: 2,
      explanation: "O motor primeiro promove as propriedades e depois executa o código que definires no corpo, permitindo validações extras."
    },
    {
      id: "q3_4",
      question: "É permitido usar Property Promotion em construtores de classes abstratas?",
      options: [
        "Sim, funciona da mesma forma que em classes concretas.",
        "Não, o PHP proíbe promoção em classes abstratas.",
        "Apenas se a visibilidade for 'protected'.",
        "Apenas se a classe não tiver métodos."
      ],
      correctAnswer: 0
    },
    {
      id: "q3_5",
      question: "O que acontece se tentares declarar a mesma propriedade no corpo da classe E no construtor via Promotion?",
      options: [
        "O PHP faz o merge automático.",
        "Ocorre um erro fatal de 'Redeclared Property'.",
        "A declaração no corpo da classe ganha.",
        "O compilador ignora a promoção."
      ],
      correctAnswer: 1,
      explanation: "Como a promoção gera uma declaração implícita, declará-la manualmente no corpo causaria uma duplicação proibida."
    },
    {
      id: "q3_6",
      question: "Pode-se usar o tipo 'callable' em propriedades promovidas?",
      options: [
        "Sim, sem restrições.",
        "Não, o tipo 'callable' não é permitido em propriedades de classe no PHP.",
        "Apenas se for uma função anónima.",
        "Sim, mas apenas em classes readonly."
      ],
      correctAnswer: 1,
      explanation: "Esta é uma restrição do PHP para propriedades em geral, não apenas para as promovidas. Use o tipo 'Closure' ou interfaces em vez de 'callable'."
    }
  ]
};
