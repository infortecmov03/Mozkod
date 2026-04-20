
import type { Level, KnowledgeArea } from '../types';

const careerDev: KnowledgeArea = {
  id: 'ka-career',
  title: '01. Career Development',
  description: 'Portfólio, LinkedIn e Entrevistas Técnicas.',
  load: '20h',
  iconName: 'Briefcase',
  theory: [
    {
      id: 'career-t1',
      title: 'A Anatomia de um Portfólio de Elite',
      content: '<p>Não mostres apenas o código, mostra o problema que resolveste.</p>',
      quizId: 'career-t1-quiz'
    }
  ],
  practice: {
    text: [
      {
        id: 'career-p1',
        language: 'text',
        title: 'Laboratório: Escrita de README',
        description: 'Documentação profissional de projetos.',
        statement: 'Escreva as seções "Tech Stack" e "How to Run".',
        template: '## Tech Stack\n\n## Como Executar',
        detailedExplanation: '<p>Um bom README vende o teu projeto em 30 segundos.</p>',
        objectives: [{ id: 'obj1', description: 'Incluir Tech Stack', test: 'Tech Stack' }]
      }
    ]
  },
  quizzes: []
};

export const level6: Level = {
  id: 6,
  title: 'Nível 6: Desenvolvimento Profissional',
  description: 'Preparação para o mercado de trabalho e soft skills para engenheiros.',
  knowledgeAreas: [careerDev]
};
