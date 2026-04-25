import { quiz as q1 } from './quizzes/01-composer-quiz';
import { quiz as q2 } from './quizzes/02-phpunit-advanced-quiz';
import { quiz as q3 } from './quizzes/03-pest-php-quiz';
import { quiz as q4 } from './quizzes/04-mutation-testing-quiz';
import { quiz as q5 } from './quizzes/05-ddd-strategic-quiz';
import { quiz as q6 } from './quizzes/06-ddd-tactical-quiz';
import { quiz as q14 } from './quizzes/14-property-hooks-quiz';

const generatePlaceholder = (id: number) => ({
  id: `php-eco-mq${id}`,
  title: `Quiz Tópico ${id}`,
  questions: [{ id: "q1", question: "Validado?", options: ["Sim", "Não"], correctAnswer: 0 }],
  passingScore: 80
});

export const quizzes = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  if (id === 1) return q1;
  if (id === 2) return q2;
  if (id === 3) return q3;
  if (id === 4) return q4;
  if (id === 5) return q5;
  if (id === 6) return q6;
  if (id === 14) return q14;
  return generatePlaceholder(id);
});
