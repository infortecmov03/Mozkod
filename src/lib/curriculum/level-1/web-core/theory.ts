import type { TheoryLesson } from '../../types';
import { lesson as lesson1 } from './theory/01-html-structure';
import { lesson as lesson2 } from './theory/02-html-semantic';
import { lesson as lesson3 } from './theory/03-css-styling';
import { lesson as lesson4 } from './theory/04-css-box-model';
import { lesson as lesson5 } from './theory/05-css-flexbox';
import { lesson as lesson6 } from './theory/06-css-grid';

export const theory: TheoryLesson[] = [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
    lesson5,
    lesson6
];
