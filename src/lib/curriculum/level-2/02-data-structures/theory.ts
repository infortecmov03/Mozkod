
import { lesson as l1 } from './theory/01-arrays';
import { lesson as l2 } from './theory/02-linked-lists';
import { lesson as l3 } from './theory/03-stacks';
import { lesson as l4 } from './theory/04-queues';
import { lesson as l5 } from './theory/05-hash-tables';
import { lesson as l6 } from './theory/06-trees';
import { lesson as l7 } from './theory/07-heaps';
import { lesson as l8 } from './theory/08-graphs';

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8,
  ...Array.from({ length: 13 }, (_, i) => ({
    id: `ds-t${i + 9}`,
    title: [
      "AVL Trees & Balancing", "Red-Black Trees", "B-Trees & Indexing",
      "Tries (Prefix Trees)", "Segment Trees", "Disjoint Set (Union Find)",
      "Skip Lists", "Bloom Filters", "LRU Cache Internals",
      "Graph: Adjacency Matrix vs List", "Priority Queues", "Circular Buffers",
      "Data Locality & Cache Friendliness"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>📦 Engenharia de Dados</h2><p>Estruturas avançadas para gestão massiva e eficiente de informação.</p></div>`,
    quizId: `ds-q${i + 9}`
  }))
];
