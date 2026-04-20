import type { Level } from '../types';
import { algorithms } from './01-algorithms/index';
import { dataStructures } from './02-data-structures/index';
import { discreteMath } from './03-discrete-math/index';

export const level2: Level = {
  id: 2,
  title: 'Nível 2: Algoritmos e Estruturas de Dados',
  description: 'Organização eficiente de dados e lógica complexa para performance profissional.',
  knowledgeAreas: [
    algorithms,
    dataStructures,
    discreteMath
  ]
};
