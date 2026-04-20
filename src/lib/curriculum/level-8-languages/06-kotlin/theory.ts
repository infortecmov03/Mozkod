import { lesson as l1 } from './theory/01-null-safety-internals';
export const lessons = [
  l1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `kt-m${i + 2}`,
    title: `Kotlin Master Topic ${i + 2}`,
    content: "Content coming soon...",
    quizId: `kt-mq${i + 2}`
  }))
];