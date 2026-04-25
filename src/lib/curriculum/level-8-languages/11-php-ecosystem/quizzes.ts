import { quiz as q1 } from './quizzes/01-composer-quiz';
import { quiz as q2 } from './quizzes/02-phpunit-advanced-quiz';
import { quiz as q3 } from './quizzes/03-pest-php-quiz';
import { quiz as q4 } from './quizzes/04-mutation-testing-quiz';
import { quiz as q5 } from './quizzes/05-ddd-strategic-quiz';
import { quiz as q6 } from './quizzes/06-ddd-tactical-quiz';
import { quiz as q7 } from './quizzes/07-cqrs-event-sourcing-quiz';
import { quiz as q8 } from './quizzes/08-creational-patterns-quiz';
import { quiz as q9 } from './quizzes/09-behavioral-patterns-quiz';
import { quiz as q10 } from './quizzes/10-psr-standards-quiz';
import { quiz as q11 } from './quizzes/11-dependency-injection';
import { quiz as q12 } from './quizzes/12-laravel-kernel';
import { quiz as q13 } from './quizzes/13-symfony-kernel';
import { quiz as q14 } from './quizzes/14-property-hooks-quiz';

const generatePlaceholder = (id: number) => ({
  id: `php-eco-mq${id}`,
  title: `Quiz Tópico ${id}`,
  questions: [{ id: "q1", question: "Validado?", options: ["Sim", "Não"], correctAnswer: 0 }],
  passingScore: 80
});

export const quizzes = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  const sourceMap: Record<number, any> = {
    1: q1, 2: q2, 3: q3, 4: q4, 5: q5, 6: q6, 7: q7, 8: q8, 9: q9, 10: q10,
    11: q11, 12: q12, 13: q13, 14: q14
  };
  
  if (sourceMap[id]) return sourceMap[id];
  return generatePlaceholder(id);
});
