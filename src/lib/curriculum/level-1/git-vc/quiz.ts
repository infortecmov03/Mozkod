import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
  {
    id: 'quiz-git-basics',
    title: 'Quiz: Git Básico',
    questions: [
      { id: 'q1', question: 'Qual comando move arquivos para a Staging Area?', options: ['git commit', 'git add', 'git push', 'git stage'], correctAnswer: 1 }
    ]
  },
  {
    id: 'quiz-git-intermediate',
    title: 'Quiz: Git Intermediário',
    questions: [
      { id: 'q1', question: 'O que é um "branch"?', options: ['Um commit', 'Uma linha de desenvolvimento independente', 'Um repositório remoto', 'Um conflito'], correctAnswer: 1 }
    ]
  }
];
