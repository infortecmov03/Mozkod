import { lesson as l1 } from './theory/01-gil-internals';
import { lesson as l2 } from './theory/02-metaprogramming';
import { lesson as l3 } from './theory/03-asyncio';
import { lesson as l4 } from './theory/04-memory-management';
import { lesson as l5 } from './theory/05-fastapi-scaling';
import { lesson as l6 } from './theory/06-numpy-pandas';
import { lesson as l7 } from './theory/07-scikit-learn';
import { lesson as l8 } from './theory/08-pytorch-deep';
import { lesson as l9 } from './theory/09-security-best-practices';
import { lesson as l10 } from './theory/10-final-project';
import { lesson as l11 } from './theory/11-context-managers';
import { lesson as l12 } from './theory/12-descriptors';
import { lesson as l20 } from './theory/20-dis-bytecode';

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  l11, l12, 
  { id: "py-m13", title: "Iterators & Generators", content: "...", quizId: "py-mq13" },
  { id: "py-m14", title: "Functional Python Patterns", content: "...", quizId: "py-mq14" },
  { id: "py-m15", title: "Profiling & Performance Metrics", content: "...", quizId: "py-mq15" },
  { id: "py-m16", title: "Concurrent.futures Library", content: "...", quizId: "py-mq16" },
  { id: "py-m17", title: "Shared Memory Multiprocessing", content: "...", quizId: "py-mq17" },
  { id: "py-m18", title: "C-Extensions Internals", content: "...", quizId: "py-mq18" },
  { id: "py-m19", title: "__slots__ Optimization", content: "...", quizId: "py-mq19" },
  l20,
  { id: "py-m21", title: "AST Manipulation", content: "...", quizId: "py-mq21" }
];