import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq1",
  title: "Quiz: Seletores de Elite e Especificidade",
  passingScore: 80,
  questions: [
    {
      id: "q1_1",
      question: "Qual a principal diferença de especificidade entre :is() e :where()?",
      options: [
        ":is() tem especificidade zero, :where() herda a maior",
        ":where() tem especificidade zero, :is() herda a maior do seu conteúdo",
        "Ambos têm especificidade zero",
        "Ambos aumentam a especificidade em 10 pontos"
      ],
      correctAnswer: 1,
      explanation: "O seletor :where() permite agrupamentos com especificidade zero, facilitando sobreposições sem lutas de peso."
    },
    {
      id: "q1_2",
      question: "O que o seletor relacional :has() permite fazer que antes era exclusivo do JavaScript?",
      options: [
        "Selecionar um elemento pai baseado nos seus filhos",
        "Mudar a cor de fundo dinamicamente",
        "Criar animações 3D",
        "Ligar a base de dados ao CSS"
      ],
      correctAnswer: 0,
      explanation: ":has() é conhecido como o 'parent selector', permitindo estilizar o pai conforme o estado ou conteúdo dos filhos."
    },
    {
      id: "q1_3",
      question: "Qual o peso de especificidade de um ID (#header)?",
      options: ["1 ponto", "10 pontos", "100 pontos", "1000 pontos"],
      correctAnswer: 2
    },
    {
      id: "q1_4",
      question: "O seletor :not() aumenta a especificidade da regra?",
      options: [
        "Sim, em 10 pontos fixos",
        "Não, mas os seletores passados como argumento dentro dele aumentam",
        "Não, o :not() tem peso zero",
        "Sim, o :not() conta como um ID"
      ],
      correctAnswer: 1
    },
    {
      id: "q1_5",
      question: "Qual o resultado de um seletor combinado 'div.card#title'?",
      options: ["101 pontos", "111 pontos", "11 pontos", "21 pontos"],
      correctAnswer: 1,
      explanation: "Tag(1) + Classe(10) + ID(100) = 111."
    },
    {
      id: "q1_6",
      question: "Por que deves evitar o uso de IDs para estilização em Design Systems?",
      options: [
        "Porque o browser não gosta",
        "Devido à alta especificidade que dificulta a reutilização e sobreposição de estilos",
        "Porque são mais lentos que as classes",
        "Porque os IDs são apenas para JavaScript"
      ],
      correctAnswer: 1
    }
  ]
};