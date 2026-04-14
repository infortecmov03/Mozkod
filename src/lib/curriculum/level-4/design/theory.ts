import type { TheoryLesson } from '../../../types';
import { lesson as lesson1 } from './theory/01-solid';
import { lesson as lesson2 } from './theory/02-dry-kiss-yagni';
import { lesson as lesson3 } from './theory/03-composition-over-inheritance';
import { lesson as lesson4 } from './theory/04-law-of-demeter';

export const theory: TheoryLesson[] = [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
];
