
import { quiz as q1 } from './quizzes/01-gil-internals-quiz';
import { quiz as q2 } from './quizzes/02-metaprogramming-quiz';
import { quiz as q3 } from './quizzes/03-asyncio-quiz';
import { quiz as q4 } from './quizzes/04-memory-management-quiz';
import { quiz as q5 } from './quizzes/05-fastapi-scaling-quiz';
import { quiz as q6 } from './quizzes/06-numpy-pandas-quiz';
import { quiz as q7 } from './quizzes/07-scikit-learn-quiz';
import { quiz as q8 } from './quizzes/08-pytorch-deep-quiz';
import { quiz as q9 } from './quizzes/09-security-best-practices-quiz';
import { quiz as q10 } from './quizzes/10-python-security-quiz';
import { quiz as q11 } from './quizzes/11-docker-quiz';
import { quiz as q12 } from './quizzes/12-cicd-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12,
  ...Array.from({ length: 9 }, (_, i) => ({
    id: `py-mq${i + 13}`,
    title: `Python Master Quiz ${i + 13}`,
    questions: [
        {
            id: "q_auto",
            question: "Pergunta de validação para o tópico avançado de engenharia " + (i + 13),
            options: ["Opção A (Correta)", "Opção B", "Opção C"],
            correctAnswer: 0
        }
    ],
    passingScore: 80
  }))
];
