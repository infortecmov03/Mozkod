
import type { Level } from '../types';
import { softwareProcesses } from './01-software-processes/index';
import { softwareDesign } from './02-software-design/index';
import { softwareQuality } from './03-software-quality/index';

export const level4: Level = {
  id: 4,
  title: 'Nível 4: Engenharia de Software',
  description: 'Práticas profissionais para criar, desenhar e manter software escalável e de alta qualidade.',
  knowledgeAreas: [
    softwareProcesses,
    softwareDesign,
    softwareQuality
  ]
};
