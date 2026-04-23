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
      },
      {
        id: "q2_2",
        question: "O que o manifesto diz sobre planos rígidos?",
        options: ["Devem ser seguidos cegamente", "Responder a mudanças é mais importante que seguir o plano", "Não devem existir", "Apenas gestores os criam"],
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
      },
      {
        id: "q3_2",
        question: "Qual a duração máxima recomendada para uma Sprint?",
        options: ["1 semana", "1 mês", "3 meses", "6 meses"],
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
  {
    id: "se-q6",
    title: "Quiz: User Stories (INVEST)",
    passingScore: 80,
    questions: [
      {
        id: "q6_1",
        question: "O que significa o 'T' em INVEST?",
        options: ["Time", "Traceable", "Testable", "Technical"],
        correctAnswer: 2
      }
    ]
  },
  {
    id: "se-q7",
    title: "Quiz: Estimativa de Elite",
    passingScore: 80,
    questions: [
      {
        id: "q7_1",
        question: "Por que usamos a sequência de Fibonacci para estimar?",
        options: ["Porque é bonita", "Para refletir que quanto maior a tarefa, maior a incerteza", "Para ser mais exato em horas", "O Google obriga"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q8",
    title: "Quiz: DevOps Culture",
    passingScore: 80,
    questions: [
      {
        id: "q8_1",
        question: "Qual o foco do pilar 'Automation' no CAMS?",
        options: ["Eliminar o erro humano e acelerar o feedback loop", "Substituir todos os humanos", "Reduzir o preço do hardware", "Mudar de linguagem"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "se-q9",
    title: "Quiz: CI/CD Pipelines",
    passingScore: 80,
    questions: [
      {
        id: "q9_1",
        question: "Qual a função do 'Artifact' gerado num pipeline?",
        options: ["Um erro de sistema", "O pacote de software pronto para ser instalado (ex: .zip, .docker)", "O código fonte", "A base de dados"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q10",
    title: "Quiz: Deployment Strategies",
    passingScore: 80,
    questions: [
      {
        id: "q10_1",
        question: "O deploy 'Canary' consiste em quê?",
        options: ["Lançar para todos de uma vez", "Lançar para uma pequena percentagem de utilizadores primeiro", "Lançar apenas em servidores de teste", "Mudar o nome do projeto"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q11",
    title: "Quiz: Code Quality",
    passingScore: 80,
    questions: [
      {
        id: "q11_1",
        question: "Qual a vantagem do Pair Programming?",
        options: ["Escrever 2x mais código", "Menos erros, melhor design e transferência de conhecimento em tempo real", "Gastar menos eletricidade", "Não precisa de testes"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q12",
    title: "Quiz: Technical Debt",
    passingScore: 80,
    questions: [
      {
        id: "q12_1",
        question: "Débito técnico deve ser pago quando?",
        options: ["Nunca", "Sempre que houver folga no Sprint e ele estiver a atrasar o desenvolvimento", "Apenas após 10 anos", "Quando o cliente reclamar"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q13",
    title: "Quiz: SRE Fundamentals",
    passingScore: 80,
    questions: [
      {
        id: "q13_1",
        question: "O que é um SLO?",
        options: ["Service Level Objective (O alvo de fiabilidade)", "System Log Output", "Server Low Order", "Secure Link Operation"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "se-q14",
    title: "Quiz: Error Budgets",
    passingScore: 80,
    questions: [
      {
        id: "q14_1",
        question: "O que acontece se o Error Budget for esgotado?",
        options: ["O site fecha", "A equipa foca exclusivamente na fiabilidade em vez de novas funcionalidades", "O PO é demitido", "Nada acontece"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q15",
    title: "Quiz: Incident Management",
    passingScore: 80,
    questions: [
      {
        id: "q15_1",
        question: "A prioridade número 1 durante um incidente é:",
        options: ["Punir o responsável", "Restabelecer o serviço para o utilizador o mais rápido possível", "Escrever o relatório final", "Mudar a senha do root"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q16",
    title: "Quiz: Post-mortems",
    passingScore: 80,
    questions: [
      {
        id: "q16_1",
        question: "Blame-free significa:",
        options: ["Que ninguém trabalha", "Focar no 'como' e 'porquê' sistémico em vez de quem cometeu o erro", "Esconder a falha", "Mentir para o cliente"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q17",
    title: "Quiz: Documentation",
    passingScore: 80,
    questions: [
      {
        id: "q17_1",
        question: "Um ADR (Architectural Decision Record) deve ser imutável?",
        options: ["Sim, representa a decisão num momento no tempo", "Não, muda todos os dias", "Deve ser apagado após o build", "Só vive em papel"],
        correctAnswer: 0
      }
    ]
  },
  {
    id: "se-q18",
    title: "Quiz: Engineering Ethics",
    passingScore: 80,
    questions: [
      {
        id: "q18_1",
        question: "O viés algorítmico (Bias) deve ser:",
        options: ["Ignorado", "Identificado, medido e mitigado proativamente", "Escondido do governo", "Usado para aumentar o lucro"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q19",
    title: "Quiz: Leadership",
    passingScore: 80,
    questions: [
      {
        id: "q19_1",
        question: "Um Tech Lead de elite deve focar-se em:",
        options: ["Codificar 100% do tempo", "Remover bloqueios e multiplicar a produtividade da equipa", "Mandar nas pessoas", "Responder emails apenas"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q20",
    title: "Quiz: AI in Engineering",
    passingScore: 80,
    questions: [
      {
        id: "q20_1",
        question: "A IA substitui o pensamento arquitetural?",
        options: ["Sim", "Não, a IA ajuda na implementação mas o humano orquestra a arquitetura e intenção", "Talvez no futuro", "Apenas em código Legado"],
        correctAnswer: 1
      }
    ]
  },
  {
    id: "se-q21",
    title: "Quiz: Final Review",
    passingScore: 80,
    questions: [
      {
        id: "q21_1",
        question: "Qual o selo de qualidade Codworks Moz?",
        options: ["Rigor, Performance e Segurança", "Apenas velocidade", "Design bonito apenas", "Menor preço"],
        correctAnswer: 0
      }
    ]
  }
];
