import { lesson as l1 } from './theory/01-gil-internals';
import { lesson as l2 } from './theory/02-metaprogramming';

export const lessons = [
  l1, l2,
  ...Array.from({ length: 19 }, (_, i) => ({
    id: `py-m${i + 3}`,
    title: [
      "AsyncIO: Concorrência de Alta Escala", "Gestão de Memória: GC Internals",
      "FastAPI & Pydantic Internals", "NumPy: Vectorização e Simd",
      "Pandas: Otimização de DataFrames", "Scikit-Learn: Pipelines de Produção",
      "PyTorch: Grafo Dinâmico e Tensores", "Security: SQLi e XSS em Python",
      "Dockerização de Apps Python de Elite", "CI/CD para Pacotes PyPI",
      "Decoradores Avançados e Context Managers", "Metaclasses e Abstract Base Classes",
      "Networking: Sockets e Protocolos Low-level", "C-Extensions com Cython",
      "Profiling e Benchmarking Rigoroso", "Arquitetura de Microserviços Python",
      "Gestão de Dependências: Poetry vs Pip", "Python 3.12+ e o futuro do No-GIL",
      "Capston Milestone: Deploy de Produção"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐍 Python Master: Especialização Técnica</h2><p>Exploração de nível master sobre o comportamento interno da linguagem e sistemas de larga escala.</p></div>`,
    quizId: `py-mq${i + 3}`
  }))
];