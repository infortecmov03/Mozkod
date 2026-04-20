
import type { Level } from '../types';
import { htmlKA } from './01-html/index';
import { cssKA } from './02-css/index';
import { javascriptKA } from './03-javascript/index';

export const level8: Level = {
  id: 8,
  title: 'Nível 8: Domínio de Linguagens',
  description: 'Especialização profunda em sintaxes e ferramentas específicas.',
  knowledgeAreas: [
    htmlKA,
    cssKA,
    javascriptKA,
    {
      id: 'lang-python',
      title: '04. Python Master',
      description: 'Data Science, automação e backend com Python.',
      load: '40h',
      iconName: 'Code2',
      theory: [],
      practice: {},
      quizzes: []
    }
  ]
};
