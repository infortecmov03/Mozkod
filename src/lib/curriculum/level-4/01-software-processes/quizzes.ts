import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: "se-q1",
    title: "Quiz: SDLC Mastery",
    passingScore: 80,
    questions: [
      {
        id: "q1_1",
        question: "Qual o custo relativo de corrigir um bug na fase de Manutenção em relação à fase de Análise?",
        options: ["É igual", "2x mais caro", "Cerca de 100x mais caro", "Mais barato"],
        correctAnswer: 2
      },
      {
        id: "q1_2",
        question: "O modelo Waterfall é caracterizado por ser:",
        options: ["Iterativo e flexível", "Linear e sequencial", "Apenas para startups", "Focado apenas em testes"],
        correctAnswer: 1
      },
      {
        id: "q1_3",
        question: "Em qual fase do SDLC se define o 'Stack Tecnológico'?",
        options: ["Análise", "Design/Arquitetura", "Implementação", "Manutenção"],
        correctAnswer: 1
      },
      {
        id: "q1_4",
        question: "O que significa 'Requirement Gathering'?",
        options: ["Escrever código", "Identificar e documentar o que o cliente precisa", "Limpar o banco de dados", "Contratar novos programadores"],
        correctAnswer: 1
      },
      {
        id: "q1_5",
        question: "Verificação e Validação ocorrem em qual fase?",
        options: ["Design", "Testing", "Deployment", "Análise"],
        correctAnswer: 1
      },
      {
        id: "q1_6",
        question: "O ciclo de vida termina no lançamento (Deployment)?",
        options: ["Sim", "Não, continua na fase de Manutenção e Evolução", "Apenas em projetos pequenos", "Sim, após o pagamento final"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q2",
    title: "Quiz: Manifesto Ágil",
    passingScore: 80,
    questions: [
      {
        id: "q2_1",
        question: "Qual o valor supremo do Manifesto Ágil para um Engenheiro?",
        options: [
          "Documentação extensa",
          "Software em funcionamento",
          "Ferramentas complexas",
          "Contratos rígidos"
        ],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q3",
    title: "Quiz: Scrum Framework",
    passingScore: 80,
    questions: [
      {
        id: "q3_1",
        question: "Quem é o responsável por priorizar o Backlog do Produto?",
        options: ["Scrum Master", "Product Owner", "CTO", "Dev Team"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q4",
    title: "Quiz: Kanban & Flow",
    passingScore: 80,
    questions: [
      {
        id: "q4_1",
        question: "O que o WIP Limit tenta prevenir?",
        options: ["Trabalho excessivo", "Ociosidade", "Context switching excessivo e gargalos no fluxo", "Uso de cores no quadro"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "se-q5",
    title: "Quiz: Requisitos Master",
    passingScore: 80,
    questions: [
      {
        id: "q5_1",
        question: "Um requisito de 'Escalabilidade' é do tipo:",
        options: ["Funcional", "Não-funcional", "Opcional", "De interface"],
        correctAnswer: 1
      }
    ]
  },
  ...Array.from({ length: 16 }, (_, i) => ({
    id: `se-q${i + 6}`,
    title: `Software Processes Quiz ${i + 6}`,
    questions: [
      {
        id: "q_gen",
        question: "Validar conhecimento técnico do tópico " + (i + 6),
        options: ["Certo", "Errado", "Incorreto"],
        correctAnswer: 0
      }
    ],
    passingScore: 80
  }))
];
