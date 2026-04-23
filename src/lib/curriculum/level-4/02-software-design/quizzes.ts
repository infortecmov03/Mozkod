import { quiz as q1 } from './quizzes/01-solid-quiz';
import { quiz as q2 } from './quizzes/02-clean-code-quiz';
import { quiz as q3 } from './quizzes/03-creational-patterns-quiz';
import { quiz as q4 } from './quizzes/04-structural-patterns-quiz';
import { quiz as q5 } from './quizzes/05-behavioral-patterns-quiz';

const generatePlaceholder = (idNum: number) => ({
  id: `des-mq${idNum}`,
  title: `Quiz Tópico ${idNum}`,
  questions: [
    { id: "q1", question: "Qual o impacto deste padrão na manutenibilidade?", options: ["Positivo", "Negativo", "Nenhum"], correctAnswer: 0 }
  ],
  passingScore: 80
});

export const quizzes = [
  q1, q2, q3, q4, q5,
  ...Array.from({ length: 16 }, (_, i) => generatePlaceholder(i + 6))
];
