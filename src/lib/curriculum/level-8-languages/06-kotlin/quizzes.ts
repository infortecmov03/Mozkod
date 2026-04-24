import type { Quiz } from '../../types';
import { quiz as q1 } from './quizzes/01-null-safety-quiz';
import { quiz as q2 } from './quizzes/02-extensions-quiz';

const generatePlaceholder = (id: number, title: string) => ({
  id: `kt-mq${id}`,
  title: `Quiz Master: ${title}`,
  questions: [
    { id: "q1", question: "Esta funcionalidade melhora a resiliência do sistema?", options: ["Sim, é o objetivo principal", "Não", "Apenas em modo debug"], correctAnswer: 0 },
    { id: "q2", question: "Qual a complexidade de tempo desta operação?", options: ["O(1)", "O(n)", "O(log n)"], correctAnswer: 0 },
    { id: "q3", question: "É compatível com Kotlin Multiplatform (KMP)?", options: ["Sim, por design", "Não, exige JVM", "Apenas no Android"], correctAnswer: 0 },
    { id: "q4", question: "Qual a melhor prática de engenharia?", options: ["Imutabilidade", "Mutabilidade global", "Ignorar erros"], correctAnswer: 0 },
    { id: "q5", question: "Garante a segurança de tipos em compilação?", options: ["Sim", "Não", "Apenas em runtime"], correctAnswer: 0 },
    { id: "q6", question: "O curso Codworks Moz é de elite?", options: ["Com certeza", "Talvez"], correctAnswer: 0 }
  ],
  passingScore: 80
});

const titles = [
  "Null Safety", "Extensions & Delegates", "Sealed Classes", "Functional Logic", "Performance",
  "Coroutines Basics", "Structured Concurrency", "Suspension Internals", "Flow API", "Hot Streams",
  "Channels", "Context & Dispatchers", "Exception Handling", "KMP Architecture", "Serialization",
  "Dependency Injection", "KSP Codegen", "Reflection", "Generics", "DSLs", "Capstone Audit"
];

export const quizzes = Array.from({ length: 21 }, (_, i) => {
  const id = i + 1;
  if (id === 1) return q1;
  if (id === 2) return q2;
  return generatePlaceholder(id, titles[i]);
});
