import { quiz as q1 } from './quizzes/01-sdlc-mastery-quiz';
import { quiz as q2 } from './quizzes/02-agile-mastery-quiz';
import { quiz as q3 } from './quizzes/03-scrum-mastery-quiz';
import { quiz as q4 } from './quizzes/04-kanban-mastery-quiz';
import { quiz as q5 } from './quizzes/05-requirements-quiz';
import { quiz as q6 } from './quizzes/06-user-stories-quiz';
import { quiz as q7 } from './quizzes/07-estimation-quiz';
import { quiz as q8 } from './quizzes/08-devops-quiz';
import { quiz as q9 } from './quizzes/09-cicd-quiz';
import { quiz as q10 } from './quizzes/10-deployment-quiz';
import { quiz as q11 } from './quizzes/11-code-review-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11,
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `se-q${i + 12}-master`,
    title: `Quiz Técnico Processos Tópico ${i + 12}`,
    questions: [],
    passingScore: 80
  }))
];
