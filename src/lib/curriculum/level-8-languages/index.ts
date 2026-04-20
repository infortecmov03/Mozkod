
import type { Level } from '../types';
import { htmlKA } from './01-html/index';
import { cssKA } from './02-css/index';
import { javascriptKA } from './03-javascript/index';
import { pythonMaster } from './04-python/index';
import { javaMaster } from './05-java/index';
import { kotlinMaster } from './06-kotlin/index';
import { goMaster } from './07-go/index';
import { rustMaster } from './08-rust/index';
import { rubyMaster } from './09-ruby/index';
import { phpMaster } from './10-php/index';

export const level8: Level = {
  id: 8,
  title: 'Nível 8: Domínio de Linguagens (Mastery)',
  description: 'Especialização profunda baseada no tripé: Paradigma, Concorrência e Internals. Torne-se parte do 1% dos engenheiros globais.',
  knowledgeAreas: [
    htmlKA, 
    cssKA, 
    javascriptKA, 
    pythonMaster, 
    javaMaster,
    kotlinMaster, 
    goMaster, 
    rustMaster, 
    rubyMaster, 
    phpMaster
  ]
};
