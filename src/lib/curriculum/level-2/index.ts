
import type { Level } from '../types';
import { algorithms } from './01-algorithms/index';

export const level2: Level = {
  id: 2,
  title: 'Nível 2: Algoritmos e Estruturas de Dados',
  description: 'Organização eficiente de dados e algoritmos complexos para performance.',
  knowledgeAreas: [
    algorithms,
    {
      id: 'ka-data-structures',
      title: '02. Data Structures',
      description: 'Arrays, Listas Ligadas, Pilhas e Filas.',
      load: '40h',
      iconName: 'Database',
      theory: [],
      practice: {},
      quizzes: []
    },
    {
      id: 'ka-discrete-math',
      title: '03. Discrete Math',
      description: 'Lógica proposicional e teoria dos conjuntos.',
      load: '30h',
      iconName: 'Calculator',
      theory: [],
      practice: {},
      quizzes: []
    }
  ]
};
