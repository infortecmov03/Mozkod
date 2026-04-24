
import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-gil-internals';
import { lesson as l2 } from './theory/02-metaprogramming';
import { lesson as l3 } from './theory/03-asyncio';
import { lesson as l4 } from './theory/04-memory-management';
import { lesson as l5 } from './theory/05-fastapi-scaling';
import { lesson as l6 } from './theory/06-numpy-simd';
import { lesson as l7 } from './theory/07-pandas-optimization';
import { lesson as l8 } from './theory/08-sklearn-pipelines';
import { lesson as l9 } from './theory/09-pytorch-tensors';
import { lesson as l10 } from './theory/10-python-security';

const pythonTitles = [
  "Fase 1: CPython Internals: O GIL e Threads",
  "Fase 1: Metaprogramação: Decoradores de Elite",
  "Fase 1: AsyncIO: Concorrência e Event Loop",
  "Fase 1: Gestão de Memória e Garbage Collection",
  "Fase 2: FastAPI: Escalabilidade e Tipagem Pydantic",
  "Fase 2: NumPy: Vectorização e Instruções SIMD",
  "Fase 2: Pandas: Otimização de DataFrames",
  "Fase 2: Scikit-Learn: Pipelines de Produção",
  "Fase 2: PyTorch: Tensores e Aceleração por GPU",
  "Fase 3: Security: SQLi e Code Injection em Python",
  "Fase 3: Context Managers e o Protocolo 'with'",
  "Fase 3: Descriptors e Data Validation Internals",
  "Fase 3: Metaclasses e Abstract Base Classes (ABCs)",
  "Fase 3: Networking: Sockets e Protocolos Binários",
  "Fase 3: FFI: Chamando Código C com Cython",
  "Fase 4: Profiling: Identificando Gargalos Reais",
  "Fase 4: Microserviços e gRPC com Python",
  "Fase 4: Gestão de Dependências com Poetry",
  "Fase 4: Internals: Bytecode, AST e Máquina de Pilha",
  "Fase 4: Dockerização de Apps Python de Alta Escala",
  "Fase 4: Capstone: Deploy de System Monitor de Elite"
];

const lessonsSource: Record<number, any> = {
  0: l1, 1: l2, 2: l3, 3: l4, 4: l5, 5: l6, 6: l7, 7: l8, 8: l9, 9: l10
};

export const lessons: TheoryLesson[] = pythonTitles.map((title, i) => {
  if (lessonsSource[i]) {
    return {
      ...lessonsSource[i],
      title: title,
      id: `py-m${i + 1}`,
      quizId: `py-mq${i + 1}`
    };
  }

  return {
    id: `py-m${i + 1}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐍 Python Master: ${title}</h2><p>Estudo aprofundado dos internals da linguagem e frameworks de alta performance.</p></div>`,
    quizId: `py-mq${i + 1}`
  };
});
