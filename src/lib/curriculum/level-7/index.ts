import type { Level, KnowledgeArea, TheoryLesson } from '../types';

const capstoneSteps: TheoryLesson[] = [
  { id: "cap-t1", title: "Definição do MVP e Escopo", content: "<p>Como escolher um problema real para resolver com software.</p>", quizId: "cap-q1" },
  { id: "cap-t2", title: "Pesquisa de Usuário e UX Design", content: "<p>Validando a ideia antes de escrever a primeira linha de código.</p>", quizId: "cap-q2" },
  { id: "cap-t3", title: "Escolha da Tech Stack", content: "<p>Justificando as ferramentas: React vs Next, SQL vs NoSQL.</p>", quizId: "cap-q3" },
  { id: "cap-t4", title: "Modelagem de Dados de Larga Escala", content: "<p>Estruturando o banco para performance e integridade.</p>", quizId: "cap-q4" },
  { id: "cap-t5", title: "Implementação da Camada de Autenticação", content: "<p>Segurança robusta com JWT, OAuth ou Providers.</p>", quizId: "cap-q5" },
  { id: "cap-t6", title: "Desenvolvimento da API e Lógica Core", content: "<p>Construindo o motor da aplicação de forma escalável.</p>", quizId: "cap-q6" },
  { id: "cap-t7", title: "Frontend Dinâmico e Reativo", content: "<p>Criando interfaces fluidas com gestão de estado moderna.</p>", quizId: "cap-q7" },
  { id: "cap-t8", title: "Testes Automatizados e Qualidade", content: "<p>Garantindo que o projeto final seja à prova de falhas.</p>", quizId: "cap-q8" },
  { id: "cap-t9", title: "Deployment, CI/CD e Cloud", content: "<p>Colocando a aplicação no ar com monitorização profissional.</p>", quizId: "cap-q9" },
  { id: "cap-t10", title: "Apresentação e Pitch Técnico", content: "<p>Como demonstrar o valor do teu projeto a investidores ou chefes.</p>", quizId: "cap-q10" }
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
        title: 'Laboratório: Planeamento de Roadmap',
        description: 'Dividir o projeto final em fases de entrega.',
        statement: 'Defina 3 milestones principais para o teu projeto.',
        template: 'Milestone 1:\nMilestone 2:\nMilestone 3:',
        detailedExplanation: '<p>Dividir para conquistar: planeie entregas incrementais.</p>',
        objectives: [{ id: 'obj1', description: 'Listar 3 marcos', test: 'Milestone 3' }]
      }
    ]
  },
  quizzes: capstoneSteps.map(l => ({ id: l.quizId, title: `Quiz: ${l.title}`, questions: [], passingScore: 70 }))
};

export const level7: Level = {
  id: 7,
  title: 'Nível 7: Projetos & Certificações',
  description: 'Consolidação de todo o currículo através de um projeto de grande escala.',
  knowledgeAreas: [capstone]
};
