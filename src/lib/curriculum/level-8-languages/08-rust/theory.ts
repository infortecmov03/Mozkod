import { lesson as l1 } from './theory/01-ownership-deep-dive';
// Mocking rest to avoid imports errors until files are populated
export const lessons = [
  l1,
  ...Array.from({ length: 20 }, (_, i) => ({
    id: `rs-m${i + 2}`,
    title: `Rust Master Topic ${i + 2}`,
    content: "Content coming soon...",
    quizId: `rs-mq${i + 2}`
  }))
];