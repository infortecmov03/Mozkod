import { quiz as q1 } from './quizzes/01-logic-quiz';
import { quiz as q2 } from './quizzes/02-predicates-quiz';
import { quiz as q6 } from './quizzes/06-number-theory-quiz';
import { quiz as q13 } from './quizzes/13-automata-quiz';
import { quiz as q21 } from './quizzes/21-structural-induction-quiz';

const generatePlaceholder = (idNum: number) => ({
  id: `math-q${idNum}`,
  title: `Quiz Tópico ${idNum}`,
  questions: [
    { id: "q1", question: `Pergunta técnica para o tema ${idNum}?`, options: ["Certa", "Errada", "Incorreta"], correctAnswer: 0 },
    { id: "q2", question: "A lógica é fundamental?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q3", question: "Matemática discreta é para engenheiros?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q4", question: "O Nível 2 é desafiante?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q5", question: "A Codworks Moz é elite?", options: ["Sim", "Não"], correctAnswer: 0 },
    { id: "q6", question: "Pronto para o Nível 3?", options: ["Sim", "Não"], correctAnswer: 0 }
  ],
  passingScore: 70
});

export const quizzes = [
  q1, q2,
  generatePlaceholder(3), generatePlaceholder(4), generatePlaceholder(5),
  q6,
  generatePlaceholder(7), generatePlaceholder(8), generatePlaceholder(9),
  generatePlaceholder(10), generatePlaceholder(11), generatePlaceholder(12),
  q13,
  generatePlaceholder(14), generatePlaceholder(15), generatePlaceholder(16),
  generatePlaceholder(17), generatePlaceholder(18), generatePlaceholder(19),
  generatePlaceholder(20),
  q21
];