
import type { KnowledgeArea } from '../../types';

export const htmlKA: KnowledgeArea = {
  id: 'lang-html',
  title: '01. HTML Master',
  description: 'Domínio de semântica, acessibilidade e SEO técnico.',
  load: '20h',
  iconName: 'Code',
  theory: [
    {
      id: 'html-t1',
      title: 'Semântica Avançada',
      content: '<p>A semântica é a alma do HTML moderno...</p>',
      quizId: 'html-t1-quiz'
    }
  ],
  practice: {
    html: [
      {
        id: 'html-p1',
        language: 'html',
        title: 'Laboratório: SEO & Semântica',
        description: 'Otimize uma página para motores de busca.',
        statement: 'Use tags main, article e section corretamente.',
        template: '<header></header>',
        detailedExplanation: '<p>Explicação sobre a importância da estrutura...</p>',
        objectives: [
          { id: 'obj1', description: 'Adicione a tag main', test: '<main' }
        ]
      }
    ]
  },
  quizzes: []
};
