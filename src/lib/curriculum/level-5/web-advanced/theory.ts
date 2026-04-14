import type { TheoryLesson } from '../../../types';
import { lesson as lesson1 } from './theory/01-es6-features';
import { lesson as lesson2 } from './theory/02-async-programming';
import { lesson as lesson3 } from './theory/03-modules-bundlers';
import { lesson as lesson4 } from './theory/04-typescript-advanced';

// We are replacing the old lessons with a more detailed structure.
// The old files (modern-web-development.ts, modern-web-development-promises.ts)
// are no longer imported and can be removed in the future.

export const theory: TheoryLesson[] = [
    lesson1,
    lesson2,
    lesson3,
    lesson4,
];
