
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

const pyRemainingTitles = [
  "Iterators & Generators Internals", "Functional Python: Lambdas & Map", 
  "Profiling & Performance Optimization", "Concurrent.futures Library",
  "Shared Memory Multiprocessing", "C-Extensions & Cython", 
  "__slots__ & Memory Optimization", "AST Manipulation & Static Analysis"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12,
  ...pyRemainingTitles.slice(0, 7).map((title, i) => ({
    id: `py-m${i + 13}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐍 Python Master: ${title}</h2><p>Especialização em internals de Python, processamento de dados massivo e automação de baixo nível.</p></div>`,
    quizId: `py-mq${i + 13}`
  })),
  l20,
  {
    id: "py-m21",
    title: pyRemainingTitles[7],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐍 Python Master: ${pyRemainingTitles[7]}</h2><p>Manipulação de Árvores de Sintaxe Abstrata para criação de ferramentas de linting e segurança.</p></div>`,
    quizId: "py-mq21"
  }
];
