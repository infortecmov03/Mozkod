
import { Module } from '../types';
import { algorithms } from './01-algorithms';

export const level2: Module = {
  id: '2',
  title: 'Nível 2: Algoritmos e Estruturas de Dados',
  level: 'Intermediate',
  description: 'Organização eficiente de dados e algoritmos complexos.',
  image: 'web-dev',
  knowledgeAreas: [
    algorithms,
  ]
};
