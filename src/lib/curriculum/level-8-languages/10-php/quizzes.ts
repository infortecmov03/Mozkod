import { quiz as q1 } from './quizzes/01-php8-attributes-quiz';
import { quiz as q2 } from './quizzes/02-strong-typing-union-types-quiz';
import { quiz as q3 } from './quizzes/03-constructor-promotion-quiz';

export const quizzes = [
  q1, q2, q3,
  // Mocking the remaining 18 to prevent crashes
  ...Array.from({ length: 18 }, (_, i) => ({
    id: `php-mq${i + 4}`,
    title: `PHP Quiz ${i + 4}`,
    questions: [],
    passingScore: 80
  }))
];