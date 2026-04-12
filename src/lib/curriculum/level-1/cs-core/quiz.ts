import type { Quiz } from '../../types';

export const quizzes: Quiz[] = [
    {
    id: 'quiz-cs-core-final',
    title: 'Quiz Final: Computer Science Core',
    questions: [
        {
        id: 'q1',
        question: 'Qual é a base do sistema de numeração binário?',
        options: ['10', '2', '8', '16'],
        correctAnswer: 1
        },
        {
        id: 'q2',
        question: 'Qual operador lógico retorna verdadeiro apenas se ambas as entradas forem verdadeiras?',
        options: ['OR', 'NOT', 'AND', 'XOR'],
        correctAnswer: 2
        }
    ]
    }
];
