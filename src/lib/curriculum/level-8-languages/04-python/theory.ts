import { lesson as l1 } from './theory/01-gil-internals';
import { lesson as l2 } from './theory/02-metaprogramming';
import { lesson as l3 } from './theory/03-asyncio';
import { lesson as l4 } from './theory/04-memory-management';
import { lesson as l5 } from './theory/05-fastapi-scaling';
import { lesson as l10 } from './theory/10-final-project';

export const lessons = [
  l1, 
  l2, 
  l3, 
  l4, 
  l5,
  { id: "py-m6", title: "Data Science Stack: NumPy & Pandas", content: "<p>Processamento vetorial e manipulação de DataFrames em larga escala.</p>", quizId: "py-mq6" },
  { id: "py-m7", title: "Machine Learning com Scikit-Learn", content: "<p>Implementação de pipelines de aprendizagem automática e avaliação de modelos.</p>", quizId: "py-mq7" },
  { id: "py-m8", title: "Deep Learning com PyTorch", content: "<p>Construção de tensores, grafos de computação e redes neuronais profundas.</p>", quizId: "py-mq8" },
  { id: "py-m9", title: "Security Best Practices", content: "<p>Prevenção de SQL Injection, Insegurança de Deserialização e gestão de segredos.</p>", quizId: "py-mq9" },
  l10
];
