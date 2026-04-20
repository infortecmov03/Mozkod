
import type { Level, KnowledgeArea } from '../types';

const softwareEngineering: KnowledgeArea = {
  id: 'ka-se',
  title: '01. Software Engineering',
  description: 'Metodologias ágeis e ciclo de vida profissional.',
  load: '30h',
  iconName: 'Settings',
  theory: [
    {
      id: 'se-t1',
      title: 'Metodologias Ágeis: Scrum e Kanban',
      content: '<div class="space-y-4"><h2>Agilidade no Desenvolvimento</h2><p>Trabalhar em ciclos curtos (Sprints) para entregar valor contínuo ao cliente.</p></div>',
      quizId: 'se-t1-quiz'
    }
  ],
  practice: {
    process: [
      {
        id: 'se-p1',
        language: 'process',
        title: 'Laboratório: Sprint Planning',
        description: 'Organização de Backlog.',
        statement: 'Numa reunião diária (Daily), qual o tempo máximo recomendado? Escreva "15 minutos".',
        template: 'let tempo = "";',
        detailedExplanation: '<p>A Daily deve ser rápida e objetiva.</p>',
        objectives: [{ id: 'obj1', description: 'Definir tempo da daily', test: '15' }]
      }
    ]
  },
  quizzes: []
};

const designPrinciples: KnowledgeArea = {
  id: 'ka-design',
  title: '02. Software Design',
  description: 'SOLID, Design Patterns e Arquitetura Limpa.',
  load: '40h',
  iconName: 'Layout',
  theory: [
    {
      id: 'design-t1',
      title: 'Princípio da Responsabilidade Única (SRP)',
      content: '<p>Uma classe deve ter apenas um motivo para mudar.</p>',
      quizId: 'design-t1-quiz'
    }
  ],
  practice: {},
  quizzes: []
};

export const level4: Level = {
  id: 4,
  title: 'Nível 4: Engenharia de Software',
  description: 'Práticas profissionais para criar software escalável e sustentável.',
  knowledgeAreas: [softwareEngineering, designPrinciples]
};
