
import { lesson as l1 } from './theory/01-big-o';
import { lesson as l2 } from './theory/02-busca';
import { lesson as l3 } from './theory/03-ordenacao-basica';
import { lesson as l4 } from './theory/04-ordenacao-avancada';
import { lesson as l5 } from './theory/05-recursao';
import { lesson as l6 } from './theory/06-greedy';
import { lesson as l7 } from './theory/07-dp';
import { lesson as l8 } from './theory/08-grafos';

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8,
  ...Array.from({ length: 13 }, (_, i) => ({
    id: `alg-t${i + 9}`,
    title: [
      "Divide & Conquer", "Backtracking", "Bit Manipulation", "String Matching (KMP)",
      "Heurísticas", "Algoritmos de Fluxo", "Geometria Computacional", "Randomized Algorithms",
      "A* Search", "Dijkstra & Shortest Path", "Min Spanning Tree (Kruskal)",
      "Topological Sort", "Complexidade P vs NP"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>⚡ Lógica de Algoritmos</h2><p>Resolução de problemas complexos com eficiência e elegância matemática.</p></div>`,
    quizId: `alg-q${i + 9}`
  }))
];
