import { quiz as q1 } from './quizzes/01-php8-attributes-quiz';
import { quiz as q2 } from './quizzes/02-typing-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `php-mq${i + 3}`,
    title: `PHP Master Quiz ${i + 3}`,
    questions: [],
    passingScore: 80
  }))
];