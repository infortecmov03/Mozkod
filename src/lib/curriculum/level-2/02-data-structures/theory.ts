import { lesson as l1 } from './theory/01-arrays';
import { lesson as l2 } from './theory/02-linked-lists';
import { lesson as l3 } from './theory/03-stacks';
import { lesson as l4 } from './theory/04-queues';
import { lesson as l5 } from './theory/05-hash-tables';
import { lesson as l6 } from './theory/06-trees';
import { lesson as l7 } from './theory/07-heaps';
import { lesson as l8 } from './theory/08-graphs';
import { lesson as l9 } from './theory/09-avl-trees-balancing';
import { lesson as l10 } from './theory/10-red-black-trees';
import { lesson as l12 } from './theory/12-tries-prefix-trees';
import { lesson as l21 } from './theory/21-data-locality-cache';

const titles = [
  "B-Trees e Indexação de Disco", "Segment Trees e Range Queries", 
  "Union Find (Disjoint Set Union)", "Skip Lists e Estruturas Probabilistas",
  "Bloom Filters e Verificação Espacial", "Internals de Cache LRU",
  "Formatos de Adjacência: Matrix vs List", "Priority Queues Avançadas",
  "Circular Buffers e Gestão de I/O"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  { id: "ds-t11", title: "B-Trees e Indexação de Disco", content: "<p>Otimização de busca em sistemas de ficheiros e bases de dados.</p>", quizId: "ds-q11" },
  l12,
  ...titles.slice(1).map((title, i) => ({
    id: `ds-t${i + 13}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📊 Data Structures: ${title}</h2><p>Estudo da organização física e lógica dos dados para performance extrema.</p></div>`,
    quizId: `ds-q${i + 13}`
  })),
  l21
];
