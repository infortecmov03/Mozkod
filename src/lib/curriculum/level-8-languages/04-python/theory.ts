
import type { TheoryLesson } from '../../types';

const pythonTitles = [
  "Fase 1: Zen do Python e Tipagem Dinâmica",
  "Fase 1: Listas, Tuplas e Dicionários Master",
  "Fase 1: List Comprehensions e Geradores",
  "Fase 2: POO: Dunder Methods e Mixins",
  "Fase 2: Decoradores e Metaprogramação",
  "Fase 2: Gestão de Memória e GIL Internals",
  "Fase 3: AsyncIO: Concorrência Assíncrona de Elite",
  "Fase 3: Multiprocessing e Paralelismo Real",
  "Fase 3: Networking: Sockets e Protocolos Binários",
  "Fase 3: FFI: Chamando Código C/Rust com Cython",
  "Fase 4: Web: FastAPI, Pydantic e Gunicorn",
  "Fase 4: Data: NumPy, SIMD e Vectorização",
  "Fase 4: Data: Pandas, Polars e Data Lakes",
  "Fase 4: AI: Scikit-learn e Pipelines de Produção",
  "Fase 4: AI: PyTorch, Tensores e GPU Computing",
  "Fase 4: MLOps: Deployment e Monitorização de Modelos",
  "Fase 4: Segurança: Sanitização e Bytecode Audit",
  "Fase 4: DevOps: Poetry, Docker e CI/CD Industrial",
  "Fase 4: Profiling: Identificando Gargalos de CPU/RAM",
  "Fase 4: Internals: Bytecode, AST e CPython",
  "Fase 4: Capstone: Deploy de System Monitor de Elite"
];

export const lessons: TheoryLesson[] = pythonTitles.map((title, i) => ({
  id: `py-m${i + 1}`,
  title: title,
  content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐍 Python Master: ${title}</h2><p>Exploração profunda da linguagem seguindo o Roadmap industrial.</p></div>`,
  quizId: `py-mq${i + 1}`
}));
