
import { lesson as l1 } from './theory/01-gil-internals';
import { lesson as l2 } from './theory/02-metaprogramming';
import { lesson as l3 } from './theory/03-asyncio';
import { lesson as l4 } from './theory/04-memory-management';
import { lesson as l5 } from './theory/05-fastapi-scaling';
import { lesson as l20 } from './theory/20-dis-bytecode';

export const lessons = [
  l1, l2, l3, l4, l5,
  ...Array.from({ length: 14 }, (_, i) => ({
    id: `py-m${i + 6}`,
    title: [
      "NumPy: Vectorização e Simd", "Pandas: Otimização de DataFrames", 
      "Scikit-Learn: Pipelines de Produção", "PyTorch: Grafo Dinâmico e Tensores", 
      "Security: SQLi e XSS em Python", "Dockerização de Apps Python de Elite", 
      "CI/CD para Pacotes PyPI", "Decoradores Avançados e Context Managers", 
      "Metaclasses e Abstract Base Classes", "Networking: Sockets e Protocolos Low-level", 
      "C-Extensions com Cython", "Profiling e Benchmarking Rigoroso", 
      "Arquitetura de Microserviços Python", "Gestão de Dependências: Poetry vs Pip"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🐍 Python Master: Deep Engineering</h2><p>Tópico avançado sobre sistemas de larga escala e performance em Python.</p></div>`,
    quizId: `py-mq${i + 6}`
  })),
  l20,
  {
    id: "py-m21",
    title: "Capstone Milestone: Deploy de Produção",
    content: "<p>Finalização e publicação do projeto master.</p>",
    quizId: "py-mq21"
  }
];
