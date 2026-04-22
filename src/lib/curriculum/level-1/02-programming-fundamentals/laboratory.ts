import type { PracticeExercise } from '../types';
import { exercise as p1js } from './laboratory/javascript/01-variaveis';
import { exercise as p1py } from './laboratory/python/01-variaveis';
import { exercise as p2js } from './laboratory/javascript/02-operadores';
import { exercise as p2py } from './laboratory/python/02-operadores';
import { exercise as p3js } from './laboratory/javascript/03-strings-io';
import { exercise as p3py } from './laboratory/python/03-strings-io';
import { exercise as p4js } from './laboratory/javascript/04-condicionais';
import { exercise as p4py } from './laboratory/python/04-condicionais';
import { exercise as p5js } from './laboratory/javascript/05-loops';
import { exercise as p5py } from './laboratory/python/05-loops';
import { exercise as p6js } from './laboratory/javascript/06-funcoes';
import { exercise as p6py } from './laboratory/python/06-funcoes';

export const practice = {
  javascript: [p1js, p2js, p3js, p4js, p5js, p6js],
  python: [p1py, p2py, p3py, p4py, p5py, p6py]
};
