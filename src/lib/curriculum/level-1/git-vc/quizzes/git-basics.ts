import type { Quiz } from '../../../types';

export const quiz: Quiz = {
    id: 'quiz-git-basics',
    title: 'Quiz: Git Básico',
    questions: [
      { id: 'q1', question: 'Qual comando move arquivos para a Staging Area?', options: ['git commit', 'git add', 'git push', 'git stage'], correctAnswer: 1 }
    ]
};
