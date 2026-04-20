import { quiz as q1 } from './quizzes/01-variaveis-tipos-quiz';

export const quizzes = [
  q1,
  ...Array.from({ length: 14 }, (_, i) => ({
    id: `pf-q${i + 2}`,
    title: `Programming Fundamentals Quiz ${i + 2}`,
    questions: [],
    passingScore: 70
  }))
];