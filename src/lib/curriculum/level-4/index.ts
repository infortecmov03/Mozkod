
import type { Level } from '../types';
import { softwareEngineering } from './01-se/index';

export const level4: Level = {
  id: 4,
  title: 'Nível 4: Engenharia de Software',
  description: 'Construa software profissional com qualidade, arquitetura e processos escaláveis.',
  knowledgeAreas: [
    softwareEngineering,
    {
      id: 'ka-design',
      title: '02. Software Design',
      description: 'Princípios SOLID, Design Patterns e Arquitetura Limpa.',
      load: '30h',
      iconName: 'Layout',
      theory: [
        {
          id: 'design-t1',
          title: 'Princípios SOLID',
          content: '<div class="space-y-4"><h2 class="text-2xl font-bold">Código Robusto</h2><p>SOLID são cinco princípios de design que tornam o software mais compreensível, flexível e sustentável.</p></div>',
          quizId: 'design-t1-quiz'
        }
      ],
      practice: {},
      quizzes: []
    },
    {
      id: 'ka-qa',
      title: '03. Quality Assurance',
      description: 'Testes unitários, integração e E2E.',
      load: '25h',
      iconName: 'ShieldCheck',
      theory: [],
      practice: {},
      quizzes: []
    }
  ]
};
