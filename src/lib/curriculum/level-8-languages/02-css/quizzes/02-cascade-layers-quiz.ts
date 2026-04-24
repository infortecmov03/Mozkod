import type { Quiz } from '../../../types';

export const quiz: Quiz = {
  id: "css-mq2",
  title: "Quiz: Cascade Layers (@layer)",
  passingScore: 80,
  questions: [
    {
      id: "q2_1",
      question: "Qual camada tem maior prioridade numa declaração '@layer base, components, theme'?",
      options: [
        "A camada 'base', pois vem primeiro",
        "A camada 'theme', pois vem por último na ordem de definição",
        "A que tiver o seletor com mais IDs",
        "Estilos fora de camadas têm sempre menos prioridade"
      ],
      correctAnswer: 1,
      explanation: "A última camada na lista de prioridade ganha de todas as anteriores, independentemente da especificidade interna."
    },
    {
      id: "q2_2",
      question: "O que acontece com estilos escritos fora de qualquer @layer em relação aos estilos dentro de layers?",
      options: [
        "Os estilos fora das camadas têm prioridade mínima",
        "Os estilos fora das camadas têm prioridade MÁXIMA (vencem todas as layers)",
        "Eles são ignorados pelo browser",
        "Eles fundem-se com a primeira camada"
      ],
      correctAnswer: 1,
      explanation: "No algoritmo da cascata, estilos 'unlayered' são considerados mais importantes que estilos dentro de @layer."
    },
    {
      id: "q2_3",
      question: "Como se aninha uma camada dentro de outra?",
      options: [
        "@layer parent.child",
        "@layer parent { @layer child { ... } }",
        "Ambas as opções estão corretas",
        "Não é possível aninhar camadas"
      ],
      correctAnswer: 2
    },
    {
      id: "q2_4",
      question: "O @import pode carregar um ficheiro diretamente para uma camada?",
      options: [
        "Sim, usando a sintaxe @import url('...') layer(name)",
        "Não, o @import deve estar fora de camadas",
        "Apenas se o ficheiro for .sass",
        "Sim, mas apenas na camada 'base'"
      ],
      correctAnswer: 0
    },
    {
      id: "q2_5",
      question: "Podes declarar a ordem das camadas múltiplas vezes?",
      options: [
        "Sim, mas apenas a primeira declaração conta",
        "Sim, mas a ordem é definida pela primeira vez que o nome da camada aparece",
        "Não, causa erro de compilação",
        "Apenas em ficheiros separados"
      ],
      correctAnswer: 1
    },
    {
      id: "q2_6",
      question: "Qual o benefício de usar @layer com bibliotecas externas (como Bootstrap)?",
      options: [
        "Acelera o download",
        "Permite 'domar' a especificidade da biblioteca sem usar !important",
        "Remove o JavaScript da biblioteca",
        "Muda as cores da biblioteca automaticamente"
      ],
      correctAnswer: 1
    }
  ]
};