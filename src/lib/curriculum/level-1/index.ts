
import type { Level } from '../types';
import { csCore } from './01-cs-core/index';
import { programmingFundamentals } from './02-programming-fundamentals/index';
import { webCore } from './03-web-core/index';
import { techEnglish } from './04-tech-english/index';

export const level1: Level = {
  id: 1,
  title: 'Nível 1: Fundamentos (Core Foundations)',
  description: 'A base essencial para qualquer programador profissional.',
  knowledgeAreas: [
    csCore,
    programmingFundamentals,
    webCore,
    techEnglish
  ]
};
