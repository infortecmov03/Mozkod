
import { lesson as l1 } from './theory/01-big-o';
import { lesson as l2 } from './theory/02-binary-search';
import { lesson as l3 } from './theory/03-sorting-basic';
import { lesson as l4 } from './theory/04-insertion-sort';
import { lesson as l5 } from './theory/05-merge-sort';
import { lesson as l6 } from './theory/06-quick-sort';
import { lesson as l7 } from './theory/07-heap-sort';
import { lesson as l8 } from './theory/08-recursion-master';
import { lesson as l9 } from './theory/09-greedy-strategy';
import { lesson as l10 } from './theory/10-dp-memoization';

const titlesRemaining = [
  "DP II: Tabulation (Bottom-Up)", "Backtracking: Espaço de Estados",
  "Busca em Strings: Algoritmo KMP", "Grafos I: Breadth-First Search (BFS)",
  "Grafos II: Depth-First Search (DFS)", "Dijkstra: Caminhos de Custo Mínimo",
  "Bellman-Ford e Pesos Negativos", "Árvores Geradoras Mínimas (Kruskal/Prim)",
  "Ordenação Topológica em DAGs", "Fluxo Máximo: Ford-Fulkerson",
  "A Fronteira P vs NP"
];

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  ...titlesRemaining.map((title, i) => ({
    id: `alg-t${i + 11}`,
    title: title,
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🧠 Algoritmos: ${title}</h2><p>Exploração técnica profunda sobre a lógica e eficiência de resolução deste problema clássico da computação para engenharia de elite.</p></div>`,
    quizId: `alg-q${i + 11}`
  }))
];
