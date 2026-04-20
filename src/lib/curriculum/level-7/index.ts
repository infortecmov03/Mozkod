import type { Level, KnowledgeArea, TheoryLesson, Quiz } from '../types';

const capstoneSteps: TheoryLesson[] = [
  { id: "cap-t1", title: "Definição do MVP", content: "<p>Foco no essencial para validar a ideia de negócio ou técnica.</p>", quizId: "cap-q1" },
  { id: "cap-t2", title: "UX Research & Wireframing", content: "<p>Desenho da experiência antes da implementação.</p>", quizId: "cap-q2" },
  { id: "cap-t3", title: "Arquitetura de Dados", content: "<p>Modelagem de entidades e relações escaláveis.</p>", quizId: "cap-q3" },
  { id: "cap-t4", title: "Segurança e Autenticação", content: "<p>Implementação de fluxos seguros de usuários.</p>", quizId: "cap-q4" },
  { id: "cap-t5", title: "Backend & Business Logic", content: "<p>Desenvolvimento do motor da aplicação.</p>", quizId: "cap-q5" },
  { id: "cap-t6", title: "Frontend Dinâmico", content: "<p>Interfaces reativas com gestão de estado.</p>", quizId: "cap-q6" },
  { id: "cap-t7", title: "Performance e Cache", content: "<p>Otimização de carregamento e queries.</p>", quizId: "cap-q7" },
  { id: "cap-t8", title: "Testing & QA", content: "<p>Cobertura de testes unitários e e2e.</p>", quizId: "cap-q8" },
  { id: "cap-t9", title: "CI/CD e Cloud Deployment", content: "<p>Publicação profissional com monitorização.</p>", quizId: "cap-q9" },
  { id: "cap-t10", title: "Final Pitch & Showcase", content: "<p>Demonstração técnica do produto final.</p>", quizId: "cap-q10" }
];

const capstoneQuizzes: Quiz[] = [
  {
    id: "cap-q1",
    title: "Quiz: Planeamento de MVP",
    passingScore: 70,
    questions: [
      {
        id: "q1",
        question: "Qual o principal objetivo de um MVP (Minimum Viable Product)?",
        options: [
          "Ter todas as funcionalidades possíveis",
          "Lançar rápido com as funcionalidades mínimas necessárias para validar a ideia",
          "Gastar todo o orçamento no primeiro mês",
          "Ter o design mais luxuoso do mercado"
        ],
        correctAnswer: 1
      }
    ]
  }
];

const capstone: KnowledgeArea = {
  id: 'ka-capstone',
  title: '01. Capstone Project',
  description: 'Construção da aplicação final ponta-a-ponta para certificação master.',
  load: '100h',
  iconName: 'Trophy',
  theory: capstoneSteps,
  practice: {
    process: [
      {
        id: 'cap-p1',
        language: 'process',
        title: 'Laboratório: Roadmap de Entrega',
        description: 'Dividir o projeto em fases.',
        statement: 'Defina o seu "Milestone 3" no roadmap. Escreva "Milestone 3" no editor.',
        template: 'Fase 1: Configuração\nFase 2: Core\nMilestone 3: Lançamento',
        detailedExplanation: '<p>A organização em marcos (milestones) é crucial para projetos longos.</p>',
        objectives: [{ id: 'obj1', description: 'Definir o terceiro marco', test: 'Milestone 3' }]
      }
    ]
  },
  quizzes: capstoneQuizzes
};

export const level7: Level = {
  id: 7,
  title: 'Nível 7: Projetos & Certificações',
  description: 'Consolidação de todo o currículo através de um projeto de grande escala.',
  knowledgeAreas: [capstone]
};