import type { Quiz } from '../../types';
import { quiz as q1 } from './quizzes/01-prototypal-inheritance-quiz';
import { quiz as q2 } from './quizzes/02-event-loop-quiz';
import { quiz as q3 } from './quizzes/03-closures-memory-quiz';
import { quiz as q4 } from './quizzes/04-proxies-quiz';
import { quiz as q5 } from './quizzes/05-abort-controller-quiz';
import { quiz as q6 } from './quizzes/06-esm-tree-shaking-quiz';
import { quiz as q7 } from './quizzes/07-web-workers-quiz';
import { quiz as q8 } from './quizzes/08-observers-apis-quiz';

const generatePlaceholder = (idNum: number) => ({
  id: `js-mq${idNum}`,
  title: `Quiz Tópico ${idNum}`,
  questions: [
    { id: "q1", question: "Esta API é fundamental para performance?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q2", question: "Garante segurança?", options: ["Sim", "Não"], correctAnswer: 0 }
  ],
  passingScore: 80
});

export const quizzes: Quiz[] = [
  q1, q2, q3, q4, q5, q6, q7, q8,
  ...Array.from({ length: 13 }, (_, i) => generatePlaceholder(i + 9))
];
