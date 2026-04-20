
import { quiz as q1 } from './quizzes/01-records-quiz';
import { quiz as q8 } from './quizzes/08-virtual-threads-quiz';
import { quiz as q15 } from './quizzes/15-classloaders-quiz';

export const quizzes = [
  q1,
  { id: "jv-mq2", title: "Quiz: Sealed Classes", questions: [], passingScore: 80 },
  { id: "jv-mq3", title: "Quiz: Pattern Matching", questions: [], passingScore: 80 },
  { id: "jv-mq4", title: "Quiz: Stream Internals", questions: [], passingScore: 80 },
  { id: "jv-mq5", title: "Quiz: Optional Patterns", questions: [], passingScore: 80 },
  { id: "jv-mq6", title: "Quiz: Lambda Internals", questions: [], passingScore: 80 },
  { id: "jv-mq7", title: "Quiz: Jigsaw", questions: [], passingScore: 80 },
  q8,
  { id: "jv-mq9", title: "Quiz: Structured Concurrency", questions: [], passingScore: 80 },
  { id: "jv-mq10", title: "Quiz: JMM", questions: [], passingScore: 80 },
  { id: "jv-mq11", title: "Quiz: Advanced Locking", questions: [], passingScore: 80 },
  { id: "jv-mq12", title: "Quiz: GC Tuning", questions: [], passingScore: 80 },
  { id: "jv-mq13", title: "Quiz: Reactive Reactor", questions: [], passingScore: 80 },
  { id: "jv-mq14", title: "Quiz: NIO Netty", questions: [], passingScore: 80 },
  q15,
  { id: "jv-mq16", title: "Quiz: Bytecode ASM", questions: [], passingScore: 80 },
  { id: "jv-mq17", title: "Quiz: Reflection MethodHandles", questions: [], passingScore: 80 },
  { id: "jv-mq18", title: "Quiz: Dynamic Proxies", questions: [], passingScore: 80 },
  { id: "jv-mq19", title: "Quiz: JIT Tiered Compilation", questions: [], passingScore: 80 },
  { id: "jv-mq20", title: "Quiz: JVM Profiling JFR", questions: [], passingScore: 80 },
  { id: "jv-mq21", title: "Quiz: GraalVM Native", questions: [], passingScore: 80 }
];
