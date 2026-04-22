import { quiz as q1 } from './quizzes/01-sistemas-numericos-quiz';
import { quiz as q2 } from './quizzes/02-logica-booleana-quiz';
import { quiz as q3 } from './quizzes/03-algebra-booleana-quiz';
import { quiz as q4 } from './quizzes/04-arquitetura-quiz';
import { quiz as q5 } from './quizzes/05-memoria-quiz';
import { quiz as q6 } from './quizzes/06-algoritmos-quiz';
import { quiz as q7 } from './quizzes/07-complexidade-quiz';
import { quiz as q8 } from './quizzes/08-paradigmas-quiz';
import { quiz as q9 } from './quizzes/09-floating-point-quiz';
import { quiz as q10 } from './quizzes/10-cache-hierarchy-quiz';
import { quiz as q11 } from './quizzes/11-isa-architecture-quiz';
import { quiz as q13 } from './quizzes/13-system-bus-quiz';
import { quiz as q14 } from './quizzes/14-memory-virtual-quiz';
import { quiz as q15 } from './quizzes/15-file-systems-quiz';
import { quiz as q16 } from './quizzes/16-pipelining-quiz';
import { quiz as q17 } from './quizzes/17-virtualization-quiz';
import { quiz as q18 } from './quizzes/18-error-correction-quiz';

export const quizzes = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11,
  {
    id: "cs-q12",
    title: "Quiz: Portas Universais",
    questions: [{ id: "q1", question: "Qual porta é considerada universal?", options: ["AND", "NAND", "OR"], correctAnswer: 1 }],
    passingScore: 70
  },
  q13,
  q14,
  q15,
  q16,
  q17,
  q18,
  {
    id: "cs-q19",
    title: "Quiz: Microarquitetura",
    questions: [{ id: "q1", question: "O que é microcódigo?", options: ["Lógica de baixo nível que implementa o ISA", "Uma linguagem web", "Um erro pequeno"], correctAnswer: 0 }],
    passingScore: 70
  },
  {
    id: "cs-q20",
    title: "Quiz: Ciclos",
    questions: [{ id: "q1", question: "O que dita o ritmo da CPU?", options: ["Software", "Cristal de Quartzo (Clock)", "Utilizador"], correctAnswer: 1 }],
    passingScore: 70
  },
  {
    id: "cs-q21",
    title: "Quiz: Ética",
    questions: [{ id: "q1", question: "Quem é considerado o pai da computação?", options: ["Bill Gates", "Alan Turing", "Steve Jobs"], correctAnswer: 1 }],
    passingScore: 70
  }
];