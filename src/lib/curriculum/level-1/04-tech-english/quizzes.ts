
import { quiz as q1 } from './quizzes/01-basic-vocab-quiz';

export const quizzes = [
  q1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `eng-q${i + 2}`,
    title: `Tech English Quiz ${i + 2}`,
    questions: [
      {
        id: "q_auto",
        question: "Validation question for topic " + (i + 2),
        options: ["Correct Option", "Incorrect", "Wrong"],
        correctAnswer: 0
      }
    ],
    passingScore: 70
  }))
];
