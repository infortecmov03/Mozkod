
import { quiz as q1 } from './quizzes/01-git-basico-quiz';
import { quiz as q2 } from './quizzes/02-git-avancado-quiz';

export const quizzes = [
  q1, q2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `git-q${i + 3}`,
    title: `Git Advanced Quiz ${i + 3}`,
    questions: [
      {
        id: "q_auto",
        question: "Qual comando é usado para integrar mudanças de um branch sem criar um commit de merge?",
        options: ["git rebase", "git combine", "git join", "git add"],
        correctAnswer: 0
      }
    ],
    passingScore: 70
  }))
];
