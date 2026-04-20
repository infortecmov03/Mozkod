
import type { Level } from '../types';
import { csCore } from './01-cs-core/index';

export const level1: Level = {
  id: 1,
  title: 'Nível 1: Fundamentos (Core Foundations)',
  description: 'A base essencial para qualquer programador profissional.',
  knowledgeAreas: [
    csCore,
    // Próximas KAs serão importadas aqui
  ]
};
