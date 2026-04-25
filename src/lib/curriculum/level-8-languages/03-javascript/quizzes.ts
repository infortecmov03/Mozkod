import type { Quiz } from '../../types';
import { quiz as q1 } from './quizzes/01-prototypal-inheritance-quiz';
import { quiz as q2 } from './quizzes/02-event-loop-quiz';
import { quiz as q3 } from './quizzes/03-closures-memory-quiz';
import { quiz as q4 } from './quizzes/04-proxies-quiz';
import { quiz as q5 } from './quizzes/05-abort-controller-quiz';
import { quiz as q6 } from './quizzes/06-esm-tree-shaking-quiz';
import { quiz as q7 } from './quizzes/07-web-workers-quiz';
import { quiz as q8 } from './quizzes/08-observers-apis-quiz';
import { quiz as q9 } from './quizzes/09-debouncing-throttling-quiz';
import { quiz as q10 } from './quizzes/10-promises-internals-quiz';
import { quiz as q11 } from './quizzes/11-v8-internals-quiz';

const generatePlaceholder = (idNum: number) => ({
  id: `js-mq${idNum}`,
  title: `Quiz Tópico ${idNum}`,
  questions: [
    { id: "q1", question: "Esta API é fundamental para performance?", options: ["Sim, é o objetivo principal", "Não", "Apenas em modo debug"], correctAnswer: 0 },
    { id: "q2", question: "Garante a segurança do motor?", options: ["Sim, via isolamento", "Não", "Depende do hardware"], correctAnswer: 0 },
    { id: "q3", question: "O custo de memória desta operação é otimizado?", options: ["Sim, O(1)", "Não, O(n)", "O(n log n)"], correctAnswer: 0 },
    { id: "q4", question: "É compatível com motores de busca?", options: ["Sim", "Não, exige execução real", "Apenas no Google"], correctAnswer: 1 },
    { id: "q5", question: "Qual a melhor prática de engenharia?", options: ["Imutabilidade", "Mutabilidade global", "Ignorar erros"], correctAnswer: 0 },
    { id: "q6", question: "A escala do sistema é beneficiada?", options: ["Sim, escala horizontalmente", "Não", "Apenas verticalmente"], correctAnswer: 0 }
  ],
  passingScore: 80
});

export const quizzes: Quiz[] = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11,
  ...Array.from({ length: 10 }, (_, i) => generatePlaceholder(i + 12))
];
